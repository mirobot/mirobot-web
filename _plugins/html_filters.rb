# encoding: utf-8
require 'rubygems'
require 'nokogiri'
require 'iconv'

module Jekyll
  module TruncateHTMLFilter

    def truncatehtml(raw, max_length = 150, remove_images = false, continuation_string = " ...")
     doc = Nokogiri::HTML.fragment(raw.encode('UTF-8', :invalid => :replace, :undef => :replace, :replace => ''))
      current_length = 0;
      done = false
      to_delete = []
      
      depth_first(doc.children.first) do |node|
        if done || (node.name == 'img'  && remove_images)
          to_delete << node
        elsif node.class == Nokogiri::XML::Text
          if current_length + node.text.strip.length > max_length
            node.content = node.text[0..(max_length - current_length)] + continuation_string
            done = true
          else
            current_length += node.text.strip.length
          end
        end
      end

      to_delete.map(&:remove)
      doc.inner_html
    end

  private

    def depth_first(root, &block)
      parent = root.parent
      sibling = root.next
      first_child = root.children.first

      yield(root)

      if first_child
        depth_first(first_child, &block)
      else
        if sibling
          depth_first(sibling, &block)
        else
          # back up to the next sibling
          n = parent
          while n && n.next.nil? && n.name != "document"
            n = n.parent
          end

          # To the sibling - otherwise, we're done!
          if n && n.next
            depth_first(n.next, &block)
          end
        end
      end
    end

  end
end

Liquid::Template.register_filter(Jekyll::TruncateHTMLFilter)


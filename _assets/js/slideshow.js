function Slideshow(id, options){
	options = options || {}
	this.el = document.getElementById(id);
	this.autoplayDelay = options.autoplayDelay || 10000;
	this.order = options.order || 'default';
	this.init();
}
Slideshow.prototype = {
	init: function(){
		var self = this;
		this.slides = Array.prototype.slice.call(this.el.querySelectorAll('.ss-slide'));
		if(this.order === 'random'){
			this.slides.sort(function() { return .5 - Math.random();});
		}
		this.paused = false;
		this.index = this.el.querySelector('.ss-index');
		if(this.index){
			this.index.innerHTML = '';
			for(var i=0; i< this.slides.length; i++){
				var link = document.createElement('a');
				link.href = '#';
				link.innerHTML = i + 1;
				var slideNo = i;
				link.className = 'ss-index-number ss-index-' + i;
				link.addEventListener('click', (function(slide){ return function(e){ return self.showSlide(slide, e) }})(slideNo));
				this.index.appendChild(link);
				this.slides[i].addEventListener('click', function(e){ return self.next(e, true) });
			}
		}
		this.el.querySelector('.ss-prev').addEventListener('click', function(e){ return self.prev(e, true) });
		this.el.querySelector('.ss-next').addEventListener('click', function(e){ return self.next(e, true) });
		this.autoplay();
		this.currentSlide = 0;
		this.showSlide();
	},
	
	autoplay: function(){
		if(this.autoplayDelay && !this.paused){
			var self = this;
			this.autoplayTimeout = window.setTimeout(function(){ self.next() }, this.autoplayDelay);
		}
	},
	
	showSlide: function(slide, e){
		if(typeof slide !== 'undefined'){
			this.currentSlide = slide;
			this.pause();
		}
		for(var i=0; i< this.slides.length; i++){
			if(i == this.currentSlide){
				this.slides[i].className = "ss-slide";
				if(this.index){
					this.index.querySelector('.ss-index-' + i).className = 'ss-index-number ss-index-' + i + ' ss-selected';
				}
			}else{
				this.slides[i].className = "ss-slide ss-hidden";
				if(this.index){
					this.index.querySelector('.ss-index-' + i).className = 'ss-index-number ss-index-' + i;
				}
			}
		}
		if(e) e.preventDefault();
		return false;
	},
	
	pause: function(){
		window.clearTimeout(this.autoplayTimeout);
		this.paused = true;
	},
	
	prev: function(e, manualClick){
		this.currentSlide--;
		if(this.currentSlide < 0){
			this.currentSlide = this.slides.length - 1;
		}
		this.showSlide();
		if(manualClick) this.pause();
		if(e) e.preventDefault();
		return false;
	},
	
	next: function(e, manualClick){
		this.currentSlide++;
		if(this.currentSlide >= this.slides.length){
			this.currentSlide = 0;
		}
		this.showSlide();
		if(manualClick) this.pause();
		this.autoplay();
		if(e) e.preventDefault();
		return false;
	}
	
}
/*---открываем меню на мобильных устройствах---*/
 
 var mobiHover = document.getElementsByClassName('mobi-hover'); 
 
for (let i = 0; i < mobiHover.length; i++) { 
	mobiHover[i].onclick = function(){				
			this.classList.toggle('open');								
	}
}	

var searchImg = document.getElementsByClassName('search-ico');
var searchInput = document.getElementsByTagName('.search-block input[type=search]');

for (let i = 0; i < searchImg.length; i++) {

	searchImg[i].onclick = function(){		
		if(this.className == "search-ico"){
			this.classList.add('open');
		}
		else if(this.className == "search-ico open"){
			this.classList.remove('open');
		}
	}
	
}
/*for (let i = 0; i < searchImg.length; i++) {
	searchInput[i].onblur = function(){
		
	}
}*/
// || searchInput.style.width=="130px"
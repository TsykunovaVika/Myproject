let range = document.querySelector('.number');
let rangeNum = document.querySelector('.range-num');
range.oninput = function () {
    console.log(this.value);
    rangeNum.style.left = this.value + 'px';
    rangeNum.innerHTML = this.value;
};


function burgerMenu(selector) {
	let menu = $(selector);
	let button = menu.find('.burger-menu__button');
	let links = menu.find('.burger-menu__link');
	let overlay = menu.find('.burger-menu__overlay');
	
	button.on('click', (e) => {
		e.preventDefault();
		toggleMenu();
	});
	
	links.on('click',() => toggleMenu());
	overlay.on('click',() => toggleMenu());


	function toggleMenu(){
		menu.toggleClass('burger-menu_active');
		
		if (menu.hasClass('burger-menu_active')) {
			$('body').css('overflow', 'hidden');
		} else {
			$('body').css('overflow', 'visible');
		}
	}
}


burgerMenu ('.burger-menu');
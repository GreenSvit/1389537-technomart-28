var closeButton = document.querySelector('.close-button');
var toBuyButtons = document.querySelectorAll('.to-buy-button');
var addedToCart = document.querySelector('.added-to-cart');
var resumeButton = addedToCart.querySelector('.resume-shopping');
var closeToggles = [ closeButton, resumeButton ];

for (let i = 0; i < toBuyButtons.length; i++) {
	toBuyButtons[i].addEventListener('click', function(evt) {
		evt.preventDefault();
		addedToCart.classList.remove('modal-close');
		addedToCart.classList.add('modal-show');
	});
}

for (let i = 0; i < closeToggles.length; i++) {
	closeToggles[i].addEventListener('click', function(evt) {
		evt.preventDefault();
		addedToCart.classList.add('modal-close');
		setTimeout(() => {
			addedToCart.classList.remove('modal-show');
		}, 390);
		addedToCart.classList.remove('modal-error');
	});
}

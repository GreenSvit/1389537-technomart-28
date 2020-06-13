var contactButton = document.querySelector('.contacts-form-button');
var contactPopup = document.querySelector('.contact-form-window');
var closeButtons = document.querySelectorAll('.close-button');
var nameInput = contactPopup.querySelector('.name-input');
var contactForm = contactPopup.querySelector('.contact-form');
var emailInput = contactPopup.querySelector('.email-input');
var modals = document.querySelectorAll('.modal');
var contactsMap = document.querySelector('.contacts-map');
var bigMap = document.querySelector('.big-map');
var toBuyButtons = document.querySelectorAll('.to-buy-button');
var addedToCart = document.querySelector('.added-to-cart');
var resumeButton = addedToCart.querySelector('.resume-shopping');

var isStorageSupport = true;
var storage = '';

try {
	storage = localStorage.getItem('name');
} catch (err) {
	isStorageSupport = false;
}

contactButton.addEventListener('click', function(evt) {
	evt.preventDefault();
	contactPopup.classList.remove('modal-close');
	contactPopup.classList.add('modal-show');

	if (storage) {
		nameInput.value = storage;
		emailInput.focus();
	} else {
		nameInput.focus();
	}
});

contactsMap.addEventListener('click', function(evt) {
	evt.preventDefault();
	bigMap.classList.remove('modal-close');
	bigMap.classList.add('modal-show');
});

for (let i = 0; i < toBuyButtons.length; i++) {
	toBuyButtons[i].addEventListener('click', function(evt) {
		evt.preventDefault();
		addedToCart.classList.remove('modal-close');
		addedToCart.classList.add('modal-show');
	});
}

for (let i = 0; i < closeButtons.length; i++) {
	closeButtons[i].addEventListener('click', function(evt) {
		evt.preventDefault();
		modals[i].classList.add('modal-close');
		setTimeout(() => {
			modals[i].classList.remove('modal-show');
		}, 390);
		modals[i].classList.remove('modal-error');
	});
}

resumeButton.addEventListener('click', function(evt) {
	evt.preventDefault();
	addedToCart.classList.add('modal-close');
	setTimeout(() => {
		addedToCart.classList.remove('modal-show');
	}, 390);
	addedToCart.classList.remove('modal-error');
});

contactForm.addEventListener('submit', function(evt) {
	if (!nameInput.value || !emailInput.value) {
		evt.preventDefault();
		contactPopup.classList.remove('modal-error');
		contactPopup.offsetWidth = contactPopup.offsetWidth;
		contactPopup.classList.add('modal-error');
	} else {
		if (isStorageSupport) {
			localStorage.setItem('name', nameInput.value);
		}
	}
});

window.addEventListener('keydown', function(evt) {
	if (evt.keyCode === 27) {
		if (contactPopup.classList.contains('modal-show')) {
			evt.preventDefault();
			contactPopup.classList.add('modal-close');
			setTimeout(() => {
				contactPopup.classList.remove('modal-show');
			}, 390);
			contactPopup.classList.remove('modal-error');
		}
	}
});

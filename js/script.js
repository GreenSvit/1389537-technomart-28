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
var serviceControls = document.querySelectorAll('.service-control');
var services = document.querySelectorAll('.service');


for (let i = 0; i < serviceControls.length; i++) {
	serviceControls[i].addEventListener('click', function(evt){
		evt.preventDefault();
		for (let j = 0; j < serviceControls.length; j++) {
			if (j !== i && serviceControls[j].classList.contains('current-service-control')) {
				serviceControls[j].classList.remove('current-service-control');
				services[j].classList.remove('service-current');
			}
		}
		serviceControls[i].classList.add('current-service-control');
		services[i].classList.add('service-current');
	})
}


var isNameExists = true;
var isEmailExists = true;
var userName = '';
var email = '';

try {
	userName = localStorage.getItem('userName');
} catch (err) {
	isNameExists = false;
}


try {
	email = localStorage.getItem('email');
} catch (err) {
	isEmailExists = false;
}



contactButton.addEventListener('click', function(evt) {
	evt.preventDefault();
	contactPopup.classList.remove('modal-close');
	contactPopup.classList.add('modal-show');

	if (userName && email) {
		nameInput.value = userName;
		emailInput.value = email;
	} else {
		if (userName) {
			nameInput.value = userName;
			emailInput.focus();
		}
		if (email) {
			emailInput.value = email;
			nameInput.focus();
		}
		if (!email && !userName) {
			nameInput.focus();
		}
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
		if (isNameExists) {
			localStorage.setItem('userName', nameInput.value);
		}

		if (isEmailExists) {
			localStorage.setItem('email', emailInput.value);
		}
	}
});

window.addEventListener('keydown', function(evt) {
	if (evt.keyCode === 27) {
		for (let i = 0; i < modals.length; i++) {
			if (modals[i].classList.contains('modal-show')) {
				evt.preventDefault();
				modals[i].classList.add('modal-close');
				setTimeout(() => {
					modals[i].classList.remove('modal-show');
				}, 390);
				modals[i].classList.remove('modal-error');
			}
		}
	}
});

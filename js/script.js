var contactButton = document.querySelector('.contacts-form-button');
var contactPopup = document.querySelector('.contact-form-window');
var closeButton = document.querySelector('.close-button');
var nameInput = contactPopup.querySelector('.name-input');
var contactForm = contactPopup.querySelector('.contact-form');
var emailInput = contactPopup.querySelector('.email-input');

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

closeButton.addEventListener('click', function(evt) {
	evt.preventDefault();
	contactPopup.classList.add('modal-close');
	setTimeout(() => {
		contactPopup.classList.remove('modal-show');
	}, 390);
	contactPopup.classList.remove('modal-error');
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

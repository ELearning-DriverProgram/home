// Get the login form container element
const formContainer = document.querySelector('.form-container');

// Get the login form close button element
const formCloseButton = document.querySelector('.form-close');

// Get the login button element
const loginButton = document.querySelector('#form-open');

// Add event listener to the login button click event
loginButton.addEventListener('click', function() {
  formContainer.style.display = 'block';
});

// Add event listener to the form close button click event
formCloseButton.addEventListener('click', function() {
  formContainer.style.display = 'none';
});

// Add event listener to the window click event
window.addEventListener('click', function(event) {
  if (event.target === formContainer) {
    formContainer.style.display = 'none';
  }
});

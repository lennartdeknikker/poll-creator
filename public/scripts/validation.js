const forms = document.querySelectorAll('form');

for (form of forms) {
  const formElements = form.querySelectorAll('textarea, input');

  form.addEventListener('submit', function checkAllInput() {
    for (element of formElements) {
      const value = element.value
      if (!value) {
        event.preventDefault();
        element.placeholder = 'Sorry, this field is required.'
        element.classList.add('wrong-input')
      }
    }
  })
}

console.log('form validation initialized');
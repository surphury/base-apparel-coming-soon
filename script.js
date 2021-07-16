/* All HTMLElements have a "$" at the beginning */
const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const $form = document.getElementById('form'),
    $emailInput = document.getElementById('emailInput'),
    $validator = document.getElementById('validator'),
    $warning = document.getElementById('warning');

$form.addEventListener('submit', (e) => {
    e.preventDefault();
});
$emailInput.addEventListener('input', function () {
    const isAValidEmail = emailRegex.test($emailInput.value.trim());
    if (isAValidEmail || this.value.length === 0){
        $validator.removeAttribute('invalidated');
        $warning.textContent = '';
        $form.classList.remove('red')
    } else {
        $validator.setAttribute('invalidated', ''),
        $warning.textContent = 'Please provide a valid email';
        $form.classList.add('red')
    }
})
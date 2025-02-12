document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('avatar').src = e.target.result;
        }
        reader.readAsDataURL(file);
    }
});

function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (name && email) {
        alert(`Дякуємо, ${name}! Ваш email: ${email} збережено.`);
    } else {
        alert('Будь ласка, заповніть всі поля.');
    }
}

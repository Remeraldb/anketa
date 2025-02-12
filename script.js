document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const avatar = document.getElementById('avatar');
            avatar.src = e.target.result;
            avatar.style.display = 'block';
        }
        reader.readAsDataURL(file);
    }
});

function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const termsAccepted = document.getElementById('terms').checked;
    
    if (!name || !email) {
        alert('Будь ласка, заповніть всі поля.');
        return;
    }
    if (!termsAccepted) {
        alert('Ви повинні погодитися з умовами використання.');
        return;
    }
    
    alert(`Дякуємо, ${name}! Ваш email: ${email} збережено.`);
}

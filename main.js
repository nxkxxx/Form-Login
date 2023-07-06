const form = document.querySelector('form'); // Mengambil nilai form
const passwordInput = document.getElementById('password')
const showPasswordCheckbox = document.getElementById('showPassword')

form.addEventListener('submit', function (event) { // Menambahkan event listener pada saat form disubmit
    event.preventDefault(); // Mencegah form dikirim secara default

    const email = document.getElementById('email').value; // Mendapatkan nilai email dan password dari input
    const password = document.getElementById('password').value;

    localStorage.setItem('email', email); // Menyimpan email dan password ke dalam local storage
    localStorage.setItem('password', password);
});

showPasswordCheckbox.addEventListener('change', function () {
    passwordInput.type = this.checked ? 'text' : 'password'; // Membuat tipe password menjadi 'text' ketika checkbox di-check, dan merubah inputnya menjadi 'password ketika di-uncheck
})



// CARA LAINNYA
// showPasswordCheckbox.addEventListener("change", function () {
//     if (this.checked) {
//         passwordInput.type = 'text';
//     } else {
//         passwordInput.type = 'password';
//     }
// })
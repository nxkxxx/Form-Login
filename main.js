const form = document.querySelector('form'); // Mengambil nilai form
const passwordInput = document.getElementById('password')
const showPasswordCheckbox = document.getElementById('showPassword')

form.addEventListener('submit', function (event) { // Menambahkan event listener pada saat form disubmit
    event.preventDefault(); // Mencegah form dikirim secara default

    // Mendapatkan nilai email dan password dari input
    const email = document.getElementById('email').value; 
    const password = document.getElementById('password').value;

    // Menyimpan email dan password ke dalam local storage
    localStorage.setItem('email', email); 
    localStorage.setItem('password', password);
});

showPasswordCheckbox.addEventListener('change', function () {
    // Membuat tipe password menjadi 'text' ketika checkbox di-check, dan merubah inputnya menjadi 'password ketika di-uncheck
    passwordInput.type = this.checked ? 'text' : 'password'; 
})


// CARA LAINNYA
// showPasswordCheckbox.addEventListener("change", function () {
//     if (this.checked) {
//         passwordInput.type = 'text';
//     } else {
//         passwordInput.type = 'password';
//     }
// })
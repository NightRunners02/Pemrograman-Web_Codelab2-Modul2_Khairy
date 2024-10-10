function validateForm() {
    // Ambil nilai dari input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;

    // Reset pesan error sebelumnya
    document.getElementById('nameError').style.display = 'none';
    document.getElementById('emailError').style.display = 'none';
    document.getElementById('addressError').style.display = 'none';

    let isValid = true;

    // Validasi untuk input kosong
    if (!name || !email || !address) {
        alert('Semua kolom harus diisi!');
        return false;  // Menghentikan pengiriman form
    }

    // Validasi nama (harus minimal 3 karakter)
    if (name.length < 3) {
        document.getElementById('nameError').style.display = 'block';
        document.getElementById('nameError').innerText = 'Nama harus minimal 3 karakter';
        isValid = false;
    }

    // Validasi email (harus format email yang benar)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').style.display = 'block';
        document.getElementById('emailError').innerText = 'Email tidak valid';
        isValid = false;
    }

    // Validasi alamat lengkap (harus minimal 10 karakter)
    if (address.length < 10) {
        document.getElementById('addressError').style.display = 'block';
        document.getElementById('addressError').innerText = 'Alamat harus minimal 10 karakter';
        isValid = false;
    }

    // Return false jika validasi gagal, untuk mencegah form submit
    return isValid;
}

document.getElementById('btnHitung').addEventListener('click', hitungOperasi);

function hitungOperasi() {
    const val1 = document.getElementById('angkaPertama').value;
    const val2 = document.getElementById('angkaKedua').value;
    const operasi = document.getElementById('operasi').value;
    const hasilBox = document.getElementById('hasilBox');

    if (val1 === '' || val2 === '') {
        hasilBox.style.display = 'block';
        hasilBox.style.color = '#dc3545';
        hasilBox.innerText = 'Harap isi kedua angka!';
        return;
    }

    const num1 = parseFloat(val1);
    const num2 = parseFloat(val2);
    let hasil = 0;

    switch (operasi) {
        case 'Penjumlahan':
            hasil = num1 + num2;
            break;
        case 'Pengurangan':
            hasil = num1 - num2;
            break;
        case 'Perkalian':
            hasil = num1 * num2;
            break;
        case 'Pembagian':
            if (num2 === 0) {
                hasilBox.style.display = 'block';
                hasilBox.style.color = '#dc3545';
                hasilBox.innerText = 'Pembagian dengan angka 0 tidak valid!';
                return;
            }
            hasil = num1 / num2;
            break;
    }

    hasilBox.style.display = 'block';
    hasilBox.style.color = '#28a745';
    hasilBox.innerText = `Hasil ${operasi}: ${hasil}`;
}
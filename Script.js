// Elemen-elemen DOM
const ussdForm = document.getElementById('ussdForm');
const ussdInput = document.getElementById('ussdInput');
const menuUtama = document.getElementById('menu-utama');
const inputUssd = document.getElementById('input-ussd');
const transferPulsa = document.getElementById('transfer-pulsa');
const mintaPulsa = document.getElementById('minta-pulsa');
const autoTp = document.getElementById('auto-tp');
const deleteAutoTp = document.getElementById('delete-auto-tp');
const listAutoTp = document.getElementById('list-auto-tp');
const cekKuponTp = document.getElementById('cek-kupon-tp');
const message = document.getElementById('message');
const messageText = document.getElementById('messageText');
let autoTpList = [];

// Halaman input USSD
ussdForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah reload halaman

    const ussdCode = ussdInput.value.trim();

    if (ussdCode === '*858#') {
        inputUssd.style.display = 'none'; // Sembunyikan input USSD
        menuUtama.style.display = 'block'; // Tampilkan menu utama
    } else {
        alert('Kode USSD salah! Silahkan coba lagi.');
    }
});

// Fungsi untuk memilih menu berdasarkan nomor input
const menuForm = document.getElementById('menuForm');
menuForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const menuNumber = parseInt(document.getElementById('menuNumber').value.trim());
    
    // Sembunyikan menu utama
    menuUtama.style.display = 'none'; 

    // Arahkan pengguna ke fitur berdasarkan nomor input
    switch(menuNumber) {
        case 1:
            transferPulsa.style.display = 'block'; // Tampilkan halaman Transfer Pulsa
            break;
        case 2:
            mintaPulsa.style.display = 'block'; // Tampilkan halaman Minta Pulsa
            break;
        case 3:
            autoTp.style.display = 'block'; // Tampilkan halaman Auto TP
            break;
        case 4:
            deleteAutoTp.style.display = 'block'; // Tampilkan halaman Delete Auto TP
            break;
        case 5:
            listAutoTp.style.display = 'block'; // Tampilkan halaman List Auto TP
            displayAutoTpList();
            break;
        case 6:
            cekKuponTp.style.display = 'block'; // Tampilkan halaman Cek Kupon TP
            break;
        default:
            showMessage("Menu tidak tersedia.");
            break;
    }
});

// Fungsi untuk halaman Auto TP
document.getElementById('autoTpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nomor = document.getElementById('autoTpNumber').value.trim();
    const jumlah = document.getElementById('autoTpAmount').value.trim();
    autoTpList.push({ nomor, jumlah });
    showMessage(`Auto TP sebesar Rp${jumlah} untuk nomor ${nomor} berhasil diaktifkan.`);
});

// Fungsi untuk halaman Delete Auto TP
document.getElementById('deleteAutoTpForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nomor = document.getElementById('deleteAutoTpNumber').value.trim();
    autoTpList = autoTpList.filter(item => item.nomor !== nomor);
    showMessage(`Auto TP untuk nomor ${nomor} berhasil dihapus.`);
});

// Fungsi untuk menampilkan List Auto TP
function displayAutoTpList() {
    const autoTpListElement = document.getElementById('autoTpList');
    if (autoTpList.length === 0) {
        autoTpListElement.textContent = "Belum ada Auto TP yang aktif.";
    } else {
        autoTpListElement.innerHTML = autoTpList.map(item => `Nomor: ${item.nomor}, Jumlah: Rp${item.jumlah}`).join('<br>');
    }
}

// Fungsi untuk halaman Transfer Pulsa
document.getElementById('transferForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nomor = document.getElementById('transferNumber').value.trim();
    const jumlah = document.getElementById('transferAmount').value.trim();
    showMessage(`Transfer pulsa sebesar Rp${jumlah} ke nomor ${nomor} berhasil.`);
});

// Fungsi untuk halaman Minta Pulsa
document.getElementById('mintaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nomor = document.getElementById('mintaNumber').value.trim();
    const jumlah = document.getElementById('mintaAmount').value.trim();
    showMessage(`Permintaan pulsa sebesar Rp${jumlah} ke nomor ${nomor} berhasil.`);
});

// Fungsi untuk menampilkan pesan sukses
function showMessage(text) {
    // Sembunyikan semua halaman selain pesan
    transferPulsa.style.display = 'none';
    mintaPulsa.style.display = 'none';
    autoTp.style.display = 'none';
    deleteAutoTp.style.display = 'none';
    listAutoTp.style.display = 'none';
    cekKuponTp.style.display = 'none';
    messageText.textContent = text;
    message.style.display = 'block'; // Tampilkan pesan
}

// Fungsi untuk kembali ke menu utama
function goBack() {
    // Sembunyikan semua halaman
    transferPulsa.style.display = 'none';
    mintaPulsa.style.display = 'none';
    autoTp.style.display = 'none';
    deleteAutoTp.style.display = 'none';
    listAutoTp.style.display = 'none';
    cekKuponTp.style.display = 'none';
    message.style.display = 'none';
    menuUtama.style.display = 'block'; // Tampilkan menu utama
}

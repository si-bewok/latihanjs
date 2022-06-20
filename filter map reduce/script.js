// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya yang jalan2
let jalan = videos.filter(video => video.innerHTML.includes('JALAN-JALAN'))

// ambil durasi masing2 video
.map(Data => Data.dataset.duration)

// ubah durasi menjadi float, ubah menit menjadi detik
.map(waktu => {
    // split
    const minSec = waktu.split(':').map(num => parseFloat(num));
    return (minSec[0] * 60) + minSec[1];
})

// jumlahkan semua detik
.reduce((total, detik) => total + detik);

// ubah formatnya jadi jam menit detik
const jam = Math.floor(jalan / 3600);
jalan = jalan - jam * 3600;
// itung sisanya
const menit = Math.floor(jalan / 60);
const detik = jalan - menit * 60;

// ambil jumlah video
const jmlVideo = videos.filter(video => video.innerHTML.includes('JALAN-JALAN')).length;

// simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.innerHTML = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.innerHTML = `${jmlVideo} Video`;


const nama = 'Zhafari';
const umur = 23;

function halo(strings, ...args) {
    return strings.reduce((result, str, i) => `${result}${str}<span class = "hl">${args[i] || ''}</span>`, ''); 
}

const str = halo`Nama saya ${nama}, saya berumur ${umur} tahun.`;
const hl = document.querySelector('.halo');
hl.innerHTML = str;


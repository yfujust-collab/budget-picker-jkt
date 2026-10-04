// Format angka jadi Rupiah, contoh: 25000 -> "Rp25.000"
function formatRupiah(angka) {
  return "Rp" + angka.toLocaleString("id-ID");
}

// Tampilkan daftar hasil ke dalam <ul id="daftar-hasil">
function tampilkanHasil(daftar) {
  const ul = document.getElementById("daftar-hasil");
  const info = document.getElementById("hasil-info");
  ul.innerHTML = "";

  if (daftar.length === 0) {
    info.textContent = "Yah, nggak ada yang masuk budget segitu. Coba naikkan budgetnya!";
    return;
  }

  info.textContent = "Ketemu " + daftar.length + " kuliner yang masuk budget:";

  daftar.forEach(function (item) {
    const li = document.createElement("li");
    li.className = "kartu";

    const nama = document.createElement("span");
    nama.className = "nama";
    nama.textContent = item.nama;

    const harga = document.createElement("span");
    harga.className = "harga";
    harga.textContent = formatRupiah(item.harga);

    li.appendChild(nama);
    li.appendChild(harga);
    ul.appendChild(li);
  });
}

// Dipanggil saat form disubmit
document.getElementById("form-budget").addEventListener("submit", function (event) {
  event.preventDefault(); // biar halaman nggak reload

  const budget = parseInt(document.getElementById("input-budget").value, 10);
  const kategoriDipilih = document.querySelector('input[name="kategori"]:checked').value;

  // Saring: harga <= budget, dan kategori sesuai pilihan
  let hasil = DAFTAR_KULINER.filter(function (item) {
    const masukBudget = item.harga <= budget;
    const masukKategori = kategoriDipilih === "semua" || item.kategori === kategoriDipilih;
    return masukBudget && masukKategori;
  });

  // Urutkan dari harga termurah
  hasil.sort(function (a, b) {
    return a.harga - b.harga;
  });

  tampilkanHasil(hasil);
});

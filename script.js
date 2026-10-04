// data kuliner
    const DAFTAR_KULINER = [
      { nama: "Siomay", harga: 10000, kategori: "makanan", foto: "src/img-01.jpg", area: ["Blok M", "Jakarta Selatan"], tempat: "gerobak sekitar Blok M dan terminal", deskripsi: "Olahan ikan kukus dengan tahu, kentang, kol, dan saus kacang." },
      { nama: "Batagor", harga: 10000, kategori: "makanan", foto: "src/img-02.jpg", area: ["Tebet", "Jakarta Selatan"], tempat: "jajanan sore di Tebet", deskripsi: "Tahu dan adonan ikan goreng renyah, disiram saus kacang dan kecap." },
      { nama: "Bubur Ayam", harga: 12000, kategori: "makanan", foto: "src/img-03.jpg", area: ["Menteng", "Jakarta Pusat"], tempat: "penjual sarapan di Menteng", deskripsi: "Bubur nasi gurih dengan suwiran ayam, cakwe, daun bawang, dan kerupuk." },
      { nama: "Mie Ayam", harga: 12000, kategori: "makanan", foto: "src/img-04.jpg", area: ["Jatinegara", "Jakarta Timur"], tempat: "gerobak dan pasar sekitar Jatinegara", deskripsi: "Mie rebus dengan ayam berbumbu manis-gurih, sawi, dan kuah terpisah." },
      { nama: "Ketoprak", harga: 12000, kategori: "makanan", foto: "src/img-05.jpg", area: ["Blok M", "Jakarta Selatan"], tempat: "kaki lima sekitar Blok M", deskripsi: "Lontong, bihun, tahu, dan tauge yang diulek dengan saus kacang." },
      { nama: "Gado-Gado", harga: 13000, kategori: "makanan", foto: "src/img-06.jpg", area: ["Menteng", "Jakarta Pusat"], tempat: "warung makan rumahan di Menteng", deskripsi: "Sayuran rebus, tahu, tempe, dan telur dengan bumbu kacang kental." },
      { nama: "Nasi Uduk", harga: 12000, kategori: "makanan", foto: "src/img-07.jpg", area: ["Tanah Abang", "Jakarta Pusat"], tempat: "sekitar Kebon Kacang dan Tanah Abang", deskripsi: "Nasi santan harum yang biasa disajikan bersama bihun, orek, dan sambal." },
      { nama: "Lontong Sayur", harga: 12000, kategori: "makanan", foto: "src/img-08.jpg", area: ["Kelapa Gading", "Jakarta Utara"], tempat: "kedai sarapan di Kelapa Gading", deskripsi: "Lontong dengan kuah santan bersayur, telur, dan kerupuk." },
      { nama: "Roti Bakar", harga: 12000, kategori: "makanan", foto: "src/img-09.jpg", area: ["Tebet", "Jakarta Selatan"], tempat: "warkop daerah Tebet", deskripsi: "Roti panggang isi cokelat, keju, atau selai yang cocok untuk nongkrong." },
      { nama: "Pempek", harga: 12000, kategori: "makanan", foto: "src/img-10.jpg", area: ["Kemang", "Jakarta Selatan"], tempat: "kedai jajanan di Kemang", deskripsi: "Olahan ikan dan sagu khas Palembang, dinikmati dengan kuah cuko." },
      { nama: "Bakso", harga: 13000, kategori: "makanan", foto: "src/img-11.jpg", area: ["Jatinegara", "Jakarta Timur"], tempat: "gerobak dan warung sekitar Jatinegara", deskripsi: "Bola daging dalam kuah kaldu dengan mie, bihun, tahu, dan sawi." },
      { nama: "Ayam Geprek", harga: 13000, kategori: "makanan", foto: "src/img-12.jpg", area: ["Tebet", "Jakarta Selatan"], tempat: "warung makan mahasiswa di Tebet", deskripsi: "Ayam goreng tepung yang digeprek bersama sambal bawang pedas." },
      { nama: "Indomie Telor (Warkop)", harga: 13000, kategori: "makanan", foto: "src/img-13.jpg", area: ["Pasar Santa", "Jakarta Selatan"], tempat: "warkop sekitar Pasar Santa", deskripsi: "Mi instan rebus atau goreng dengan telur, versi andalan warkop." },
      { nama: "Soto Ayam", harga: 14000, kategori: "makanan", foto: "src/img-14.jpg", area: ["Menteng", "Jakarta Pusat"], tempat: "warung makan siang di Menteng", deskripsi: "Kuah kuning hangat berisi ayam, soun, kol, dan taburan bawang." },
      { nama: "Nasi Goreng Tek-Tek", harga: 15000, kategori: "makanan", foto: "src/img-15.jpg", area: ["Kota Tua", "Jakarta Barat"], tempat: "pedagang malam sekitar Kota Tua", deskripsi: "Nasi goreng gerobakan bercita rasa kecap, biasa dimasak saat dipesan." },
      { nama: "Pecel Lele", harga: 15000, kategori: "makanan", foto: "src/img-16.jpg", area: ["Glodok", "Jakarta Barat"], tempat: "tenda makan malam di Glodok", deskripsi: "Lele goreng dengan nasi, lalapan, dan sambal terasi." },
      { nama: "Martabak Mini", harga: 15000, kategori: "makanan", foto: "src/img-17.jpg", area: ["Kelapa Gading", "Jakarta Utara"], tempat: "lapak jajanan di Kelapa Gading", deskripsi: "Martabak manis ukuran kecil dengan topping meses, keju, atau kacang." },
      { nama: "Ayam Penyet", harga: 18000, kategori: "makanan", foto: "src/img-18.jpg", area: ["Jatinegara", "Jakarta Timur"], tempat: "warung makan sekitar Jatinegara", deskripsi: "Ayam goreng yang dipenyet bersama sambal, lalapan, tahu, dan tempe." },
      { nama: "Nasi Padang (Paket Hemat)", harga: 20000, kategori: "makanan", foto: "src/img-19.jpg", area: ["Tanah Abang", "Jakarta Pusat"], tempat: "rumah makan sekitar Tanah Abang", deskripsi: "Nasi dengan lauk dan kuah gulai khas Minang dalam porsi hemat." },
      { nama: "Sate Ayam (10 Tusuk)", harga: 20000, kategori: "makanan", foto: "src/img-20.jpg", area: ["Blok M", "Jakarta Selatan"], tempat: "pedagang malam dekat Blok M", deskripsi: "Sepuluh tusuk ayam bakar dengan bumbu kacang, kecap, dan lontong." },
      { nama: "Es Teh Manis", harga: 5000, kategori: "minuman", foto: "src/img-21.jpg", area: ["Kota Tua", "Jakarta Barat"], tempat: "warung dan kios sekitar Kota Tua", deskripsi: "Teh manis dingin sederhana yang mudah dipasangkan dengan menu apa saja." },
      { nama: "Es Jeruk", harga: 7000, kategori: "minuman", foto: "src/img-22.jpg", area: ["Glodok", "Jakarta Barat"], tempat: "kedai makan dan pasar Glodok", deskripsi: "Perasan jeruk dengan gula dan es, rasanya segar manis-asam." },
      { nama: "Kopi Tubruk", harga: 8000, kategori: "minuman", foto: "src/img-23.jpg", area: ["Menteng", "Jakarta Pusat"], tempat: "kedai kopi sederhana di Menteng", deskripsi: "Kopi bubuk yang diseduh langsung sehingga ampasnya mengendap di dasar." },
      { nama: "Bandrek", harga: 8000, kategori: "minuman", foto: "src/img-24.jpg", area: ["Jatinegara", "Jakarta Timur"], tempat: "penjual minuman malam di Jatinegara", deskripsi: "Minuman jahe hangat dengan gula merah dan rempah." },
      { nama: "Es Cendol", harga: 10000, kategori: "minuman", foto: "src/img-25.jpg", area: ["Kota Tua", "Jakarta Barat"], tempat: "gerobak minuman sekitar Kota Tua", deskripsi: "Cendol hijau dengan santan, es, dan sirup gula merah." },
      { nama: "Susu Jahe", harga: 10000, kategori: "minuman", foto: "src/img-26.jpg", area: ["Tebet", "Jakarta Selatan"], tempat: "warkop malam daerah Tebet", deskripsi: "Susu hangat bercampur jahe, manis dan menghangatkan." },
      { nama: "Thai Tea", harga: 12000, kategori: "minuman", foto: "src/img-27.jpg", area: ["Kelapa Gading", "Jakarta Utara"], tempat: "kios minuman di Kelapa Gading", deskripsi: "Teh susu dingin berwarna jingga dengan rasa manis dan creamy." },
      { nama: "Es Kelapa Muda", harga: 12000, kategori: "minuman", foto: "src/img-28.jpg", area: ["Kepulauan Seribu", "Jakarta Utara"], tempat: "warung pesisir dan dermaga Kepulauan Seribu", deskripsi: "Air dan daging kelapa muda dengan es serta sedikit sirup atau gula." },
      { nama: "Jus Alpukat", harga: 15000, kategori: "minuman", foto: "src/img-29.jpg", area: ["Pasar Santa", "Jakarta Selatan"], tempat: "kios jus sekitar Pasar Santa", deskripsi: "Alpukat diblender kental, biasanya diberi susu atau saus cokelat." },
      { nama: "Kopi Susu Gula Aren", harga: 18000, kategori: "minuman", foto: "src/img-30.jpg", area: ["Kemang", "Jakarta Selatan"], tempat: "kedai kopi kecil di Kemang", deskripsi: "Espresso, susu, dan gula aren dengan rasa manis-karamel." }
    ];

// format harga
    function formatRupiah(angka) {
      return "Rp " + angka.toLocaleString("id-ID");
    }

    function sortedItems(items) {
      return items.slice().sort(function(a, b) {
        return a.harga - b.harga || a.nama.localeCompare(b.nama, "id");
      });
    }

    // buat kartu kuliner
    function makeRow(item, index, showBadge) {
      const li = document.createElement("li");
      li.className = "food-row";

      const photo = document.createElement("img");
      photo.className = "food-photo";
      photo.src = item.foto;
      photo.alt = item.nama + " khas kaki lima";

      const content = document.createElement("div");
      const name = document.createElement("div");
      name.className = "food-name";
      name.textContent = item.nama;
      content.appendChild(name);

      if (showBadge) {
        const meta = document.createElement("div");
        meta.className = "food-meta";
        const badge = document.createElement("span");
        badge.className = "category-badge" + (item.kategori === "minuman" ? " drink" : "");
        badge.textContent = item.kategori;
        meta.appendChild(badge);
        content.appendChild(meta);
      }
      const place = document.createElement("div");
      place.className = "food-place";
      place.textContent = item.tempat;
      content.appendChild(place);
      if (item.near) {
        const near = document.createElement("span");
        near.className = "near-badge";
        near.textContent = "Dekat dari lokasimu";
        content.appendChild(near);
      }

      const price = document.createElement("span");
      price.className = "price";
      price.textContent = formatRupiah(item.harga);

      li.appendChild(photo);
      li.appendChild(content);
      li.appendChild(price);
      return li;
    }

    function renderList(targetId, items, showBadge) {
      const target = document.getElementById(targetId);
      target.innerHTML = "";
      items.forEach(function(item, index) {
        target.appendChild(makeRow(item, index, showBadge));
      });
    }

    const allSorted = sortedItems(DAFTAR_KULINER);
    renderList("jelajah-list", allSorted, true);
    renderList("kategori-list", allSorted, true);
    document.getElementById("jelajah-info").textContent = allSorted.length + " hasil";
    document.getElementById("kategori-info").textContent = allSorted.length + " hasil";

    function renderDetails() {
      const target = document.getElementById("detail-list");
      DAFTAR_KULINER.forEach(function(item) {
        const details = document.createElement("details");
        details.className = "detail-item";
        const summary = document.createElement("summary");
        const img = document.createElement("img"); img.src = item.foto; img.alt = item.nama;
        const label = document.createElement("span");
        label.textContent = item.nama;
        const meta = document.createElement("span"); meta.className = "detail-summary-meta"; meta.textContent = formatRupiah(item.harga) + " · " + item.kategori;
        label.appendChild(meta); summary.appendChild(img); summary.appendChild(label);
        const body = document.createElement("div"); body.className = "detail-body";
        const desc = document.createElement("p"); desc.textContent = item.deskripsi;
        const where = document.createElement("p"); where.innerHTML = "<strong>Tempat:</strong> " + item.tempat + " (" + item.area.join(", ") + ").";
        body.appendChild(desc); body.appendChild(where); details.appendChild(summary); details.appendChild(body); target.appendChild(details);
      });
    }
    renderDetails();

    // pindah halaman
    function showPage(pageId) {
      const validPage = document.getElementById(pageId) && document.getElementById(pageId).classList.contains("page") ? pageId : "beranda";
      document.querySelectorAll(".page").forEach(function(page) {
        page.classList.toggle("active", page.id === validPage);
      });
      document.querySelectorAll(".nav-link").forEach(function(link) {
        if (link.dataset.page === validPage) {
          link.setAttribute("aria-current", "page");
        } else {
          link.removeAttribute("aria-current");
        }
      });
      document.getElementById("main-nav").classList.remove("open");
      document.querySelector(".menu-toggle").setAttribute("aria-expanded", "false");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    function syncRoute() {
      showPage(window.location.hash.replace("#", "") || "beranda");
    }

    window.addEventListener("hashchange", syncRoute);
    syncRoute();

    const menuToggle = document.querySelector(".menu-toggle");
    menuToggle.addEventListener("click", function() {
      const nav = document.getElementById("main-nav");
      const isOpen = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // cari sesuai budget dan lokasi
    document.getElementById("form-budget").addEventListener("submit", function(event) {
      event.preventDefault();
      const budget = Number(document.getElementById("input-budget").value);
      const kategori = document.getElementById("kategori-budget").value;
      const lokasi = document.getElementById("lokasi-budget").value;
      let hasil = DAFTAR_KULINER.filter(function(item) {
        return item.harga <= budget && (kategori === "semua" || item.kategori === kategori);
      }).map(function(item) {
        return Object.assign({}, item, { near: lokasi !== "semua" && item.area.includes(lokasi) });
      });
      hasil.sort(function(a, b) { return Number(b.near) - Number(a.near) || a.harga - b.harga || a.nama.localeCompare(b.nama, "id"); });
      const hasNearby = hasil.some(function(item) { return item.near; });
      const empty = document.getElementById("hasil-empty");
      const info = document.getElementById("hasil-info");
      empty.hidden = hasil.length > 0;
      empty.textContent = "Belum ada pilihan yang masuk di budget " + formatRupiah(budget) + ". Coba naikkan sedikit batasnya.";
      if (lokasi === "semua") {
        info.textContent = "Pilihan yang masuk budget " + formatRupiah(budget);
      } else if (hasNearby) {
        info.textContent = "Ada pilihan dekat " + lokasi + " yang masuk budget";
      } else {
        info.textContent = "Belum ada yang ditandai dekat " + lokasi + "; coba pilihan dari area lain";
      }
      renderList("daftar-hasil", hasil, true);
      document.getElementById("hasil-beranda").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    let activeFilter = "semua";
    function updateBrowse() {
      const query = document.getElementById("jelajah-search").value.trim().toLocaleLowerCase("id");
      const hasil = allSorted.filter(function(item) {
        const categoryMatch = activeFilter === "semua" || item.kategori === activeFilter;
        return categoryMatch && item.nama.toLocaleLowerCase("id").includes(query);
      });
      renderList("jelajah-list", hasil, true);
      document.getElementById("jelajah-info").textContent = hasil.length + " hasil";
    }

    document.getElementById("jelajah-search").addEventListener("input", updateBrowse);
    document.querySelectorAll(".filter-button").forEach(function(button) {
      button.addEventListener("click", function() {
        activeFilter = button.dataset.filter;
        document.querySelectorAll(".filter-button").forEach(function(item) {
          item.classList.toggle("active", item === button);
        });
        updateBrowse();
      });
    });

    function updateCategory() {
      const jenis = document.getElementById("filter-jenis").value;
      const wilayah = document.getElementById("filter-wilayah").value;
      const hasil = allSorted.filter(function(item) {
        return (jenis === "semua" || item.kategori === jenis) && (wilayah === "semua" || item.area.includes(wilayah));
      });
      renderList("kategori-list", hasil, true);
      document.getElementById("kategori-info").textContent = hasil.length + " hasil";
    }
    document.getElementById("filter-jenis").addEventListener("change", updateCategory);
    document.getElementById("filter-wilayah").addEventListener("change", updateCategory);

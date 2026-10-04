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


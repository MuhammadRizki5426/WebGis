// Global variables
let map;
let markers;
let currentEditingId = null;
let bengkelData = [];
let currentUser = null;
let isLoggedIn = false;
let userRole = null;

// Data bengkel (30 titik)
const defaultBengkelData = [
  {
    id: 1,
    name: "Bengkel Global Motor Palu",
    type: "motor",
    area: "barat",
    address: "Jl. Dr. Sutomo No. 45, Palu Barat",
    lat: -0.8930486,
    lng: 119.8770235,
    rating: 4.3,
  },
  {
    id: 2,
    name: "Bengkel Intan Belawa Motor",
    type: "motor",
    area: "barat",
    address: "Jl. Emmi Saelan No. 12, Palu Barat",
    lat: -0.8820763,
    lng: 119.8768099,
    rating: 4.1,
  },
  {
    id: 3,
    name: "Bengkel Mobil Body Repair Palu",
    type: "mobil",
    area: "selatan",
    address: "Jl. Veteran No. 33, Palu Selatan",
    lat: -0.9331461,
    lng: 119.9015683,
    rating: 4.5,
  },
  {
    id: 4,
    name: "Bengkel Mobil DOMIKADO TATA AUTO",
    type: "mobil",
    area: "timur",
    address: "Jl. Gatot Subroto No. 24, Palu Timur",
    lat: -0.8996068,
    lng: 119.8862587,
    rating: 4.4,
  },
  {
    id: 5,
    name: "Djhon Bengkel Full Variasi",
    type: "umum",
    area: "timur",
    address: "Jl. Monginsidi No. 56, Palu Timur",
    lat: -0.8968274,
    lng: 119.8919387,
    rating: 4.2,
  },
  {
    id: 6,
    name: "Bengkel Mobil AMPIBI MANDIRI",
    type: "mobil",
    area: "timur",
    address: "Jl. Pangeran Diponegoro No. 67, Palu Timur",
    lat: -0.8830932,
    lng: 119.8891923,
    rating: 4.6,
  },
  {
    id: 7,
    name: "Bengkel Motor 78Motor",
    type: "motor",
    area: "timur",
    address: "Jl. Hasanuddin No. 89, Palu Timur",
    lat: -0.9040493,
    lng: 119.8792991,
    rating: 4.0,
  },
  {
    id: 8,
    name: "Bengkel Resmi KAWASAKI Palu",
    type: "motor",
    area: "timur",
    address: "Jl. Kartini No. 78, Palu Timur",
    lat: -0.9016373,
    lng: 119.8843815,
    rating: 4.7,
  },
  {
    id: 9,
    name: "Bengkel Motor S.PARMAN",
    type: "motor",
    area: "barat",
    address: "Jl. Dr. Sutomo No. 45, Palu Barat",
    lat: -0.8884586,
    lng: 119.8785015,
    rating: 4.3,
  },
  {
    id: 10,
    name: "Bengkel Motor 34",
    type: "motor",
    area: "timur",
    address: "Jl. Emmi Saelan No. 12, Palu Timur",
    lat: -0.9005055,
    lng: 119.9061357,
    rating: 4.1,
  },
  {
    id: 11,
    name: "Surya Motor Variasi Palu",
    type: "motor",
    area: "barat",
    address: "Jl. Veteran No. 33, Palu Barat",
    lat: -0.8923778,
    lng: 119.8334452,
    rating: 4.5,
  },
  {
    id: 12,
    name: "Bengkel Afra",
    type: "umum",
    area: "timur",
    address: "Jl. Gatot Subroto No. 24, Palu Timur",
    lat: -0.8839209,
    lng: 119.8868081,
    rating: 4.4,
  },
  {
    id: 13,
    name: "Bengkel RR Motor",
    type: "motor",
    area: "utara",
    address: "Jl. Monginsidi No. 56, Palu Utara",
    lat: -0.8463907,
    lng: 119.8915474,
    rating: 4.2,
  },
  {
    id: 14,
    name: "Bengkel Mobil Weima",
    type: "mobil",
    area: "barat",
    address: "Jl. Pangeran Diponegoro No. 67, Palu Barat",
    lat: -0.8745756,
    lng: 119.8744484,
    rating: 4.6,
  },
  {
    id: 15,
    name: "Abadi motor",
    type: "motor",
    area: "utara",
    address: "Jl. Hasanuddin No. 89, Palu Utara",
    lat: -0.8365241,
    lng: 119.8834998,
    rating: 4.0,
  },
  {
    id: 16,
    name: "Adhi jaya motor",
    type: "motor",
    area: "selatan",
    address: "Jl. Kartini No. 78, Palu Selatan",
    lat: -0.9096873,
    lng: 119.8521036,
    rating: 4.7,
  },
  {
    id: 17,
    name: "Bengkel Corsa Tunggal",
    type: "motor",
    area: "selatan",
    address: "Jl. Dr. Sutomo No. 45, Palu Selatan",
    lat: -0.9192391,
    lng: 119.8833268,
    rating: 4.3,
  },
  {
    id: 18,
    name: "Bengkel Sinar Karya",
    type: "umum",
    area: "selatan",
    address: "Jl. Emmi Saelan No. 12, Palu Selatan",
    lat: -0.9054865,
    lng: 119.865058,
    rating: 4.1,
  },
  {
    id: 19,
    name: "Bengkel Amanda Jaya",
    type: "umum",
    area: "barat",
    address: "Jl. Veteran No. 33, Palu Barat",
    lat: -0.8837099,
    lng: 119.8365622,
    rating: 4.5,
  },
  {
    id: 20,
    name: "Bengkel New Veteran Palu",
    type: "umum",
    area: "timur",
    address: "Jl. Gatot Subroto No. 24, Palu Timur",
    lat: -0.8975022,
    lng: 119.9008691,
    rating: 4.4,
  },
  {
    id: 21,
    name: "Bengkel Sigma Speed Palu",
    type: "motor",
    area: "timur",
    address: "Jl. Monginsidi No. 56, Palu Timur",
    lat: -0.8901726,
    lng: 119.8864352,
    rating: 4.2,
  },
  {
    id: 22,
    name: "Bengkel Manado Motor",
    type: "motor",
    area: "barat",
    address: "Jl. Pangeran Diponegoro No. 67, Palu Barat",
    lat: -0.8795305,
    lng: 119.8727059,
    rating: 4.6,
  },
  {
    id: 23,
    name: "Bengkel roda 4 Palu (Hyundai)",
    type: "mobil",
    area: "barat",
    address: "Jl. Hasanuddin No. 89, Palu Barat",
    lat: -0.8733571,
    lng: 119.8746884,
    rating: 4.0,
  },
  {
    id: 24,
    name: "Bengkel Mujur",
    type: "umum",
    area: "utara",
    address: "Jl. Kartini No. 78, Palu Utara",
    lat: -0.8486223,
    lng: 119.887276,
    rating: 4.7,
  },
  {
    id: 25,
    name: "Bengkel Afila Motor",
    type: "motor",
    area: "utara",
    address: "Jl. Dr. Sutomo No. 45, Palu Utara",
    lat: -0.8457311,
    lng: 119.8916024,
    rating: 4.3,
  },
  {
    id: 26,
    name: "Bengkel Asking Motor II",
    type: "motor",
    area: "utara",
    address: "Jl. Emmi Saelan No. 12, Palu Utara",
    lat: -0.8435571,
    lng: 119.8975248,
    rating: 4.1,
  },
  {
    id: 27,
    name: "Bengkel Tondo MX Motor",
    type: "motor",
    area: "utara",
    address: "Jl. Veteran No. 33, Palu Utara",
    lat: -0.8460888,
    lng: 119.8828444,
    rating: 4.5,
  },
  {
    id: 28,
    name: "Bengkel Rumah Ban Motor Palu",
    type: "motor",
    area: "utara",
    address: "Jl. Gatot Subroto No. 24, Palu Utara",
    lat: -0.8432152,
    lng: 119.8879332,
    rating: 4.4,
  },
  {
    id: 29,
    name: "Bengkel Mahasiswa",
    type: "umum",
    area: "utara",
    address: "Jl. Monginsidi No. 56, Palu Utara",
    lat: -0.8398319,
    lng: 119.8833771,
    rating: 4.2,
  },
  {
    id: 30,
    name: "Bengkel ADL Perkasa",
    type: "umum",
    area: "utara",
    address: "Jl. Pangeran Diponegoro No. 67, Palu Utara",
    lat: -0.8194768,
    lng: 119.8817135,
    rating: 4.6,
  },
];

// Sample user data untuk login system
const users = {
  admin: { password: "admin123", role: "admin", name: "Administrator" },
  user1: { password: "user123", role: "user", name: "User Biasa 1" },
  user2: { password: "user123", role: "user", name: "User Biasa 2" },
};

// ==================== SUPABASE CONFIGURATION ====================
const SUPABASE_URL = "https://itqsxhwjjsopqlnoziui.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml0cXN4aHdqanNvcHFsbm96aXVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk1NzI5OTAsImV4cCI6MjA3NTE0ODk5MH0.nCv1U-uXiVZwG6uVXtzIPDNpIZeYNdolGqOsH32yLD0";

// Inisialisasi Supabase client
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ==================== SIMPLE LOGIN SYSTEM ====================

/**
 * Setup login functionality
 */
function setupLoginSystem() {
  const loginBtn = document.getElementById("loginBtn");
  const loginModal = document.getElementById("loginModal");
  const closeLogin = document.getElementById("closeLogin");
  const loginForm = document.getElementById("loginForm");
  const logoutBtn = document.getElementById("logoutBtn");

  // Login functionality
  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      if (loginModal) loginModal.style.display = "block";
    });
  }

  if (closeLogin) {
    closeLogin.addEventListener("click", () => {
      if (loginModal) loginModal.style.display = "none";
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      handleLogin();
    });
  }

  // Logout functionality
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      handleLogout();
    });
  }
}

/**
 * Handle proses login
 */
function handleLogin() {
  const loginType = document.getElementById("loginType").value;
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  // Validasi input
  if (!username || !password) {
    showNotification("Username dan password harus diisi!", "error");
    return;
  }

  // Authenticate user
  if (users[username] && users[username].password === password) {
    if (loginType === "admin" && users[username].role !== "admin") {
      showNotification("Hanya admin yang bisa login sebagai admin!", "error");
      return;
    }

    currentUser = username;
    userRole = users[username].role;
    isLoggedIn = true;

    updateUIAfterLogin();
    document.getElementById("loginModal").style.display = "none";
    document.getElementById("loginForm").reset();

    showNotification(
      `Login berhasil sebagai ${userRole === "admin" ? "Admin" : "User Biasa"}`,
      "success"
    );
  } else {
    showNotification("Username atau password salah!", "error");
  }
}

/**
 * Handle proses logout
 */
function handleLogout() {
  currentUser = null;
  userRole = null;
  isLoggedIn = false;

  updateUIAfterLogout();
  showNotification("Logout berhasil!", "success");
}

/**
 * Update UI after login
 */
function updateUIAfterLogin() {
  const loginBtn = document.getElementById("loginBtn");
  const userInfo = document.getElementById("userInfo");
  const userName = document.getElementById("userName");
  const userRoleSpan = document.getElementById("userRole");
  const addBengkelBtn = document.getElementById("addBengkelBtn");

  // Update UI di Home page
  if (document.getElementById("home").classList.contains("active")) {
    if (loginBtn) loginBtn.style.display = "none";
    if (userInfo) userInfo.style.display = "flex";
    if (userName)
      userName.textContent = users[currentUser]?.name || currentUser;
    if (userRoleSpan)
      userRoleSpan.textContent =
        userRole === "admin" ? "Administrator" : "User Biasa";
  }

  // Tampilkan/sembunyikan tombol tambah bengkel berdasarkan role
  if (addBengkelBtn) {
    if (userRole === "admin") {
      document.body.classList.add("admin-mode");
      document.body.classList.remove("user-mode");
      addBengkelBtn.style.display = "block";
    } else {
      document.body.classList.add("user-mode");
      document.body.classList.remove("admin-mode");
      addBengkelBtn.style.display = "none";
    }
  }

  // Refresh tampilan
  renderBengkelList();

  // Refresh markers di peta
  if (markers) {
    markers.clearLayers();
    bengkelData.forEach((bengkel) => {
      addMarkerToMap(bengkel);
    });
  }
}

/**
 * Update UI after logout
 */
function updateUIAfterLogout() {
  const loginBtn = document.getElementById("loginBtn");
  const userInfo = document.getElementById("userInfo");
  const addBengkelBtn = document.getElementById("addBengkelBtn");

  // Update UI di Home page
  if (document.getElementById("home").classList.contains("active")) {
    if (loginBtn) loginBtn.style.display = "block";
    if (userInfo) userInfo.style.display = "none";
  }

  document.body.classList.remove("admin-mode", "user-mode");
  if (addBengkelBtn) addBengkelBtn.style.display = "none";

  // Refresh tampilan
  renderBengkelList();

  // Refresh markers di peta
  if (markers) {
    markers.clearLayers();
    bengkelData.forEach((bengkel) => {
      addMarkerToMap(bengkel);
    });
  }
}

/**
 * Update tampilan login/logout berdasarkan halaman aktif
 */
function updateLoginUIForCurrentPage() {
  const loginBtn = document.getElementById("loginBtn");
  const userInfo = document.getElementById("userInfo");
  const isHomeActive = document
    .getElementById("home")
    .classList.contains("active");

  if (isHomeActive) {
    // Di halaman Home: tampilkan login/logout sesuai status
    if (isLoggedIn) {
      if (loginBtn) loginBtn.style.display = "none";
      if (userInfo) userInfo.style.display = "flex";
    } else {
      if (loginBtn) loginBtn.style.display = "block";
      if (userInfo) userInfo.style.display = "none";
    }
  } else {
    // Di halaman lain: sembunyikan semua elemen login
    if (loginBtn) loginBtn.style.display = "none";
    if (userInfo) userInfo.style.display = "none";
  }
}

// ==================== SUPABASE DATABASE OPERATIONS ====================

/**
 * Ambil semua data bengkel dari Supabase
 */
async function fetchBengkelData() {
  showLoading(true);
  try {
    const { data, error } = await supabase
      .from("bengkel")
      .select("*")
      .order("name");

    if (error) throw error;
    console.log("✅ Data berhasil diambil:", data?.length || 0, "bengkel");
    return data || [];
  } catch (error) {
    console.error("❌ Error mengambil data:", error);
    showNotification("Gagal mengambil data bengkel", "error");
    return [];
  } finally {
    showLoading(false);
  }
}

/**
 * Generate ID baru untuk bengkel
 */
function generateNewId() {
  if (bengkelData.length === 0) return 1;
  const maxId = Math.max(...bengkelData.map((b) => b.id));
  return maxId + 1;
}

/**
 * Tambah bengkel baru ke Supabase
 */
async function addBengkel(bengkel) {
  showLoading(true);
  try {
    // Generate ID baru
    const newId = generateNewId();

    // Pastikan tipe data numerik benar
    const bengkelData = {
      id: newId, // Tambahkan ID manual
      name: bengkel.name,
      type: bengkel.type,
      area: bengkel.area,
      address: bengkel.address,
      lat: parseFloat(bengkel.lat),
      lng: parseFloat(bengkel.lng),
      rating: parseFloat(bengkel.rating),
      // Hapus created_at dan updated_at karena tidak ada di tabel
    };

    console.log("Data yang akan dikirim:", bengkelData);

    const { data, error } = await supabase
      .from("bengkel")
      .insert([bengkelData])
      .select();

    if (error) {
      console.error("Error detail:", error);
      throw error;
    }

    showNotification("Bengkel berhasil ditambahkan!", "success");
    return data[0];
  } catch (error) {
    console.error("Error menambah bengkel:", error);
    showNotification(`Gagal menambah bengkel: ${error.message}`, "error");
    return null;
  } finally {
    showLoading(false);
  }
}

/**
 * Update data bengkel yang sudah ada
 */
async function updateBengkel(id, updates) {
  showLoading(true);
  try {
    // Pastikan tipe data numerik benar
    const updateData = {
      name: updates.name,
      type: updates.type,
      area: updates.area,
      address: updates.address,
      lat: parseFloat(updates.lat),
      lng: parseFloat(updates.lng),
      rating: parseFloat(updates.rating),
      // Hapus updated_at karena tidak ada di tabel
    };

    console.log("Data update yang akan dikirim:", updateData);

    const { data, error } = await supabase
      .from("bengkel")
      .update(updateData)
      .eq("id", id)
      .select();

    if (error) {
      console.error("Error detail:", error);
      throw error;
    }

    showNotification("Bengkel berhasil diperbarui!", "success");
    return data[0];
  } catch (error) {
    console.error("Error update bengkel:", error);
    showNotification(`Gagal memperbarui bengkel: ${error.message}`, "error");
    return null;
  } finally {
    showLoading(false);
  }
}

/**
 * Hapus bengkel dari Supabase
 */
async function deleteBengkel(id) {
  if (!confirm("Apakah Anda yakin ingin menghapus bengkel ini?")) {
    return false;
  }

  showLoading(true);
  try {
    const { error } = await supabase.from("bengkel").delete().eq("id", id);

    if (error) throw error;

    console.log("✅ Bengkel berhasil dihapus");
    showNotification("Bengkel berhasil dihapus!", "success");
    return true;
  } catch (error) {
    console.error("❌ Error menghapus bengkel:", error);
    showNotification("Gagal menghapus bengkel", "error");
    return false;
  } finally {
    showLoading(false);
  }
}

// ==================== APPLICATION FUNCTIONS ====================

/**
 * Inisialisasi peta
 */
function initMap() {
  if (!map) {
    map = L.map("map").setView([-0.9, 119.8833], 13);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    markers = L.layerGroup().addTo(map);
  }

  // Handle map click based on user role
  map.on("click", function (e) {
    if (userRole === "admin") {
      // Jika admin, buka modal tambah bengkel dengan koordinat yang diklik
      document.getElementById("bengkelLat").value = e.latlng.lat.toFixed(6);
      document.getElementById("bengkelLng").value = e.latlng.lng.toFixed(6);
      openAddModal();
    }
  });

  // Tambahkan marker untuk setiap bengkel
  bengkelData.forEach((bengkel) => {
    addMarkerToMap(bengkel);
  });
}

/**
 * Tambahkan marker ke peta
 */
function addMarkerToMap(bengkel) {
  // Sembunyikan tombol aksi di popup jika user biasa
  const actionButtons =
    userRole === "admin"
      ? `
        <div style="margin-top: 10px; display: flex; gap: 5px;">
            <button onclick="editBengkelFromMap(${bengkel.id})" style="background: #3498db; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer; font-size: 12px;">
                <i class="fas fa-edit"></i> Edit
            </button>
            <button onclick="deleteBengkelFromMap(${bengkel.id})" style="background: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 3px; cursor: pointer; font-size: 12px;">
                <i class="fas fa-trash"></i> Hapus
            </button>
        </div>
    `
      : "";

  const marker = L.marker([bengkel.lat, bengkel.lng]).bindPopup(`
            <div style="min-width: 250px;">
                <h3 style="margin: 0 0 10px 0; color: #2c3e50;">${
                  bengkel.name
                }</h3>
                <p style="margin: 0 0 8px 0; color: #666;">${
                  bengkel.address
                }</p>
                <p style="margin: 0 0 8px 0;"><strong>Jenis:</strong> ${getTypeName(
                  bengkel.type
                )}</p>
                <p style="margin: 0 0 8px 0;"><strong>Area:</strong> ${getAreaName(
                  bengkel.area
                )}</p>
                <p style="margin: 0 0 8px 0;"><strong>Rating:</strong> ${
                  bengkel.rating
                } <i class="fas fa-star" style="color: gold;"></i></p>
                ${actionButtons}
            </div>
        `);

  marker.bengkelData = bengkel;
  markers.addLayer(marker);
}

/**
 * Edit bengkel dari peta
 */
function editBengkelFromMap(id) {
  if (userRole !== "admin") {
    showNotification("Hanya admin yang dapat mengedit bengkel!", "error");
    return;
  }

  const bengkel = bengkelData.find((b) => b.id === id);
  if (bengkel) {
    openEditModal(bengkel);
  }
}

/**
 * Hapus bengkel dari peta
 */
async function deleteBengkelFromMap(id) {
  if (userRole !== "admin") {
    showNotification("Hanya admin yang dapat menghapus bengkel!", "error");
    return;
  }

  const success = await deleteBengkel(id);
  if (success) {
    await refreshApplicationData();
  }
}

/**
 * Refresh semua data aplikasi
 */
async function refreshApplicationData() {
  bengkelData = await fetchBengkelData();

  // Update peta
  if (markers) {
    markers.clearLayers();
    bengkelData.forEach((bengkel) => {
      addMarkerToMap(bengkel);
    });
  }

  // Update daftar bengkel
  renderBengkelList(bengkelData);

  // Update dashboard
  updateDashboard();

  // Refresh filter jika ada pencarian aktif
  filterBengkel();
}

/**
 * Fungsi untuk mendapatkan nama jenis bengkel
 */
function getTypeName(type) {
  switch (type) {
    case "motor":
      return "Bengkel Motor";
    case "mobil":
      return "Bengkel Mobil";
    case "umum":
      return "Bengkel Umum";
    default:
      return "Tidak Diketahui";
  }
}

/**
 * Fungsi untuk mendapatkan nama area
 */
function getAreaName(area) {
  switch (area) {
    case "barat":
      return "Palu Barat";
    case "timur":
      return "Palu Timur";
    case "utara":
      return "Palu Utara";
    case "selatan":
      return "Palu Selatan";
    default:
      return "Tidak Diketahui";
  }
}

/**
 * Fungsi untuk membuat elemen rating bintang
 */
function createRatingStars(rating) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  let starsHTML = "";

  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="fas fa-star"></i>';
  }

  if (hasHalfStar) {
    starsHTML += '<i class="fas fa-star-half-alt"></i>';
  }

  const emptyStars = 5 - Math.ceil(rating);
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<i class="far fa-star"></i>';
  }

  return starsHTML;
}

// ==================== CRUD MODAL FUNCTIONS ====================

/**
 * Buka modal untuk tambah bengkel baru
 */
function openAddModal() {
  if (userRole !== "admin") {
    showNotification("Hanya admin yang dapat menambahkan bengkel!", "error");
    return;
  }

  currentEditingId = null;
  document.getElementById("modalTitle").textContent = "Tambah Bengkel Baru";
  document.getElementById("submitBtn").textContent = "Simpan Bengkel";
  document.getElementById("deleteBtn").style.display = "none";

  // Reset form
  document.getElementById("bengkelForm").reset();
  document.getElementById("bengkelRating").value = "4.0";

  // Show modal
  document.getElementById("crudModal").style.display = "block";
}

/**
 * Buka modal untuk edit bengkel
 */
function openEditModal(bengkel) {
  if (userRole !== "admin") {
    showNotification("Hanya admin yang dapat mengedit bengkel!", "error");
    return;
  }

  currentEditingId = bengkel.id;
  document.getElementById("modalTitle").textContent = "Edit Bengkel";
  document.getElementById("submitBtn").textContent = "Perbarui Bengkel";
  document.getElementById("deleteBtn").style.display = "block";

  // Isi form dengan data bengkel
  document.getElementById("bengkelName").value = bengkel.name;
  document.getElementById("bengkelType").value = bengkel.type;
  document.getElementById("bengkelArea").value = bengkel.area;
  document.getElementById("bengkelAddress").value = bengkel.address;
  document.getElementById("bengkelLat").value = bengkel.lat;
  document.getElementById("bengkelLng").value = bengkel.lng;
  document.getElementById("bengkelRating").value = bengkel.rating;

  // Show modal
  document.getElementById("crudModal").style.display = "block";
}

/**
 * Tutup modal
 */
function closeModal() {
  document.getElementById("crudModal").style.display = "none";
  currentEditingId = null;
}

/**
 * Handle form submission
 */
async function handleFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const bengkelData = {
    name: formData.get("name").trim(),
    type: formData.get("type"),
    area: formData.get("area"),
    address: formData.get("address").trim(),
    lat: formData.get("lat"),
    lng: formData.get("lng"),
    rating: formData.get("rating") || "4.0",
  };

  // Validasi data
  if (!bengkelData.name || !bengkelData.address) {
    showNotification("Nama dan alamat bengkel harus diisi!", "error");
    return;
  }

  // Validasi koordinat
  const lat = parseFloat(bengkelData.lat);
  const lng = parseFloat(bengkelData.lng);

  if (isNaN(lat) || isNaN(lng)) {
    showNotification("Koordinat latitude dan longitude harus valid!", "error");
    return;
  }

  if (lat < -90 || lat > 90) {
    showNotification("Latitude harus antara -90 dan 90!", "error");
    return;
  }

  if (lng < -180 || lng > 180) {
    showNotification("Longitude harus antara -180 dan 180!", "error");
    return;
  }

  // Validasi rating
  const rating = parseFloat(bengkelData.rating);
  if (isNaN(rating) || rating < 0 || rating > 5) {
    showNotification("Rating harus antara 0 dan 5!", "error");
    return;
  }

  // Update data dengan nilai yang sudah diparse
  bengkelData.lat = lat;
  bengkelData.lng = lng;
  bengkelData.rating = rating;

  let result;
  if (currentEditingId) {
    // Update existing bengkel
    result = await updateBengkel(currentEditingId, bengkelData);
  } else {
    // Add new bengkel
    result = await addBengkel(bengkelData);
  }

  if (result) {
    closeModal();
    await refreshApplicationData();
  }
}

/**
 * Handle delete bengkel
 */
async function handleDelete() {
  if (!currentEditingId) return;

  const success = await deleteBengkel(currentEditingId);
  if (success) {
    closeModal();
    await refreshApplicationData();
  }
}

// ==================== UTILITY FUNCTIONS ====================

/**
 * Tampilkan loading overlay
 */
function showLoading(show) {
  const loadingOverlay = document.getElementById("loadingOverlay");
  if (loadingOverlay) {
    loadingOverlay.style.display = show ? "flex" : "none";
  }
}

/**
 * Tampilkan notifikasi
 */
function showNotification(message, type = "info") {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${
              type === "success"
                ? "check"
                : type === "error"
                ? "exclamation-triangle"
                : "info"
            }"></i>
            <span>${message}</span>
        </div>
    `;

  document.body.appendChild(notification);

  // Remove after 5 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 5000);
}

/**
 * Filter bengkel berdasarkan kriteria pencarian
 */
function filterBengkel() {
  const typeFilter = document.getElementById("typeFilter").value;
  const areaFilter = document.getElementById("areaFilter").value;
  const searchText = document
    .getElementById("searchInput")
    .value.toLowerCase()
    .trim();

  const filteredBengkel = bengkelData.filter((bengkel) => {
    const typeMatch = typeFilter === "all" || bengkel.type === typeFilter;
    const areaMatch = areaFilter === "all" || bengkel.area === areaFilter;

    let searchMatch = true;
    if (searchText !== "") {
      const nameMatch = bengkel.name.toLowerCase().includes(searchText);
      const addressMatch = bengkel.address.toLowerCase().includes(searchText);
      const typeNameMatch = getTypeName(bengkel.type)
        .toLowerCase()
        .includes(searchText);
      const areaNameMatch = getAreaName(bengkel.area)
        .toLowerCase()
        .includes(searchText);

      searchMatch = nameMatch || addressMatch || typeNameMatch || areaNameMatch;
    }

    return typeMatch && areaMatch && searchMatch;
  });

  // Update markers
  if (markers) {
    markers.clearLayers();
    filteredBengkel.forEach((bengkel) => {
      addMarkerToMap(bengkel);
    });
  }

  // Update daftar bengkel
  renderBengkelList(filteredBengkel);

  if (filteredBengkel.length === 1) {
    setTimeout(() => {
      focusOnBengkel(filteredBengkel[0]);
    }, 300);
  }
}

/**
 * Fokus ke bengkel di peta
 */
function focusOnBengkel(bengkel) {
  if (map) {
    map.setView([bengkel.lat, bengkel.lng], 16);

    let foundMarker = null;
    markers.eachLayer((layer) => {
      if (layer.bengkelData && layer.bengkelData.id === bengkel.id) {
        foundMarker = layer;
      }
    });

    if (foundMarker) {
      foundMarker.openPopup();
    }
  }
}

/**
 * Render daftar bengkel
 */
function renderBengkelList(
  bengkelList = bengkelData,
  containerId = "bengkelList"
) {
  const listContainer = document.getElementById(containerId);
  if (!listContainer) return;

  let itemsContainer = listContainer.querySelector(".bengkel-items");
  if (!itemsContainer) {
    itemsContainer = document.createElement("div");
    itemsContainer.className = "bengkel-items";
    listContainer.appendChild(itemsContainer);
  }

  itemsContainer.innerHTML = "";

  const countElement = document.getElementById("bengkelCount");
  if (countElement) {
    countElement.textContent = `${bengkelList.length} bengkel ditemukan`;
  }

  if (bengkelList.length === 0) {
    itemsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>Tidak ada bengkel yang ditemukan</h3>
                <p>Coba ubah kata kunci pencarian atau filter</p>
            </div>
        `;
    return;
  }

  bengkelList.forEach((bengkel) => {
    const item = document.createElement("div");
    item.className = "bengkel-item";

    // Sembunyikan tombol aksi jika user biasa
    const actionButtons =
      userRole === "admin"
        ? `
            <div class="bengkel-actions">
                <button class="btn-edit" onclick="openEditModal(${JSON.stringify(
                  bengkel
                ).replace(/"/g, "&quot;")})">
                    <i class="fas fa-edit"></i> Edit
                </button>
                <button class="btn-delete" onclick="deleteBengkelFromMap(${
                  bengkel.id
                })">
                    <i class="fas fa-trash"></i> Hapus
                </button>
            </div>
        `
        : "";

    item.innerHTML = `
            <div class="bengkel-name">${bengkel.name}</div>
            <div class="bengkel-address">${bengkel.address}</div>
            <div class="bengkel-meta">
                <span class="bengkel-type ${bengkel.type}">${getTypeName(
      bengkel.type
    )}</span>
                <span class="bengkel-area">${getAreaName(bengkel.area)}</span>
            </div>
            <div class="bengkel-rating">
                <span class="bengkel-rating-stars">${createRatingStars(
                  bengkel.rating
                )}</span>
                <span class="bengkel-rating-value">${bengkel.rating}</span>
            </div>
            ${actionButtons}
        `;

    item.addEventListener("click", function (e) {
      if (!e.target.closest(".bengkel-actions")) {
        e.stopPropagation();
        focusOnBengkel(bengkel);

        if (window.innerWidth <= 768) {
          closeBengkelList();
        }
      }
    });

    itemsContainer.appendChild(item);
  });
}

/**
 * Update dashboard statistics
 */
function updateDashboard() {
  const motorCount = bengkelData.filter((b) => b.type === "motor").length;
  const mobilCount = bengkelData.filter((b) => b.type === "mobil").length;
  const umumCount = bengkelData.filter((b) => b.type === "umum").length;
  const totalCount = bengkelData.length;

  document.getElementById("motor-count").textContent = motorCount;
  document.getElementById("mobil-count").textContent = mobilCount;
  document.getElementById("umum-count").textContent = umumCount;
  document.getElementById("total-count").textContent = totalCount;

  const popularBengkel = [...bengkelData]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  renderBengkelList(popularBengkel, "popular-bengkel");
}

/**
 * Close bengkel list
 */
function closeBengkelList() {
  const bengkelList = document.getElementById("bengkelList");
  const toggleList = document.getElementById("toggleList");

  if (bengkelList && toggleList) {
    bengkelList.classList.remove("active");
    toggleList.innerHTML = '<i class="fas fa-list"></i> Daftar Bengkel';
    toggleList.style.right = "20px";
  }
}

// ==================== EVENT LISTENERS SETUP ====================

/**
 * Setup semua event listeners
 */
function setupEventListeners() {
  // Setup login system
  setupLoginSystem();

  // Pencarian di halaman peta
  const searchBtn = document.getElementById("searchBtn");
  if (searchBtn) {
    searchBtn.addEventListener("click", function (e) {
      e.preventDefault();
      filterBengkel();
    });
  }

  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        filterBengkel();
      }
    });

    let searchTimeout;
    searchInput.addEventListener("input", function (e) {
      clearTimeout(searchTimeout);
      searchTimeout = setTimeout(() => {
        if (this.value.trim().length >= 2 || this.value.trim().length === 0) {
          filterBengkel();
        }
      }, 500);
    });
  }

  // Filter
  const typeFilter = document.getElementById("typeFilter");
  if (typeFilter) {
    typeFilter.addEventListener("change", function () {
      filterBengkel();
    });
  }

  const areaFilter = document.getElementById("areaFilter");
  if (areaFilter) {
    areaFilter.addEventListener("change", function () {
      filterBengkel();
    });
  }

  // Pencarian di home page
  const homeSearchBtn = document.getElementById("homeSearchBtn");
  const homeSearchInput = document.getElementById("homeSearch");

  if (homeSearchBtn && homeSearchInput) {
    homeSearchBtn.addEventListener("click", function (e) {
      e.preventDefault();
      const searchText = homeSearchInput.value.trim();

      if (searchText) {
        const petaLink = document.querySelector(
          '.nav-link[data-target="peta"]'
        );
        if (petaLink) {
          petaLink.click();

          setTimeout(() => {
            const petaSearchInput = document.getElementById("searchInput");
            if (petaSearchInput) {
              petaSearchInput.value = searchText;
              filterBengkel();

              const bengkelList = document.getElementById("bengkelList");
              const toggleList = document.getElementById("toggleList");
              if (bengkelList && toggleList) {
                bengkelList.classList.add("active");
                toggleList.innerHTML =
                  '<i class="fas fa-times"></i> Tutup Daftar';
                toggleList.style.right = "370px";
              }
            }
          }, 500);
        }
      }
    });

    homeSearchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault();
        homeSearchBtn.click();
      }
    });
  }

  // Toggle list bengkel
  const toggleList = document.getElementById("toggleList");
  if (toggleList) {
    toggleList.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const bengkelList = document.getElementById("bengkelList");
      if (bengkelList) {
        const isActive = bengkelList.classList.contains("active");

        if (isActive) {
          bengkelList.classList.remove("active");
          this.innerHTML = '<i class="fas fa-list"></i> Daftar Bengkel';
          this.style.right = "20px";
        } else {
          bengkelList.classList.add("active");
          this.innerHTML = '<i class="fas fa-times"></i> Tutup Daftar';
          this.style.right = "370px";
        }
      }
    });
  }

  // CRUD Modal events
  const modal = document.getElementById("crudModal");
  const closeBtn = document.querySelector(".close");
  const cancelBtn = document.getElementById("cancelBtn");
  const addBengkelBtn = document.getElementById("addBengkelBtn");
  const bengkelForm = document.getElementById("bengkelForm");
  const deleteBtn = document.getElementById("deleteBtn");

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (cancelBtn) cancelBtn.addEventListener("click", closeModal);
  if (addBengkelBtn) addBengkelBtn.addEventListener("click", openAddModal);
  if (bengkelForm) bengkelForm.addEventListener("submit", handleFormSubmit);
  if (deleteBtn) deleteBtn.addEventListener("click", handleDelete);

  // Close modal when clicking outside
  window.addEventListener("click", function (e) {
    if (e.target === modal) {
      closeModal();
    }

    const bengkelList = document.getElementById("bengkelList");
    const toggleList = document.getElementById("toggleList");

    if (
      bengkelList &&
      toggleList &&
      bengkelList.classList.contains("active") &&
      !bengkelList.contains(e.target) &&
      e.target !== toggleList &&
      !toggleList.contains(e.target)
    ) {
      closeBengkelList();
    }

    // Close login modal when clicking outside
    const loginModal = document.getElementById("loginModal");
    if (e.target === loginModal) {
      loginModal.style.display = "none";
    }
  });
}

/**
 * Setup navigasi dengan update tampilan login
 */
function setupNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");
  const contentSections = document.querySelectorAll(".content-section");

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      navLinks.forEach((l) => l.classList.remove("active"));
      contentSections.forEach((s) => s.classList.remove("active"));

      link.classList.add("active");

      const target = link.getAttribute("data-target");
      document.getElementById(target).classList.add("active");

      // Update tampilan login/logout berdasarkan halaman aktif
      updateLoginUIForCurrentPage();

      if (target === "peta" && !map) {
        initMap();
        renderBengkelList();
      }
    });
  });
}

// ==================== MAIN INITIALIZATION ====================

/**
 * Inisialisasi aplikasi utama
 */
async function initializeApp() {
  console.log("🚀 Aplikasi Bengkel Palu dimulai...");

  showLoading(true);

  try {
    // Setup navigasi terlebih dahulu
    setupNavigation();

    // Load data dari Supabase
    bengkelData = await fetchBengkelData();
    console.log("Data loaded:", bengkelData.length, "bengkel");

    // Setup event listeners
    setupEventListeners();

    // Update dashboard
    updateDashboard();

    // Sembunyikan tombol tambah bengkel secara default
    const addBengkelBtn = document.getElementById("addBengkelBtn");
    if (addBengkelBtn) addBengkelBtn.style.display = "none";

    // Update tampilan login untuk halaman aktif
    updateLoginUIForCurrentPage();

    // Jika halaman peta aktif, inisialisasi peta
    if (document.getElementById("peta").classList.contains("active")) {
      initMap();
      renderBengkelList();
    }

    // Pastikan daftar bengkel tersembunyi saat pertama kali
    const bengkelList = document.getElementById("bengkelList");
    if (bengkelList) {
      bengkelList.classList.remove("active");
    }

    console.log("✅ Aplikasi berhasil diinisialisasi");
    showNotification("Aplikasi Bengkel Palu siap digunakan!", "success");
  } catch (error) {
    console.error("❌ Error initializing app:", error);
    showNotification("Terjadi kesalahan saat memulai aplikasi", "error");
  } finally {
    showLoading(false);
  }
}

// Start the application when DOM is loaded
document.addEventListener("DOMContentLoaded", initializeApp);

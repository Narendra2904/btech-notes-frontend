/* =====================================================
   CONFIG
===================================================== */
const API_BASE = "https://jtuh-backend-7rad.onrender.com";

/* =====================================================
   STATE
===================================================== */
const state = {
  year: null,
  branch: null,
  semester: null
};

const YEARS = [1, 2, 3, 4];

/* =====================================================
   HELPERS
===================================================== */
function esc(str) {
  return String(str || "").replace(/[&<>"']/g, m => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[m]));
}

/* =====================================================
   URL BUILDERS
===================================================== */
function viewUrl(branch, year, sem, file) {
  return `${API_BASE}/api/pdf?branch=${encodeURIComponent(branch)}&file=${encodeURIComponent(
    `year${year}/sem${sem}/${file}`
  )}`;
}

function downloadUrl(branch, year, sem, file) {
  return `${API_BASE}/api/download?branch=${encodeURIComponent(branch)}&file=${encodeURIComponent(
    `year${year}/sem${sem}/${file}`
  )}`;
}

/* =====================================================
   FETCH
===================================================== */
async function fetchSubjects() {
  const res = await fetch(
    `${API_BASE}/api/list?branch=${state.branch}&year=${state.year}&sem=${state.semester}`
  );
  return res.json();
}

/* =====================================================
   UNITS
===================================================== */
function getUnitsForSubject(file) {
  const base = file.replace(/\.pdf$/i, "");
  return Array.from({ length: 5 }, (_, i) => ({
    title: `Unit ${i + 1}`,
    filename: `${base} - Unit ${i + 1}.pdf`
  }));
}

/* =====================================================
   SUBJECT UI
===================================================== */
function createSubjectFolderDOM(subject) {
  const div = document.createElement("div");
  div.className = "bg-white border-2 border-black p-4 mb-4";

  div.innerHTML = `
    <div class="flex justify-between items-center">
      <div>
        <div class="font-bold">${esc(subject.title)}</div>
        <div class="text-xs">${esc(subject.filename)}</div>
      </div>
      <button class="toggle bg-yellow-300 border-2 border-black px-3 py-1 font-bold">
        Open
      </button>
    </div>
    <div class="units hidden mt-3"></div>
  `;

  const btn = div.querySelector(".toggle");
  const box = div.querySelector(".units");

  btn.onclick = () => {
    if (box.classList.contains("hidden")) {
      box.innerHTML = getUnitsForSubject(subject.filename).map(u => `
        <div class="flex justify-between border-2 border-black p-2 mb-2">
          <a target="_blank" href="${viewUrl(state.branch, state.year, state.semester, u.filename)}">${u.title}</a>
          <a href="${downloadUrl(state.branch, state.year, state.semester, u.filename)}">Download</a>
        </div>
      `).join("");
      box.classList.remove("hidden");
      btn.textContent = "Close";
    } else {
      box.classList.add("hidden");
      btn.textContent = "Open";
    }
  };

  return div;
}

/* =====================================================
   RENDER SUBJECTS
===================================================== */
async function renderUnits() {
  const box = document.getElementById("units");
  if (!box) return;

  box.innerHTML = "Loading...";
  const subjects = await fetchSubjects();

  if (!subjects.length) {
    box.innerHTML = "No PDFs found";
    return;
  }

  box.innerHTML = "";
  subjects.forEach(s => box.appendChild(createSubjectFolderDOM(s)));
}

/* =====================================================
   RENDER YEARS
===================================================== */
function renderYears() {
  const box = document.getElementById("year-container");
  if (!box) return;

  box.innerHTML = YEARS.map(y => `
    <button onclick="selectYear(${y})"
      class="year-btn border-2 border-black p-6 text-white bg-black">
      ${y} YEAR
    </button>
  `).join("");
}

/* =====================================================
   FLOW CONTROLLERS (🔥 KEY FIX 🔥)
===================================================== */
window.selectYear = y => {
  state.year = y;

  document.getElementById("branch-section")?.classList.remove("hidden");
  document.getElementById("semester-section")?.classList.add("hidden");
  document.getElementById("units-section")?.classList.add("hidden");
};

window.selectBranch = b => {
  state.branch = b;

  document.getElementById("semester-section")?.classList.remove("hidden");
  document.getElementById("units-section")?.classList.add("hidden");
};

window.selectSemester = s => {
  state.semester = s;

  document.getElementById("units-section")?.classList.remove("hidden");
  renderUnits();
};

/* =====================================================
   INIT
===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderYears();
});

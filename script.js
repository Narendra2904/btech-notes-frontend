/* =====================================================
   1. CONFIGURATION (OLD KEPT)
===================================================== */
const years = [
  { id: 1, label: "1st Year" },
  { id: 2, label: "2nd Year" },
  { id: 3, label: "3rd Year" },
  { id: 4, label: "4th Year" }
];

const branches = [
  "CSE",
  "CSE(AIML)",
  "CSE(DS)",
  "CSE(Design)",
  "ECE",
  "EEE",
  "CIV",
  "MECH"
];

/* =====================================================
   2. API CONFIG (NEW)
===================================================== */
const API_BASE = "https://jtuh-backend-7rad.onrender.com";

/* =====================================================
   3. STATE (OLD KEPT)
===================================================== */
let state = {
  year: null,
  branch: null,
  semester: null
};

/* =====================================================
   4. DOM ELEMENTS (OLD KEPT)
===================================================== */
const els = {
  yearContainer: document.getElementById("year-container"),
  branchSection: document.getElementById("branch-section"),
  branchContainer: document.getElementById("branch-container"),
  semSection: document.getElementById("semester-section"),
  resourcesSection: document.getElementById("resources-section"),
  notesContainer: document.getElementById("notes-container"),
  breadcrumb: document.getElementById("breadcrumb-text")
};

/* =====================================================
   5. HELPERS
===================================================== */
function esc(s) {
  return String(s || "");
}

/* =====================================================
   6. API HELPERS (NEW)
===================================================== */
function viewUrl(branch, year, sem, file) {
  return `${API_BASE}/api/pdf?branch=${encodeURIComponent(
    branch
  )}&file=${encodeURIComponent(`year${year}/sem${sem}/${file}`)}`;
}

function downloadUrl(branch, year, sem, file) {
  return `${API_BASE}/api/download?branch=${encodeURIComponent(
    branch
  )}&file=${encodeURIComponent(`year${year}/sem${sem}/${file}`)}`;
}

async function fetchSubjectsFromAPI(year, branch, sem) {
  const res = await fetch(
    `${API_BASE}/api/list?branch=${branch}&year=${year}&sem=${sem}`
  );
  return res.json();
}

/* =====================================================
   7. UNIT GENERATOR (OLD LOGIC KEPT)
===================================================== */
function getUnitsForSubject(subjectFile) {
  const base = subjectFile.replace(/\.pdf$/i, "");
  const units = [];
  for (let i = 1; i <= 5; i++) {
    units.push({
      title: `Unit ${i}`,
      filename: `${base} - Unit ${i}.pdf`
    });
  }
  return units;
}

/* =====================================================
   8. SUBJECT FOLDER UI (OLD KEPT, LINKS UPDATED)
===================================================== */
function createSubjectFolderDOM(subject) {
  const folder = document.createElement("div");
  folder.className =
    "bg-white border-2 border-black p-4 shadow-[4px_4px_0] mb-4";

  folder.innerHTML = `
    <div class="flex justify-between items-center">
      <div>
        <div class="font-bold text-lg">${esc(subject.title)}</div>
        <div class="text-xs text-gray-600">${esc(subject.file)}</div>
      </div>
      <button class="toggle px-4 py-2 border-2 border-black bg-yellow-300 font-bold">
        Open Folder
      </button>
    </div>
    <div class="units hidden mt-4"></div>
  `;

  const toggleBtn = folder.querySelector(".toggle");
  const unitsBox = folder.querySelector(".units");

  toggleBtn.onclick = () => {
    if (unitsBox.classList.contains("hidden")) {
      const units = getUnitsForSubject(subject.file);
      unitsBox.innerHTML = units
        .map(
          u => `
        <div class="flex justify-between items-center border-2 border-black p-2 mb-2">
          <a target="_blank"
             href="${viewUrl(state.branch, state.year, state.semester, u.filename)}">
             ${u.title}
          </a>
          <a href="${downloadUrl(
            state.branch,
            state.year,
            state.semester,
            u.filename
          )}" class="text-xs font-bold">
            DOWNLOAD
          </a>
        </div>
      `
        )
        .join("");
      unitsBox.classList.remove("hidden");
      toggleBtn.textContent = "Close Folder";
    } else {
      unitsBox.classList.add("hidden");
      toggleBtn.textContent = "Open Folder";
    }
  };

  return folder;
}

/* =====================================================
   9. RENDER YEARS (OLD KEPT)
===================================================== */
function renderYears() {
  els.yearContainer.innerHTML = years
    .map(
      y => `
    <button onclick="setYear(${y.id})"
      class="h-32 border-2 border-white/20 bg-zinc-900 text-white hover:bg-yellow-400 hover:text-black transition-all flex flex-col items-center justify-center gap-1">
      <span class="text-5xl font-black">${y.id}</span>
      <span class="text-xs font-bold uppercase">Year</span>
    </button>
  `
    )
    .join("");
}

/* =====================================================
   10. RENDER BRANCHES (OLD KEPT)
===================================================== */
function renderBranches() {
  els.branchContainer.innerHTML = branches
    .map(
      b => `
    <button onclick="setBranch('${b}')"
      class="py-4 border-2 border-black font-black text-xl hover:bg-pink-100">
      ${b}
    </button>
  `
    )
    .join("");
}

/* =====================================================
   11. ACTION HANDLERS (OLD FLOW KEPT)
===================================================== */
window.setYear = function (y) {
  state.year = y;
  state.branch = null;
  state.semester = null;

  renderYears();
  renderBranches();

  els.branchSection.classList.remove("hidden");
  els.semSection.classList.add("hidden");
  els.resourcesSection.classList.add("hidden");

  els.branchSection.scrollIntoView({ behavior: "smooth" });
};

window.setBranch = function (b) {
  state.branch = b;
  state.semester = null;

  els.semSection.classList.remove("hidden");
  els.resourcesSection.classList.add("hidden");

  els.semSection.scrollIntoView({ behavior: "smooth" });
};

window.setSemester = async function (s) {
  state.semester = s;

  els.notesContainer.innerHTML =
    `<div class="p-4 border-2 border-black bg-yellow-100 font-bold">
      Loading subjects...
     </div>`;

  const subjects = await fetchSubjectsFromAPI(
    state.year,
    state.branch,
    state.semester
  );

  if (!subjects || subjects.length === 0) {
    els.notesContainer.innerHTML =
      `<div class="p-4 border-2 border-black bg-yellow-100 font-bold">
        No subjects found
      </div>`;
    return;
  }

  els.notesContainer.innerHTML = "";
  subjects.forEach(sub => {
    els.notesContainer.appendChild(
      createSubjectFolderDOM({
        title: sub.title,
        file: sub.filename
      })
    );
  });

  els.resourcesSection.classList.remove("hidden");
  els.resourcesSection.scrollIntoView({ behavior: "smooth" });
};

/* =====================================================
   12. INIT (OLD KEPT)
===================================================== */
document.addEventListener("DOMContentLoaded", () => {
  renderYears();
  renderBranches();
});

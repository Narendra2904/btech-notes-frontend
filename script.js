/* =========================================
   CONFIG
========================================= */
const API_BASE = "http://localhost:5000";

const state = {
  branch: null,
  year: null,
  semester: null
};

/* =========================================
   HELPERS
========================================= */
function esc(str) {
  return String(str || "").replace(/[&<>"']/g, m => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[m]));
}

/* =========================================
   API URL BUILDERS (OLD LOGIC KEPT)
========================================= */
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

/* =========================================
   API FETCH
========================================= */
async function fetchSubjects() {
  const res = await fetch(
    `${API_BASE}/api/list?branch=${state.branch}&year=${state.year}&sem=${state.semester}`
  );
  return res.json();
}

/* =========================================
   UNITS GENERATOR
========================================= */
function getUnitsForSubject(subjectFile) {
  const base = subjectFile.replace(/\.pdf$/i, "");
  return Array.from({ length: 5 }, (_, i) => ({
    title: `Unit ${i + 1}`,
    filename: `${base} - Unit ${i + 1}.pdf`
  }));
}

/* =========================================
   SUBJECT FOLDER UI
========================================= */
function createSubjectFolderDOM(subject) {
  const wrapper = document.createElement("div");
  wrapper.className =
    "bg-white border-2 border-black p-4 shadow-[4px_4px_0] mb-4";

  wrapper.innerHTML = `
    <div class="flex justify-between items-center gap-4">
      <div class="flex items-center gap-3">
        <div class="p-2 bg-blue-200 border-2 border-black">
          <i data-lucide="folder"></i>
        </div>
        <div>
          <div class="font-bold">${esc(subject.title)}</div>
          <div class="text-xs text-gray-500">${esc(subject.filename)}</div>
        </div>
      </div>

      <div class="flex items-center gap-2">
        <a href="${viewUrl(state.branch, state.year, state.semester, subject.filename)}"
           target="_blank"
           class="text-xs underline font-bold">
           OPEN PDF
        </a>
        <button class="toggle px-4 py-2 border-2 border-black bg-yellow-300 font-bold text-xs">
          Open Folder
        </button>
      </div>
    </div>

    <div class="units hidden mt-4 border-t-2 border-dashed pt-4"></div>
  `;

  const toggleBtn = wrapper.querySelector(".toggle");
  const unitsBox = wrapper.querySelector(".units");

  toggleBtn.onclick = () => {
    if (unitsBox.classList.contains("hidden")) {
      const units = getUnitsForSubject(subject.filename);
      unitsBox.innerHTML = units.map(u => `
        <div class="flex justify-between items-center border-2 border-black p-2 mb-2 bg-zinc-50">
          <a target="_blank"
             href="${viewUrl(state.branch, state.year, state.semester, u.filename)}"
             class="font-bold text-sm">
             ${u.title}
          </a>
          <a href="${downloadUrl(state.branch, state.year, state.semester, u.filename)}"
             class="text-xs font-bold">
             DOWNLOAD
          </a>
        </div>
      `).join("");

      unitsBox.classList.remove("hidden");
      toggleBtn.textContent = "Close Folder";
      toggleBtn.classList.replace("bg-yellow-300", "bg-white");
    } else {
      unitsBox.classList.add("hidden");
      toggleBtn.textContent = "Open Folder";
      toggleBtn.classList.replace("bg-white", "bg-yellow-300");
    }
  };

  return wrapper;
}

/* =========================================
   CORE RENDER
========================================= */
async function renderUnits() {
  const box = document.getElementById("units");
  box.innerHTML = "Loading...";

  const subjects = await fetchSubjects();

  if (!subjects.length) {
    box.innerHTML = "<div>No PDFs available</div>";
    return;
  }

  box.innerHTML = "";
  subjects.forEach(sub => {
    box.appendChild(createSubjectFolderDOM(sub));
  });

  lucide.createIcons();
}

/* =========================================
   UI CONTROLS (OLD FLOW KEPT)
========================================= */
window.selectBranch = b => {
  state.branch = b;
  state.year = null;
  state.semester = null;
  document.getElementById("units").innerHTML = "";
};

window.selectYear = y => {
  state.year = y;
  state.semester = null;
  document.getElementById("units").innerHTML = "";
};

window.selectSemester = s => {
  state.semester = s;
  renderUnits();
};

/* =========================================
   INIT
========================================= */
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
});

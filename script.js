const API_BASE = "http://localhost:5000";

const state = {
  branch: null,
  year: null,
  semester: null
};

function esc(str) {
  return str.replace(/[&<>"']/g, m => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[m]));
}

/* ----------------------------
   URL BUILDERS
-----------------------------*/
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

/* ----------------------------
   CORE RENDER
-----------------------------*/
async function renderUnits() {
  const box = document.getElementById("units");
  box.innerHTML = "Loading...";

  const res = await fetch(
    `${API_BASE}/api/list?branch=${state.branch}&year=${state.year}&sem=${state.semester}`
  );

  const data = await res.json();

  if (!data.length) {
    box.innerHTML = "<div>No PDFs available</div>";
    return;
  }

  box.innerHTML = "";

  data.forEach(p => {
    const view = viewUrl(state.branch, state.year, state.semester, p.filename);
    const down = downloadUrl(state.branch, state.year, state.semester, p.filename);

    const div = document.createElement("div");
    div.className =
      "bg-zinc-50 border-2 border-black p-3 flex justify-between items-center gap-3";

    div.innerHTML = `
      <a href="${view}" target="_blank" class="flex items-center gap-3">
        <div class="p-2 bg-white border-2 border-black">
          <i data-lucide="file-text"></i>
        </div>
        <div>
          <div class="font-bold text-sm">${esc(p.title)}</div>
          <div class="text-[10px] text-gray-500">${esc(p.filename)}</div>
        </div>
      </a>

      <a href="${down}" class="px-3 py-1 border-2 border-black bg-yellow-300 text-xs font-bold">
        DOWNLOAD
      </a>
    `;

    box.appendChild(div);
  });

  lucide.createIcons();
}

/* ----------------------------
   UI CONTROLS (UNCHANGED LOGIC)
-----------------------------*/
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

document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
});

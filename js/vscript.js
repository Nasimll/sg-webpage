console.log("VSCRIPT LOADED");



document.addEventListener("DOMContentLoaded", () => {

  const ADMIN_CODE = "SG22Rahmatinga";

  // paste your /exec URL here
  const API_URL = "YOUR_WEB_APP_URL_HERE";

  let projects = [];
  let vacancies = [];

  function apiGet(action) {
    return fetch(`${API_URL}?action=${action}`).then(r => r.json());
  }

  function apiPost(action, body) {
    return fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action, ...body })
    }).then(r => r.json());
  }

  // LOAD DATA
  function loadData() {
    apiGet("list").then(data => {
      projects = data.projects;
      vacancies = data.vacancies;
      renderProjectsAndVacancies();
      renderProjectChoices();
    });
  }

  // RENDER OPTIONS
  function renderProjectChoices() {
    const box = document.getElementById("projectChoiceRadios");
    box.innerHTML = "";
    projects.forEach((p, i) => {
      box.innerHTML += `
        <label>
          <input type="radio" name="projectChar" value="${p.char}" ${i === 0 ? "checked" : ""}>
          ${p.char}
        </label>
      `;
    });
  }

  // RENDER CARDS + ROWS
  function renderProjectsAndVacancies() {
    const container = document.getElementById("projectsContainer");
    container.innerHTML = "";

    projects.forEach(p => {
      const row = document.createElement("div");
      row.className = "project-row";

      row.innerHTML = `
        <h3>ВАКАНСИИ ОБЪЕКТ (${p.char})</h3>
        <div class="vacancy-slider">
          <button class="project-prev">‹</button>
          <div class="vacancy-track" data-project="${p.char}"></div>
          <button class="project-next">›</button>
        </div>
      `;

      container.appendChild(row);

      const track = row.querySelector(".vacancy-track");
      const list = vacancies.filter(v => v.projectChar === p.char);

      list.forEach(v => {
        track.innerHTML += `
          <article class="vacancy-card" data-id="${v.id}">
            ${v.imageUrl ? `<img src="${v.imageUrl}" class="vacancy-card-image">`
                          : `<div class="vacancy-card-image vacancy-card-image--placeholder"></div>`}
            <div class="vacancy-tag ${v.status === "available" ? "vacancy-tag--available" : "vacancy-tag--not_available"}">
              ${v.status.toUpperCase()}
            </div>
            <h3>${v.title}</h3>
            <p>${v.location}</p>
            <p>${v.rate} zł/hour ${v.rateType}</p>
            <button class="delete-btn" data-delete="${v.id}">Delete</button>
          </article>
        `;
      });
    });
  }

  // ADD PROJECT
  document.getElementById("addProjectForm").onsubmit = e => {
    e.preventDefault();
    const char = document.getElementById("fieldProjectChar").value.toUpperCase();

    apiPost("addProject", { projectChar: char }).then(() => loadData());
  };

  // ADD VACANCY
  document.getElementById("addVacancyForm").onsubmit = e => {
    e.preventDefault();

    const v = {
      projectChar: document.querySelector('input[name="projectChar"]:checked').value,
      title: fieldTitle.value,
      location: fieldLocation.value,
      status: fieldStatus.value,
      peopleNeeded: Number(fieldPeople.value),
      rate: Number(fieldRate.value),
      rateType: document.querySelector('input[name="rateType"]:checked').value,
      imageUrl: fieldImageUrl.value,
      description: fieldDescription.value
    };

    apiPost("addVacancy", { vacancy: v }).then(() => loadData());
  };

  // DELETE VACANCY
  document.addEventListener("click", e => {
    const del = e.target.closest("[data-delete]");
    if (!del) return;

    const id = del.dataset.delete;
    apiPost("deleteVacancy", { id }).then(() => loadData());
  });

  // FIRST LOAD
  loadData();
});

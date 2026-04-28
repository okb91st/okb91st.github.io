function setLang(lang) {
    localStorage.setItem("siteLang", lang);

    document.querySelectorAll("[data-lang]").forEach(function(element) {
        if (element.getAttribute("data-lang") === lang) {
            element.style.display = "";
        } else {
            element.style.display = "none";
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    var savedLang = localStorage.getItem("siteLang") || "zh";
    setLang(savedLang);
});

function loadProjectFromJSON() {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get("id");

    if (!projectId) return;

    fetch("blueprints.json")
        .then(res => res.json())
        .then(data => {
            const p = data.find(x => x.id === projectId);
            if (!p) return;

            document.title = p.name.en + " - OKB-91";

            document.getElementById("name-en").textContent = p.name.en;
            document.getElementById("name-zh").textContent = p.name.zh;
            document.getElementById("name-ru").textContent = p.name.ru;

            document.getElementById("status-en").textContent = p.status.en;
            document.getElementById("status-zh").textContent = p.status.zh;
            document.getElementById("status-ru").textContent = p.status.ru;

            document.getElementById("scale").textContent = p.scale;

            document.getElementById("category-en").textContent = p.category.en;
            document.getElementById("category-zh").textContent = p.category.zh;
            document.getElementById("category-ru").textContent = p.category.ru;

            document.getElementById("affiliation-en").textContent = p.affiliation.en;
            document.getElementById("affiliation-zh").textContent = p.affiliation.zh;
            document.getElementById("affiliation-ru").textContent = p.affiliation.ru;

            document.getElementById("focus-en").textContent = p.focus.en;
            document.getElementById("focus-zh").textContent = p.focus.zh;
            document.getElementById("focus-ru").textContent = p.focus.ru;

            document.getElementById("description-en").textContent = p.description.en;
            document.getElementById("description-zh").textContent = p.description.zh;
            document.getElementById("description-ru").textContent = p.description.ru;

            document.getElementById("notes-en").textContent = p.notes.en;
            document.getElementById("notes-zh").textContent = p.notes.zh;
            document.getElementById("notes-ru").textContent = p.notes.ru;

            document.getElementById("document").textContent = p.document;

            document.getElementById("document-type-en").textContent = p.documentType.en;
            document.getElementById("document-type-zh").textContent = p.documentType.zh;
            document.getElementById("document-type-ru").textContent = p.documentType.ru;

            document.getElementById("version-code").textContent = p.versionCode;

            document.getElementById("pdf-link").href = p.pdfPath;
            document.getElementById("pdf-preview").src = p.pdfPath;
        });
}

loadProjectFromJSON();

function loadProjectList() {
    const container = document.getElementById("project-list");
    if (!container) return;

    fetch("data/blueprints.json")
        .then(res => res.json())
        .then(data => {
            container.innerHTML = "";

            data.forEach(p => {
                const div = document.createElement("div");
                div.className = "project";

                div.innerHTML = `
                    <h2>
                        <a href="project.html?id=${p.id}">
                            ${p.name.en}
                        </a>
                    </h2>
                    <p><strong>Status:</strong> ${p.status.en}</p>
                    <p><strong>Scale:</strong> ${p.scale}</p>
                    <p><strong>Focus:</strong> ${p.focus.en}</p>
                `;

                container.appendChild(div);
            });
        });
}

loadProjectList();

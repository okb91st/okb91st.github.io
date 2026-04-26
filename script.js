function setLang(lang) {
    document.querySelectorAll("[data-lang]").forEach(function(element) {
        element.style.display = "none";
    });

    document.querySelectorAll('[data-lang="' + lang + '"]').forEach(function(element) {
        element.style.display = "block";
    });
}

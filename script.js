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

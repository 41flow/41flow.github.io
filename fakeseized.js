function changeTitle() {
    const newTitle = document.getElementById('titleInput').value;
    if (newTitle.trim() !== "") {
        document.title = newTitle;
        localStorage.setItem("siteTitle", newTitle);
    }
}

// Restore title from localStorage
window.onload = function () {
    const savedTitle = localStorage.getItem("siteTitle");
    if (savedTitle) {
        document.title = savedTitle;
    }
};

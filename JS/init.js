document.getElementById("initForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const location = document.getElementById("location").value.trim();

    if (!name || !location) return;

    const profile = {
        name,
        location,
        createdAt: new Date().toISOString()
    };

    localStorage.setItem("userProfile", JSON.stringify(profile));

    window.location.href = "index.html";
});

(function () {
    const user = localStorage.getItem("userProfile");

    if (!user) {
        window.location.href = "init.html";
        return;
    }

    const data = JSON.parse(user);
    const welcome = document.getElementById("welcome");

    if (welcome && data.name) {
        welcome.textContent = `Good Morning ${data.name}!`;
    }
})();

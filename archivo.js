document.addEventListener("DOMContentLoaded", async () => {
    const navbarHost = document.getElementById("navbar-container");
    if (!navbarHost) return;

    try {
        const response = await fetch("components/navbar.html");
        if (!response.ok) {
            throw new Error(`No se pudo cargar el navbar: ${response.status}`);
        }

        navbarHost.innerHTML = await response.text();

        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        const currentLink = navbarHost.querySelector(`[data-route="${currentPage}"]`);
        if (currentLink) {
            currentLink.classList.add("active");
            currentLink.setAttribute("aria-current", "page");
        }
    } catch (error) {
        console.error(error);
    }
});

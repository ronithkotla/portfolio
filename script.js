function toggleSidebar() {
    let sidebar = document.getElementById("sidebar");
    let menuBtn = document.getElementById("menu-btn");

    // Toggle sidebar visibility
    sidebar.classList.toggle("active");

    // Change icon between ☰ and ✖
    if (sidebar.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark fa-2x"></i>'; // Change to "X"
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars fa-2x"></i>'; // Change back to "☰"
    }
}

// Close sidebar when any link is clicked
function closeSidebar() {
    let sidebar = document.getElementById("sidebar");
    let menuBtn = document.getElementById("menu-btn");

    sidebar.classList.remove("active");
    menuBtn.innerHTML = '<i class="fa-solid fa-bars fa-2x"></i>'; // Reset to "☰"
}



// Add this observer to track section visibility
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const navLink = document.querySelector(`.nav[href="#${id}"]`);
        if (entry.isIntersecting) {
            navLink.classList.add('active-nav');
        } else {
            navLink.classList.remove('active-nav');
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of section is visible

// Observe all sections
document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
});

// Add smooth scroll behavior
document.querySelectorAll('.nav').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const offsetTop = document.querySelector(href).offsetTop;
        window.scrollTo({
            top: offsetTop - 60, // Adjust for header height
            behavior: "smooth"
        });
    });
});
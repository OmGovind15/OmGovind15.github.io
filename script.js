document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const contentSections = document.querySelectorAll('.content-section');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            // Remove active class from all nav items and sections
            navItems.forEach(nav => nav.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));

            // Add active class to the clicked nav item
            item.classList.add('active');

            // Show the corresponding content section
            const targetId = item.getAttribute('href');
            document.querySelector(targetId).classList.add('active');
        });
    });
});

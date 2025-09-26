document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const contentSections = document.querySelectorAll('.content-section');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.container');

    // --- Navigation Logic to show/hide sections ---
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

    // --- Sidebar Toggle Logic ---
    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        container.classList.toggle('collapsed');
    });
});
// --- MODAL LOGIC ---
const openModalTriggers = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('.modal-close');
const modals = document.querySelectorAll('.modal');
openModalTriggers.forEach(trigger=>{trigger.addEventListener('click',()=>{const modal=document.querySelector(trigger.dataset.modalTarget);modal.classList.add('active');});});
closeModalButtons.forEach(button=>{button.addEventListener('click',()=>{const modal=button.closest('.modal');modal.classList.remove('active');});});
modals.forEach(modal=>{modal.addEventListener('click',e=>{if(e.target===modal){modal.classList.remove('active');}});});

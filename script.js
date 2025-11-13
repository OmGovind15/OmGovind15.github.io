document.addEventListener('DOMContentLoaded', () => {
    // --- Navigation Logic ---
    const navItems = document.querySelectorAll('.nav-item');
    const contentSections = document.querySelectorAll('.content-section');

    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            navItems.forEach(nav => nav.classList.remove('active'));
            contentSections.forEach(section => section.classList.remove('active'));
            item.classList.add('active');
            const targetId = item.getAttribute('href');
            document.querySelector(targetId).classList.add('active');
        });
    });

    // --- Sidebar Toggle Logic ---
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.container');

    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        container.classList.toggle('collapsed');
    });

    // --- MODAL LOGIC (NOW MOVED INSIDE) ---
    const openModalTriggers = document.querySelectorAll('[data-modal-target]');
    const closeModalButtons = document.querySelectorAll('.modal-close');
    const modals = document.querySelectorAll('.modal');

    openModalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const modal = document.querySelector(trigger.dataset.modalTarget);
            modal.classList.add('active');
        });
    });

    closeModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            modal.classList.remove('active');
        });
    });

    modals.forEach(modal => {
        modal.addEventListener('click', e => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });
    });
    const readMoreBtns = document.querySelectorAll('.read-more-btn');

    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const textContent = btn.previousElementSibling;
            textContent.classList.toggle('collapsed');

            if (textContent.classList.contains('collapsed')) {
                btn.textContent = 'Read more...';
            } else {
                btn.textContent = 'Show less';
            }
        });
    });
});

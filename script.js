document.addEventListener('DOMContentLoaded', () => {
    // Navigate to overview by default when dashboard opens
    showPage('overview');

    // Attach click events to all sidebar links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageId = link.getAttribute('data-page');
            showPage(pageId);
        });
    });
});

function showPage(pageId) {
    const pages = document.querySelectorAll('.page-content');
    const navLinks = document.querySelectorAll('.nav-link');

    // 1. Hide all pages
    pages.forEach(p => p.classList.add('hidden'));

    // 2. Show target page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.remove('hidden');
    } else {
        // Fallback for unimplemented sections
        document.getElementById('overview').classList.remove('hidden');
        console.warn(`Section "${pageId}" is not yet implemented.`);
    }

    // 3. Update active state and hover behavior
    navLinks.forEach(link => {
        if (link.getAttribute('data-page') === pageId) {
            link.classList.add('active');
            link.classList.remove('hover:bg-indigo-50');
        } else {
            link.classList.remove('active');
            link.classList.add('hover:bg-indigo-50');
        }
    });
}
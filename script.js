
(function() {
    // Light / Dark mode with localStorage
    const themeBtn = document.getElementById('themeToggleBtn');
    const setTheme = (theme) => {
    if (theme === 'light') {
        document.body.classList.add('light-mode');
        if(themeBtn) themeBtn.innerHTML = '☀️';
    } else {
        document.body.classList.remove('light-mode');
        if(themeBtn) themeBtn.innerHTML = '🌙';
    }
    localStorage.setItem('theme', theme);
    };
    const saved = localStorage.getItem('theme');
    if (saved === 'light') setTheme('light');
    else setTheme('dark');
    if(themeBtn) themeBtn.addEventListener('click', () => {
    const isLight = document.body.classList.contains('light-mode');
    setTheme(isLight ? 'dark' : 'light');
    });

    // Contact form handler
    const form = document.getElementById('messageForm');
    const feedback = document.getElementById('formFeedback');
    if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('senderName').value.trim();
        const email = document.getElementById('senderEmail').value.trim();
        const msg = document.getElementById('messageText').value.trim();
        if(!name || !email || !msg) {
        feedback.innerHTML = '<span style="color:#e07c7c;">❌ All fields are required.</span>';
        setTimeout(() => feedback.innerHTML = '', 3000);
        return;
        }
        if(!email.includes('@') || !email.includes('.')) {
        feedback.innerHTML = '<span style="color:#e07c7c;">⚠️ Please enter a valid email.</span>';
        setTimeout(() => feedback.innerHTML = '', 3000);
        return;
        }
        feedback.innerHTML = '<span style="color:#8bc34a;">✅ Message sent! Thanks ' + name + ', I’ll reply soon.</span>';
        form.reset();
        setTimeout(() => feedback.innerHTML = '', 4000);
    });
    }

    // close mobile menu on link click
    const navLinks = document.querySelectorAll('.nav-links a');
    const mobileMenu = document.querySelector('.nav-links');
    navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if(window.innerWidth <= 640 && mobileMenu?.classList.contains('open')) mobileMenu.classList.remove('open');
    });
    });
})();
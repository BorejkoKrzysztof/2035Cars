
// OPEN HAMBURGER MENU
document.getElementById('open-mobile-nav-links').addEventListener('click', () => {
    var mobileNavLinksBackground = document.getElementById('mobile-nav-links-background');

    mobileNavLinksBackground.classList.toggle('mobile-nav-links-bg-active');
    
});

// CLOSE HAMBURGER MENU
document.getElementById('close-mobile-nav-links').addEventListener('click', () => {
    var mobileNavLinksBackground = document.getElementById('mobile-nav-links-background');

    mobileNavLinksBackground.classList.remove('mobile-nav-links-bg-active');
});
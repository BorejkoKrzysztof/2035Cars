
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

// CLOSE MENU ON RESIZING SCREEN
window.addEventListener('resize', () => {
    var mobileNavLinksBackground = document.getElementById('mobile-nav-links-background');

    if (mobileNavLinksBackground.classList.contains('mobile-nav-links-bg-active') &&
        window.innerWidth > 959) {
        mobileNavLinksBackground.classList.remove('mobile-nav-links-bg-active');
    }
});
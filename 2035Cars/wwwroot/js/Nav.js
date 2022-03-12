
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

// ONCLICK CARS NAV LINK
document.getElementById('cars-nav-link').addEventListener('click', () => {

    // ROTATE
    document.getElementById('cars-nav-link-arrow').classList.toggle('rotate-180');

    let hiddenMenuLauncher = document.getElementById('hidden-links-car');

    if (hiddenMenuLauncher.classList.contains('hidden')) {
        hiddenMenuLauncher.classList.remove('hidden')
    }
    else {
        hiddenMenuLauncher.classList.add('hidden');
    }
});

// ONCLICK MORE NAV LINK
document.getElementById('more-nav-link').addEventListener('click', () => {

    // ROTATE
    document.getElementById('more-nav-link-arrow').classList.toggle('rotate-180');

    let hiddenMenuLauncher = document.getElementById('hidden-links-more');

    if (hiddenMenuLauncher.classList.contains('hidden')) {
        hiddenMenuLauncher.classList.remove('hidden')
    }
    else {
        hiddenMenuLauncher.classList.add('hidden');
    }
});
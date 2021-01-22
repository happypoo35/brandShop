const headerMenuBtn = document.getElementById('header_menu_a');
const promoMenuCloseBtn = document.getElementById('promo_menu_close');
const promoMenu = document.getElementsByClassName('promo-menu')[0];
const promoOverlay = document.getElementsByClassName('promo-overlay')[0];


headerMenuBtn.addEventListener('click', e => {
    e.preventDefault();

    promoMenu.classList.toggle('show');
    promoOverlay.classList.toggle('show');
});

promoMenuCloseBtn.addEventListener('click', e => {
    e.preventDefault();

    promoMenu.classList.remove('show');
    promoOverlay.classList.remove('show');
});

promoOverlay.addEventListener('click', e => {
    e.preventDefault();

    promoMenu.classList.remove('show');
    promoOverlay.classList.remove('show');    
})
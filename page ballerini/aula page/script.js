const menuShow = () => {
    let menuMobile = document.getElementById('cabeçalho-responsivo');
    if(menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
    }
    else {
        menuMobile.classList.add('open')
    }
}
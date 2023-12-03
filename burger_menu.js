let burger = document.getElementById('borgir');
let content = document.getElementById('content');

burger.addEventListener('click', function () {
    let open = document.getElementById('open');
    let close = document.getElementById('close');

    if (!open.classList.contains('hide_me')) {
        open.classList.add('hide_me');
        close.classList.remove('hide_me');
        content.style.transform='translateY(0%) translateZ(-10px)';
    } else {
        open.classList.remove('hide_me');
        close.classList.add('hide_me');
        content.style.transform='translateY(-150%) translateZ(-10px)';
    }
});

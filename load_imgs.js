let div = document.getElementById('main');
for (let i=1;i<=12;i++) {
    const image = document.createElement('img');
    image.classList.toggle('pic');
    image.style.marginTop='100vh';
    image.onload = function () {
        image.style.marginTop='2rem';
    };
    image.src='./imgs/' + i + '.jpg';
    image.onclick = function () {
        show_modal(i);
    };
    div.append(image);
}

function show_modal (img) {
    let modal = document.getElementById('modal');
    let modal_img = document.getElementById('modal_img');
    modal.classList.toggle('hide_me');
    modal_img.src='./imgs/' + img + '.jpg';
}

function close_modal () {
    let modal = document.getElementById('modal');
    modal.classList.toggle('hide_me');
}

function scena() {
    document.getElementById('scena').style.transition = '1s';
    document.getElementById('scena').style.bottom = '100%';
}

cl = document.getElementById('stick')

obj = document.querySelectorAll('.lampa > img:first-child');

obj[0].addEventListener('mousedown', event => {
    cl.style.marginTop = '5vh';
});

obj[0].addEventListener('mouseup', event => {
    cl.style.marginTop = '2vh';
});


var tri = true;

function light() {
    if (tri) {
        document.getElementById('trap').style.opacity = '0.5';
        document.getElementById('main').style.opacity = '1';
        document.getElementById('wiht').style.display = 'block';
        tri = false;
    }
    else {
        document.getElementById('trap').style.opacity = '0';
        document.getElementById('main').style.opacity = '0';
        document.getElementById('wiht').style.display = 'none';
        tri = true;
    }

}


var rabbit = true;
function magic() {
    document.getElementById('rabbit').style.transition = '0.5s';
    document.getElementById('bird').style.transition = '0.5s';
    if (rabbit) {
        document.getElementById('rabbit').style.bottom = '10vh';
        setTimeout(() => { document.getElementById('bird').style.bottom = '25vh' }, 500);
        rabbit = false;
    }
    else {
        document.getElementById('bird').style.bottom = '10vh';
        setTimeout(() => { document.getElementById('rabbit').style.bottom = '25vh' }, 500);
        rabbit = true;
    }
    setTimeout(() => {
        document.getElementById('rabbit').style.transition = '0s';
        document.getElementById('bird').style.transition = '0s';
    }, 1000);
}
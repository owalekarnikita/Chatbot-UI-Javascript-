//for changing msging content
let a = document.getElementById('two');
let b = document.getElementById('one');
let ch = document.getElementById('third');
let ct = document.getElementById('fourth');
let no = document.getElementById('main');

a.onclick = function() {
    let rd = document.getElementById('round');
    rd.style.display = 'none';
    ct.style.display = 'block';
    ch.style.display = 'none';
    a.classList.add('act');
    b.classList.remove('act');
    document.getElementById('scrol').scrollBy(500, 800);
    no.classList.add('main3');
}
function first() {
    ch.style.display = 'block';
    ct.style.display = 'none';
    b.classList.add('act');
    a.classList.remove('act');
    no.classList.add('main2');
}

//for changing theme
function changeTheme() {
    let one = document.getElementById('main');
    one.classList.toggle('themechange');

}

//for changing second div content
let msg = document.getElementById('msg');
let call = document.getElementById('call');
let dv = document.getElementById('dv');
let video = document.getElementById('video');

function calls() {
    dv.style.display = 'none';
    video.style.display = 'block';
    call.classList.add('active');
    msg.classList.remove('active');
}

function message() {
    dv.style.display = 'block';
    video.style.display = 'none';
    msg.classList.add('active');
    call.classList.remove('active');
}

//scrollbar bottom
document.getElementById('scroll').scrollBy(500, 800);


function back() {
    no.classList.remove('main2');
}
function backbtn() {
    no.classList.remove('main3');
}
var btn = document.getElementById('menu-btn');
var nav = document.getElementById('menu');

btn.onclick = () => {
    btn.classList.toggle('open');
    nav.classList.toggle('flex');
    nav.classList.toggle('hidden');
}
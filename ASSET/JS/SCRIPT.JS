const Horas = document.getElementById('horas');
const Minutos = document.getElementById('minutos');
const Segundos = document.getElementById('segundos');

const Relógio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;

    if (min < 10) min = '0' + min;

    if (s < 10) s = '0' + s;

    Horas.textContent = hr;
    Minutos.textContent = min;
    Segundos.textContent = s;

})
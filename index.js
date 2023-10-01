const button = document.querySelector('button');

button.addEventListener('click', function(){
    const height = document.querySelector('input').value;

    const centimeters = height * 30.48;
    const meter = height * 0.3048;

    document.querySelector('#centimeters').innerHTML = centimeters;
    document.querySelector('#meters').innerHTML = meter;
});
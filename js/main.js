const div = document.getElementById('div');

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    div.classList.toggle('hide');
    console.log('click');
})


div.classList.add('div-green');

console.log(div.className);

// div.style.color = "red";



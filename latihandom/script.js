const btn = document.getElementById('tombol');
btn.addEventListener('click', function() {
    document.body.classList.toggle('lightgreen');
});

const newBtn = document.createElement('button');
const btnText = document.createTextNode('Random!');
newBtn.appendChild(btnText);
newBtn.setAttribute('type', 'button');
btn.after(newBtn);

newBtn.addEventListener('click', function() {
    const r = (Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb()';
})
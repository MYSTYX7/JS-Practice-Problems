

const number = document.querySelector('.count-number');

const btn = document.querySelector('.generate');



let generateNumber = () => {
    const rand = Math.floor(Math.random() * 10 +1);
    number.innerHTML = rand;
    console.log(rand);
}

btn.addEventListener('click', generateNumber);
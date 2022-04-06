const modal = document.querySelector('.modal');
const buttonSpidey = document.querySelector('#button-spidey');
const buttonBatman = document.querySelector('#button-batman');
const buttonRobin = document.querySelector('#button-robin');
//boton cerrar
const closeButton = document.querySelector('.modal__content--close');

const cards = document.querySelector('.cards');
//se cambia la visilidad del modal 
buttonBatman.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
    // cards.innerHTML = `
    // <label for="radio-1" id="card-1" class="card">
    //     <img src="./img/spider/slider1.webp" alt="spiderman 1"/>
    // </label>
    // <label for="radio-2" id="card-2" class="card">
    //     <img src="./img/spider/slider-spider2.webp" alt="spiderman 2"/>
    // </label>
    // <label for="radio-3" id="card-3" class="card">
    //     <img src="./img/spider/slider-spider3.webp" alt="spiderman 3"/>
    // </label>
    // `;
});
buttonRobin.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
    // cards.innerHTML = `
    // <label for="radio-1" id="card-1" class="card">
    //     <img src="./img/spider/slider1.webp" alt="spiderman 1"/>
    // </label>
    // <label for="radio-2" id="card-2" class="card">
    //     <img src="./img/spider/slider-spider2.webp" alt="spiderman 2"/>
    // </label>
    // <label for="radio-3" id="card-3" class="card">
    //     <img src="./img/spider/slider-spider3.webp" alt="spiderman 3"/>
    // </label>
    // `;
});
buttonSpidey.addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
    // cards.innerHTML = `
    // <label for="radio-1" id="card-1" class="card">
    // <img src="./img/spider/slider1.webp" alt="spiderman 1"/>
    // </label>
    // <label for="radio-2" id="card-2" class="card">
    //     <img src="./img/spider/slider-spider2.webp" alt="spiderman 2"/>
    // </label>
    // <label for="radio-3" id="card-3" class="card">
    //     <img src="./img/spider/slider-spider3.webp" alt="spiderman 3"/>
    // </label>
    // `;
});

// boton para cerrar el modal
closeButton.addEventListener('click', () => {
    // console.log("here");
    
    // modal.style.display = 'none';

    modal.classList.remove('visible');
    modal.classList.add('hidden');
    // cards.innerHTML = `
    // <label for="radio-1" id="card-1" class="card">
    // <img src="./img/spider/slider1.webp" alt="spiderman 1"/>
    // </label>
    // <label for="radio-2" id="card-2" class="card">
    //     <img src="./img/spider/slider-spider2.webp" alt="spiderman 2"/>
    // </label>
    // <label for="radio-3" id="card-3" class="card">
    //     <img src="./img/spider/slider-spider3.webp" alt="spiderman 3"/>
    // </label>
    // `;
});
const sli = document.querySelector(".slider-container");
const slides = Array.from(document.querySelectorAll(".slider-container img"));
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let totalSlides = slides.length;
let currentSlide = 1;

prevBtn.onclick = prevSlide;
nextBtn.onclick = nextSlide;


function prevSlide() {

    if (currentSlide === 1) {
        return;
    }
    else {
        currentSlide--;
        checker();
    }
}
function nextSlide() {
    if (currentSlide === totalSlides) {
        return;
    }
    else {
        currentSlide++;
        checker();
    }
}

const ul = document.createElement('ul');
ul.setAttribute('id', 'pagination-ul');

for (let i = 0; i < slides.length; i++) {
    const li = document.createElement('li');
    li.setAttribute('data-index', i);
    li.innerHTML = `${i + 1}`;
    ul.appendChild(li);
}
document.getElementById('indicators').appendChild(ul);

const paginationsBullets = Array.from(document.querySelectorAll('#indicators li'));


for (let i = 0; i < slides.length; i++) {
    paginationsBullets[i].onclick = function () {
        currentSlide = i + 1;
        checker();
    }
}
function removeAllActive() {
    slides.forEach((img) => {
        img.classList.remove('active');
    })
    paginationsBullets.forEach((img) => {
        img.classList.remove('active');
    })
}

function checker() {
    document.getElementById('slide-number').innerHTML = `slide # ${currentSlide} of ${totalSlides}`;

    removeAllActive();

    slides[currentSlide - 1].classList.add('active');
    paginationsBullets[currentSlide - 1].classList.add('active');

    if (currentSlide == 1) {
        prevBtn.classList.add('disabled')
    } else {
        prevBtn.classList.remove('disabled');
    }
    if (currentSlide == totalSlides) {
        nextBtn.classList.add('disabled')
    } else {
        nextBtn.classList.remove('disabled');
    }
}

// calling the checker for  initial the ...
checker();

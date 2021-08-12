const per = document.querySelector(".loading-text");
const bg= document.querySelector(".bg");
const bulletHolder = document.querySelector('.loading-bullet');
const bullet = document.querySelector('.bul');
// bullet.addEventListener("DOMContentLoaded" , loading);
per.addEventListener("DOMContentLoaded" , blurry);


let load = 0;
let blu = 30;
let bulletProg = 0;
let loading = setInterval(load,30);
let loa = setInterval(bulletProg,30);
let int = setInterval(blurry,30);
per.style.opacity = 1;
bullet.style.opacity = 1;
bulletHolder.style.opacity = 1;
bg.style.filter = `blur(${blu}px)` ;
function blurry (e) {
    load++;
    bulletProg++;
    if(load <= 100 && bulletProg <= 100){
        per.innerHTML = `${load}%`;
        per.style.opacity -= 0.01;
        bg.style.filter = `blur(${blu}px)`;
        blu-=(30/100);
        //bullet
        bullet.style.width = `${bulletProg}%`;
        bullet.style.opacity -= 0.01;
        bulletHolder.style.opacity -= 0.01;
    }
}


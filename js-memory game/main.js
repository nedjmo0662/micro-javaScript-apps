document.querySelector('.control-buttons span').onclick = function() {
    let yourName = prompt("What's your name?");
    if(yourName) {
        document.querySelector('.name span').innerHTML = yourName;
        }else {
        document.querySelector('.name span').innerHTML = 'Uknown';
        }
    document.querySelector('.control-buttons').remove();
}

let blocksContainer = document.querySelector('.game-block');
let blocks = Array.from(blocksContainer.children);
let orderRange = [...Array(blocks.length).keys()];

shuffle(orderRange);

blocks.forEach((block,index) => {
    block.style.order = orderRange[index];
    // block.style.order = Math.floor(Math.random() * current);

    //add click event
    block.addEventListener('click', function() {
        flipBlock(block);
    });
});

function flipBlock(selctedBlock) {
    selctedBlock.classList.add('is-flipped');

    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

    if(allFlippedBlocks.length === 2){
        stopClicking();
        checkIfMatched(allFlippedBlocks);
    }else {
        console.log(1);
        setTimeout(function(){
            allFlippedBlocks[0].classList.remove('is-flipped');
        },800);
    }
}

function stopClicking() {
    //make the images none clickeble 
    blocksContainer.style.pointerEvents = 'none';

    //another way-------
    // blocks.forEach(block=> {
    //     block.style.pointerEvents = 'none';
    // });
}
let wrongTries = 0;
let rightTries =0;
function checkIfMatched(array) {
    if(array[0].getAttribute('data-technology') === array[1].getAttribute('data-technology')){

        array[0].classList.remove('is-flipped');
        array[1].classList.remove('is-flipped');
        array[0].style.transform = `rotateY(180deg)`;
        array[1].style.transform = `rotateY(180deg)`;
        rightTries++;
        //make the images clickable again
        blocksContainer.style.pointerEvents = 'fill';

        //another way to make the image clickable again
        // blocks.forEach(block=>{
        //     block.style.pointerEvents = 'fill';
        // })
        document.getElementById('success').play();
    }
    else {
        setTimeout(function(){
            array[0].classList.remove('is-flipped');
            array[1].classList.remove('is-flipped');
            
            //make the images clickable again
            blocksContainer.style.pointerEvents = 'fill';
            //another way-----
            // blocks.forEach(block=>{
            //     block.style.pointerEvents = 'fill';
            // })
            
        },800);
        // document.getElementById('fail').play();
        wrongTries++;
    }
    document.querySelector('.tries span').innerHTML = wrongTries;
    if(rightTries == 10){
        document.querySelector('.win-message').style.display = 'block';
        document.querySelector('.cancel-btn').addEventListener('click',(e)=>{
            document.querySelector('.win-message').style.display = 'none';
        });
        document.querySelector('.refresh-btn').addEventListener('click',(e)=>{
            setTimeout(window.location.reload(),300)
        });
    }
}
function shuffle(array) {
    let temp,random,current = array.length;
    while(current > 0) {
        random = Math.floor(Math.random() * current);
        current--;

        temp = array[current];
        array[current] = array[random];
        array[random] = temp;

    }
    return array;
}
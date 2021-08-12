const input  = document.getElementById('input-el');
const btn  = document.getElementById('input-btn');
const links  = document.getElementById('links');
const delBtn = document.getElementById('del-btn');
// const linkEl = document.querySelector('.link-el');

let items = [];
let del=[];


let storageItem = JSON.parse(localStorage.getItem('items'));
if(storageItem ){
    items = storageItem;
    display();
}


links.addEventListener('dblclick',dblClick);
delBtn.addEventListener("click",delItems);
btn.addEventListener('click' , addLink)
input.addEventListener('keypress' , function(e){
    if(e.key == "Enter"){
        addLink();
    }
});


function addLink(e) {

        const inputeEl = input.value;
        
        items.push(inputeEl);
        localStorage.setItem('items',JSON.stringify(items));
        display();
        input.value = "";
}

function display(){
    let listItems = "";
    for(let i = 0 ; i< items.length; i++){
        listItems +=`<li class="link-el" >
                <a href="${items[i]}" target="_blank">
        ${items[i]} 
                </a>
        </li>`;
    }
    links.innerHTML= listItems;
}

function dblClick(e) {
    del = [];
    if(e.target.classList[0] === 'link-el'){
        e.target.classList.add('hide');
        del.push(e.target.children[0].innerHTML.trim());
    }
    console.log(old);
}
function delItems(e) {
    items = JSON.parse(localStorage.getItem('items'));
    for(let i=0; i< del.length ; i++){
        for(let j=0; j< items.length ;j++){
            if(items[j] === del[i]){
                items.splice(j,1);
            }
        }
    }
    localStorage.setItem("items",JSON.stringify(items));
    display();
}
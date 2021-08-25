const ul = document.querySelector('.users');
const searchInput = document.getElementById('input');
//array of all li (users)
let listUsers ;

//functions
searchInput.addEventListener('input',search);

loadUsers();

async function loadUsers (e) {

    const req = await fetch('https://randomuser.me/api?results=50')
    const {results} = await req.json();
    // console.log(results);
    ul.innerHTML = '';
    let html = '';
    results.forEach(user => {
        html +=`<li>
        <img src="${user.picture.large}"
        alt="${user.name.first} ${user.name.last}"
        />
        <div class="user-info">
          <h4>${user.name.first} ${user.name.last}</h4>
          <p>${user.location.city} ${user.location.country}</p>
        </div>
      </li>`;
    });
    ul.innerHTML = html;
  listUsers = Array.from(document.querySelectorAll('ul li'));
}

function search(e) {
    let input = e.target.value;
    input = input.toLowerCase();
    listUsers.forEach(user =>{
        if(user.innerText.toLowerCase().includes(`${input}`)){
            user.classList.remove('hide');
        }
        else{
            user.classList.add('hide');
        }
    })
}
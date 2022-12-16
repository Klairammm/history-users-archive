
//-------------FUNCION RANDOM BIRTHDAY---------------------

function getRandomDate(startDate, endDate) {
  const minValue = startDate.getTime();
  const maxValue = endDate.getTime();
  const timestamp = Math.floor(Math.random() * (maxValue - minValue + 1) + minValue);
  return new Date(timestamp)
}

//-------------END FUNCION RANDOM BIRTHDAY---------------------

//-----------TODAY DATE---------------------

let data = new Date();
let gg, mm, aaaa;
gg = data.getDate() + "/";
mm = data.getMonth() + 1 + "/"; // +1 perchè il conteggio dei mesi è da 0 a 11
aaaa = data.getFullYear();
// console.log("Oggi è il " + gg + mm + aaaa);

let todayDate = gg + mm + aaaa
console.log("Today date: ", todayDate)
// console.log(todayDate.lastIndexOf("/")) //trovare posizione secondo /
let thisYear = todayDate.substring(6)
console.log("this year: ", thisYear)

//------------END TODAY DATE---------------

//---------------FETCH USERS----------------

const urlUsers = "https://jsonplaceholder.typicode.com/users"
const over50 = document.querySelector(".card-content-over-50")

fetch(urlUsers)
.then((res) => res.json())
.then(data => {
  const userList = data.map(item => {
    item.birthday = getRandomDate(new Date(1960,0,1), new Date(2000,11,31)).toDateString()
    item.age = new Date().getFullYear() - new Date(item.birthday).getFullYear()
    item.image = arrayImage[parseInt(getRandomNumber(0,10))] 
    return item
  })
  test(userList)
   })

   function test(userList) {
    userList.map((user) => createCard(user, cardContent))

    console.log(userList)

    //------------USERS OVER 50

    userList.filter((user) => user.age >= 50)
    .map((user) => {
      createCard(
        user,
        over50
      )})
  }



//---------------END FETCH USERS----------------


//-------------FUNCTION CHANGE THEME PAGE-------------



function changeTheme() {
    let element = document.body
    element.classList.toggle("light-mode");
 }

//----------------END FUNCTION CHANGE THEME PAGE-----------

//----------FUNCTION RANDOM NUMBER FOR USER IMAGE---------

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
console.log(parseInt(getRandomNumber(0,10)))

//----------END FUNCTION RANDOM NUMBER FOR USER IMAGE---------

//----------FUNCTION CREATE CARD-----------
const cardContent = document.querySelector(".card-content")

const createCard = (data, appendTo) => {

    const cardEl = document.createElement("div")
    const userImage = document.createElement("img")
    const userName = document.createElement("h3")
    const userBirthday = document.createElement("p")
    const userEmail = document.createElement("p")

    cardEl.className = "card-el"
    userImage.className = "user-image"
    userImage.setAttribute("src", data.image)
    userImage.setAttribute("alt", data.name)
    userName.className = "user-name"
    userBirthday.className = "user-birthday"
    userEmail.className = "user-email"

    userName.textContent = data.name
    userBirthday.textContent = new Date(data.birthday).toLocaleDateString()
    userEmail.textContent = data.email

    //append elements
    cardEl.append(userImage, userName, userBirthday, userEmail)
    appendTo.append(cardEl)
}

//----------END FUNCTION CREATE CARD-----------

//-------RANDOM IMAGE----------------

const arrayImage = []

for(let i = 0; i<=9; i++) {
  arrayImage.push(`https://randomuser.me/api/portraits/lego/${i}.jpg`)
}
console.log(arrayImage)

//-------END RANDOM IMAGE----------------

//-------CAROUSEL EVENT-----------

const slider = document.querySelector('.card-content');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', e => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', _ => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', e => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const SCROLL_SPEED = 3;
  const walk = (x - startX) * SCROLL_SPEED;
  slider.scrollLeft = scrollLeft - walk;
});

//-------END CAROUSEL EVENT-----------

//-------CHANGE THEME EVENT-----------

const btn = document.querySelector(".theme")
const backgroundColors = ["#000000", "#50577a", "#008f8d", "#16213e", "#182747"]

btn.addEventListener('click', function(){
  //get random number between 0-3
  document.body.style.backgroundColor = backgroundColors[parseInt(getRandomNumber(0,5))]
})

//-------END CHANGE THEME EVENT-----------

//-------------BACK TO TOP----------

window.addEventListener("scroll",function(){

  if(window.pageYOffset > 1000) {
  document.getElementById("tornasu").style.display="block";
  }
  
  else {
  document.getElementById("tornasu").style.display="none";
  }
  
  });
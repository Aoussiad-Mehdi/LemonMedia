//Selecting elements.
const hamburgerBtn = document.querySelector(".hamburgerBtn");
const hamburgerIcon = document.querySelector(".hamburgerBtn i");
const navbar = document.querySelector(".container nav");

// Toggle Hamburger Menu.
hamburgerBtn.addEventListener("click", ()=>{
 if(navbar.className === "nav"){
  hamburgerIcon.className = 'fas fa-times';
  navbar.classList.toggle("active");
  navbar.style.display = "flex";
 }else{
  navbar.classList.toggle('active');
  hamburgerIcon.className = 'fas fa-bars';
  navbar.style.display = 'none';
 }
});
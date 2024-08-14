// TODO: Query for button with an id "theme-button"
let themeButton = document.getElementById("theme-button");

// TODO: Complete the toggleDarkMode function
const toggleDarkMode = () => { document.body.classList.toggle("dark-mode");
    // Write your code to manipulate the DOM here
    // Get all the elements with class "dark-mode-toggle"
 const bodyElements = document.getElementsByTagName("body")[0].children;
  for (let i = 0; i < bodyElements.length; i++) {
    bodyElements[i].classList.toggle("dark-mode");
  }
const bodyElementClass = document.getElementsByClassName("dark-mode-toggle");
  for (let i = 0; i < bodyElementClass.length; i++) {
   bodyElementClass[i].classList.toggle("dark-mode");
 }
};
// TODO: Register a 'click' event listener for the theme button
// Set toggleDarkMode as the callback function.
themeButton.addEventListener("click", toggleDarkMode);

// // Add your query for the sign now button here
let signPetition = document.getElementById("sign-now-button");

let count = 3;

const addSignature = (person) => {
  // Write your code to manipulate the DOM here
  let newParagraph = document.createElement("p");
  newParagraph.innerText = "️🖊️" + person.name + " supports this.";
  const div = document.querySelector(".signatures");
div.appendChild(newParagraph);


  document.getElementById("counter").remove();


  count = count + 1;
  let newCounter = document.createElement("p");
  newCounter.innerText = "️🖊️" + count + " people have signed this petition and support this cause.";
   newCounter.setAttribute("id", "counter");
  
div.appendChild(newCounter);

  // Show the modal after adding the signature
  toggleModal(person);
  };

const validateForm = () => {

  let containsErrors = false;
  let petitionInputs = document.getElementById("sign-petition").elements;
  let person = {
    name:petitionInputs[0].value,
  email:petitionInputs[1].value};


    if (person.name.length < 2) {
      petitionInputs[0].classList.add('error');
      containsErrors = true;
    } else {
      petitionInputs[0].classList.remove('error');
    }
    let email = document.getElementById('email');
    if (!person.email.includes('.com')) {
      containsErrors = true;
      email.classList.add('error');
    } else {
      email.classList.remove('error');
      
    }
  
  if (containsErrors == false) {
    addSignature(person);
        petitionInputs[0].value = ""; // Clear the name input
          for (let i = 1; i < petitionInputs.length; i++) {
            petitionInputs[i].value = ""; // Clear other input values
      
  }}
};
signPetition.addEventListener('click', validateForm);


let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'  
}

let revealableContainers = document.querySelectorAll(".revealable");

let reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
      if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
        revealableContainers[i].classList.add("active");
      
      } else {
      revealableContainers[i].classList.remove("active");
      }

    
  }
  };
window.addEventListener("scroll", reveal);

// Reduce Motion

let reduceButton = document.getElementById("reduce-button");
let reduceMotion1 = () => {
    for (let i = 0; i < revealableContainers.length; i++) {
    revealableContainers[i].style.transition = "none";
    revealableContainers[i].style.revealDistance = 100;
       revealableContainers[i].style.transitionTimingFunction= "linear";
  }
  
};
reduceButton.addEventListener("click", reduceMotion1);



let toggleModal = (person) =>{

  let modal = document.getElementById("thanks-modal");

  let modalContent = document.getElementById("thanks-modal-content");

  modal.style.display = "flex";

  modalContent.textContent = "Thank you so much " + person.name + "! Welcome to our community.";

 
  let intervalId = setInterval(() => {
    scaleImage();}, 500);

  setTimeout(() => {
    clearInterval(intervalId);
    modal.style.display = "none";
  }, 4000);

};

let scaleFactor = 1;

let modalImage = document.getElementById("modal-image");

let scaleImage = () =>{
  if (scaleFactor == 1){
    scaleFactor = 0.8;
  } else{
    scaleFactor = 1;
  }
    // Apply the scale transformation to the modal image
    modalImage.style.transform = `scale(${scaleFactor})`;
  };

// Modal Close Button
let modalCloseButton = document.getElementById("modal-close-button");

const closeModal = () => {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
};

modalCloseButton.addEventListener("click", closeModal);
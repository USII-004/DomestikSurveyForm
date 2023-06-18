// function enterUsername () {
//   let inputName = document.getElementById("name");
//   inputName.setAttribute("placeholder", "please enter a your name");
// }

// function enterEmail () {
//   let inputEmail = document.getElementById("email");
//   inputEmail.setAttribute("placeholder", "please enter a your email address")
// }

// this functions above will help instruct the user to enter their name and eamil 
// if the field is empty.

document.getElementById("firstName").onblur = function () {
  this.setAttribute("placeholder", "please enter a your First name");
}

document.getElementById("lastName").onblur = function () {
  this.setAttribute("placeholder", "please enter a your Last name");
}

document.getElementById("otherName").onblur = function () {
  this.setAttribute("placeholder", "please enter a your other names");
}

document.getElementById("email").onblur = function () {
  this.setAttribute("placeholder", "please enter a your email address");
}

// the commented code above and this code does the same thing. 
// just that here we use the document object model (DOM) to call the attribute

let nameRegex = /^[a-z]+$/i;
let emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
// Global variable to set the regex for the names and email
// the name regex test input for only letters and return true

// Event listener to validate the first name
firstName.addEventListener('input', () => {
  let nameTextBox = document.getElementById("firstName");
  let message = document.getElementById("firstNameValidationMessage");
  if (nameTextBox.value != "") {
    if (nameRegex.test(nameTextBox.value) == false) {
      message.innerHTML = "  (Invalid name input)";
    }else {
      message.innerHTML = "";
    }
  }
});

// Event listener to validate the last name
lastName.addEventListener('input', () => {
  let nameTextBox = document.getElementById("lastName");
  let message = document.getElementById("lastNameValidationMessage");
  if (nameTextBox.value != "") {
    if (nameRegex.test(nameTextBox.value) == false) {
      message.innerHTML = "  (Invalid name input)";
    }else {
      message.innerHTML = "";
    }
  }
});

// Event listener to validate the other name
otherName.addEventListener('input', () => {
  let nameTextBox = document.getElementById("otherName");
  let message = document.getElementById("otherNameValidationMessage");
  if (nameTextBox.value != "") {
    if (nameRegex.test(nameTextBox.value) == false) {
      message.innerHTML = "  (Invalid name input)";
    }else {
      message.innerHTML = "";
    }
  }
});

email.addEventListener('change', () => {
  let emailTextBox = document.getElementById("email");
  let message = document.getElementById("emailValidationMessage");
  if (emailTextBox.value != "") {
    if (emailRegex.test(emailTextBox.value) == false) {
      message.innerHTML = "  (invalid email format)";
    }else {
      message.innerHTML = "";
    }
  }
});

// function validateName() {
//   let nameTextBox = document.getElementById("firstName");
//   let firstName = nameTextBox.value;
//   let firstNameRegex = /\D+/;

//   let message = document.getElementById("validationMessage");

//   if (nameTextBox != "") {
//     if (firstNameRegex.test(firstName)) {
//       message.innerHTML = "  (this input is valid)";
//     } else {
//       message.innerHTML = "  (this input is invalid)";
//     }
//   }
// }

// this functionabove does not work as expected
// the border property does not change and also
// even when  the function is set to change the 
// background color . it still shows red when 
// no key has been pressed, and it never shows 
// green and also when a number is entered using
// browser suggestion, the input is accepted. 
let selectBox = document.getElementById("most-like");
let selectedOption;
let previousOption = null;

selectBox.addEventListener("change",function removeItem() {
  if (previousOption != selectedOption) {
    selectBox.removeEventListener("change", removeItem); 
  }
  selectedOption = selectBox.value;
  if (selectedOption == "cleaning") {
    document.getElementById("cleaning-checkbox-container").remove();    
  }else if (selectedOption == "laundry") {
    document.getElementById("laundry-checkbox-container").remove();    
  } else if (selectedOption == "dog-walking") {
    document.getElementById("dog-walking-checkbox-container").remove();    
  }else if (selectedOption == "outdoor-errands") {
    document.getElementById("outdoor-errands-checkbox-container").remove();    
  }else if (selectedOption == "baby-sitting") {
    document.getElementById("baby-sitting-checkbox-container").remove();    
  }else if (selectedOption == "gardening") {
    document.getElementById("gardening-checkbox-container").remove();    
  }else if (selectedOption == "plumbering") {
    document.getElementById("plumbering-checkbox-container").remove();    
  }else if (selectedOption == "home-appliance-repair") {
    document.getElementById("home-appliance-repair-checkbox-container").remove();    
  }
  previousOption = selectedOption;
});

//this piece of code above dosen't work as exected, this will remove the selected
// option from the checkbox but when another item is selected the removed item is
// is not returned. hence if all the item in the select box were to be clicked 
// once there will be no more item in the check box. i need to figure out a way to
// make sure that the item removed is returned when another option is selected.
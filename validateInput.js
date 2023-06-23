// this functions above will help instruct the user to enter their name and email 
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
// event listener to validate email inputs
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

// function to remove selected items from checkbox

let selectBox = document.getElementById("most-like");
let selectedOption;
let previousOption;

selectBox.addEventListener("change", removeItem);

function removeItem() {
  if (previousOption == "cleaning") {
    document.getElementById("cleaning-checkbox-container").style.display = "block";    
  }else if (previousOption == "laundry") {
    document.getElementById("laundry-checkbox-container").style.display = "block";    
  } else if (previousOption == "dog-walking") {
    document.getElementById("dog-walking-checkbox-container").style.display = "block";    
  }else if (previousOption == "outdoor-errands") {
    document.getElementById("outdoor-errands-checkbox-container").style.display = "block";    
  }else if (previousOption == "baby-sitting") {
    document.getElementById("baby-sitting-checkbox-container").style.display = "block";    
  }else if (previousOption == "gardening") {
    document.getElementById("gardening-checkbox-container").style.display = "block";    
  }else if (previousOption == "plumbering") {
    document.getElementById("plumbering-checkbox-container").style.display = "block";    
  }else if (previousOption == "home-appliance-repair") {
    document.getElementById("home-appliance-repair-checkbox-container").style.display = "block";    
  }
  // if statement to display the removed items in the checkbox

  selectedOption = selectBox.value;
  if (selectedOption == "cleaning") {
    document.getElementById("cleaning-checkbox-container").style.display = "none";    
  }else if (selectedOption == "laundry") {
    document.getElementById("laundry-checkbox-container").style.display = "none";    
  } else if (selectedOption == "dog-walking") {
    document.getElementById("dog-walking-checkbox-container").style.display = "none";    
  }else if (selectedOption == "outdoor-errands") {
    document.getElementById("outdoor-errands-checkbox-container").style.display = "none";    
  }else if (selectedOption == "baby-sitting") {
    document.getElementById("baby-sitting-checkbox-container").style.display = "none";    
  }else if (selectedOption == "gardening") {
    document.getElementById("gardening-checkbox-container").style.display = "none";    
  }else if (selectedOption == "plumbering") {
    document.getElementById("plumbering-checkbox-container").style.display = "none";    
  }else if (selectedOption == "home-appliance-repair") {
    document.getElementById("home-appliance-repair-checkbox-container").style.display = "none";    
  }
  previousOption = selectedOption;
}

//this code now works as expected as the removed items is returned wheever another item is
// selected. However this are spagheti code as there must be a way to rewrite the code
// and reduce the long  if else statements. 
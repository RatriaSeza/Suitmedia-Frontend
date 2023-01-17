inputName = document.getElementById("name");

inputName.addEventListener("keyup", function () {
	nameValue = inputName.value;

	if (nameValue.length == 0) {
		errorName = document.getElementById("error-name");
		errorName.innerHTML = "This field is required";
		errorName.style.display = "block";
		inputName.classList.add("invalid");
		inputName.classList.remove("valid");
	} else {
		document.getElementById("error-name").style.display = "none";
		inputName.classList.add("valid");
		inputName.classList.remove("invalid");
		errorCount--;
	}
});

inputEmail = document.getElementById("email");
inputEmail.addEventListener("keyup", function () {
    emailValue = inputEmail.value;
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
	if (emailValue.length == 0 || !emailValue.match(mailformat)) {
		errorEmail = document.getElementById("error-email");
		errorEmail.innerHTML = "Invalid email address.";
		errorEmail.style.display = "block";
		inputEmail.classList.add("invalid");
		inputEmail.classList.remove("valid");
	} else {
        document.getElementById("error-email").style.display = "none";
		inputEmail.classList.add("valid");
		inputEmail.classList.remove("invalid");
	}
});

inputMessage = document.getElementById("message");
inputMessage.addEventListener("keyup", function () {
    messageValue = inputMessage.value;
    
	if (messageValue.length == 0) {
        errorMessage = document.getElementById("error-message");
		errorMessage.innerHTML = "This field is required.";
		errorMessage.style.display = "block";
		inputMessage.classList.add("invalid");
		inputMessage.classList.remove("valid");
	} else {
        document.getElementById("error-message").style.display = "none";
		inputMessage.classList.add("valid");
		inputMessage.classList.remove("invalid");
	}
});

function checkForm() {
    errorCount = 0;
    
	inputName = document.getElementById("name");
	nameValue = inputName.value;
    
	if (nameValue.length == 0) {
        errorName = document.getElementById("error-name");
		errorName.innerHTML = "This field is required";
		errorName.style.display = "block";
		inputName.classList.add("invalid");
		inputName.classList.remove("valid");
		errorCount = 1;
	} else {
        document.getElementById("error-name").style.display = "none";
		inputName.classList.add("valid");
		inputName.classList.remove("invalid");
	}
    
    inputEmail = document.getElementById("email");
    emailValue = inputEmail.value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (emailValue.length == 0 || !emailValue.match(mailformat)) {
        errorEmail = document.getElementById("error-email");
        errorEmail.innerHTML = "Invalid email address.";
        errorEmail.style.display = "block";
        inputEmail.classList.add("invalid");
        inputEmail.classList.remove("valid");
        errorCount = 1;
    } else {
        document.getElementById("error-email").style.display = "none";
        inputEmail.classList.add("valid");
        inputEmail.classList.remove("invalid");
    }
    
    inputMessage = document.getElementById("message");
    messageValue = inputMessage.value;
    
    if (messageValue.length == 0) {
        errorMessage = document.getElementById("error-message");
        errorMessage.innerHTML = "This field is required.";
        errorMessage.style.display = "block";
        inputMessage.classList.add("invalid");
        inputMessage.classList.remove("valid");
    } else {
        document.getElementById("error-message").style.display = "none";
        inputMessage.classList.add("valid");
        inputMessage.classList.remove("invalid");
    }
    
    if (errorCount > 0){
        return false;
    }
}

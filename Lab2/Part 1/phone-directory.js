window.onload = function() {
    let error = document.getElementById("error");
    let form = document.getElementById("enterContact");

    error.style.display = "none";
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        addToContacts();
    });
};

function addToContacts() {
    //clear error text
    error.innerHTML = "";

    let tableBody = document
        .getElementById("contacts")
        .getElementsByTagName("tbody")[0];
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    //input validation
    //checking for empty fields and displaying error
    if (name === "" || phone === "" || email === "") {
        error.style.display = "block";
        error.innerHTML += "All fields must have a valid value";
    } else if (validateName(name)) {
        //validating the name and displaying error if invalid
        //error
        error.style.display = "block";
        error.innerHTML +=
            "Invalid contact name - Should contain only Alphabets and Space. Should be less than or equal to 20 characters in length.";
    } else if (validateEmail(email)) {
        //validating the email and displaying error if invalid
        //error
        error.style.display = "block";
        error.innerHTML +=
            "Invalid email - Should have a proper validation and should be less than 40 characters in length.";
    } else if (validatePhone(phone)) {
        //validating the phone number and displaying error if invalid
        error.style.display = "block";
        error.innerHTML +=
            "Invalid contact number - Should contain only Numbers. Should be equal to 10 characters in length.";
    } else {
        //hide error if successful
        error.style.display = "none";

        //clearing fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";

        //new row
        let newRow = tableBody.insertRow();

        //three new cells
        let nameCell = newRow.insertCell();
        let phoneCell = newRow.insertCell();
        let emailCell = newRow.insertCell();

        //three new text nodes get created
        let nameText = document.createTextNode(name);
        let phoneText = document.createTextNode(phone);
        let emailText = document.createTextNode(email);

        //appending text node to cells
        nameCell.appendChild(nameText);
        phoneCell.appendChild(phoneText);
        emailCell.appendChild(emailText);
    }
}

function validateName(name) {
    //check name length less than or equal to 20
    if (name.length > 20) {
        return true;
        //check to make sure string is all alphabet
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    //check email length less than or equal to 40, input type is email
    return email.length > 40;
}

function validatePhone(phone) {
    //check phone number is 10 digits long, input type is number so no other validation required
    return phone.length != 10;
}
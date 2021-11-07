/**
 * Function that runs on load to add event listeners and hide the error box
 */
window.onload = function () {
  let error = document.getElementById("error");
  let noResult = document.getElementById("noResult");
  let button = document.getElementById("submit-button");
  let descending = true;

  error.style.display = "none";
  noResult.style.display = "none";
  //adding event listener to the submit button
  button.addEventListener("click", (e) => {
    e.preventDefault();
    addToContacts();
  });

  //adding event listener to all elements with the class table-head
  document.querySelectorAll(".table-head").forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      sortTable(event.target.id, descending);
      descending = !descending;
    });
  });
};

/**
 * Function that sorts the contacts table. It loops through all the rows and
 * uses a certain sorting method based on the id. Sorts both ascending and descending
 * @param {string} id id of the table head that was clicked to call this function
 * @param {boolean} descending lets the function know if it should be ascending or descending
 * Note: I was unaware we had to only sort by name initially, so I kept the sorting for other headings in.
 * As a result this function is a little messier and not very DRY, apologies
 */
function sortTable(id, descending) {
  let table = document.getElementById("contacts");
  let currentlySorting = true;
  let dataColumn;

  //setting which <td> to query based on table head clicked
  if (id == "name-head") {
    dataColumn = 0;
  } else if (id == "phone-head") {
    dataColumn = 1;
  } else {
    dataColumn = 2;
  }

  //loop to continue sorting while this is true
  while (currentlySorting) {
    //setting to false to break loop once sorting is complete
    currentlySorting = false;
    let rows = table.rows;
    let sortRows = false;
    var i;

    //looping through every row comparing the current with the next
    for (i = 1; i < rows.length - 1; i++) {
      let currentRow = rows[i].getElementsByTagName("TD")[dataColumn];
      let nextRow = rows[i + 1].getElementsByTagName("TD")[dataColumn];

      //checking to see if sorting by number or email/name
      if (dataColumn == 1) {
        //checking to see which way to sort
        if (descending) {
          //checking to see if current row should be above next row
          if (Number(currentRow.innerHTML) > Number(nextRow.innerHTML)) {
            //if current row needs to be sorted
            sortRows = true;
            break;
          }
        } else {
          //sorting opposite way
          if (Number(currentRow.innerHTML) < Number(nextRow.innerHTML)) {
            sortRows = true;
            break;
          }
        }
      } else {
        //checking to see which way to sort
        if (descending) {
          //checking to see if current row should be above next row
          if (
            currentRow.innerHTML.toLowerCase() > nextRow.innerHTML.toLowerCase()
          ) {
            //if current row needs to be sorted
            sortRows = true;
            break;
          }
        } else {
          //sorting opposite way
          if (
            currentRow.innerHTML.toLowerCase() < nextRow.innerHTML.toLowerCase()
          ) {
            sortRows = true;
            break;
          }
        }
      }
    }

    //switching the rows if they need to be sorted and setting the loop to continue sorting
    if (sortRows) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      currentlySorting = true;
    }
  }
}

/**
 * Function that dynamically adds new table rows based on user input
 */
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
    error.innerHTML += "ERROR! All fields must have a valid value";
  } else if (validateName(name)) {
    //validating the name and displaying error if invalid
    //error
    error.style.display = "block";
    error.innerHTML +=
      "ERROR! Invalid contact name - Should contain only Alphabets and Space. Should be less than or equal to 20 characters in length.";
  } else if (!validateEmail(email)) {
    //validating the email and displaying error if invalid
    //error
    error.style.display = "block";
    error.innerHTML +=
      "ERROR! Invalid email - Should have a proper validation and should be less than 40 characters in length.";
  } else if (validatePhone(phone)) {
    //validating the phone number and displaying error if invalid
    error.style.display = "block";
    error.innerHTML +=
      "ERROR! Invalid contact number - Should contain only Numbers. Should be equal to 10 characters in length.";
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

/**
 * Function that ensures the name data is compliant with the requirements
 * @param {string} name the name to be added to the table
 * @returns returns true or false based on success
 */
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

/**
 * Function that validates the email length and syntax
 * @param {string} email the email to be added to the table
 * @returns true or false based on result
 */
function validateEmail(email) {
  var valid = /\S+@\S+\.\S+/;
  if (valid.test(email) && email.length < 40) {
    return true;
  }

  return false;
}

/**
 * Function that ensures phone number length is equal to 10
 * @param {integer} phone number to be added to table
 * @returns true or false based on result
 */
function validatePhone(phone) {
  //check phone number is 10 digits long, input type is number so no other validation required
  return phone.length != 10;
}

/**
 * Function that filters the table results based on input in a search bar.
 * Also displays an error div on no result
 */
function filterTable() {
  let filter = document.getElementById("search-bar").value;
  let table = document.getElementById("contacts");
  let rows = table.getElementsByTagName("tr");
  let i;
  let rowsHiddenCount = 0;

  //looping through all the rows to check if the mobile number row matches the input
  for (i = 1; i < rows.length; i++) {
    let currentRow = rows[i].getElementsByTagName("td")[1];
    if (currentRow.innerHTML.indexOf(filter) > -1) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
      rowsHiddenCount++;
    }
  }

  //displaying an error div if all the rows are hidden and something is in the search box
  if (rowsHiddenCount == table.rows.length - 1 && filter.length != 0) {
    noResult.style.display = "block";
  } else {
    noResult.style.display = "none";
  }
}

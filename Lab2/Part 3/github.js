/**
 * Called when the user presses search. Makes 2 calls to the github api,
 * sending each to its respective function.
 */
function searchUser() {
  const username = document.getElementById("user-search").value;

  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((json) => populateInfo(json));

  fetch(`https://api.github.com/users/${username}/repos`)
    .then((response) => response.json())
    .then((json) => populateRepos(json));
}

/**
 * Function that populates the name, username, email, location, gists and image areas
 * @param {*} json the response from the api call made in searchUser()
 */
function populateInfo(json) {
  //populating the divs
  document.getElementById("name").innerHTML = json.name;
  document.getElementById("username").innerHTML = json.login;
  document.getElementById("email").innerHTML = json.email;
  document.getElementById("location").innerHTML = json.location;
  document.getElementById("gists").innerHTML = json.public_gists;

  //adding the image as a div background for easier styling
  var imageDiv = document.getElementById("picture");
  imageDiv.style.backgroundImage = `url(${json.avatar_url})`;
}

/**
 * Function that populates a div with all the users' repos. This is done by appending
 * <li> to the <ul> in the html file
 * @param {*} json the response from the api call made in searchUser()
 */
function populateRepos(json) {
  //clearing the list incase if multiple searches
  document.getElementById("repos-list").innerHTML = "";

  //fetching the list by id
  var list = document.getElementById("repos-list");

  //using the json to populate the list
  json.forEach((repo) => {
    //creating a list item
    var li = document.createElement("li");
    li.classList.add("repo-item");
    //appening the name, two breaks and the description to the list item
    li.append(
      document.createTextNode("Name: " + repo.name),
      document.createElement("br"),
      document.createElement("br"),
      document.createTextNode("Description: " + repo.description)
    );
    //appending list item to the list
    list.appendChild(li);
  });
}

function searchUser() {
  const username = document.getElementById("user-search").value;

  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((json) => populateInfo(json));

  fetch(`https://api.github.com/users/${username}/repos`)
    .then((response) => response.json())
    .then((json) => populateRepos(json));
}

function populateInfo(json) {
  console.log(json);

  document.getElementById("name").innerHTML = json.name;
  document.getElementById("username").innerHTML = json.login;
  document.getElementById("email").innerHTML = json.email;
  document.getElementById("location").innerHTML = json.location;
  document.getElementById("gists").innerHTML = json.public_gists;
  var imageDiv = document.getElementById("picture");
  imageDiv.style.backgroundImage = `url(${json.avatar_url})`;
}

function populateRepos(json) {
  console.log(json);
  document.getElementById("repos-list").innerHTML = "";

  var list = document.getElementById("repos-list");
  json.forEach((repo) => {
    var li = document.createElement("li");
    li.classList.add("repo-item");
    li.append(
      document.createTextNode("Name: " + repo.name),
      document.createElement("br"),
      document.createElement("br"),
      document.createTextNode("Description: " + repo.description)
    );
    list.appendChild(li);
  });
}

function searchUser() {
  const username = document.getElementById("user-search").value;

  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((json) => populateInfo(json));
}

function populateInfo(json) {
  console.log(json);
}

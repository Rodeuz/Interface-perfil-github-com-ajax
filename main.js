document.addEventListener("DOMContentLoaded", () => {
  const icon = document.querySelector("#icon");
  const name = document.querySelector("#name");
  const username = document.querySelector("#username");
  const repos = document.querySelector("#repos");
  const followers = document.querySelector("#followers");
  const following = document.querySelector("#following");
  const link = document.querySelector("#link");

  fetch("https://api.github.com/users/rodeuz")
    .then((req) => {
      return req.json();
    })
    .then((json) => {
      name.innerText = json.name;
      username.innerText = `@${json.login}`;
      icon.src = json.avatar_url;
      repos.innerText = json.public_repos;
      followers.innerText = json.followers;
      following.innerText = json.following;
      link.href = json.html_url;
    });
});

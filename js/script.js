const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".searchBtn");
const lightModeBtn = document.querySelector(".light-hidden");
const darkModeBtn = document.querySelector(".dark-hidden");

searchBtn.addEventListener("click", function () {
  const username = searchInput.value.trim();
  if (username !== "") {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        updateResult(data);
      });
  }
});



function updateResult(data) {
  const githubName = document.querySelector(".githubUser");
  const githubUserName = document.querySelector(".githubUserName a");
  const githubJoineDate = document.querySelector(".githubJoineDate");
  const githubBio = document.querySelector(".githubBio");
  const repoTotal = document.querySelector(".repoTotal");
  const followersTotal = document.querySelector(".followersTotal");
  const followingTotal = document.querySelector(".followingTotal");
  const location = document.querySelector(".locations");
  const twitter = document.querySelector(".twit");
  const website = document.querySelector(".websites");
  const company = document.querySelector(".companies");

  githubName.textContent = data.name || githubName.style.block;
  githubUserName.textContent = `@${data.login}`;
  githubJoineDate.textContent = `Joined: ${new Date(
    data.created_at
  ).toLocaleDateString()}`;
  githubBio.textContent = data.bio || "This profile has no bio";
  repoTotal.textContent = data.public_repos;
  followersTotal.textContent = data.followers;
  followingTotal.textContent = data.following;
  location.textContent = data.location || "Not Available";
  twitter.textContent = data.twitter_username || "Not Available";
  website.textContent = data.blog.split("/")[2] || "Not Available";
  company.textContent = data.company || "Not Available";

  
  const avatarImage = document.querySelector(".mainImg img");
  avatarImage.src = data.avatar_url;
}


lightModeBtn.addEventListener("click", function () {
  document.documentElement.setAttribute("color-mode", "light");
});


darkModeBtn.addEventListener("click", function () {
  document.documentElement.setAttribute("color-mode", "dark");
});

function searchJokes(event) {
  event.preventDefault();
  const searchTerm = document.getElementById("searchTerm").value;

  fetch(`https://api.chucknorris.io/jokes/search?query=${searchTerm}`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("jokesContainer").innerHTML = '';

      data.result.forEach(joke => {
        const articleElement = document.createElement("article");
        const pElement = document.createElement("p");
        pElement.textContent = joke.value;
        articleElement.appendChild(pElement);
        document.getElementById("jokesContainer").appendChild(articleElement);
      });
    })
    .catch(error => console.error("Error fetching Chuck Norris jokes:", error));
}
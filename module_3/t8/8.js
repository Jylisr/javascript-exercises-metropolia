function searchSeries(event) {
  event.preventDefault();

  let query = document.getElementById("query").value;

  fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      let resultElement = document.getElementById("result");
      resultElement.textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error("Error fetching data:", error));
}
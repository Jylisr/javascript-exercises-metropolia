  function searchSeries(event) {
    event.preventDefault();

    let query = document.getElementById("query").value;

    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById("result").innerHTML = '';

        data.forEach(tvShow => {
          // Create article element
          let articleElement = document.createElement("article");

          let h2Element = document.createElement("h2");
          h2Element.textContent = tvShow.show.name;
          articleElement.appendChild(h2Element);

          let aElement = document.createElement("a");
          aElement.href = tvShow.show.url;
          aElement.target = "_blank";
          aElement.textContent = "Details Link";
          articleElement.appendChild(aElement);

          let imgElement = document.createElement("img");
          imgElement.src = tvShow.show.image?.medium ?? ''; // Optional chaining with default value
          imgElement.alt = tvShow.show.name;
          articleElement.appendChild(imgElement);

          let divElement = document.createElement("div");
          divElement.innerHTML = tvShow.show.summary;
          articleElement.appendChild(divElement);

          document.getElementById("result").appendChild(articleElement);
        });
      })
      .catch(error => console.error("Error fetching data:", error));
  }

  document.getElementById("searchForm").addEventListener("submit", searchSeries);
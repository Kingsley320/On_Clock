// @unocss-include

function setAndReturnLocalStorageValue() {
  localStorage.setItem("value", "technology");
  return localStorage.getItem("value");
}

function News() {
  document.querySelectorAll(".topic-switch-btn").forEach(btn =>
    btn.addEventListener("click", e => {
      localStorage.setItem("value", e.target.value);
      location.reload();
    })
  );

  const value = localStorage.getItem("value") || setAndReturnLocalStorageValue();

  var Link = `https://api.nytimes.com/svc/topstories/v2/${value}.json?api-key=s1AhqDH3C7ea7MVIYlpwyt4CGUVe33Au`;

  fetch(Link)
    .then(d => d.json())
    .then(response => {
      // console.log(response.results.length);
      for (var i = 0; i < response.results.length; i++) {
        const output = document.getElementById("articles");

        try {
          output.innerHTML += `
            <a href="${response.results[i].url}"
              ><div
                class="bg-purple-200 w-80 h-28 rounded-xl border-b-4 border-ppurple flex   overflow-hidden"
              >
                <img
                  src="${response.results[i]["multimedia"][1].url}"
                  alt="${response.results[i]["multimedia"][1].caption}"
                  srcset=""
                  class="w-24 rounded-l-md"
                />
                <div>
                  <h2
                    class="h-16 font-bold text-xl mx-3 object-cover border-black border-b-2 text-ellipsis overflow-hidden"
                  >
                    ${response.results[i].title}
                  </h2>
                  <p class=" text-sm mx-3 text-gray-700 mb-2">
                    ${response.results[i].abstract}
                  </p>
                </div>
              </div></a
            >
          `;
          // console.log(response.results[i]["multimedia"][1].caption);
        } catch (err) {
          console.log(err);
        }
        // console.log(response.results[i].title);
      }
    });
}

  var a=0;
  let articles = document.getElementById('articles');
  let explore = localStorage.getItem('explorepoint');
  if (explore = null){

  }
  localStorage.setItem('explorepoint', a=0);

  articles.onload = () => {
    localStorage.setItem('explorepoint', a++)
  }

News();

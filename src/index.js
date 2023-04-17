const img = document.querySelector("img");
fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=en7dMyIj3inRfEXKjj5pj9Hz0CjYPUx1&s=starbucks",
  {
    mode: "cors",
  }
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    img.src = response.data.images.original.url;
  });

document.querySelector("button").addEventListener("click", () => {
  //console.log("clicking");
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=en7dMyIj3inRfEXKjj5pj9Hz0CjYPUx1&s=jay",
    {
      mode: "cors",
    }
  )
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      img.src = response.data.images.original.url;
    });
});

document.querySelector("input").addEventListener("input", (e) => {
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=en7dMyIj3inRfEXKjj5pj9Hz0CjYPUx1&q=${e.target.value}&limit=10`,
    {
      mode: "cors",
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      document.querySelector(".searchOutput").textContent = "";
      //console.log(response);
      response.data.forEach((data) => {
        console.log(data);
        const searchImg = document.createElement("img");
        searchImg.src = data.images.original.url;
        document.querySelector(".searchOutput").appendChild(searchImg);
      });
    });
});

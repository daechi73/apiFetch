const img = document.querySelector("img");
fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=en7dMyIj3inRfEXKjj5pj9Hz0CjYPUx1&s=cats",
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
  console.log(`${e.target.value}`);
  fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=en7dMyIj3inRfEXKjj5pj9Hz0CjYPUx1&q=${e.target.value}`,
    {
      mode: "cors",
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response);
      //img.src = response.data.images.original.url;
    });
});

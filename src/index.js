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
  const img2 = document.createElement("img");
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
      img2.src = response.data.images.original.url;
    });
  document.body.appendChild(img2);
});

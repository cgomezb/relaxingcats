(function setup() {
  getImage();
  setInterval(getImage, 10000);
})();

function getImage() {
  fetch('https://api.thecatapi.com/v1/images/search?mime_types=gif')
  .then(response => response.json())
  .then(data => {
    const { url, width, height } = data[0];
    const element = document.getElementById('imageTarget');
    element.src = url;
    element.width = width;
    element.height = height;
  });
}
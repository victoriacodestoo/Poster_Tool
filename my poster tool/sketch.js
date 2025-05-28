var headline = document.getElementById("headline");
var fontsize = document.getElementById("fontsize");
var colorInput = document.getElementById("colorpicker");
var colorSelector = document.getElementById("colorSelector");
var imageUpload = document.getElementById("imageUpload");

let img;


function setup() {
  var c = createCanvas(500, 700);
  c.parent("canvasWrapper");
  imageUpload.addEventListener("change" , handleChangeEvent);
}

function draw() {
  background(colorpicker.value);
  if(img )
  image(img, 0, 0, width, height);

  // Big Type
  noStroke();
  fill(colorSelector.value);
  textAlign(CENTER, TOP);
  textSize(parseInt(fontsize.value));
  text(headline.value, width / 2, 50);


}

function handleChangeEvent(event) {
  let file = event.target.files[0];
  if (file) {
    let reader = new FileReader();
    reader.onload = function (e) {
      img = loadImage(e.target.result);
    };
    reader.readAsDataURL(file);
  }
}

let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_4.jpg";
let maskFile   = "mask_4.png";
let outputFile = "output_4.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 1080);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(0, 0, 0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  let num_lines_to_draw = 40;
  for(let j=renderCounter; j<renderCounter+num_lines_to_draw && j<1080; j++) {
    for(let i=0; i<1920; i++) {

      colorMode(RGB);
      let pix = sourceImg.get(i, j);
      let col = color(pix);
      let mask = maskImg.get(i, j);

      colorMode(HSB, 360, 100, 100);
      let h = hue(col);
      let b = brightness(col);

      if(mask[0] > 128) {
        let new_brt = map(b, 0, 100, 100, 0);
        let new_col = color(h, 0, new_brt);
        set(i, j, new_col);
      }

      else {
        let new_col = color(h, 0, b);
        set(i, j, new_col);
      }
    }
  }
  renderCounter = renderCounter + num_lines_to_draw;
  updatePixels();
  // print(renderCounter);
  if(renderCounter > 1080) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    saveArtworkImage(outputFile);
  }
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}

const html = document.documentElement;
const canvas = document.getElementById("hero-form-demo");
const context = canvas.getContext("2d");

const frameCount = 172; //number of frames in the animation
const currentFrame = index => (
  `./frames2/ezgif-frame-${index.toString().padStart(3, '0')}.jpg` 
);

let currentFrameIndex = 1;
const img = new Image();
img.src = currentFrame(currentFrameIndex); //set the image source to the first frame

canvas.width=1920;
canvas.height=1080;

img.onload = function() {
  context.drawImage(img, 0, 0);
}//draw the first frame

const updateImage = () => {
  currentFrameIndex = Math.min(frameCount - 1, Math.ceil(html.scrollTop / (html.scrollHeight - window.innerHeight) * frameCount)); //calculate the current frame index by dividing the page's scroll height by the browser's window height
  img.src = currentFrame(currentFrameIndex + 1);
  context.drawImage(img, 0, 0);
  requestAnimationFrame(updateImage); //requestAnimationFrame function to only update the image at the rate of the browser's refresh rate
}

window.addEventListener('scroll', updateImage); //scroll event listener to update the image

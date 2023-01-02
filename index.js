import "./index.css";
import JS_image from "./assets/JS_image.png";

const h1 = document.createElement("h1");
h1.textContent = "I love JavaScript";

const img = document.createElement("img");
// h1.append(img);
img.src = JS_image;
img.className = "js_image";

document.body.append(h1);
document.body.append(img);

# Doc for components

This file explains how to use components and what they look like

**Table of contents:**

- [Circle with wave effect](#circle-with-wave-effect)

# Circle with wave effect

What it looks like :
https://hackmd.io/_uploads/S1LPhBzN6.png

How to use it in your code :

Head to your main html file (probably index.html), and add this

```html
<div id="yourID"></div></td>
```

Then require the package in your the js file you're using with your html

```js
import { Circle } from "cool-visual-components"; //import the package
import "cool-visual-components/dist/lib/cool-visual-components.css"; //import the style

let myVar = new Circle(document.getElementById("yourID"));
myVar.draw();
myVar.changeLiquidColorOnPercentage(50);
```

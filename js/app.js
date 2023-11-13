import { Circle } from "../lib/index.js";

const circle = new Circle(document.getElementById("circleWrapper"));
circle.draw();
circle.changeLiquidColorOnPercentage(50);

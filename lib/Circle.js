//this file contains the Circle class and its methods
//we need to import the styles
import "./style/Circle.scss";

//Circle class
export default class Circle {
  //constructor
  constructor(elementToDrawIn) {
    //we need to store the element to draw in
    this.elementToDrawIn = elementToDrawIn;
  }

  //draw method
  draw() {
    //create a div element to hold the outerCircle
    const outerCircle = document.createElement("div");
    //create a div element to hold the innerCircle
    const innerCircle = document.createElement("div");
    //create a div element to hold the liquid content
    const liquid = document.createElement("div");
    //add the outerCircle class to the div
    outerCircle.classList.add("outerCircle");
    //add the innerCircle class to the div
    innerCircle.classList.add("innerCircle");
    //add the liquid class to the div
    liquid.classList.add("liquid");
    //append every elements to the circle element
    this.elementToDrawIn.appendChild(outerCircle);
    this.elementToDrawIn.appendChild(innerCircle);
    this.elementToDrawIn.appendChild(liquid);
  }

  //change the liquid color based on fill percentage
  changeLiquidColorOnPercentage(fillPercentage) {
    //get the liquid element
    const liquid = this.elementToDrawIn.querySelector(".liquid");
    //if the fillPercentage is less than 33%
    if (fillPercentage < 33) {
      //set the liquid color to green
      liquid.style.backgroundColor = "red";
    } else if (fillPercentage < 66) {
      //set the liquid color to yellow
      liquid.style.backgroundColor = "orange";
    } else {
      //set the liquid color to red
      liquid.style.backgroundColor = "#14a81e";
    }
  }
}

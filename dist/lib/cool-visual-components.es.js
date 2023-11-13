class l {
  //constructor
  constructor(e) {
    this.elementToDrawIn = e;
  }
  //draw method
  draw() {
    const e = document.createElement("div"), t = document.createElement("div"), n = document.createElement("div");
    e.classList.add("outerCircle"), t.classList.add("innerCircle"), n.classList.add("liquid"), this.elementToDrawIn.appendChild(e), this.elementToDrawIn.appendChild(t), this.elementToDrawIn.appendChild(n);
  }
  //change the liquid color based on fill percentage
  changeLiquidColorOnPercentage(e) {
    const t = this.elementToDrawIn.querySelector(".liquid");
    e < 33 ? t.style.backgroundColor = "red" : e < 66 ? t.style.backgroundColor = "orange" : t.style.backgroundColor = "#14a81e";
  }
}
export {
  l as Circle
};

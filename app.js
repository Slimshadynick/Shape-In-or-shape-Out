let drawPanel = document.getElementById("drawPanel");

class Shape {
  constructor() {
    this.div = document.createElement("div");
    this.div.style.backgroundColor = randomColor();
    this.div.classList.add("shape");
  }

  display() {
    let top = Math.floor(Math.random() * 500);
    let left = Math.floor(Math.random() * 500);
    this.div.style.top = `${top}px`;
    this.div.style.left = `${left}px`;
    drawPanel.appendChild(this.div);
  }

  displayInfo() {
    let p = document.querySelectorAll("#infoPanel>p");
    for (let i = 0; i < 5; i++) {
      let span = p[i].childNodes[1];
      console.log(span);
      span.textContent = "";
      let text = document.createTextNode(this.info[i]);
      span.appendChild(text);
    }
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.shapeName = "circle";
    this.radius = radius;
    this.width = 2 * radius;
    this.height = 2 * radius;
    this.area = Math.PI * radius * radius;
    this.perimeter = 2 * Math.PI * radius;
    this.info = [
      this.shapeName,
      this.width,
      this.height,
      this.area,
      this.perimeter
    ];
    this.div.addEventListener("click", this.displayInfo.bind(this));
  }

  create() {
    this.div.style.height = `${this.height}px`;
    this.div.style.width = `${this.width}px`;
    this.div.style.borderRadius = `50%`;
  }
}

class Square extends Shape {
  constructor(length) {
    super();
    this.shapeName = "square";
    this.length = length;
    this.height =  length;
    this.width =  length;
    this.area = length * length;
    this.perimeter = 4 * length;
    this.info = [
      this.shapeName,
      this.width,
      this.height,
      this.area,
      this.perimeter
    ];
    this.div.addEventListener("click", this.displayInfo.bind(this));
  }
  create() {
    this.div.style.height = `${this.height}px`;
    this.div.style.width = `${this.width}px`;
  }
}

class Rectangle extends Shape {
  constructor(height, width) {
    super();
    this.shapeName = "rectangle";
    this.height = height;
    this.width = width;
    this.area = height * width;
    this.perimeter = 2 * (parseInt(height) + parseInt(width));
    this.info = [
      this.shapeName,
      this.width,
      this.height,
      this.area,
      this.perimeter
    ];
    this.div.addEventListener("click", this.displayInfo.bind(this));
  }
  create() {
    this.div.style.height = `${this.height}px`;
    this.div.style.width = `${this.width}px`;
  }
}

class Triangle extends Shape {
  constructor(height) {
    super();
    this.shapeName = "isoscleles right triangle";
    this.height = height;
    this.width = height;
    this.thirdSide = Math.sqrt(2) * height;
    this.area = 0.5 * height * height;
    this.perimeter = 2 * height + this.thirdSide;
    this.info = [
      this.shapeName,
      this.width,
      this.height,
      this.area,
      this.perimeter
    ];
    this.div.addEventListener("click", this.displayInfo.bind(this));
  }
  create() {
    this.div.style.borderLeft = `${this.height}px solid transparent`;
    this.div.style.borderRight = `${this.width}px solid transparent`;
    this.div.style.borderBottom = `${this.thirdSide}px solid ${randomColor()}`;
    this.div.style.backgroundColor = "rgb(230, 211, 223)";
  }
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

document.addEventListener("DOMContentLoaded", () => {
  let squareBtn = document.getElementById("sqrBtn");
  squareBtn.addEventListener("click", function(e) {
    e.preventDefault();
    let length = document.getElementById("squareLength");
    if (length.value === "") {
      alert("Enter Input!!!!");
      return;
    }
    let square = new Square(length.value);
    square.create();
    square.display();
  });

  let circleBtn = document.getElementById("circleBtn");
  circleBtn.addEventListener("click", e => {
    e.preventDefault();
    let radius = document.getElementById("circleRadius");
    if (radius.value === "") {
      alert("Enter Input!!!");
      return;
    }
    let circle = new Circle(radius.value);
    circle.create();
    circle.display();
  });

  let rectBtn = document.getElementById("rectBtn");
  rectBtn.addEventListener("click", e => {
    e.preventDefault();
    let height = document.getElementById("rectHeight");
    let width = document.getElementById("rectWidth");
    if (height.value === "" || width.value === "") {
      alert("Enter Input!!!");
      return;
    }
    let rectangle = new Rectangle(height.value, width.value);
    rectangle.create();
    rectangle.display();
  });

  let triBtn = document.getElementById("triBtn");
  triBtn.addEventListener("click", e => {
    e.preventDefault();
    let height = document.getElementById("triHeight");
    if (height.value === "") {
      alert("Enter Input!!!");
    }
    let triangle = new Triangle(height.value);
    triangle.create();
    triangle.display();
  });
});

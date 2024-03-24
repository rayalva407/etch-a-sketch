const drawingBoard = document.querySelector('.drawing-board')
const form = document.querySelector(".form")
let opacity = 0;

function createDivs(num1, num2, color) {
  for (let i = 0; i < (num1 * num2); i++) {
    const div = document.createElement('div')
    div.classList.add('drawing-board-segment')
    div.addEventListener("mouseover", (e) => {
      div.style.background = color
    })
    drawingBoard.append(div)
  }
}

function generateRandomColor() {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  
  return randomColor;
}

function createDivsWithRandomColor(num1, num2) {
  for (let i = 0; i < (num1 * num2); i++) {
    const div = document.createElement('div')
    div.classList.add('drawing-board-segment')
    div.addEventListener("mouseover", (e) => {
      div.style.background = generateRandomColor();
    })
    drawingBoard.append(div)
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const field1 = document.querySelector(".num1")
  const field2 = document.querySelector(".num2")
  const field3 = document.querySelector("#color")
  const field4 = document.querySelector(".random")
  const field5 = document.querySelector(".opacity")

  const num1 = Number(field1.value)
  const num2 = Number(field2.value)
  const color = field3.value


  while (drawingBoard.hasChildNodes()) {
    drawingBoard.removeChild(drawingBoard.lastChild)
  }

  if (field4.checked) {
    createDivsWithRandomColor(num1, num2)
  }
  else {
    createDivs(num1, num2, color)
  }

  if (field5.checked) {
    const segments = document.querySelectorAll(".drawing-board-segment")

    segments.forEach((el) => {
      el.addEventListener("mouseover", (e) => {
        el.style.opacity = opacity;
        opacity = opacity + 0.005;
      })
    })
  }

  field1.value = ""
  field2.value = ""
  field3.value = "#000000"
  field4.checked = false;
  field5.checked = false;
  opacity = 0;
})

createDivs(16, 16, "black")
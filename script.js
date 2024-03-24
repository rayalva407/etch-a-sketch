const drawingBoard = document.querySelector('.drawing-board')
const form = document.querySelector(".form")
let opacity = 0;

function createDivs(num, color) {
  for (let i = 0; i < num; i++) {
    const boardRow = document.createElement("div")
    boardRow.className = "boardRow"
    drawingBoard.append(boardRow)
    for (let j = 0; j < num; j++ ) {
      const div = document.createElement('div')
      div.classList.add('drawing-board-segment')
      div.addEventListener("mouseover", (e) => {
        div.style.background = color
      })
      boardRow.append(div)
    }
  }
}

function generateRandomColor() {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  
  return randomColor;
}

function createDivsWithRandomColor(num) {
  for (let i = 0; i < num; i++) {
    const boardRow = document.createElement("div")
    boardRow.className = "boardRow"
    drawingBoard.append(boardRow)
    for (let j = 0; j < num; j++ ) {
      const div = document.createElement('div')
      div.classList.add('drawing-board-segment')
      div.addEventListener("mouseover", (e) => {
        div.style.background = generateRandomColor();
      })
      boardRow.append(div)
    }
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const field1 = document.querySelector(".num1")
  const field2 = document.querySelector("#color")
  const field3 = document.querySelector(".random")
  const field4 = document.querySelector(".opacity")

  const num = Number(field1.value)
  const color = field2.value


  while (drawingBoard.hasChildNodes()) {
    drawingBoard.removeChild(drawingBoard.lastChild)
  }

  if (field3.checked) {
    createDivsWithRandomColor(num)
  }
  else {
    createDivs(num, color)
  }

  if (field4.checked) {
    const segments = document.querySelectorAll(".drawing-board-segment")

    segments.forEach((el) => {
      el.addEventListener("mouseover", (e) => {
        el.style.opacity = opacity;
        opacity = opacity + 0.005;
      })
    })
  }

  field1.value = ""
  field2.value = "#000000"
  field3.checked = false;
  field4.checked = false;
  opacity = 0;
})

createDivs(16, "black")
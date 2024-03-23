function createDivs(num1, num2) {
  for (let i = 0; i < (num1 * num2); i++) {
    const div = document.createElement('div')
    div.classList.add('drawing-board-segment')
    div.addEventListener("mouseover", (e) => {
      div.style.background = "black"
    })
    const drawingBoard = document.querySelector('.drawing-board')
    drawingBoard.append(div)
  }
}

createDivs(16, 16)

const form = document.querySelector(".form")


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const field1 = document.querySelector(".num1")
  const field2 = document.querySelector(".num2")

  const num1 = Number(document.querySelector(".num1").value)
  const num2 = Number(document.querySelector(".num2").value)
  const drawingBoard = document.querySelector('.drawing-board')

  while (drawingBoard.hasChildNodes()) {
    drawingBoard.removeChild(drawingBoard.lastChild)
  }
  createDivs(num1, num2)
  field1.value = ""
  field2.value = ""
})


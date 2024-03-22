function createDivs() {
  for (let i = 0; i < (16 * 16); i++) {
    const div = document.createElement('div')
    div.classList.add('drawing-board-segment')
    const drawingBoard = document.querySelector('.drawing-board')
    drawingBoard.append(div)
  }
}

createDivs()

segments = document.querySelectorAll(".drawing-board-segment")

segments.forEach(el => {
  el.addEventListener("mouseover", (e) => {
    el.style.background = "black"
  })
});
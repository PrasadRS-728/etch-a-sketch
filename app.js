// Adding gridContainer and button to webpage.
const body = document.querySelector('body');

let btnNewGrid = document.createElement('button');
btnNewGrid.setAttribute('id', 'newGrid');
btnNewGrid.textContent = 'Create New Grid';
body.appendChild(btnNewGrid);

let container = document.createElement('div');
container.setAttribute('id','container');
body.appendChild(container);
container = document.querySelector('#container');

// Main program
btnNewGrid.addEventListener('click', () => {
  resetGrid();
  let numberOfSquares = prompt("Please enter the number of boxes per row and column: ")
  if(numberOfSquares <= 100) {
    createGrid(numberOfSquares);
    activateGrid();
  } else {
    alert('The number of grid boxes must be less than 100!');
  }
});


function createGrid(numberOfSquares) {
  // Calculate size of div boxes
  let divWidth = `${container.offsetWidth / numberOfSquares}px`;
  let divHeight = `${container.offsetHeight / numberOfSquares}px`;

  //Creating and adding div boxes
  for(i = 1 ; i <= numberOfSquares ; i++) {
    for(j = 1 ; j <= numberOfSquares ; j++) {
      let div = document.createElement('div');
      div.classList.add('element');
      container.appendChild(div);
      div.style.width = divWidth;
      div.style.height = divHeight;
    }
  }  
}

function resetGrid() {
  const gridDivs = document.querySelectorAll('#container div');
  gridDivs.forEach(div => {
    container.removeChild(div);
  });
}

function activateGrid() {
  const gridDivs = document.querySelectorAll('#container div');
  gridDivs.forEach(div => {
    div.addEventListener('mouseover', () => {
      div.classList.add('divHover');
      // div.style.backgroundColor = `${getRandomColor()}`;  // for getting random colors instead of black
    });
  });
}

function getRandomColor () {
  let red = Math.floor(Math.random()*256);
  let green = Math.floor(Math.random()*256);
  let blue = Math.floor(Math.random()*256);

  return `rgba(${red},${green},${blue})`;
}

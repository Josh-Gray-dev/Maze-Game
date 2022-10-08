//const WALL = "█"
//const FLOOR = "░"
//const START = "S"
//const FINISH = "F"
//example of adding an object below
const legend = {
    // wall: "█",
    // floor: "░",
    // start: "S",
    // finish: "F",
   //^^Would need to loop through legend looking for the values
   
     "█": "wall",
     "░": "floor",
     "S": "start",
     "F": "finish",
   }
   
   // ^ legend.wall returns "█"
   // ^ legend["█"] returns "wall"
   
   
   const mazeModel = [
     "█████████████████████",
     "█░░░█░░░░░█░░░░░█░░░█",
     "█░█░█░███░█████░█░███",
     "█░█░█░░█░░░░░░█░█░░░█",
     "█░███████░█░███░█░█░█",
     "█░░░░░░░░░█░░░░░█░█░█",
     "█░███░█████░█████░█░█",
     "█░█░░░█░░░█░█░░░░░█░█",
     "█░█████░█░█░█░███░█░F",
     "S░░░░░█░█░█░█░█░█░███",
     "█████░█░█░█░█░█░█░█░█",
     "█░░░░░█░█░█░░░█░█░█░█",
     "█░███████░█████░█░█░█",
     "█░░░░░░░█░░░░░░░█░░░█",
     "█████████████████████"
   ];
   //revised/cleaned up code
   const mazeElement = document.querySelector("main")
   
   const renderElement = function (className, parentElement) {
     const element = document.createElement("div") // <div class="--INSERT CLASS NAME HERE--"></div>
     element.classList.add(className)
     parentElement.append(element)
     return element
   }
   
   //could create a function for each of the for loops
   //one for rowElement and another for cellElement
   
   for (const rowIndex in mazeModel) {
     const row = mazeModel[rowIndex]
     const rowElement = renderElement("row", mazeElement)
   //  rowElement.dataset.rowIndex = rowIndex
   // ^ creates own custom attribute using .dataset ^  
   
    for (const cellIndex in row) {
       const cell = row[cellIndex]
       const cellElement = renderElement("cell", rowElement)
   //    cellElement.dataset.row = rowIndex
       cellElement.dataset.cell = cellIndex
   
     const className = legend[cell]
     cellElement.classList.add(className)
   //can eliminate the need for switch/if statements if using legend[cell]^^
   //cellElement.classList.add(legend[cell])
   //could also use **^^
   
   //**could use if or switch case statements **/
   
     //  if (cell === WALL) {
     //    cellElement.classList.add("wall")
     //  }
       
     //  if (cell === FLOOR) {
     //    cellElement.classList.add("floor")
     //  }
       
     //  if (cell === START) {
     //    cellElement.classList.add("start")
     //  }
       
     //  if (cell === FINISH) {
     //  cellElement.classList.add("finish")
     //}
   
   //** if using the legend object, the WALL would need replaced with legend.wall or legend["wall"] */
   
   //switch (cell) {
   //  case WALL:
   //    cellElement.classList.add("wall")
   //    break
   
   //  case FLOOR:
   //    cellElement.classList.add("floor")
   //    break
   
   //  case START:
   //    cellElement.classList.add("start")
   //    break
   
   //  case FINISH:
   //    cellElement.classList.add("finish")
   //    break
   //}
   
   }}
   
   //original code not cleaned up / reduced
   //const mazeElement = document.querySelector("main")
   
   //for (const rowIndex in mazeModel) {   ***can alternate in place of for loop
   //for (let rowIndex = 0; rowIndex < mazeModel.length; rowIndex += 1) {
   //  const row = mazeModel[rowIndex]
   //  const rowElement = document.createElement("div") // <div class="row"></div>
   //  rowElement.classList.add("row")
     //displays the rowElement to the mazeElement
   //  mazeElement.append(rowElement)
   
   
    //for (const cellIndex in row) {   ***can alternate in place of for loop 
   //  for (let cellIndex = 0; cellIndex < row.length; cellIndex += 1) {
   //    const cell = row[cellIndex]
   //    const cellElement = document.createElement("div") // <div class="cell"></div>
   //    cellElement.classList.add("cell")
       //displays the cellElement to the rowElement
   //    rowElement.append(cellElement)
   
   //    if (cell === WALL) {
   //      cellElement.classList.add("wall")
   //    } else if (cell === FLOOR) {
   //      cellElement.classList.add("floor")
   //    } else if (cell === START) {
   //      cellElement.classList.add("start")
   //    } else if (cell === FINISH) {
   //    cellElement.classList.add("finish")
   //  }
   //}}
   
   const renderPlayer = function () {
   const playerElement = document.createElement("img")
   playerElement.src = "./charmander.png"
   playerElement.classList.add("player")
   
   mazeElement
     .querySelector(".start")
     .append(playerElement)
   }
   renderPlayer()
   
   const playerElement = mazeElement.querySelector(".player")
   
   const movements = {
   //creating object to house up,down,left,right functions
     ArrowRight: function () {
       const currentCell = playerElement.parentElement
       const nextCell = currentCell.nextElementSibling
   
       if (nextCell.classList.contains("wall") === false) {
         nextCell.append(playerElement)
       }
     },
   
     ArrowLeft: function () {
       const currentCell = playerElement.parentElement
       const prevCell = currentCell.previousElementSibling
   
       if (prevCell.classList.contains("wall") === false) {
         prevCell.append(playerElement)
       }
     },
   
     ArrowDown: function () {
       const currentCell = playerElement.parentElement
       const cellIndex = currentCell.dataset.cell
   
       const currentRow = currentCell.parentElement
       const nextRow = currentRow.nextElementSibling
   
       const nextCell = nextRow.children[cellIndex]
   
       if (nextCell.classList.contains("wall") === false) {
         nextCell.append(playerElement)
       }
     },
   
     ArrowUp: function () {
       const currentCell = playerElement.parentElement
       const cellIndex = currentCell.dataset.cell
   
       const currentRow = currentCell.parentElement
       const prevRow = currentRow.previousElementSibling
   
       const nextCell = prevRow.children[cellIndex]
   
       if (nextCell.classList.contains("wall") === false) {
         nextCell.append(playerElement)
       }
     },
   
   }
   //previous version of arrowright displayed below
     //if (event.key === "ArrowRight") {
     //  const currentCell = playerElement.parentElement
     //  const nextCell = currentCell.nextElementSibling
   
     //  if (nextCell.classList.contains("wall") === false) {
     //    nextCell.append(playerElement)
     //  }
    // }
   
   //})
   
   document.addEventListener("keydown", (event) => {
      console.log(event.key)
   
      const movement = movements[event.key]
      // below is way to check if movement is a function
      if (movement !== undefined) {
        movement()
      }
   })
   
   //try to make the if statement for next cell in the arrow funtions into their own funtion
   //instead of having to run to if in each key press
   
   //could also write a function checking to make sure the check if cell class contains finish
   //to allow winning message or to progress to next maze
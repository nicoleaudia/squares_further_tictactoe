import { useState } from 'react';

function Square({ value }) {
  //const[value, setValue] = useState(null);

  //function handleClick() {
    //console.log("clicked.");
    //setValue('X');
  //}
  return (
    <button className="square">{value}</button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  return (
    <>
      <div className="board-row">
        <Square value={squares[0]}/>
        <Square value={squares[1]}/>
        <Square value={squares[2]}/>
      </div>
      <div className="board-row">
        <Square value={squares[3]}/>
        <Square value={squares[4]}/>
        <Square value={squares[5]}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]}/>
        <Square value={squares[7]}/>
        <Square value={squares[8]}/>
      </div>
    </>
  );
}


/* NOTES

APP.JS
-component = piece of reusable code representing a part of the UI
^ ex Square / Board
-export = keyword to make fxn accessible outside of file
-default = keyword for main fxn
-return = instruction to return as a value to the caller of the fxn
-JSX element = ex <button>, combo of JS and HTML describing display
-className = tells CSS how to style something
-fragments = <> and </> to wrap multiple adjacent JSX elements
-"function Square({ value})" indicates that Square can be passed the prop "value"
-use divs + CSS classes ...Ex board-row... to style. in this case, breaking rows as defined in styles.css
-state / React useState = use for component to remember things
-store the state of the game in the Board component (parent). The parent component can pass the state to the children
-Array(9).fill(null) creates an array with nine elements and sets each of them to null
-"const [squares, setSquares] = useState(Array(9).fill(null));" sets up a React state variable called squares that initially looks like 
STYLES.CSS
-defines styles for my React app
-* and body define style for large parts of app

INDEX.JS
-bridges component in app.js and web browser

PREVIEW
-in order to see "clicked", i had to launch preview in browser, then open console (Develop > show JS console)
testing github 123


*/
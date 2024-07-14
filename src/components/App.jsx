import React, { useState } from "react";
import ListItems from "./listItems";
import DoneItems from "./doneItems";

function App() {
  const [inputText, setInput] = useState("");
  const [elements, setElement] = useState([]);
  const [doneElements, setDoneElement] = useState([]);

  function handleInput(event) {
    let text = event.target.value;
    setInput(text);
  }
  function addElement() {
    setElement((prev) => {
      return [...prev, inputText];
    });
    setInput("");
  }

  function deleteItem(id) {
    setDoneElement((prev) => {
      return [...prev, elements[id]];
    });

    setElement((prev) => {
      return prev.filter((prevElement, index) => {
        return index != id;
      });
    });
  }

  function recoverElement(item,id){
    setElement((prev)=>{
      return [...prev,item]
    })
    setDoneElement((prev)=>{
      prev.filter((element,index)=>{
        return index!=id;
      })
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleInput} value={inputText} />
        <button onClick={addElement}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {elements.map((item, index) => {
            return (
              <ListItems
                key={index}
                id={index}
                content={item}
                delete={deleteItem}
              />
            );
          })}
        </ul>
      </div>
      <div>
        <p>Done Items</p>
        <ul>
          {doneElements.map((doneElement, index) => {
            return (
              <DoneItems key={index} id={index} doneelement={doneElement} add={recoverElement} />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

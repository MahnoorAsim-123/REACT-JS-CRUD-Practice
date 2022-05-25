import React, { useState } from 'react';
import "./App.css"

const App = () => {
  const [inputVal, setInputVal] = useState("");
  const [todo, setTodo] = useState([]);
  const [indVal, setIndVal] = useState("");
  const [updVal, setUpdVal] = useState("");


  const addTodo = () => {
    if (!inputVal) {
      alert("Enter todo")
    } else {
      setTodo([...todo, inputVal])
      setInputVal("")
    }
  }

  const DeleteAll = () => {
    setTodo([])
  }

  const DeleteOne = (id) => {
    const updatedTodo = todo.filter((val, ind) => {
      return ind !== id
    })
    setTodo(updatedTodo)
  }

  const Edit = (ind) => {
    setIndVal(ind)
  }

  const updateTodo = (id) => {
    if (!updVal) {
      alert("enter updated todo")
    } else {
      todo.splice(indVal, 1, updVal)
      setTodo([...todo])
      setIndVal("")
      setUpdVal("")
    }
  }

  return (
    <>
      <h1 style={{ tectAlign: " center", margin: "50px 0px" }}>TODO APP</h1>

      <div className='container'>

        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />

        <button onClick={addTodo}>Add</button>

        <button title='Delete ALL' onClick={DeleteAll}>Delete All</button>

      </div>

      {
        todo.map((val, ind) => {

          return ind === indVal ?

            <div className="upl" key={ind}>
                <input
                  className='ul'
                  type="text"
                  value={updVal}
                  onChange={(e) => setUpdVal(e.target.value)}
                />

                <button className='button' onClick={() => updateTodo(ind)}>Update</button>

            
            </div>

            :

            <div key={ind} className="UpdateList">
              <li>{val}</li>
              <div className='btn'>
                <button className='button' onClick={() => Edit(ind)}>Edit</button>
                <button className='button' onClick={() => DeleteOne(ind)}>Delete</button>
              </div>
            </div>

        })
      }
    </>
  )
};


export default App;
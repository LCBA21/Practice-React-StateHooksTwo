import './App.css';
import { useState } from 'react';

function App() {

  const [todoList,setTodoList]= useState([])
  const [newTask,setNewTask]=useState("")

const handleChange=(e)=>{
setNewTask(e.target.value)
};

const addTask=()=>{
const newTodoList=[...todoList,newTask];
setTodoList(newTodoList);
};


  return (
    <div className="App">
       <div className='addTask'>
       <input
       onChange={handleChange}
       />
       </div>

       <div>
        <button onClick={addTask}>Add Task</button>
       </div>

       <div className='list'>
        {todoList.map((task)=>{
          return <h3>{task}</h3>
        })}
       </div>

    </div>
  );
}

export default App;

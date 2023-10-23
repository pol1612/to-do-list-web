import './App.css';
import './Task'
import { useState } from 'react';
import {Task} from './Task'

function App() {

  const [todoList,setTodoList] = useState([])
  
  const [newTask,setNewTask] = useState("")
  
  const handleChange = (event) => {
    setNewTask(event.target.value)
  }
  
  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 :  todoList[todoList.length -1].id +1,
      taskName: newTask,
      completed: false,
    }
    setTodoList([...todoList,task])
  }

  const deleteTask = (taskId) => {
    setTodoList(todoList.filter( (task) =>  task.id!==taskId )) 
  }

  const completeTask = (taskId) => {
    setTodoList(
      todoList.map( (task) => {
      if (task.id === taskId) { 
        return {...task, completed: true}
      }
      return task
    }))
  }
  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange}/>
        <button onClick={addTask}> Add Task </button>
      </div>
      <div className='list'>
        {todoList.map( (task) => {
          return (
            <Task 
              taskName={task.taskName} 
              id={task.id}
              completed={task.completed}
              completeTask={completeTask}
              deleteTask={deleteTask}/>
          )  
        })}
      </div>
    </div>
  );
}

export default App;

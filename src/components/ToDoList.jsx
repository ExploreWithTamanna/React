import React, { useState } from 'react'

function ToDoList() {
const [task, setTask] =useState("");
const [tasks, setTasks] =useState([]);

const handleAddTask=()=>{

    setTasks([...tasks,task]);
    setTask("")
}

const handleDeleteTask=(index)=>{
    const updatedtasks = [...tasks];
    updatedtasks.splice(index,1);
    setTasks(updatedtasks);
}

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-6">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-4">To-Do List</h2>

      {/* Input section */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          className="flex-1 p-2 border rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Add a new task..."
          onChange={(e)=>setTask(e.target.value)}
          value={task}
        />
        <button 
        onClick={handleAddTask}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          Add
        </button>
      </div>

      {/* Task List */}
      <ul className="space-y-3">
        {tasks.map((task,index)=>(
            <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow-sm">
            <span className="text-gray-700">{task}</span>
            <button onClick={()=>handleDeleteTask(index)} className="text-red-500 hover:text-red-700">Delete</button>
          </li>
        ))}
        
      </ul>
    </div>
  </div>
  )
}

export default ToDoList

import React, { useState } from 'react'

function CounterApp() {
    const [count , setcount]=useState(0);
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="bg-white p-10 rounded-xl shadow-lg">
      <div className="flex justify-center items-center flex-col">
        <h1 className="text-2xl font-semibold mb-4">Counter</h1>
        <div className="text-4xl font-bold mb-4">{count}</div>
        <div className="flex space-x-4">
          <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none" onClick={()=>setcount(count +1)}>
            Increment
          </button>
          <button className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none" onClick={()=>setcount(count - 1)}>
            Decrement
          </button>
          <button className="px-6 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none" onClick={()=>setcount(0)}>
            Reset
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default CounterApp

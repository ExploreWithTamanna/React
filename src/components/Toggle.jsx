import React, { useState } from 'react'

function Toggle() {
    const [show , setShow]=useState(true);
  return (
    <div className="flex justify-center items-center h-screen bg-purple-100">
    <div className="bg-white shadow-md rounded-lg p-6 w-80 text-center">
      <h2 className="text-xl font-semibold mb-4">Toggle Content</h2>
      <button className="px-4 py-2 mb-6 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition" onClick={()=>setShow(!show)}>
        {show? "Hide":"Show"}
      </button>
     { show && 
       <div className="mb-4 bg-gray-100 p-4 rounded-lg">
        <img src="/src/assets/tailwindcss-1633184775.webp" className='mb-4'/>
       <p className="text-gray-700">This is the content that will be shown or hidden when toggled.</p>
     </div>
     }

     
  
      
    </div>
  </div>
  
  )
}

export default Toggle;

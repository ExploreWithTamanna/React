import React from 'react'

function Card({title, price}) {
  return (
      <div className="flex justify-center p-10 bg-pink-100">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img
          className="w-full h-50 object-cover"
          src="https://i.postimg.cc/Jz4pNTB0/Apple-Watch-Series-9-5-2212-800x800.jpg"
          alt="Product Image"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            This is a brief description of the product. It can be a few sentences explaining its features or benefits.
          </p>
        </div>
        
        <div className="px-6 pt-4 pb-2 flex justify-center">
          <div className="w-20 bg-blue-500 text-white text-lg font-semibold py-1 px-2 rounded-full  ">
            {price}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card

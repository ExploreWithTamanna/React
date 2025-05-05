import React from 'react'

function GridCard({product}) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-contain"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">
                {product.title}</h3>
            <p className='text-blue-400'>
                {product.description.slice(0,60)}...</p>
            <p className="text-green-500 text-md mt-2"> 
                ${product.price}
            </p>
          </div>
        </div>
  )
}

export default GridCard

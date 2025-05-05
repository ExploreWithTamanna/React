import React, { useEffect, useState } from 'react'
import GridCard from './GridCard';

function DataFetchGridCard() {
    const[products, setProducts]=useState([]);

    useEffect(()=>{
       const fetchData=async ()=>{
        const res=await fetch('https://fakestoreapi.com/products');
        const data=await res.json();
        console.log(data);
        setProducts(data);
       }
       fetchData();
    }, [])
    console.log(products);
  return (
    <div className="container  mx-auto p-4 bg-yellow-200">
        <h1 className="text-3xl text-center font-semibold text-gray-800 mb-4">Product Grid</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
       
      {products.map((product)=>(

                <GridCard key={product.id} product={product}/>
      ))}        

      </div>
    </div>
  );
};




  

export default DataFetchGridCard

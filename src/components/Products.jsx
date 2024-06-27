import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Products() {
  const[products, setProducts] = useState([])
  const[categories, setCategories] = useState([])
  const[visibleProducts, setVisibleProducts]=useState(3)
  const[selectedCategory, setSelectedCategory] = useState("all")

  const retrieveProducts = () => {
    axios.get("https://fakestoreapi.com/products").then((res) =>{
        setProducts(res.data)
    })
    .catch((error) => {
        console.log(error.response.data)
    })
    axios.get("https://fakestoreapi.com/products/categories").then((res) =>{
        setCategories(res.data)
    })
    .catch((error) => {
        console.log(error.response.data)
    })
}

useEffect(() => {
  retrieveProducts()
},[])

const handleLoadMore = () => {
    setVisibleProducts((prev) => prev + 3)
}

  return (
    <>
    <h1 className="text-4xl mt-10 text-center">Featured Products</h1>
    <h1 className="text-lg text-center text-gray-500 mb-10">Discover our weekly collection</h1>
    <div className="flex justify-center gap-5 mb-10 flex-wrap">
    <button className="btn btn-outline" onClick={() => setSelectedCategory("all")}>All</button>
        {
            categories.map((category)=>(
                <button className="btn btn-outline" onClick={() => setSelectedCategory(category)}>{category}</button>
            ))
        }
    </div>
    <div className="flex justify-center flex-wrap m-10 gap-5">
    {
        products.filter((product)=>{
            if(selectedCategory==="all"){
                return true;
            }else{
                return product.category === selectedCategory
            }
        })
        .slice(0, visibleProducts)
        .map((product)=>(
            <div className="card bg-base-100 w-96 h-[600px] shadow-xl">
            <figure>
              <img
                src={product.image}
                className="h-96 object-contain"
                alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.title}</h2>
              <div className="badge badge-warning p-4 text-sm">{product.category}</div>
              <div className="card-actions justify-between items-center">
                <h1 className="text-3xl text-gray-500">${product.price}</h1>
                <button className="btn btn-outline">
                Add To Cart
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
                </button>
              </div>
            </div>
          </div>
        ))
    }
    </div>
    {
        visibleProducts < products.length ? (
            <div className="flex justify-center mt-10">
                <button className="btn btn-outline" onClick={handleLoadMore}> Load More</button>
            </div>
        ) : (
            <div className="flex justify-center mt-10">
                <button className="btn btn-outline" onClick={(e)=> setVisibleProducts(3)}> Hide</button>
            </div>
        )
    }
    </>
  )
}

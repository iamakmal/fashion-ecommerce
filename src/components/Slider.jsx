import React, { useState, useEffect } from 'react'

export default function Slider() {
    const [images, setImages] = useState(["slider1.png","slider2.png","slider3.png","slider4.png"])
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
      }, 10000); // Change slide every 10 seconds
      return () => clearInterval(interval); // Clear interval on component unmount
    }, [images.length]);

    const renderSlider = images.map((image,index)=>(
        <div key={index} id={`slide${index}`} className={`carousel-item relative w-full lg:h-[500px] bg-gray-700 ${currentSlide === index ? 'block' : 'hidden'}`}>
        <img src={image} className="h-full ml-auto mr-auto" alt={`Slide ${index + 1}`}/>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href={`#slide${index === 0 ? images.length - 1 : index - 1}`} className="btn bg-transparent btn-circle text-white border-0 lg:text-xl" onClick={() => setCurrentSlide(index === 0 ? images.length - 1 : index - 1)}>❮</a> 
          <a href={`#slide${index === images.length - 1 ? 0 : index + 1}`} className="btn bg-transparent btn-circle text-white border-0 lg:text-xl" onClick={() => setCurrentSlide(index === images.length - 1 ? 0 : index + 1)}>❯</a>
        </div>
      </div> 
    )) 
   
  return (
    <>
    <div className="carousel w-full">
    {renderSlider}
    </div>
    </>
  )
}

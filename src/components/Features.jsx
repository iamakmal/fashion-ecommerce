import React from 'react'

export default function Features() {
  return (
    <>
    <div className="flex my-10 justify-around flex-wrap">

    <div className="flex flex-row space-x-5">
        <img src="delivery.png" className="h-20 w-30"/>
        <div className="flex flex-col justify-items-stretch">
            <h1 className="font-prata font-bold text-2xl leading-10">Free Shipping</h1>
            <p className="text-gray-500 text-lg">On All Orders Over $100</p>
        </div>
    </div>

    <div className="flex flex-row space-x-5">
        <img src="customer-service.png" className="h-20 w-30"/>
        <div className="flex flex-col justify-items-stretch">
            <h1 className="font-prata font-bold text-2xl leading-10">Dedicated Support</h1>
            <p className="text-gray-500 text-lg">Quick response 24/7</p>
        </div>
    </div>

    <div className="flex flex-row space-x-5">
        <img src="money-back.png" className="h-20 w-30"/>
        <div className="flex flex-col justify-items-stretch">
            <h1 className="font-prata font-bold text-2xl leading-10">Money Back Guarantee</h1>
            <p className="text-gray-500 text-lg">Worry Free Shipping</p>
        </div>
    </div>
    </div>
    </>
  )
}

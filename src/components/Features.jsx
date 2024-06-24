import React from 'react'

export default function Features() {
  return (
    <>
    <div className="flex my-10 justify-evenly items-center flex-wrap gap-5">

    <div className="flex flex-row space-x-5">
        <img src="delivery.png" className="w-20 object-contain"/>
        <div className="flex flex-col justify-items-stretch">
            <h1 className="font-prata font-bold text-xl leading-10">Free Shipping</h1>
            <p className="text-gray-500 text-base">On All Orders Over $100</p>
        </div>
    </div>

    <div className="flex flex-row space-x-5">
        <img src="customer-service.png" className="w-20 object-contain"/>
        <div className="flex flex-col justify-items-stretch">
            <h1 className="font-prata font-bold text-xl leading-10">Dedicated Support</h1>
            <p className="text-gray-500 text-base">Quick response 24/7</p>
        </div>
    </div>

    <div className="flex flex-row space-x-5">
        <img src="money-back.png" className="w-20 object-contain"/>
        <div className="flex flex-col justify-items-stretch">
            <h1 className="font-prata font-bold text-xl leading-10">Money Back Guarantee</h1>
            <p className="text-gray-500 text-base">Worry Free Shipping</p>
        </div>
    </div>
    </div>
    </>
  )
}

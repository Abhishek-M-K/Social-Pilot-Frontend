import { useUser } from '@clerk/clerk-react';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom';


const DashBoard = () => {
  // const user = useUser();

  // if (!user) {
  //   // If user is not authenticated, redirect to signin page
  //   return <Navigate to="/signup" />;
  // }

  return (

    <div className='relative sm:z-50'>
      <h1>hello there!</h1>
      <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nesciunt dicta perspiciatis molestiae architecto reprehenderit quibusdam laboriosam! Eum obcaecati quis voluptate qui praesentium dolorem, eos laboriosam totam impedit minus ex adipisci nisi, nesciunt veniam corrupti repellendus sed facere, explicabo sequi omnis dignissimos sunt! Officiis labore eos asperiores modi, qui dignissimos laboriosam dolor explicabo! Fugit fugiat adipisci vero accusantium veniam sequi maiores assumenda, quaerat eaque architecto odit doloremque quidem repudiandae quam labore nihil quia impedit a aperiam dolore! Quaerat inventore perspiciatis, rem molestias tenetur eligendi harum dolorum excepturi aliquid illum odit nam modi ea doloribus molestiae aliquam consectetur non ad nisi.</p>
      <p className='tracking-wide'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea facere vitae officiis distinctio perferendis dolores, perspiciatis quod unde odio odit. Deleniti ad, aspernatur aliquid veniam, ipsum vel labore numquam eligendi fugiat vitae molestiae voluptate deserunt eius rerum enim dolore rem? Sint quidem, praesentium iste id deserunt at maxime ea consequatur porro ut quae accusantium sapiente doloremque minus reiciendis animi nulla reprehenderit repellat sit eum odio hic distinctio tempora nobis! Inventore vero maxime sapiente voluptatum nulla nisi omnis sit similique sed! At unde totam iure ea quasi perspiciatis, atque esse ipsum magnam, incidunt saepe labore modi velit rem dolorum error. Placeat.</p>
      <input
            type="text"
            className="border rounded-md"
            />
    </div>
  )
}

export default DashBoard

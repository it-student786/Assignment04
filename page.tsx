"use client"
import React from 'react';
import Card from "./components/Card";

// import styles from "./pages.module.css";

const Home=()=> {
  return (
    <>
    <div className="heading text-2xl text-center pt-4 text-black">
      <h1>Teacher Identification Card</h1>
    </div>
    <div className='flex mt-47 h-full w-full fix'>
      <Card name='Sir Asharib'
      age={20}
      rollNumber={51214}
      day='Monday'
      time='2 to 5'
      cardBtnText='comments' />
    
      <Card name='Sir Naeem'
      age={25}
      rollNumber={5786}
      day='Thursday'
      time='7 to 10'
      cardBtnText='comments' />

      <Card name='Sir Ahmed Raza'
      age={30}
      rollNumber={110}
      day='Friday'
      time='9 to 12'
      cardBtnText='comments' />

    </div>
    </>

  )
}
      
export default Home;
import React from 'react'
import Header from './Header'
import Hero from './Hero'
import Author from './Author'
import Contact from './Contact'

const Landing = () => {
  return (
    <div className="text-black text-base h-auto ">
      <div className="w-full min-h-screen flex flex-col">
        <Header />
        <Hero />
      </div>
      <Author />
      <Contact/>
    </div>
  );
}

export default Landing
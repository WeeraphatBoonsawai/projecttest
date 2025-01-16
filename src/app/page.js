import React from 'react'

function page() {
  return (
    <>
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
  <div className="absolute inset-0">
    <img src="https://i.pinimg.com/736x/29/0f/4e/290f4ee68da42239700d6e5cb383aa70.jpg" alt="Background Image" className="object-cover object-center w-full h-full" />
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </div>
  
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
    <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to Our Awesome Website</h1>
    <p className="text-lg text-gray-300 mb-8">Discover amazing features and services that await you.</p>
  </div>
</div>

    </>
  )
}

export default page

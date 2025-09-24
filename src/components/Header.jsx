import React from 'react'

export default function Header() {
  return (
    <>
      <nav className="bg-[#020917] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            
            <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-[#CBA034]">Villa Oasis</h1>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-[rgb(170,183,201)] hover:text-[#CBA034] text-xl">Home</a>
              <a href="#" className="text-[rgb(170,183,201)] hover:text-[#CBA034] text-xl">About</a>
              <a href="#" className="text-[rgb(170,183,201)] hover:text-[#CBA034] text-xl">Services</a>
              <a href="#" className="text-[rgb(170,183,201)] hover:text-[#CBA034] text-xl">Contact</a>
            </div>

            {/* <div className="md:hidden">
              <button onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              </button>
            </div> */}

            <div className="hidden md:flex space-x-4">
              <a href="#" className="hover:text-gray-300">Contact</a>
            </div>
          </div>
        </div>

        <div id="mobile-menu" className="hidden md:hidden px-2 pt-2 pb-4 space-y-1 bg-green-600">
          <a href="#" className="block px-3 py-2 rounded hover:bg-green-500">Home</a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-green-500">About</a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-green-500">Services</a>
          <a href="#" className="block px-3 py-2 rounded hover:bg-green-500">Contact</a>
        </div>
      </nav>
    </>
  )
}

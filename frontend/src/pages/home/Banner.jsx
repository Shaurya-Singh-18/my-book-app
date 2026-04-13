import React from 'react'

const Banner = () => {
  return (
    <div className='flex flex-col w-full'>
      
      {/* Main Banner Visual */}
      <div className='relative w-full overflow-hidden bg-gradient-to-r from-yellow-300 via-primary to-yellow-500 min-h-[400px] flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-12 rounded-sm shadow-xl'>
        
        {/* Text Content */}
        <div className='md:w-1/2 flex flex-col items-start z-10 space-y-2'>
            <div className='bg-white px-4 py-2 font-secondary font-bold text-3xl md:text-5xl uppercase tracking-wider rounded-sm shadow-sm inline-block'>
              Reading Fest
            </div>
            <div className='flex flex-row items-baseline gap-4 text-black'>
                <span className='font-secondary font-bold text-4xl md:text-6xl uppercase tracking-tighter'>Up To</span>
                <span className='font-secondary font-black text-8xl md:text-[150px] leading-none tracking-tighter'>25</span>
                <span className='font-secondary font-black text-5xl md:text-8xl'>%</span>
            </div>
            <div className='bg-yellow-200/80 px-4 py-2 font-secondary font-bold text-3xl md:text-5xl uppercase tracking-wider rounded-sm backdrop-blur-sm'>
              Off <span className="font-light tracking-widest text-black/80">Sitewide</span>
            </div>
        </div>

        {/* 3D Book Covers Showcase */}
        <div className='md:w-1/2 relative mt-10 md:mt-0 flex justify-center md:justify-end min-h-[300px]'>
             {/* Note: In a real app we'd carefully position exact assets, but here we construct a 3D looking pile using generic images */}
             <div className="relative w-64 h-80 z-20 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
               <img src="/books/book-1.png" className="w-full h-full object-cover rounded-sm border border-gray-200" alt="Book 1" />
             </div>
             <div className="absolute right-20 top-4 w-60 h-72 z-10 shadow-xl transform -rotate-6 opacity-90 blur-[1px]">
               <img src="/books/book-2.png" className="w-full h-full object-cover rounded-sm grayscale-[20%]" alt="Book 2" />
             </div>
             <div className="absolute right-40 top-10 w-56 h-64 z-0 shadow-lg transform -rotate-12 opacity-80 blur-[2px]">
               <img src="/books/book-3.png" className="w-full h-full object-cover rounded-sm grayscale-[40%]" alt="Book 3" />
             </div>
        </div>
      </div>

      {/* Trust Badges Strip */}
      <div className='w-full bg-[#7C7A65] text-white py-3 px-4 md:px-10 flex flex-wrap justify-between items-center text-xs md:text-sm shadow-md'>
          <div className='flex items-center gap-2 mb-2 md:mb-0'>
              <span className="text-lg">🚚</span> 4-5 Days Express Delivery
          </div>
          <div className='flex items-center gap-2 mb-2 md:mb-0'>
              <span className="text-lg">✔</span> 100% Authentic Products
          </div>
          <div className='flex items-center gap-2 mb-2 md:mb-0'>
              <span className="text-lg">😀</span> 1 Lakh+ Happy Readers
          </div>
          <div className='flex items-center gap-2 mb-2 md:mb-0'>
              <span className="text-lg">🎓</span> Expertly Curated
          </div>
          <div className='flex items-center gap-2 mb-2 md:mb-0'>
              <span className="text-lg">🔄</span> Easy Return & Prompt Support
          </div>
      </div>

    </div>
  )
}

export default Banner
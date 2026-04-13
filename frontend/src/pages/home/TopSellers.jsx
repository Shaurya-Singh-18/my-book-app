import React, { useEffect, useState } from 'react'
import BookCard from '../books/BookCard';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useFetchAllBooksQuery } from '../../redux/features/books/booksApi';

const categories = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"]

const TopSellers = () => {
    
    const [selectedCategory, setSelectedCategory] = useState("Choose a genre");

   const {data: books = []} = useFetchAllBooksQuery();
  
    const filteredBooks = selectedCategory === "Choose a genre" ? books : books.filter(book => book.category === selectedCategory.toLowerCase())

    return (
            <div className='flex justify-between items-end mb-8 relative'>
                <div>
                  <h2 className='text-3xl font-secondary font-bold text-gray-900'>Best Sellers</h2>
                  <p className="text-gray-500 text-sm mt-1">Read What Millions Have Loved!</p>
                </div>
                
                {/* Desktop View All */}
                <button className='hidden md:flex items-center gap-2 border border-gray-300 rounded px-4 py-1 text-sm font-medium hover:bg-gray-50 transition'>
                    Show All <span className='text-lg'>↗</span>
                </button>
            </div>

            <Swiper
                slidesPerView={2}
                spaceBetween={15}
                navigation={true}
                breakpoints={{
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 25,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                    1280: {
                        slidesPerView: 6,
                        spaceBetween: 30,
                    }
                }}
                modules={[Pagination, Navigation]}
                className="mySwiper mb-12"
            >

                {
                   filteredBooks.length > 0 && filteredBooks.map((book, index) => (
                        <SwiperSlide key={index}>
                            <BookCard  book={book} />
                        </SwiperSlide>
                    ))
                }



            </Swiper>


        </div>
    )
}

export default TopSellers
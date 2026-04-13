import React from 'react';

// Using Swiper to make the internal cards slidable
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { FiShoppingCart } from "react-icons/fi";

const essentials = [
    { title: "Loope Ruled Notebook A5", image: "/books/book-15.png", newPrice: 269, oldPrice: 299 },
    { title: "Voyager Globe", image: "/books/book-16.png", newPrice: 359, oldPrice: 399 },
    { title: "Loope A4 Sketch Pad", image: "/books/book-17.png", newPrice: 269, oldPrice: 299 },
    { title: "Loope Unruled Notebook", image: "/books/book-18.png", newPrice: 269, oldPrice: 299 },
];

const ChosenEssentials = () => {
    return (
        <div className="w-full bg-[#3b5998] py-12 px-6 md:px-12 my-12 rounded-sm shadow-inner overflow-hidden relative">
            <h2 className="text-3xl font-secondary font-bold text-white mb-2">Exclusive Brand of Chosen Essentials</h2>
            <div className="text-white text-xl font-bold mb-8">loope</div>

            <div className="flex flex-col xl:flex-row gap-8 items-center">
                {/* Left Side decorative image  */}
                <div className="w-full xl:w-1/4 hidden lg:flex justify-center">
                    {/* Placeholder for the Globe / Flowers decorative element. 
                        In real app this is an absolute positioned PNG. */}
                    <div className="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center p-4 backdrop-blur-sm border border-white/20 shadow-2xl">
                       <span className="text-white text-opacity-50 text-center font-secondary">Decorative<br/>Element</span>
                    </div>
                </div>

                {/* Right Side Carousel */}
                <div className="w-full xl:w-3/4">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={15}
                        navigation={true}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            768: { slidesPerView: 3, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 20 },
                            1280: { slidesPerView: 4, spaceBetween: 20 }
                        }}
                        modules={[Pagination, Navigation]}
                        className="mySwiper essentials-swiper"
                    >
                        {essentials.map((item, index) => {
                            const discount = Math.round(((item.oldPrice - item.newPrice) / item.oldPrice) * 100);
                            return (
                                <SwiperSlide key={index}>
                                    <div className="bg-white rounded p-4 flex flex-col h-[350px] shadow-lg group">
                                        <div className="w-full flex-1 flex items-center justify-center bg-gray-50 mb-4 overflow-hidden rounded">
                                            <img src={item.image} alt={item.title} className="h-40 object-contain group-hover:scale-105 transition-transform duration-300 drop-shadow" />
                                        </div>
                                        <h3 className="font-primary font-semibold text-gray-800 text-sm mb-1 truncate">{item.title}</h3>
                                        <p className="text-xs text-gray-400 mb-2">Loope</p>
                                        
                                        <div className="flex items-center gap-2 mb-3">
                                            <span className="font-bold text-gray-900 text-lg">₹{item.newPrice}</span>
                                            <span className="text-gray-400 text-sm strike-through">₹{item.oldPrice}</span>
                                            <span className="bg-green-100 text-green-700 text-[10px] font-bold px-1.5 py-0.5 rounded ml-auto">
                                                ₹{item.oldPrice - item.newPrice} Off
                                            </span>
                                        </div>

                                        <button className="w-full bg-primary hover:bg-yellow-500 text-black font-semibold py-1.5 rounded flex justify-center items-center gap-2 transition text-sm">
                                            <FiShoppingCart /> Add to Bag
                                        </button>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default ChosenEssentials;

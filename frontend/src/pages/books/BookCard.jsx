import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineHeart, HiHeart } from "react-icons/hi2";
import { getImgUrl } from "../../utils/getImgUrl";

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { toggleWishlist } from "../../redux/features/wishlist/wishlistSlice";

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const bookId = book?._id ?? book?.id;
  const wishlistItems = useSelector(state => state.wishlist?.wishlistItems || []);
  const isWishlisted = wishlistItems.some(item => item._id === bookId);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  
  const handleToggleWishlist = (e) => {
    e.preventDefault(); // prevent triggering the Link
    dispatch(toggleWishlist(book));
  };

  const discount = Math.round(((book.oldPrice - book.newPrice) / book.oldPrice) * 100);

  return (
    <div className="bg-white border border-gray-100 rounded-md shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden relative group">
      
      {/* Wishlist Button Overlay */}
      <button 
        onClick={handleToggleWishlist}
        className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-white rounded-full shadow hover:bg-gray-50 transition"
      >
        {isWishlisted ? <HiHeart className="text-red-500 size-5" /> : <HiOutlineHeart className="text-gray-400 size-5" />}
      </button>

      <Link to={bookId ? `/books/${bookId}` : "#"} className="flex flex-col flex-1">
        {/* Image Container */}
        <div className="w-full h-56 bg-gray-50 flex items-center justify-center p-4 overflow-hidden relative">
          <img
            src={`${getImgUrl(book?.coverImage)}`}
            alt={book.title}
            className="h-full w-auto object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content Container */}
        <div className="p-4 flex flex-col flex-1 justify-between">
          <div>
            <h3 className="font-primary font-semibold text-gray-800 text-[15px] leading-tight line-clamp-2 hover:text-blue-600 transition">
              {book?.title}
            </h3>
            {/* Dummy author since schema doesn't have it, but requested by user's screenshot layout */}
            <p className="text-gray-400 text-xs mt-1 mb-3 font-medium">By Unknown Author</p>
          </div>

          <div className="mt-auto">
            {/* Price Row */}
            <div className="flex items-center gap-2 mb-3 flex-wrap">
               <span className="font-bold text-gray-900 text-lg">₹{book?.newPrice}</span>
               <span className="text-gray-400 text-sm strike-through">₹{book?.oldPrice}</span>
               {discount > 0 && (
                   <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded ml-auto">
                     {discount}% Off
                   </span>
               )}
            </div>
          </div>
        </div>
      </Link>

      {/* Full width action button */}
      <div className="px-4 pb-4">
        <button
          onClick={() => handleAddToCart(book)}
          className="w-full bg-primary hover:bg-yellow-500 text-black font-semibold py-2 rounded flex justify-center items-center gap-2 transition"
        >
          <FiShoppingCart />
          Add to Bag
        </button>
      </div>
    </div>
  );
};

export default BookCard;

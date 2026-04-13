import { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineHeart, HiOutlineShare, HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { useParams } from "react-router-dom";

import { getImgUrl } from "../../utils/getImgUrl";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { toggleWishlist } from "../../redux/features/wishlist/wishlistSlice";
import { useFetchBookByIdQuery } from "../../redux/features/books/booksApi";

const SingleBook = () => {
  const { id } = useParams();
  const { data: book, isLoading, isError, isFetching, error } = useFetchBookByIdQuery(id, { skip: !id });

  const dispatch = useDispatch();
  const wishlistItems = useSelector(state => state.wishlist?.wishlistItems || []);
  const isWishlisted = book && wishlistItems.some(item => item._id === book._id);

  // UI States
  const [openAccordion, setOpenAccordion] = useState('description');
  
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleToggleWishlist = () => {
    if(book) dispatch(toggleWishlist(book));
  }

  if (!id) return <div className="p-10 text-center">Missing book id.</div>;
  if (isLoading || isFetching) return <div className="p-10 text-center text-xl">Loading premium book...</div>;
  if (isError || !book) return <div className="p-10 text-center">Book not found.</div>;

  const discount = Math.round(((book.oldPrice - book.newPrice) / book.oldPrice) * 100);

  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-8 md:py-12 bg-white">
      
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 mb-8 font-primary">
          Home &gt; Categories &gt; <span className="capitalize">{book.category}</span> &gt; <span className="text-gray-900">{book.title}</span>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
        
        {/* Left Column: Image Gallery */}
        <div className="w-full lg:w-5/12 flex gap-4">
            
            {/* Thumbnails (Vertical) */}
            <div className="flex flex-col gap-4 w-20">
                <div className="w-full h-24 border-2 border-black rounded p-1 cursor-pointer">
                    <img src={`${getImgUrl(book.coverImage)}`} alt="thumbnail" className="w-full h-full object-contain" />
                </div>
                 {/* Fake secondary thumbnail for UI fidelity */}
                <div className="w-full h-24 border border-gray-200 rounded p-1 cursor-pointer opacity-50 hover:opacity-100 transition">
                    <img src={`${getImgUrl(book.coverImage)}`} alt="thumbnail 2" className="w-full h-full object-contain" />
                </div>
            </div>

            {/* Main Image */}
            <div className="flex-1 border border-gray-100 rounded bg-gray-50 flex items-center justify-center p-8 h-[500px]">
                <img src={`${getImgUrl(book.coverImage)}`} alt={book.title} className="max-h-full max-w-full drop-shadow-xl" />
            </div>

        </div>

        {/* Center/Right Column: Book Details */}
        <div className="w-full lg:w-7/12 flex flex-col xl:flex-row gap-10">
            
            {/* Center Info Section */}
            <div className="w-full xl:w-3/5">
                <h1 className="text-2xl md:text-3xl font-secondary font-bold text-gray-900 mb-2 leading-tight">
                    {book.title}
                </h1>
                <p className="text-gray-600 mb-4 font-primary text-sm">
                    By (Author) <span className="font-semibold text-gray-800">{book.author || "Unknown"}</span>
                </p>

                {/* Pricing Block */}
                <div className="my-6 border-t border-b border-gray-100 py-4">
                    <p className="text-gray-500 text-sm mb-1">MRP <span className="strike-through ml-1">₹{book.oldPrice}</span></p>
                    <div className="flex items-end gap-3 mb-1">
                        <span className="text-4xl font-primary font-bold text-gray-900">₹{book.newPrice}</span>
                        {discount > 0 && (
                            <span className="text-green-600 font-bold text-lg">({discount}% OFF)</span>
                        )}
                    </div>
                    <p className="text-xs text-gray-400 mt-2">Prices are inclusive of all taxes</p>
                </div>

                {/* Offers Placeholder */}
                <div className="mb-8">
                    <p className="text-sm font-semibold mb-3">Available Offers</p>
                    <div className="bg-yellow-50 border border-yellow-200 p-3 rounded text-sm text-gray-800 flex items-start gap-2 mb-2">
                        <span>🏷️</span>
                        <span>Get 10% Extra discount on ICICI Bank Cards. T&C Apply.</span>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <button onClick={() => handleAddToCart(book)} className="flex-1 bg-primary hover:bg-yellow-500 text-black font-bold py-3.5 rounded flex justify-center items-center gap-2 transition text-lg">
                        <FiShoppingCart /> Add to Bag
                    </button>
                    <button className="flex-1 bg-white border-2 border-black text-black hover:bg-black hover:text-white font-bold py-3.5 rounded flex justify-center items-center transition text-lg">
                        Buy Now
                    </button>
                </div>

                <div className="flex gap-6 mt-4">
                    <button onClick={handleToggleWishlist} className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-red-500 transition">
                         {isWishlisted ? <HiOutlineHeart className="size-6 text-red-500 fill-red-500" /> : <HiOutlineHeart className="size-6" />}
                         Add to Wishlist
                    </button>
                    <button className="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-blue-500 transition">
                         <HiOutlineShare className="size-6" /> Share
                    </button>
                </div>
            </div>

            {/* Right-most Widget Section (Delivery) */}
            <div className="w-full xl:w-2/5 flex flex-col gap-6">
                <div className="bg-gray-50 border border-gray-200 rounded p-5">
                    <h4 className="font-semibold mb-3 text-sm">Delivery Options</h4>
                    <div className="relative mb-4">
                        <input type="text" placeholder="Enter Pincode" className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:border-black" />
                        <button className="absolute right-2 top-2 text-blue-600 font-semibold text-sm">Check</button>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2">
                        <li className="flex items-center gap-2"><span>🚚</span> Delivery by 4-5 Days</li>
                        <li className="flex items-center gap-2"><span>💵</span> Cash on Delivery available</li>
                        <li className="flex items-center gap-2"><span>🔄</span> 7 Days Replacement Policy</li>
                    </ul>
                </div>
            </div>

        </div>
      </div>

      {/* Accordions Section */}
      <div className="mt-16 w-full lg:w-8/12">
          
          <div className="border-b border-gray-200">
             <button onClick={() => setOpenAccordion(openAccordion === 'description' ? '' : 'description')} className="w-full py-4 flex justify-between items-center text-left font-secondary text-lg font-semibold text-gray-900 focus:outline-none">
                 <span>Description</span>
                 {openAccordion === 'description' ? <HiChevronUp className="size-6 text-gray-500"/> : <HiChevronDown className="size-6 text-gray-500"/>}
             </button>
             {openAccordion === 'description' && (
                 <div className="pb-6 text-gray-600 text-sm leading-relaxed prose">
                     {book.description}
                 </div>
             )}
          </div>

          <div className="border-b border-gray-200">
             <button onClick={() => setOpenAccordion(openAccordion === 'details' ? '' : 'details')} className="w-full py-4 flex justify-between items-center text-left font-secondary text-lg font-semibold text-gray-900 focus:outline-none">
                 <span>Product Details</span>
                 {openAccordion === 'details' ? <HiChevronUp className="size-6 text-gray-500"/> : <HiChevronDown className="size-6 text-gray-500"/>}
             </button>
             {openAccordion === 'details' && (
                 <div className="pb-6 text-gray-600 text-sm flex gap-12">
                     <div>
                         <p className="mb-2"><strong>Category:</strong> <span className="capitalize">{book.category}</span></p>
                         <p className="mb-2"><strong>Format:</strong> Paperback</p>
                     </div>
                     <div>
                         <p className="mb-2"><strong>Publication Date:</strong> {new Date(book?.createdAt).toLocaleDateString()}</p>
                         <p className="mb-2"><strong>Language:</strong> English</p>
                     </div>
                 </div>
             )}
          </div>

      </div>

    </div>
  );
};

export default SingleBook;

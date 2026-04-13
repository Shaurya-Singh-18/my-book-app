import React from 'react';

const authors = [
    { name: "Sudha Murty", image: "https://avatar.iran.liara.run/public/girl?username=Sudha" },
    { name: "Chetan Bhagat", image: "https://avatar.iran.liara.run/public/boy?username=Chetan" },
    { name: "Ankur Warikoo", image: "https://avatar.iran.liara.run/public/boy?username=Ankur" },
    { name: "Amish Tripathi", image: "https://avatar.iran.liara.run/public/boy?username=Amish" },
    { name: "Ruskin Bond", image: "https://avatar.iran.liara.run/public/boy?username=Ruskin" },
    { name: "J. K. Rowling", image: "https://avatar.iran.liara.run/public/girl?username=Rowling" },
];

const DiscoverGreatAuthors = () => {
    return (
        <div className="py-12 mb-8">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-secondary font-bold text-gray-900">Discover Great Authors</h2>
                <p className="text-gray-500 text-sm mt-1">From timeless classics to modern favourites.</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 px-4">
                {authors.map((author, idx) => (
                    <div key={idx} className="flex flex-col items-center cursor-pointer group">
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-3 border-2 border-transparent group-hover:border-primary transition-all duration-300 shadow-md">
                            <img src={author.image} alt={author.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">{author.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DiscoverGreatAuthors;

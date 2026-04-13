import React from 'react';

const ageGroups = [
    { label: "0-2 Years", color: "text-red-300", bg: "bg-red-50", icon: "👶" },
    { label: "3-5 Years", color: "text-orange-400", bg: "bg-orange-50", icon: "👦" },
    { label: "6-8 Years", color: "text-yellow-400", bg: "bg-yellow-50", icon: "👧" },
    { label: "9-12 Years", color: "text-green-400", bg: "bg-green-50", icon: "🧒" },
    { label: "Young Adult", color: "text-purple-400", bg: "bg-purple-50", icon: "👩" },
    { label: "View All", color: "text-gray-800", bg: "bg-gray-100", icon: "↗" }
];

const BooksByAge = () => {
    return (
        <div className="py-12 mb-12 flex flex-col items-center border-t border-gray-100">
            <h2 className="text-3xl font-secondary font-bold text-gray-900 mb-1">Books by Age, Stories for All</h2>
            <p className="text-gray-500 text-sm mb-10">Thoughtfully curated reads for every growing age.</p>

            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                {ageGroups.map((group, idx) => (
                    <div key={idx} className="flex flex-col items-center cursor-pointer group">
                        <div className={`w-20 h-20 md:w-28 md:h-28 rounded-full ${group.bg} flex items-center justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-2 shadow-sm border border-transparent group-hover:shadow-md`}>
                             <span className={`text-4xl md:text-5xl ${group.color}`}>{group.icon}</span>
                        </div>
                        <span className="text-sm font-medium text-gray-700">{group.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BooksByAge;

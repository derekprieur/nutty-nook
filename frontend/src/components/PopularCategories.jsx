const categories = [
    {
        id: 1,
        name: 'Almonds',
        image: '/almonds.jpg',
    },
    {
        id: 2,
        name: 'Walnuts',
        image: '/walnuts.jpg',
    },
    {
        id: 3,
        name: 'Peanuts',
        image: '/peanuts.jpg',
    },
    {
        id: 4,
        name: 'Cashews',
        image: '/cashews.jpg',
    },
];

const PopularCategories = () => {
    return (
        <div className="w-full mx-auto max-w-7xl p-8">
            <h2 className="text-3xl font-bold text-dark-brown mb-4">Popular Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map(category => (
                    <div key={category.id} className="bg-white rounded-lg p-4 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300">
                        <img src={category.image} alt={category.name} className="w-24 h-24 mb-3 object-contain" />
                        <h3 className="text-lg font-bold text-dark-brown">{category.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularCategories;

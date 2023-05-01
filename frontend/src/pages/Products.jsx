import { useEffect, useState } from 'react';
import { products } from '../constants/products';
import { FaStar } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Sidebar, QuickView, Pagination } from '../components';
import { addToCart, updateCartItem, removeFromCart } from '../redux/cartSlice';

const Products = () => {
    const [nutTypes, setNutTypes] = useState(products.map((product) => ({
        id: product.id,
        type: product.type,
        name: product.name,
        checked: false,
    })));
    const [priceRange, setPriceRange] = useState({ min: 0, max: 50 });
    const [rating, setRating] = useState(0);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [activePage, setActivePage] = useState(1);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const itemsPerPage = 8;
    const startIndex = (activePage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleProducts = filteredProducts.slice(startIndex, endIndex);
    const searchTerm = useSelector((state) => state.search.searchTerm);
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    useEffect(() => {
        const checkedNutTypeIds = nutTypes
            .filter((nutType) => nutType.checked)
            .map((nutType) => nutType.type);

        setFilteredProducts(products.filter((product) =>
            (checkedNutTypeIds.length === 0 || checkedNutTypeIds.includes(product.type)) &&
            product.price >= priceRange.min && product.price <= priceRange.max &&
            product.rating >= rating &&
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        ));
    }, [nutTypes, priceRange, rating, searchTerm]);


    const handleNutTypeChange = (nutTypeId, checked) => {
        setNutTypes(nutTypes.map((nutType) => (
            nutType.id === nutTypeId ? { ...nutType, checked } : nutType
        )));
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const handleUpdateCart = (productId) => {
        const cartItem = cartItems.find((item) => item.id === productId);
        if (cartItem && cartItem.quantity > 1) {
            dispatch(updateCartItem({ productId, newQuantity: cartItem.quantity - 1 }));
        } else if (cartItem && cartItem.quantity === 1) {
            dispatch(removeFromCart(productId));
        }
    };

    return (
        <div className="md:flex h-full lg:h-screen">
            <button
                onClick={toggleSidebar}
                className="md:hidden text-medium-brown px-4 py-2 rounded-md mb-4 flex items-center justify-center"
            >
                {isSidebarOpen ? (
                    <AiOutlineClose className="text-2xl" />
                ) : (
                    <GiHamburgerMenu className="text-2xl" />
                )}
            </button>
            <Sidebar nutTypes={nutTypes} onNutTypeChange={handleNutTypeChange} priceRange={priceRange} onPriceRangeChange={setPriceRange} rating={rating} onRatingChange={setRating} isOpen={isSidebarOpen} />
            <div className="w-full mx-auto max-w-7xl p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {visibleProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg p-4 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300 relative group"
                        >
                            <QuickView product={product} cartItems={cartItems} onAddToCart={() => handleAddToCart(product)} onUpdateCart={() => handleUpdateCart(product.id)} />
                            <img src={product.images[0]} alt={product.name} className="w-24 h-24 mb-3 object-contain" />
                            <h3 className="text-lg font-bold text-dark-brown mb-2">
                                <Link to={`/product/${product.id}`} className="hover:text-medium-brown transition-colors duration-300">
                                    {product.name}
                                </Link>
                            </h3>
                            <div className="flex items-center mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FaStar
                                        key={star}
                                        className={star <= product.rating ? 'text-medium-brown' : 'text-light-gray'}
                                    />
                                ))}
                            </div>
                            <p className="text-medium-brown mb-4">${product.price.toFixed(2)}</p>
                        </div>
                    ))}
                </div>
                {filteredProducts.length === 0 && (
                    <div className="text-xl text-center text-dark-brown mt-8">
                        No nuts found (winter am I right?). Please try adjusting the filters or search term.
                    </div>
                )}
                {filteredProducts.length > 0 && (
                    <Pagination
                        itemsPerPage={itemsPerPage}
                        totalItems={filteredProducts.length}
                        activePage={activePage}
                        setActivePage={setActivePage}
                    />
                )}
            </div>
        </div>
    );
};

export default Products;

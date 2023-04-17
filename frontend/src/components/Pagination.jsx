import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, activePage, setActivePage }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const prevPage = () => {
        if (activePage > 1) {
            setActivePage(activePage - 1);
        }
    };

    const nextPage = () => {
        if (activePage < totalPages) {
            setActivePage(activePage + 1);
        }
    };

    return (
        <div className="flex items-center justify-center py-4">
            <button
                className="bg-light-brown text-white px-4 py-2 rounded-lg hover:bg-medium-brown transition-colors duration-300"
                onClick={prevPage}
                disabled={activePage === 1}
            >
                Prev
            </button>
            <div className="mx-4">
                Page {activePage} of {totalPages}
            </div>
            <button
                className="bg-light-brown text-white px-4 py-2 rounded-lg hover:bg-medium-brown transition-colors duration-300"
                onClick={nextPage}
                disabled={activePage === totalPages}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;

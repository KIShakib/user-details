import React from 'react';

const Pagination = () => {
    return (
        <nav className='flex justify-center mt-5'>
            <ul className="inline-flex -space-x-px">
                <li>
                    <button
                        className="border border-gray-300 text-black font-bold hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:hover:bg-red-500 dark:hover:text-white ml-0 rounded-l-lg leading-tight py-2 px-3">{"<"}</button>
                </li>
                <li>
                    <button
                        className="leading-tight py-2 px-3 border border-gray-300 text-black font-bold hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:hover:bg-red-500 dark:hover:text-white">1</button>
                </li>
                <li>
                    <button
                        className="leading-tight py-2 px-3 border border-gray-300 text-black font-bold hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:hover:bg-red-500 dark:hover:text-white">2</button>
                </li>
                <li>
                    <button
                        className="leading-tight py-2 px-3 border border-gray-300 text-black font-bold hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:hover:bg-red-500 dark:hover:text-white">3</button>
                </li>
                <li>
                    <button
                        className="leading-tight py-2 px-3 border border-gray-300 text-black font-bold hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:hover:bg-red-500 dark:hover:text-white">4</button>
                </li>
                <li>
                    <button
                        className="rounded-r-lg leading-tight py-2 px-3 border border-gray-300 text-black font-bold hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:hover:bg-red-500 dark:hover:text-white">{">"}</button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
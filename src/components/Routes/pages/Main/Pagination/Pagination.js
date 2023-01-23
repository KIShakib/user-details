import React from 'react';

const Pagination = ({ activePage, setActivePage }) => {
    return (
        <nav className='flex justify-center mt-5'>
            <ul className="inline-flex -space-x-px">
                <li>
                    <button
                        disabled={activePage === 1}
                        onClick={() => setActivePage(activePage - 1)}
                        className={`border border-gray-300 text-black font-bold hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:hover:bg-red-500 dark:hover:text-white ml-0 rounded-l-lg leading-tight py-2 px-3 ${activePage === 1 && "opacity-50"}`}>{"<"}</button>
                </li>
                <li>
                    <button
                        onClick={() => setActivePage(1)}
                        className={`leading-tight py-2 px-3 border border-gray-300 text-black font-bold hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:hover:bg-red-500 dark:hover:text-white ${activePage === 1 && "bg-red-500 !text-slate-50"}`}>1</button>
                </li>
                <li>
                    <button
                        onClick={() => setActivePage(2)}
                        className={`leading-tight py-2 px-3 border border-gray-300 text-black font-bold hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:hover:bg-red-500 dark:hover:text-white ${activePage === 2 && "bg-red-500 !text-slate-50"}`}>2</button>
                </li>
                <li>
                    <button
                        onClick={() => setActivePage(3)}
                        className={`leading-tight py-2 px-3 border border-gray-300 text-black font-bold hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:hover:bg-red-500 dark:hover:text-white ${activePage === 3 && "bg-red-500 !text-slate-50"}`}>3</button>
                </li>
                <li>
                    <button
                        disabled={activePage === 3}
                        onClick={() => setActivePage(activePage + 1)}
                        className={`rounded-r-lg leading-tight py-2 px-3 border border-gray-300 text-black font-bold hover:bg-gray-100 hover:text-gray-700  dark:border-gray-700 dark:hover:bg-red-500 dark:hover:text-white
                        ${activePage === 3 && "opacity-50"}`}>{">"}</button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
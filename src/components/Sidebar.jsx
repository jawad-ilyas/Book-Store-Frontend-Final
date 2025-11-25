import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
    ChevronDownIcon,
    ChevronRightIcon,
    BookOpenIcon,
    UsersIcon,
    TicketIcon,
    RectangleGroupIcon,
    ShoppingBagIcon,
    XMarkIcon
} from "@heroicons/react/24/outline";

const Sidebar = ({ isOpen, onClose }) => {
    const [openMenu, setOpenMenu] = useState(null);

    const toggleMenu = (menu) => {
        setOpenMenu(openMenu === menu ? null : menu);
    };

    const handleLinkClick = () => {
        if (onClose) onClose();
    };

    return (
        <div
            className={`
        fixed top-0 left-0 h-full w-64 
        bg-white dark:bg-gray-900 
        text-gray-900 dark:text-gray-100
        shadow-lg transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        pt-16
      `}
        >
            {/* Header with Close Button */}
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <h2 className="text-xl font-bold">Admin Panel</h2>

                <button
                    onClick={() => onClose(false)}
                    className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
                >
                    <XMarkIcon className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                </button>

            </div>

            <ul className="mt-4 space-y-2">

                {/* BOOKS */}
                <li>
                    <button
                        onClick={() => toggleMenu("books")}
                        className="flex justify-between items-center w-full px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        <span className="flex items-center gap-3">
                            <BookOpenIcon className="w-5 h-5" />
                            Books
                        </span>
                        {openMenu === "books" ? (
                            <ChevronDownIcon className="w-5 h-5" />
                        ) : (
                            <ChevronRightIcon className="w-5 h-5" />
                        )}
                    </button>

                    {openMenu === "books" && (
                        <ul className="ml-10 mt-1 space-y-1">
                            <li><Link to="/admin/books" className="block py-2" onClick={handleLinkClick}>Books</Link></li>
                            <li><Link to="/admin/books/add" className="block py-2" onClick={handleLinkClick}>Add Book</Link></li>
                            {/* <li><Link to="/admin/books/update/" className="block py-2" onClick={handleLinkClick}>Update Book</Link></li> */}
                            {/* <li><Link to="/admin/books/delete" className="block py-2" onClick={handleLinkClick}>Delete Book</Link></li> */}
                        </ul>
                    )}
                </li>

                {/* ORDERS */}
                <li>
                    <button
                        onClick={() => toggleMenu("orders")}
                        className="flex justify-between items-center w-full px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        <span className="flex items-center gap-3">
                            <ShoppingBagIcon className="w-5 h-5" />
                            Orders
                        </span>
                        {openMenu === "orders" ? (
                            <ChevronDownIcon className="w-5 h-5" />
                        ) : (
                            <ChevronRightIcon className="w-5 h-5" />
                        )}
                    </button>

                    {openMenu === "orders" && (
                        <ul className="ml-10 mt-1 space-y-1">
                            <li><Link to="/admin/orders/add" className="block py-2" onClick={handleLinkClick}>Add Order</Link></li>
                            <li><Link to="/admin/orders/update" className="block py-2" onClick={handleLinkClick}>Update Order</Link></li>
                            <li><Link to="/admin/orders/delete" className="block py-2" onClick={handleLinkClick}>Delete Order</Link></li>
                        </ul>
                    )}
                </li>

                {/* USERS */}
                <li>
                    <button
                        onClick={() => toggleMenu("users")}
                        className="flex justify-between items-center w-full px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        <span className="flex items-center gap-3">
                            <UsersIcon className="w-5 h-5" />
                            Users
                        </span>
                        {openMenu === "users" ? (
                            <ChevronDownIcon className="w-5 h-5" />
                        ) : (
                            <ChevronRightIcon className="w-5 h-5" />
                        )}
                    </button>

                    {openMenu === "users" && (
                        <ul className="ml-10 mt-1 space-y-1">
                            <li><Link to="/admin/users/add" className="block py-2" onClick={handleLinkClick}>Add User</Link></li>
                            <li><Link to="/admin/users/update" className="block py-2" onClick={handleLinkClick}>Update User</Link></li>
                            <li><Link to="/admin/users/delete" className="block py-2" onClick={handleLinkClick}>Delete User</Link></li>
                        </ul>
                    )}
                </li>

                {/* COUPONS */}
                <li>
                    <button
                        onClick={() => toggleMenu("coupons")}
                        className="flex justify-between items-center w-full px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        <span className="flex items-center gap-3">
                            <TicketIcon className="w-5 h-5" />
                            Coupons
                        </span>
                        {openMenu === "coupons" ? (
                            <ChevronDownIcon className="w-5 h-5" />
                        ) : (
                            <ChevronRightIcon className="w-5 h-5" />
                        )}
                    </button>

                    {openMenu === "coupons" && (
                        <ul className="ml-10 mt-1 space-y-1">
                            <li><Link to="/admin/coupons/add" className="block py-2" onClick={handleLinkClick}>Add Coupon</Link></li>
                            <li><Link to="/admin/coupons/update" className="block py-2" onClick={handleLinkClick}>Update Coupon</Link></li>
                            <li><Link to="/admin/coupons/delete" className="block py-2" onClick={handleLinkClick}>Delete Coupon</Link></li>
                        </ul>
                    )}
                </li>

                {/* BANNERS */}
                <li>
                    <button
                        onClick={() => toggleMenu("banners")}
                        className="flex justify-between items-center w-full px-6 py-3 hover:bg-gray-100 dark:hover:bg-gray-800"
                    >
                        <span className="flex items-center gap-3">
                            <RectangleGroupIcon className="w-5 h-5" />
                            Banners
                        </span>
                        {openMenu === "banners" ? (
                            <ChevronDownIcon className="w-5 h-5" />
                        ) : (
                            <ChevronRightIcon className="w-5 h-5" />
                        )}
                    </button>

                    {openMenu === "banners" && (
                        <ul className="ml-10 mt-1 space-y-1">
                            <li><Link to="/admin/banners/add" className="block py-2" onClick={handleLinkClick}>Add Banner</Link></li>
                            <li><Link to="/admin/banners/update" className="block py-2" onClick={handleLinkClick}>Update Banner</Link></li>
                            <li><Link to="/admin/banners/delete" className="block py-2" onClick={handleLinkClick}>Delete Banner</Link></li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;

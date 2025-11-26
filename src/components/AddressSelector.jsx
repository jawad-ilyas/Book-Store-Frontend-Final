import { useState } from "react";
import { motion } from "framer-motion";
import { useGetAddressesQuery } from "../redux/address/addressApi";

const AddressSelector = ({ onSelect }) => {
    const [selectedId, setSelectedId] = useState(null);
    const { data } = useGetAddressesQuery()

    const addresses = data?.addresses || []
    // console.log("user current addresses ", addresses)
    const handleCheckbox = (id) => {
        if (selectedId === id) {
            setSelectedId(null);
            if (onSelect) onSelect(null);
        } else {
            setSelectedId(id);
            if (onSelect) onSelect(id);
        }
    };

    return (
        <section className="my-10 px-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                Select Delivery Address
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {addresses.map((address) => (
                    <motion.label
                        key={address?._id}
                        whileHover={{ scale: 1.02 }}
                        className={`relative cursor-pointer bg-white/20 dark:bg-black/20 
                       backdrop-blur-xl rounded-2xl p-5 shadow-neu 
                       border transition 
                       ${selectedId === address?._id ? "border-teal-400" : "border-transparent"}
                       ${address?.isDefault ? "ring-2 ring-teal-500" : ""}
                    `}
                    >
                        {/* Radio Button */}
                        <input
                            type="checkbox"
                            name="selectedAddress"
                            className="absolute top-4 right-4 w-5 h-5 accent-teal-500 cursor-pointer"
                            checked={selectedId === address?._id}
                            onChange={() => handleCheckbox(address?._id)}
                        />

                        {/* Address Content */}
                        <div className="text-gray-900 dark:text-gray-100">
                            <p className="font-semibold text-lg mb-1">
                                {address?.addressLine1}
                            </p>

                            {address?.addressLine2 && (
                                <p className="text-sm opacity-80">{address?.addressLine2}</p>
                            )}

                            <p className="text-sm opacity-80 mt-1">
                                {address?.city}, {address?.state}
                            </p>

                            <p className="text-sm opacity-80">
                                {address?.country} - {address?.postalCode}
                            </p>

                            <p className="text-sm mt-2 font-medium">📞 {address?.phone}</p>

                            {address?.isDefault && (
                                <span className="inline-block mt-3 text-xs bg-teal-500/20 text-teal-600 dark:text-teal-400 px-3 py-1 rounded-full">
                                    Default Address
                                </span>
                            )}
                        </div>
                    </motion.label>
                ))}
            </div>
        </section>
    );
};

export default AddressSelector;

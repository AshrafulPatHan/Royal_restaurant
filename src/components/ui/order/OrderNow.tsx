/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";

type OrderNowProps = {
    _id: string;
    foodName: string;
    price: number;
    details: string;
    photo: string;
};

const publicUrl = import.meta.env.VITE_API_URL;

export default function OrderNow({ _id, foodName, price, details, photo, }: OrderNowProps) {
    const [isOpen, setIsOpen] = useState(false);
    // form data
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('unknown');
    const [phone, setPhone] = useState('unknown');
    const [isLoading, setIsLoading] = useState(false);



    // Checkout Form
    const handelCkeckout = async (event: any) => {
        event.preventDefault();

        // set prine into number
        const PayAmount = Number(price);
        // chek email or phon number vladiton
        function validation(contact: string) {
            // email regex (simple)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            // phone regex (শুধু digit, min 7 - max 15)
            const phoneRegex = /^[0-9]{7,15}$/;

            if (emailRegex.test(contact)) {
                setEmail(contact);
            } else if (phoneRegex.test(contact)) {
                setPhone(contact);
            } else {
                toast.error("Invalid email or phone number ❌");
                console.log("Invalid contact:", contact);
            }
        }
        validation(contact);

        // start loader
        setIsLoading(true);


        const SendData = {
            amount: PayAmount,
            cus_name: name,
            cus_email: email,
            cus_phone: phone,
            cus_add1: address,
        }
        console.log(SendData);

        // send data into server
        try {
            const res = await axios.post(`${publicUrl}/api/sslcommerz/init`, SendData);

            if (res.data.GatewayPageURL) {
                window.location.href = res.data.GatewayPageURL; // ✅ Redirect to SSLCommerz payment page
                setIsLoading(false);
            } else {
                toast.error("Failed to get payment URL");
            }
        } catch (err) {
            console.error(err);
        }



    }

    return (
        <div>
            {/* Order Button */}
            <button onClick={() => setIsOpen(true)} className="Order-btn" > Order Now </button>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl shadow-xl p-6 w-[90%] sm:w-[500px] relative animate-fadeIn">
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center text-gray-700 rounded-full bg-gray-100 hover:bg-amber-500 hover:text-white transition"
                        >
                            ✕
                        </button>

                        {/* Food Image */}
                        <img
                            src={photo}
                            alt={foodName}
                            className="w-full h-52 object-cover rounded-xl mb-4 shadow"
                        />

                        {/* Food Title + Price */}
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-2xl font-bold text-gray-900">{foodName}</h2>
                            <p className="text-xl font-semibold text-amber-600">${price}</p>
                        </div>

                        {/* Food Details */}
                        <p className="text-gray-600 mb-5 italic leading-relaxed">
                            {details}
                        </p>

                        {/* Hidden ID */}
                        <p className="hidden">{_id}</p>

                        {/* Order Form */}
                        <form onSubmit={handelCkeckout} className="flex flex-col gap-3">
                            <input
                                type="text"
                                placeholder="Your Name"
                                name="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="px-4 py-2 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-amber-500 outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Phone number or Email"
                                name="contact"
                                value={contact}
                                onChange={(e) => setContact(e.target.value)}
                                className="px-4 py-2 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-amber-500 outline-none"
                            />
                            <input
                                type="text"
                                placeholder="Delivery Address"
                                name="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="px-4 py-2 rounded-lg border border-gray-300 text-black focus:ring-2 focus:ring-amber-500 outline-none"
                            />

                            {/* Checkout Button */}
                            <button
                                type="submit"
                                className="mt-2 bg-amber-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-amber-600 transition shadow-md flex items-center text-center justify-center"
                            >
                                Checkout
                                {isLoading ? (
                                    <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin ml-2"></div>
                                ) : (
                                    <p></p>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import star from "../../assets/image/Popular/star.svg";
import line from "../../assets/icon/line.png";
import "../page.css"
import { useEffect, useState } from "react";
import axios from "axios";
import OrderNow from "../../components/ui/order/OrderNow";


const PublicUrl = import.meta.env.VITE_API_URL;

type Menu = {
    _id: string;
    foodName: string;
    PhotoUrl: string;
    price: number;
    details: string;
    rating: number;
    type: string;
};

const Menu = () => {
    const [menu, setMenu] = useState<Menu[]>([]);
    const [popular, setPopular] = useState<Menu[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        function fetchMenu() {
            try {
                async function GetAllMenu() {
                    const response = await axios.get(`${PublicUrl}/all-menu`);
                    setMenu(response.data);
                    setIsLoading(false);
                }
                GetAllMenu();

                async function GetPopularMenu() {
                    const response = await axios.get(`${PublicUrl}/limate-menu`);
                    setPopular(response.data);
                }
                GetPopularMenu()
            } catch (error) {
                console.error("Error fetching menu:", error);
            }
        }
        fetchMenu();
    }, []);

    return (
        <div >
            <Navbar />
            <div className="flex-center text-primary max-w-screen overflow-x-hidden px-[14px] mt-high sm:px-[30px] ">
                <div className="flex flex-col items-center mb-high">
                    <h2 className="text-header">Popular Menu</h2>
                    <img src={line} alt="logo" className="mb-primary mt-3 " />
                    {/* our popular menu */}
                    {isLoading ? (
                        <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                            {popular.map((item) => (
                                <div key={item._id}>
                                    <div className=" w-[97vw] sm:w-[370px] ">
                                        <div className="w-[97vw] sm:w-[370px] h-auto sm:h-[300px] overflow-hidden object-center relative ">
                                            <img src={item.PhotoUrl} alt="photo 1" className="hover-image-popular " />
                                        </div>
                                        <div className="flex flex-col h-[170px] justify-between">
                                            <div>
                                                <div className="mt-5 flex justify-between text-2xl">
                                                    <h4 className="text-white">{item.foodName}</h4>
                                                    <p>${item.price}</p>
                                                </div>
                                                <p className="text-[var(--pTx-color)] text-sm pt-[6px] pb-4 w-[300px] ">
                                                    {item.details}
                                                </p>
                                            </div>

                                            <div className="flex justify-between">
                                                <OrderNow
                                                    _id={item._id}
                                                    foodName={item.foodName}
                                                    price={item.price}
                                                    details={item.details}
                                                    photo={item.PhotoUrl || "photo is not loading"}
                                                />

                                                <div className="flex-row-center gap-[2px]">
                                                    {Array.from({ length: item.rating }, (_, i) => (
                                                        <img key={i} src={star} alt="star" />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    )}

                </div>
                <div className="menu-div-2 mb-high ">
                    <div className="w-[90vw] sm:w-[70vw] lg:w-[50vw] xl:w-[40vw]  bg-[#0000007e] p-6 flex flex-col items-center text-center gap-5 ">
                        <h2 className="text-header">Food is not just eating energy</h2>
                        <p>It's an experience.</p>
                        <button className="bg-primary text-white px-5 py-3  hover:bg-amber-600">Order Now</button>
                    </div>
                </div>
                <div className="flex flex-col items-center mb-high">
                    <h2 className="text-header">All Menu</h2>
                    <img src={line} alt="logo" className="mb-primary mt-3 " />
                    {isLoading ? (
                        <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                            {menu.map((item) => (
                                <div key={item._id}>
                                    <div className=" w-[97vw] sm:w-[370px] ">
                                        <div className="w-[97vw] sm:w-[370px] h-auto sm:h-[300px] overflow-hidden object-center relative ">
                                            <img src={item.PhotoUrl} alt="photo 1" className="hover-image-popular " />
                                        </div>
                                        <div className="flex flex-col h-[170px] justify-between">
                                            <div>
                                                <div className="mt-5 flex justify-between text-2xl">
                                                    <h4 className="text-white">{item.foodName}</h4>
                                                    <p>${item.price}</p>
                                                </div>
                                                <p className="text-[var(--pTx-color)] text-sm pt-[6px] pb-4 w-[300px] ">
                                                    {item.details}
                                                </p>
                                            </div>

                                            <div className="flex justify-between">
                                                <OrderNow
                                                    _id={item._id}
                                                    foodName={item.foodName}
                                                    price={item.price}
                                                    details={item.details}
                                                    photo={item.PhotoUrl || "photo is not loading"}
                                                />

                                                <div className="flex-row-center gap-[2px]">
                                                    {Array.from({ length: item.rating }, (_, i) => (
                                                        <img key={i} src={star} alt="star" />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    )}

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Menu;
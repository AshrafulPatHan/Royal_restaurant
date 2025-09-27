import { useState } from "react";
import { Link } from "react-router";
import BigPlat from "../../assets/image/Hero/big_1.png";
import Plate from "../../assets/image/Hero/small_first_1.png";
import Plate1 from "../../assets/image/Hero/small_first_2.png";
import Plate2 from "../../assets/image/Hero/small_first_3.png";
import "./home.css";

const Hero = () => {
    // state গুলো
    const [bigImage, setBigImage] = useState(BigPlat);
    const [smallImages, setSmallImages] = useState([Plate, Plate1, Plate2]);

    // swap handle function
    const handleSwap = (index: number) => {
        const newSmallImages = [...smallImages];
        const temp = bigImage;

        // যেটায় ক্লিক হয়েছে সেটার সাথে big image swap
        setBigImage(newSmallImages[index]);
        newSmallImages[index] = temp;

        setSmallImages(newSmallImages);
    };

    return (
        <main className="flex-hero-main max-w-[1170px] mx-auto mt-primary mb-sec ">
            <div className="w-[100%] md:w-[57%] ">
                <p>Hi, new friend!</p>
                <h1 className="text-[32px]/10 lg:text-[60px]/17 mb-1 text-white libre-header ">
                    We do not cook, we create your emotions!
                </h1>
                <p className="mb-12">
                    There's evidence that cooking, like other creative practices, can boost well-being,
                    self-esteem, and other measures of mental health.
                </p>
                <Link to="/menu" className="hero-btn ">
                    Our Menu
                </Link>
            </div>

            {/* Right Section */}
            <div className="relative w-[404px] md:w-[474px] ">
                <div className="relative">
                    <img
                        src={bigImage}
                        alt="plate"
                        className="w-[300px] md:w-[370px]"
                        id="bigImage"
                    />
                    <div className="absolute top-[70%] left-[40%] md:left-0 ">
                        <p className="py-3 px-4 bg-primary text-lg md:text-2xl inline-flex font-medium text-white ">
                            Price: $110
                        </p>
                    </div>
                </div>

                {/* Small images */}
                <div className="absolute top-3 left-[65%] md:left-[67%]">
                    <img
                        src={smallImages[0]}
                        alt="photo"
                        className="w-[100px] cursor-pointer"
                        id="small1"
                        onClick={() => handleSwap(0)}
                    />
                </div>
                <div className="absolute top-32 left-[69%] md:left-3/4">
                    <img
                        src={smallImages[1]}
                        alt="photo"
                        className="w-[100px] cursor-pointer"
                        id="small2"
                        onClick={() => handleSwap(1)}
                    />
                </div>
                <div className="absolute top-60 left-[55%] md:left-[69%]">
                    <img
                        src={smallImages[2]}
                        alt="photo"
                        className="w-[100px] cursor-pointer"
                        id="small3"
                        onClick={() => handleSwap(2)}
                    />
                </div>
            </div>
        </main>
    );
};

export default Hero;

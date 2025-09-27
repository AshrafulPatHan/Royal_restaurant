import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import barger from "../../assets/icon/barger.svg";
import car from "../../assets/icon/barger.svg";
import chef from "../../assets/icon/barger.svg";




const About = () => {
    return (
        <div>
            <Navbar />
            <div className="flex-center text-primary max-w-[1100px] mx-auto">
                <div className="mb-sec">
                    <h2 className="text-xl lg:text-4xl font-bold text-white w-[50%] mb-5 ">We are a mexican restaurant makes delicious.</h2>
                    <p className="mb-3 ">
                        Hi! Our Restaurant has been present for over 20 years in the market. We make the most of all our customers. Hi! Our Restaurant has been present for over 20 years in the market. We make the most of all our customers. Hi! Our Restaurant has been present for over 20 years in the market. We make the most of all our customers.
                    </p>
                    <hr />
                </div>
                <div className="mb-high">
                    <div className="flex flex-col lg:flex-row gap-5">
                        <img src="https://i.ibb.co.com/yFmZ1yxh/637c6021b5d69d650c57ebac-Rectangle-35.png" alt="photo" />
                        <img src="https://i.ibb.co.com/CsJCQp8h/63baf8d9f11099476361b130-Rectangle-600.png" alt="photo" />
                    </div>
                    <div>
                        <h3 className="text-xl lg:text-4xl font-bold text-white w-[50%] mb-5 mt-5 ">The story of our first restaurant branch</h3>
                        <p>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-between w-[100%] mb-sec ">
                    <div>
                        <div className="flex flex-col md:flex-row gap-5 mb-10 w-[90vw] sm:w-[70%] ">
                            <img src={barger} alt="icon" />
                            <div>
                                <h4 className="text-white font-bold text-xl">Delicious Cuisine</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit trat aliquam amet.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-5 mb-10 w-[90vw] sm:w-[70%] ">
                            <img src={car} alt="icon" />
                            <div>
                                <h4 className="text-white font-bold text-xl">Fast Delivery</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit trat aliquam amet.</p>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-5 mb-10 w-[90vw] sm:w-[70%] ">
                            <img src={chef} alt="icon" />
                            <div>
                                <h4 className="text-white font-bold text-xl">Professional Chef</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit trat aliquam amet.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src="https://i.ibb.co.com/m5z8ybv4/637c8dbf3b83de6bba736467-Rectangle-38.png" alt="photo" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center  gap-5 lg:gap-0 lg:justify-between w-[100%] ">
                    <div>
                        <img src="https://i.ibb.co.com/JRBbNvTd/637b219c75082dada789af56-Rectangle-21.png" alt="photo" />
                    </div>
                    <div className="w-full sm:w-[70%] lg:w-[50%] flex flex-col justify-between ">
                        <div>
                            <h3 className="text-xl lg:text-4xl font-bold text-white mb-5 ">Subscribe Newsletter & get letest news</h3>
                            <p>
                                Piorem ipsum dolor sit amet consectetur adipiscing eliturabitur venenatis, nisl in bib endum commodo, sapien justo cursus are urna, quis porta mauris elit finibus nulla.
                            </p>
                        </div>

                        <div>
                            <div className="form-control pr-4 ">
                                <input type="text" required />
                                <label>
                                    <span style={{ transitionDelay: '0ms' }}>E</span>
                                    <span style={{ transitionDelay: '50ms' }}>m</span>
                                    <span style={{ transitionDelay: '100ms' }}>a</span>
                                    <span style={{ transitionDelay: '150ms' }}>i</span>
                                    <span style={{ transitionDelay: '200ms' }}>l</span>
                                    <span style={{ transitionDelay: '250ms' }}> </span>
                                    <span style={{ transitionDelay: '300ms' }}>a</span>
                                    <span style={{ transitionDelay: '350ms' }}>d</span>
                                    <span style={{ transitionDelay: '400ms' }}>d</span>
                                    <span style={{ transitionDelay: '450ms' }}>r</span>
                                    <span style={{ transitionDelay: '500ms' }}>e</span>
                                    <span style={{ transitionDelay: '550ms' }}>s</span>
                                    <span style={{ transitionDelay: '600ms' }}>s</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
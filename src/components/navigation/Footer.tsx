

import { Link } from "react-router";
import Logo from "../../assets/icon/logoRR.png"
import Apple from "../../assets/icon/apple.svg"
import Play from "../../assets/icon/play.svg"
import "./nav.css"

const Footer = () => {
    return (
        <footer className="max-w-[1170px] flex flex-col xl:flex-row items-center xl:items-start gap-12 xl:gap-o justify-between m-auto py-[var(--margin-primary)] text-primary ">
            <div className="flex-center gap-[var(--margin-primary)] ">
                <div className="flex-row-center gap-2">
                    <img src={Logo} alt="logo" className="w-[60px] " />
                    <h2 className="text-2xl text-white/80 font-extrabold">Royal Restaurant</h2>
                </div>
                <div>
                    <p >Download the royal restaurant</p>
                    <p> app today.</p>
                    <div className="flex-row-center gap-3 mt-3">
                        <div>
                            <a href="#">
                                <img src={Apple} alt="apple stor" />
                            </a>
                        </div>
                        <div>
                            <a href="#">
                                <img src={Play} alt="play stor" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto w-full xl:w-[60%] text-sm xl:text-base sm:justify-items-center text-center">
                <div className="flex-footer-start gap-2">
                    <h3 className="footer-header">Usefull Link</h3>
                    <Link to='/'>Home</Link>
                    <Link to='/'>About Us</Link>
                    <Link to='/'>Services</Link>
                    <Link to='/'>Booking</Link>
                    <Link to='/'>Menu</Link>
                </div>
                <div className="flex-footer-start gap-2">
                    <h3 className="footer-header">Contact Info</h3>
                    <Link to='/' >bangladesh</Link>
                    <Link to='/'>info@my.com</Link>
                    <Link to='/'>+880101070</Link>
                </div>
                <div className="flex-footer-start gap-2">
                    <h3 className="footer-header">Follow Us</h3>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Linkedin</Link>
                    <Link to='/'>Twitter</Link>
                </div>
                <div className="flex-footer-start gap-2">
                    <h3 className="footer-header">Legal</h3>
                    <p className="text-xs">Website by </p>
                    <Link to='/' className="">ashraful.top</Link>
                    <Link to='/' className="text-start">©2022. All Rights Reserved</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

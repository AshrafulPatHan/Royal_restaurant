/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import Footer from "../../components/navigation/Footer";
import Navbar from "../../components/navigation/Navbar";
import "./blog.css"
import axios from "axios";
import { Link } from "react-router";

const AdminUrl = import.meta.env.VITE_ADMIN_URL;

type BlogData = {
    _id: string,
    title: string,
    SortDes: string,
    photoUrl: string,
    description: string,
    View: string

}

const Blog = () => {
    const [blogs, setBlogs] = useState<BlogData[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    // lode the blog
    useEffect(() => {
        async function LoadBlog() {
            try {
                const response = await axios.get(`${AdminUrl}/all-blog`)
                setBlogs(response.data)
                setIsLoading(false);
            } catch (error) {
                console.error("error is comming on get blog data")
            }

        }
        LoadBlog()
    }, [])
    return (
        <div className="text-primary max-w-screen overflow-x-hidden">
            <Navbar />
            <div className="flex-center max-w-[1170px] mx-auto px-[14px] sm:px-[30px] mt-sec ">
                <div className="mb-high">
                    <div className="mb-sec">
                        <hr />
                        <h2 className="text-header-blog my-[30px] ">Restaurant Management & Growth Blog</h2>
                        <hr />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-5">
                        <div>
                            <img src="https://i.ibb.co.com/CsJCQp8h/63baf8d9f11099476361b130-Rectangle-600.png" alt="" />
                        </div>
                        <div className="w-[90vw] sm:w-[70%] lg:w-[40%] flex flex-col items-start gap-5 ">
                            <h3 className="text-hed-introB ">Everything you need to know about the growing role of AI in restaurants</h3>
                            <p>August 6, 2022 . By Admin</p>
                            <p>You are sitting in your favorite restaurant and have ordered on a tablet on your table. A few seconds after placing the order, a notification will appear in your messaging app.</p>
                            <button className="blog-button-now mt-sec">Read Now</button>
                        </div>
                    </div>
                </div>
                <div>
                    <hr />
                    <h3 className="text-center text-white text-lg md:text-4xl font-bold my-5 ">All Blog</h3>
                    <hr />
                    {isLoading ? (
                        <div className="flex space-x-2 mt-7 mb-4">
                            <div className="w-4 h-4 bg-gray-500 rounded-full animate-bounce"></div>
                            <div className="w-4 h-4 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.2s]"></div>
                            <div className="w-4 h-4 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.4s]"></div>
                            <div className="w-4 h-4 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.6s]"></div>
                            <div className="w-4 h-4 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.8s]"></div>
                            <div className="w-4 h-4 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.10s]"></div>
                        </div>

                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 md:gap-6 md:p-4 mb-sec">
                            {blogs.map((blog) => (
                                <div key={blog._id} className=" w-[97vw] sm:w-[370px] ">
                                    <div className="w-[97vw] sm:w-[350px] h-auto sm:h-[300px] overflow-hidden object-center relative ">
                                        <img src={blog.photoUrl} alt="photo 1" className="hover-image-popular " />
                                    </div>
                                    <div className="h-[180px] flex flex-col justify-between ">
                                        <div>
                                            <div className="mt-5 flex justify-between text-2xl">
                                                <h4 className="text-base text-white">
                                                    {blog.title}
                                                </h4>
                                            </div>
                                            <p className="text-[var(--pTx-color)] text-sm pt-[6px] pr-2 pb-4  ">
                                                {blog.SortDes}
                                            </p>
                                        </div>

                                        <div className="flex justify-between">
                                            <Link to={`/blog/${blog._id}`}
                                                className="Order-btn ">
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
                <div className="flex flex-col lg:flex-row gap-5 mt-high">
                    <div>
                        <img src="https://i.ibb.co.com/v40w4pRL/637b219c75082dada789af56-Rectangle-21.png" alt="image" />
                    </div>
                    <div className="w-[90vw] sm:w-[70%] lg:w-[40%] ">
                        <h4 className="text-header-blog2">Subscribe Newsletter & get letest news</h4>
                        <p >
                            Piorem ipsum dolor sit amet consectetur adipiscing eliturabitur venenatis, nisl in bib endum commodo, sapien justo cursus are urna, quis porta mauris elit finibus nulla.
                        </p>
                        <div className=" mt-[10vh] lg:mt-[30vh] ">
                            <div className="relative">
                                <input
                                    id="username"
                                    name="username"
                                    type="text"
                                    className="border-b w-[90vw] lg:w-[400px] border-gray-300 py-1 focus:border-b-2 focus:border-amber-500 transition-colors focus:outline-none peer bg-inherit"
                                />
                                <label
                                    className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-amber-500"
                                >Name</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Blog;
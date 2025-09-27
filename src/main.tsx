import { createBrowserRouter, RouterProvider, } from "react-router";
import ReactDOM from "react-dom/client";
import './index.css'
import './components/home/home.css'
import App from './App.tsx'
import { Toaster } from 'react-hot-toast';
import About from "./page/about/About.tsx";
import Blog from "./page/blog/Blog.tsx";
import Contact from "./page/Contact/Contact.tsx";
import Menu from "./page/menu/Menu.tsx";
import Reservation from "./page/Reservation/Reservation.tsx";
import Admin from "./admin/Admin.tsx";
import Auth from "./admin/auth/Login.tsx";
import AddBlog from "./admin/pages/AddBlog.tsx";
import AddMenu from "./admin/pages/AddMenu.tsx";
import AllBlog from "./admin/pages/AllBlog.tsx";
import AllMenu from "./admin/pages/AllMenu.tsx";
import AllOrder from "./admin/pages/AllOrder.tsx";
import CPassword from "./admin/pages/CPassword.tsx";
import Mail from "./admin/pages/Mail.tsx";
import Profile from "./admin/pages/Profile.tsx";
import Reviews from "./admin/pages/Reviews.tsx";
import Table from "./admin/pages/Tabile.tsx";
import BlogDetails from "./page/blog/details/BlogDetails.tsx";
import SmoothScroll from "./SmoothScroll.tsx";


const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> },
  { path: "/blog", element: <Blog /> },
  { path: "/contact", element: <Contact /> },
  { path: "/menu", element: <Menu /> },
  { path: "/reservation", element: <Reservation /> },
  { path: "/admin", element: <Admin /> },
  { path: "/auth", element: <Auth /> },
  { path: "/add-blog", element: <AddBlog /> },
  { path: "/add-menu", element: <AddMenu /> },
  { path: "/all-blog", element: <AllBlog /> },
  { path: "/blog/:id", element: <BlogDetails /> },
  { path: "/all-menu", element: <AllMenu /> },
  { path: "/all-order", element: <AllOrder /> },
  { path: "/change-pass", element: <CPassword /> },
  { path: "/mails", element: <Mail /> },
  { path: "/profile", element: <Profile /> },
  { path: "/reservation", element: <Reservation /> },
  { path: "/reviews", element: <Reviews /> },
  { path: "/tables", element: <Table /> },


]);

const root = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(root).render(
  <div>
    <SmoothScroll>
      <RouterProvider router={router} />
      <Toaster />
    </SmoothScroll>
  </div>
);


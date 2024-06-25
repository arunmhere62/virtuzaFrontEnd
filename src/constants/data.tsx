import Unauthorized from "../unauthorized";
import { Navigate } from "react-router-dom";
import { Home, } from "@mui/icons-material"
import Login from "../pages/Login-screen";
import Dashboard from "../pages/Dashboard/Dashboard-screen";
import ProductsScreen from "../pages/blogs/BlogsScreen";
import ProductDetailsScreen from "../pages/blogs/BlogDetailsScreen";
import BlogCreateScreen from "../pages/blogs/BlogCreateScreen";
import UserProfileScreen from "../pages/profile/UserProfileScreen";
import UserProfileCreateScreen from "../pages/profile/UserProfileCreateScreen";


export const publicRoutes = [
  { path: "/login", element: <Login /> },
  { path: "/unauthorized", element: <Unauthorized /> },
  { path: "/", element: <Navigate to="/dashboard" /> },
];

export const routesConfig = [

  // * -------- login ---------
  { path: "/login", element: <Login />, },
  { path: "/unauthorized", element: <Unauthorized />, },
  { path: "/", element: <Navigate to="/dashboard" />, },

  // * -------- dashboard ---------
  { path: "/dashboard", element: <Dashboard />, },


  // * -------- blogs ---------
  { path: "/blogs", element: <ProductsScreen />, },
  { path: "/blog/details", element: <ProductDetailsScreen />, },
  { path: "/blog/create", element: <BlogCreateScreen />, },

  // * -------- user profile ---------
  { path: "/userProfile", element: <UserProfileScreen />, },
  { path: "/userProfile/create", element: <UserProfileCreateScreen />, },


];



export const sidebarTwo = [
  {
    id: 1,
    title: "Dashboard",
    path: "/dashboard",
    icon: Home,
    isParent: false,

  },
  {
    id: 2,
    title: "Blogs",
    path: "/blogs",
    icon: Home,
    isParent: false,
  },
  {
    id: 3,
    title: "User Profile",
    path: "/userProfile",
    icon: Home,
    isParent: false,
  },
  // {
  //   id: 3,
  //   title: "Blog Details",
  //   path: "/blog/details",
  //   icon: Home,
  //   isParent: false,
  // },
];



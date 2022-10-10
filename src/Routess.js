import React from "react";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./core/Home"
import Signup from "./user/Signup";
import Signin from "./user/Signin";
import AdminRoute from "./auth/helper/AdminRoutes";
import PrivateRoute from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashBoard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory";
import ManageCategories from "./admin/ManageCatgeories";
import AddProduct from "./admin/AddProduct";
import ManageProducts from "./admin/ManageProducts";
import UpdateProduct from "./admin/UpdateProduct";
import UpdateCategory from "./admin/UpdateCategory";
import Cart from "./core/Cart";
import Order from "./admin/Orders";
import GetOrderStatus from "./admin/GetOrderStatus";
const Routess = () => {
    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/signup" element={<Signup />}/>
                    <Route path="/signin" element={<Signin />}/>
                    <Route path="/cart" element={<Cart/>} />
                    <Route path="/user/dashboard" element={
                        <PrivateRoute>
                            <UserDashBoard />
                        </PrivateRoute>
                    } />
                    <Route path="/admin/dashboard" element={
                        <AdminRoute>
                            <AdminDashBoard />
                        </AdminRoute>
                        }/>
                    <Route path="/admin/create/category" element={
                        <AdminRoute>
                            <AddCategory />
                        </AdminRoute>
                        }/>
                    <Route path="/admin/categories" element={
                        <AdminRoute>
                            <ManageCategories />
                        </AdminRoute>
                        }/>
                     <Route path="/admin/category/update/:categoryId" element={
                        <AdminRoute>
                            <UpdateCategory />
                        </AdminRoute>
                        }/>
                     <Route path="/admin/create/product" element={
                        <AdminRoute>
                            <AddProduct />
                        </AdminRoute>
                        }/>
                     <Route path="/admin/products" element={
                        <AdminRoute>
                            <ManageProducts />
                        </AdminRoute>
                        }/>  
                     <Route path="/admin/product/update/:productId" element={
                        <AdminRoute>
                            <UpdateProduct />
                        </AdminRoute>
                        }/>
                     <Route path="/admin/order" element={
                        <AdminRoute>
                            <Order />
                        </AdminRoute>
                     }
                     />
                     <Route path="/admin/order/:orderId/status/:userId" element={
                        <AdminRoute>
                            <GetOrderStatus />
                        </AdminRoute>
                     }
                     />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Routess;
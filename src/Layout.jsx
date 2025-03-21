import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import App from "./App";
import HomePage from "./component/Page/HomePage";
import PosSystem from "./component/Page/PosSystem";
import MerchantService from "./component/Page/MerchantService";
import Templates from "./component/Page/Template";
import About from "./component/Page/About";


const NotFound = () => {
    return (
        <div className="container mt-4 alert alert-danger">404. NOT FOUND</div>
    );
};

const Layout = () => {
    return (
        <Suspense fallback="...is loading">
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<HomePage />} />
                    <Route path="pos-system" element={<PosSystem />} />
                    <Route path="merchant-service" element={<MerchantService />} />
                    <Route path="templates" element={<Templates />} />
                    <Route path="about" element={<About />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>

            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </Suspense>

    )
}

export default Layout;
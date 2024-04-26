import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";


const Root = () => {
    return (
        <div>
            <div className="px-8">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
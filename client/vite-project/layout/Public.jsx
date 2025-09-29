import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import { checkPath } from "../src/utils/path";
import { config } from "../src/config";

const Public = () => {
    const location = useLocation();

    return (
        <>
            {
                checkPath(location.pathname, config.PATH_TO_EXCLUDE.navbar) && <Navbar />
            }
            <Outlet />
            {
                checkPath(location.pathname, config.PATH_TO_EXCLUDE.footer) && <Footer />
            }
        </>
    )
}

export default Public;
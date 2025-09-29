import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";

const App = () => {
    // const {darkMode} = useSelector((state) => state.settings);
    return (
        <>
            <Routes>
                <Route path="/" element={<App />} />
            </Routes>
        </>
    );
};

export default App;
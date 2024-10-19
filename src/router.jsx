import {
    BrowserRouter as Router,
    Route,
    Routes,
    Navigate,
} from "react-router-dom";

import App from "./App"

const AppRouts = () => {


    return (
        <Router>
            {/* <AuthProvider> */}
                <Routes>
                    <Route exact path="/seus_pedidos/:token" element={<App />} />
                </Routes>
            {/* </AuthProvider> */}
        </Router>
    );
};

export default AppRouts;
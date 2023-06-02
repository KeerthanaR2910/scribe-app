import LoginPage from "./pages/LoginPage";
import {useState} from "react";
import LandingPage from "./pages/LandingPage";


function App() {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const loginSubmitOnClickHandler = () => {
        setIsAuthenticated(true)
    }

    return (
        <div>
            {isAuthenticated ? <LandingPage/> : <LoginPage onClick={loginSubmitOnClickHandler}/>}
        </div>
    );
}

export default App;

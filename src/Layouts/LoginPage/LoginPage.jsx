import Foot from "../../Shared/Footer/Foot";
import Navigation from "../../Shared/Navigation/Navigation";
import Login from "./Login";

const LoginPage = () => {
    return (
        <div>
            <div>
                <Navigation></Navigation>
            </div>
            <div>
                <Login></Login>
            </div>
            <div>
                <Foot></Foot>
            </div>
        </div>
    );
};

export default LoginPage;
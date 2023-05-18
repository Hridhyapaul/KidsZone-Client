import Foot from "../../Shared/Footer/Foot";
import Navigation from "../../Shared/Navigation/Navigation";
import Register from "./Register";

const RegisterPage = () => {
    return (
        <div>
            <div>
                <Navigation></Navigation>
            </div>
            <div>
                <Register></Register>
            </div>
            <div>
                <Foot></Foot>
            </div>
        </div>
    );
};

export default RegisterPage;
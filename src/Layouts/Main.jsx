import { Outlet } from "react-router-dom";
import Header from "../Section/Header/Header";
import Foot from "../Shared/Footer/Foot";

const Main = () => {
    return (
        <>
            <div>
                <Header></Header>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
            <div className="mt-16">
                <Foot></Foot>
            </div>
        </>
    );
};

export default Main;
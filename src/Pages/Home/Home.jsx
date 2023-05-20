import useTitle from "../../CustomHook/useTitle";
import Category from "../../Section/Category/Category";
import DiscountTimingSection from "../../Section/DiscountTimingSection/DiscountTimingSection";
import Gallery from "../../Section/Gallery/Gallery";

const Home = () => {
    useTitle('Home')
    return (
        <div>
            <Gallery></Gallery>
            <Category></Category>
            <DiscountTimingSection></DiscountTimingSection>
        </div>
    );
};

export default Home;
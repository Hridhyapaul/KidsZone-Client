import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import CategoryCard from "./CategoryCard";

const Category = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState("");

    useEffect(() => {
        fetch(`http://localhost:3000/products/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [activeTab])

    const handleCategory = (tabName) => {
        setActiveTab(tabName)
    }

    return (
        <div className="px-0 xl:px-4 max-w-[1100px] mx-auto w-full">
            <h1 className="text-2xl lg:text-5xl font-bold lg:mb-16 mb-8 mt-4 lg:mt-14 text-center">Shop by <span className="text-[#D268CC]">Category</span></h1>
            <Tabs>
                <TabList className="flex border-b-2 border-[#D268CC] space-x-2 lg:mx-0 mx-6">
                    <Tab className="px-4 py-2 bg-[#D268CC] text-white hover:text-white font-medium hover:bg-[#c059bb] rounded-t-md cursor-pointer text-sm lg:text-[16px]" onClick={() => handleCategory("all")}>
                        All toys
                    </Tab>
                    <Tab className="px-4 py-2 bg-[#D268CC] text-white hover:text-white font-medium hover:bg-[#c059bb] rounded-t-md cursor-pointer text-sm lg:text-[16px]" onClick={() => handleCategory("Marvel")}>
                        Marvel
                    </Tab>
                    <Tab className="px-4 py-2 bg-[#D268CC] text-white hover:text-white font-medium hover:bg-[#c059bb] rounded-t-md cursor-pointer text-sm lg:text-[16px]" onClick={() => handleCategory("Avengers")}>
                        Avengers
                    </Tab>
                    <Tab className="px-4 py-2 bg-[#D268CC] text-white hover:text-white font-medium hover:bg-[#c059bb] rounded-t-md cursor-pointer text-sm lg:text-[16px]" onClick={() => handleCategory("Starwars")}>
                        Star-Wars
                    </Tab>
                </TabList>

                <TabPanel>
                    <div className="grid grid-col-1 lg:grid-cols-3 mt-10 lg:mt-14 gap-y-4 lg:gap-y-2">
                        {
                            toys.map(toy => <CategoryCard key={toy._id} toy={toy}></CategoryCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 lg:mt-14 gap-y-4 lg:gap-y-2">
                        {
                            toys.map(toy => <CategoryCard key={toy._id} toy={toy}></CategoryCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 lg:mt-14 gap-y-4 lg:gap-y-2">
                        {
                            toys.map(toy => <CategoryCard key={toy._id} toy={toy}></CategoryCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 lg:mt-14 gap-y-4 lg:gap-y-2">
                        {
                            toys.map(toy => <CategoryCard key={toy._id} toy={toy}></CategoryCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Category;
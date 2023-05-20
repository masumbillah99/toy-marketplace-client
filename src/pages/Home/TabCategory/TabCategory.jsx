import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Category = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://toy-ass11-server-side.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div className="my-20 max-w-screen-xl mx-auto px-2 md:px-5 lg:px-0">
      <h3 className="text-3xl font-bold">Feature Toys</h3>
      <hr className="bg-indigo-700 w-3/4 lg:w-1/3 h-1 mt-2 mb-5" />
      <Tabs className="text-center pt-5">
        {/* className="py-2 bg-indigo-500 w-1/2 mx-auto" */}
        <TabList>
          {categories?.map((category) => (
            <Tab disabledClassName="border-0 outline-0" key={category.id}>
              <Link to={`/category/${category.id}`}>
                {category.category_name}
              </Link>
            </Tab>
          ))}
        </TabList>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;

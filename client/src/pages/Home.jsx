import React, { useEffect, useState } from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  const [category, setcategory] = useState([]);
  const [slider, setslider] = useState([]);
  const [popular, setpopular] = useState([]);

  useEffect(() => {
    const fetchCategoryData = async () => {
      const resp = await fetch("http://localhost:3001/getcategories");
      const data = await resp.json();
      setcategory(data);
    };
    const fetchSliderData = async () => {
      const resp = await fetch("http://localhost:3001/getslideritem");
      const data = await resp.json();
      setslider(data);
    };
    const fetchPopularData = async () => {
      const resp = await fetch("http://localhost:3001/getpopularitem");
      const data = await resp.json();
      setpopular(data);
    };

    fetchCategoryData();
    fetchSliderData();
    fetchPopularData();
    console.log("p", popular);
  }, []);

  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider slider={slider} />
      <Categories category={category} />
      <Products popular={popular} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;

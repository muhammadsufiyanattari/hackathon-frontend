import React from "react";



import { useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { SekeletonCart } from "../components/SekeletonCart";
// ..
AOS.init({
 
  duration: 1300, // values from 0 to 3000, with step 50ms

});
function Home() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
  <>home</>
  );
}

export default Home;

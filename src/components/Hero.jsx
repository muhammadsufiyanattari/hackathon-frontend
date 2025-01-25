import apple from "../assets/images/apple.png";
import { FaArrowRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
import AOS from "aos";
import heros from "../assets/images/heros.png";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
 
  duration: 1000, // values from 0 to 3000, with step 50ms

});

let heroLink = [
  { name: "Woman's Fashion" },
  { name: "Men's Fashion" },
  { name: "Electronics" },
  { name: "Home & StyleLife" },
  { name: "Medicine" },
  { name: "Sports & Outdoor" },
  { name: "Baby's & Toys" },
  { name: "Groceries & Pets" },
  { name: "Health & Beauty" },
];

export default function Hero() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
return



}
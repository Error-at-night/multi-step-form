import { useLocation } from "react-router-dom";
import mobileImage from "../assets/bg-sidebar-mobile.svg";

function MobileImage() {
  const location = useLocation()

  const route = {
    "/": 1,
    "/select-plan": 2,
    "/add-ons": 3,
    "/summary": 4,
    "/thank-you": 4
  }

  const index = route[location.pathname] || 0;

  return (
    <div className="relative">
      <img
        className="h-48 w-full object-cover md:hidden"
        src={mobileImage}
        alt="background-image"
      />
      <div className="absolute top-[25%] left-1/2 transform -translate-x-1/2 text-center md:hidden space-x-8">
        <span className={`border border-white py-2 px-3 rounded-full w-10 h-10 
          ${index === 1 ? "bg-lightBlue border-none" : ""}
        `}>1</span>
        <span className={`border border-white py-2 px-3 rounded-full w-10 h-10 
          ${index === 2 ? "bg-lightBlue border-none" : ""}
        `}>2</span>
        <span className={`border border-white py-2 px-3 rounded-full w-10 h-10 
          ${index === 3 ? "bg-lightBlue border-none" : ""}
        `}>3</span>
        <span className={`border border-white py-2 px-3 rounded-full w-10 h-10 
          ${index === 4 ? "bg-lightBlue border-none" : ""}
        `}>4</span>
      </div>
    </div>
  );
}

export default MobileImage;

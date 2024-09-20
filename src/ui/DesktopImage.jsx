// import { useSelector } from "react-redux";
import desktopImage from "../assets/bg-sidebar-desktop.svg";
import { useLocation } from "react-router-dom";

function DesktopImage() {
  // const index = useSelector((state) => state.form.index)

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
    <div className="md:shrink-0 relative">
      <img
        className="h-48 w-full object-cover md:h-full hidden md:block"
        src={desktopImage}
        alt="background-image"
      />
      <div className="absolute top-12 left-8">
        <div className="md:flex-col hidden md:flex">
          <div className="flex mb-8 items-center">
            <span className={`border font-bold border-white py-2 px-3 rounded-full w-10 h-10 flex items-center justify-center 
              ${index === 1 ? "text-black bg-lightBlue border-none" : "text-white"}
            `}
            >1</span>
            <div className="ms-5">
              <span className="text-coolGray">Step 1</span>
              <p className="text-white font-bold uppercase">Your info</p>
            </div>
          </div>
          <div className="flex mb-8 items-center">
            <span className={`border font-bold border-white py-2 px-3 rounded-full w-10 h-10 flex items-center justify-center
              ${index === 2 ? "text-black bg-lightBlue border-none" : "text-white"}
            `}
            >2</span>
            <div className="ms-5">
              <span className="text-coolGray">Step 2</span>
              <p className="text-white font-bold uppercase">Select plan</p>
            </div>
          </div>
          <div className="flex mb-8 items-center">
          <span className={`border font-bold border-white py-2 px-3 rounded-full w-10 h-10 flex items-center justify-center
              ${index === 3 ? "text-black bg-lightBlue border-none" : "text-white"}
            `}
            >3</span>
            <div className="ms-5">
              <span className="text-coolGray">Step 3</span>
              <p className="text-white font-bold uppercase">Add-ons</p>
            </div>
          </div>
          <div className="flex items-center">
          <span className={`border font-bold border-white py-2 px-3 rounded-full w-10 h-10 flex items-center justify-center
              ${index === 4 ? "text-black bg-lightBlue border-none" : "text-white"}
            `}
            >4</span>
            <div className="ms-5">
              <span className="text-coolGray">Step 4</span>
              <p className="text-white font-bold uppercase">Summary</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DesktopImage;

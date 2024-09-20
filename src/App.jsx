import { BrowserRouter, Routes, Route } from "react-router-dom";

import Personalinfo from "./ui/Personalinfo";
import MobileImage from "./ui/MobileImage";
import DesktopImage from "./ui/DesktopImage";
import SelectPlan from "./ui/SelectPlan";
import Addons from "./ui/Addons";
import Summary from "./ui/Summary";
import Thankyou from "./ui/Thankyou";

function App() {
  return (
    <BrowserRouter>
      <main>
        <MobileImage />
        <div
          className="absolute top-[14%] left-1/2 transform -translate-x-1/2 w-full md:top-0 flex flex-col 
        px-5 md:flex-row md:items-center md:px-5 md:min-h-[100vh]"
        >
          <div
            className="md:w-full mx-auto ps-5 pe-5 md:py-5 md:ps-5 md:pe-0 bg-white rounded-xl shadow-md 
          overflow-hidden md:max-w-4xl"
          >
            <div className="md:flex w-full">
              <DesktopImage />
              <div className="pt-5 pb-6 md:py-8 md:px-10 flex flex-row w-full mx-auto">
                <Routes>
                  <Route index element={<Personalinfo />} />
                  <Route path="select-plan" element={<SelectPlan />} />
                  <Route path="add-ons" element={<Addons />} />
                  <Route path="summary" element={<Summary />} />
                  <Route path="thank-you" element={<Thankyou />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;

import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { setAddOns } from "../features/formSlice";

import { monthlyAddons, yearlyAddons } from "../data/data";

function Addons() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const plan = useSelector((state) => state.form.plan);

  console.log(plan);

  const displayAddons = plan === "monthly" ? monthlyAddons : yearlyAddons;

  const selectAddons = useSelector((state) => state.form.addOns);
  console.log(selectAddons);

  // function to handle the dispatched (selected) addons
  function handleSelectedAddons(addons) {
    // if the addons already exist in the array, remove it from the array
    if (selectAddons.some((item) => item.id === addons.id)) {
      dispatch(setAddOns(selectAddons.filter((item) => item.id !== addons.id)));
    }
    // else add it to the array
    else {
      dispatch(setAddOns([...selectAddons, addons]));
    }
  }

  // function to handle form submission
  function onSubmit() {
    navigate("/summary");
  }

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className="text-marineBlue text-[1.8rem] sm:text-[2rem] md:text-[2.2rem] lg:text-[2.5rem] font-bold">
          Pick add-ons
        </h1>
        <p className="text-coolGray">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      {errors.addons && (
        <p className="text-strawberryRed text-end mt-3">
          {errors.addons.message}
        </p>
      )}
      <div
        className={`grid grid-cols-3 gap-y-4 gap-x-5 mt-5 ${
          errors.plan ? "mt-3" : ""
        } lg:mt-5`}
      >
        {displayAddons.map((addons) => (
          <label
            key={addons.id}
            htmlFor={`addons-${addons.id}`}
            className={`col-span-3 flex items-center justify-between cursor-pointer py-2 px-2 lg:py-5 lg:px-5 border
            border-lightGray hover:border-purplishBlue rounded-md ${
              selectAddons.some((item) => item.id === addons.id)
                ? "bg-magnolia border-purplishBlue"
                : ""
            }`}
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                id={`addons-${addons.id}`}
                {...register("addons", {
                  required: "This field is required, please select your addons",
                })}
                value={addons.id}
                checked={selectAddons.some((item) => item.id === addons.id)}
                onChange={() => handleSelectedAddons(addons)}
                className="h-5 w-5"
              />
              <div className="ms-4 lg:ms-8" key={addons.id}>
                <h3 className="text-marineBlue font-bold">{addons.title}</h3>
                <p className="text-marineBlue">{addons.text}</p>
              </div>
            </div>
            <div>
              <p className="text-coolGray">{addons.price}</p>
            </div>
          </label>
        ))}
      </div>

      <div className="flex justify-between mt-8 lg:mt-12">
        <button
          type="submit"
          className="text-coolGray hover:text-marineBlue font-bold"
          onClick={() =>  navigate("/select-plan")}
        >
          Go Back
        </button>
        <button
          type="submit"
          className="bg-marineBlue hover:opacity-90 text-white font-bold py-2 px-4 rounded-md"
        >
          Next Step
        </button>
      </div>
    </form>
  );
}

export default Addons;

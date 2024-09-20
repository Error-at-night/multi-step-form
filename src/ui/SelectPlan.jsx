import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form"

import { setSelectedPlan, setPlan } from "../features/formSlice"
import { monthly, yearly } from "../data/data"

function SelectPlan() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const plan = useSelector((state) => state.form.plan)

  console.log(plan)

  const displayPlan = plan === "monthly" ? monthly : yearly

  // function to handle the dispatch (selected) plan
  function handleSelectedPlan(plan) {
    dispatch(setSelectedPlan(plan))
  }

  // function to toggle the plan (either monthly or yearly)
  function handleToggle() {
    const togglePlan = plan === "monthly" ? "yearly" : "monthly"
    dispatch(setPlan(togglePlan))
  }

  const selectPlan = useSelector((state) => state.form.selectedPlan)
  console.log(selectPlan)

  // function to handle form submission
  function onSubmit() {
    navigate("/add-ons")
  }

  // function to handle the navigate and set back the redux state to the default values (so that when a user goes forward, their previous selected option will be unselected, so they have to select again)
  function handleNavigate() {
    navigate("/")
    dispatch(setPlan("monthly"))
    dispatch(setSelectedPlan({}))
  }

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className="text-marineBlue text-[1.8rem] sm:text-[2rem] md:text-[2.2rem] lg:text-[2.5rem] font-bold">Select your plan</h1>
        <p className="text-coolGray">You have the option of monthly or yearly billing.</p>
      </div>
      {errors.plan && <p className="text-strawberryRed text-end mt-3">{errors.plan.message}</p>}
      <div className={`grid grid-cols-3 gap-y-4 gap-x-5 mt-5 ${errors.plan ? "mt-3" : ""} lg:mt-5`}>
        {displayPlan.map((plan) => (
          <label
            key={plan.id}
            htmlFor={`plan-${plan.id}`}
            className={`col-span-3 flex items-center lg:block lg:col-span-1 cursor-pointer py-2 px-2 lg:py-5 lg:px-5 border
            border-lightGray hover:border-purplishBlue rounded-md ${plan.id === selectPlan.id ? "bg-magnolia border-purplishBlue" : ""}`}
          >
            <input
              type="radio"
              id={`plan-${plan.id}`}
              {...register("plan", {
                required: "This field is required, please select a plan",
              })}
              value={plan.id}
              checked={plan.id === selectPlan.id}
              onChange={() => handleSelectedPlan(plan)}
              className={`hidden`}
            />
            <img src={plan.img} className="" width={40} />
            <div className="lg:mt-10 ms-3 lg:ms-0" key={plan.id}>
              <h3 className="text-marineBlue font-bold">{plan.title}</h3>
              <p className="text-coolGray">{plan.price}</p>
              <p className="text-marineBlue">{plan?.text}</p>
            </div>
          </label>
        ))}
      </div>
      <div className="grid grid-cols-3 bg-alabaster py-3 mt-5 sm:mt-6 lg:mt-8 rounded-md">
        <div className="col-span-3 text-center">
          <span className={`${plan === "monthly" ? "font-bold text-marineBlue" : "text-coolGray"}`}>Monthly</span>
          <label className="switch mx-2">
            <input
              type="checkbox"
              checked={plan === 'yearly'}
              onChange={handleToggle}
            />
            <span className="slider round"></span>
          </label>
          <span className={`${plan === "yearly" ? "font-bold text-marineBlue" : "text-coolGray"}`}>Yearly</span>
        </div>
      </div>

      <div className="flex justify-between mt-8 lg:mt-24">
        <button type="submit" className="text-coolGray hover:text-marineBlue font-bold"
          onClick={handleNavigate}
        >
          Go Back
        </button>
        <button type="submit" className="bg-marineBlue hover:opacity-90 text-white font-bold py-2 px-4 rounded-md">Next Step</button>
      </div>
    </form>
  )
}

export default SelectPlan
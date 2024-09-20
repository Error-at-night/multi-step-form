import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"

import { setAddOns, setPlan, setSelectedPlan } from "../features/formSlice"

function Summary() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { handleSubmit } = useForm()

  const plan = useSelector((state) => state.form.plan)
  const selectPlan = useSelector((state) => state.form.selectedPlan)
  const selectAddons = useSelector((state) => state.form.addOns)

  const addOnPrices = selectAddons.map((addon) => addon.calPrice)

  const totalPrice = selectPlan.calPrice + addOnPrices.reduce((acc, price) => acc + price, 0);

  // function to handle the navigate and set back the redux state to the previous values
  function handleChange() {
    navigate("/select-plan")
    dispatch(setPlan(plan))
    dispatch(setSelectedPlan(selectPlan))
    dispatch(setAddOns([]))
  }

  // function to handle navigate and set back addOns state to default value
  function handleNavigate() {
    navigate("/add-ons")
    dispatch(setAddOns([]))
  }

  // function to handle submit and set redux state back to default values
  function onSubmit() {
    navigate("/thank-you")
    dispatch(setPlan("monthly"))
    dispatch(setSelectedPlan({}))
    dispatch(setAddOns([]))
  }

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className="text-marineBlue text-[1.8rem] sm:text-[2rem] md:text-[2.2rem] lg:text-[2.5rem] font-bold">Finishing up</h1>
        <p className="text-coolGray">Double-check everything looks OK before confirming.</p>
      </div>
      <div className="mt-8 bg-alabaster p-8 pb-6 rounded-md">
        <div className="flex items-center justify-between border-b border-lightGray pb-6">
          <div>
            <h1 className="font-bold text-marineBlue">{selectPlan.title} ({plan === "monthly" ? "Monthly" : "Yearly"})</h1>
            <button onClick={handleChange} className="underline text-coolGray font-medium">Change</button>
          </div>
          <p className="text-marineBlue font-bold">{selectPlan.price}</p>
        </div>
        <div className="mt-5">
          {selectAddons.map((addOns) => (
            <div key={addOns.id} className="flex items-center justify-between">
              <h1 className="text-coolGray font-medium mb-4">{addOns.title}</h1>
              <p className="text-marineBlue font-medium">{addOns.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="p-8 pb-6 flex justify-between items-center">
        <p className="text-coolGray">Total (per {plan === "monthly" ? "month" : "year"})</p>
        <p className="font-bold text-[1.2rem] text-purplishBlue">${totalPrice}{plan === "monthly" ? "/mo" : "/yr"}</p>
      </div>

      <div className="flex justify-between mt-8 lg:mt-10">
        <button type="submit" className="text-coolGray hover:text-marineBlue font-bold"
          onClick={handleNavigate}
        >
          Go Back
        </button>
        <button type="submit" className="bg-purplishBlue hover:opacity-90 text-white font-bold py-2 px-4 rounded-md">Confirm</button>
      </div>
    </form>
  )
}

export default Summary
import { useForm } from "react-hook-form"
// import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { setIndex } from "../features/formSlice";

function Personalinfo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const navigate = useNavigate()
  // const dispatch = useDispatch()

  function onSubmit(data) {
      console.log(data);
      navigate("/select-plan")
      // dispatch(setIndex(1))
  }

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className="text-marineBlue text-[1.8rem] sm:text-[2rem] md:text-[2.2rem] lg:text-[2.5rem] font-bold">Personal info</h1>
        <p className="text-coolGray">Please provide your name, email address, and phone number.</p>
      </div>

      <div className="flex flex-col my-5">
        <div className="flex justify-between">
          <label htmlFor="name" className="mb-1 font-semibold text-marineBlue">Name</label>
          {errors.name && <p className="text-strawberryRed text-end">{errors.name.message}</p>}
        </div>
        <input type="text" id="name" placeholder="e.g. Stephen King" autoComplete="new-username"
          className={`border placeholder:font-medium border-lightGray focus:outline-none px-4 py-2 rounded-md cursor-pointer hover:border-purplishBlue focus:border-purplishBlue
            ${errors.name ? "border-strawberryRed hover:border-strawberryRed focus:border-strawberryRed" : ""}
          `}
          {...register("name", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Name must be at least 8 characters"
            }
          })}
        />
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <label htmlFor="email" className="mb-1 font-semibold text-marineBlue">Email Address</label>
          {errors.email && <p className="text-strawberryRed text-end">{errors.email.message}</p>}
        </div>
        <input type="email" id="email" placeholder="e.g. stephenking@gmail.com" autoComplete="new-email"
          className={`border border-lightGray placeholder:font-medium focus:outline-none px-4 py-2 rounded-md cursor-pointer hover:border-purplishBlue focus:border-purplishBlue
            ${errors.email ? "border-strawberryRed hover:border-strawberryRed focus:border-strawberryRed" : ""}`            
          }
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /^[\w-.]+@gmail\.com$/i,
              message: "Enter a valid email address"
            },
          })}
        />
      </div>
      <div className="flex flex-col my-5">
        <div className="flex justify-between">
          <label htmlFor="phoneNumber" className="mb-1 font-semibold text-marineBlue">Phone Number</label>
          {errors.phoneNumber && <p className="text-strawberryRed text-end">{errors.phoneNumber.message}</p>}
        </div>
        <input type="tel" id="phoneNumber" placeholder="e.g. +1 234 567 890"
          className={`border border-lightGray placeholder:font-medium focus:outline-none px-4 py-2 rounded-md cursor-pointer hover:border-purplishBlue focus:border-purplishBlue
            ${errors.phoneNumber ? "border-strawberryRed hover:border-strawberryRed focus:border-strawberryRed" : ""}
          `}
          {...register("phoneNumber", {
            required: "This field is required",
            pattern: {
              value: /^\+\d{1,3}\s\d{3}\s\d{3}\s\d{3}$/,
              message: "Please follow the pattern: +1 234 567 890"
            }
          })}
        />
      </div>
      
      <div className="flex justify-end mt-14 md:mt-24">
        <button type="submit" className="bg-marineBlue hover:opacity-90 text-white font-bold py-2 px-4 rounded-md">Next Step</button>
      </div>
    </form>
  )
}

export default Personalinfo
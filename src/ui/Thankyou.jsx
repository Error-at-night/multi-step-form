import thankyou from "../assets/icon-thank-you.svg"
function Thankyou() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <img src={thankyou} alt="thank you"/>
      <h1 className="text-marineBlue my-5 font-bold text-[1.8rem] sm:text-[2rem] md:text-[2.2rem] lg:text-[2.5rem]">Thank you</h1>
      <p className="text-center text-coolGray">Thanks for confirming your subscription! We hope you have fun using our platform. 
        If you ever need support, please feel free to reach out to us at support@loremgaming.com.
      </p>
    </div>
  )
}

export default Thankyou
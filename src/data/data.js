import arcade from "../assets/icon-arcade.svg"
import advanced from "../assets/icon-advanced.svg"
import pro from "../assets/icon-pro.svg"

// monthly plan
export const monthly = [
  {
    id: 1,
    img: arcade,
    title: "Arcade",
    price: "$9/mo",
    calPrice: 9,
  },
  {
    id: 2,
    img: advanced,
    title: "Advanced",
    price: "$12/mo",
    calPrice: 12,
  },
  {
    id: 3,
    img: pro,
    title: "Pro",
    price: "$15/mo",
    calPrice: 15,
  }
]

// yearly plan
export const yearly = [
  {
    id: 4,
    img: arcade,
    title: "Arcade",
    price: "$90/yr",
    calPrice: 90,
    text: "2 months free",
  },
  {
    id: 5,
    img: advanced,
    title: "Advanced",
    price: "$120/yr",
    calPrice: 120,
    text: "2 months free",
  },
  {
    id: 6,
    img: pro,
    title: "Pro",
    price: "$150/yr",
    calPrice: 150,
    text: "2 months free",
  }
]

// monthly addOns
export const monthlyAddons = [
  {
    id: 7,
    title: "Online service",
    text: "Access to multiplayer games",
    price: "$1/mo",
    calPrice: 1,
  },
  {
    id: 8,
    title: "Larger storage",
    text: "Extra 1TB of cloud save",
    price: "$2/mo",
    calPrice: 2,
  },
  {
    id: 9,
    title: "Customizable profile",
    text: "Custom theme on your profile",
    price: "$2/mo",
    calPrice: 2,
  }
]

// yearly addons 
export const yearlyAddons = [
  {
    id: 1,
    title: "Online service",
    text: "Access to multiplayer games",
    price: "$10/yr",
    calPrice: 10,
  },
  {
    id: 2,
    title: "Larger storage",
    text: "Extra 1TB of cloud save",
    price: "$20/yr",
    calPrice: 20,
  },
  {
    id: 3,
    title: "Customizable profile",
    text: "Custom theme on your profile",
    price: "$20/yr",
    calPrice: 20,
  }
]


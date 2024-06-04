import { useEffect, useState } from "react"
import { images } from "../utils"

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ?
    localStorage.getItem("theme") : "light"
  )

  const element = document.documentElement;

  useEffect(() => {
    if(theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light")
    }
  },)

  const changeTheme = () => {
    if(theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  return (
    <>
    <div className="relative">
      <img
      onClick={changeTheme}
      src={images.LightModeBtn} alt="" 
      className={`w-12 absolute right-0 z-10 
      drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300
      ${theme === "dark" ? "opacity-0" : "opacity-100"} cursor-pointer
      `}/>
      <img 
      onClick={changeTheme}
      src={images.DarkModeBtn} alt="" 
      className="w-12 
      drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 "/>
    </div>
    </>
  )
}

export default DarkMode
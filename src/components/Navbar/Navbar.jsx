import { FaCartShopping } from "react-icons/fa6"
import { images } from "../../utils"
import DarkMode from "../DarkMode"


const Navbar = () => {
  return (
    <>
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200'>
        <div className='container  py-3 sm:py-0'>
            <div className="flex justify-between items-center">
                    <div>
                      <a href="#" className="flex items-center gap-2 text-2xl sm:text-3xl font-bold">
                      <img src={images.Food_logo} alt="Foodie Zone" className="w-10" />
                      Foodie
                      </a>
                    </div>
                    <div>
                      <div>
                      <DarkMode />
                      </div>
                      <ul className="gap-4 hidden sm:flex">
                        <li>
                          <a href="" className="inline-block py-4 px-4 hover:text-primary">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="" className="inline-block py-4 px-4 hover:text-primary">
                            About
                          </a>
                        </li>
                        <li>
                          <a href="" className="inline-block py-4 px-4 hover:text-primary">
                            Contact
                          </a>
                        </li>
                      </ul>
                      <button 
                      className="bg-gradient-to-r from-primary to-secondary text-white px-4 
                      py-2 rounded-full  hover:scale-105 duration-300 gap-2 flex items-center"
                      >
                        Order
                        <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer"/>
                      </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar
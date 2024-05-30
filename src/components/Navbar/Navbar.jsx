import { images } from "../../utils"


const Navbar = () => {
  return (
    <>
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200'>
        <div className='container'>
            <div className="flex justify-center">
                <div className='flex justify-center items-center'>
                    <img src={images.Food_logo} alt="logo" />
                </div>
                <div></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar
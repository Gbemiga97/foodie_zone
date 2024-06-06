import { GrSecure } from "react-icons/gr"
import { images } from "../utils"
import { IoFastFood } from "react-icons/io5"
import { GiFoodTruck } from "react-icons/gi"



const Banner = () => {
  return (
    <>
    <div className="min-h-[550px]">
        <div>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* image section */}
                    <div>
                        <img src={images.Biryani5} alt="" 
                        className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,0.1)]"
                        />
                    </div>
                    {/* text content section */}
                    <div className="flex flex-col justify-center gap-6 sm:pt-0 text-center lg:text-start">
                        <h1 className="text-3xl sm:text-4xl font-bold">
                            Lorem ipsum dolor
                        </h1>
                        <p className="text-sm text-gray-500 tracking-wide leading-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi eos excepturi facilis nostrum veritatis laboriosam facere, provident inventore aspernatur quo.
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptates ullam cupiditate cumque, obcaecati soluta voluptatem sint labore tempore officiis quod sapiente dolore doloremque tenetur in temporibus quae illum est modi. Facilis eum at cumque maxime atque omnis tempora quas.
                        </p>
                        {/* Icons  */}
                        <div className="flex gap-6 justify-center lg:justify-start">
                            <div>
                                <GrSecure 
                                className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-100 dark:bg-violet-400"
                                />
                            </div>
                            <div>
                                <IoFastFood 
                                className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-100 dark:bg-orange-400"
                                />
                            </div>
                            <div>
                                <GiFoodTruck
                                className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-100 dark:bg-green-400"
                                />
                            </div>
                        </div>
                        <div className="mx-auto lg:mx-0">
                            <button className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:scale-105 duration-200 ">
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Banner
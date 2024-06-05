import { useState } from "react"
import { images, data } from "../utils"





const Hero = () => {

  const [imageId, setImageId] = useState(images.Biryani2)

  return (
    <div style={data.bgImage}
    className="min-h-[550px] sm:min-h-[600px] bg-gray-100 dark:bg-gray-950 dark:text-white
    duration-200 flex justify-center items-center"
    >
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* text content section */}
          <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
            <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-bold"
            >
              Welcome to the Foodie Zone</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, saepe. Quae minus ipsum autem maxime nemo, corrupti totam alias incidunt.
              </p>
              <div>
               <button className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full hover:scale-105 duration-200 ">
                Order Now
               </button>
              </div>
          </div>
          {/* Image section */}
          <div className="order-1 sm:order-2 min-h-[450px] sm:min-h-[450px] flex justify-center items-center relative">
              {/* main image section */}
              <div 
              className="flex justify-center items-center h-[300px] sm:h-[450px] overflow-hidden"
              >
                <img src={imageId} alt="" 
                className="w-[300px] sm:w-[350px] mx-auto spin" />
              </div>
              {/* image list section */}
              <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px]
              lg:-right-10 bg-white/30 rounded-full">
                {
                  data.imageList.map(({id, img}) => (
                    <img key={id}
                    src={img}
                    alt={id}
                    className="max-w-[80px] cursor-pointer h-[80px] object-contain inline-block hover:scale-105 duration-200"
                   onClick={
                    () => {
                      setImageId(
                        id === 1 ? 
                        images.Biryani2 : id === 2 ?
                        images.Biryani3 : images.Biryani5

                      )
                    }
                   }
                    />
                  ))
                }
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
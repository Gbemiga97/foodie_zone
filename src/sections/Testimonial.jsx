
import { Swiper, SwiperSlide } from  "swiper/react"
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { data } from "../utils"


const Testimonial = () => {
  return (
    <>
    <div className='py-10'>
        <div className="container">
                       {/* Title */}
                       <div className='text-center mb-20 max-w-[400px] mx-auto'>
                <p className='text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
                    Testimonial</p>
                <h1 className='text-3xl font-bold'>
                    Testimonial</h1>
                    <p className='text-xs text-gray-400'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, accusantium eius doloribus illo tempora ullam nam quae aut a id.
                    </p>
            </div>
            {/* testimonial section */}
            <div className='grid grid-cols-1 max-w-[600px] mx-auto gap-6 '>
                 <Swiper 
                 pagination={{
                    clickable: true,
                    dynamicBullets: true
                 }}
                 autoplay={{
                    disableOnInteraction: false
                 }}
                 loop={true}
                 modules={[Pagination, Autoplay]}
                 className="max-w-2xl h-[300px]"
                 >
                    {
                        data.testimonialData.map(({id, name, text, img}) => (
                            <SwiperSlide key={id}>
                                <div className="flex flex-col justify-center items-center gap-4 text-center 
                                shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                                    <img src={img} alt={name} 
                                    className="rounded-full block mx-auto  h-24 "
                                    />
                                <p className="text-gray-500 text-sm">
                                    {text}
                                </p>
                                <h1 className="text-xl font-bold">
                                    {name}
                                </h1>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                 </Swiper>
           </div>
        </div>
    </div>
    </>
  )
}

export default Testimonial
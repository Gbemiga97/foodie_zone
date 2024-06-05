import images from "./images";


const imageList = [
    {
        id: 1,
        img: images.Biryani2,
    },
    {
        id: 2,
        img: images.Biryani3,
    },
    {
        id: 3,
        img: images.Biryani5
    },
]

const bgImage = {
    backgroundImage: `url(${images.Vector3})`,
    backgroundPosition: 'center',
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "100%"
}


const servicesData = [
    {
        id: 1,
        img: images.Biryani2,
        name: "Biryani",
        desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, accusantium eius doloribus illo tempora ullam"
    },
    {
        id: 2,
        img: images.Biryani2,
        name: "Chicken Kari",
        desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, accusantium eius doloribus illo tempora ullam"
    },
    {
        id: 3,
        img: images.Biryani2,
        name: "Cold Coffee",
        desc: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, accusantium eius doloribus illo tempora ullam"
    },
] 



const data = {
    imageList,
    bgImage,
    servicesData
}


export default data
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


const testimonialData = [
    {
        id: 1,
        name: 'Samuel',
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, dolores ipsa deserunt veniam voluptas ratione ullam eos eum exercitationem voluptatem ducimus ea sequi velit laboriosam alias repellat sed dolore magnam.",
        img: images.Samuel
    },
    {
        id: 2,
        name: 'Jane',
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, dolores ipsa deserunt veniam voluptas ratione ullam eos eum exercitationem voluptatem ducimus ea sequi velit laboriosam alias repellat sed dolore magnam.",
        img: images.Jane
    },
    {
        id: 1,
        name: 'Smith',
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, dolores ipsa deserunt veniam voluptas ratione ullam eos eum exercitationem voluptatem ducimus ea sequi velit laboriosam alias repellat sed dolore magnam.",
        img: images.Smith
    },
]



const data = {
    imageList,
    bgImage,
    servicesData,
    testimonialData
}


export default data
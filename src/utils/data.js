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



const data = {
    imageList,
    bgImage
}


export default data
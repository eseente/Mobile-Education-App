import {create} from "apisauce";

const api = create({
    baseURL:'http://192.168.0.101:1337/api',
    headers: { 
        "X-API-Key":"735f8eaf98b097272cef1df71f15c978111a6ba9390601d1e0dd1945924c3ce692f29c12ccd838f4750a75b0fb6ac9801c185e9fe23813a6734ac1a4145962d3ea6aa1fdd510a3ea51b5e20fb12c34fba39357b06db73676cc5cf49b14d1d978f9ed3662b977bd32324970796104d18eedd78033336b90da94ce6fec952aaaf0"
    },
})

const getSlider =()=>api.get('/sliders?populate=*');
const getVideoCourse=()=>api.get('/video-courses?populate=*');
const getCourseList=(type)=>api.get('/courses?filters[type][$eq]='+type+'&populate=*');

export default{
    getSlider,
    getVideoCourse,
    getCourseList
}
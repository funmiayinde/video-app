import axios from "axios";

export const KEY = 'AIzaSyCYwwg2XVsul2y1lxAZdHi7qq05r_Nuy2Q';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
});
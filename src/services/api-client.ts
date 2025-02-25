import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '7f2bf00213594a8ba0e5f3daefb66821'
    }
})
import axios from 'axios';

export default axios.create({
    // baseURL:'http://localhost:3001'
    baseURL:'https://menna-news-backend.herokuapp.com'
})
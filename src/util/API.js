import axios from 'axios';

export const get = async(url) => {
    let result = axios.get(url);
    return result;
      
}
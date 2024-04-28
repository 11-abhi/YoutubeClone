import axios from "axios";

let BaseUrl = 'https://youtube-v31.p.rapidapi.com'

const options = {
    url: BaseUrl,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': 'c5cbe4147cmsh28fde562f3b3771p1ab1f2jsn7a44909d74dc',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };


 export const fetchApi = async (url) => {
            let { data } = await axios.get(`${BaseUrl}/${url}`,options)
            return data;
 }





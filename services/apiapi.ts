// import axios from 'axios';


// const instance = axios.create({
//     baseURL: process.env.NEXT_PUBLIC_API_BASE_URL
// });

// instance.interceptors.request.use(
//     function(config) {
     
//         // Do something before request is sent
//         console.log("Request sent with config:", config)
//         return config
//     },
//     function (error) {
//         // Do something with request error
//         console.error("Request error:", error)
//         return Promise.reject(error)
//     }
  
// );
// instance.interceptors.response.use(
//     function (response) {
//         // Do something with response data
//         console.log("Response received with data:", response.data)
//         return response
//     },
//     function (error) {
//         // Do something with response error
//         console.error("Response error:", error)
//         return Promise.reject(error)
//     }

//     )

//     const api = {
//         getshow:(params:any) => instance.get('/shows',params)
//     }
// export {api};
 
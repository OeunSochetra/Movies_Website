import axios, {AxiosResponse} from "axios";

export interface Show {
    _id:string;
    title:string;
    thumbnail:string;
    description:string;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const fetchShows = async (): Promise<Show[]> => {
    try{
        const res: AxiosResponse<Show[]> = await axios.get('https://api.fc9c50cd9e2aeb99dd9691f22af35ab2.life');
        return res.data;
    } catch (errer){
        throw new Error('faild to fetch posts');
    }
};
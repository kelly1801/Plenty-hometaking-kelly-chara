import axios from "axios";
import { ShortLink } from "../types/UrlResponse";
export const ShortApi = axios.create({
  baseURL: "https://api.shrtco.de/v2/",
});

export const shortLink = async (url: string) => {
  try {
    const { data } = await ShortApi.post<ShortLink>(`shorten?url=${url}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

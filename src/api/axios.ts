import axios from "axios";
import { ShortLinkResponse } from "../types/UrlResponse";

const ShortApi = axios.create({
  baseURL: "https://api.shrtco.de/v2/",
});

export const getShortLink = async (url: string) => {
  try {
    const { data } = await ShortApi.post<ShortLinkResponse>(`shorten?url=${url}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};

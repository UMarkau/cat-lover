import { AxiosResponse } from "axios";
import axiosInstance from "./config";
import { ICat } from "./models";

export const getCats = (catsNumber = 10): Promise<AxiosResponse<ICat[]>> =>
  axiosInstance.get(`/images/search?limit=${catsNumber}`);

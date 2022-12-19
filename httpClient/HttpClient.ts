import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from "axios";
import { IHttpClient } from "./types/IHttpClient";
import { IEpisode, IShow } from "./types";
import { routes } from "./routes";

export class HttpClient implements IHttpClient {
  public apiRoot: string;
  public tvMazeService: AxiosInstance;

  constructor(baseUrl?: string) {
    this.apiRoot = baseUrl || "https://api.tvmaze.com";
    const config: AxiosRequestConfig = {
      baseURL: this.apiRoot,
    };
    this.tvMazeService = axios.create(config);
  }

  async getSchedule(): Promise<IEpisode[]> {
    const endpoint = `${routes.SCHEDULE}?${new Date(Date.now()).toISOString()}`;
    const { data } = await this.tvMazeService.get(endpoint);
    return data;
  }

  async getShow(id: string): Promise<IShow> {
    const endpoint = `${routes.SHOWS}/${id}`;
    const { data } = await this.tvMazeService.get(endpoint);
    return data;
  }
}

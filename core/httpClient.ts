import { HttpClient } from "../httpClient/HttpClient";
import { CONSTANTS } from "../utils/constants";

const httpClient = new HttpClient(CONSTANTS.TVMAZE_API);

export default httpClient;

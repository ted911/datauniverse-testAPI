import axios, { AxiosPromise } from "axios";
import { Config, RequestHttpData } from "..";

class BaseApiService {
  private restURL: string;

  constructor(config: Config) {
    this.restURL = config.nodeEnv
      ? config.URL.production.rest
      : config.URL.development.rest;
  }
  protected requestRest(requestData: RequestHttpData): Promise<AxiosPromise> {
    return axios.post(this.restURL, JSON.stringify(requestData), {
      withCredentials: true,
    });
  }
}

class ModelApiService extends BaseApiService {
  private dmrsURL?: string;
  constructor(config: Config) {
    super(config);
    if (config.URL.production.dmrs) {
      this.dmrsURL = config.nodeEnv
        ? config.URL.production.dmrs
        : config.URL.development.dmrs;
    }
  }
}

export default ModelApiService;

import axios, { AxiosPromise } from "axios";
import { Config, RequestHttpData, ResponseHttpData } from "..";

class BaseApiService {
  private restURL: string;
  private dmrsURL?: string;

  constructor(config: Config) {
    this.restURL = config.nodeEnv
      ? config.URL.production.rest
      : config.URL.development.rest;
    if (config.URL.production.dmrs) {
      this.dmrsURL = config.nodeEnv
        ? config.URL.production.dmrs
        : config.URL.development.dmrs;
    }
  }
  private axiosHandler(requestData: RequestHttpData): Promise<AxiosPromise> {
    return axios.post(this.restURL, JSON.stringify(requestData), {
      withCredentials: true,
    });
  }
  private errorHandler(result: ResponseHttpData): any {
    const { Header, Body } = result;
    switch (Header.ErrCode) {
      case 0:
        return Body ?? true;
      default:
        alert(`${Header.ErrCode}: ${Header.ErrMsg}`);
        return false;
    }
  }
  protected async requestServer(requestData: RequestHttpData): Promise<any> {
    const { data } = await this.axiosHandler(requestData);
    return this.errorHandler(data);
  }
}

class ModelApiService extends BaseApiService {
  constructor(config: Config) {
    super(config);
  }
}

export default ModelApiService;

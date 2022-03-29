export = duApi;

declare function duApi(config: Config): duApi.DUApi;
declare namespace duApi {
  export type URL = {
    production: {
      rest: string;
      dmrs?: string;
    };
    development: {
      rest: string;
      dmrs?: string;
    };
  };
  export interface WebCmdType {
    [x: string]: number;
    noticeList: number;
    noticeDetail: number;
    faq: number;
    qna: number;
    terms: number;
    cert: number;
    join: number;
    cancel: number;
    createCapcha: number;
    certCapcha: number;
  }
  export interface PartnerCmdType {
    [x: string]: number;
    terms: number;
    termsDetail: number;
    sendCert: number;
    join: number;
    partnerList: number;
  }
  export interface AdminCmdType {
    [x: string]: number;
    login: number;
    logout: number;
    dmrsByPass: number;
    dmrsByPassRpl: number;
    confirmDU: number;
    confirmTelecom: number;
    adminCancel: number;
    sendCert: number;
    cancel: number;
    infomationUpload: number;
    imageUpload: number;
  }

  export interface RequestHeader {
    CmdType: number;
    RequestID: string;
  }
  export interface ResponseHeader {
    CmdType: number;
    ErrCode: number;
    ErrMsg: string;
  }
  export interface RequestHttpData {
    Header: RequestHeader;
    Body: {
      [x: string]: string | number | unknown[] | Object;
    };
  }
  export interface ResponseHttpData {
    Header: ResponseHeader;
    Body: {
      [x: string]:
        | string
        | number
        | unknown[]
        | Object
        | boolean
        | undefined
        | null;
    };
  }
  export interface Config {
    cmdTypes: WebCmdType | PartnerCmdType | AdminCmdType;
    URL: URL;
    nodeEnv: boolean;
  }
  class DUApi {
    constructor(config?: Config);
    /**
     * DU API, cmdType의 type에 따라 기능을 달리하는 API 라이브러리
     */
  }
}

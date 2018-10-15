declare module "axios" {
  declare interface AxiosTransformer {
    (data: mixed, headers?: Object): Object;
  }
  declare interface ProxyConfig {
    host: string;
    port: number;
    auth?: {
      username: string,
      password: string
    };
  }
  declare interface Cancel {
    constructor(message?: string): Cancel;
    message: string;
  }
  declare interface Canceler {
    (message?: string): void;
  }
  declare interface CancelTokenSource {
    token: CancelToken;
    cancel: Canceler;
  }
  declare class CancelToken {
    constructor(executor: (cancel: Canceler) => void): CancelToken;
    static source(): CancelTokenSource;
    promise: Promise<Cancel>;
    reason?: Cancel;
    throwIfRequested(): void;
  }
  declare interface AxiosXHRConfigBase {
    adapter?: (config: AxiosXHRConfig) => Promise<AxiosXHR>;
    auth?: {
      username: string,
      password: string
    };
    baseURL?: string;
    cancelToken?: CancelToken;
    headers?: Object;
    httpAgent?: mixed; // Missing the type in the core flow node libdef
    httpsAgent?: mixed; // Missing the type in the core flow node libdef
    maxContentLength?: number;
    maxRedirects?: number;
    params?: Object;
    paramsSerializer?: (params: Object) => string;
    onUploadProgress?: (progressEvent: ProgressEvent) => void;
    onDownloadProgress?: (progressEvent: ProgressEvent) => void;
    proxy?: ProxyConfig | false;
    responseType?:
      | "arraybuffer"
      | "blob"
      | "document"
      | "json"
      | "text"
      | "stream";
    timeout?: number;
    transformRequest?: AxiosTransformer | Array<AxiosTransformer>;
    transformResponse?: AxiosTransformer | Array<AxiosTransformer>;
    validateStatus?: (status: number) => boolean;
    withCredentials?: boolean;
    xsrfCookieName?: string;
    xsrfHeaderName?: string;
  }
  declare type $AxiosXHRConfigBase = AxiosXHRConfigBase;
  declare type AxiosXHRConfig = {
    data?: mixed,
    method?: string;
    url: string,
  } & AxiosXHRConfigBase;

  declare type $AxiosXHRConfig = AxiosXHRConfig;
  declare class AxiosXHR {
    config: AxiosXHRConfig;
    data: mixed;
    headers?: Object;
    status: number;
    statusText: string;
    request: http$ClientRequest | XMLHttpRequest;
  }
  declare type $AxiosXHR = AxiosXHR;
  declare type AxiosInterceptorIdent = number;
  declare class AxiosRequestInterceptor {
    use(
      successHandler: ?(
        response: AxiosXHRConfig
      ) => Promise<AxiosXHRConfig> | AxiosXHRConfig,
      errorHandler: ?(error: mixed) => mixed
    ): AxiosInterceptorIdent;
    eject(ident: AxiosInterceptorIdent): void;
  }
  declare class AxiosResponseInterceptor {
    use(
      successHandler: ?(response: AxiosXHR) => mixed,
      errorHandler: ?(error: $AxiosError<any>) => mixed
    ): AxiosInterceptorIdent;
    eject(ident: AxiosInterceptorIdent): void;
  }
  declare type AxiosPromise = Promise<AxiosXHR>;
  declare class Axios {
    constructor(config?: AxiosXHRConfigBase): void;
    [[call]](config: AxiosXHRConfig | string, config?: AxiosXHRConfig): AxiosPromise;
    request(config: AxiosXHRConfig): AxiosPromise;
    delete(url: string, config?: AxiosXHRConfigBase): AxiosPromise;
    get(url: string, config?: AxiosXHRConfigBase): AxiosPromise;
    head(url: string, config?: AxiosXHRConfigBase): AxiosPromise;
    post(
      url: string,
      data?: mixed,
      config?: AxiosXHRConfigBase
    ): AxiosPromise;
    put(
      url: string,
      data?: mixed,
      config?: AxiosXHRConfigBase
    ): AxiosPromise;
    patch(
      url: string,
      data?: mixed,
      config?: AxiosXHRConfigBase
    ): AxiosPromise;
    interceptors: {
      request: AxiosRequestInterceptor<mixed>,
      response: AxiosResponseInterceptor<mixed>
    };
    defaults: { headers: Object } & AxiosXHRConfig;
  }

  declare class AxiosError extends Error {
    config: AxiosXHRConfig;
    request?: http$ClientRequest | XMLHttpRequest;
    response?: AxiosXHR;
    code?: string;
  }

  declare type $AxiosError = AxiosError;

  declare interface AxiosExport extends Axios {
    [[call]](config: AxiosXHRConfig | string, config?: AxiosXHRConfig): AxiosPromise;
    Axios: typeof Axios;
    Cancel: Class<Cancel>;
    CancelToken: Class<CancelToken>;
    isCancel(value: any): boolean;
    create(config?: AxiosXHRConfigBase): Axios;
    all: typeof Promise.all;
    spread(callback: Function): (arr: Array<any>) => Function;
  }
  declare module.exports: AxiosExport;
}

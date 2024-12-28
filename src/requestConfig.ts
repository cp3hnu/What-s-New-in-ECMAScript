/*
 * @Author: 赵伟
 * @Date: 2024-03-25 13:52:54
 * @Description: 网络请求配置，详情请参考 https://umijs.org/docs/max/request
 */
import type {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  RequestConfig,
  RequestError,
  RequestOptions,
} from '@umijs/max';
import { message } from 'antd';
// import { gotoLoginPage } from './utils/ui';

// [antd: Notification] You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.
const popupError = (
  error: string,
  skipErrorHandler: boolean | undefined = false,
) => {
  if (!skipErrorHandler) {
    // 直接调用 message.error 有时候不弹出来
    setTimeout(() => {
      message.error(error);
    }, 100);
  }
};

/**
 * Umi Max 网络请求配置
 * @doc https://umijs.org/docs/max/request#配置
 */
export const requestConfig: RequestConfig = {
  timeout: 120 * 1000,
  requestInterceptors: [
    (url: string, options: AxiosRequestConfig) => {
      // const headers = options.headers ?? {};
      // const authHeader = headers['Authorization'];
      // const isToken = headers['isToken'];

      // if (!authHeader && isToken !== false) {
      //   const accessToken = getAccessToken();
      //   if (accessToken) {
      //     headers['Authorization'] = `Bearer ${accessToken}`;
      //   }
      // }

      return { url, options };
    },
  ],
  responseInterceptors: [
    [
      (response: AxiosResponse) => {
        const { status, data, config } = response || {};
        const options = config as RequestOptions;
        const skipErrorHandler = options?.skipErrorHandler;
        const skipValidating = options?.skipValidating;

        if (status >= 200 && status < 300) {
          if (
            data &&
            (skipValidating || data instanceof Blob || data.code === 200)
          ) {
            return response;
          } else if (data && data.code === 401) {
            // gotoLoginPage(false);
            popupError('请重新登录');
            return Promise.reject(response);
          } else {
            popupError(data?.msg ?? '请求失败', skipErrorHandler);
            return Promise.reject(response);
          }
        } else {
          popupError('请求失败', skipErrorHandler);
          return Promise.reject(response);
        }
      },
      (error: RequestError) => {
        const options = (error as AxiosError).config as RequestOptions;
        const skipErrorHandler = options?.skipErrorHandler;

        popupError(error.message ?? '请求失败', skipErrorHandler);
        return Promise.reject(error);
      },
    ],
  ],
};

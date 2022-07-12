/**
 * @description: 网络请求错误处理
 * @param: { String | Number } code 请求返回的code
 * @param: { String } errMsg 请求返回的msg
 * @return: 错误处理后的结果
 */
import { ERROR } from '../utils/CONSTANT';
export const errorCodeHandler = (code: string | number, errMsg: string) => {
  let res: any;

  switch (Number(code)) {
    default:
      res = Promise.reject(errMsg || ERROR.NETWORK);
      break;
  }
  return res;
};

import { ERR_MESSAGE } from '@/utils/CONSTANTS';

export const errorCodeHandler = (code, errMsg) => {
  let res;
  switch (Number(code)) {
    default:
      res = Promise.reject(errMsg || ERR_MESSAGE.SERVICE_ERROR);
  }
  return res;
};

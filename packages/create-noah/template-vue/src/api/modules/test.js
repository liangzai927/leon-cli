import request from '@/axios';

export const test1 = async (params) => {
  return request({
    method: 'POST',
    url: '/nft/chain',
    data: params,
    prefix: '/chain-query',
    mock: true,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

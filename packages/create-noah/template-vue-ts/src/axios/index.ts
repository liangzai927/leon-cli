import Request from './request';

const { request } = new Request({
  timeout: 1000 * 20,
  headers: {
    'X-BM-CLIENT': 'TEAMS',
    'Cache-Control': 'no-cache',
    Pragma: 'no-cache',
    'If-Modified-Since': 0,
    'X-BM-DEVICE': 1,
    'X-BM-VERSION': '1.0.0'
  }
});

export default request;

import axios from 'axios';

/**
 * api host
 * @returns 
 */
export const getAPIHost = () => {
    return (
      'https://localhost:3000'
    );
  };

/**
 * rest api
 */
export const restApi = axios.create({
    baseURL: getAPIHost() + '/v1',
  });
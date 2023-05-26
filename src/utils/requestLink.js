
import axios from 'axios';

import config from '../config';

const requestLink = async (apiKey, resource, data) => {
  const headers = {
    'Content-Type': 'application/json',
    'x-api-key': apiKey,
  };

  try {
    const res = await axios.post(`${config.apiSantaClara.url}${resource}`, data, {headers});
    return res.data;
  } catch (error) {
    return {message: error.response.data, error: true};
  }
};

export default requestLink;

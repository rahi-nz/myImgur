import clientId from '../webConfig';

const { create } = require('apisauce');

const baseURL = 'https://api.imgur.com/3';

// create main request configs
const request = (() => {
  const headers = {
    Authorization: `Client-ID ${clientId}`,
  };

  return create({
    baseURL,
    headers,
  });
})();

module.exports = {
  request,
  baseURL,
};

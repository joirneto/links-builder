const config = {
  apiSantaClara: {
    url: process.env.REACT_APP_API_URL,
    apiKey: resolveApiKeys(process.env.REACT_APP_API_KEY),
  },
};

function resolveApiKeys(apiKeys) {
  const pairs = apiKeys.split(',');
  const obj = {};
  for (let i = 0; i < pairs.length; i += 2) {
    const key = pairs[i];
    const value = pairs[i + 1];
    obj[key] = value;
  }
  return obj;
}
export default config;

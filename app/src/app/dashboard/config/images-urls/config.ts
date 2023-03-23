import { apiWeatherEnv } from 'src/environments/environment';

export const ApiWeatherEnv = {
  baseUrl: apiWeatherEnv.hasOwnProperty('baseUrl')
    ? apiWeatherEnv.baseUrl
    : null,
};

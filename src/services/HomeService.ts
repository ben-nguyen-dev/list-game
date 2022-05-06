import authorizedRequest from "./authoriedRequest";

export const getListGameService = async () => {
  return await authorizedRequest.get('/games.php')
};

export const getListJackpotService = async () => {
  return await authorizedRequest.get('/jackpots.php')
};

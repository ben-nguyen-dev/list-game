import React, { useCallback, useEffect, useMemo, useState } from "react";
import { GameType } from "../configs/interfaces";
import { getListGameService } from "../../../services/HomeService";
import { useSearchParams } from "react-router-dom";
const useHome = () => {
  const [searchParams] = useSearchParams();

  const type = useMemo(() => {
    return searchParams.get("type");
  }, [searchParams]);
  const [listGame, setListGame] = useState<GameType[]>([]);

  useEffect(() => {
    getGames();
  }, []);

  const getGames = async () => {
    try {
      const res = await getListGameService();
      !!res && setListGame(res);
    } catch (error: any) {
      console.log(error);
    }
  };

  const listGameByCategory = useMemo(() => {
    return type
      ? listGame.filter((game) => game.categories.includes(type))
      : listGame;
  }, [type]);

  return { listGameByCategory, type };
};
export default useHome;

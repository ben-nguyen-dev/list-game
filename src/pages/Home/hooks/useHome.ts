import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { GameType, JackpotType } from "../configs/interfaces";
import {
  getListGameService,
  getListJackpotService,
} from "../../../services/HomeService";
import { useSearchParams } from "react-router-dom";
import _ from "lodash"

const useHome = () => {
  const [searchParams] = useSearchParams();

  const type = useMemo(() => {
    return searchParams.get("type");
  }, [searchParams]);

  const [listGame, setListGame] = useState<GameType[]>([]);
  const [jackpot, setJackpot] = useState<any>({});

  useEffect(() => {
    getGames();
    getJackpot();
    let interval = setInterval(() => {
      getJackpot();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const getGames = async () => {
    try {
      const res = await getListGameService();
      !!res && res.data && setListGame(res.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const getJackpot = async () => {
    try {
      const res = await getListJackpotService();
      if(!!res && res.data) {
        const data = {}
        _.forEach(res.data, (jackpot: JackpotType) => {
          _.set(data, jackpot.game, jackpot.amount)
        })
        setJackpot(data)
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  const listGameByCategory = useMemo(() => {
    return type
      ? listGame.filter((game) => game.categories.includes(type))
      : listGame;
  }, [type, listGame]);

  return { listGameByCategory, type, jackpot };
};
export default useHome;

import React, { FC, useEffect } from "react";
import useHome from "./hooks/useHome";
import "./home.scss";
import { MENU_PATH } from "../../ultis/constants";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  const { listGameByCategory, type, jackpot } = useHome();
  return (
    <div className="home">
      {listGameByCategory.map((gameItem) => {
        return (
          <div className={`game-item`} key={gameItem.id}>
            {(gameItem.categories.includes(MENU_PATH.NEWS_GAME) || gameItem.categories.includes(MENU_PATH.TOP_GAMES)) && (
              <div className="new-item">
                {(gameItem.categories.includes(MENU_PATH.NEWS_GAME) && !gameItem.categories.includes(MENU_PATH.TOP_GAMES)) && <div className="new-item-text">NEW</div>}
                {(gameItem.categories.includes(MENU_PATH.NEWS_GAME) && gameItem.categories.includes(MENU_PATH.TOP_GAMES)) && <div className="new-item-text">NEW</div>}
                {(gameItem.categories.includes(MENU_PATH.TOP_GAMES) && !gameItem.categories.includes(MENU_PATH.NEWS_GAME)) && <div className="new-item-text">TOP</div>}
              </div>
            )}
            {jackpot[gameItem.id] && (
              <div className="jackpot">£{jackpot[gameItem.id]}</div>
            )}
            <div className="layer-btn">
              <div className="btn">Play</div>
            </div>
            <img src={gameItem.image} alt={gameItem.name} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;

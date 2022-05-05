import React, { FC } from "react";
import useHome from "./hooks/useHome";
import "./home.scss";

interface HomeProps {}

const Home: FC<HomeProps> = ({}) => {
  const { listGameByCategory, type } = useHome();
  return (
    <div className="home">
      {listGameByCategory.map((gameItem) => (
        <div className={`game-item`} key={gameItem.id}>
          <img src={gameItem.image} alt={gameItem.name} />
        </div>
      ))}
    </div>
  );
};

export default Home;

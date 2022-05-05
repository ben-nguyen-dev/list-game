import React, { FC } from "react";
import { MENU_ITEMS } from "../ultis/constants";
import { MenuType } from "../interfaces/commons";
import { useNavigate } from "react-router-dom";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const navigate = useNavigate();

  const handleItemMenu = (path: string) => {
    if (!path) return;
    console.log({ path });
    navigate(`/home?type=${path}`);
  };

  return (
    <div className="header">
      <div className="menu">
        {MENU_ITEMS.map((item: MenuType, index) => (
          <div
            className="menu-item"
            key={index}
            onClick={() => handleItemMenu(item.path)}
          >
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;

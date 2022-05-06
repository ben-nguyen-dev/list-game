import React, {FC, useMemo} from "react";
import { MENU_ITEMS } from "../ultis/constants";
import { MenuType } from "../interfaces/commons";
import {useNavigate, useSearchParams} from "react-router-dom";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const type = useMemo(() => {
    return searchParams.get("type");
  }, [searchParams]);

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
            className={`menu-item ${item.path === type ? 'active' : ''}`}
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

import React, { FC, useMemo } from "react";
import { MENU_ITEMS } from "../ultis/constants";
import { MenuType } from "../interfaces/commons";
import { useNavigate, useSearchParams } from "react-router-dom";

interface HeaderProps {}

const Header: FC<HeaderProps> = ({}) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const type = useMemo(() => {
    return searchParams.get("type");
  }, [searchParams]);

  const handleItemMenu = (path: string) => {
    if (!path) return;
    navigate(`/home?type=${path}`);
  };

  return (
    <div className="header">
      <div className="menu">
        {MENU_ITEMS.map((item: MenuType, index) => (
          <div
            className={`menu-item ${
              item.path === type ||
              item?.children?.some((child) => child.path == type)
                ? "active"
                : ""
            }`}
            key={index}
          >
            <div
              className={`item`}
              key={index}
              onClick={() => handleItemMenu(item.path)}
            >
              {item.label}
            </div>
            {item.children && (
              <div className="menu-children">
                {item.children.map((child, index) => (
                  <div
                    className={`item ${child.path === type ? "active" : ""}`}
                    onClick={() => handleItemMenu(child.path)}
                    key={index}
                  >
                    {child.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;

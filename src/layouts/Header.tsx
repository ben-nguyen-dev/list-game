import React, { FC } from "react";

interface HeaderProps {
  children: any
}

const Title: FC<HeaderProps> = ({children}) => {
  return <div className="header">
    <div className="menu">
      dsdsdsđ
    </div>
    {children}
  </div>;
};

export default Title;
import React, { FC } from "react";
import Header from "./Header";

interface MainLayoutProps {
  children: any;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="main">
      <Header />
      <div className="body">{children}</div>
    </div>
  );
};

export default MainLayout;

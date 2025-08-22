import React from "react";
import Header from "../Components/Header";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

import React from "react";
import { Outlet } from "react-router-dom";

const BasePage = () => {
  return (
    <div className="min-h-screen w-screen bg-gray-50">
      <Outlet />
    </div>
  );
};

export default BasePage;

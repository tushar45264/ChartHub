'use client'
import React, { useState } from "react";
import Header from "./component/Header";
import TopCards from "./component/TopCards";
import BarChart from "./component/BarChart";
import RecentOrder from "./component/RecentOrder";
import BubbleChart from "./component/BubbleChart";
import PieChart from "./component/PieChart";
import PolarChart from "./component/PolarChart";
import App from "./component/GradientChart";
import MenuButton from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function Home() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedChart, setSelectedChart] = useState("BarChart");

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (chartType) => {
    setSelectedChart(chartType);
    setAnchorEl(null);
  };

  const renderSelectedChart = () => {
    switch (selectedChart) {
      case "BarChart":
        return <BarChart />;
      case "RecentOrder":
        return <RecentOrder />;
      case "BubbleChart":
        return <BubbleChart />;
      case "PieChart":
        return <PieChart />;
      case "PolarChart":
        return <PolarChart />;
      case "GradientChart":
        return (
                 <App />
       );
      default:
        return null;
    }
  };

  return (
    <main className="bg-gray-100 h-screen">
      <Header />
      <TopCards />
      <div className="ml-20 p-4 grid lg:grid-cols-4 gap-2">
        <div className="w-full">
          <MenuButton
            onClick={handleMenuOpen}
            variant="outlined"
            startIcon={<ArrowDropDownIcon />}
          >
            Charts
          </MenuButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem
              onClick={() => handleMenuItemClick("BarChart")}
              selected={selectedChart === "BarChart"}
            >
              Bar Chart
            </MenuItem>
            <MenuItem
              onClick={() => handleMenuItemClick("BubbleChart")}
              selected={selectedChart === "BubbleChart"}
            >
              Bubble Chart
            </MenuItem>
            <MenuItem
              onClick={() => handleMenuItemClick("PieChart")}
              selected={selectedChart === "PieChart"}
            >
              Pie Chart
            </MenuItem>
            <MenuItem
              onClick={() => handleMenuItemClick("PolarChart")}
              selected={selectedChart === "PolarChart"}
            >
              Polar Chart
            </MenuItem>
            <MenuItem
              onClick={() => handleMenuItemClick("GradientChart")}
              selected={selectedChart === "GradientChart"}
            >
              Gradient Chart
            </MenuItem>
          </Menu>
        </div>
      </div>
      <div className="ml-20 p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
        {renderSelectedChart()}
        <RecentOrder />
      </div>
      <p className="p-5 text-center font-bold bg-gray-100">
        Made with ❤️ By Tushar
      </p>
    </main>
  );
}

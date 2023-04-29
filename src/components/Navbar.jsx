import { Button, Menu, Typography, Avatar } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  MoneyCollectOutlined,
  BulbOutlined,
  FundOutlined,
  MenuOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { useState, useEffect } from "react";
import icon from "../images/cryptocurrency.png";
import "../App.css";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState();
  useEffect(() => {
    window.addEventListener("resize", () => setScreenSize(window.innerWidth));
    setScreenSize(window.innerWidth);
    return () =>
      window.removeEventListener("resize", () => setScreenSize(window.innerWidth));
  }, []);
  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="icon">
          <Link to="/">CryptoInsightz</Link>
        </Typography.Title>
      </div>
      <Button
        className="menu-control-container"
        onClick={() => setActiveMenu(!activeMenu)}
      >
        <MenuOutlined />
      </Button>
      {activeMenu && (
        <Menu theme="dark">
          <Menu.Item icon={<HomeOutlined />}>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />}>
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />}>
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />}>
            <Link to="/news">News</Link>
          </Menu.Item>
          <Menu.Item icon={<TwitterOutlined />}>
            <Link to="/tweets">Tweets</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};

export default Navbar;

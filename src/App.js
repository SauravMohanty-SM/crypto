import { Layout, Typography, Space } from "antd";
import {
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
  Exchanges,
  Navbar,
  Tweets
} from "./components";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Routes>
              <Route exact path="/" element={<Homepage />} />
              <Route exact path="/exchanges" element={<Exchanges />} />
              <Route exact path="/cryptocurrencies" element={<Cryptocurrencies />}/>
              <Route exact path="/crypto/:coinId" element={<CryptoDetails />} />
              <Route exact path="/news" element={<News />} />
              <Route exact path="/tweets" element={<Tweets/>}/>
            </Routes>
          </div>
        </Layout>
      
      <div className="footer">
        <Typography.Title level={5} style={{color:"white", textAlign:"center"}}>
        Copyright © 2023
        <a href="https://www.linkedin.com/in/saurav-mohanty-449166136/"> Saurav Mohanty</a><br/>
        All rights are reserved
        </Typography.Title>
        <Space>
          <Link to='/'>Home</Link>
          <Link to='/exchanges'>Exchanges</Link>
          <Link to='/news'>News</Link>
          <Link to='/tweets'>Tweets</Link>
        </Space>
      </div>
    </div>
    </div>
  );
}

export default App;

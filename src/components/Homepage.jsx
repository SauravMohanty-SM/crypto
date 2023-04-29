import { Typography,Row, Col, Statistic  } from 'antd';
import React from 'react'
import { useGetCryptosQuery } from '../services/cryptoApi'
import millify from "millify"
import {Link} from "react-router-dom"
import {Cryptocurrencies, Loader, News} from "../components"

const Homepage = () => {
  const {data: cryptoData, isLoading} = useGetCryptosQuery(10)
  if(isLoading) return <Loader/>
  const GlobalStats = cryptoData?.data?.stats
  return (
    <>
      <Typography.Title level={2} className="heading">Global Crypto Stats</Typography.Title>
      <Row>
        <Col span={12}><Statistic title="Total Cryptocurrencies" value={GlobalStats?.totalCoins}/></Col>
        <Col span={12}><Statistic title="Total Exchanges" value={GlobalStats?.totalExchanges}/></Col>
        <Col span={12}><Statistic title="Total Market Cap" value={`$${millify(GlobalStats?.totalMarketCap)}`}/></Col>
        <Col span={12}><Statistic title="Total 24h Volume" value={`$${millify(GlobalStats?.total24hVolume)}`}/></Col>
        <Col span={12}><Statistic title="Total Markets" value={millify(GlobalStats?.totalMarkets)}/></Col>
      </Row>

      <div className='home-heading-container'>
        <Typography.Title level={2} className="home-title">Top 10 Cryptocurrencies in the world</Typography.Title>
        <Typography.Title level={4} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Typography.Title>
      </div>
      <Cryptocurrencies simplified/>

      <div className='home-heading-container'>
        <Typography.Title level={2} className="home-title">Latest News</Typography.Title>
        <Typography.Title level={4} className="show-more"><Link to="/news">Show more</Link></Typography.Title>
      </div>
      <News simplified/>
    </>
  )
}

export default Homepage
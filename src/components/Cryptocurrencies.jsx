import React, {useState, useEffect} from 'react'
import {Row, Col, Card, Input} from "antd"
import {useGetCryptosQuery} from "../services/cryptoApi"
import {Link} from "react-router-dom"
import millify from 'millify'
import Loader from './Loader'

const Cryptocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100
  const {data : cryptoList, isLoading} = useGetCryptosQuery(count)
  const [cryptos,setCryptos] = useState([])
  const [searchItem, setSearchItem] = useState("")
  
  useEffect(()=>{
    const filteredData = cryptoList?.data?.coins.filter((item) => item.name.toLowerCase().includes(searchItem));
    setCryptos(filteredData);
    
  },[cryptoList, searchItem])
  
  if (isLoading) return <Loader/>
  
  return (
    <>
    {!simplified &&
        <div className="search-crypto">
          <Input placeholder='Search Cryptocurrencies' onChange={(e)=>setSearchItem(e.target.value.toLowerCase())}/>
        </div>
    }
    <Row gutter={[32,32]} className="crypto-card-container">
      {cryptos?.map((currency)=>(
        <Col className='crypto-card' xs={24} sm={12} lg={6} key={currency.uuid}>
          <Link to ={`/crypto/${currency.uuid}`}>
            <Card 
              title={`${currency.rank}. ${currency.name}`}
              extra={<img className='crypto-image' src={currency.iconUrl} alt="icon"></img>}
              hoverable>
                <p>Price: ${millify(currency.price)}</p>
                <p>Market Cap: ${millify(currency.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
    </>
  )
}

export default Cryptocurrencies
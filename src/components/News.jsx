import React, { useState } from "react";
import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { Row, Col, Select, Typography, Card } from "antd";
import moment from "moment";
import Loader from "./Loader";

const { Title, Text } = Typography;

const News = ({ simplified }) => {
  const bitcoin =
    "https://styles.redditmedia.com/t5_2x5ik/styles/communityIcon_7anac3qi3c051.png";
  const ethereum =
    "https://external-preview.redd.it/vBzMqBS6pssbe8UUotz2uYwU-bdf4f6ubca26cgKXi0.jpg?auto=webp&s=41c1cf697e196d42a2dde41ca2e3efd87c51ac09";
  const nft =
    "https://blog.digitalogy.co/wp-content/uploads/2021/06/Non-Fungible-Token.png";
  const blockchain =
    "https://ayudawp.com/wp-content/uploads/2018/02/blockchain-logo-150x150.png";
  const altcoin =
    "https://ciphertrace.com/wp-content/uploads/2018/05/altcoin2-1-300x300.png";
  const defi =
    "https://seeklogo.com/images/D/Defi-logo-5A4AAAAFDE-seeklogo.com.gif"

  const count = simplified ? 10 : 50;
  const [category, setCategory] = useState("bitcoin");
  const [image,setImage] = useState(bitcoin)
  const { data: cryptoNews, isLoading } = useGetCryptoNewsQuery({
    category,
    count,
  });

  const onOptionChange =(value)=>{
    setCategory(value)
  if(value==="bitcoin"){
    setImage(bitcoin);
  }
  else if(value==="ethereum"){
    setImage(ethereum);
  }
  else if(value==="defi"){
    setImage(defi);
  }
  else if(value==="blockchain"){
    setImage(blockchain);
  }
  else if(value==="nft"){
    setImage(nft);
  }
  else if(value==="altcoin"){
    setImage(altcoin);
  }
}

  if (isLoading) return <Loader/>;
  return (
    <>
      <Row gutter={[24, 24]}>
        <Col span={24}>
          {!simplified && (
            <Select
              className="select-news"
              showSearch
              placeholder="Select a topic"
              optionFilterProp="children"
              onChange={(value)=>onOptionChange(value)}
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: "bitcoin",
                  label: "Bitcoin",
                },
                {
                  value: "blockchain",
                  label: "Blockchain",
                },
                {
                  value: "altcoin",
                  label: "Altcoin",
                },
                {
                  value: "nft",
                  label: "Nft",
                },
                {
                  value: "defi",
                  label: "Defi",
                },
                {
                  value: "ethereum",
                  label: "Ethereum",
                },
              ]}
            />
          )}
        </Col>
        {cryptoNews?.articles.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news.url} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title className="news-title" level={4}>
                    {news.title.length > 40
                      ? `${news.title.substring(0, 40)}...`
                      : news.title}
                  </Title>
                  <img src={image} alt="img" width="50px" />
                </div>
                <p>
                  {news.text.length > 30
                    ? `${news.text.substring(0, 30)}...`
                    : news.text}
                </p>
                <div className="provider-container">
                  <div>
                    <Text className="provider-name"><b>{news.source}</b></Text>
                  </div>
                  <Text>{moment(news.date).startOf("ss").fromNow()}</Text>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;

import React from "react";
import { useGetCryptoTweetsQuery } from "../services/cryptoNewsApi";
import { Row, Col, Card, Typography } from "antd";
import moment from "moment";
import Loader from "./Loader";
const { Title, Text } = Typography;
const image =
  "https://png.pngtree.com/png-clipart/20221018/ourmid/pngtree-twitter-social-media-icon-3d-png-image_6308424.png";
const Tweets = () => {
  const count = 100;
  const { data, isLoading } = useGetCryptoTweetsQuery({ count });
  const tweets = data?.tweets;

  if (isLoading) return <Loader/>;
  return (
    <>
     <div className='home-heading-container'>
        <Title level={2} className="home-title">Latest Tweets on Crypto</Title>
      </div>
      <Row gutter={[24, 24]}>
        {tweets?.map((tweet, i) => (
          <Col xs={24} sm={12} lg={6} key={i}>
            <Card hoverable className="tweet-card">
             
                <div className="tweet-image-container">
                  <img src={image} alt="img" width="75px" />
                </div>
                <p>
                  {tweet.text}
                </p>
                <div className="provider-container">
                  <div>
                    <Text className="provider-name">
                      <b>{tweet.source}</b>
                    </Text>
                  </div>
                  <Text>{moment(tweet.datetime).startOf("ss").fromNow()}</Text>
                </div>
              
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Tweets;

import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Row, Col, Typography } from "antd";



ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart({ cryptoHistory, coinName, currentPrice }) {
  const coinPrice = [];
  const coinTimePeriod = [];
  for (let i = 0; i <= cryptoHistory?.data?.history?.length; i++) {
    coinPrice.push(cryptoHistory?.data?.history[i]?.price);
  }
  for (let i = 0; i <= cryptoHistory?.data?.history?.length; i++) {
    coinTimePeriod.push(
      new Date(
        cryptoHistory?.data?.history[i]?.timestamp * 1000
      ).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimePeriod,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Typography.Title level={2} className="chart-title">
          {coinName} Price Chart{" "}
        </Typography.Title>
        <Col className="price-container">
          <Typography.Title level={5} className="price-change">
            Change: {cryptoHistory?.data?.change}%
          </Typography.Title>
          <Typography.Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Typography.Title>
        </Col>
      </Row>
      <Line options={options} data={data} />
    </>
  );
}

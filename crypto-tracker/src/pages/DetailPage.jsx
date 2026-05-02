import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import PriceChart from "../components/PriceChart";

function DetailPage() {
  const { id } = useParams();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart`, {
        params: {
          vs_currency: "usd",
          days: 7,
        },
      })
      .then((res) => {
        const formatted = res.data.prices.map((item) => ({
          time: new Date(item[0]).toLocaleDateString(),
          price: item[1],
        }));
        setChartData(formatted);
      });
  }, [id]);

  return (
    <div className="container">
      <h2>{id.toUpperCase()} Price Chart</h2>
      <PriceChart data={chartData} />
    </div>
  );
}

export default DetailPage;
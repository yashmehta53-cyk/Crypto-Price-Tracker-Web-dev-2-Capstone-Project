import { useEffect, useState } from "react";
import axios from "axios";
import CoinCard from "../components/CoinCard";

function HomePage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets", {
        params: {
          vs_currency: "usd",
        },
      })
      .then((res) => setCoins(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <h2>Crypto Tracker</h2>
      <div className="grid">
        {coins.map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
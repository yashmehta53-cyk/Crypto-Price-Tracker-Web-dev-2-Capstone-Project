import { useEffect, useState } from "react";
import axios from "axios";
import CoinList from "../components/CoinList";
import SearchBar from "../components/SearchBar";

function Home() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets", {
        params: { vs_currency: "usd" },
      })
      .then((res) => setCoins(res.data))
      .catch(console.log);
  }, []);

  const filtered = coins.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Crypto Prices</h1>
      <SearchBar setSearch={setSearch} />
      <CoinList coins={filtered} />
    </div>
  );
}

export default Home;
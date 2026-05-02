import { useEffect, useState } from "react";
import axios from "axios";
import CoinCard from "../components/CoinCard";

function FavoritesPage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favs.length === 0) return;

    axios
      .get("https://api.coingecko.com/api/v3/coins/markets", {
        params: {
          vs_currency: "usd",
          ids: favs.join(","),
        },
      })
      .then((res) => setCoins(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <h2>Favorites</h2>

      {coins.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        <div className="grid">
          {coins.map((coin) => (
            <CoinCard key={coin.id} coin={coin} />
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
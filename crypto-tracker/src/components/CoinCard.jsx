import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function CoinCard({ coin }) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];
    setIsFav(favs.includes(coin.id));
  }, [coin.id]);

  const toggleFavorite = (e) => {
    e.preventDefault(); // prevent navigation

    let favs = JSON.parse(localStorage.getItem("favorites")) || [];

    if (favs.includes(coin.id)) {
      favs = favs.filter((id) => id !== coin.id);
      setIsFav(false);
    } else {
      favs.push(coin.id);
      setIsFav(true);
    }

    localStorage.setItem("favorites", JSON.stringify(favs));
  };

  return (
    <Link to={`/coin/${coin.id}`} className="card">
      <button className="fav-btn" onClick={toggleFavorite}>
        {isFav ? "★" : "☆"}
      </button>

      <img src={coin.image} alt={coin.name} />
      <h3>{coin.name}</h3>
      <p>${coin.current_price}</p>
    </Link>
  );
}

export default CoinCard;
function CoinList({ coins }) {
  return (
    <div className="coin-list">
      {coins.map((coin) => (
        <div key={coin.id} className="coin-card">
          <img src={coin.image} />
          <h3>{coin.name}</h3>
          <p>{coin.symbol.toUpperCase()}</p>
          <p>${coin.current_price}</p>
        </div>
      ))}
    </div>
  );
}

export default CoinList;
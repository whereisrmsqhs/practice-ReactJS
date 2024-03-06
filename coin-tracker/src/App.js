import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [dollar, setDollar] = useState(1);
  const [perCoin, setPerCoin] = useState("");
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        setPerCoin(json[0].quotes.USD.price);
      });
  }, []);

  const onPerCoinChange = (event) => {
    setPerCoin(event.target.value);
  };

  const onDollarChange = (event) => {
    setDollar(event.target.value);
  };

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={onPerCoinChange}>
            {coins.map((coin) => (
              <option value={coin.quotes.USD.price} key={coin.id}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD{" "}
              </option>
            ))}
          </select>
          <input
            value={dollar}
            onChange={onDollarChange}
            type="text"
            placeholder="Write US dollar"
          />
          <div>
            <strong>You can buy: {dollar / perCoin}</strong>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import CoinList from "./components/CoinList";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
    )
      .then((res) => res.json())
      .then((data) => setCoins(data));
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-950 p-6">
      <Header />
      <SearchBar search={search} setSearch={setSearch} />
      <CoinList coins={filteredCoins} />
    </div>
  );
}

export default App;
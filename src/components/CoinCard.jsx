const CoinCard = ({ coin }) => {
  return (
    <div className="bg-gray-900 text-white rounded-2xl p-4 shadow-lg hover:scale-105 transition duration-300">

      {/* Top Section */}
      <div className="flex items-center gap-3">
        <img src={coin.image} alt={coin.name} className="w-10 h-10" />
        <div>
          <h2 className="text-lg font-semibold">{coin.name}</h2>
          <p className="text-sm text-gray-400 uppercase">{coin.symbol}</p>
        </div>
      </div>

      {/* Price */}
      <div className="mt-4">
        <p className="text-xl font-bold">
          ${coin.current_price.toLocaleString()}
        </p>

        {/* Price Change */}
        <p
          className={`mt-1 font-medium ${
            coin.price_change_percentage_24h > 0
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {coin.price_change_percentage_24h.toFixed(2)}%
        </p>
      </div>
    </div>
  );
};

export default CoinCard;
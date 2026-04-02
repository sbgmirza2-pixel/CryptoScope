import CoinCard from "./CoinCard";

const CoinList = ({ coins }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
      {coins.length > 0 ? (
        coins.map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))
      ) : (
        <p className="text-white text-center col-span-full">
          No coins found 😔
        </p>
      )}
    </div>
  );
};

export default CoinList;
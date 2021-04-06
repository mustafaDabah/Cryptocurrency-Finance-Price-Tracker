import React from 'react';
import Coin from './Coin';


function CoinList({coins , loading , search , currentCoins}) {
    // search function 
    const filterCoins =
       search.length <= 0 ? (currentCoins) 
       : (coins.filter((coin) => 
          coin.name.toLowerCase().includes(search.toLowerCase())
      ))

    return (
        <>
         {loading ? (filterCoins.map(coin =>
             <Coin  
               key={coin.id}
               name={coin.name}
               image={coin.image}
               symbol={coin.symbol}
               marketCap={coin.market_cap}
               price={coin.current_price}
               priceChange={coin.price_change_percentage_24h}
               volume={coin.total_volume}
             />
         )) : (
                <div className="loading-data" >loading data...</div> 
            )}  
        </>
    )
}
export default CoinList ;

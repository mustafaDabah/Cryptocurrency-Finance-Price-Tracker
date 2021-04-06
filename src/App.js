import React , {useState , useEffect} from 'react';
import axios from 'axios';
import CoinList from './components/CoinList';
import SearchBox from './components/SearchBox';
import Pagination from './components/Pagination';
import './index.css';


function App() {
  // states 
  const [coins , setCoins] = useState([]);
  const [currentPage , setCurrentPage] = useState(1);
  const [coinsPerPage] = useState(15);
  const [loading , setLoading]=useState(false);   
  const [search , setSearch] = useState('');
  // fetch the data 
  useEffect(() => {
    const fetchCoins = async () => {
      try  {
        setLoading(true);
        const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false");
        setCoins(res.data);
      }catch (err) {
        setLoading(false)
      }
    }
    fetchCoins();

  } , []);
  // function handleChange search box 
  const handleChange = (e) => {
    setSearch(e.target.value)
  }
  // get current coins 
  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = coins.slice(indexOfFirstCoin , indexOfLastCoin);
  // change page 
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
      <div className="coin-app">
         <SearchBox search={search} handleChange={handleChange} />
         <CoinList coins={coins} currentCoins={currentCoins} loading={loading} search={search} />
         <Pagination coinsPerPage={coinsPerPage} totalCoins={coins.length} paginate={paginate} />
      </div>
  );
}

export default App;

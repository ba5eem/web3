import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BsCurrencyBitcoin } from 'react-icons/bs';
import { FaEthereum } from 'react-icons/fa';
import { SiDogecoin } from 'react-icons/si';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const bitcoin = "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=5&interval=daily";
const ethereum = "https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=5&interval=daily";
const doge = "https://api.coingecko.com/api/v3/coins/dogecoin/market_chart?vs_currency=usd&days=5&interval=daily";
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

function makeDate(unixTimestamp){
  const date = new Date(unixTimestamp);
  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);
  const formattedDate = `${year}-${month}-${day}`;
  console.log(formattedDate);
  return formattedDate
}

const data_default = {
  labels,

  datasets: [
    {
      label: 'Bitcoin',
      data: [22000,23000,24000,22000,26000,27000,23000],
      borderColor: 'green',

    },
  ],
}

let options_default = {
      responsive: true,
      scaleShowLabels: false,
      plugins: { 
        legend: { display: false },
        title: { display: true, text: 'Bitcoin 5 day price'},
      },
      scales: { y: { ticks: { stepSize: 100 } } }
    }

let miniOpt = {
      responsive: false,
      scaleShowLabels: false,
      plugins: { legend: { display: false } },
      scales: {
        x: {display: false, ticks: { display: false } },
        y: {display: false, ticks: { display: false } },
      }
    }

export default function App() {

  const [bitcoinData, setBitcoinData] = useState(data_default);
  const [ethereumData, setEthereumData] = useState(data_default);
  const [dogeData, setDogeData] = useState(data_default);
  const [options, setOptions] = useState(options_default);

  useEffect(function () {
    axios.get(bitcoin)
    .then((result) => {
      setBitcoinData({
        labels: result.data.prices.map((unixTimestamp) => { 
          return makeDate(unixTimestamp[0])
        }),
        datasets: [
          {
            label: 'Bitcoin',
            data: result.data.prices.map((price) => { return price[1]}),
            borderColor: 'green',

          },
        ],
        options: {
         animation: false
        }
      })
    });
    // TODO call api every hour or so to update price
  }, []);

  useEffect(function () {
    axios.get(ethereum)
    .then((result) => {
      setEthereumData({
        labels: result.data.prices.map((unixTimestamp) => { 
          return makeDate(unixTimestamp[0])
        }),
        datasets: [
          {
            label: 'Ethereum',
            data: result.data.prices.map((price) => { return price[1]}),
            borderColor: 'blue',

          },
        ],
        options: {
         animation: true
        }
      })
    });

  }, []);

  useEffect(function () {
    axios.get(doge)
    .then((result) => {
      setDogeData({
        labels: result.data.prices.map((unixTimestamp) => { 
          return makeDate(unixTimestamp[0])
        }),
        datasets: [
          {
            label: 'Dogecoin',
            data: result.data.prices.map((price) => { return price[1]}),
            borderColor: 'orange',

          },
        ],
        options: {
         animation: true
        }
      })
    });

  }, []);


  




  return (
    <div className="main-section">

        <div className="small-div">
          <div className="small-div-top">
            <p className="bitcoin"><BsCurrencyBitcoin/> Bitcoin</p>
            <div className="small-div-top-chart">
              <Line options={miniOpt} data={bitcoinData} />
            </div>
          </div>
          <div className="small-div-bottom">
            <button>BUY</button>
            <button>SELL</button>
          </div>
         </div>


         <div className="small-div">
          <div className="small-div-top">
            <p className="ethereum"><FaEthereum />Ethereum</p>
            <div className="small-div-top-chart">
              <Line options={miniOpt} data={ethereumData} />
            </div>
          </div>
          <div className="small-div-bottom">
            <button>BUY</button>
            <button>SELL</button>
          </div>
         </div>

         <div className="small-div">
          <div className="small-div-top">
            <p className="doge"><SiDogecoin /> Doge</p>
            <div className="small-div-top-chart">
              <Line options={miniOpt} data={dogeData} />
            </div>
          </div>
          <div className="small-div-bottom">
            <button>BUY</button>
            <button>SELL</button>
          </div>
         </div>
      

        <div className="main-chart">
          {bitcoinData ? <Line options={options} data={bitcoinData} /> : null}
        </div>


 
    </div>
    )





}

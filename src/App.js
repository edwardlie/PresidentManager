import React, { Component } from 'react';
import './App.css';
import ExchangeItem from './ExchangeItem';
import AddExchange from './AddExchange';

const exchanges = [
  {
    name: 'New York Stock Exchange',
    symbol: 'NYSE'
  },
  {
    name: 'NASDAQ Stock Exchange',
    symbol: 'NASDAQ'
  },
  {
    name: 'Tokyo Stock Exchange',
    symbol: 'JPX'
  },
  {
    name: 'Shanghai Stock Exchange',
    symbol: 'SSE'
  },
  {
    name: 'London Stock Exchange',
    symbol: 'LSE'
  },
  {
    name: 'Euronext Amsterdam Stock Exchange',
    symbol: 'Euronext'
  },
  {
    name: 'Hong Kong Stock Exchange',
    symbol: 'HKEX'
  },
  {
    name: 'Shenzhen Stock Exchange',
    symbol: 'SZSE'
  },
  {
    name: 'Toronto Stock Exchange',
    symbol: 'TSX'
  },
  {
    name: 'German Stock Exchange',
    symbol: 'FSX'
  },
    {
    name: 'Bombay (Mumbai) Stock Exchange',
    symbol: 'BSE'
  },
    {
    name: 'India National Stock Exchange',
    symbol: 'NSE'
  },
    {
    name: 'Swiss Stock Exchange',
    symbol: 'SIX'
  },
    {
    name: 'South Korea Stock Exchange',
    symbol: 'KRX'
  },
    {
    name: 'Australia Stock Exchange',
    symbol: 'ASX'
  },
    {
    name: 'Stockholm Stock Exchange',
    symbol: 'OMX'
  },
    {
    name: 'Johannesburg Stock Exchange',
    symbol: 'JSE'
  },
    {
    name: 'Taiwan Stock Exchange',
    symbol: 'TWSE'
  },
    {
    name: 'Brazilian Stock Exchange',
    symbol: 'Bovespa'
  },
    {
    name: 'Spanish Stock Exchange',
    symbol: 'BME'
  },
    {
    name: 'Singapore Exchange',
    symbol: 'SGX'
  },
    {
    name: 'Moscow Exchange',
    symbol: 'MOEX'
  },
    {
    name: 'Stock Exchange of Thailand',
    symbol: 'SET'
  },
    {
    name: 'Saudi Stock Exchange',
    symbol: 'Tadawul'
  },
    {
    name: 'Indonesia Stock Exchange',
    symbol: 'IDX'
  },
    {
    name: 'Malaysia Stock Exchange',
    symbol: 'MYX'
  },
    {
    name: 'Mexican Stock Exchange',
    symbol: 'BMV'
  },
    {
    name: 'Philippine Stock Exchange',
    symbol: 'PSE'
  },
    {
    name: 'Oslo Stock Exchange',
    symbol: 'OSE'
  },
    {
    name: 'Chilean Stock Exchange',
    symbol: 'BVS'
  },
    {
    name: 'Tel-Aviv Stock Exchange',
    symbol: 'TASE'
  },
    {
    name: 'Istanbul Stock Exchange',
    symbol: 'BIST'
  },
    {
    name: 'Qatar Stock Exchange',
    symbol: 'QE'
  },
    {
    name: 'Warsaw Stock Exchange',
    symbol: 'GPW'
  },
    {
    name: 'Irish Stock Exchange',
    symbol: 'ISE'
  },
    {
    name: 'Abu Dhabi Securities Exchange',
    symbol: 'ADX'
  },
    {
    name: 'Colombia Stock Exchange',
    symbol: 'BVC'
  },
      {
    name: 'Vienna Stock Exchange',
    symbol: 'VSE'
  },
    {
    name: 'Tehran Stock Exchange',
    symbol: 'TSE'
  },
    {
    name: 'Dubai Financial Market',
    symbol: 'DFM'
  },
    {
    name: 'Peruvian Stock Exchange',
    symbol: 'BVL'
  },
    {
    name: 'New Zealand Stock Exchange',
    symbol: 'NZX'
  },
    {
    name: 'Argentinian Stock Exchange',
    symbol: 'BCBA'
  },
    {
    name: 'Ho Chi Minh Stock Exchange',
    symbol: 'HOSE'
  },
    {
    name: 'Casablanca Stock Exchange',
    symbol: 'BC'
  },
    {
    name: 'Luxembourg Stock Exchange',
    symbol: 'LuxSE'
  },
    {
    name: 'Kazahkstan Stock Exchange',
    symbol: 'KASE'
  },
    {
    name: 'Dhaka Stock Exchange',
    symbol: 'DSE'
  },
    {
    name: 'Chittagong Stock Exchange',
    symbol: 'CSE'
  },
    {
    name: 'Athens Stock Exchange',
    symbol: 'ASE'
  },
      {
    name: 'Egyptian Exchange',
    symbol: 'EGX'
  },
    {
    name: 'Nigerian Exchange',
    symbol: 'NSE'
  },
    {
    name: 'Amman Stock Exchange',
    symbol: 'ASE'
  },
      {
    name: 'Budapest Stock Exchange',
    symbol: 'BSE'
  },
    {
    name: 'Croatian Stock Exchange',
    symbol: 'ZSE'
  },
    {
    name: 'Bahrain Stock Exchange',
    symbol: 'BHB'
  },
    {
    name: 'Bucharest Stock Exchange',
    symbol: 'BVB'
  },
    {
    name: 'Colombo Stock Exchange',
    symbol: 'ZSE'
  },
    {
    name: 'Nairobi Securities Exchange',
    symbol: 'NSE'
  },
    {
    name: 'Beirut Stock Exchange',
    symbol: 'BSE'
  },
    {
    name: 'Stock Exchange of Mauritius',
    symbol: 'SEM'
  },
    {
    name: 'Jamaica Stock Exchange',
    symbol: 'JSE'
  },
    {
    name: 'Hanoi Stock Exchange',
    symbol: 'HNX'
  },
    {
    name: 'Malta Stock Exchange',
    symbol: 'MSE'
  },
    {
    name: 'Ukrainian Exchange',
    symbol: 'UX'
  },
    {
    name: 'Palestine Securities Exchange',
    symbol: 'PEX'
  },
      {
    name: 'Barbados Stock Exchange',
    symbol: 'BDE'
  },
      {
    name: 'Bermuda Stock Exchange',
    symbol: 'BSX'
  },
      {
    name: 'Eschborn Eurex Exchange',
    symbol: 'EUREX'
  },
      {
    name: 'Pakistan Stock Exchange',
    symbol: 'PSX'
  },
      {
    name: 'Helsinki Stock Exchange',
    symbol: 'OMXH'
  },
      {
    name: 'Riga Stock Exchange',
    symbol: 'OMXR'
  },
      {
    name: 'Euronext Paris Stock Exchange',
    symbol: 'Euronext'
  },
      {
    name: 'Berne Stock Exchange',
    symbol: 'BX'
  },
      {
    name: 'Milan Stock Exchange',
    symbol: 'MTA'
  },
      {
    name: 'Compenhagen Stock Exchange',
    symbol: 'OMXC'
  },
      {
    name: 'OTC Markets',
    symbol: 'OTC'
  },
  ];

localStorage.setItem('exchanges', JSON.stringify(exchanges))

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exchanges: JSON.parse(localStorage.getItem('exchanges'))
    };

    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount(){
    const exchanges = this.getexchanges();

    this.setState({exchanges});
  }

  getexchanges(){
    return this.state.exchanges;
  }

  onAdd(name, symbol){
    const exchanges = this.getexchanges();

    exchanges.push({
      name,
      symbol
    });

    this.setState({exchanges});
  }

  onDelete(name){
    const exchanges = this.getexchanges();

    const filteredexchanges = exchanges.filter(product => {return product.name!== name;
    });

    //console.log(filteredexchanges);

    this.setState({exchanges: filteredexchanges});
  }

  onEditSubmit(name, symbol, originalName){
    let exchanges = this.getexchanges();

    exchanges = exchanges.map(exchange=>{
      if (exchange.name === originalName){
        exchange.name = name;
        exchange.symbol= symbol;
      }
      return exchange //since using map
    });

    this.setState({exchanges});
  }

  render(){
    return (
      <div className="App">
        <h1>Stock Exchange List Manager</h1>
        
        <AddExchange
          onAdd={this.onAdd}
        />

        {
          this.state.exchanges.map(exchange => {
            return (
              <ExchangeItem
                key={exchange.name}
                {...exchange}
                onDelete ={this.onDelete}
                onEditSubmit={this.onEditSubmit}
              />
            );
          })
        }
      </div>
    );
  }
}
export default App;

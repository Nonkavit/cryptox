import React, { Component } from 'react';
import Ticker from './Ticker'
import axios from 'axios'
import _ from 'lodash'

class App extends Component {
  SYMBOL = ['OMG','BTC','XRP']
  constructor(props){
    super(props)
    this.state = {}
  }

  componentDidMount(){
    let self = this
    axios.get('https://api.coinmarketcap.com/v1/ticker/?convert=THB')
    .then(function (response) {

     _.each(self.SYMBOL,symbol => {

      _.find(response.data, ['symbol', symbol]).price_thb

     }) 
        
     

      self.setState({
        
        BTC: btc.price_thb,
        OMG: omg.price_thb
      
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return (
      <div>
       { 
        _.map(this.SYMBOLS,symbol) => <Ticker symbol={symbol} price={this.state.[symbol]/>
       }
        </div>
    );
  }
}

export default App;

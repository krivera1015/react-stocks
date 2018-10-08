import React, { Component, Fragment } from 'react';
import Stock from '../components/Stock'

//this is our action from our store
import {initStocks} from '../redux/actionCreator';

//have to connect react component to redux store using the connector 
import {connect} from 'react-redux'



class StockContainer extends Component {

  componentDidMount() {
    fetch("http://localhost:3000/stocks")
      .then(res => res.json())
      .then(stocks => {
        this.props.initStocks(stocks)
      })
  }

  renderStocks = () => {
    return this.props.stocks.map( stock => <Stock stock={stock} key={stock.id}/> )
  }
  render() {
    console.log("hello", this.props)
    return (
      <Fragment>
        <h2>Stocks</h2>
        {
          this.renderStocks()
          //render the list of stocks here
        }
      </Fragment>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    stocks: state.stocks
  }
}

// const dispatchToProps = (dispatch) => {
//   return {
//     hanz: (stocks) => {
//       return dispatch(initStocks(stocks))
//     }
//   }
// }

//what do you have in store that you want the component to have access to
//comes from mapStateToProps
//first argument is what is at my store,
//second is how i change whats at my store (update store)
export default connect(mapStateToProps, {initStocks})(StockContainer);

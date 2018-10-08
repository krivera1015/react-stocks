import React,{Fragment} from 'react'
import {connect} from 'react-redux';
import {buyStock} from '../redux/actionCreator'

const Stock = ({stock, buyStock}) => (
  <Fragment>

    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{
            //Company Name
            stock.name
          }</h5>
        <p className="card-text">
            
            {stock.ticker} : {stock.price}
          </p>
        <button className="btn btn-primary" onClick={() => buyStock(stock)}>Buy Stock</button>
      </div>
    </div>


  </Fragment>
);

export default connect(null, {buyStock})(Stock)

import React,{Fragment} from 'react'

const Stock = ({stock}) => (
  <Fragment>
    <li class="list-group-item">
      {stock.name} : {stock.price}
    </li>
  </Fragment>
);

export default Stock

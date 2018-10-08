import React, { Component, Fragment } from 'react';
import PortfolioStock from '../components/PortfolioStock'
import {connect} from 'react-redux'
class PortfolioContainer extends Component {

  render() {
    return (
      <Fragment>
        <ul className="list-group">
          <h2>My Portfolio</h2>
          {
            this.props.portfolioStocks.map( stock => <PortfolioStock stock={stock} />)
            //render your portfolio stocks here
          }
        </ul>
      </Fragment>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    portfolioStocks: state.portfolioStocks
  }
} 

export default connect(mapStateToProps)(PortfolioContainer);

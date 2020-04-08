import React, { Component } from 'react';
import { buy_apple } from './xyz'
import { connect } from 'react-redux'
class appleContainer extends Component {
    render(props) {
        return (
            <div>
                
                    <h1>No of apples: {this.props.no_of_apples}</h1>
                    <button onClick={this.props.buyapple}>Click to buy apple</button>
                
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return {
        no_of_apples: state.no_of_apples
    }
}
const mapDispatchToProps = dispatch => {
    return {
        buyapple: () => dispatch(buy_apple())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(appleContainer);

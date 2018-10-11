import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ShoppingCartRow from './ShoppingCartRow';
import Header from '../Header';
import Footer from './'

class ShoppingCartList extends Component{
    constructor(props){
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    componetDidMount(){
        this.props.userActions.fetchUser(this.props.authenticated);
    }
    componetDidUdpate(prevProps, prevState, snapshot){
        if(this.props.user !== prevProps.user) {
          
        }
    }
    onClick(e) {
      e.preventDefault();
      const array = this.props.user.cart;
          array.push(this.props.post._id);
          this.props.userActions.udpateUser(_id, token, array, () => {
            
          });
    }
    render() {
      return (
        <div>
          <button onClick={this.onClick}></button>
        </div>
      )
    }
}

function mapToStateToProps(state) {
    return {
        user: state.user,
        autauthenticated: state.auth.autauthenticated
    };
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(UserActions, dispatch)
    };
}

export default connect(mapToStateToProps, mapDispatchToProps)(ShoppingCartList);
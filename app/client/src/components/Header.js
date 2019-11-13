import React, {Component} from 'react';
import {connect} from 'react-redux';

class Header extends Component{

    renderContent(){
        console.log(this.props.auth);
        switch(this.props.auth){
            case null://do not know what is happening
                return;
            case false:// Im not in
                return (
                    <li><a href='/auth/google'>Login With Google</a></li>
                );
            default:// Im in
               return (
                    <li><a href='/api/logout'>Logout</a></li>
                );
        }
    }

    render(){
        console.log(this.props);
        return(
            <nav >
                <div className="nav-wrapper" style={{backgroundColor:'#D3789D'}}>
                    <a href="#" className="left brand-logo">Emaily</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({auth}){//deconstruct to get auth property
    return {auth}; //SET key-value pair, same variable
}

export default connect() (Header);
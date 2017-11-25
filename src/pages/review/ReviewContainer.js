import React, {Component} from 'react';
import {connect} from 'react-redux';
//Import css
import './Review.css';

import {Link} from 'react-router-dom';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
      this.props.logic('REVIEW_TRANSLATION');
    }

    render() {
        return (
            <div>
                <p>Word</p>
                <p>Translation</p>
                <button>Approve</button>
                <button>Reject</button>
            </div>
        )
    }

}


function mapStateToProps(store) {
    return {
        state: store.review
    };
}

export default connect(mapStateToProps, {
    logic: (type, payload)=>{
        return {type, payload}
    }
})(LoginContainer);
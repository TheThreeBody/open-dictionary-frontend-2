import React, {Component} from 'react';
import {connect} from 'react-redux';
//Import css
import './Home.css';
//Import assets
import logo from './assets/logo.svg';

import {Link} from 'react-router-dom';

export class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.props.logic("GET_DATA_REQUEST", {})
    }

    render() {
        return (
            <div class = "">
              <header>
                  <h1 class = "page-name"> Open Dictionary

                  </h1>
              </header>
              <div class="container-ui">
                <div class="contain-search-bar">
                  <h1 id="search-bar-label">Type in Hanzi</h1>
                  <div class="search-bar-div">
                    <input placeholder="你好！" type="text" class="search-bar-itself"></input>
                    <div class="contain-img-search">
                      <img src="" id="img-search"></img>
                    </div>
                  </div>
                  <button class="submit-button">Submit</button>
                </div>
                <div class="contain-translation-results">
                  <h1>Translations</h1>
                </div>
              </div>
            </div>
        )
    }
}

// Retrieve data from store as props
function mapStateToProps(store) {
    return {
        home: store.home
    };
}

export default connect(mapStateToProps, {
    logic: (type, payload)=>{
        return {type, payload}
    }
})(HomeContainer);

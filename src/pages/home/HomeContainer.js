import React, {Component} from 'react';
import {connect} from 'react-redux';
//Import css
import './Home.css';
//Import assets
import {searchWords} from "../../utils/network"

export class HomeContainer extends Component {

    state= {
        word:'',
        loading:false,
        wordTranslate:[],
    }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.logic("GET_DATA_REQUEST", {})
    }


    search = (e)=> {
        if (!this.input.value) {
            return
        }

        e.preventDefault()

        this.setState(() => ({loading: true}))

        searchWords({hanzi:this.input.value})
            .then((s) => this.setState(() => ({
                wordTranslate:s.data.data.allApprovedTransaltions.nodes,
                loading: false,
        })))
    }

    render(){

        // this.state.wordTranslate=[{"id":544,"hanzi":"好","pinyin":"hǎo","createdAt":"2017-11-25T12:05:35.188483"}]

        const Translate = this.state.wordTranslate.map((key) => {
            return (
                <li class="review-words-item">
                    <ul class="within-item">
                        <li>
                            <div class="contain-items-in-list contain-word">
                                <p class="text-within-item">Word: <b class="actual-word">{key.hanzi}</b></p >
                            </div>
                        </li>
                        <li>
                            <div class="contain-items-in-list contain-translation">
                                <p class="text-within-item">Translation: <b class="actual-word">{key.english}</b></p >
                            </div>
                        </li>
                    </ul>
                </li>   )
        })

        return (
            <div class = "">
              <header>
                  <img class="big-header-logo" src="/open_logo.png"/>
              </header>
              <div class="container-ui">
                <div class="contain-search-bar">
                  <h1 id="search-bar-label">Type in Hanzi</h1>
                  <div class="search-bar-div">
                      <input
                          className='search-bar-itself'
                          type='text'
                          placeholder="你好！"
                          ref={(input) => this.input = input}
                      />
                    <div class="contain-img-search">
                      <img src="" id="img-search"></img>
                    </div>

                  </div>
                  <button class="submit-button" onClick={this.search}>Submit</button>
                </div>
                <div class="contain-translation-results">
                    <h1 >Translations</h1>
                    {Translate}
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

import React, {Component} from 'react';
import {connect} from 'react-redux';
//Import css
import './Addword.css';
//Import assets
import {Link} from 'react-router-dom';

export class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        console.log(this.props);
        // this.props.dispatch({type: 'GET_DATA_REQUEST'})
        // this.props.dispatch(()=>{
        //     return {
        //         type : "GET_DATA_REQUEST",
        //         payload: {

        //         }
        //     }
        // })
        // this.props.logic("GET_DATA_REQUEST", {})
    }

    _submit() {
      const { hanzi, pinyin, translation } = this.props.state;
      this.props.logic('ADDWORD_TRANSLATION', {
        hanzi,
        pinyin,
        translation,
      })
    }

    _onChangeHanzi(evt) {
      this.props.logic('ADDWORD_SET_STATE', {
        hanzi: evt.target.value
      })
    }

    _onChangePinyin(evt) {
      this.props.logic('ADDWORD_SET_STATE', {
        pinyin: evt.target.value
      })
    }

    _onChangeTranslation(evt) {
      this.props.logic('ADDWORD_SET_STATE', {
        translation: evt.target.value
      })
    }

    render() {
        // console.log(this.props.home);
        const { hanzi, pinyin, translation } = this.props.state;
        return (
            <div className="">
              <div class="contain">

                <div class="contain-form">
                  <h1 class="form-label">Add a new word!</h1>
                  <h3 class="form-sub-label">We appreciate your help in contributing to this cause.</h3>
                  <div  class="form-class">
                    <input class="input-elements input-text-style" value={hanzi} onChange={this._onChangeHanzi.bind(this)} type="text" placeholder={'hanzi'} name="中文"/>
                    {/*<input class="input-elements input-text-style" value={pinyin} onChange={this._onChangePinyin.bind(this)} type="text" placeholder={'pinyin'} name="pinyin"/>*/}
                    <input class="input-elements input-text-style" value={translation} onChange={this._onChangeTranslation.bind(this)} type="text" placeholder={'translation'} name="English"/>
                    <button class="input-elements input-submit-button" onClick={this._submit.bind(this)}>{'Submit'}</button>
                  </div>
                </div>
              </div>
            </div>
        )
    }
}

// Retrieve data from store as props
function mapStateToProps(store) {
    return {
        state: store.addword
    };
}

export default connect(mapStateToProps, {
    logic: (type, payload)=>{
        return {type, payload}
    }
})(HomeContainer);

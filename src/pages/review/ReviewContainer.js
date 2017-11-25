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

    _reject(translationId) {
      this.props.logic('REVIEW_REJECT', {
        translationId
      })
    }

    _approve(translationId) {
      this.props.logic('REVIEW_APPROVE', {
        translationId
      })
    }

    render() {
      console.warn(this.props.state)

      const { translations } = this.props.state;

      const translationsComponents = translations.map((translation) => {
        const { hanzi, pinyin, english, translationId } = translation;
        return (
            <li class="review-words-item">
              <ul class="within-item">
                <li>
                  <div class="contain-items-in-list contain-word">
                    <p class="text-within-item">Word: <b class="actual-word">{hanzi}</b></p>
                  </div>
                </li>
                <li>
                  <div class="contain-items-in-list contain-translation">
                    <p class="text-within-item">Translation: <b class="actual-word">{english}</b></p>
                  </div>
                </li>
                <li>
                  <div class="contain-items-in-list contain-judgement">
                    <button onClick={this._approve.bind(this, translationId)} class="judgement-buttons judge-approve-btn">Approve</button>
                    <button onClick={this._reject.bind(this, translationId)} class="judgement-buttons judge-rejected-btn">Reject</button>
                  </div>
                </li>
              </ul>
            </li>   )
      });

        return (
            <div>
              <div class="contain">
                <h1 class="main-label">Here are some words for you to review:</h1>
                <h3 class="main-sub-label">Quality assurances like these sincerely help sustain the reliability of our dictionary.</h3>
                <ul class="ul-contain-review-words">

                  { translationsComponents }

                  {/*<li class="review-words-item">
                    <ul class="within-item">
                      <li>
                        <div class="contain-items-in-list contain-word">
                          <p class="text-within-item">Word: <b class="actual-word">你好</b></p>
                        </div>
                      </li>
                      <li>
                        <div class="contain-items-in-list contain-translation">
                          <p class="text-within-item">Translation: <b class="actual-word">Hello</b></p>
                        </div>
                      </li>
                      <li>
                        <div class="contain-items-in-list contain-judgement">
                          <button class="judgement-buttons judge-approve-btn">Approve</button>
                          <button class="judgement-buttons judge-rejected-btn">Reject</button>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li class="review-words-item">
                    <ul class="within-item">
                      <li>
                        <div class="contain-items-in-list contain-word">
                          <p class="text-within-item">Word: <b class="actual-word">早上好</b></p>
                        </div>
                      </li>
                      <li>
                        <div class="contain-items-in-list contain-translation">
                          <p class="text-within-item">Translation: <b class="actual-word">Good morning</b></p>
                        </div>
                      </li>
                      <li>
                        <div class="contain-items-in-list contain-judgement">
                          <button class="judgement-buttons judge-approve-btn">Approve</button>
                          <button class="judgement-buttons judge-rejected-btn">Reject</button>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li class="review-words-item">
                    <ul class="within-item">
                      <li>
                        <div class="contain-items-in-list contain-word">
                          <p class="text-within-item">Word: <b class="actual-word">讨厌</b></p>
                        </div>
                      </li>
                      <li>
                        <div class="contain-items-in-list contain-translation">
                          <p class="text-within-item">Translation: <b class="actual-word">Love</b></p>
                        </div>
                      </li>
                      <li>
                        <div class="contain-items-in-list contain-judgement">
                          <button class="judgement-buttons judge-approve-btn">Approve</button>
                          <button class="judgement-buttons judge-rejected-btn">Reject</button>
                        </div>
                      </li>
                    </ul>
                  </li>*/}
                </ul>
              </div>
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

import React, {Component} from 'react';
import {connect} from 'react-redux';
//Import css
import './Review.css';

import {Link} from 'react-router-dom';

export default class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
              <div class="contain">
                <h1 class="main-label">Here are some words for you to review:</h1>
                <h3 class="main-sub-label">Quality assurances like these sincerely help sustain the reliability of our dictionary.</h3>
                <ul class="ul-contain-review-words">
                  <li class="review-words-item">
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
                  </li>
                </ul>
              </div>
            </div>
        )
    }

}

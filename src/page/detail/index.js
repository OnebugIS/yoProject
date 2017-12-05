import React, { Component } from 'react';
import { Scroller, Touchable } from '$yo-component';
import Header from '$component/header/index.js';
import yoHistory from '$common/history';
import './index.scss';

class DetailPage extends Component {
    render() {
        return (
            <div className="yo-flex">
                <Header title="详情页"/>
                <Scroller extraClass="flex" onScroll={() => {
                }}>
                    <Touchable onTap={() => {
                        yoHistory.goto('/')
                    }}>
                        <div className="yo-btn yo-btn-m yo-btn-light">回到首页</div>
                    </Touchable>
                    <div className="yo-list">
                        {
                            new Array(100).fill('').map((item, index) =>
                                <div className="item" key={index}>
                                    <div className="mark">详情图片 {index}:</div>
                                    <div className="flex">
                                        <Scroller.LazyImage height="100"
                                                            src={`//placeholdit.imgix.net/~text?txtsize=33&bg=666&txtclr=fff&txt=${index}&w=100&h=100`}/>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </Scroller>
            </div>
        )
    }
}

export default DetailPage;

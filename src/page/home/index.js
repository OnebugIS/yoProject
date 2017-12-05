import React, { Component } from 'react';
import { Scroller, Touchable } from '$yo-component';
import Header from '$component/header/index.js';
import yoHistory from '$common/history';
import './index.scss';

class HomePage extends Component {
    render() {
        return (
            <div className="yo-flex">
                <Header title="首页" left={false}/>
                <Scroller extraClass="flex">
                    <div className="m-content">
                        <Touchable touchClass="m-content-active" onTap={() => {
                            yoHistory.push('/list');
                        }}>
                            <div>
                                <p className="title">Hello World!</p>
                                <p className="notice">Try To Tap This Area!</p>
                            </div>
                        </Touchable>
                    </div>
                </Scroller>
            </div>
        )
    }
}

export default HomePage;

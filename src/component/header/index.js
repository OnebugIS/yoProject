import React, { Component } from 'react';
import { EnvView } from '$router';
import Touchable from '$yo-component/touchable';
import yoHistory from '$common/history';
import './index.scss';

class Header extends Component {
    render() {
        return (
            <header className="yo-header">
                <h2 className="title">{this.props.title}</h2>
                {
                    this.props.left ?
                        <Touchable touchClass="touchable-opacity" onTap={() => this.props.left.onTap()}>
                            <a className="regret yo-ico"
                               dangerouslySetInnerHTML={{ __html: this.props.left.title }}></a>
                        </Touchable> : null
                }
                {
                    this.props.right ?
                        <Touchable touchClass="touchable-opacity" onTap={() => this.props.right.onTap()}>
                            <a className={this.props.right.icon ? "affirm yo-ico" : "affirm"}>{this.props.right.title || ''}</a>
                        </Touchable> : null
                }
            </header>
        )
    }
}

Header.defaultProps = {
    title: '标题',
    left: {
        title: '&#xf07d;',
        onTap: function () {
            yoHistory.go(-1)
        }
    }
}

export default Header;

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss';
class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	article() {
		this.props.history.push('/EditArticle');
	}
	render() {
		return (
			<div className="header">
				<p className="title">首页</p>
				<p className="title" onClick={this.article.bind(this)}>
					写文章
				</p>
				<p className="iconsearch">
					<i className="iconfont iconicon_search"></i>
				</p>
			</div>
		);
	}
}
export default withRouter(Index);

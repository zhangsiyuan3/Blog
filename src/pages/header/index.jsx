import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './index.scss';
import { connect } from 'react-redux';
// import store from "../../store/index"
// const Comp = connect(...args)(Index);
class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	tohome = () => {
		this.props.history.push('/');
	};
	article = () => {
		this.props.history.push('/EditArticle');
	};
	render() {
		// console.log(Comp, '[[[');
		return (
			<div className="header">
				<p className="title" onClick={this.tohome}>
					首页
				</p>
				<p className="title" onClick={this.article}>
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

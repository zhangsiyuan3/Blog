import React, { Component } from 'react';
import './index.scss';
// import imgURL from '../../assets/image/header.jpg'
// const imgURL = require('../../assets/image/header.jpg')
class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			focusingData: [
				{
					imgUrl: 'https://jensonhui.top/usr/themes/Akina/images/feature/feature1.jpg',
					focusdata: '浅谈对 "用户体验" 的理解',
				},
				{
					imgUrl: 'https://jensonhui.top/usr/themes/Akina/images/feature/feature2.jpg',
					focusdata: 'Mac微信防撤回小助手',
				},
				{
					imgUrl: 'https://jensonhui.top/usr/themes/Akina/images/feature/feature3.jpg',
					focusdata: '为 JetBrains 系列 IDE 设置背景图片',
				},
			],
		};
	}
  componentDidMount() {}
  handleClick(){
    console.log("dianji")
  }
	render() {
		// 聚焦for循环
		const Focusing = this.state.focusingData.map((item, index) => {
			return (
				<div className="feature-img" key={index} onClick={this.handleClick.bind()}>
					<img src={item.imgUrl} />
					<p className="feature-title">{item.focusdata}</p>
				</div>
			);
		});
		// 近况
		const Recent = this.state.focusingData.map((item, index) => {
			return (
				<div className="main-content" key={index}>
					{/* 滑块 */}
					<div className="info-meta">
						<div>
							<i className="iconfont iconpinglun"></i>
							NOTHING
						</div>
						<div>
							<i className="iconfont iconchakan"></i>
							200热度
						</div>
					</div>
					{/* 内容 */}
					<div className="main-flex">
						<div className="leftImg">
							<div className="overlay">
								<i className="iconfont iconwj-wj-1"></i>
							</div>
							<img src={item.imgUrl} />
						</div>
						<div className="main-details">
							<h1 className="details-title">
								<span className="details_word">﹝TOP﹞Git常用命令总结﹝TOP﹞Git常用命令总结﹝TOP﹞Git常用命令总结</span>
								<span className="details_time">
									<i className="iconfont iconshijian"></i>
									<a>2020-1-2</a>
									<i className="iconfont icon- hotcolor"></i>
								</span>
							</h1>
							<div className="details-content">1. 项目背景(需求)为了保证数据传输的安全性，利用AES+RSA混合加密，配合后端实现数据交互加密项目环境：vue + axios2...</div>
							<div className="post-more">
								<i className="iconfont iconshenglue"></i>
							</div>
						</div>
					</div>
					{/* <p className="main-title">{item.focusdata}</p> */}
					<hr />
				</div>
			);
		});
		return (
			<div>
				{/* 头 */}
				<div className="headertop">
					<div className="centerbg">
						<div className="header_content">
							<div className="header_tou">
								<a href="">
									<img src="//q.qlogo.cn/g?b=qq&nk=1786128750&s=160" />
								</a>
							</div>
							<div className="header-info">
								<p>Just do it.</p>
							</div>
							<div className="top-social">
								<p>
									<a href="">
										<img src="https://jensonhui.top/usr/themes/Akina/images/sina.png" />
									</a>
								</p>
								<p>
									<a href="">
										<img src="https://jensonhui.top/usr/themes/Akina/images/github.png" />
									</a>
								</p>
								<p>
									<a href="">
										<img src="https://jensonhui.top/usr/themes/Akina/images/bilibili.png" />
									</a>
								</p>
							</div>
						</div>
						<div className="slant-left"></div>
						<div className="slant-right"></div>
					</div>
				</div>
				{/* 内容 */}
				<div id="content" className="site_content">
					<div className="notice">
						<i className="iconfont iconyumao"></i>：<div className="notice-content">你要悄悄拔尖, 然后惊艳所有人 !</div>
					</div>
					<div className="top-feature">
						<h1 className="fes-title">聚焦</h1>
						<div className="feature-content">
							{/* 聚焦 */}
							{Focusing}
						</div>
					</div>

					{/* 内容 */}
					<div className="content-area">
						<div className="main">
							<h1 className="main-title">近况</h1>
							{Recent}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Index;

// ReactDom.render(<App />,document.getElementById('root'));

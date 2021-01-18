import React, { Component } from 'react'
import './index.scss'
// import imgURL from '../../assets/image/header.jpg'
// const imgURL = require('../../assets/image/header.jpg')
class Index extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	componentDidMount() {}
	render() {
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
						<i className="iconfont iconyumao"></i>：
						<div className="notice-content">
							你要悄悄拔尖, 然后惊艳所有人 !
						</div>
					</div>
					<div className="top-feature">
						<h1 className="fes-title">聚焦</h1>
						<div className="feature-content">
							<div className="feature-img">
								<img src="https://jensonhui.top/usr/themes/Akina/images/feature/feature1.jpg" />
								<p className="feature-title">
									浅谈对 "用户体验" 的理解
								</p>
							</div>
							<div className="feature-img">
								<img src="https://jensonhui.top/usr/themes/Akina/images/feature/feature2.jpg" />
								<p className="feature-title">
									Mac微信防撤回小助手
								</p>
							</div>
							<div className="feature-img">
								<img src="https://jensonhui.top/usr/themes/Akina/images/feature/feature3.jpg" />
								<p className="feature-title">
									为 JetBrains 系列 IDE 设置背景图片
								</p>
							</div>
						</div>
					</div>

					{/* 内容 */}
					<div className="content-area">
						<div className="main">
							<h1 className="main-title">近况</h1>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Index

// ReactDom.render(<App />,document.getElementById('root'));

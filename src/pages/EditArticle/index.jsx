import React, { Component } from 'react';
import 'braft-editor/dist/index.css';
import './index.scss';
import BraftEditor from 'braft-editor';
import store from '../../reducers/index';
class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editorState: BraftEditor.createEditorState(null),
			inputFocus: false,
			Title: '', //标题
		};
	}
	handleChange = (editorState) => {
		// console.log(JSON.parse(editorState.toRAW().blocks[0].text));
		this.setState({ editorState });
	};
	inputOnFocus = () => {
		// console.log('聚焦');
		this.setState({
			inputFocus: true,
		});
	};
	inputOnBlur = () => {
		// console.log('失焦');
		this.setState({
			inputFocus: false,
		});
	};
	preservation = () => {
		let ArticleList = store.getState().getArticleList;
		ArticleList.push({
			articleTitle: this.state.Title,
			article: this.state.editorState.toHTML(),
			articleText: JSON.parse(this.state.editorState.toRAW()).blocks[0].text,
			id: Math.floor(Math.random() * (999 - 1 + 1) + 1),
		});
		store.dispatch({
			type: 'ARTICLE',
			text: ArticleList,
		});
               
		console.log('保存按钮', store.getState().getArticleList);
	};
	inputValChange = (e) => {
		this.setState({
			Title: e.target.value,
		});
	};
	render() {
		const { editorState } = this.state;
		return (
			<div className="box">
				<div className="my-component">
					<div className={this.state.inputFocus == true ? 'title' : 'title'}>
						{/* <label htmlFor="">标题</label> */}
						{/* <i className="iconfont iconicon_search"></i> */}
						<input type="text" value={this.state.Title} onChange={this.inputValChange} placeholder="写个标题吧！" onBlur={this.inputOnBlur} onFocus={this.inputOnFocus} />
						<div className="buttombg">
							<div className="sim-button button5" onClick={this.preservation}>
								保存
							</div>
						</div>
					</div>
					<BraftEditor value={editorState} onChange={this.handleChange} onSave={this.preservation} />
				</div>
			</div>
		);
	}
}
export default Index;

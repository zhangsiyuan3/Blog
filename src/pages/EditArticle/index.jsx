import React, { Component } from 'react';
import 'braft-editor/dist/index.css';
import './index.scss';
import BraftEditor from 'braft-editor';
class Index extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editorState: BraftEditor.createEditorState(null),
		};
	}
	handleChange = (editorState) => {
		console.log(editorState.toHTML());
		this.setState({ editorState });
	};
	render() {
		const { editorState } = this.state;
		return (
			<div className="my-component">
				<BraftEditor value={editorState} onChange={this.handleChange} />
			</div>
		);
	}
}
export default Index;

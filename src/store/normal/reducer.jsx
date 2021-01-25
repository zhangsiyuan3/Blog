const defaultState = {
	RichText: '111',//富文本
};

export default (state = defaultState, action) => {
	//就是一个方法函数
	if (action.type === 'RICHTEXT') { //dispath
    let newState = { ...state };
		newState.inputValue = action.text;
		return newState;
	} // 触发dispatch 事件，这里可以修改数据，删除。

	return state;
};

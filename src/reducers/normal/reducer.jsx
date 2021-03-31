const defaultState = {
	RichText: '', //富文本
	getArticleList: [], //文章列表
};

export default (state = defaultState, action) => {
	//就是一个方法函数
	if (action.type === 'RICHTEXT') {
		//dispath
		let newState = { ...state };
		newState.RichText = action.RichText;
		return newState;
	} // 触发dispatch 事件，这里可以修改数据，删除。
	if (action.type === 'ARTICLE') {
		//dispath
		let newState = { ...state };
		newState.getArticleList = action.getArticleList;
		return newState;
	}

	return state;
};
// const reducer = (state, action) => {
//   if (!state) return {
//     themgetArticleListeColor: []
//   }
//   switch (action.type) {
//     case 'ARTICLE':
//       return { ...state, getArticleList: action.getArticleList }
//     default:
//       return state
//   }
// }
// export default reducer

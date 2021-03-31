import React, { Component } from 'react';
import './assets/scss/App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { PersistGate } from 'redux-persist/lib/integration/react';
import store, { persistor } from './reducers/index';
import { Provider } from 'react-redux';
import router from './router/routeMap.jsx';
import Header from './pages/header/index.jsx';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			// 所有子组件都可以获取到store
			<Provider store={store}>
				{/* 数据持久化 */}
				<PersistGate loading={null} persistor={persistor}>
					<Router>
						<Header></Header>
						{router.map((router, index) => {
							// console.log(router)
							if (router.exact) {//路由匹配严格
								return <Route exact key={index} path={router.path} render={(props) => <router.component {...props} routes={router.routes} />} />;
							} else {
								return <Route key={index} path={router.path} render={(props) => <router.component {...props} routes={router.routes} />} />;
							}
						})}
					</Router>
				</PersistGate>
			</Provider>
		);
	}
}

export default App;

// ReactDom.render(<App />,document.getElementById('root'));

import { createStore } from 'redux'; // 引入createStore方法
import { persistStore, persistReducer } from 'redux-persist'; //页面持久化
import storageSession from 'redux-persist/lib/storage/session';
import reducer from './normal/reducer';
// const store = createStore(
// 	reducer
// 	// ···新的文件，记得引入哦
// ); // 创建数据存储仓库

const storageConfig = {
	key: 'root', // 必须有的
	storage: storageSession, // 缓存机制
	blacklist: ['name', 'age'], // reducer 里不持久化的数据,除此外均为持久化数据
};
const myPersistReducer = persistReducer(storageConfig, reducer);
const store = createStore(myPersistReducer); // 创建数据存储仓库
export const persistor = persistStore(store);
export default store; //暴露出去

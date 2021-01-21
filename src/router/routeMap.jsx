import Home from '../pages/home/index.jsx'
import EditArticle from '../pages/EditArticle/index.jsx'

const routes = [
	{
    path: '/',
    name:'首页',
		component: Home,
		exact: true,
	},
	{
		path: '/EditArticle',
    name:'富文本',
		component: EditArticle,
		exact: true,
	},
	// {
	// 	path: '/new',
	// 	component: New,
	// 	routes: [
	// 		{
	// 			path: '/new/',
	// 			component: NewContent,
	// 		},
	// 		{
	// 			path: '/new/newList',
	// 			component: NewList,
	// 		},
	// 	],
	// },
]

export default routes

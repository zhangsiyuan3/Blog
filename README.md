 ## 关于路由
  1. 封装了类似vue的router.js,创建新的路由可在 ***src/router/routerMap.jsx*** 文件中添加
  2. 如果页面需要跳转理由，需要用withRouter包裹暴露出去的组件名 就是这个亚子 ***withRouter(组件名)***

## 关于store 
  1. 有新的模块需要就在 ***src/store/normal*** 文件中创建新的文件夹 暴露出去 ，记得在 ***src/store/index.jsx***中引入哦
  2. 定义一个type 在修改的时候传入对应type 进行修改
  ```
  store.dispatch({
              type: "CHGNAME",
              text: "王五",//将type为CHGNAME的修改为王五
            });
  ```
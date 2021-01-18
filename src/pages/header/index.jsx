import React,{Component} from 'react';
import "./index.scss"
class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="header">
                <p className='title'>首页</p>
                <p className='iconsearch'><i className='iconfont iconicon_search'></i></p>
            </div>
        )
    }
}
export default Index
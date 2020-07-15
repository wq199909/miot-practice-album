import React, { Component } from 'react'
import Magnifier from '../Magnifier/Magnifier'
import './PopUpBox.css'
export default class PopUpBox extends Component {
    state = {
        magnifierShow: false
    }
    static defaultProps = {
        // 资源地址
        // src: 'https://t8.baidu.com/it/u=2247852322,986532796&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1595319684&t=ef2636e38fd00d89bef44d3cac40d4bf',
        // 类型 image/video
        // type: 'image'
        src: 'https://www.w3school.com.cn/i/movie.ogg',
        type: 'video',
        // 是否显示
        show: false,
        // 回调函数，改变展示状态
        onShow: () => { }
    }

    componentDidMount() {
        let control = false;
        // 监听ctrl+m事件
        window.onkeydown = (e) => {
            // console.log(e)
            if (e.key === 'Control') control = true;
            else if (control && (e.key === 'm' || e.key === 'M')) {
                this.changeMagShow();
                control = false;
            } else {
                control = false;
            }
        }
    }

    // 改变magnifierShow值
    changeMagShow() {
        this.setState({
            magnifierShow: !this.state.magnifierShow
        })
    }
    render() {
        let content;
        if (this.props.type === 'image') {
            content = <img
                src={this.props.src}
                alt="图片展示"
                className="popUpBox-content"
            />
        } else {
            content = <video
                src={this.props.src}
                autoPlay
                loop
                className="popUpBox-content"
            />
        }
        return (
            <div
                onClick={() => {
                    this.props.onShow && this.props.onShow(false);
                }}
                className={`${this.props.show ? '' : 'popUpBox--unShow'} popUpBox`}
            >
                {content}
                <Magnifier show={this.state.magnifierShow} src={this.props.src} />
            </div>
        )
    }
}

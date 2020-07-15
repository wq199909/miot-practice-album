import React, { Component } from 'react'
import "./Magnifier.css"
export default class Magnifier extends Component {
    state = {
        // 鼠标方块left
        mouseLeft: 0,
        // 鼠标方块top
        mouseTop: 0,
        // 展示方块位置
        pos: 'left',
        // 鼠标到图片左上角的偏移量
        x: 0,
        y: 0,
        // 图片的宽高
        width: 0,
        height: 0
    }
    static defaultProps = {
        // 鼠标方块的大小
        size: 40,
        // 是否显示
        show: false,
        // 图片资源
        src: '',
        // 放大的倍数
        multiple: 3
    }
    componentDidMount() {
        document.onmousemove = (e) => {
            // 鼠标方块在左侧，展示就在右侧
            // ---------右侧----------左侧
            if (e.clientX > window.innerWidth / 2) {
                this.setState({
                    pos: 'left'
                })
            } else {
                this.setState({
                    pos: 'right'
                })
            }
            let left, top;
            // 得到img元素以确定宽高
            let img = document.getElementsByClassName('popUpBox-content')[0];
            if (img) {
                left = (window.innerWidth - img.width) / 2;
                top = (window.innerHeight - img.height) / 2;
            }
            this.setState({
                height: img.height,
                mouseLeft: e.clientX - this.props.size / 2,
                mouseTop: e.clientY - this.props.size / 2,
                x: e.clientX - left - this.props.size / 2,
                y: e.clientY - top - this.props.size / 2,
                width: img.width
            })
        }
    }
    render() {
        return (
            <div className={`magnifier ${this.props.show ? '' : 'magnifier--unshow'}`}>
                <div
                    className="magnifier-mouse"
                    style={{
                        height: `${this.props.size}px`,
                        width: `${this.props.size}px`,
                        left: `${this.state.mouseLeft}px`,
                        top: `${this.state.mouseTop}px`
                    }}
                ></div>
                <div
                    className={`magnifier-show magnifier-show--${this.state.pos}`}
                    style={{
                        width: `${this.props.size * this.props.multiple}px`,
                        height: `${this.props.size * this.props.multiple}px`
                    }}>
                    <img
                        src={this.props.src}
                        alt="图片"
                        style={{
                            width: `${this.state.width * this.props.multiple}px`,
                            height: `${this.state.height * this.props.multiple}px`,
                            top: `-${this.state.x * this.props.multiple}px`,
                            left: `-${this.state.y * this.props.multiple}px`,
                            position: "absolute"
                        }} />
                </div>
            </div>
        )
    }
}

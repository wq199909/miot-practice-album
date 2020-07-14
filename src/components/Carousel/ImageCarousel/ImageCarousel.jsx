import React, { Component } from 'react'
import './ImageCarousel.css'
class ImageCarousel extends Component {
    state = {
        // 自动轮播计时器
        timer: null,
        // 移动的计时器
        moveTimer: null,
        // 位置
        left: 0,
        // 当前显示第几张图片
        imgIndex: 0
    }
    static defaultProps = {
        // 轮播图高度
        height: 100,
        // 轮播图宽度
        width: 200,
        // 图片资源
        src: [
            'https://t8.baidu.com/it/u=2247852322,986532796&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1595319684&t=ef2636e38fd00d89bef44d3cac40d4bf',
            'https://t7.baidu.com/it/u=3204887199,3790688592&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1595319684&t=4ec22068ee0b09ce18c49c78ff7864d3',
            'https://t9.baidu.com/it/u=3363001160,1163944807&fm=79&app=86&size=h300&n=0&g=4n&f=jpeg?sec=1595319684&t=2a3bac97adb6177923e4bcb82fb9858f'
        ],
        // 计时器时间
        interval: 2000,
        // 移动的次数
        times: 10
    }
    /**
     * 组件挂载完成设置计时器
     */
    componentDidMount() {
        console.log(this.props)
        this.state.timer = setInterval(() => {
            this.move(this.state.imgIndex + 1);
        }, this.props.interval);
    }
    /**
     * 组件销毁之前清除计时器
     */
    componentWillUnmount() {
        this.state.timer && clearInterval(this.state.timer)
        this.state.moveTimer && clearInterval(this.state.moveTimer)
    }
    move(target) {
        // 正在移动，向右直接return ，向左清楚计时器
        if (this.state.moveTimer) {
            if (target > this.state.imgIndex) {
                return
            } else {
                clearInterval(this.state.moveTimer);
            }
        }
        // 移动速度
        let speed = ((- target * this.props.width) - this.state.left) / this.props.times;
        // 移动次数
        let i = 0;
        this.state.moveTimer = setInterval(() => {
            if (++i === this.props.times) {
                clearInterval(this.state.moveTimer);
                this.setState({
                    moveTimer: null,
                    imgIndex: target,
                    left: - target * this.props.width
                })
                if (target === this.props.src.length) {
                    this.setState({
                        imgIndex: 0,
                        left: 0
                    })
                }
            } else {
                this.setState({
                    left: this.state.left + speed
                })
            }
        }, 1000 / this.props.times)
    }
    render() {
        // 图片最后加上第一张图片，用来控制无缝轮播
        let src = Object.assign([], this.props.src)
        src.push(this.props.src[0])
        // 将图片地址数组映射成jsx数组
        let images = src.map((e, i) => (
            <li
                className="imageCarousel-carouselBox-imgBox"
                style={{
                    width: `${this.props.width}px`,
                    height: `${this.props.height}px`
                }}
                key={i}>
                <img
                    src={e}
                    alt="轮播图"
                    width={this.props.width}
                    height={this.props.height}
                />
            </li>
        ));
        // 索引点的生成
        let indexArr = [];
        for (let i = 0; i < this.props.src.length; i++) {
            indexArr.push(<li
                className={this.state.imgIndex===i?'imageCarousel-index--onshow':''}
                key={i}
                onClick={() => {
                    this.move(i);
                }}
            ></li>)
        }
        // 整个图片排成一行，外侧用元素包裹，移动图片只要移动父元素即可
        return (
            <div
                className="imageCarousel"
                style={{
                    width: `${this.props.width}px`,
                    height: `${this.props.height}px`
                }}>
                {/* 图片 */}
                <ul
                    className="imageCarousel-carouselBox"
                    style={{
                        width: `${this.props.width * src.length}px`,
                        height: `${this.props.height}`,
                        left: `${this.state.left}px`
                    }}
                >
                    {images}
                </ul>
                {/* 左右按钮 */}
                <div className="imageCarousel-leftBtn" onClick={e => {
                    let target = this.state.imgIndex - 1;
                    // 移动到最左边
                    if (target === -1) {
                        target = this.props.src.length - 1;
                        this.setState({
                            left: -(target + 1) * this.props.width
                        }, () => {
                            this.move(target)
                        })
                    } else {
                        this.move(target)
                    }
                }}>&lt;</div>
                <div className="imageCarousel-rightBtn" onClick={e => { this.move(this.state.imgIndex + 1) }}>&gt;</div>
                {/* 索引点 */}
                <ul className="imageCarousel-index">
                    {indexArr}
                </ul>
            </div>
        )
    }
}

export default ImageCarousel
import React, { Component } from 'react'
import img2base64 from '../../../tools/loadImg'
import "./EqualWidthWaterFall.css"
export default class EqualWidthWaterFall extends Component {
    state = {
        // 整体区域宽度
        parentWidth: window.innerWidth,
        // 高度集合
        heights: {}
    }
    static defaultProps = {
        // 宽度值
        width: 200,
        // 图片资源
        src: [
            'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
            'http://a0.att.hudong.com/56/12/01300000164151121576126282411.jpg',
            'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg',
            'http://a2.att.hudong.com/48/69/01300000169041121120698749544.jpg',
            'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
            'http://a0.att.hudong.com/56/12/01300000164151121576126282411.jpg',
            'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg',
            'http://a2.att.hudong.com/48/69/01300000169041121120698749544.jpg',
            'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
            'http://a0.att.hudong.com/56/12/01300000164151121576126282411.jpg',
            'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg',
            'http://a2.att.hudong.com/48/69/01300000169041121120698749544.jpg',
            'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
            'http://a0.att.hudong.com/56/12/01300000164151121576126282411.jpg',
            'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg',
            'http://a2.att.hudong.com/48/69/01300000169041121120698749544.jpg',
            'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
            'http://a0.att.hudong.com/56/12/01300000164151121576126282411.jpg',
            'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg',
            'http://a2.att.hudong.com/48/69/01300000169041121120698749544.jpg',
            'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
            'http://a0.att.hudong.com/56/12/01300000164151121576126282411.jpg',
            'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg',
            'http://a2.att.hudong.com/48/69/01300000169041121120698749544.jpg',
            'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
            'http://a0.att.hudong.com/56/12/01300000164151121576126282411.jpg',
            'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg',
            'http://a2.att.hudong.com/48/69/01300000169041121120698749544.jpg',
            'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
            'http://a0.att.hudong.com/56/12/01300000164151121576126282411.jpg',
            'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg',
            'http://a2.att.hudong.com/48/69/01300000169041121120698749544.jpg',
            'http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg',
            'http://a0.att.hudong.com/56/12/01300000164151121576126282411.jpg',
            'http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg',
            'http://a2.att.hudong.com/48/69/01300000169041121120698749544.jpg',
        ],
        target: [
            ['http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg', 'image'],
            ['http://a0.att.hudong.com/56/12/01300000164151121576126282411.jpg', 'image'],
            ['http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg', 'image'],
            ['http://a2.att.hudong.com/48/69/01300000169041121120698749544.jpg', 'image'],
            ['http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg', 'image'],
            ['http://a0.att.hudong.com/56/12/01300000164151121576126282411.jpg', 'image'],
            ['http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg', 'image'],
            ['http://a2.att.hudong.com/48/69/01300000169041121120698749544.jpg', 'image'],
            ['http://a3.att.hudong.com/14/75/01300000164186121366756803686.jpg', 'image'],
            ['http://a0.att.hudong.com/56/12/01300000164151121576126282411.jpg', 'image'],
            ['http://a1.att.hudong.com/05/00/01300000194285122188000535877.jpg', 'image'],
            ['https://www.w3school.com.cn/i/movie.ogg', 'video']
        ],
        onShow: ()=>{}
    }
    componentDidMount() {
        // 存储图片高度
        let helperObj = [];

        (async () => {
            for (let i in this.props.src) {
                let url = this.props.src[i];
                await img2base64(url).then((v) => {
                    // 计算图片显示的高度
                    helperObj[i] = v[1] / v[0] * this.props.width;
                })
            }
        })().then(() => {
            // 所有图片加载完成更新state
            this.setState({
                heights: helperObj
            })
        });
        // 监听窗口变化
        window.addEventListener('resize', () => {
            this.setState({
                parentWidth: window.innerWidth
            })
        })
    }
    /**
     * 找到数组中最小值及其索引
     * @param {*} arr 
     */
    findMin(arr) {
        let index = 0, minValue = arr[0];
        for (let i in arr) {
            if (arr[i] < minValue) {
                index = i;
                minValue = arr[i];
            }
        }
        return [index, minValue]
    }
    render() {
        // 坐标数组
        let arr = new Array(Math.floor((this.state.parentWidth) / (this.props.width + 10))).fill(0);
        // 映射得到图片jsx数组
        let imgs = this.props.src.map((e, i) => {
            // 图片没有全部加载
            if (this.state.heights.length !== this.props.src.length) return null;
            let [index, minHeight] = this.findMin(arr);
            arr[index] = minHeight + this.state.heights[i] + 10;
            return <div
                className={`equalWidthWaterFall-imgBox equalWidthWaterFall-imgBox--i`}
                key={i}
                onClick = {()=>{
                    this.props.onShow(this.props.target[i]);
                }}
                style={{
                    backgroundImage: `url(${e})`,
                    backgroundSize: "100%",
                    backgroundRepeat: "no-repeat",
                    position: "absolute",
                    height: `${this.state.heights[i]}px`,
                    width: `${this.props.width}px`,
                    left: `${(this.props.width + 10) * index + 5}px`,
                    top: `${minHeight + 10}px`
                }}></div>
        })
        return (
            <div className="equalWidthWaterFall">
                {imgs}
            </div>
        )
    }
}

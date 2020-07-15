import React, { Component } from 'react'
import './EqualHeightWaterFall.css'
class EqualHeightWaterFall extends Component {
    state = {
        parentWidth: window.innerWidth
    }
    static defaultProps = {
        // 宽度值
        height: 200,
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
            'http://a2.att.hudong.com/48/69/01300000169041121120698749544.jpg'
        ]
    }
    componentDidMount(){
        // 监听页面大小改变
        window.addEventListener('resize', ()=>{
            this.setState({
                parentWidth: window.innerWidth
            })
        })
    }
    render() {
        // 得到img jsx数组
        let imgs = this.props.src.map((e, i)=><img 
            src={e} 
            alt="瀑布流" 
            key={i} 
            style={{
                height: `${this.props.height}px`
            }}
        />)
        return (
            <div 
                className="equalHeightWaterFall"
                style={{
                    width: `${this.props.parentWidth}px`
                }}
            >
                {imgs}
            </div>
        )
    }
}
export default EqualHeightWaterFall
import React, { Component } from 'react'
import {EqualWidthWaterFall, PopUpBox, ImageCarousel} from '../components/index'
export default class Home extends Component {
    state = {
        src: '',
        type: 'image',
        show: false
    }
    // 改变show值
    changeShow(show) {
        this.setState({
            show: show
        })
    }
    render() {
        return (
            <div className="Home">
                
                <ImageCarousel width={400} height={200} />
                {/* <EqualHeightWaterFall /> */}
                <EqualWidthWaterFall onShow={(target) => {
                    this.setState({
                        src: target[0],
                        type: target[1]
                    })
                    this.changeShow(true)
                }} />

                <PopUpBox src={this.state.src} type={this.state.type} show={this.state.show} onShow={this.changeShow.bind(this)} />
            </div>
        );
    }
}

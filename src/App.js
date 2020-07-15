import React from 'react';
import './App.css';
// import ImageCarousel from './components/Carousel/ImageCarousel'
// import {EqualHeightWaterFall, EqualWidthWaterFall} from './components/WaterFall'
// import WaterFall from './components/WaterFall'
// import PopUpBox from './components/PopUpBox/PopUpBox'
import Home from './pages/Home'
function App() {
    return (
        <div className="App">
            {/* <ImageCarousel width={400} height={200} /> */}
            {/* <EqualHeightWaterFall /> */}
            {/* <WaterFall.EqualWidthWaterFall onClick={(target) => {
                this.setState({
                    src: target[0],
                    type: target[1]
                })
            }} />
            <PopUpBox src={this.state.src} type={this.state.type} show={this.state.show} onShow={() => { }} /> */}
            <Home />
        </div>
    );
}

export default App;

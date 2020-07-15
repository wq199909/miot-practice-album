import React from 'react';
import './App.css';
// import ImageCarousel from './components/Carousel/ImageCarousel'
// import {EqualHeightWaterFall, EqualWidthWaterFall} from './components/WaterFall'
import WaterFall from './components/WaterFall'
function App() {
    return (
        <div className="App">
            {/* <ImageCarousel width={400} height={200} /> */}
            {/* <EqualHeightWaterFall /> */}
            <WaterFall.EqualWidthWaterFall />
        </div>
    );
}

export default App;

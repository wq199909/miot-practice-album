import React from 'react';
import './App.css';
// import ImageCarousel from './components/Carousel/ImageCarousel'
import EqualHeightWaterFall from './components/WaterFall/EqualHeightWaterFall/EqualHeightWaterFall'
function App() {
    return (
        <div className="App">
            {/* <ImageCarousel width={400} height={200} /> */}
            <EqualHeightWaterFall />
        </div>
    );
}

export default App;

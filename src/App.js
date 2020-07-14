import React from 'react';
import './App.css';
import ImageCarousel from './components/Carousel/ImageCarousel/ImageCarousel'
function App() {
    return (
        <div className="App">
            <ImageCarousel width={400} height={200} />
        </div>
    );
}

export default App;

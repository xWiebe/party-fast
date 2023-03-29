import React from 'react';
import FestivalCard from '../components/Card/FestivalCard';
import './styles/Feesten.css'

const Bussen = () => {
  const handleButtonClick = () => {
    console.log('Button clicked!');
  }

  return (
    <div className="page">
      <h1>Feesten</h1>
      <FestivalCard
        title="Rebirth Festival"
        imageUrl="https://www.rebirth-festival.nl/app/uploads/2022/10/RF-2023-Artwork-Header-1920x1080px.jpg"
        date="14/04/2023 tm 16/04/2023"
        description="Let's kick off the festival season!"
        buttonText="Beschikbare bussen"
        onClick={handleButtonClick}
      />
      <FestivalCard
        title="Rebirth Festival"
        imageUrl="https://www.rebirth-festival.nl/app/uploads/2022/10/RF-2023-Artwork-Header-1920x1080px.jpg"
        date="14/04/2023 tm 16/04/2023"
        description="This is the festival card description."
        buttonText="Beschikbare bussen"
        onClick={handleButtonClick}
      />
      <FestivalCard
        title="Rebirth Festival"
        imageUrl="https://www.rebirth-festival.nl/app/uploads/2022/10/RF-2023-Artwork-Header-1920x1080px.jpg"
        date="14/04/2023 tm 16/04/2023"
        description="This is the festival card description."
        buttonText="Beschikbare bussen"
        onClick={handleButtonClick}
      />
    </div>
  );
}

export default Bussen;
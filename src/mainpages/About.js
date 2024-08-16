import React from 'react';
import Aboutherosection from '../components/about/Aboutherosection';
import BestPlace from '../components/about/BestPlace';
import FacilitiesOffer from '../components/about/FacilitiesOffer';
import GameCrafters from '../components/about/GameCrafters';
import Gaminginsidhts from '../components/about/Gaminginsidhts';
import MeetOur from '../components/about/MeetOur';
import PeopleSay from '../components/about/PeopleSay';
import BecomeApart from '../components/home/BecomeApart';
import Dreambigger from '../components/home/Dreambigger';
import JourneyPixels from '../components/pages/gallery/JourneyPixels';
import Footer from '../commoncomponets/footer/Footer';

function About() {
  return (
    <div>
      <Aboutherosection />
      <GameCrafters />
      <BestPlace />
      <FacilitiesOffer />
      <BecomeApart />
      <MeetOur />
      <Dreambigger />
      <JourneyPixels />
      <PeopleSay />
      <Gaminginsidhts />
      <Footer />
    </div>
  );
}

export default About;

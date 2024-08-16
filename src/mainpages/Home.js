import React from 'react';
import Backgroundvideo from '../components/home/Backgroundvideo';
import Matches from '../components/home/Matches';
import Digitalrealms from '../components/home/Digitalrealms';
import Facilities from '../components/home/Facilities';
import Matchschedules from '../components/home/Matchschedules';
import Diveintodiverse from '../components/home/Diveintodiverse';
import Tournament from '../components/home/Tournament';
import Mastermind from '../components/home/Mastermind';
import BecomeApart from '../components/home/BecomeApart';
import Dreambigger from '../components/home/Dreambigger';
import Customersay from '../components/home/Customersay';
import Gamingqueries from '../components/home/Gamingqueries';
import Gamingsource from '../components/home/Gamingsource';
import JourneyPixels from '../components/pages/gallery/JourneyPixels';
import Footer from '../commoncomponets/footer/Footer';

function Home() {
  return (
    <div>
        <Backgroundvideo />
        <Matches />
        <Digitalrealms />
        <Facilities />
        <Matchschedules />
        <Diveintodiverse />
        <Tournament />
        <Mastermind />
        <BecomeApart />
        <Dreambigger />
        <JourneyPixels />
        <Customersay />
        <Gamingqueries />
        <Gamingsource />
        <Footer />
    </div>
  );
}

export default Home;

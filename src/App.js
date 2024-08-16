import React from 'react';
import Home from './mainpages/Home';
import Header from './commoncomponets/header/Header';
import Footer from './commoncomponets/footer/Footer';
import About from './mainpages/About'
import Games from './mainpages/Games';
import Pricing from './mainpages/Pricing';
import Pages from './mainpages/Pages';
import { Route, Routes } from 'react-router-dom';
import BlogsAndNews from './components/pages/blogsandnews/BlogsAndNews';
import MatchSchedule from './components/pages/matchschedule/MatchSchedule';
import Testimonials from './components/pages/testimonials/Testimonials';
import Gallery from './components/pages/gallery/Gallery';
import Faq from './components/pages/faq/Faq';
import Team from './components/pages/team/Team';
import ContactUs from './components/pages/contactus/ContactUs';
import ComingSoon from './components/pages/comingsoon/ComingSoon';
import PageNotFound from './components/pages/404/PageNotFound';

function App() {
  return (
    <div>
       {/* <Header /> */}
       {/* <Home />  */}
       {/* <Games /> */}
       {/* <Pricing /> */}
       {/* <About /> */}
       {/* <Pages /> */}
       {/* <Footer /> */}

       <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Games' element={<Games/>}/>
            <Route path='/Pricing' element={<Pricing/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/MatchSchedule' element={<MatchSchedule/>}/>
            <Route path='/BlogsAndNews' element={<BlogsAndNews/>}/>
            <Route path='/Testimonials' element={<Testimonials/>}/>
            <Route path='/Gallery' element={<Gallery/>}/>
            <Route path='/Faq' element={<Faq/>}/>
            <Route path='/Team' element={<Team/>}/>
            <Route path='/ContactUs' element={<ContactUs/>}/>
            <Route path='/ComingSoon' element={<ComingSoon/>}/>
            <Route path='/PageNotFound' element={<PageNotFound/>}/>
       </Routes>
    </div>
  );  
}

export default App;

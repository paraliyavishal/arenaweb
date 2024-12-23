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
            <Route path='/games' element={<Games/>}/>
            <Route path='/pricing' element={<Pricing/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/match_schedule' element={<MatchSchedule/>}/>
            <Route path='/blogs_and_news' element={<BlogsAndNews/>}/>
            <Route path='/testimonials' element={<Testimonials/>}/>
            <Route path='/gallery' element={<Gallery/>}/>
            <Route path='/faq' element={<Faq/>}/>
            <Route path='team' element={<Team/>}/>
            <Route path='/contact_us' element={<ContactUs/>}/>
            <Route path='/coming_soon' element={<ComingSoon/>}/>
            <Route path='/page_not_found' element={<PageNotFound/>}/>
       </Routes>
    </div>
  );  
}

export default App;

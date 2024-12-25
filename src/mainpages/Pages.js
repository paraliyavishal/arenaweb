import React from "react";
import BlogsAndNews from "../components/pages/blogsandnews/BlogsAndNews";
import MatchSchedule from "../components/pages/matchschedule/MatchSchedule";
import Testimonials from "../components/pages/testimonials/Testimonials";
import Gallery from "../components/pages/gallery/Gallery";
import Faq from "../components/pages/faq/Faq";
import Team from "../components/pages/team/Team";
import ContactUs from "../components/pages/contactus/ContactUs";
import ComingSoon from "../components/pages/comingsoon/ComingSoon";
import PageNotFound from "../components/pages/404/PageNotFound";

function Pages() {
  return (
    <div>
      <BlogsAndNews />
      <MatchSchedule />
      <Testimonials />
      <Gallery />
      <Faq />
      <Team />
      <ContactUs />
      <ComingSoon />
      <PageNotFound />
    </div>
  );
}

export default Pages;

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Tutors from "../components/Tutors";
import Partner from "../components/Partner";
import Contact from "../components/Contact";

import { homeSection } from "../data/HomeSection";
import { courseSection } from "../data/CourseSection";
import { tutorSection, tutorList } from "../data/TutorSection";
import { partnersSection, parnterList } from "../data/PartnersSection";
import { contactSection } from "../data/ContactSection";

import parse from "html-react-parser";
import "/src/styles/Home.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="wrapper">
        <section id="home">
          <img src={homeSection.image} />
          <div className="kolom">{parse(homeSection.content)}</div>
        </section>

        <section id="courses">
          <div className="kolom">{parse(courseSection.content)}</div>
          <img src={courseSection.image} />
        </section>

        <section id="tutors">
          <div className="tengah">
            <div className="kolom">{parse(tutorSection.content)}</div>
            <Tutors tutorList={tutorList} />
          </div>
        </section>

        <section id="partners">
          <div className="tengah">
            <div className="kolom">{parse(partnersSection.content)}</div>
            <Partner partnerList={parnterList} />
          </div>
        </section>

        <div id="contact">
          <div className="wrapper">
            <div className="footer">
              <Contact contactList={contactSection} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;

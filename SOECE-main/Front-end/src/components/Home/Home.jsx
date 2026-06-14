import Navbar from "./Navbar";
import Intro_page from "./Intro_page";
import Description_page from "./Description_page";
import Faculty_page from "./Faculty_page";
import Our_events from "./Our_events";
import Follow_us from "./Follow_us";
import About_ending from "../About/About_ending";
import Event_academic_calendar from "./Event_academic_calendar";
import Notice from "./Notice";
import "./Home.css";


const calendarEvents = [
  {
    day: "19",
    month: "Jan",
    type: "Academic",
    title: "Semester Begins",
    description: "Start of Even Semester 2025-26, classes commence."
  },
  {
    day: "09",
    month: "Feb",
    type: "Exam",
    title: "Quiz Week 1",
    description: "First quiz week for all ECE core subjects."
  },
  {
    day: "09",
    month: "Mar",
    type: "Exam",
    title: "Mid Semester Exam",
    description: "Mid-Sem examinations from 9th March to 17th March."
  },
  {
    day: "26",
    month: "Mar",
    type: "Event",
    title: "UTKANSH-26 / TECHNIti-26",
    description: "Annual technical and cultural fest of NIT Jalandhar, 26-29 March."
  },
  {
    day: "11",
    month: "May",
    type: "Exam",
    title: "End Semester Exam",
    description: "End-Sem examinations from 11th May to 5th june."
  }
];
const notices = [
  // {
  //   title: "Treasure hunt",
  //   category: "Competition",
  //   venue: "To Be Announced",
  //   date: "25 April 2026",
  //   time: "To Be Announced",
  //   isLive: true
  // },
  {
    title: "Mind the Mind",
    category: "Competition",
    venue: "LT 404",
    date: "28 March 2026",
    time: "11:00 AM",
    isLive: false
  },
  {
    title: "Cricket Tournament",
    category: "Sports",
    venue: "NITJ Main Ground",
    date: "21-22 March 2026",
    time: "09:00 AM",
    isLive: false
  }
];

const Home = () => {
  return <>
    <Navbar />
    <Intro_page />
    <Notice notices={notices} />   
    <Description_page />
    <Faculty_page />
    <Our_events />
    <Event_academic_calendar events={calendarEvents} />
    <Follow_us />
    <About_ending />
  </>
}

export default Home;
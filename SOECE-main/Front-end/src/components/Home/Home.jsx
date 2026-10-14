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
    day: "22",
    month: "Jul",
    type: "Academic",
    title: "Institute Reopens",
    description: "Institute reopens for Odd Semester 2026-27."
  },
  {
    day: "27",
    month: "Jul",
    type: "Academic",
    title: "Start of Classes",
    description: "Odd Semester classes commence. Late registration without fine is open."
  },
  {
    day: "24",
    month: "Aug",
    type: "Exam",
    title: "Quiz Week 1",
    description: "First quiz week for all ECE core subjects, 24th to 27th August."
  },
  {
    day: "28",
    month: "Aug",
    type: "Event",
    title: "Sports Fest",
    description: "Annual sports fest of NIT Jalandhar."
  },
  {
    day: "21",
    month: "Sep",
    type: "Exam",
    title: "Mid Semester Exam",
    description: "Mid-Sem examinations from 21st September to 28th September."
  },
  {
    day: "17",
    month: "Oct",
    type: "Event",
    title: "NITJ Foundation Day",
    description: "Foundation Day of NIT Jalandhar (working day)."
  },
  {
    day: "19",
    month: "Oct",
    type: "Exam",
    title: "Quiz Week 2",
    description: "Second quiz week, 19th to 23rd October."
  },
  {
    day: "09",
    month: "Nov",
    type: "Academic",
    title: "Mid-Term Break",
    description: "Diwali and mid-term break from 9th to 13th November."
  },
  {
    day: "16",
    month: "Nov",
    type: "Exam",
    title: "Quiz Week 3",
    description: "Third quiz week, 16th to 20th November."
  },
  {
    day: "27",
    month: "Nov",
    type: "Academic",
    title: "Last Day of Classes",
    description: "Last day of classes for the Odd Semester."
  },
  {
    day: "30",
    month: "Nov",
    type: "Exam",
    title: "End Semester Exam",
    description: "End-Sem examinations from 30th November to 12th December, followed by practical exams 14th to 18th December."
  },
  {
    day: "28",
    month: "Dec",
    type: "Academic",
    title: "Winter Vacation",
    description: "Start of winter vacation."
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
  // {
  //   title: "Mind the Mind",
  //   category: "Competition",
  //   venue: "LT 404",
  //   date: "28 March 2026",
  //   time: "11:00 AM",
  //   isLive: false
  // },
  // {
  //   title: "Cricket Tournament",
  //   category: "Sports",
  //   venue: "NITJ Main Ground",
  //   date: "21-22 March 2026",
  //   time: "09:00 AM",
  //   isLive: false
  // }
  {
    title: "Departmental Visit",
    category: "Visit",
    venue: "E1, ECE Building",
    date: "15 October 2026",
    time: "03:30 PM",
    isLive: true
  },
  {
    title: "Basketball Competition",
    category: "Sports",
    venue: "NITJ Main Ground",
    date: "To be announced",
    time: "To be announced",
    isLive: true
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
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// // Your requested Page Imports
// import Home from './components/Home/Home';
// import About from './components/About/About';
// import Events from './components/Events/Events';
// import Gallery from './components/Gallery/Gallery';
// import Placements from './components/Placements/Placements';
// import Teams from './components/Teams/Teams';
// import Faculty from './components/Faculty/Faculty';

// function App() {
//   return (
//     <Router>
//       <div className="App">

//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/faculty" element={<Faculty />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/events" element={<Events />} />
//           <Route path="/placements" element={<Placements />} />
//           <Route path="/gallery" element={<Gallery />} />
//           <Route path="/teams" element={<Teams />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import About from './components/About/About';
import Events from './components/Events/Events';
import Gallery from './components/Gallery/Gallery';
import Placements from './components/Placements/Placements';
import Teams from './components/Teams/Teams';
import Faculty from './components/Faculty/Faculty';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faculty" element={<Faculty />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/teams" element={<Teams />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
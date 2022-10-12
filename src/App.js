import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.jsx";
import Team from "./pages/team/team.jsx";
import Calendarus from "./pages/calendar/calendar.jsx";
import Parteners from "./pages/parteners/parteners.jsx";
import Tokenomics from "./pages/tokenomics/tokenomics.jsx";
import Distribution from "./pages/distribution/distribution.jsx";
import NetworkStatus from "./pages/networkStatus/networkStatus.jsx";

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/">
            <Route index element={<Homepage />} />
            <Route path="/networkstatus" element={<NetworkStatus />} />
            <Route path="/tokenomics" element={<Tokenomics />} />
            <Route path="/distribution" element={<Distribution />} />
            <Route path="/team" element={<Team />} />
            <Route path="/parteners" element={<Parteners />} />
            <Route path="/calendar" element={<Calendarus />} />
          </Route>
        </Routes>
      </BrowserRouter> */}
      <Homepage />
    </div>
  );
}

export default App;

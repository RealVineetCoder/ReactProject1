import "./App.css";
import Overview from "./Components/Home/Overview";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RootLayout from "./Utils/RootLayout";
import Usage from "./Components/Home/Usage";
import TimeLine from "./Components/Home/TimeLine";
import Plays from "./Components/Home/Plays";
import CustomerJourney from "./Components/Home/CustomerJourney";

function App() {
  return (
    <div className="app-design">
      <Router>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route path="" index element={<Overview />} />
            <Route path="usage" element={<Usage />} />
            <Route path="timeline" element={<TimeLine />} />
            <Route path="plays" element={<Plays />} />
            <Route path="customerjourney" element={<CustomerJourney />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

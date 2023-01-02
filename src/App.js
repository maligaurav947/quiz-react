import { HashRouter, Route, Routes } from "react-router-dom";
import Bollywood from "./components/Catagoray/Bollywood";
import Gaming from "./components/Catagoray/Gaming";
import Geography from "./components/Catagoray/Geography";
import Music from "./components/Catagoray/Music";
import Sport from "./components/Catagoray/Sport";
import Technology from "./components/Catagoray/Technology";
import Feedback from "./components/Catagoray/utlties/Feedback";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/music" element={<Music />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/bollywood" element={<Bollywood />} />
        <Route path="/geography" element={<Geography />} />
        <Route path="/gaming" element={<Gaming />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

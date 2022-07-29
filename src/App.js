import "./App.css";
import DataList from "./conponent/DataList";
import Day from "./conponent/Day";
import Header from "./conponent/Header";
import EmptyPage from "./conponent/EmptyPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateWord from "./conponent/CreateWord";
import CreateDay from "./conponent/CreateDay";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>        
          <Route path="/" element={<DataList />} />
          <Route path="/day/:day" element={<Day />} />
          <Route path="/create_word" element={<CreateWord />} />
          <Route path="/create_day" element={<CreateDay />} />
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import Home from "./routes/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TestResult from './components/TestResult';
import { ChannelType } from "./@types/index";
import ErrorPage from "./routes/errorPage";
import ListRender from "./components/ListRendering"; 
import FetchData from "./components/FetchData";

function App() {
  const [channels, setChannels] = useState<ChannelType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${globalThis.baseURL}/channels`)
      .then((response) => {
        setChannels(response.data.data);
      })
      .catch((err) => {
        console.log(err);
        navigate("/Error");
      });
  }, [navigate]);

  return (
    <div className="App bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
      <Routes>
        <Route path="/" element={<Home channels={channels} />} />
        <Route path="/Error" element={<ErrorPage />} />
        <Route path='/test' element={<TestResult/>}/>
        <Route path='/list' element={<ListRender/>}/>
        <Route path="/fetchData" element={<FetchData/>}/>
      </Routes>
    </div>
  );
}

export default App;

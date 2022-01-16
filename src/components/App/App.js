import EventsContainer from "../EventsContainer";
import Map from "../Map";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";
const socket = io(process.env.REACT_APP_API, {});

function App() {
  const [events, setEvents] = useState([]);
  const [map, setMap] = useState(null);

  useEffect(() => {
    const socket = io(process.env.REACT_APP_API);
    socket.on("PanicEvent", (data) => {
      console.log("received PanicEvent", data);
      addToEvents(data);
    });
  }, []);

  const addToEvents = (newEvent) => {
    setEvents((current) => [...current, newEvent]);
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API}/events`).then((response) => {
      setEvents(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Map events={events} setMap={setMap} />
      <EventsContainer events={events} map={map} />
    </div>
  );
}

export default App;

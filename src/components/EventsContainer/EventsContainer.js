import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { Routes, Route } from "react-router-dom";
import EventsList from "../EventsList";
import EventsInfo from "../EventsInfo";

const EventsContainer = ({ events, map }) => {
  return (
    <div className="events-container">
      <Routes>
        <Route path="/" element={<EventsList events={events} />} />
        <Route path="/event/:id" element={<EventsInfo map={map} />} />
      </Routes>
    </div>
  );
};

EventsContainer.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      age: PropTypes.number,
      gender: PropTypes.string,
      lat: PropTypes.string,
      lng: PropTypes.string,
      location: PropTypes.string,
      details: PropTypes.string,
      name: PropTypes.string,
      _id: PropTypes.string,
    })
  ),
  map: PropTypes.object,
};

EventsContainer.defaultProps = {
  event: [],
  map: {},
};

export default EventsContainer;

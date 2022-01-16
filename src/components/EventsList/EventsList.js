import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { Link } from "react-router-dom";
import EventItem from "../EventItem";

const EventsList = ({ events }) => {
  return (
    <div className="events-list">
      {events.map((item) => (
        <Link to={`/event/${item._id}`} key={item._id}>
          <EventItem {...item} />
        </Link>
      ))}
    </div>
  );
};

EventsList.propTypes = {
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
};

EventsList.defaultProps = { events: [] };

export default EventsList;

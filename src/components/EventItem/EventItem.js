import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { format } from "date-fns";

const EventItem = ({ name, createdAt, location, age, gender, description }) => {
  console.log(createdAt, new Date(createdAt));
  return (
    <div className="event-item">
      <div className="event-item-main">
        <div>{name}</div>
        <div>{format(new Date(createdAt), "dd LLLL yyyy, HH:mmaa")}</div>
      </div>
      <div className="event-item-location">{location}</div>
    </div>
  );
};

EventItem.propTypes = {
  name: PropTypes.string,
  createdAt: PropTypes.string,
  location: PropTypes.string,
  age: PropTypes.number,
  gender: PropTypes.string,
  description: PropTypes.string,
};

EventItem.defaultProps = {
  name: "Emma Pearson",
  createdAt: "11 January 2022, 21:22",
  location: "75 Beach road, Green Point, Cape Town",
  age: "25",
  gender: "Male",
  description:
    "Duis incididunt aute quis laborum proident non aliqua magna. Ex commodo velit incididunt labore consectetur consequat officia sit cupidatat aliquip eu et. Ea velit adipisicing sint id duis sint officia labore labore id. Voluptate mollit qui pariatur elit nisi ea dolor Lorem in est cillum reprehenderit non. In duis dolor proident in id dolore eu amet incididunt veniam aliquip excepteur.",
};

export default EventItem;

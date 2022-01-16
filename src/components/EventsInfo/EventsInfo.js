import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { Link, useParams } from "react-router-dom";
import Loader from "../Loader";
import axios from "axios";
import { format } from "date-fns";

const data = {
  name: "Emma Pearson",
  date: "11 January 2022, 21:22",
  location: "75 Beach road, Green Point, Cape Town",
  age: "25",
  gender: "Male",
  description:
    "Duis incididunt aute quis laborum proident non aliqua magna. Ex commodo velit incididunt labore consectetur consequat officia sit cupidatat aliquip eu et. Ea velit adipisicing sint id duis sint officia labore labore id. Voluptate mollit qui pariatur elit nisi ea dolor Lorem in est cillum reprehenderit non. In duis dolor proident in id dolore eu amet incididunt veniam aliquip excepteur.",
  lat: -33.33,
  long: 18.66,
};

const EventsInfo = ({ map }) => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (id) {
      axios
        .get(`${process.env.REACT_APP_API}/events/${id}`)
        .then((response) => {
          setData(response.data);
          setIsLoading(false);
          if (map) map.panTo([response.data.lat, response.data.lng]);
        })
        .catch((e) => {
          console.log(e);
          setHasError(true);
          setIsLoading(false);
        });
    }
  }, [id, map]);

  console.log(hasError);

  return (
    <div className="events-info">
      <Link to="/" className="events-info-back">
        back to list
      </Link>

      {isLoading ? (
        <div className="events-info-loader">
          <Loader />
        </div>
      ) : hasError ? (
        <div>An error has occured</div>
      ) : (
        <div className="events-info-container">
          <div className="events-info-main">
            <div>{data.name}</div>
            <div>
              {format(new Date(data.createdAt), "dd LLLL yyyy, HH:mmaa")}
            </div>
          </div>
          <div className="events-info-location">
            <div>{data.location}</div>
            Latitude: {data.lat} Longitude: {data.long}
          </div>
          <div className="events-info-sub">
            {data.age && <div>Age: {data.age}</div>}
            {data.gender && <div>Gender: {data.gender}</div>}
          </div>
          <div className="events-info-description">{data.description}</div>
        </div>
      )}
    </div>
  );
};

EventsInfo.propTypes = {
  map: PropTypes.object,
};

EventsInfo.defaultProps = {
  map: {},
};

export default EventsInfo;

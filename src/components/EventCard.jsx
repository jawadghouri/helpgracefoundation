/* eslint-disable react/prop-types */
import ReadMoreButton from "./ReadMoreButton";
import "./EventCard.css";
import C1 from "./../assets/C1.jpg";

function EventCard({ event }) {
  return (
    <div className='event-card'>
      <div className='event-card-img'>
        <img src={C1} alt='firstPicture' className='event-card-img' />
      </div>
      <div className='event-card-content'>
        <h3>{event.title}</h3>
        <p>{event.description}</p>
        <div className='event-stat'>
          <ReadMoreButton link={event.readMoreLink} />
          <div className='event-date'>{event.date}</div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;

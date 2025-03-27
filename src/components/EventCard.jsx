/* eslint-disable react/prop-types */
import ReadMoreButton from "./ReadMoreButton";
import "./EventCard.css";
import bags from "./../assets/bags.jpg";

function EventCard({ event }) {
  const image = event.image ? event.image : bags;
  return (
    <div className='event-card'>
      <div className='event-card-img'>
        <img src={image} alt='card picture' className='event-card-img' />
      </div>
      <div className='event-card-content'>
        <h3 style={{ fontWeight: "bold" }}>{event.title}</h3>
        <p style={{ fontSize: "0.9rem" }}>{event.description}</p>
        <div className='event-stat'>
          <ReadMoreButton link={event.readMoreLink} />
          <div className='event-date'>{event.date}</div>
        </div>
      </div>
    </div>
  );
}

export default EventCard;

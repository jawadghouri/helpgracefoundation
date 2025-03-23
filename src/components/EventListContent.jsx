import "./EventListContent.css";
import ListContent from "./ListConent";

export default function EventListContent() {
  return (
    <div className='content'>
      <h2>Our Successful Events</h2>
      <div className='event-list-section'>
        <ListContent />
      </div>
      {/* <SermonSection /> */}
    </div>
  );
}

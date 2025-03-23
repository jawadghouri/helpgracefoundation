import EventCard from "./EventCard";
import "./ListContent.css";

function EventList() {
  const events = [
    {
      title: "Organising a Charity Parachute Jump",
      description:
        "Education provides children with opportunities to escape poverty...",
      date: "26th September 2016 at 6:00 am",
      readMoreLink: "#",
    },
    {
      title: "The General Theological Seminary",
      description:
        "I wish again to express my profound gratitude to the clergy and lay leaders...",
      date: "27th September 2016 at 8:00 am",
      readMoreLink: "#",
    },
    {
      title: "Social Networking for Charity",
      description:
        "Education provides children with opportunities to escape poverty...",
      date: "30th September 2016 at 8:00 am",
      readMoreLink: "#",
    },
    {
      title: "The General Theological Seminary",
      description:
        "I wish again to express my profound gratitude to the clergy and lay leaders...",
      date: "30th September 2016 at 8:00 am",
      readMoreLink: "#",
    },
  ];

  return (
    <div className='event-list'>
      {events.map((event, index) => (
        <EventCard key={index} event={event} />
      ))}
    </div>
  );
}

export default EventList;

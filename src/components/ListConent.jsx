import EventCard from "./EventCard";
import "./ListContent.css";
import bags from "./../assets/bags.jpg";
import foodbags from "./../assets/foodbags.jpg";
import gifts from "./../assets/christmasgifts.jpg";
import financialhelp from "./../assets/financialhelp.jpg";

function EventList() {
  const events = [
    {
      title: "Distributing bags among children",
      description:
        "Help Grace Foundation has successfully distributed school bags to needy children following their academic results, ensuring they are well-prepared for the next school year. This initiative aims to support their education and encourage them to strive for a brighter future",
      date: "27th March 2025",
      image: bags,
      readMoreLink:
        "https://www.facebook.com/helpgracefoundation/posts/pfbid02xqcaS2wUX2Lrg5qJ45M2d1SsLV4NH6Gh3CPpvtjCHatcRjwg3NaLwLRXxG1BirRKl",
    },
    {
      title: "Grocery for needy people",
      description:
        "With a small effort, our team distributed essential grocery packages to needy families, ensuring they have access to basic food supplies. This initiative aims to support struggling households and bring relief during challenging times.",
      date: "10th March 2025",
      image: foodbags,
      readMoreLink:
        "https://www.facebook.com/helpgracefoundation/posts/pfbid02sJyP5mQ4zFCtadX3hJpZRDBmjMQPgwrfpkUQawge6YhM1garnA3XPBZZg2TkVaA1l",
    },
    {
      title: "Christmas Gifts for children",
      description:
        "Help Grace Foundation spread joy this holiday season by distributing Christmas gifts to children in need. Our initiative aims to bring smiles and warmth, ensuring every child experiences the festive spirit with love and generosity",
      date: "23 December 2024",
      image: gifts,
      readMoreLink:
        "https://www.facebook.com/photo/?fbid=122110117706669538&set=a.122098614176669538",
    },
    {
      title: "Financial Help to widows on Christmas",
      description:
        "Help Grace Foundation provided financial assistance to widows on Christmas, bringing hope and support during the festive season. This initiative aimed to ease their burdens and ensure they could celebrate with dignity and joy",
      date: "23 December 2024",
      image: financialhelp,
      readMoreLink:
        "https://www.facebook.com/helpgracefoundation/posts/pfbid06Jk5aG1yJ9UNmQiogLXuLx6hqvjWZFpYRhXbX4Eih5ceWFS67CYXcGTgohbDsaQbl",
    },
    {
      title: "Event adding Demo",
      description:
        "Help Grace Foundation provided financial assistance to widows on Christmas, bringing hope and support during the festive season. This initiative aimed to ease their burdens and ensure they could celebrate with dignity and joy",
      date: "22 January 2026",
      image: financialhelp,
      readMoreLink:
        "https://www.facebook.com/helpgracefoundation/posts/pfbid06Jk5aG1yJ9UNmQiogLXuLx6hqvjWZFpYRhXbX4Eih5ceWFS67CYXcGTgohbDsaQbl",
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

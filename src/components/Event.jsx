import "./Event.css";
import giftsEvent from "./../assets/christmasgifts.jpg";

function Event() {
  return (
    <div className='success-story'>
      <div className='image-container'>
        <img src={giftsEvent} alt='Success Story' />
      </div>
      <div className='content'>
        <h4>Recent Event</h4>
        <h2>Chrismas. Joy. Childern</h2>
        <p>
          What is Christmas without happiness on faces of childern. With the
          help of our local donors, distributed Christmas gifts amoung childern
          of less privileged families.
        </p>
        <p className='highlight'>
          We have raised <strong>PKR 50,000</strong>
        </p>
        <button className='read-more'>Read the Full Story</button>
      </div>
    </div>
  );
}

export default Event;

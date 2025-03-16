import "./Event.css";
import giftsEvent from "./../assets/christmasgifts.jpg";

function Event() {
  return (
    <div className='success-story'>
      <div className='image-container'>
        <img src={giftsEvent} alt='Success Story' />
      </div>
      <div className='content'>
        <h4>SUCCESS STORIES</h4>
        <h2>
          Water Is Life. We Successfully Provide Clean Water in South East Asia
        </h2>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
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

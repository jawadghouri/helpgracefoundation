/* eslint-disable react/prop-types */
import "./ReadMoreButton.css";

function ReadMoreButton({ link }) {
  return (
    <a href={link} className='read-more-button' target='_blank'>
      READ MORE
    </a>
  );
}

export default ReadMoreButton;

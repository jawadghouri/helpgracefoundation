// messages.jsx
import "./Messages.css";

/* eslint-disable react/prop-types */
export default function Messages(props) {
  return (
    <div className='msgsection' style={{ backgroundColor: props.color }}>
      <h1>{props.title}</h1>
      <div className='messages'>
        <div className='imagesection'>
          <img src={props.image} className='image' alt={props.name} />
          <p className='name'>{props.name}</p>
          <p className='designation'>{props.designation}</p>
        </div>
        <p className='message-content'>{props.message}</p>
      </div>
    </div>
  );
}

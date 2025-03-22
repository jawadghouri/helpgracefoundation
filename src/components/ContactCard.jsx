import "./ContactCard.css";
import whiteLogo from "./../assets/hgf_logo_white.png"; // Import the image

const ContactCard = () => {
  return (
    <div className='contact-card'>
      <div className='logo'>
        <img src={whiteLogo} className='logo-white' />
      </div>
      <div className='contact-info'>
        <div className='contact-item'>
          <div className='contact-label'>Phone Numbers</div>
          <div className='contact-value'>
            President:&emsp;&emsp;&emsp;&emsp;&emsp;+92 306 452 6464
          </div>
          <div className='contact-value'>
            General Secretary:&emsp;+92 305 896 4343
          </div>
        </div>
        <div className='contact-item'>
          <div className='contact-label'>E-Mail</div>
          <div className='contact-value'>info@helpgracefoundation.org</div>
        </div>
        <div className='contact-item'>
          <div className='contact-label'>Video call</div>
          <div className='contact-value'>Book an appointment</div>
        </div>
        <div className='contact-item'>
          <div className='contact-label'>Accessibility</div>
          <div className='contact-value'>Monday - Friday</div>
          <div className='contact-value'>09:00 a.m. - 06:00 p.m.</div>
        </div>
        <div className='contact-item'>
          <div className='contact-label'>Address</div>
          <div className='contact-value'>
            CA 118, Ground Floor, Usman Plaza, G Magnolia Park, Gujranwala,
            Pakistan
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;

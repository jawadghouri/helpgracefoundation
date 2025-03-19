import "./Footer.css";
import logo from "./../assets/logo-1.png"; // Adjust path if needed
import form from "./../assets/form.png"; // Adjust path if needed
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        {/* Logo & About Section */}
        <div className='footer-about'>
          <img src={logo} alt='Charifit Logo' className='footer-logo' />
          <p>Empowering lives, sharing grace, and offering support</p>
          <div className='social-icons'>
            <i className='fab fa-facebook-f'></i>
            <i className='fab fa-twitter'></i>
            <i className='fab fa-dribbble'></i>
            <i className='fab fa-instagram'></i>
          </div>
        </div>

        {/* Services Section */}
        <div className='footer-section'>
          <h3>Links</h3>
          <ul>
            <li>Donate</li>
            <li>Sponsor</li>
            <li>Fundraise</li>
            <li>Volunteer</li>
            <li>Partner</li>
            <li>Jobs</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className='footer-section'>
          <h3>Contacts</h3>
          <p>
            CA 118, Ground Floor, Usman Plaza,
            <br /> G Magnolia Park, Gujranwala, Pakistan
          </p>
          <p>info@helpgracefoundation.org</p>
          <p> +92 306 4526464</p>
        </div>

        {/* Newsletter Subscription Section */}
        <div className='footer-newsletter'>
          <h3>Newsletter</h3>
          <p>Stay updated with our latest news and events.</p>
          <div className='newsletter-box'>
            <input
              type='email'
              disabled='disabled' // Change it for Newsletter
              placeholder='Email Address'
            />
            <button type='submit'>
              <img src={form} alt='Charifit Logo' className='footer-logo-1' />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

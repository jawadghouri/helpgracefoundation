import "./AboutOverview.css";
import educationImage from "./../assets/education2.png"; // Import the image
import communityImage from "./../assets/community.jpeg"; // Import the image
import emergencyImage from "./../assets/emergency.jpg"; // Import the image

function AboutOverview() {
  const cardData = [
    {
      title: "Education Fund",
      description:
        "Providing educational resources and scholarships to underprivileged children.",
      image: educationImage, // Use the imported variable
    },

    {
      title: "Community Support",
      description:
        "Strengthening local communities through various outreach programs.",
      image: communityImage,
    },
    {
      title: "Emergency Relief",
      description:
        "Responding quickly to provide aid during natural disasters and crises.",
      image: emergencyImage,
    },
  ];

  return (
    <section className='about-overview'>
      <div className='overview-header'>
        <span>What We Are Doing</span>
        <h2>
          We Are In A Mission To
          <br /> Help The Helpless
        </h2>
      </div>

      <div className='overview-cards'>
        {cardData.map((card, index) => (
          <div className='overview-card' key={index}>
            <div className='card-image-container'>
              <img
                src={card.image}
                alt={card.alt || card.title}
                className='card-image'
              />
            </div>
            <div className='card-content'>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    // <section className='about-overview'>
    //   <div className='overview-header'>
    //     <h2>What We Are Doing</h2>
    //     <p>We Are In A Mission To Help The Helpless</p>
    //   </div>

    //   <div className='overview-cards'>
    //     {cardData.map((card, index) => (
    //       <div
    //         className='overview-card'
    //         key={index}
    //         style={{
    //           backgroundImage: `url(${card.image})`,
    //           width: "300px",
    //           height: "425px",
    //           backgroundSize: "cover", // Correct property
    //           backgroundRepeat: "no-repeat", // Prevent repeating
    //           backgroundPosition: "center", // Center the image
    //         }} // Use the imported image
    //       >
    //         <div className='card-content'>
    //           <h3>{card.title}</h3>
    //           <p>{card.description}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </section>
  );
}

export default AboutOverview;

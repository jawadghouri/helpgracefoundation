import "./CampaignCards.css";
import school from "./../assets/school.jpg";
import orphanage from "./../assets/orphanage.jpg";
import persecution from "./../assets/persecution.jpeg";

const CampaignCards = () => {
  const donations = [
    {
      title: "A place for bright future",
      description:
        "We want a school where we can offer best education for free to children of less privilegded families.",
      lastDonation: "1w ago",
      raised: 1200,
      goal: 50000,
      image: school,
    },
    {
      title: "Need a Shelter for Orphens",
      description:
        "A secure shelter for orphaned children, where they can find love, support, and the tools to thrive.",
      lastDonation: "1w ago",
      raised: 700,
      goal: 30000,
      image: orphanage,
    },
    {
      title: "Care for persecuted families",
      description:
        "We want to offer compassionate care and advocacy for those facing persecution for their Christian faith.",
      lastDonation: "3d ago",
      raised: 100,
      goal: 10000,
      image: persecution,
    },
  ];

  return (
    <div className='cardsforcampaigns'>
      <h2 className='runningcampaigns'> Our running campaigns</h2>
      <div className='campaigncontainer'>
        {donations.map((donation, index) => (
          <div key={index} className='campaigncard'>
            <img
              src={donation.image}
              alt={donation.title}
              className='campaigncard-img'
            />
            <div className='campaigncard-content'>
              <h2 className='campaigncard-title'>{donation.title}</h2>
              <p className='campaigncard-description'>{donation.description}</p>
              <p className='campaigncard-donation'>
                Last donation {donation.lastDonation}
              </p>
              <div className='campaignprogress-bar'>
                <div
                  className='campaignprogress'
                  style={{
                    width: `${(donation.raised / donation.goal) * 100}%`,
                  }}
                ></div>
              </div>
              <p className='campaigncard-raised'>
                ${donation.raised.toLocaleString()} raised of $
                {donation.goal.toLocaleString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignCards;

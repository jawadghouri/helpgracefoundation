import "./DonateDetails.css";

export default function DonateDetails() {
  return (
    <div className='donation-container'>
      {/* Left Side */}
      <div className='left-side'>
        <h1 className='title'>Give a little. Help a lot.</h1>
        <div className='text'>
          <ul>
            <li>
              <span className='textbold'>Make a Difference</span>: Your
              contribution can bring hope and opportunity to underprivileged
              children, shaping their future for the better.
            </li>
            <li>
              <span className='textbold'>No Amount Is Too Small</span>: Every
              donation, no matter how small, creates a significant impact in the
              lives of those in need.
            </li>
            <li>
              <span className='textbold'>Flexible Donation Options</span>: You
              can choose to make a one-time lump sum donation, or commit to a
              smaller monthly contribution to sustain the cause.
            </li>
            <li>
              <span className='textbold'>Take Full Responsibility</span>: You
              can contact us to learn more about specific children and take
              responsibility for their entire educational journey, from start to
              finish.
            </li>
          </ul>
        </div>
        <p className='text'>
          If you would like a donation receipt, please include your mailing
          address in the subject line. In some countries, you only need a
          receipt for donations of $300 or more; for smaller amounts, your bank
          statement is sufficient as proof for your tax return.
        </p>
        {/* <button className='red-button'>MORE ABOUT</button> */}
      </div>

      {/* Right Side */}
      <div className='right-side'>
        <h3 className='account-title'>Help Grace Foundation</h3>
        <table className='account-table'>
          <tbody>
            <tr>
              <td className='label'>Account Title:</td>
              <td>Samia Nasir</td>
            </tr>
            <tr>
              <td className='label'>Account No:</td>
              <td>0010116217660029</td>
            </tr>
            <tr>
              <td className='label'>Bank Name:</td>
              <td>Allied Bank Ltd</td>
            </tr>
            <tr>
              <td className='label'>Branch Name:</td>
              <td>Chan da Qila Branch – Gujranwala</td>
            </tr>
            <tr>
              <td className='label'>Swift Code:</td>
              <td>ABPAPKKAXXX</td>
            </tr>
            <tr>
              <td className='label'>IBAN:</td>
              <td>PK78ABPA0010116217660029</td>
            </tr>
          </tbody>
        </table>

        <p className='domestic-title'>For Domestic Donors</p>
        <table className='account-table'>
          <tbody>
            <tr>
              <td className='label'>Account Title:</td>
              <td>Help Grace Foundation</td>
            </tr>
            <tr>
              <td className='label'>JazzCash/EasyPaisa:</td>
              <td>0306 4526464</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

import Image from 'next/image';
import profilePic from '../public/me.png';

export default function RightSidebar(){
  return (
    <div className="right-sidebar">
      <div className="right-sidebar-section">
        <h2>Profile</h2>
        <Image className="profile-image" src={profilePic} alt="Picture of you" />
        <p>Aiko Haruka</p>
        <hr />
        <div className="subheading">Account</div>
        <div className="string">assets: $50,340</div>
        <div className="string">cash: $10,000</div>
        <hr />
        <div className="subheading">Assets</div>
        <div className="string">Bitcoin: 10</div>
        <div className="string">Ethereum: 190</div>
        <div className="string">Doge: 492,000</div>
        <div className="string">NFTs: TOTAL TBD</div>
        <hr />
      </div>
    </div>
  );
};
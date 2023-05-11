import { FaHome, FaWallet, FaAddressBook } from 'react-icons/fa';
import { BsFillHandbagFill, BsFillGearFill, BsGithub, BsPerson } from 'react-icons/bs';
import { GiChart } from 'react-icons/gi';
import { SiHiveBlockchain } from 'react-icons/si';




export default function Navbar(){
  return (
    <div className="navbar">
      <div className="navbar-left">
        <SiHiveBlockchain/> Trade
      </div>
      <div className="navbar-right">
        <div className="icon-spot">
          <a href="https://github.com/ba5eem" className="custom-Link"><BsGithub/></a>
        </div>
        <div className="icon-spot">
          <a href="https://www.linkedin.com/in/bmissaghi/" className="custom-Link"><FaAddressBook/></a>
        </div>
        <div className="icon-spot">
          <a href="https://github.com/ba5eem" className="custom-Link"><BsFillGearFill/></a>
        </div>
      </div>
    </div>
  );
};
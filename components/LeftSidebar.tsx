import { FaHome, FaWallet, FaAddressBook } from 'react-icons/fa';
import { BsFillHandbagFill, BsGithub, BsPerson } from 'react-icons/bs';
import { GiChart } from 'react-icons/gi';
import { SiHiveBlockchain } from 'react-icons/si';
import { FcAbout } from 'react-icons/fc';
import Link from "next/link"



export default function LeftSidebar(){
  return (
    <div className="left-sidebar">
      <div className="option">
        <Link href="/" className="custom-Link"><FaHome/> Home</Link>
      </div>
      <div className="option">
        <Link href="/assets" className="custom-Link"><BsFillHandbagFill/> NFTs</Link>
      </div>
      <div className="option">
        <Link href="/chart" className="custom-Link"><GiChart/> Chart</Link>
      </div>
      <div className="option">
        <Link href="/wallet" className="custom-Link"><FaWallet/> Wallet</Link>
      </div>
      <div className="option">
        <Link href="/about" className="custom-Link"><FcAbout/> About</Link>
      </div>
    </div>
  );
};
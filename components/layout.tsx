import Navbar from '../components/Navbar';
import RightSidebar from '../components/RightSidebar';
import LeftSidebar from '../components/LeftSidebar';

export default function Layout({ children }) {


  return (
    <>
    <div className="container">
      <Navbar />
      <div className="content">
        <LeftSidebar />
        {children}
        <RightSidebar />
      </div>
    </div>

    </>
  )
}

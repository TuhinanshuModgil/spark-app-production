import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import SidebarMobile from "../../components/sidebar/SideBarMobile";


const Home = () => {
	const [sidebarOpen, setSideBarOpen] = useState(false)
	function toggleSideBar(){
		setSideBarOpen(prev => !prev)
	}
	return (
		<div className='grid lg:grid-cols-4 sm:grid-cols-3 w-full h-full overflow-hidden bg-red-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 relative'>
			<button className="p-2 bg-white rounded-full absolute top-3 left-5 text-slate-800 z-[101] sm:hidden" onClick={toggleSideBar}><GiHamburgerMenu/></button>
			<Sidebar/>
			<SidebarMobile  sidebarOpen={sidebarOpen}  />
			<MessageContainer />
		</div>
	);
};
export default Home;

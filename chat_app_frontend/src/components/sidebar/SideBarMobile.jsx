import Conversations from "./Conversations";
import Groups from "./groups/Groups";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const SidebarMobile = ({sidebarOpen}) => {
	return (
			<div className={`fixed sm:hidden top-0 pt-16 z-[100] left-0 w-64 h-full text-white transform border-r border-slate-500 p-4 flex-col bg-secondary-dark-1 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}>

			<SearchInput />
			<div className='divider '></div>
			<Conversations />
			<Groups />
			<LogoutButton />		
			</div>
			
	);
};
export default SidebarMobile;


// STARTER CODE FOR THIS FILE
// import Conversations from "./Conversations";
// import LogoutButton from "./LogoutButton";
// import SearchInput from "./SearchInput";

// const Sidebar = () => {
// 	return (
// 		<div className='border-r border-slate-500 p-4 flex flex-col'>
// 			<SearchInput />
// 			<div className='divider px-3'></div>
// 			<Conversations />
// 			<LogoutButton />
// 		</div>
// 	);
// };
// export default Sidebar;

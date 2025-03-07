import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ conversation, lastIdx, emoji }) => {
	const { selectedConversation, setSelectedConversation, setIsGroup } = useConversation();

	let isSelected = selectedConversation?._id === conversation._id;
	const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);
	function handleConversationSelected(){
		if(isSelected){
			setSelectedConversation(null);
			setIsGroup(false);
		}else{
			setSelectedConversation(conversation);
			setIsGroup(false);
		}
		isSelected = selectedConversation?._id === conversation._id;
	}
	return (
		<>
			<div
				className={`flex gap-2 items-center hover:bg-gradient-pink-purple rounded sm:p-4 p-2 cursor-pointer transition-colors bg-secondary-dark-2
				${isSelected ? "bg-gradient-pink-purple" : ""}
			`}
				onClick={handleConversationSelected}
			>
				<div className='w-12 h-12 rounded-full flex items-center justify-center border border-gray-700 bg-gradient-yellow-orange relative'>
					
						{false ? (
							<img src={conversation.profilePic} alt='user avatar' />
						) : (
							<span className='text-2xl font-bold capitalize text-offwhite'>{conversation.username.charAt(0)}</span>
						)}
						{isOnline && <span className='absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full'></span>}

				</div>

				<div className='flex flex-col flex-1'>
					<div className='flex gap-3 justify-between'>
						<p className='font-semibold text-gray-200'>{conversation.username}</p>
						
					</div>
				</div>
			</div>

			{!lastIdx && <div className='border-b border-gray-700 my-0 py-0 h-1' />}
		</>
	);
};
export default Conversation;

// STARTER CODE SNIPPET
// const Conversation = () => {
// 	return (
// 		<>
// 			<div className='flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer'>
// 				<div className='avatar online'>
// 					<div className='w-12 rounded-full'>
// 						<img
// 							src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
// 							alt='user avatar'
// 						/>
// 					</div>
// 				</div>

// 				<div className='flex flex-col flex-1'>
// 					<div className='flex gap-3 justify-between'>
// 						<p className='font-bold text-gray-200'>John Doe</p>
// 						<span className='text-xl'>🎃</span>
// 					</div>
// 				</div>
// 			</div>

// 			<div className='divider my-0 py-0 h-1' />
// 		</>
// 	);
// };
// export default Conversation;

import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";
import GroupMessageInput from "./GroupMessageInput";
import GroupMessages from "./GroupMessages";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation, isGroup } = useConversation();
	
	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='flex flex-col overflow-auto lg:col-span-3 sm:col-span-2 bg-secondary-dark-2'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : isGroup ? (
					<>
						<div className='bg-secondary-dark-1 px-4 py-4 mb-2 flex justify-center border-b border-gray-700'>
							<span className='text-white/90 font-bold'>{selectedConversation.groupName}</span>
						</div>
						<GroupMessages />
						<GroupMessageInput/>
					</>
				) : (
					<>
						<div className='bg-secondary-dark-1 px-4 py-4 mb-2 flex justify-center border-b border-gray-700'>
						{/* <span className='label-text'>To:</span>{" "} */}
						<span className='text-white/90 font-bold'>{selectedConversation.username}</span>
					</div>
						<Messages />
						<MessageInput />
					</>
				)}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {authUser.username} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};

// STARTER CODE SNIPPET
// import MessageInput from "./MessageInput";
// import Messages from "./Messages";

// const MessageContainer = () => {
// 	return (
// 		<div className='md:min-w-[450px] flex flex-col'>
// 			<>
// 				{/* Header */}
// 				<div className='bg-slate-500 px-4 py-2 mb-2'>
// 					<span className='label-text'>To:</span> <span className='text-gray-900 font-bold'>John doe</span>
// 				</div>

// 				<Messages />
// 				<MessageInput />
// 			</>
// 		</div>
// 	);
// };
// export default MessageContainer;

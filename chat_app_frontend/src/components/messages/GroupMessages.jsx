import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";
import GroupMessage from "./GroupMessage";
import useGetGroupMembers from "../../hooks/useGetGroupMembers";
import { useAuthContext } from "../../context/AuthContext";

const GroupMessages = () => {
	const { messages, loading } = useGetMessages();
	const {groupMembers, loading: groupMembersLoading} = useGetGroupMembers();
	const { authUser } = useAuthContext();
	// useListenMessages();
	const lastMessageRef = useRef();
	useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);

	return (
		<div className='px-4 flex-1 overflow-auto flex flex-col gap-2'>
			{!loading &&
				!groupMembersLoading &&
				messages.length > 0 &&
				messages.map((message) => (
					<div key={message._id} ref={lastMessageRef}>
						{/* {message.senderId !== authUser._id && (<h1 className="text-white/75">{groupMembers[message.senderId].username}</h1>)} */}
						<GroupMessage message={message} username={groupMembers[message.senderId].username} />
					</div>
				))}

			{loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
			{!loading && messages.length === 0 && (
				<p className='text-center'>Send a message to start the conversation</p>
			)}
		</div>
	);
};
export default GroupMessages;

// STARTER CODE SNIPPET
// import Message from "./Message";

// const Messages = () => {
// 	return (
// 		<div className='px-4 flex-1 overflow-auto'>
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 			<Message />
// 		</div>
// 	);
// };
// export default Messages;

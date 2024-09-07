import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

import notificationSound from "../assets/sounds/notification.mp3";
import { useAuthContext } from "../context/AuthContext";

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { messages, setMessages, selectedConversation  } = useConversation();
	const { authUser } = useAuthContext();
	// const { messages, setMessages  } = useConversation();
	const joinGroupSocket = (groupId) => {
		socket?.emit("joinGroup", groupId);
	}

	const leaveGroupSocket = (groupId) => {
		socket?.emit("leaveGroup", groupId);
	}

	useEffect(() => {
		socket?.on("newMessage", (newMessage) => {
			// newMessage.shouldShake = true;
			// const sound = new Audio(notificationSound);
			// sound.play();


			// setMessages([...messages, newMessage]);
			// add the newMessage to the messages array only if it is sent by the selectedConversation user id
			if (selectedConversation?._id === newMessage.senderId) {
				newMessage.shouldShake = true;
				const sound = new Audio(notificationSound);
				sound.play();
				setMessages([...messages, newMessage]);
			}
		});

		socket?.on("newGroupMessage", (groupMessage) => {
			if(selectedConversation?._id === groupMessage.groupId){
				if(groupMessage.senderId !== authUser._id){
					groupMessage.shouldShake = true;
					const sound = new Audio(notificationSound);
					sound.play();
				}
				setMessages([...messages, groupMessage]);
			}
		});

		return () => {
			socket?.off("newMessage");
			socket?.off("newGroupMessage");
		};
	}, [socket, setMessages, messages, selectedConversation]);

	return {
		joinGroupSocket,
		leaveGroupSocket
	}
};
export default useListenMessages;

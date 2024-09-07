import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation, isGroup } = useConversation();

	useEffect(() => {
		const getMessages = async () => {
			setLoading(true);
			try {
				const res = await fetch(`/api/messages/${selectedConversation._id}`, {
					
					credentials: 'include'
				});
				const data = await res.json();
				if (data.error) throw new Error(data.error);
				setMessages(data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};
		const getGroupMessages = async () => {
			setLoading(true);
			try {
				const res = await fetch(`/api/messages/group/${selectedConversation._id}`,  {
					
					credentials: 'include'
		});
				const data = await res.json();
				if (data.error) throw new Error(data.error);
				setMessages(data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};
		if (selectedConversation?._id && isGroup) getGroupMessages();
		if (selectedConversation?._id && !isGroup) getMessages();
	}, [selectedConversation?._id, setMessages, isGroup]);

	return { messages, loading };
};
export default useGetMessages;

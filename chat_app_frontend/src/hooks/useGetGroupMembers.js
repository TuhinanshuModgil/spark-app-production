import React, { useState, useEffect } from "react";
import useConversation from "../zustand/useConversation";

function useGetGroupMembers() {
  const { selectedConversation, isGroup } = useConversation();
  const [groupMembers, setGroupMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getGroupMembers = async () => {
      const res = await fetch(
        `/api/groups/members/${selectedConversation._id}`,
        {
          credentials: "include",
        }
      );
      const data = await res.json();
      setGroupMembers(data);
      setLoading(false);
    };
    if (isGroup && selectedConversation) getGroupMembers();
  }, [selectedConversation, isGroup]);

  return { groupMembers, loading };
}

export default useGetGroupMembers;

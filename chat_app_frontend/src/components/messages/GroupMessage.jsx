import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const GroupMessage = ({ message, username }) => {
  const { authUser } = useAuthContext();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? "items-end" : "items-start";
  const profilePic = fromMe
    ? authUser.profilePic
    : "https://placeimg.com/192/192/any?" + Math.random();
  const bubbleBgColor = fromMe
    ? "bg-gradient-pink-purple"
    : "bg-gradient-orange-pink";

  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    // <div className={`chat ${chatClassName}`}>
    //   <div className="chat-image">
    //     <div className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700">
    //       <span className="text-2xl font-bold capitalize text-white">
    //         {username.charAt(0)}
    //       </span>
    //     </div>
    //   </div>
    //   <div
    //     className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}
    //   >
    //     {message.message}
    //   </div>
    //   <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
    //     {formattedTime}
    //   </div>
    // </div>
    <div className={`flex flex-col ${chatClassName} gap-2`}>
      <div className={`flex gap-2 ${fromMe ? "flex-row-reverse" : ""}`}>
        <div className="chat-image ">
          {!fromMe ? (
            <div className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 text-2xl font-bold capitalize bg-gradient-yellow-orange">
			<span className="text-white">
              {username.charAt(0)}
			</span>
          </div>): ""}
        </div>
	
        <div
          className={` text-white ${bubbleBgColor} ${shakeClass} pb-2 p-2 rounded-lg ${fromMe ? "rounded-br-none" : "rounded-bl-none"}`}
        >
			{!fromMe && <h2 className="text-white/75 text-sm font-semibold">{username}</h2>}
			<p>

          {message.message}
			</p>
        </div>
      </div>

      <div
        className={`chat-footer opacity-50 text-xs flex gap-1 items-center ${
          fromMe ? "flex-row-reverse" : ""
        }`}
      >
        {formattedTime}
      </div>
    </div>
  );
};
export default GroupMessage;

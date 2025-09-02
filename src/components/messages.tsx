import axios, { AxiosResponse, AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { ResponseType, SelectedChannelType } from "../@types/index";
import "../App.css";
import { useNavigate } from "react-router-dom";

function Channel({
  selectedChannel,
}: {
  selectedChannel: SelectedChannelType;
}) {
  const [message, setMessage] = useState<string>("");
  const [displayMessages, setDisplayMessages] = useState<string[]>([]);
  const [postMessage, setPostMessage] = useState<string>("");
  const [deleteMsg,setDeleteMsg] = useState<boolean>(false);
  const [isButtonDisabled, setButtonDisabled] = useState<boolean>(true);

  const navigate = useNavigate();
 
  const onChangeMessage =(event) =>{
    if(event.target.value.length === 0)
      {
        setButtonDisabled(true);
      }
      else {
        setButtonDisabled(false);
      }
      setMessage(event.target.value)
  }

  const deleteMessages = async (e)=>{
    e.preventDefault();
    const response = await axios.delete(`${globalThis.baseURL}/${selectedChannel.channelID}`);
    if(response.status != 200){
      navigate("/Error");
    }
    setPostMessage("");
  }

  const publishMessage = async (
    ev:
      | React.FormEvent<HTMLFormElement>
      | React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    ev.preventDefault();
    const messageToSend = message.trim();
    if (messageToSend) {
      axios
        .post<ResponseType>(
          `${globalThis.baseURL}/${selectedChannel.channelID}`,
          {
            message: messageToSend,
          },
        )
        .then((response: AxiosResponse<ResponseType>) => {
          if (response.data.status === "OK") {
            setPostMessage(messageToSend);
            setMessage("");
          }
        })
        .catch((err: AxiosError) => {
          console.log(err.message);
          navigate("/Error");
        });
    }
  };

  const keyPress = (ev: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (ev.key === "Enter" && ev.ctrlKey) {
      publishMessage(ev);
    }
  };

  useEffect(() => {
   
    if (selectedChannel) {
      setMessage("");
      axios
        .get<ResponseType>(
          `${globalThis.baseURL}/messages/${selectedChannel.channelID}`,
        )
        .then((response: AxiosResponse<ResponseType>) => {
          setDisplayMessages(response.data.data as string[]);
        })
        .catch((err: AxiosError) => {
          console.log(err.message);
          navigate("/Error");
        });
    }
  }, [postMessage, selectedChannel]);

  return (
    <>
  <div className="container mx-auto px-4 h-full flex flex-col gap-4">
    {/* Messages Display */}
    <div className="flex flex-col gap-2 flex-1 overflow-y-auto">
      {selectedChannel && displayMessages.length > 0 ? (
        displayMessages.map((m, index) => (
          <div
            key={index}
            className="w-full bg-accent text-black rounded-lg shadow-md glass p-4"
          >
            <p>{m}</p>
          </div>
        ))
      ) : (
        <div
          className="p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
          role="alert"
        >
          <span className="font-medium">Info alert!</span> No Messages for selected Channel
        </div>
      )}
    </div>

   
    {selectedChannel && (
      <form onSubmit={publishMessage} className="w-full">
        <div className="bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg flex flex-col">
          {/* Textarea */}
          <div className="py-2 px-4 bg-white dark:bg-gray-800 rounded-t-lg">
            <textarea
              id="MessageBox"
              onKeyDown={keyPress}
              value={message}
              onChange={onChangeMessage}
              placeholder="Message to channel..."
              required
              className="w-full text-sm text-gray-900 dark:text-white dark:placeholder-gray-400 bg-white dark:bg-gray-800 border-0 focus:ring-0 px-0 resize-none"
            />
          </div>

         
          <div className="flex justify-end items-center space-x-2 py-2 px-3 border-t dark:border-gray-600">
           
           <button
                onClick={deleteMessages}
              disabled={displayMessages.length === 0}
              className={`w-full md:w-auto flex justify-center items-center py-2.5 px-4 text-sm font-medium text-white rounded-lg
                          focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900
                          ${displayMessages.length === 0 ? "bg-blue-700 opacity-50 cursor-not-allowed" : "bg-blue-700 hover:bg-blue-800"}`}>
              Delete All Comments
            </button>
           
           <button
                type="submit"
              disabled={isButtonDisabled}
              className={`w-full md:w-auto flex justify-center items-center py-2.5 px-4 text-sm font-medium text-white rounded-lg
                          focus:outline-none focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900
                          ${isButtonDisabled ? "bg-blue-700 opacity-50 cursor-not-allowed" : "bg-blue-700 hover:bg-blue-800"}`}>
              Post comment
            </button>
          </div>
        </div>
      </form>
    )}
  </div>
</>

  );
}

export default Channel;

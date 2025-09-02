/* eslint-disable @typescript-eslint/no-unused-vars */
import Sidenav from "../components/navBar";
import Channel from "../components/messages";
import React, { useState } from "react";
import "../App.css";
import { ChannelType } from "../@types";

function Home({ channels }: { channels: ChannelType[] }) {
  const [selectedChannel, setSelectedChannel] = useState<{
    channelID: string;
    channelName: string;
  }>(null);

  return (
    <div className="bg-gradient-to-l hover:bg-gradient-to-r from-indigo-600 to-blue-500 transition-colors duration-500 min-h-screen">
  <div className="text-center py-8 text-white">
    <h1 className="text-4xl md:text-5xl font-bold mb-2">
      Welcome to the Message Board
    </h1>
    {selectedChannel && (
      <h2 className="text-xl md:text-2xl">
        You have selected {selectedChannel.channelName} Channel
      </h2>
    )}
  </div>
 <div className="flex justify-center p-4 bg-gray-100">
  <div className="flex w-full max-w-[1200px] gap-4 flex-col md:flex-row h-[600px]">
    
    {/* Sidebar */}
    <div className="flex-none w-full md:w-1/4 bg-white rounded-lg p-4 shadow-md overflow-y-auto">
      {channels && (
        <Sidenav
          setSelectedChannel={setSelectedChannel}
          channels={channels}
        />
      )}
    </div>
    <div className="flex-1 w-full md:w-3/4 bg-white rounded-lg p-4 shadow-md overflow-y-auto">
      <Channel selectedChannel={selectedChannel} />
    </div>
  </div>
</div>

</div>


  );
}

export default Home;

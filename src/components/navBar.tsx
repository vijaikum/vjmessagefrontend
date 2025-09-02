import React from "react";
import "../App.css";
import { ChannelType, SelectedChannelType } from "../@types";

function Sidenav({
  setSelectedChannel,
  channels,
}: {
  setSelectedChannel: (selectedChannel: SelectedChannelType) => void;
  channels: ChannelType[];
}) {
  return (
    <div className="navbar-content">
      {channels.length > 0 &&
        channels?.map((indivChannel, index) => {
          return (
            <button
              key={index}
              className="channels-panel-button btn border-solid border-2 border-indigo-600"
              onClick={() =>
                setSelectedChannel({
                  channelID: indivChannel.channelID,
                  channelName: indivChannel.channelName,
                })
              }
            >
              {indivChannel.channelName}
            </button>
          );
        })}
    </div>
  );
}

export default Sidenav;

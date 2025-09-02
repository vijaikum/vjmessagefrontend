export interface ResponseType {
    status: string;
    data: ChannelType | string[];
  }
  export interface ChannelType  {
    channelID?: string;
    channelName?: string;
    messages?: Array<string | string[]>;
  }

  export interface SelectedChannelType  {
    channelID: string;
    channelName: string;
  }


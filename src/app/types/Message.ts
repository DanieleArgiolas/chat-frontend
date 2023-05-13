import { SocketClient } from "./SocketClient";

export interface OutgoingMessage{
    text: string;
    to: SocketClient['customID'];
}

export interface IncomingMessage{
  text: string;
  from: SocketClient['customID'];
}


export interface Message{
  text: string;
  from: SocketClient['customID'];
  to: SocketClient['customID'];
}

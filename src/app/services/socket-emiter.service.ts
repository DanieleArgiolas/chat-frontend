import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';
import { SocketClient } from '../types/SocketClient';
import { OutgoingMessage } from '../types/Message';

@Injectable({
  providedIn: 'root'
})
export class SocketEmiterService {

  constructor(private socketService: SocketService) { }


  sendMessage(to: SocketClient['customID'], text: string) {
    // msg
    const message: OutgoingMessage = {
      text,
      to
    };
    // send
    this.socketService.emit('send_message', message)
  }

}

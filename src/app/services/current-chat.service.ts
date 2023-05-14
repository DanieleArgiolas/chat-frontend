import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';
import { Message, OutgoingMessage } from '../types/Message';
import { SocketClient } from '../types/SocketClient';
import { SocketListenerService } from './socket-listener.service';
import { SelectedClientService } from './selected-client.service';
import { first, map, of, Observable, tap, combineLatest } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentChatService {

  public inChat$: Observable<boolean>;

  constructor(
    private socketService: SocketService,
    private socketListenerService: SocketListenerService,
    private selectedClientService: SelectedClientService,
    private userService: UserService,
  ) {
    this.inChat$ = selectedClientService.getClient$().pipe(map((client: SocketClient | null) => !!(client)))
  }





  sendMessage(text: string) {

    const client = this.selectedClientService.getCurrentClient()
    if (!client) return;
    // msg
    const message: OutgoingMessage = {
      text,
      to: client.customID
    };
    // send
    this.socketService.emit('send_message', message)

  }

  getMessages$(): Observable<Message[]> {



    return combineLatest([
      this.selectedClientService.getClient$(),
      this.socketListenerService.all_messages$])
      .pipe(
        map(([_client, messages]) => {
          return messages.filter(msg => _client && (_client.customID === msg.from || _client.customID === msg.to))
            .map(message => {
              message.self = (this.userService.getUserValue()?.customID === message.from);
              return message;
            })
        }),
        tap( x => {
       //   console.log('Messages', x.map(m => m.from), );
        })
      )


  }



}

import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { SocketClient } from '../types/SocketClient';
import { IncomingMessage, Message } from '../types/Message';



@Injectable({
  providedIn: 'root'
})
export class SocketListenerService {


  private _all_sockets = new BehaviorSubject<SocketClient[]>([])
  private _all_messages = new BehaviorSubject<Message[]>([])

  all_sockets$: Observable<Array<{ customID: string }>> = this._all_sockets.asObservable();

  all_messages$: Observable<Array<Message>> = this._all_messages.asObservable();

  constructor(private socketService: SocketService) {

    this.socketService.addEventHandler<Array<{ customID: string }>>('all_sockets', (data) => {
      this._all_sockets.next(data)
    })

    this.socketService.addEventHandler<{ customID: string }>('socket_joined', (socketCLient: SocketClient) => {
      console.log('socketCLient', socketCLient.customID, this._all_sockets.getValue());
      this._all_sockets.next([...this._all_sockets.getValue(), socketCLient])
    })

    this.socketService.addEventHandler<{ customID: string }>('socket_left', (left: SocketClient) => {
      console.log('left', left.customID, this._all_sockets.getValue().filter(x => x.customID != left.customID));
      this._all_sockets.next(this._all_sockets.getValue().filter(x => x.customID != left.customID))
    })

    this.socketService.addEventHandler<Message>
      ('incoming_message', (incomingMessage: Message) => {
        console.log('incomingMessage', incomingMessage);

        const messages = this._all_messages.getValue();

        this._all_messages.next([...messages, incomingMessage])

        // this._all_sockets.next(this._all_sockets.getValue().filter(x => x.customID != left.customID))
      })

    //

  }

}



import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CurrentChatService } from 'src/app/services/current-chat.service';
import { SocketListenerService } from 'src/app/services/socket-listener.service';
import { SocketService } from 'src/app/services/socket.service';
import { Message } from 'src/app/types/Message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  sockets$: Observable<Array<{ customID: string }>>

  messages$: Observable<Array<Message>>
  inChat$: Observable<boolean>

  constructor(private listener: SocketListenerService, private currentChatService: CurrentChatService) {
    this.sockets$ = listener.all_sockets$
    this.messages$ = currentChatService.getMessages$()
    this.inChat$ = currentChatService.inChat$
  }
}



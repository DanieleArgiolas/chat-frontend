import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SocketListenerService } from 'src/app/services/socket-listener.service';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  sockets$: Observable<Array<{ customID: string }>>

  constructor(private listener: SocketListenerService) {
    this.sockets$ = listener.all_sockets$
  }

}


// // 
// ngOnInit(): void {
//   // listen to 'chat message' event from the server
//   this.socketService.listen('chat message').subscribe((message: string) => {
//     this.messages.push(message);
//   });
// }

// sendMessage(): void {
//   // emit 'chat message' event to the server
//   this.socketService.emit('chat message', 'Hello from Angular!');
// }
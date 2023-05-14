import { Component } from '@angular/core';
import { first, pipe } from 'rxjs';
import { SelectedClientService } from 'src/app/services/selected-client.service';
import { SocketEmiterService } from 'src/app/services/socket-emiter.service';
import { SocketClient } from 'src/app/types/SocketClient';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent {

  constructor(private socketEmiterService: SocketEmiterService, private selectedClientService :SelectedClientService) {

  }

  message: string = '';



  sendMessage() {

    this.selectedClientService.getClient$().pipe(first()).subscribe(
      (client: SocketClient | null) => {
        if(!client){
          console.log('no client selected!');

          return;
        }
        this.socketEmiterService.sendMessage(client.customID, this.message)
        // reset
        this.message = '';
      }
    )
    // this.socketEmiterService.sendMessage()
  }
}

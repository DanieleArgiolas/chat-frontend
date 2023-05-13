import { Component, Input } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SelectedClientService } from 'src/app/services/selected-client.service';
import { SocketClient } from 'src/app/types/SocketClient';

@Component({
  selector: 'app-user-selector',
  templateUrl: './user-selector.component.html',
  styleUrls: ['./user-selector.component.scss']
})
export class UserSelectorComponent {


  selected$: Observable<boolean> = of(false)

  private _user!: SocketClient;

  constructor(private selectedClientService: SelectedClientService) { }

  @Input() set user(user: SocketClient){
    this._user = user;
    this.selected$ = this.selectedClientService.isClientSelected$(user.customID)
  }

  get user(){
    return this._user;
  }



  select() {
    this.selectedClientService.setClient(this.user)
  }

}

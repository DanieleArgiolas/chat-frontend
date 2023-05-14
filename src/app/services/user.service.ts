import { Injectable } from '@angular/core';
import { SocketService } from './socket.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { SocketClient } from '../types/SocketClient';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  _user = new BehaviorSubject<SocketClient|null>(null);


  getUserValue(): SocketClient|null{
    return this._user.getValue();
  }

  getUser$(): Observable<SocketClient|null>{
    return this._user.asObservable();
  }

  constructor(private socketService : SocketService) {
    socketService.addEventHandler('self', (socket: SocketClient) => {
      this._user.next(socket);
    })
  }
}

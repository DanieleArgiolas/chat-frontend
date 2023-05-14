import { Injectable, Injector } from '@angular/core';
import { SocketService } from './socket.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { SocketClient } from '../types/SocketClient';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  _user = new BehaviorSubject<SocketClient | null>(null);


  constructor(private socketService: SocketService, private injector: Injector) {
    socketService.addEventHandler('self', (socket: SocketClient) => {
      this._user.next(socket);
    })
  }


  login(username: string) {
    return this.injector.get(HttpService).login(username)
  }


  getUserValue(): SocketClient | null {
    return this._user.getValue();
  }

  getUser$(): Observable<SocketClient | null> {
    return this._user.asObservable();
  }
}

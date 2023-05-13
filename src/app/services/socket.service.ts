import { Injectable } from '@angular/core';
import { Socket, io } from 'socket.io-client';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class SocketService {
  private socket: Socket;
  constructor() {
    console.log('called');
    
    this.socket = io(environment.socketEndpoint);
  }


  addEventHandler<T>(eventName: string, callback: (data: T) => void) {
    return this.socket.on(eventName, callback);
  }



  listen<T>(eventName: string): Observable<T> {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data: T) => {
        subscriber.next(data);
      });
    });
  }


  emit<T>(eventName: string, data: T): void {
    console.log('emit', data);
    this.socket.emit(eventName, data);
  }
}

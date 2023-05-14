import { Injectable } from '@angular/core';
import { SocketClient } from '../types/SocketClient';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedClientService {

  constructor() { }

  private _client = new BehaviorSubject<SocketClient | null>(null);


  setClient(client: SocketClient): void {
    this._client.next(client);
  }

  unselectClient(): void {
    this._client.next(null)
  }

  getClient$(): Observable<SocketClient | null> {
    return this._client.asObservable();
  }

  getCurrentClient(): SocketClient | null {
    return this._client.getValue() ?? null;

  }


  isClientSelected$(customID: SocketClient['customID']): Observable<boolean> {
    return this.getClient$().pipe(map(x => x?.customID === customID))
  }

}

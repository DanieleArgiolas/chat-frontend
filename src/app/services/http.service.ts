import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  private readonly baseUrl: string = "http://localhost:3000"

  login(username: string){
    return this.http.post(this.baseUrl + '/api/login',{
      username
    })
  }

}

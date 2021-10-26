import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor( private http: HttpClient) { }

 // https://superheroapi.com/api/access-token
  
 urlApi = 'https://superheroapi.com/api/';
 accessToken = '10159481888395586';

 heroe(){
   return this.http.get(this.urlApi + this.accessToken + '/149');
 }
}

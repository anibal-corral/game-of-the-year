import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';



@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http:HttpClient) { }


  getNominees(){
    return this.http.get<Game[]>(`${environment.url}/api/gameoftheyear`);
  }

}

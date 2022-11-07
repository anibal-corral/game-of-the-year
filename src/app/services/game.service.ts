import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, of } from 'rxjs';
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

  vote(id:string){
    return this.http.post(`${environment.url}/api/gameoftheyear/${id}`,{}).pipe(
      catchError(err =>{
        return of(err.error);
      })
    )

  }

}

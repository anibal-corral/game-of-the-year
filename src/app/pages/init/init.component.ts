import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { map } from 'rxjs';
import {  map } from 'rxjs/operators'
import { Game } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {

  constructor(private db:AngularFirestore) { }
games:any[]=[];
  ngOnInit(): void {
    this.db.collection('gameoftheyear').valueChanges()
    .pipe(
      map(
        (resp:any[])=>resp.map(({name,votes})=>({name, value:votes})))
    
    ).subscribe(
      (games)=>{
        console.log(games);
        this.games=games;
      }
    )

  }

}

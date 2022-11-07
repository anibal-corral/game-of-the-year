import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/interfaces/interfaces';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-gotheyear',
  templateUrl: './gotheyear.component.html',
  styleUrls: ['./gotheyear.component.css']
})
export class GotheyearComponent implements OnInit {
games:Game[]=[];
  constructor(private gameService:GameService) { }

  ngOnInit(): void {
    this.gameService.getNominees().subscribe((resp)=>this.games=resp);
  }

}

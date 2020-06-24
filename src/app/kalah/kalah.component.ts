import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/httpclient.service';

export class Pit{
  constructor(
    public playerName:string,
    public numberOfSeeds:string,
    public index:Number,
    public globalIndex:Number,
    public endZone:Boolean
  ) {}
}


@Component({
  selector: 'app-kalah',
  templateUrl: './kalah.component.html',
  styleUrls: ['./kalah.component.css']
})
export class KalahComponent implements OnInit {

  constructor(private httpClientService:HttpClientService) { }

  games: any;

  playerOne:Pit[] = [];
  playerTwo:Pit[] = [];

  loaded = false;

  ngOnInit(): void {

    this.httpClientService.getProducts().subscribe(
      response => {this.games = response["game"]; console.log(this.games); this.splitBoard()}
    );
  }

  splitBoard(){
      let PLAYER_ONE = "PLAYER ONE"
      let PLAYER_TWO = "PLAYER TWO"

      let playerOneArray = this.games["board"]["pits"].slice(0,7);
      let playerTwoArray = this.games["board"]["pits"].slice(7,14);

      this.playerOne = []
      this.playerTwo = []

      for (let i = 0; i < playerOneArray.length; i++) {
        const currentPit = playerOneArray[i];
        let pit = new Pit( PLAYER_ONE, currentPit.numberOfSeeds, i, i, i == playerOneArray.length - 1 );
        this.playerOne.push(pit);
      }

      for (let i = 0; i < playerTwoArray.length; i++) {
        const currentPit = playerTwoArray[i];
        let pit = new Pit( PLAYER_TWO, currentPit.numberOfSeeds, i, i + 7, i == playerTwoArray.length -1 );
        this.playerTwo.push(pit);
      }

      this.loaded = true;
  }

  performMove( pit ){
    console.log( pit )
    return this.httpClientService.performMove(pit).subscribe( response => {
      this.games = response["game"]
      this.splitBoard();
    })
  }

  restartGame(){
    return this.httpClientService.restartGame().subscribe(response => {
      this.games = response["game"]
      this.splitBoard();
    })
  }

}

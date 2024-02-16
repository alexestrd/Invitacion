import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
rep:boolean = true;
audio = new Audio();

constructor(){
  this.audio.src = '../../assets/Musica/SaveTube.App - Bad Bunny (ft. Rauw Alejandro) - Party (360° Visualizer) _ Un Verano Sin Ti (320 kbps).mp3';
}

ngOnInit(){
  //this.audio.play();
}

click(){
  this.rep = !this.rep;
  if(this.rep == false){
    this.audio.pause();
  }
  if(this.rep == true){
    this.audio.play();
  }
}
}

import { Component, OnInit , EventEmitter, Input } from '@angular/core';
import { PlaylistHeadComponent } from '../playlist-head/playlist-head.component'

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

   gotSong: EventEmitter<any> = new EventEmitter()

   currentSong:any;

   getOutputVal(song:any) {
      if (song) {
        this.currentSong = song
        this.gotSong.emit(song)
      }
  }

  constructor() { }

  ngOnInit() {
  }

}

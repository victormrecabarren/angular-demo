import { Component, OnInit , Input , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playlist-head',
  templateUrl: './playlist-head.component.html',
  styleUrls: ['./playlist-head.component.css']
})
export class PlaylistHeadComponent implements OnInit {

  @Input() private gotSong: EventEmitter<any>;

  currentSong:Object = {}

  src:string = ''

  constructor() { }

  ngOnInit() {
    if (this.gotSong) {
      this.gotSong.subscribe(data=> {
        this.currentSong = data
        this.src=data.img
        console.log(data.title)
      })
    }
  }
}

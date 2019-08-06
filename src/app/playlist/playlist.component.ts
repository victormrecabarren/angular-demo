import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import {Songs} from '../../songInfo'

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})

export class PlaylistComponent implements OnInit {

  @Output() outputToParent = new EventEmitter<any>()

  songs = [
    {
      title: "Distorted Records",
      album: "Testing",
      artist: "A$AP Rocky",
      img: "Testing.jpg"
    },
    {
      title: "Provider",
      album: "Provider",
      artist: "Frank Ocean",
      img: "provider.jpeg"
    },
    {
      title: "20 Something",
      album: "ctrl",
      artist: "SZA",
      img: "ctrl.jpg"
    },
    {
      title: "Wasted Times",
      album: "My Dear Meloncholy,",
      artist: "The Weeknd",
      img: "meloncholy.jpeg"
    },
    {
      title: "If You Know You Know",
      album: "DAYTONA",
      artist: "Pusha T",
      img: "daytona.jpg"
    },
    {
      title: "Foreword",
      album: "Flower Boy",
      artist: "Tyler, The Creator",
      img: "flowerboy.jpg"
    },
  ]

  selectedSong:any;

  selectSong(song:any) {
    this.selectedSong = song
    this.outputToParent.emit(song)
  }

  constructor() {

  }

  ngOnInit() {
  }

}

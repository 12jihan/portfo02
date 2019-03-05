import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
import { Type } from '@angular/compiler';

@Component({
  selector: 'app-sub-banner',
  templateUrl: './sub-banner.component.html',
  styleUrls: ['./sub-banner.component.scss']
})
export class SubBannerComponent implements OnInit {

  typed;
  options: object = {
    strings: [
      "I am ^1000 a Creator", 
      "I am a Designer",
      "I am a Front End Developer^1000",
    ],
    typeSpeed: 40,
    backSpeed: 50,
    loop: true,

  };
  
  constructor() { }
  
  ngOnInit() {
    this.typed = new Typed('#bannerSubtitle', this.options);
  }

}

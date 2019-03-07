import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-goals',
  templateUrl: './sub-goals.component.html',
  styleUrls: ['./sub-goals.component.scss']
})
export class SubGoalsComponent implements OnInit {

  listItems: any = [
    "Learn About Orchestrating Containers",
    "JWT Authentication",
    "Build an app in ReactJS",
    "AI / Machine Learning",
    "Vue.js",
    "Pick up a Lower Level Programming Language (C / Python)",
    "Start up a social media specifically for this"
  ]

  constructor() { }

  ngOnInit() {
  }

}

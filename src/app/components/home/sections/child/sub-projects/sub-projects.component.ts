import { Component, OnInit } from '@angular/core';
import { GithubService } from 'src/app/services/github-service.service';

@Component({
  selector: 'app-sub-projects',
  templateUrl: './sub-projects.component.html',
  styleUrls: ['./sub-projects.component.scss']
})
export class SubProjectsComponent implements OnInit {

  constructor(private gitList: GithubService) { }
  
  repoList;


  ngOnInit() {
    this.getList()
  }
  
  getList() {
    this.gitList.getRepo().subscribe(
      repos => this.repoList = repos
    );
  }
}

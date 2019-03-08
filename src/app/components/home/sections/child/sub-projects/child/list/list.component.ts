import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../../../../../../../app/services/github-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  repoList;

  constructor(private _gitData: GithubService) { }

  ngOnInit() { 
    this.getList();
  }

  getList() {
    this._gitData.getRepo().subscribe(
      data => this.repoList = data
    )
  }

}

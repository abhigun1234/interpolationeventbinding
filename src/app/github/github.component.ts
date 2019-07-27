import { Component, OnInit } from '@angular/core';
import {GithubService} from '..//github.service'
@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {
  searchResult;
  constructor(private github:GithubService) { }

  ngOnInit() {
  }

  searchUser()
  {
    this.github.seacrhGithubUser().subscribe(res=>{

      console.log(res)
      this.searchResult=res
    })  
  }

}

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient:HttpClient) { }

  public seacrhGithubUser()
  { 
    var searchText='ab'
    return this.httpClient.get('http://api.github.com/search/users?q=' + searchText)

  }

}

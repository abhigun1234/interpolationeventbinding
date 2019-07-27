import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  data:string ="bye"
  constructor() { 
    alert('construstor called')
  }

  ngOnInit() {
    alert('ngOnInit')
  }

  calllMe(val)
  {

    alert('call me')
    alert(val)
  }

}

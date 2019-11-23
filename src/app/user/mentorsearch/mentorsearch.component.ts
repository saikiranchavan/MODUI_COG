import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentorsearch',
  templateUrl: './mentorsearch.component.html',
  styleUrls: ['./mentorsearch.component.css']
})
export class MentorsearchComponent implements OnInit {

  constructor() { }
  proposed :boolean=false;
  check(){
    this.proposed=true;
  }
  ngOnInit() {
  }

}

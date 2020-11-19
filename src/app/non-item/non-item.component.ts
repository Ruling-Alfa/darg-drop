import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-non-item',
  templateUrl: './non-item.component.html',
  styleUrls: ['./non-item.component.css']
})
export class NonItemComponent implements OnInit {
  
  @Input() data : string;
  
  constructor() { }

  ngOnInit(): void {
  }

}

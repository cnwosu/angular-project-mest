import { Component, OnInit } from '@angular/core';
import { Amaka } from '../amaka';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {
 
  amaka: Amaka = {
    firstname: 'amaka',
    lastname: 'nwosu',
    DOB: new Date(2018, 4, 11),
    gender: 'F',
    pretty: true
  };

  constructor() { }

  ngOnInit() {
  }

}
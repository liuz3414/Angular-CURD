import { Component, OnInit } from '@angular/core';

import { PersonService } from '../person.service';
import { Person } from '../person';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  persons: Person[] = [];
 
  constructor(public personService: PersonService) { }


  ngOnInit(): void {
    this.getPersons();
  }
  
  getPersons(){
    this.personService.getAll().subscribe((data: Person[])=>{
      this.persons = data;
      console.log(this.persons);
    })
  }

  deletePerson(id){
    this.personService.delete(id).subscribe(res => {
      this.getPersons();
    })
  }

}

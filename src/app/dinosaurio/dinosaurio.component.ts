import { Component, OnInit } from '@angular/core';
import { Dinosaurio } from './dinosaurio';
import { dataDinosaurios } from './dataDinosaurios';
import { DinosaurioService } from './dinosaurio.service';

@Component({
  selector: 'app-dinosaurio',
  templateUrl: './dinosaurio.component.html',
  styleUrls: ['./dinosaurio.component.css']
})
export class DinosaurioComponent implements OnInit {
  dinosaurios: Array<Dinosaurio> = [];
  constructor() { }
  getDinosaurioList():Array<Dinosaurio>{
    return dataDinosaurios;
  }


  ngOnInit() {
    this.dinosaurios = this.getDinosaurioList();
  }
}

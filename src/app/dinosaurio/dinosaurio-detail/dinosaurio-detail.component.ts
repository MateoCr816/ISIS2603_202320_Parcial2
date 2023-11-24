import { Component, OnInit, Input } from '@angular/core';
import { DinosaurioDetail} from '../dinosaurio-detail';


@Component({
  selector: 'app-dinosaurio-detail',
  templateUrl: './dinosaurio-detail.component.html',
  styleUrls: ['./dinosaurio-detail.component.css']
})
export class DinosaurioDetailComponent implements OnInit {

  @Input() dinosaurioDetail!: DinosaurioDetail;

  constructor() { }

  ngOnInit() {
  }

}

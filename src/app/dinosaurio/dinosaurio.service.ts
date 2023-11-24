import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dinosaurio } from './dinosaurio';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DinosaurioService {
  
  private apiUrl = environment.baseUrl + 'dinosaurios.json';

  constructor(private http: HttpClient) { }

  getDinosaurios(): Observable<Dinosaurio[]> {
    return this.http.get<Dinosaurio[]>(this.apiUrl);
}
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HofModel } from '../models/hof-model';

@Injectable({
  providedIn: 'root'
})
export class HofService {

  constructor(private http: HttpClient) {}

  getHof():Observable<HofModel>{
    return this.http.get<HofModel>("https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json");
  }

}

import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { DonutModel } from '../models/donut-model';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  constructor(private http: HttpClient) {}

  getDonut():Observable<DonutModel>{
    return this.http.get<DonutModel>("https://grandcircusco.github.io/demo-apis/donuts.json");
  }



}

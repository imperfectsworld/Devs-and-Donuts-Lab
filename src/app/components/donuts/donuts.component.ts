import { Component } from '@angular/core';
import { DonutService } from '../../services/donut.service';
import { DonutModel } from '../../models/donut-model';
import { FamousPeopleComponent } from '../famous-people/famous-people.component';

@Component({
  selector: 'app-donuts',
  standalone: true,
  imports: [FamousPeopleComponent],
  templateUrl: './donuts.component.html',
  styleUrl: './donuts.component.css'
})
export class DonutsComponent {

  donutResult:DonutModel = {} as DonutModel; // used {} because the api is returning a object
  constructor(private donutService: DonutService){}
  display:boolean = false;
  
  ngOnInit(){
              this.callDonutApi();
  }

  callDonutApi(){
    this.donutService.getDonut().subscribe((response:DonutModel) => {
      console.log(response);
      this.donutResult = response; })
  }

  toggleDisplay(){
    this.display = !this.display;
  }

}

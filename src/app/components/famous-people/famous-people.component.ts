import { Component } from '@angular/core';
import { HofModel } from '../../models/hof-model';
import { HofService } from '../../services/hof.service';

@Component({
  selector: 'app-famous-people',
  standalone: true,
  imports: [],
  templateUrl: './famous-people.component.html',
  styleUrl: './famous-people.component.css'
})
export class FamousPeopleComponent {

    hofResult:HofModel = {} as HofModel;
    constructor(private hofService: HofService){}
  
    ngOnInit(){
      this.callApi();
    }
    callApi(){
  
      this.hofService.getHof().subscribe((response:HofModel) => {
        console.log(response);
        this.hofResult = response;
  
  
      })
    }


}

import { Component } from '@angular/core';
import { forkJoin, of } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent   {
  title = 'hero';
  //types of data bindings 1.interpolation, 2.property binding, 3.event binding, 4.two-way data binding
  name:string="Angular16";
  isDisabled:boolean=false;
  count:number=0;
 firstname:string="hero1";
  increment(){
    this.count++;
    console.log(this.count,this.firstname);
    
  }

  stattic1$=of(["Mp","Guj","Raj","Up","Bihar"]);
  stattic2$=of(["India","USA","UK","Canada","Australia"]);

  constructor(){
   
    forkJoin([this.stattic1$,this.stattic2$]).subscribe(res=>{
      
      console.log(res);
    });

    this.stattic1$.subscribe(res=>{
      
      console.log(res);
      
    });
    this.stattic2$.subscribe(res=>{
      
      console.log(res);
      
    });
  }

}

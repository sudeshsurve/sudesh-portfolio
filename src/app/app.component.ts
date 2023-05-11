import { Component } from '@angular/core';
import { filter, from, map } from 'rxjs';
import { GlobalService } from './service/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
 
   array:any[] = []
   data = [{
    name:"sudesh" , 
    gender:"male"
   }] 
   
  constructor(private gs: GlobalService){
    this.gs.getAllJob().subscribe({
      next :(res)=>{
        this.array  = res
        this.gs.jobsSubject$.next(this.array)
      },
      error :(err)=>{
         console.log( "error", err)
      },
      complete() {
          console.log('complete');  
      },
    })
  }
   

  onClicked(data: any){
      
  }
  


}


  


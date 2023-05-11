import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-childtwo',
  templateUrl: './childtwo.component.html',
  styleUrls: ['./childtwo.component.scss']
})
export class ChildtwoComponent implements OnInit {
  @Input('userarray') array: any[] = []
  jobsArray: any[] = []
  constructor(private gs: GlobalService) { }
  ngOnInit(): void {
    this.getJobs()
  }
  getJobs() {
    this.gs.jobsSubject$.pipe(map((res: Object) => {
      console.log(res);
      return res
    })).subscribe((res: any) => {
      console.log(res);
      this.jobsArray = res
    })
  }



}
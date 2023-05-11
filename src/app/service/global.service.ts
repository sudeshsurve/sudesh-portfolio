import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError, filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http :HttpClient) { }
  jobsSubject$ = new Subject<any>();

  getAllJob(){
     return  this.http.get<any[]>("http://localhost:3000/job/alljobs")
   }
    
}

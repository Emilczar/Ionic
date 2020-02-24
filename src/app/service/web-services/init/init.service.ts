import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { BackendService } from '../backend/backend.service';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  constructor(private backend: BackendService) { }


  init() {
     forkJoin(
         this.backend.getInfo(),
         this.backend.getSections(),
         this.backend.getRooms(),
     ).subscribe(([info, sections, rooms]) => {
        console.log(info)
        console.log(sections)
        console.log(rooms)
     })
  }


}

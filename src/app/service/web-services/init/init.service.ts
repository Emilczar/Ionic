import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { BackendService } from '../backend/backend.service';
import { AdapterService } from '../adapter/adapter.services';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  constructor(private backend: BackendService, private adapter: AdapterService) { }


  init() {
     forkJoin(
         this.backend.getInfo(),
         this.backend.getSections(),
         this.backend.getRooms(),
     ).subscribe(([info, sections, rooms]) => {
        this.adapter.setInfo(info)
        console.log(sections)
        console.log(rooms)
     })
  }


}

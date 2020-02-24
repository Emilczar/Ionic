import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { BackendService } from '../backend/backend.service';
import { AdapterService } from '../adapter/adapter.services';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InitService {

  constructor(private backend: BackendService, private adapter: AdapterService) { }


  init() {
     forkJoin(
         this.backend.getInfo(),
         this.backend.getSections(),
     ).subscribe(([info, sections]) => {
        this.adapter.setInfo(info)
        this.adapter.setSection(sections)
     })
  }

}

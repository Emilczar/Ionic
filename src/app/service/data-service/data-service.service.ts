import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { InfoMobile } from 'src/models/frontend/infoMobile';
import { Sections } from 'src/models/backend/sections';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  private info: InfoMobile = null;
  private sections: Sections[] = null;
  private info$ = new ReplaySubject<InfoMobile>();
  private sections$ = new ReplaySubject<Sections[]>();
  setInfo(info: InfoMobile) {
      this.info = info;
      this.info$.next(this.info);
  }

  setSections(sections: Sections[]) {
    this.sections = sections;
    this.sections$.next(sections);
  }

  getInfo():Observable<InfoMobile> {
  return this.info$.asObservable();
  }

  getSections():Observable<Sections[]> {
    return this.sections$.asObservable();
    }
}

import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { InfoMobile } from 'src/models/frontend/infoMobile';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }


  private info: InfoMobile = null;

  private info$ = new Subject<InfoMobile>();

  setInfo(info: InfoMobile) {
      this.info = info;
      this.info$.next(this.info);
  }


  getInfo():Observable<InfoMobile> {
  return this.info$.asObservable();
  }
}

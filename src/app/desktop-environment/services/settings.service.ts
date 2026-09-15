import { Injectable } from '@angular/core';
import { OSSettingsObject } from "./model/settings-object.model";
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private settingsSubject = new BehaviorSubject<OSSettingsObject>(this.loadSettings());
  settings$: Observable<OSSettingsObject> = this.settingsSubject.asObservable();

  constructor() { }

  private loadSettings() {
    // todo: load from local storage, if not available then default
    return <OSSettingsObject>{
      theme: '',
      desktopBackground: ''
    }
  }
}

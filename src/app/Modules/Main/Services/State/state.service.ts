import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private state: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {
  }

  getState(): Observable<boolean> {
    return this.state.asObservable();
  }

  setState(value: boolean): void {
    this.state.next(value)
  }
}

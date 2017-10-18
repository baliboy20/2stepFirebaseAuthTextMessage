import {Injectable} from '@angular/core';

@Injectable()
export class WindowService {

  constructor() {
  }

  getWindowRef() {
    return window;
  }

}

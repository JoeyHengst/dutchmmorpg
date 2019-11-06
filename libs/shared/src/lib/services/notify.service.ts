import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material';

/// Notify users about errors and other helpful stuff
export interface Msg {
  content: string;
  style: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotifyService {
  constructor(private sb: MatSnackBar) {}
  private _msgSource = new Subject<Msg | null>();

  msg = this._msgSource.asObservable();

  update(
    content: string,
    style: 'snackbar-error' | 'snackbar-info' | 'snackbar-success'
  ) {
    const msg: Msg = { content, style };
    this.sb.open(msg.content, 'OK', {
      duration: 2000,
      panelClass: [style]
    });
  }

  clear() {
    this._msgSource.next(null);
  }
}

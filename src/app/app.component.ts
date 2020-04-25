import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { shareReplay } from 'rxjs/operators';
import { HttpRequestService } from './http-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  search: string;
  public result$: Observable<any>;

  constructor(private httpRequestService: HttpRequestService) {}

  getStuff() {
    if (!this.result$) {
      return (this.result$ = this.httpRequestService
        .resolveProduct(this.search)
        .pipe(shareReplay({ bufferSize: 1, refCount: true })));
    }
    return this.result$;
  }
}

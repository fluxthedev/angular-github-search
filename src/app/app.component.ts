import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { shareReplay } from 'rxjs/operators';
import { HttpRequestService } from './services/http-request.service';
import { GitResponse } from './interfaces/gitResponse';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  search: string;
  public array: any;
  constructor(private httpRequestService: HttpRequestService) {}

  getStuff() {
    this.search = (<HTMLInputElement>document.getElementById('search')).value;
    this.httpRequestService
      .resolveProduct(this.search)
      .subscribe(res => {
        this.array = res["items"] as GitResponse[]
      });
  }
}

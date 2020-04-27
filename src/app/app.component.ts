import { Component } from '@angular/core';
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
    this.search = (<HTMLInputElement>(
      document.getElementById('search-input')
    )).value;

    if (!this.array) {
      this.httpRequestService
        .resolveProduct(this.search)
        .pipe(shareReplay(1))
        .subscribe((res) => {
          this.array = res['items'] as GitResponse[];
        });
    }

    return this.array;
  }
}

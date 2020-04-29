import { Component } from '@angular/core';
import { shareReplay, expand, take } from 'rxjs/operators';
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
  combinedArray = [];
  constructor(private httpRequestService: HttpRequestService) {}

  getStuff() {
    let i = 1;
    this.search = (<HTMLInputElement>(
      document.getElementById('search-input')
    )).value;

    if (!this.array) {
      this.httpRequestService
        .resolveProduct(this.search, i)
        .pipe(
          expand((val) => {
            i++;
            return this.httpRequestService.resolveProduct(this.search, i);
          }),
          take(2),
          shareReplay(1)
        )
        .subscribe((res) => {
          let items = res['items'];
          for (let x = 0; x <= items.length; x++) {
            this.combinedArray.push(items[x]);
          }
          this.combinedArray.pop();
          this.array = this.combinedArray as GitResponse[];
        });
    }

    return this.array;
  }
}

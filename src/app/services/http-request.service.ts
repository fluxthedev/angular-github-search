import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { GitResponse } from '../interfaces/gitResponse';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  constructor(private http: HttpClient) {}

  resolveProduct(search: string, i: number): Observable<GitResponse[]> {
    const headerDict = {
      Accept: 'application/vnd.github.cloak-preview',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };

    const URL = 'https://api.github.com/search/users?q=';

    return this.http.get<GitResponse[]>(
      URL + search + '&page=' + i + '&per_page=80',
      requestOptions
    );
  }
}

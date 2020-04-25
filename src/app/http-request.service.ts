import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  constructor(private http: HttpClient) {}

  resolveProduct(search: string): Observable<any> {
    const headerDict = {
      Accept: 'application/vnd.github.cloak-preview',
    };

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    const URL = 'https://api.github.com/search/commits?q=angular';
    console.log('Request is sent!');
    return this.http.get(URL, requestOptions);
  }
}

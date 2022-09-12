import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

import { environment } from 'env';
import { Translate } from 'src/app/models/translation.model';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor(private http: HttpClient) { }

  translate(lang: string, text: string): Observable<Translate> {
    return this.http.post<Translate>(environment.translateApiBaseUrl,
      {
        "text": text,
        "target": lang,
        "source": "en"
      },
      {
        headers: new HttpHeaders()
          .set(environment.contentTypeName, environment.contentTypeValue)
          .set(environment.XRapidAPIKeyName, environment.XRapidAPIKeyValue)
          .set(environment.XRapidHostName, environment.XRapidHostValue),
      })
    .pipe(catchError(this.handleError))
  }

  private handleError() {
    let errorMessage = 'Something went wrong.'
    return throwError(errorMessage)
  }

}
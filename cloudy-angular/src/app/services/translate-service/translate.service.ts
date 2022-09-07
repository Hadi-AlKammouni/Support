import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'env';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {

  constructor(private http: HttpClient) { }

  translate(lang: string, text: string) {
    return this.http.post(environment.translateApiBaseUrl,
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
  }

}

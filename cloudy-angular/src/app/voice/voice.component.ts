import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { TranslateService } from '../services/translate-service/translate.service';
import { VoiceRecognitionService } from '../services/voice-service/voice-recognition.service';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.css']
})
export class VoiceComponent implements OnInit {

  disableSelect = new FormControl(false);
  isTalking = false
  isText = false
  isTranslating = false
  en = true
  ar = false
  es = false
  lang = 'en'

  constructor( public service : VoiceRecognitionService, private translateService: TranslateService, private toastr: ToastrService ) { 
    this.service.init()
  }

  ngOnInit(): void {
  }

  startService(){
    this.isTalking = true
    this.service.start()
  }
  
  stopService(){
    this.isText = true
    this.isTalking = false
    this.service.stop()
  }

  clear() {
    this.isText = false
    this.service.clear()
  }

  selectLanguage(event: any) {
    if (event === 'en') {
      this.lang = 'en'
      this.en = true
      this.ar = false
      this.es = false
    } else if (event === 'ar') {
      this.lang = 'ar'
      this.ar = true
      this.en = false
      this.es = false
    } else if (event === 'es') {
      this.lang = 'es'
      this.es = true
      this.en = false
      this.ar = false
    }
  }

  translate() {
    this.isTranslating = true
    this.translateService.translate(this.lang, this.service.text)
    .subscribe(response => {
      this.isTranslating = false
      console.log(response)
      this.toastr.success('Success', `Translated successfully.`);
    }, errorMessage => {
      this.isTranslating = false
      console.log(errorMessage)
      this.toastr.error('Error', 'Something went wrong.');
   })
  }

}

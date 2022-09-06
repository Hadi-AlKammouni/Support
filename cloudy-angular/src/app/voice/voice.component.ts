import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

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
  en = true
  ar = false
  es = false

  constructor( public service : VoiceRecognitionService ) { 
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
      this.en = true
      this.ar = false
      this.es = false
    } else if (event === 'ar') {
      this.ar = true
      this.en = false
      this.es = false
    } else if (event === 'es') {
      this.es = true
      this.en = false
      this.ar = false
    }
  }

}

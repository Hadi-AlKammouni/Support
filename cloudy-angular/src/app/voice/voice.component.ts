import { Component, OnInit } from '@angular/core';

import { VoiceRecognitionService } from '../services/voice-service/voice-recognition.service';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.css']
})
export class VoiceComponent implements OnInit {

  constructor( public service : VoiceRecognitionService) { 
    this.service.init()
  }

  ngOnInit(): void {
  }

  startService(){
    this.service.start()
  }

  stopService(){
    this.service.stop()
  }

}

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { VoiceRecognitionService } from '../services/voice-service/voice-recognition.service';

@Component({
  selector: 'app-voice',
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.css']
})
export class VoiceComponent implements OnInit {

  isTalking = false

  constructor( public service : VoiceRecognitionService, private toastr: ToastrService) { 
    this.service.init()
  }

  ngOnInit(): void {
  }

  startService(){
    this.isTalking = true
    this.service.start()
  }

  stopService(){
    this.isTalking = false
    this.service.stop()
  }

  clickStart() {
    this.toastr.info('Info', 'Click on start button to record.');
  }

}

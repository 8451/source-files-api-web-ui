import { Component, OnInit } from '@angular/core';

// services
import { SourceWebService } from '../services/source-web.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  checkboxTruthy = false;
  constructor(
    private sourceWebService: SourceWebService
  ) { }

  ngOnInit() {
  }

  toggleCheckbox() {
    this.checkboxTruthy = !this.checkboxTruthy;
  }

}

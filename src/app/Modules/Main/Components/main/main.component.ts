import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {StateService} from "../../Services/State/state.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  stateForm!: FormGroup;
  appName = 'Text Analyzer';
  state: boolean = false;

  constructor(private fb: FormBuilder, private stateService: StateService) {
  }

  ngOnInit() {
    this.createForm();
    this.stateForm.get('state')?.valueChanges.subscribe(res => {
      this.state = res;
      this.stateService.setState(res)
    })
  }

  getState(): void {
    this.stateService.getState().subscribe(res => {
      this.state = res;
    })
  }

  createForm(): void {
    this.stateForm = this.fb.group({
      state: [this.state]
    })
  }
}

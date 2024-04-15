import {Component, OnInit} from '@angular/core';
import {StateService} from "../../../../Services/State/state.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-text-analyzer',
  templateUrl: './text-analyzer.component.html',
  styleUrl: './text-analyzer.component.scss'
})
export class TextAnalyzerComponent implements OnInit {
  state: boolean = true;
  textForm!: FormGroup;
  analyzeList: any[] = [];

  constructor(private stateService: StateService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.getState();
    this.createForm();
  }

  createForm(): void {
    this.textForm = this.fb.group({
      text: [null, [Validators.required]],
      type: ['all', [Validators.required]],
    })
  }

  getState(): void {
    this.stateService.getState().subscribe(res => {
      this.state = res;
    })
  }

  onSubmit(): void {
    if (!this.textForm.valid) {
      return;
    }
    if (this.state) {
      console.log('online')
      this.analyzeList.push(this.textForm.value)
    } else {
      this.onDetectType();
    }
  }

  onDetectType(): void {
    if (this.textForm.value['type'] === 'all') {
      this.analyzeList.push(this.countLetters(this.textForm.value['text']))
    } else if (this.textForm.value['type'] === 'vowels') {
      this.analyzeList.push(this.extractVowels(this.textForm.value['text']))
    } else {

    }
  }

  countLetters(text: string): { [key: string]: number } {
    const letterCount: { [key: string]: number } = {};
    for (const char of text) {
      if (/[a-zA-Z]/.test(char)) {
        const normalizedChar = char.toLowerCase();
        letterCount[normalizedChar] = (letterCount[normalizedChar] || 0) + 1;
      }
    }
    return letterCount;
  }

  extractVowels(word: string): string {
    const vowels = 'aeiouAEIOU';
    let result = '';
    for (const char of word) {
      if (vowels.includes(char)) {
        result += char;
      }
    }
    return result;
  }
}

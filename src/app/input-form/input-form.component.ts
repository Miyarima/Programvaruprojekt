import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './input-form.component.html',
  styleUrl: './input-form.component.css',
})
export class InputFormComponent {
  userInput = '';
  data: string[][] = [];
  url: string = 'https://localhost:7004/OpenAi/CompleteSentece';

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.data.push(['user', this.userInput]);
    this.http
      .request('POST', this.url, {
        params: { text: this.userInput },
        responseType: 'text',
      })
      .subscribe((response) => {
        this.data.push(['gpt', response]);
      });

    this.userInput = '';
  }
}

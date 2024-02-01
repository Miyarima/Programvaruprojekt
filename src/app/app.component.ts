import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputFormComponent } from './input-form/input-form.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputFormComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Chat with OpenAI';
}

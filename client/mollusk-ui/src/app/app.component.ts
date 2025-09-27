import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConversationComponent } from './component/conversation/conversation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConversationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mollusk-ui';
}

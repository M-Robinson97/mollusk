import { Component } from '@angular/core';
import { ConversationService } from '../../service/conversation.service';
import { BaseMessage } from '../../model/message/baseMessage';
import { Message } from '../../model/message/message';

@Component({
  selector: 'app-conversation',
  standalone: true,
  imports: [],
  templateUrl: './conversation.component.html',
  styleUrl: './conversation.component.scss'
})
export class ConversationComponent {
  messages: BaseMessage[] = [];
  errorMessage: string = "";

  constructor(private conversationService: ConversationService) {}
  ngOnInit(): void {
    this.loadMessages();    
  }

  loadMessages(): void {
    // this.conversationService.getMessages().subscribe({
    //   next: messages => this.messages = messages,
    //   error: () => {
    //     this.errorMessage = 'An error occurred while fetching messages.';
    //   },
    //   complete: () => console.log('Fully loaded')
    // });

    var testMessages = [
      new Message("Mark","Hello world",new Date())
    ]
    testMessages.forEach(message => this.messages.push(message));
  }
}

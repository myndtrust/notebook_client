import { Component } from '@angular/core';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrl: './notebook.component.css'
})
export class NotebookComponent {

  userInput: string = '';  // This is used for ngModel binding
  response: string | null = null;  // This will store the response
  interactionHistory: { prompt: string, response: string }[] = [];  // Array to store interaction history

  sendPrompt() {
    // Simulate a response from the model
    this.response = `This is a simulated response for: ${this.userInput}`;
    
    // Store the interaction in history
    this.interactionHistory.push({
      prompt: this.userInput,
      response: this.response
    });
    
    // Clear the input field after submission
    this.userInput = '';
  }

}

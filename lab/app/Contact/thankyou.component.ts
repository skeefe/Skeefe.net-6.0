import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
    templateUrl: './app/Contact/thank-you.htm'
})

export class ThankYouComponent {
	constructor(
		private title: Title
    ) {
        this.title.setTitle('Contact | Skeefe.net');
    }
}
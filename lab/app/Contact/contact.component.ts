import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
    templateUrl: './app/Contact/contact.htm'
})

export class ContactComponent {
	constructor(
		private title: Title
    ) {
        this.title.setTitle('Contact | Skeefe.net');
    }
}
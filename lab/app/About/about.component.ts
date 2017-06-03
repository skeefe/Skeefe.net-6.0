import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
    templateUrl: './app/About/about.htm',
})

export class AboutComponent {
	constructor(
		private title: Title
    ) {
        this.title.setTitle('About | Skeefe.net');
    }
}
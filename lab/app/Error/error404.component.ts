import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';


@Component({
	templateUrl: './app/Error/error404.htm'
})

export class Error404Component {
	constructor(
		private title: Title
    ) {
        this.title.setTitle('Error: 404 | Skeefe.net');
    }
}
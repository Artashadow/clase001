import { Component } from '@angular/core'

@Component({
    selector: 'my-component',
    templateUrl: './my-component.components.html',
    styleUrls: ['./my-component.components.css']
})

export class MyComponent {

    content = 'Hola buenos días mundo';

    constructor() {

    }

    click(event: any) {
        console.log('event', event);
        alert('click -')
    }

}
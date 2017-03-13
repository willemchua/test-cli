import { Component } from '@angular/core';

@Component({
    selector:'child-component',
    template:`
        <h1 *ngIf = "valid"> Finally </h1>
        <button (click) = doToggle()>Toggle</button>

    `

})export class ChildComponent{

    message:string = "Someone";
    valid:boolean = true;


    doToggle()
    {
        this.valid = !this.valid;
        console.log(this.valid);
        
    }
}
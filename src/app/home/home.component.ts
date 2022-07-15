import { Component, ViewChild, AfterViewInit, AfterContentInit, OnInit, AfterContentChecked} from '@angular/core';
import { ChildComponent } from '../children/children.component';
import { Router } from '@angular/router';

@Component({
    selector: 'home-app',
    template: `
            <h1> Hello, {{nama}}. Test</h1>
            <child-component> </child-component>

    `
})
export class HomeComponent implements AfterViewInit{
    @ViewChild(ChildComponent)
    private ChildComponent: ChildComponent;

    constructor(){};

    nama:string;

    ngAfterViewInit(){
        this.ChildComponent = new ChildComponent();

        this.nama = this.ChildComponent.message;
    }



}
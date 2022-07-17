import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-input-hidden',
    templateUrl: './input-hidden.component.html',
    styleUrls: ['../angular-json-form.component.scss']
})
export class InputHiddenComponent implements OnInit {

    @Input() FormGroup: FormGroup;
    @Input() field: any = {};

    constructor() { }

    ngOnInit(): void {
    }

}
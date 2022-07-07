import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-input-checkbox',
    templateUrl: './input-checkbox.component.html',
    styleUrls: ['../angular-json-form.component.scss']
})
export class InputCheckboxComponent implements OnInit {

    @Input() FormGroup: FormGroup;
    @Input() field: any = {};
    @Input() legends: any;
    @Input() lang: string;
    @Output() changed = new EventEmitter<any>();

    constructor() { }

    ngOnInit(): void {
    }

    changedEvent() {
        try {
            this.changed.emit(this.field);
        } catch (e) {
            console.error("Error", e);
        };
    }

}
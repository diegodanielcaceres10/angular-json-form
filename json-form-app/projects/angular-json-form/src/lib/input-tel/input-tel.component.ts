import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-input-tel',
    templateUrl: './input-tel.component.html',
    styleUrls: ['../angular-json-form.component.scss']
})
export class InputTelComponent implements OnInit {

    @Input() FormGroup: FormGroup;
    @Input() field: any = {};
    @Input() lang: string;
    @Input() translations: any;
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
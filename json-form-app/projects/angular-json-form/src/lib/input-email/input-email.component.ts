import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-input-email',
    templateUrl: './input-email.component.html',
    styleUrls: ['../angular-json-form.component.scss']
})
export class InputEmailComponent implements OnInit {

    @Input() FormGroup: FormGroup;
    @Input() field: any = {};
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
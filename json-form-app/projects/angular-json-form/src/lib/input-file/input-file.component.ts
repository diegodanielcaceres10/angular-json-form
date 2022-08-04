import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-input-file',
    templateUrl: './input-file.component.html',
    styleUrls: ['../angular-json-form.component.scss']
})
export class InputFileComponent implements OnInit {

    @Input() FormGroup: FormGroup;
    @Input() field: any = {};
    @Input() legends: any;
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

    drawFile(files) {
        try {
            if (files && files.length) {
                if (this.field.multiple && this.field.maxfiles < this.field.files.length + files.length) {
                    this.field.error = "COUNT";
                    return;
                };
                for (let item of files) {
                    const file: File = item;
                    if (["application/pdf", "image/png", "image/jpeg", "image/jpg"].indexOf(file.type) == -1) {
                        this.field.error = "FORMAT";
                        return;
                    };
                    if (this.field.max < file.size) {
                        this.field.error = "SIZE";
                        return;
                    };
                    if (this.field.multiple) {
                        this.field.files.push(file);
                        let values = this.FormGroup.controls[this.field.name].value || [];
                        values.push(file);
                        this.FormGroup.controls[this.field.name].setValue(values);
                    } else {
                        this.field.value = file;
                        this.FormGroup.controls[this.field.name].setValue(file);
                    };
                };
            };
        } catch (e) {
            console.error("Error", e);
        };
    }

    removeFile(index) {
        try {
            if (this.field && this.field.files && this.field.files[index]) {
                this.field.files.splice(index, 1);
                let values = this.FormGroup.controls[this.field.name].value;
                if (values && values[index]) {
                    values.splice(index, 1);
                    if (values.length == 0) this.FormGroup.controls[this.field.name].setValue("");
                    else this.FormGroup.controls[this.field.name].setValue(values);
                };
            };
        } catch (e) {
            console.error("Error", e);
        };
    }

}
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-input-select',
    templateUrl: './input-select.component.html',
    styleUrls: ['../angular-json-form.component.scss']
})
export class InputSelectComponent implements OnInit {

    @ViewChild("button") button: ElementRef;
    @ViewChild("input") input: ElementRef;
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

    filterOptions(e) {
        try {
            let value = e.target.value;
            if (this.field.options && this.field.options.length > 0 && this.field.searchable) {
                if (this.field.option) {
                    this.field.optionsView = this.field.options.filter(i => i[this.field.option.label].toLowerCase().includes(value.toLowerCase()));
                } else {
                    this.field.optionsView = this.field.options.filter(i => i.toLowerCase().includes(value.toLowerCase()));
                };
            };
        } catch (e) {
            console.error("Error", e);
        };
    }

    selectOption(option) {
        try {
            this.field.selected = true;
            if (this.field.multiple) {
                let items = this.field.value;
                if (!items) items = [];
                let item = items.find(i => {
                    if (this.field.option && this.field.option.value) return i[this.field.option.value] && option[this.field.option.value] && i[this.field.option.value] == option[this.field.option.value];
                    else if (i.value && option.value) return i.value == option.value;
                    else if (typeof i == "string") return i == option;
                });
                if (item && !item.deleted) {
                    this.field.error = "DUPLICATE";
                } else if (item && item.deleted) {
                    item.deleted = false;
                    this.FormGroup.controls[this.field.name].setValue(this.field.value);
                } else {
                    this.field.value.push(option);
                    this.FormGroup.controls[this.field.name].setValue(this.field.value);
                };
            } else {
                if (this.field.option && this.field.option.value) this.FormGroup.controls[this.field.name].setValue(option[this.field.option.value]);
                else if (option.value !== undefined) this.FormGroup.controls[this.field.name].setValue(option.value);
                else this.FormGroup.controls[this.field.name].setValue(option);
                this.field.value = option;
            };
            this.field.optionsView = this.field.options;
            this.button && this.button.nativeElement && this.button.nativeElement.blur();
            this.input && this.input.nativeElement && this.input.nativeElement.blur();
        } catch (e) {
            console.error("Error", e);
        };
    }

    deleteOption(index) {
        try {
            let items = this.field.value;
            if (this.field.option && this.field.option.value) {
                if (items[index]) items[index].deleted = true;
            } else if (items[index] && items[index].label) {
                items[index].deleted = true;
            } else {
                items && items.splice(index, 1);
            };
            if (items.filter(i => !i.deleted).length > 0) this.FormGroup.controls[this.field.name].setValue(items);
            else this.FormGroup.controls[this.field.name].setValue("");
        } catch (e) {
            console.error("Error", e);
        };
    }

}
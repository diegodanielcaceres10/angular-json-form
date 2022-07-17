import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-input-list',
    templateUrl: './input-list.component.html',
    styleUrls: ['../angular-json-form.component.scss']
})
export class InputListComponent implements OnInit {

    @Input() FormGroup: FormGroup;
    @Input() field: any = {};
    @Input() value: string = "";
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

    addItem() {
        try {
            if (this.value) {
                let items = this.field.value;
                if (!items) items = [];
                let item = items.find(i => {
                    if (this.field.option && this.field.option.label) return i[this.field.option.label] && i[this.field.option.label].toLowerCase() == this.value.toLowerCase();
                    else if (i.label) return i.label.toLowerCase() == this.value.toLowerCase();
                    else if (typeof i == "string") return i.toLowerCase() == this.value.toLowerCase();
                });
                if (item && !item.deleted) {
                    this.field.error = "DUPLICATE";
                    return;
                } else if (item && item.deleted) {
                    item.deleted = false;
                } else {
                    if (this.field.option && this.field.option.label) items.push({ [this.field.option.label]: this.value });
                    else items.push(this.value);
                };
                this.FormGroup.controls[this.field.name].setValue(items);
                this.value = "";
                this.field.value = items;
            };
        } catch (e) {
            console.error("Error", e);
        };
    }

    deleteItem(index) {
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
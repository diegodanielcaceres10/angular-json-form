import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-input-date',
    templateUrl: './input-date.component.html',
    styleUrls: ['../angular-json-form.component.scss']
})
export class InputDateComponent implements OnInit {

    @ViewChild("button") button: ElementRef;
    @Input() FormGroup: FormGroup;
    @Input() field: any = {};
    @Input() legends: any;
    @Input() lang: string;
    @Input() translations: any;
    @Output() changed = new EventEmitter<any>();

    current: string = "start";
    data: any = {
        start: {
            date: null,
            year: 0,
            month: 0,
            day: 0,
            days: 0,
            weeks: [1, 8, 15, 22, 29, 36],
        },
        end: {
            date: null,
            days: 0,
            weeks: [1, 8, 15, 22, 29, 36],
        },
    }

    constructor() { }

    ngOnInit(): void {
        try {
            this.data.start.date = new Date();
            this.data.start.year = this.data.start.date.getFullYear();
            this.data.start.month = this.data.start.date.getMonth() + 1;
            if (this.data.start.month < 10) this.data.start.month = "0" + this.data.start.month;
            this.data.end.date = new Date();
            this.data.end.date = new Date(this.data.end.date.setMonth(this.data.end.date.getMonth() + 1));
            this.data.end.year = this.data.end.date.getFullYear();
            this.data.end.month = this.data.end.date.getMonth() + 1;
            if (this.data.end.month < 10) this.data.end.month = "0" + this.data.end.month;
            this.updateDays();
        } catch (e) {
            console.error("Error", e);
        };
    }

    changedEvent() {
        try {
            this.changed.emit(this.field);
        } catch (e) {
            console.error("Error", e);
        };
    }

    changeYear(value) {
        try {
            if (this.data && this.data.start && this.data.start.date) {
                this.data.start.date = new Date(this.data.start.date.setFullYear(this.data.start.date.getFullYear() + value));
            };
            if (this.data && this.data.end && this.data.end.date) {
                this.data.end.date = new Date(this.data.end.date.setFullYear(this.data.end.date.getFullYear() + value));
            };
            this.updateDays();
        } catch (e) {
            console.error("Error", e);
        };
    }

    changeMonth(value) {
        try {
            if (this.data && this.data.start && this.data.start.date) {
                this.data.start.date = new Date(this.data.start.date.setMonth(this.data.start.date.getMonth() + value));
            };
            if (this.data && this.data.end && this.data.end.date) {
                this.data.end.date = new Date(this.data.end.date.setMonth(this.data.end.date.getMonth() + value));
            };
            this.updateDays();
        } catch (e) {
            console.error("Error", e);
        };
    }

    updateDays() {
        try {
            if (this.data && this.data.start) this.getDays(this.data.start);
            if (this.data && this.data.end) this.getDays(this.data.end);
        } catch (e) {
            console.error("Error", e);
        };
    }

    getDays(data) {
        try {
            if (data && data.date) {
                data.year = data.date.getFullYear();
                data.month = data.date.getMonth() + 1;
                if (data.month < 10) data.month = "0" + data.month;
                data.days = new Date(data.date.getFullYear(), data.date.getMonth() + 1, 0).getDate();
                const days = new Date(data.date.getFullYear(), data.date.getMonth(), 1).getDay();
                data.weeks = [];
                let day = 1 - days;
                for (var w = 0; w < 6; w++) {
                    let daysofweek = [];
                    for (var d = 0; d < 7; d++) {
                        if (day > 0 && day <= data.days) {
                            let date = data.year + "/" + data.month + "/" + (day < 10 ? "0" : "") + day;
                            daysofweek.push({ date, weekend: new Date(date).getDay() == 0 || new Date(date).getDay() == 6 });
                        } else {
                            daysofweek.push({});
                        };
                        day++;
                    };
                    data.weeks.push(daysofweek);
                };
            };
        } catch (e) {
            console.error("Error", e);
        };
    }

    blur() {
        try {
            if (this.field.value && !this.field.value[1]) {
                this.current = "start";
                this.field.value = false;
            };
        } catch (e) {
            console.error("Error", e);
        };
    }

    selectDate(value) {
        try {
            if (this.field.range) {
                if (this.current == "start") {
                    this.current = "end";
                    this.field.value = [value];
                } else if (this.current == "end") {
                    this.current = "start";
                    this.field.value.push(value);
                    this.button && this.button.nativeElement && this.button.nativeElement.blur();
                    this.FormGroup.controls[this.field.name].setValue(this.field.value);
                };
            } else {
                this.field.value = value;
                this.button && this.button.nativeElement && this.button.nativeElement.blur();
                this.FormGroup.controls[this.field.name].setValue(this.field.value);
            };
        } catch (e) {
            console.error("Error", e);
        };
    }

}

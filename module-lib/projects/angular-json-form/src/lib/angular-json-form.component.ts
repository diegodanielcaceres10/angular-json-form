import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'angular-json-form',
    templateUrl: './angular-json-form.component.html',
    styleUrls: ['./angular-json-form.component.scss']
})
export class AngularJsonFormComponent implements OnInit {

    @Input() form: any;
    @Input() lang: string = "en-US";
    @Output() send = new EventEmitter<any>();
    @Output() event = new EventEmitter<any>();

    FormGroup: FormGroup;
    legends: any = {
        "en-US": {
            "INVALID": "Invalid form",
            "REQUIRED": "Required field",
            "MAX": "Wrong value",
            "MIN": "Wrong value",
            "MATCH": "Wrong value",
            "FORMAT": "Wrong format",
            "SIZE": "Wrong size",
            "DUPLICATE": "Duplicate value",
            "RIGHT": "Right!",
            "SELECT": "Select",
            "SEARCH": "Search...",
            "ADD": "Add",
            "EMPTY": "No options found",
        },
        "es-ES": {
            "INVALID": "Formulario invalido",
            "REQUIRED": "Campo requerido",
            "MAX": "Valor incorrecto",
            "MIN": "Valor incorrecto",
            "MATCH": "Valor incorrecto",
            "FORMAT": "Formato incorrecto",
            "SIZE": "Tamaño incorrecto",
            "DUPLICATE": "Valor duplicado",
            "RIGHT": "Correcto!",
            "SELECT": "Seleccionar",
            "SEARCH": "Buscar...",
            "ADD": "Adicionar",
            "EMPTY": "No hay opciones encontradas",
        },
        "pt-BR": {
            "INVALID": "Formulário inválido",
            "REQUIRED": "Campo obrigatório",
            "MAX": "Valor errado",
            "MIN": "Valor errado",
            "MATCH": "Valor errado",
            "FORMAT": "Formato errado",
            "SIZE": "Tamanho errado",
            "DUPLICATE": "Valor duplicado",
            "RIGHT": "Correto!",
            "SELECT": "Selecionar",
            "SEARCH": "Pesquisar...",
            "ADD": "Adicionar",
            "EMPTY": "Nenhuma opção encontrada",
        },
    };

    constructor() { }

    ngOnInit(): void {
        try {
            this.FormGroup = new FormGroup({});
            if (this.form && this.form.groups && this.form.groups.length > 0) {
                if (this.form.groups) this.form.groups.map((group) => {
                    if (group.fields) group.fields.map((field) => {
                        let validators = this.setValidators(field);
                        if (field.type == "select") {
                            if (field.option && field.option.value) {
                                this.FormGroup.addControl(field.name, new FormControl(field.value && field.value && field.value[field.option.value], validators));
                            } else if (field.value && field.value.value !== undefined) {
                                this.FormGroup.addControl(field.name, new FormControl(field.value.value, validators));
                            } else {
                                this.FormGroup.addControl(field.name, new FormControl(field.value, validators));
                            };
                            if (field.multiple && !field.value) field.value = [];
                        } else if (field.type == "image") {
                            this.FormGroup.addControl(field.name, new FormControl({
                                value: field.multiple && field.value && field.value.map(i => new File([""], i.id)),
                                disabled: field.disabled,
                            }, validators));
                            if (field.multiple && !field.images) field.images = [];
                        } else if (field.type == "checkbox") {
                            this.FormGroup.addControl(field.name, new FormControl(field.value ? true : false));
                        } else {
                            this.FormGroup.addControl(field.name, new FormControl({ value: field.value, disabled: field.disabled }, validators));
                        };
                        if (field.options && field.options.length > 0) field.optionsView = field.options;
                        if (field.type == "list" && !field.value) field.value = [];
                    });
                });
            };
        } catch (e) {
            console.error("Error", e);
        };
    }

    setValidators(field) {
        let validators = [];
        if (field.required) validators.push(Validators.required);
        if (field.max) validators.push(Validators.max(field.max));
        if (field.minlength) validators.push(Validators.minLength(field.minlength));
        return validators;
    };

    changed(field) {
        try {
            this.form.message = false;
            field.error = false;
            let control = this.FormGroup.controls[field.name];
            let value = control.value;

            // actions
            if (field && field.actions && field.actions.length > 0) {
                field.actions.map(a => {
                    if (a.type == "clear" && a.fields && a.fields.length > 0) {
                        a.fields.map(field => {
                            let items = this.FormGroup.controls[field] && this.FormGroup.controls[field].value;
                            this.form.groups.some(g => {
                                let ok = false;
                                g.fields.some(f => {
                                    if (f.name == field) {
                                        if (f.type == "list" || (f.type == "select" && f.multiple)) {
                                            let values = [];
                                            items && items.length > 0 && items.map(i => {
                                                if ((f.option && f.option.value && i[f.option.value]) || i.value) values.push({ ...i, deleted: true });
                                            });
                                            f.value = values || [];
                                        } else {
                                            f.value = "";
                                        };
                                        this.FormGroup.controls[field] && this.FormGroup.controls[field].setValue("");
                                        ok = true;
                                        return true;
                                    };
                                });
                                if (ok) return true;
                            });
                        });
                    } else if (a.type == "enabled") {
                        let valid = false;
                        if (typeof a.match == "string") valid = a.match == value;
                        else if (typeof a.match == "object" && a.match && a.match.value) valid = a.match.value == value;
                        else if (!a.match) valid = value ? true : false;
                        a.fields.map(field => {
                            this.form.groups.some(g => {
                                let ok = false;
                                g.fields.some(f => {
                                    if (f.name == field) {
                                        f.disabled = !valid;
                                        if (valid) this.FormGroup.controls[field].enable();
                                        else this.FormGroup.controls[field].disable();
                                        ok = true;
                                        return true;
                                    };
                                });
                                if (ok) return true;
                            });
                        });
                    } else if (a.type == "required") {
                        let valid = false;
                        if (typeof a.match == "string") valid = a.match == value;
                        else if (typeof a.match == "object" && a.match && a.match.value) valid = a.match.value == value;
                        else if (!a.match) valid = value ? true : false;
                        a.fields.map(field => {
                            this.form.groups.some(g => {
                                let ok = false;
                                g.fields.some(f => {
                                    if (f.name == field) {
                                        f.required = valid;
                                        ok = true;
                                        this.FormGroup.controls[field].setValidators(this.setValidators(f));
                                        this.FormGroup.controls[field].updateValueAndValidity();
                                        return true;
                                    };
                                });
                                if (ok) return true;
                            });
                        });
                    } else if (a.type == "visible" || a.type == "hidden") {
                        let valid = false;
                        if (typeof a.match == "string") valid = a.match == value;
                        else if (typeof a.match == "object" && a.match && a.match.value) valid = a.match.value == value;
                        else if (typeof a.match == "object" && a.match && a.match.length > 0) valid = a.match.indexOf(value) > -1;
                        else if (!a.match) valid = value ? true : false;
                        a.fields.map(field => {
                            this.form.groups.some(g => {
                                let ok = false;
                                g.fields.some(f => {
                                    if (f.name == field) {
                                        f.hidden = a.type == "visible" ? valid : !valid;
                                        ok = true;
                                        return true;
                                    };
                                });
                                if (ok) return true;
                            });
                        });
                    } else if (a.type == "match" && a.field) {
                        if (!this.FormGroup.controls[a.field] || this.FormGroup.controls[a.field].value != value) field.error = "MATCH";
                    };
                });
            };

            // event
            if (field.event && value && field.value != value) this.event.emit({ event: field.event, value });
        } catch (e) {
            console.error("Error", e);
        };
    }

    eventForm(button) {
        try {
            if (button.type != "submit") {
                this.form.error = false;
                this.form.message = "";
                if (button.save) this.form.saving = true;
                this.event.emit(button && button.event);
            };
        } catch (e) {
            console.error("Error", e);
        };
    }

    async submitForm() {
        try {
            this.form.error = false;
            this.form.message = "";
            this.form.saving = true;
            if (this.FormGroup.invalid) {
                this.form.error = true;
                this.form.message = this.legends[this.lang] ? this.legends[this.lang].INVALID : this.legends['en-US'].INVALID;
                this.form.saving = false;
            } else {
                let values = this.FormGroup.value;
                this.send.emit(values);
            };
        } catch (e) {
            console.error("Error", e);
        };
    }

}

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'json-form-app';
    form: any = {
        groups: [
            {
                "fields": [
                    {
                        "name": 7,
                        "type": "file",
                        "label": "Archivo",
                        "options": [],
                        "required": 1
                    }
                ],
                "count": 1
            },
            {
                "fields": [
                    {
                        "name": 6,
                        "type": "select",
                        "label": "Certificado Toyota",
                        "options": [
                            "Si",
                            "No",
                            "N/A"
                        ],
                        "required": 1
                    }
                ]
            },
            {
                "fields": [
                    {
                        "name": 8,
                        "type": "image",
                        "label": "FOTO",
                        "options": [],
                        "required": 1
                    }
                ]
            },
            {
                "fields": [
                    {
                        "name": 9,
                        "type": "number",
                        "label": "Precio de compra",
                        "options": [],
                        "required": 0
                    }
                ]
            },
            {
                "fields": [
                    {
                        "name": 4,
                        "type": "text",
                        "label": "Vendedor",
                        "options": [],
                        "required": 1
                    }
                ]
            },
            {
                "fields": [
                    {
                        "type": "hidden",
                        "name": "license",
                        "value": 4
                    }
                ]
            }
        ],
        buttons: [
            {
                "text": "FORM.BUTTON.CANCEL",
                "event": "cancel"
            },
            {
                "text": "FORM.BUTTON.SAVE",
                "submit": true,
                "primary": true
            }
        ]
    };

    form2: any = {
        title: "Example formated and full size.",
        groups: [
            {
                fields: [
                    {
                        name: "user",
                        type: "text",
                        label: "User",
                        required: true,
                    },
                ],
            },
            {
                fields: [
                    {
                        name: "password",
                        type: "password",
                        label: "Password",
                        required: true,
                    },
                ],
            },
        ],
        buttons: [
            {
                text: "No",
                event: "no",
            },
            {
                text: "Yes",
                submit: true,
                primary: true,
                spinner: true,
            },
        ],
        format: {
            full: true,
            background: "whitesmoke",
            primary: "coral",
            secondary: "pink",
            focus: "darkgrey",
        },
    };
    form3: any = {
        title: "Example center buttons.",
        buttons: [
            {
                text: "Ok",
                event: "ok",
                primary: true,
            },
        ],
        format: {
            center: true,
            background: "whitesmoke",
        },
    };
    form4: any = {
        title: "Example translate legends.",
        groups: [
            {
                fields: [
                    {
                        name: "name",
                        type: "text",
                        label: "NAME",
                        required: true,
                    },
                ],
            },
            {
                fields: [
                    {
                        name: "lastname",
                        type: "text",
                        label: "LASTNAME",
                        required: true,
                    },
                ],
            },
            {
                fields: [
                    {
                        name: "job4",
                        type: "select",
                        label: "JOB",
                        options: [{ label: "DEVELOPMENT", value: 1 }, { label: "DESIGNER", value: 2 }],
                        translate: true,
                        required: true,
                    },
                ],
            },
        ],
        buttons: [
            {
                text: "OK",
                submit: true,
                primary: true,
            },
        ],
        lang: "es-ES",
        translations: {
            "en-US": {
                "NAME": "Name",
                "LASTNAME": "Lastname",
                "JOB": "Job",
                "OK": "Ok",
                "DEVELOPMENT": "Development",
                "DESIGNER": "Designer",
            },
            "es-ES": {
                "NAME": "Nombre",
                "LASTNAME": "Apellido",
                "JOB": "Profesión",
                "OK": "Listo",
                "DEVELOPMENT": "Desarrollador",
                "DESIGNER": "Diseñador",
            },
        },
    };

    send(data) {
        console.log(data);
    }

    event(data) {
        console.log(data);
    }
}
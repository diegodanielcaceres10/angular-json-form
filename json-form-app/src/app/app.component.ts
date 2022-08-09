import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'json-form-app';
    form: any = {
        lang: "pt-BR",
        title: "Title From Header",
        text: "Example text description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dicta dolor ipsam iure. Corporis, tenetur eaque commodi deserunt modi dignissimos nostrum rem velit nihil accusamus debitis, reiciendis aperiam repudiandae asperiores.",
        groups: [
            {
                fields: [
                    {
                        name: "password",
                        type: "password",
                        label: "DATA.PASSWORD",
                        minlength: 8,
                        required: true,
                    },
                ],
            },
            {
                fields: [
                    {
                        name: "confirmpassword",
                        type: "password",
                        label: "DATA.CONFIRMPASSWORD",
                        required: true,
                        actions: [
                            {
                                type: "match",
                                field: "password",
                            },
                        ],
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
            primary: "lime",
        },
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
    form5: any = {
        title: "Example expand fields.",
        groups: [
            {
                fields: [
                    {
                        name: "search",
                        type: "text",
                        label: "Search",
                        placeholder: "Enter text here",
                    },
                ],
            },
        ],
        buttons: [
            {
                text: "Search",
                submit: true,
                primary: true,
            },
        ],
        format: {
            expand: true,
        },
    };

    send(data) {
        console.log(data);
    }

    event(data) {
        console.log(data);
    }
}
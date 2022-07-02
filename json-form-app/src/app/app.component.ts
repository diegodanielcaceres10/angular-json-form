import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'json-form-app';
    form: any = {
        title: "Title From Header",
        text: "Example text description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dicta dolor ipsam iure. Corporis, tenetur eaque commodi deserunt modi dignissimos nostrum rem velit nihil accusamus debitis, reiciendis aperiam repudiandae asperiores.",
        groups: [
            {
                fields: [
                    {
                        name: "hidden2",
                        type: "hidden",
                        value: 1,
                    },
                ],
            },
            {
                fields: [
                    {
                        name: "hidden",
                        type: "hidden",
                        value: 1,
                    },
                    {
                        name: "text",
                        type: "text",
                        label: "Text",
                        value: "Example Text",
                        required: true,
                    },
                ],
            },
            {
                fields: [
                    {
                        name: "text2",
                        type: "text",
                        label: "Text Inline Left",
                        required: true,
                    },
                    {
                        name: "text3",
                        type: "text",
                        label: "Text Inline center",
                    },
                    {
                        name: "text4",
                        type: "text",
                        label: "Text Inline Right",
                    },
                ],
            },
            {
                fields: [
                    {
                        name: "password",
                        type: "password",
                        label: "Password",
                    },
                ],
            },
            {
                fields: [
                    {
                        name: "number",
                        type: "number",
                        label: "Number",
                        value: 100,
                        max: 50,
                    },
                ],
            },
            {
                fields: [
                    {
                        name: "email",
                        type: "email",
                        label: "E-Mail",
                        value: "exampleemail@mail.com",
                    },
                ],
            },
            {
                fields: [
                    {
                        name: "tel",
                        type: "tel",
                        label: "Tel",
                        value: "(12) 34567-8912",
                    },
                ],
            },
            {
                fields: [
                    {
                        name: "checkbox",
                        type: "checkbox",
                        label: "CheckBox",
                    },
                    {
                        name: "checkbox2",
                        type: "checkbox",
                        label: "CheckBox2",
                    },
                    {
                        name: "checkbox3",
                        type: "checkbox",
                        label: "CheckBox3",
                    },
                ],
            },
            {
                fields: [
                    {
                        name: "radio",
                        type: "radio",
                        label: "Radio",
                        options: ["Option 1", "Option 2", "Option 3"],
                    },
                ],
            },
            {
                fields: [
                    {
                        name: "select",
                        type: "select",
                        label: "Element Select",
                        options: ["Option 1", "Option 2", "Option 3", "Option 2", "Option 3", "Option 2", "Option 3", "Option 2", "Option 3", "Option 2", "Option 3", "Option 2", "Option 3"],
                        searchable: true,
                    },
                ],
            },
            {
                fields: [
                    {
                        name: "selectmultiple",
                        type: "select",
                        label: "Multiple Element Select",
                        options: ["Option 1", "Option 2", "Option 3"],
                        multiple: true,
                    },
                ],
            },
            {
                fields: [
                    {
                        name: "list",
                        type: "list",
                        label: "Element List",
                    },
                ],
            },
            {
                fields: [
                    {
                        name: "color",
                        type: "color",
                        label: "Color",
                    },
                ],
            },
            {
                fields: [
                    {
                        name: "image",
                        type: "image",
                        label: "Image logo",
                        max: 500000,
                    },
                ],
            },
            {
                fields: [
                    {
                        name: "imagecover",
                        type: "image",
                        label: "Image photo",
                        max: 500000,
                        cover: true,
                    },
                ],
            },
            {
                fields: [
                    {
                        name: "imagemultiple",
                        type: "image",
                        label: "Images",
                        max: 500000,
                        multiple: true,
                    },
                ],
            },
            {
                fields: [
                    {
                        name: "textarea",
                        type: "textarea",
                        label: "Textarea",
                    },
                    {
                        name: "textarea2",
                        type: "textarea",
                        label: "Textarea2",
                        required: true,
                    },
                ],
            },
        ],
        buttons: [
            {
                text: "Submit button",
                submit: true,
            },
        ],
    };
    form2: any = {
        full: true,
        title: "Example full size.",
        groups: [
            {
                fields: [
                    {
                        name: "usuario",
                        type: "text",
                        label: "Usuario",
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
            },
        ],
    };
    form3: any = {
        center: true,
        title: "Example center buttons.",
        buttons: [
            {
                text: "Ok",
                submit: true,
                primary: true,
            },
        ],
    };

    send(data) {
        console.log(data);
        setTimeout(() => {
            this.form.saving = false;
            this.form2.saving = false;
            this.form3.saving = false;
        }, 500);
    }

    event(data) {
        console.log(data);
    }
}
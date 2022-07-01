import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularJsonFormComponent } from './angular-json-form.component';

import { InputCheckboxComponent } from './input-checkbox/input-checkbox.component';
import { InputColorComponent } from './input-color/input-color.component';
import { InputEmailComponent } from './input-email/input-email.component';
import { InputHiddenComponent } from './input-hidden/input-hidden.component';
import { InputImageComponent } from './input-image/input-image.component';
import { InputListComponent } from './input-list/input-list.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { InputRadioComponent } from './input-radio/input-radio.component';
import { InputSelectComponent } from './input-select/input-select.component';
import { InputTelComponent } from './input-tel/input-tel.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputTextareaComponent } from './input-textarea/input-textarea.component';

@NgModule({
    declarations: [
        AngularJsonFormComponent,
        InputCheckboxComponent,
        InputColorComponent,
        InputEmailComponent,
        InputHiddenComponent,
        InputImageComponent,
        InputListComponent,
        InputNumberComponent,
        InputPasswordComponent,
        InputRadioComponent,
        InputSelectComponent,
        InputTelComponent,
        InputTextComponent,
        InputTextareaComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        AngularJsonFormComponent,
    ]
})
export class AngularJsonFormModule { }

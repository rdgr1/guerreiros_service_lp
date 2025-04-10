import { Component } from '@angular/core';
import { InputWrapperComponent } from "../input-wrapper/input-wrapper.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonSecondComponent } from "../button-second/button-second.component";

@Component({
  selector: 'app-form-price',
  standalone: true,
  imports: [InputWrapperComponent, ReactiveFormsModule, CommonModule, ButtonSecondComponent],
  templateUrl: './form-price.component.html',
  styleUrl: './form-price.component.scss'
})
export class FormPriceComponent {
contatoForm: FormGroup;
constructor(){
  this.contatoForm = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(6)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    number: new FormControl('',[Validators.required,Validators.nullValidator])

  })
}
}

import { Component } from '@angular/core';
import { InputWrapperComponent } from "../input-wrapper/input-wrapper.component";
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonSecondComponent } from "../button-second/button-second.component";
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-form-price',
  standalone: true,
  imports: [InputWrapperComponent, ReactiveFormsModule, CommonModule, ButtonSecondComponent],
  templateUrl: './form-price.component.html',
  styleUrl: './form-price.component.scss'
})
export class FormPriceComponent {
  contatoForm: FormGroup<{ name: FormControl<string | null>; email: FormControl<string | null>; number: FormControl<string | null>; }>;
  constructor(private emailService: EmailService, private fb: FormBuilder) {
    this.contatoForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.contatoForm.valid) {
      const { name, email, number } = this.contatoForm.value;

      this.emailService.sendEmail({
        name,
        email,
        subject: 'Contato via formulário de orçamento',
        message: `Telefone informado: ${number}`,
      }).subscribe({
        next: () => alert('✅ E-mail enviado com sucesso!'),
        error: (err) => {
          console.error(err);
          alert('❌ Erro ao enviar o e-mail.');
        },
      });
    }
  }
}
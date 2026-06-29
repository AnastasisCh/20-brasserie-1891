import { Component, ChangeDetectionStrategy, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RevealDirective } from '../../../../shared/directives/reveal.directive';
import { LangService } from '../../../../core/services/lang.service';

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

@Component({
  selector: 'app-reservations',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RevealDirective],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReservationsComponent {
  readonly lang = inject(LangService);

  form: FormGroup;
  submitState: SubmitState = 'idle';

  readonly partySizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  readonly minDate: string;

  constructor(private readonly fb: FormBuilder, private readonly cdr: ChangeDetectorRef, private readonly http: HttpClient) {
    this.minDate = new Date().toISOString().split('T')[0];

    this.form = this.fb.group({
      name:      ['', [Validators.required, Validators.minLength(2)]],
      phone:     ['', [Validators.required]],
      email:     ['', [Validators.required, Validators.email]],
      date:      ['', [Validators.required]],
      time:      ['', [Validators.required]],
      partySize: ['', [Validators.required]],
      notes:     ['']
    });
  }

  isInvalid(field: string): boolean {
    const control = this.form.get(field);
    return !!(control && control.invalid && control.touched);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitState = 'loading';
    this.cdr.markForCheck();

    const reservationData = { ...this.form.value, market: 'Brasserie1891' };
    this.http.post('https://marketswebapi-gde3hpftfdhuawaj.westeurope-01.azurewebsites.net/api/Reservations/CreateReservation', reservationData, { responseType: 'text' }).subscribe({
      next: () => {
        this.submitState = 'success';
        this.cdr.markForCheck();
      },
      error: () => {
        this.submitState = 'error';
        console.error('Failed to submit reservation request');
        this.cdr.markForCheck();
      }
    });
  }

  reset(): void {
    this.submitState = 'idle';
    this.form = this.fb.group({
      name:      ['', [Validators.required, Validators.minLength(2)]],
      phone:     ['', [Validators.required]],
      email:     ['', [Validators.required, Validators.email]],
      date:      ['', [Validators.required]],
      time:      ['', [Validators.required]],
      partySize: ['', [Validators.required]],
      notes:     ['']
    });
    this.cdr.markForCheck();
  }
}

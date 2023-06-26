import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { CommonModule } from '@angular/common';

interface City {
  id: number;
  name: string;
}

@Component({
  selector: 'ngapp-client',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  clientForm!: FormGroup;
  addressGroupInModal!: FormGroup;

  cities: City[] = [
    { id: 1, name: 'New York' },
    { id: 2, name: 'Los Angeles' },
    { id: 3, name: 'Miami' },
  ];

  currentModal!: string | null;

  openModal(type: string): void {
    this.currentModal = type;
    if (type === 'address') {
      this.addressGroupInModal = this.createAddressGroup();
    }
  }

  // Add a new function to handle adding the temporary FormGroup to the FormArray.
  saveAddressFromModal(): void {
    this.addresses.push(this.addressGroupInModal);
    this.closeModal();
  }

  closeModal(): void {
    this.currentModal = null;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.clientForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      addresses: this.fb.array([this.createAddressGroup()]),
      contacts: this.fb.array([this.createContactGroup()]),
    });
  }

  createAddressGroup(): FormGroup {
    return this.fb.group({
      street: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      zipCode: ['', Validators.required],
    });
  }

  createContactGroup(): FormGroup {
    return this.fb.group({
      contactNumber: ['', Validators.required],
      contactType: ['', Validators.required],
    });
  }

  addAddress(): void {
    this.addresses.push(this.createAddressGroup());
  }

  addContact(): void {
    this.contacts.push(this.createContactGroup());
  }

  removeAddress(index: number): void {
    this.addresses.removeAt(index);
  }
  removeContact(index: number): void {
    this.contacts.removeAt(index);
  }

  get addresses(): FormArray {
    return this.clientForm.get('addresses') as FormArray;
  }

  get contacts(): FormArray {
    return this.clientForm.get('contacts') as FormArray;
  }

  submitForm(): void {
    console.log(this.clientForm.value);
  }
}

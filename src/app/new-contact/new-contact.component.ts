import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {

  @Output() newContactComponent = new EventEmitter();

  // On déclare un nouvel objet vide
  nouveauContact = {
    name: null,
    email: null,
    tel: null
  };
  @Output() newContactEvent = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }

  /**
   * Cette fonction se déclenche à la soumission du formulaire.
   */
  submitContact(): void {

    // console.log( this.nouveauContact);
    /*
    Lorsque le formulaire
     */
    this.newContactEvent.emit(this.nouveauContact);
    /*
    On réinitialise notre nouveau contact après la soumission
     */
    this.nouveauContact = {
      name: null,
      email: null,
      tel: null
    };
  }
}

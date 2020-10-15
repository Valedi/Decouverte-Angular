/*Pour déclarer une classe comme composant de notre application, on importe "component"
via 0angular/core
*/

import {Component} from '@angular/core';

/*
C'est ce qu'on appelle un décorateur.
Il va nous permettre de donner des renseignements sur notre composant.
*/

@Component({
  /*
  Le sélecteur est l'ID, l'identifiant unique du composant au sein de l'application.
   */
  selector: 'app-root',
  /*
  C'est la partie visible de notre composant.
  C'est ce qui qui s'affiche  à notre utilisateur.
   */
  templateUrl: './app.component.html',
  /*
  Déclarer les styles CSS spécifiques à ce composant.
   */
  styleUrls: ['./app.component.css']
})
/*
  La classe contient les données du composant.
  Dans notre architecture MVVM, notre classe correspond au Model.
   */

export class AppComponent {
  // Déclaration d'une variable / propriété
  title = 'Gestion de contact';
  contactProfil = null;

  // Déclaration d'un objet contact
  unContact =
    {
      id: '1',
      name: 'Valérie Dias',
      email: 'valerie@gmail.com',
      tel: '06 60 97 60 60'
    };

  //--Tableau de contact
  mesContacts = [
    {
      id: '1',
      name: 'Valérie Dias',
      email: 'valerie@gmail.com',
      tel: '06 60 97 60 60'
    },
    {
      id: 2,
      name: 'Vanessa DEHECQ',
      email: 'vanessa.dehecq@gmail.com',
      tel: '07 89 45 23 56'
    },
    {
      id: 3,
      name: 'Manon DERYDT',
      email: 'manon.derydt@gmail.com',
      tel: '07 96 52 41 23'
    },
    {
      id: 4,
      name: 'Olga KORDIAK',
      email: 'olga.kordiak@gmail.com',
      tel: '01 56 89 78 45'
    },
  ];

  /**
   * Permet d'afficher les informations d'un objet contact
   * Attention, on le crée au click du app.component.html
   */
  displayContact(contactCliqueParMonUtilisateur): void {
    console.log(contactCliqueParMonUtilisateur);
    this.contactProfil = contactCliqueParMonUtilisateur;
  }
    /**
     * Cette fonction est automatiquement appelée par Angular
     * lorsqu'un nouveau contact est créee.
     */
    addContact(contact): void {
      this.mesContacts.push(contact);
  }
}

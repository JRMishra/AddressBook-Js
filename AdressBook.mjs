import Contact from './Contact.js';

console.log("Welcome to Address Book");

let AddressBook = [];

let newContact1 = new Contact();
newContact1.firstname = "Jyoti Ranjan";
newContact1.lastname = "Mishra";
newContact1.address = "Near Railway Station";
newContact1.city = "Baripada";
newContact1.state = "Odisha";
newContact1.zip = "764310";
newContact1.phone = "8115825409";
newContact1.email = "jrm@mymail.com";

AddressBook[0] = newContact1;

let newContact2 = new Contact();
newContact2.firstname = "Supratim";
newContact2.lastname = "Dey";
newContact1.address = "Airport colony";
newContact1.city = "Kolkata";
newContact1.state = "WestBengal";
newContact1.zip = "772074";
newContact1.phone = "9052851184";
newContact1.email = "supdey@mymail.com";

AddressBook[1] = newContact2;
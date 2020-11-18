import Contact from './Contact.js';

console.log("Welcome to Address Book");

let AddressBook = [];
let status;

let newContact1 = new Contact();
newContact1.firstname = "Jyoti Ranjan";
newContact1.lastname = "Mishra";
newContact1.address = "Near Railway Station";
newContact1.city = "Baripada";
newContact1.state = "Odisha";
newContact1.zip = "764310";
newContact1.phone = "8115825409";
newContact1.email = "jrm@mymail.com";

status = AddContacts(newContact1);
if(!status)
    console.log("Contact details added successfully");
else
    console.log("A contact with same name can't be added twice");

let newContact2 = new Contact();
newContact2.firstname = "Supratim";
newContact2.lastname = "Dey";
newContact1.address = "Airport colony";
newContact1.city = "Kolkata";
newContact1.state = "WestBengal";
newContact1.zip = "772074";
newContact1.phone = "9052851184";
newContact1.email = "supdey@mymail.com";

status = AddContacts(newContact2);
if(!status)
    console.log("Contact details added successfully");
else
    console.log("A contact with same name can't be added twice");
    

status = EditContactDetails("Supratim Dey","Address","Building 6, Airport colony");
if(status)
    console.log("Contact details successfully edited");

console.log("Number of contacts in address book = "+ ContactsCount());

status = DeleteContact("Supratim Dey");
if(status) console.log("Contact details successfully deleted");

console.log("Number of contacts after deleting = "+ ContactsCount());

status = AddContacts(newContact1);
if(!status)
    console.log("Contact details added successfully");
else
    console.log("A contact with same name can't be added twice");
    
status = AddContacts(newContact2);
if(!status)
    console.log("Contact details added successfully");
else
    console.log("A contact with same name can't be added twice");
    
//------------------------- Functions -----------------------------//
//Add Contact Details
function AddContacts(contact)
{
    let isDuplicate = false;
    let fullname = contact.firstname + " "+contact.lastname;
    for(let item of AddressBook)
    {
        if(item.firstname+" "+item.lastname == fullname)
            isDuplicate = true;
    }
    if(!isDuplicate)
        AddressBook.push(contact);
    return isDuplicate;
}

//Edit Contact Details
function EditContactDetails(fullname, property, value)
{
    let index = -1;
    for(let i = 0; i< AddressBook.length; i++)
    {
        if(AddressBook[i].firstname+" "+AddressBook[i].lastname == fullname)
        {
            index = i;
            break;
        }
    }
    if(index==-1)
    {
        console.log("No such contact present");
        return false;
    }
    switch(property)
    {
        case "Address":
            AddressBook[index].address = value;
            break;
        case "City":
            AddressBook[index].city = value;
            break;
        case "State":
            AddressBook[index].state = value;
            break;
        case "Zip":
            AddressBook[index].zip = value;
            break;
        case "Phone":
            AddressBook[index].phone = value;
            break;
        case "Email":
            AddressBook[index].email = value;
            break;
        default:
            return false;
            break;
    }
    return true;
}

//Delete Contact Details
function DeleteContact(fullname)
{
    let index = -1;
    for(let i = 0; i< AddressBook.length; i++)
    {
        if(AddressBook[i].firstname+" "+AddressBook[i].lastname == fullname)
        {
            index = i;
            break;
        }
    }
    if(index==-1)
    {
        console.log("No such contact present");
        return false;
    }
    AddressBook.splice(index,1);
    return true;
}

//Count Contact Details
function ContactsCount()
{
    return AddressBook.length;
}
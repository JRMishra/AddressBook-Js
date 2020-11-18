class Contact
{
    firstname;
    lastname;
    address;
    city;
    state;
    zip;
    phone;
    email;    

    constructor()
    { }

    get firstname() { return this.firstname; }
    get lastname() { return this.firstname; }
    get address() { return this.firstname; }
    get city() { return this.firstname; }
    get state() { return this.firstname; }
    get zip() { return this.firstname; }
    get phone() { return this.firstname; }
    get email() { return this.firstname; }
    
    /**
     * @param {string} firstname
     */
    set firstname(firstname){
        let fnameRgx = new RegExp(/^[A-Z][a-z]{2,}$/);
        if(fnameRgx.test(firstname))
            this.firstname = firstname;
        else
            throw "First name is invalid";
    }

    /**
     * @param {string} lastname
     */
    set lastname(lastname){
        let lnameRgx = new RegExp(/^[A-Z][a-z]{2,}$/);
        if(lnameRgx.test(lastname))
            this.lastname = lastname;
        else
            throw "Last name is invalid";
    }

    /**
     * @param {string} address
     */
    set address(address){
        let addressRgx = new RegExp(/^[A-Za-z]{4,}$/);
        if(addressRgx.test(address))
            this.address = address;
        else
            throw "Address is invalid";
    }

    /**
     * @param {string} city
     */
    set city(city){
        let cityRgx = new RegExp(/^[A-Za-z]{4,}$/);
        if(cityRgx.test(city))
            this.city = city;
        else
            throw "City is invalid";
    }

    /**
     * @param {string} state
     */
    set state(state){
        let stateRgx = new RegExp(/^[A-Za-z]{4,}$/);
        if(stateRgx.test(state))
            this.state = state;
        else
            throw "State is invalid";
    }

    set zip(zip){
        let zipRgx = new RegExp(/^[1-9][0-9]{5}$/);
        if(zipRgx.test(zip))
            this.zip = zip;
        else
            throw "Zip is invalid";
    }

    set phone(phone){
        let phoneRgx = new RegExp(/^([0-9][ ])?[1-9][0-9]{9}$/);
        if(phoneRgx.test(phone))
            this.phone = phone;
        else
            throw "Phone is invalid";
    }

    set email(email){
        let emailRgx = new RegExp(/^[a-z0-9A-Z]+([-.+_][a-z0-9+-]+)*@[a-z0-9A-Z]+[.][a-z]{2,3}([.][a-z]{2,})?$/);
        if(emailRgx.test(email))
            this.email = email;
        else
            throw "Email is invalid";
    }
}
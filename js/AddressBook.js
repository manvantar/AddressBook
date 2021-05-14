class Contact{
    firstName;
    lastName;
    city;
    state;
    pincode;
    phoneNumber;
    email;

    /*This constructor is used to initialize the */
    constructor(param) {
        this.firstName = param[0];
        this.lastName = param[1];
        this.city = param[2];
        this.state = param[3];
        this.pincode = param[4];
        this.phoneNumber = param[5];
        this.email = param[6];
        }
    }
    console.log('Welcome to Address book');

    let contact=new Array("Manu","K V","Bengaluru","Karnataka",560076,9663393660,"manukvhetty@gmail.com")
    contact1=new Contact(contact);
    console.log(contact1)
    console.log('Welcome to address book ')
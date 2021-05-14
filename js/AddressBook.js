class Contact{
    firstName;
    lastName;
    city;
    state;
    pincode;
    phoneNumber;
    email;

    /*This constructor is used to initialize the Contact Variables
    *@param which takes Array as an parameter
    */
    constructor(contactArray) {
        this.firstName = contactArray[0];
        this.lastName = contactArray[1];
        this.city = contactArray[2];
        this.state = contactArray[3];
        this.pincode = contactArray[4];
        this.phoneNumber = contactArray[5];
        this.email = contactArray[6];
        }
    }
    
    console.log('Welcome to Address book');

    let contact=new Array("Manu","K V","Bengaluru","Karnataka",560076,9663393660,"manukvhetty@gmail.com")
    contact1=new Contact(contact);
    console.log(contact1)
    console.log('Welcome to address book ')
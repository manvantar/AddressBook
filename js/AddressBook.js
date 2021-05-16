class Contact {


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

    /*getter methods for FirstName
    *@return FirstName
    */
    get firstName() { return firstName; }
    
    /*Setter methods for FirstName which inturn checks for RegularExpression
    *@Param FirstName
    */
        set firstName(firstName) {
        var nameRegularExpression = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        if (nameRegularExpression.test(firstName))
            this._firstName = firstName;
        else
            throw "Invalid FirstName";
    }
    
    /*getter methods for lastName 
    *@return lastName
    */
    get lastName() { return this.lastName; }

   /*Setter methods for lastName which inturn checks for RegularExpression
    *@Param lastName
    */
    set lastName(lastName) {
        let nameRegex = RegExp("^[A-Za-z]{1,}$");
        if (nameRegex.test(lastName))
            this._lastName = lastName;
        else
            throw "Invalid LastName";
    }

    /*getter methods for cityName 
    *@return cityName
    */
    get city() { return this.city; }

    /*Setter methods for city which inturn checks for RegularExpression
    *@Param city
    */
    set city(city) {
        let cityRegex = RegExp("^[A-Za-z]{4,}$");
        if (cityRegex.test(city))
            this._city = city;
        else
            throw "Invalid city ";
    }

    /*getter methods for StateName 
    *@return StateName
    */
    get state() { return this.state; }
    
    /*Setter methods for StateName which inturn checks for RegularExpression
    *@Param StateName
    */
    set state(state) {
        let stateRegex = RegExp("^[A-Za-z]{4,}$");
        if (stateRegex.test(state))
            this._state = state;
        else
            throw "Invalid state";
    }

    /*getter methods for pincode 
    *@return pincode
    */
    get pincode() { return this.pincode; }
    
    /*Setter methods for pincode which inturn checks for RegularExpression
    *@Param pincode
    */
    set pincode(pinCode) {
        let pinCodeRegex = RegExp("^[0-9]{5,}$");
        if (pinCodeRegex.test(pinCode))
            this._pincode = pinCode;
        else
            throw "Invalid pincode";
    }

    /*getter methods for phoneNumber 
    *@return phoneNumber
    */
    get phoneNumber() { return this.phoneNumber; }
    
    /*Setter methods for phoneNumber which inturn checks for RegularExpression
    *@Param phoneNumber
    */
    set phoneNumber(phoneNumber) {
        let phoneRegex = RegExp("^[0-9]{10}$");
        if (phoneRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else
            throw "Invalid phone number";
    }

    /*getter methods for email 
    *@return email
    */
    get email() { return this.email; }
    
    /*Setter methods for email which inturn checks for RegularExpression
    *@Param email
    */
    set email(email) {
        let emailRegex = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$");
        if (emailRegex.test(email))
            this._email = email;
        else
            throw "Invalid email";
    }

    /*This method is used to return String values to variables
    */
   toString(){
   return this._firstName+" "+this._lastName+" "+this.city+" "+this.state+
        " "+this._pincode+" "+" "+this.email;
    }

}
    
    console.log('Welcome to Address book');

    let contact=new Array("Manu","K V","Bengaluru","Karnataka",560076,9663393660,"manukvhetty@gmail.com")
    contact1=new Contact(contact);
    console.log(contact1.toString());
    


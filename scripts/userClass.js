class User{
    constructor(username,password,contactInfo){
        this._username=username;
        this._password=password;
        this._contactInfo=contactInfo;
    }
    get username(){
        return this._username;
    }
    set username(x){
        this._username=x;
    }
    get password(){
        return this._password;
    }
    set password(x){
        this._password=x;
    }
    get contactInfo(){
        return this._contactInfo;
    }
    set contactInfo(x){
        this._contactInfo=x;
    }
}
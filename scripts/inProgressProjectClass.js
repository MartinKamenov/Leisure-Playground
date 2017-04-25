class InProgressProject extends Project{
    constructor(user,name,codeLink,image,type,contactDetails,description,){
        super(user,name,image,type,description);
        this._codeLink=codeLink;
        this._contactDetails=contactDetails;
    }
    get codeLink(){
        return this._codeLink;
    }
    set codeLink(x){
        this._codeLink=x;
    }
    get contactDetails(){
        return this._contactDetails;
    }
    set contactDetails(x){
        this._contactDetails=x;
    }
}
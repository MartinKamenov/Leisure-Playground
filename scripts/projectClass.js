class Project{
    constructor(user,name,image,type,description){
        this._user=user;
        this._name=name;
        this._image=image;
        this._type=type;
        this._description=description;
    }
    get user(){
        return this._user;
    }
    set user(x){
        this._user=x;
    }
    get name(){
        return this.name;
    }
    set name(x){
        this._name=x;
    }
    get image(){
        return this._image;
    }
    set image(x){
        this._image=x;
    }
    get type(){
        return this._type;
    }
    set type(x){
        this._type=x;
    }
    get description(){
        return this._description;
    }
    set description(x){
        this._description=x;
    }
}
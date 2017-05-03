class readyProject extends Project {
    constructor(user, name, videoLink, image, type, description, ) {
        super(user, name, image, type, description);
        this._videoLink = videoLink;
    }
    get videoLink() {
        return this._videoLink;
    }
    set videoLink(x) {
        this._videoLink = x;
    }
} 
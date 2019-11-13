const PostOutputHTTP = require('../adapter/postOutputHTTP');

class PostOutput {
    constructor(app) {
        this.postOutput = new PostOutputHTTP(app);
    }

    update() {
        this.postOutput.update();
    }

    save() {
        this.postOutput.save();
    }

    getAll() {
        this.postOutput.getAll();
    }

    get() {
        this.postOutput.get();
    }

    delete() {
        this.postOutput.delete();
    }

    init() {
        this.getAll();
        this.get();
        this.delete();
        this.save();
        this.update();
    }
}

module.exports = PostOutput;
const UserOutputHTTP = require('../adapter/userOutputHTTP');

class UserOutput {
    constructor(app) {
        this.userOutput = new UserOutputHTTP(app);
    }

    update() {
        this.userOutput.update();
    }

    save() {
        this.userOutput.save();
    }

    getAll() {
        this.userOutput.getAll();
    }

    get() {
        this.userOutput.get();
    }

    delete() {
        this.userOutput.delete();
    }

    init() {
        this.getAll();
        this.get();
        this.delete();
        this.save();
        this.update();
    }
}

module.exports = UserOutput;
class Post {

    id = 0;
    title = '';
    description = '';
    image_url = '';

    constructor(id, title, description, image_url) {
        this.setId(id);
        this.title = title;
        this.description = description;
        this.image_url = image_url;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = Number.parseInt(id);
    }
}

module.exports = Post;
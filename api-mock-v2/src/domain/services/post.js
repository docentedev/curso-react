const Post = require('../entities/Post');

const createPostIdOnly = (p = {}) => new Post(p.id, null, null, null);
const createPost = (p = {}) => new Post(p.id, p.title, p.description, p.image_url);
const createPostList = (data = []) => data.map(createPost);

const createPostPublic = (p = {}) => new Post(p.id, p.title, p.description, p.image_url);
const createPostListPublic = (data = []) => data.map(createPostPublic);

module.exports.createPostIdOnly = createPostIdOnly;
module.exports.createPost = createPost;
module.exports.createPostList = createPostList;
module.exports.createPostPublic = createPostPublic;
module.exports.createPostListPublic = createPostListPublic;
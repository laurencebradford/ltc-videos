Posts = new Mongo.Collection('posts');

Posts.allow({
	insert: function(userId, doc) {
		// only allows posting if logged in
		return !! userId;
	}
});
Security.defineMethod('ifHasOwner', {
	fetch: [],
	transform: null,
	allow(type, arg, userId, doc) {
    return _.isEqual(userId, doc.createdBy);
	}
});

Wallets.permit('insert').ifLoggedIn().allowInClientCode();
Wallets.permit(['remove', 'update']).ifHasOwner().allowInClientCode();

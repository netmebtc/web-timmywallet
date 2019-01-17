import { Modal } from 'meteor/pmteor:modal';

Template.wallets.events({
  'click .remove'(e) {
    e.preventDefault();
    return Wallets.remove(this._id);
  },

  'click .add-wallet': Modal.open('createWallet'),

  'click .btn-danger'(e, instance) {
    e.preventDefault();

    return new Confirmation({
      message: "Are you sure you want to delete the wallet ?",
      title: "Delete wallet",
      cancelText: "Cancel",
      okText: "Yes, delete",
      success: true, // whether the button should be green or red
      focus: "cancel" // which button to autofocus, "cancel" (default) or "ok", or "none"
    }, (ok) => {
      if (ok) {
        return Wallets.remove(this._id);
      }
    });
  }
});

Template.header.events({
  'click .logout'(e) {
    e.preventDefault();
    return AccountsTemplates.logout();
  }
})

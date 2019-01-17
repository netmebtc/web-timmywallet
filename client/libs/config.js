import { Modal } from 'meteor/pmteor:modal';

Avatar.setOptions({
  fallbackType: "/favicon.png",
  defaultImageUrl: "/favicon.png"
});

AutoForm.addHooks(['CreateNewWalletForm', ''], {
  onSuccess() {

    // LAST CLOSE MODALS
    Modal.close();
  }
});

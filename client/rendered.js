import { ReactiveVar } from 'meteor/reactive-var';

Template.dashboard.onCreated(function() {
  const currentHeight = $(window).height();
  this.height = new ReactiveVar(currentHeight);
});


Template.dashboard.onRendered(function() {

  $(window).resize(() => {
    const height = $(window).height();

    // set height
    this.height.set(height);
  });
});

Template.wallets.onCreated(function() {
  this.subscribe('wallets');
});

Template.walletItem.onRendered(function() {
  const copied = new Clipboard('.wallet');
});

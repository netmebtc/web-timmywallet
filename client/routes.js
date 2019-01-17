Router.configure({
  layoutTemplate: 'layout',
  yieldTemplates: {
    header: { to: 'header' },
    footer: { to: 'footer' },
  }
});

AccountsTemplates.configure({ });

Router.route('/', { name: 'Dashboard' });

Router.route('/wallets/:_id', {
  name: 'Wallet',
  template: 'Dashboard'
});

Router.plugin('ensureSignedIn', {
  only: ['Dashboard', 'Wallet']
});

var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
  {
      _id: 'firstName',
      type: 'text',
      displayName: "First name",
      required: true,
      placeholder: 'First name'
  },
  {
      _id: 'lastName',
      type: 'text',
      displayName: "Last name",
      required: true,
      placeholder: 'Last name'
  },
  {
      _id: 'email',
      type: 'email',
      required: true,
      displayName: "email",
      placeholder: 'Email',
      re: /.+@(.+){2,}\.(.+){2,}/,
      errStr: 'Invalid email',
  },
  pwd
]);

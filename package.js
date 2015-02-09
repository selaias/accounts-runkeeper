Package.describe({
  name: 'selaias:accounts-runkeeper',
  version: '0.1.0',
  summary: 'Login service for Runkeeper accounts',
  git: 'https://github.com/selaias/accounts-runkeeper.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {

  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  
  api.use('accounts-oauth', ['client', 'server']);
  api.use('selaias:runkeeper', ['client', 'server']);
  
   api.addFiles("runkeeper_login_button.css");
  api.addFiles("runkeeper.js");
  
});


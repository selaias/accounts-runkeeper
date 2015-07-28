Package.describe({
  name: 'selaias:accounts-runkeeper',
  version: '0.6.0',
  summary: 'Login service for Runkeeper accounts',
  git: 'https://github.com/selaias/accounts-runkeeper.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  
  api.versionsFrom('1.0.3.1');
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('mrt:moment', ['client', 'server']);
  
  api.use('selaias:runkeeper@0.6.0', ['client', 'server']);

  api.addFiles("runkeeper.js");

});


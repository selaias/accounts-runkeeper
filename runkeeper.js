Accounts.oauth.registerService('runkeeper');
if (Meteor.isClient) {
  Meteor.loginWithRunkeeper = function(options, callback) {
    // support a callback without options
    if (! callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Runkeeper.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.runkeeper'],
    forOtherUsers: ['services.runkeeper.name']
  });
}
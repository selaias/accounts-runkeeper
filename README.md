# accounts-runkeeper

Login service for Runkeeper accounts in Meteor

read more at [https://www.meteor.com/accounts] https://www.meteor.com/accounts


Configure Runkeeper login services. Example:
```
ServiceConfiguration.configurations.remove({
    service: "runkeeper"
  });
  
ServiceConfiguration.configurations.upsert(
  { service: "runkeeper" },
  { $set: { client_id: <your client_id>, secret: <client_secret> } }
);

```

Using any accounts-ui package it will enable the Sign in with Runkeeper button.
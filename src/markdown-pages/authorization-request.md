---
title: 'Authorization Request'
page: 3
prevpage: '/get-started'
nextpage: '/authorization-response'
---

### Authorization Request

Now that we have the necessary variables set up, let’s start the OAuth process.

### Request

Clients will direct a user’s browser to the CryPt server to begin the OAuth process. Clients have to specify authorization code grant type . Along with the type of grant specified by the response_type parameter, the request will have a number of other parameters to indicate the specifics of the request.

#### Request Parameters

#### response_type

response_type will be set to 'code', indicating that the application expects to receive an authorization code if successful.

#### client_id

The client_id is the public identifier for the app

#### redirect_uri 

The redirect_uri is required by CryPt. This URL must match one of the URLs the developer registered when creating the application, and the authorization server should reject the request if it does not match.

#### scope

The request may have one or more scope (currently providing only 'profile') values indicating additional access requested by the application. The authorization server will need to display the requested scopes to the user.

#### state

The state parameter is used by the application to store request-specific data and/or prevent CSRF attacks. The authorization server must return the unmodified state value back to the application.The state generation proccess is handled by client application.

#### Request Example

```html
https://crypt-oauth.web.app/oauth?
response_type=code
&client_id=29352735982374239857
&redirect_uri=https://example-app.com/callback
&scope=profile
&state=xcoivjuywkdkhvusuye3kch
```

[click here to contribute to this page](https://github.com/sharvan-sharma/CryPt-docs/tree/master/src/markdown-pages/authorization-request.md)
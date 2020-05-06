---
title: 'Authorization Code Request'
page: 5
prevpage: '/authorization-response'
nextpage: '/access-token-response'
---

#### Authorization Code Request

The authorization code grant is used when an application exchanges an authorization code for an access token. After the user returns to the application via the redirect URL, the application will get the authorization code from the URL and use it to request an access token. This request will be made to the token endpoint.

#### Request Parameters

The access token request will contain the following parameters.

**grant_type (required)**
The grant_type parameter must be set to “authorization_code”.

**code (required)**
This parameter is the authorization code that the client previously received from the authorization server.

**redirect_uri (required)**
The redirect URI in the token request must be an exact match of the redirect URI that was used when generating the authorization code. The service must reject the request otherwise.

**client_id** **and** **client_secret (required)**
The Client_id and Client_secret generated at the time of Registration are Required.These Parameters are Used to Authenticate The Client application.

If everything checks out, the CryPt will generate an access token and respond.

#### Example Request

The Request must be a POST request and the body of Request contains the parameters

Request Url 
```html
https://crypt-server.herokuapp.com/oauth/tokenexchange
```

Request Body
```Json
{
    "grant_type" : "authorization_code",
    "client_id":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "client_secret":"XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    "redirect_uri":"http://example-app.com/crypt/oauth/callback",
    "code":"XXXXXXXXXXXXXXXXXXXXXXXXX"
}
```
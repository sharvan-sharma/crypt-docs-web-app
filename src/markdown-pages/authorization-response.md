---
title: 'Authoriztion Response'
page: 4
prevpage: '/authorization-request'
nextpage: '/authorization-code-request'
---

## Authorization Response

#### Authorization Code Response

If the request is valid and the user grants the authorization request, CryPt generates an authorization code and redirects the user back to the application, adding the code and previous “state” value to the redirect URL.

#### Response Parameters

##### code

This parameter contains the authorization code which the client will later exchange for an access token.

##### state

If the initial request contained a state parameter, the response must also include the exact value from the request. The client will be using this to associate this response with the initial request.

#### Response Example

```html
https://example-app.com/redirect?
code=g0ZGZmNjVmOWI&state=dkZmYxMzE2
&state=xcoivjuywkdkhvusuye3kch
```

#### Error Response

There are two different kinds of errors
- **Request Errors**
- **User Rejects**

#### Errors

- ***invalid_request*** - the request is missing a parameter, contains an invalid parameter, includes a parameter more than once, or is otherwise invalid.

- ***access_denied*** -the user or authorization server denied the request

- ***unauthorized_client*** – the client is not allowed to request an authorization code using this method, for example if a confidential client attempts to use the implicit grant type.

- ***unsupported_response_type*** – the server does not support obtaining an authorization code using this method, for example if the authorization server never implemented the implicit grant type.

- ***invalid_scope*** – the requested scope is invalid or unknown.

- ***server_error*** – instead of displaying a 500 Internal Server Error page to the user, the server can redirect with this error code.

#### Error Response Example

```html
https://example-app.com/redirect
?error=access_denied
&error_description=The+user+denied+the+request
&error_uri=error_url_from_crypt
&state=wxyz1234
```

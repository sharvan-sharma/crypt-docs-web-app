---
title: 'Access Token Response'
page: 6
prevpage: '/authorization-code-request'
nextpage: '/refresh-token'
---

## Access Token Response

### Successful Response
If the request for an access token is valid, CryPt generate an access token and refresh token and return these to the client, typically along with some additional properties about the authorization.

The response with an access token should contain the following properties:

- **access_token** -  The access token string as issued by the CryPt server.

- **token_type** - The type of token this is “bearer”.

- **expires_in** - '1h' One hour after the generation .

- **refresh_token** - applications can use  this token to obtain another access token after expiration time.

**Success Response Example**

```json
{
  "access_token":######################################,
  "token_type":"bearer",
  "expires_in":"1h",
  "refresh_token":#####################################,
}
```

### Unsuccessful Response

If the access token request is invalid, such as the redirect URL didn’t match the one used during authorization,authoriztion code expires(expires after 5 min of generation) ,then the CryPt server returns an error response.

The error parameter in error Object Response will always be one of the values listed below.

- **invalid_request** – The request is missing a parameter so the server can’t proceed with the request. This may also be returned if the request includes an unsupported parameter.
- **invalid_client** – Client authentication failed, such as if the request contains an invalid client ID or secret. 
- **invalid_grant** – The authorization code is invalid or expired. This is also the error  if the redirect URL given in the authorization grant does not match the URL provided in this access token request.
- **unsupported_grant_type** – If a grant type is requested that the authorization server doesn’t recognize(currently CryPt supports onlu 'authorization_code' as grant type)

**Unsuccessful Response Example**

```json
{
  "error": "invalid_request",
  "error_description": "Request was missing the 'redirect_uri' parameter.",
  "error_uri": "error_uri_from_crypt"
}
```
[click here to contribute to this page](https://github.com/sharvan-sharma/CryPt-docs/tree/master/src/markdown-pages/access-token-response.md)
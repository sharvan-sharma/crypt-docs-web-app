---
title: 'Refreshing Access Token'
page: 7
prevpage: '/access-token-response'
nextpage: '/getting-profile'
---

### Refresh Access Token

CryPt issues refresh tokens along with the access token.
For refreshing Access Token Client Application haske a POST request to refresh token Route on our server.

#### Example Request

**Request URL**

```html
https://crypt-oauth.herokuapp.com/oauth/refreshtoken
```

**Request Body**

```json
{
    "refresh_token":"$$$$$$$$$$$$$$$$$$$$$$$$$",
    "client_id":"####################",
    "client_secret":"#####################"
}
```


#### Response

```json
{
    "access_token":"****************************"
}
```

[click here to contribute to this page](https://github.com/sharvan-sharma/CryPt-docs/tree/master/src/markdown-pages/refresh-token.md)


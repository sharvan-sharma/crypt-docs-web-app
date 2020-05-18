---
title: 'Getting Profile Object'
page: 8
prevpage: '/refresh-token'
nextpage: '/general-example'
---

### User Profile Request

Client Application can make a GET request to CryPt UserInfo Api.

**Request example**

```html
https://crypt-server.herokuapp.com/api/userinfo?access_token=######################
```

**Response**

In Response ,Client Application Recieves an Profile Object

###### shape of Profile Object

```Json
{
    "name":{
        "firstname":"%%%%%%%%%%",
        "middlename":"^^^^^^^^^",
        "lastname":"#############"
    },
    "email":"user@service.com",
    "cryptId":"#############################"
}

```

Client Application can use this information.

[click here to contribute to this page](https://github.com/sharvan-sharma/CryPt-docs/tree/master/src/markdown-pages/getting-profile.md)

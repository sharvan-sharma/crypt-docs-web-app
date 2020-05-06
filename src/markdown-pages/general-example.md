---
title: 'General Example'
page: 9
prevpage: '/getting-profile'
nextpage: '/node-passport-example'
---

### Eample Request In Node.js with Axios

**Login Route on Client Server**

**Frontend Link**
```html
<a href='/crypt/oauth/login'> .... </a>
```

**Login Route**

```javascript
app.get('/crypt/oauth/login',(req,res)=>{
    //code to generate a state Object in mmonog data base
   State.create({flag:true},(err,doc)=>{
          const state = doc._id.toString()
          const jsonObject = {
                 client_id:"XXXXXXXXXXXXXXXXXXXXXXXX",
                 response_type:'code',
                 state, //state is the id ofobject created in db
                 redirect_uri:"XXXXXXXXXXXXXXXXXXXXX",
                 scope:'profile'//usecomma seperated string for more scopes
             }
          const baseUrl = 'https://crypt-oauth.web.app/oauth'
          const queryString = querystring.stringify(jsonObject)

          const url = baseUrl+'?'+queryString
          res.status(301).redirect(url)//redirect to the crypt web application
     })
 })
```

**Redirect Uri route**

```javascript
//callback uri route register with application
app.get('/crypt/oauth/callback',(req,res)=>{
    if(req.query.error === undefined){
        const {code,state} = req.query
        //code to check that state exists indb or not to confirm the response in the exchange of some state
        State.exists({_id:state},(err,flag)=>{
            if(err){res.json(err)}
            else{
                if(flag){
                    //axios post Request for token exchnage
                    axios.post('https://crypt-server-herokuapp.com/oauth/tokenexchange',{
                            grant_type : 'authorization_code',
                            client_id:"XXXXXXXXXXXXXXXXXXXXXXXXXXXX",
                            client_secret:"XXXXXXXXXXXXXXXXXXXX",
                            redirect_uri:"http://you-app-domian.com/crypt/oauth/callback",
                            code
                    }).then(authresult=>{
                        //axios get request to User Info Api
                          axios.get(`https://crypt-server.herokuapp.com/api/userinfo?access_token=${refresult.data.access_token}`)
                          .then(accresult=>{
                            if(accresult.data.error === 'token_expired'){
                                //axios request  to refresh access token
                                axios.post('https://crypt-server.herokuapp.com/oauth/refreshtoken',{
                                    refresh_token:authresult.data.refresh_token
                                    client_id:'XXXXXXXXXXXX',
                                    client_secret:'XXXXXXXXXXXXXXXX'
                                }).then(refresult=>{
                                     axios.get(`http://localhost:5000/api/userinfo?access_token=${refresult.data.access_token}`)
                                                .then(result=>{
                                                    profile=result.data.profile
                                                    res.status(301).redirect('/display')
                                                }).catch(err=>{
                                                    res.json(err)
                                                })
                                }).catch(err=>{
                                    res.json(err)
                                })
                            }else{
                                //getting profile object from axios response and displaying on browser
                                res.json({...accresult.data.profile})
                            }
                        }).catch(err=>{
                            res.json(err)
                        })
                    }).catch(err=>{
                         res.json(err)
                    })
                }else{
                   res.json({error:'state_undefined'})
                }
            }
        })
    }else{
        //displaying error
        const {error,error_description,error_uri} = req.query
        res.json(req.query)
    }
})
```
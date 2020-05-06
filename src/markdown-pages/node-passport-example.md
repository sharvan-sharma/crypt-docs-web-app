---
title: 'Express - PassportJS (Node.js) Example'
page: 10
prevpage: '/general-example'
nextpage: null
---

### Oauth with CryPt using Express and Passport

#### **CryPt Passport Strategy**

Install [passport-crpyt-oauth20]('https://www.npmjs.com/package/passport-crypt-oauth20') package

```bash
$ npm install passport-crypt-oauth20
```

#### Passport configuration

```javascript
const passport = require('passport')
const CryPtStrategy = require('passport-crypt-oauth20')
const User = require('...path of user model ...')

passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser((id,done)=>{
    User.findById(id,(err,user)=>{
        done(err,user)
    })
})

```

#### Strategy

```javascript
passport.use(new CryPtStrategy({
         clientID: '####################################',
         clientSecret: '##################################',
         callbackURL: 'https://you-app-domain.com/crypt/oauth/callback',
         scope:'profile'
       },
       function(accessToken, refreshToken, profile, done) {
           //finding CryptId in db,You can write your own logic
        User.findOne({cryptId:profile.cryptId},(err,user)=>{
            if(err) throw err
            else if(user){return done(err,user)}
            else{
                //creating new object if cyptid is not available
                User.create({...profile,
                    access_token:accessToken,
                    refersh_token:refreshToken
                },(error,userdoc)=>{
                    return done(error,userdoc)
                })
            }
        })
       }
     ));


module.exports = passport
```

#### **Login Route**

```javascript
app.get('/crypt/oauth/login',passport.authenticate('crypt'))
```

#### **Redirect URL**

```javascript
app.get('/crypt/oauth/callback', 
  passport.authenticate('crypt', { failureRedirect: '/loginfail',successRedirect:'/loginsuccess' }));
```


#### **Logout Route**

```javascript
app.get('/logout',(req,res)=>{
    if(req.isAuthenticated()){
        req.logout()
        res.redirect('/')
    }else{
        res.redirect('/')
    }
})
```


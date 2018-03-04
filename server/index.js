require('dotenv').config();
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const massive = require('massive');
const bodyParser = require('body-parser')
const path = require('path');

const {
    SERVER_PORT,
    SESSION_SECRET,
    CONNECTION_STRING,
    DOMAIN,
    CLIENTID,
    CLIENT_SECRET,
    CALLBACK_URL,
    redirectINCOME,
    redirectCONTINUE,
    GAME
} = process.env

const app = express().use(bodyParser.json());
app.use(express.static(`${__dirname}/../build`));

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
})

passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENTID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, function (accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db');


    //this is what i want to pull from auth-0
    const { sub, name, picture } = profile._json;

    db.find_user([sub]).then(response => {
        if (response[0]) {
            done(null, response[0].id)
        } else {
            db.create_user([name, picture, sub]).then(response => {
                done(null, response[0].id)
            })
        }
    })

}))
passport.serializeUser((id, done) => {
    done(null, id);
})

passport.deserializeUser((id, done) => {
    const db = app.get('db');
    db.find_logged_in_user([id]).then(response => {
        done(null, response[0])
    })
})

app.get('/users', (req, res) => {
    const db = app.get('db');
    db.get_friends().then(resp => {
        res.status(200).send(resp)
    })
})


app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: redirectINCOME
}))



app.get('/auth/me', (req, res) => {
    if (!req.user) {
        res.status(404).send('Not logged in')
    } else {
        res.status(200).send(req.user);
    }
})

app.get('/resume', (req, res) => {
    if (!req.user) {
        res.status(404).send('Not logged in')
    } else {
        res.status(200).redirect(GAME)
    }
})


//need to change the delets to select all from where same format as delete
//need to find out what data is being pulled
app.get('/geteverything', (req, res) => {
    if (!req.user) {
        res.status(404).send('Not logged in')
    } else {
        const db = app.get('db');
        const stack = [];
        stack.push(db.get_income([req.user.id]));
        stack.push(db.get_assets([req.user.id]));
        stack.push(db.get_liabilities([req.user.id]));
        stack.push(db.get_budget([req.user.id]));
        Promise.all(stack).then(resp => {
            console.log(resp)
            res.status(200).send(resp)
        }).catch(console.log)
    }
})


app.post('/insert_income', (req, res) => {
    console.log(req.user)
    if (!req.user) {
        res.status(404).send('Not logged in')
    } else {
        const db = app.get('db');
        db.insert_income([req.user.id, req.body.workIncome,
        req.body.rentalIncome, req.body.royaltyIncome, req.body.pensionIncome, req.body.socialSecurityIncome, req.body.interestIncome,
        ]).then(resp => {
            res.status(200).send('Hit dat DataBASE!!!');
        })
    }
})

//working on the biggest function ever!
app.post('/save_game', (req, res) => {
    console.log("save getting hit", req.user)
    if (!req.user) {
        res.status(404).send('Not logged in')
    } else {
        const db = app.get('db');
        const stack = [];
    stack.push(db.save_income([req.user.id, req.body.workIncome,
        req.body.rentalIncome, req.body.royaltyIncome, req.body.pensionIncome, req.body.socialSecurityIncome, req.body.interestIncome,
        ]))
    stack.push(db.save_assets([req.user.id, req.body.savingBalance,
        req.body.homeValue,
        req.body.rentalValue,
        req.body.carValue,
        req.body.landValue,
        req.body.stockValue,
        req.body.boatValue,
        req.body.recreationValue,]))
    stack.push(db.save_liabilities([req.user.id, req.body.homeBalance,
        req.body.rentalBalance,
        req.body.carBalance,
        req.body.landBalance,
        req.body.stockBalance,
        req.body.boatBalance,
        req.body.recreationalBalance,
        req.body.creditCardBalance,
        req.body.studentBalance,
        req.body.medicalBalance]))
    stack.push(db.save_budget([req.user.id, req.body.homePayment,
        req.body.rentalPayment,
        req.body.carPayment,
        req.body.landPayment,
        req.body.stockPayment,
        req.body.boatPayment,
        req.body.recreationalPayment,
        req.body.creditCardPayment,
        req.body.studentPayment,
        req.body.medicalPayment,
        req.body.insurancePayment,
        req.body.utilitiesPayment,
        req.body.cablePayment,
        req.body.phonePayment,
        req.body.entertainmentPayment,
        req.body.foodPayment,
        req.body.clothingPayment,
        req.body.internetPayment]))
        Promise.all(stack).then(resp => {
            res.status(200).send('pray that this worked')
                .then(resp => {
                    res.status(200).send('Hit dat DataBASE!!!');
                })
        }
    )}
})

    app.post('/insert_budget', (req, res) => {
        console.log(req.user)
        if (!req.user) {
            res.status(404).send('Not logged in')
        } else {
            const db = app.get('db');
        db.insert_budget([req.user.id, req.body.homePayment,
            req.body.rentalPayment,
            req.body.carPayment,
            req.body.landPayment,
            req.body.stockPayment,
            req.body.boatPayment,
            req.body.recreationalPayment,
            req.body.creditCardPayment,
            req.body.studentPayment,
            req.body.medicalPayment,
            req.body.insurancePayment,
            req.body.utilitiesPayment,
            req.body.cablePayment,
            req.body.phonePayment,
            req.body.entertainmentPayment,
            req.body.foodPayment,
            req.body.clothingPayment,
            req.body.internetPayment]).then(resp => {
                res.status(200).send('hit my database!!!');
            })
        }
    })

    app.post('/insert_liabilities', (req, res) => {
        console.log(req.user)
        if (!req.user) {
            res.status(404).send('Not logged in')
        } else {
            const db = app.get('db');
            db.insert_liabilities([req.user.id, req.body.homeBalance,
            req.body.rentalBalance,
            req.body.carBalance,
            req.body.landBalance,
            req.body.stockBalance,
            req.body.boatBalance,
            req.body.recreationalBalance,
            req.body.creditCardBalance,
            req.body.studentBalance,
            req.body.medicalBalance]).then(resp => {
                res.status(200).send('hit dat database!!!');
            })
        }
    })

    app.post('/insert_assets', (req, res) => {
        console.log(req.user)
        if (!req.user) {
            res.status(404).send('Not logged in')
        } else {
            const db = app.get('db');
            db.insert_assets([req.user.id, req.body.savingBalance,
            req.body.homeValue,
            req.body.rentalValue,
            req.body.carValue,
            req.body.landValue,
            req.body.stockValue,
            req.body.boatValue,
            req.body.recreationValue,]).then(resp => {
                res.status(200).send('hit dat database!')
            })
        }
    })

    //delete trial
    app.delete(`/delete`, (req, res) => {
        if (!req.user) {
            res.status(404).send('Not logged in')
        } else {
            const db = app.get('db');
            const stack = [];
            stack.push(db.delete_row_income([req.user.id]))
            stack.push(db.delete_row_assets([req.user.id]))
            stack.push(db.delete_row_liabilities([req.user.id]))
            stack.push(db.delete_row_budget([req.user.id]))
            Promise.all(stack).then(resp => {
                res.status(200).send('pray that this worked')
            })
        }
    })

    //cash flow trial
    app.get('/incomereq', (req, res) => {
        const db = app.get('db');
        db.total_income([req.user.id]).then(resp => {
            res.status(200).send(resp)
        })
    })

    app.get('/expensesreq', (req, res) => {
        const db = app.get('db');
        db.total_expenses([req.user.id]).then(resp => {
            res.status(200).send(resp)
        })
    })


    app.get('/logout', (req, res) => {
        req.logout();
    })

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../build/index.html'));
    });

    app.listen(SERVER_PORT, () => {
        console.log(`feels production readyish  ${SERVER_PORT}`)
    })
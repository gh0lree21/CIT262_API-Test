const fetch = require('node-fetch2');

it ("Should test validity of token", async ()=> {
    let token = "";

    const options = {
        method: 'POST',
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify({
            userName:"grant.holley98@gmail.com",
            password:"Password1!"
        })
    }

    const response = await fetch('https://dev.stedi.me/login', options);
    token = await response.text();
    const status = response.status;

    expect(status).toBe(200);
    expect(token.length).toBe(36);

});


// Bad Password test
it ("Should detect bad password", async ()=> {
    let token = "";

    const options = {
        method: 'POST',
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify({
            userName:"grant.holley98@gmail.com",
            password:"BadPassword1!"
        })
    }

    const response = await fetch('https://dev.stedi.me/login', options);
    token = await response.text();
    const status = response.status;

    expect(status).toBe(401);
    expect(token.length).toBe(0);

});

// Bad username test
it ("Should detect bad username", async ()=> {
    let token = "";

    const options = {
        method: 'POST',
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify({
            userName:"bademail@gmail.com",
            password:"Password1!"
        })
    }

    const response = await fetch('https://dev.stedi.me/login', options);
    token = await response.text();
    const status = response.status;

    expect(status).toBe(500);
    expect(token.length).toBe(60);

});
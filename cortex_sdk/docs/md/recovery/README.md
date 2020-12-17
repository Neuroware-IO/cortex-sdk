### Recovery

The recovery page features forms that enable the following functionality:

* `Reset` Password
* `Recover Holding` Accounts
* `Recover Custody` Accounts

-----

### `cortex_sdk.actions.client.register`

Credentials are required in order to make encrypted API requests.

The register function is also used in order to reset passwords - as follows:

```js
var user1_id = 1;
var email = "your-email";
var password = "your-password";
var number_of_lost_passwords = 1;
cortex_sdk.actions.client.register(
    {
        email: sha256(email),
        password: sha256(password)
    },
    user1_id,
    "app_salt",
    function(client_user)
    {
        if(
            client_user
            && typeof client_user.uid != 'undefined'
            && typeof client_user.secret != 'undefined'
            && typeof client_user.key != 'undefined' // for demo / non-db
        )
        {
            var client_secrets = email + client_user.secret + client_user.uid + password;
            var seed = bitcoin.crypto.sha256(client_secrets).toString('hex');
            var keys = cortex_sdk.keys(seed);
            var api_key = bitcoin.crypto.sha256(keys.public_key + hashed_password).toString('hex');

            var settings = {
                "url": "http://sinegy.neuroware.io/v1/api/auth/",
                "method": "POST",
                "timeout": 0,
                "headers": {
                    "Content-Type": "application/json"
                },
                "data": JSON.stringify({
                    "uid": user1_id,
                    "index": number_of_lost_passwords,
                    "hashEmail": sha256(email),
                    "hashPassword": sha256(password),
                    "secret": client_user.secret,
                    "apiKey": api_key,
                    "pubKey": keys.public_key
                })
            };
            jQuery.ajax(settings).done(function (response) 
            {
                if(response && typeof response.success != 'undefined' && response.success === true)
                {
                    var seed = response.rdata.seed;
                    var secret = response.rdata.secret;
                    var key = response.rdata.recoveryKey;
                 
                    // Items for UX
                    var wallet_user = 
                    {
                        uid: client_user.uid,
                        seed: seed,
                        secret: secret,
                        key: key
                    }

                    var credentials =
                    {
                        key: api_key,
                        secret: client_user.secret,
                        uid: client_user.uid,
                        seed: wallet_user.seed
                    };

                    var user_to_store = {
                        uid: client_user.uid,
                        email: hashed_email,
                        password: hashed_password,
                        secret: client_user.secret,
                        key: client_user.key,
                        pub: keys.public_key
                    };
                }
            });
        }
    }
);
```

Please note the use of `index` - which is defined as `number_of_lost_passwords` above.

-----

### `https://{{urls.api}}/v1/api/msrecovery/`

Multi-Signature (MS) recovery is an encrypted function that requires unlocked credentials.

It is used in order to provide the final signature needed before then relaying signed trnasactions.

```
var workload = {
    uid: uid,
    apiKey: api_key,
    email: bitcoin.crypto.sha256(email).toString('hex'),
    password: bitcoin.crypto.sha256(password).toString('hex'),
    secret: credentials.secret,
    seed: credentials.seed,
    ts: now,
    request: {
        aid: agent_id,
        network: network_type,
        dnkeys: [
            agent_dnkey,
            app_dnkey,
            primary_trustee_dnkey, 
            secondary_trustee_dnkey
        ],
        path: select_path,
        chain: chain,
        script: script,
        from: from,
        txid: txid,
        tx: tx
    }
};
cortex_sdk.actions.application.encrypt(
{
    uid: parseInt(uid), 
    email: email_address, 
    password: password, 
    workload: workload
},
function(encrypted_workload, signature, public_key)
{
    var settings = {
        "url": {{urls.api}}/v1/api/msrecovery/",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            uid: parseInt(uid), 
            workload: encrypted_workload, 
            signature: signature
        })
    };
    jQuery.ajax(settings).done(function (response) 
    {
        console.log(response);
    });
});
```

A successfully `decrypted` recovery response should look similar to the following example:

```
{
    "tx": "F4F2C09E327FC48A83E73DB9D93787FE3D5782785D98E2FD3B42D24DD6F0E18A"
}
```

-----

### `https://{{urls.api}}/v1/api/recovering/`

Recovering is an encrypted function that requires unlocked credentials.

It performs a `sweeping` function upon `custody` accounts.

```
var workload = {
    uid: uid,
    apiKey: api_key,
    email: bitcoin.crypto.sha256(email).toString('hex'),
    password: bitcoin.crypto.sha256(password).toString('hex'),
    secret: credentials.secret,
    seed: credentials.seed,
    ts: now,
    request: {
        aid: agent_id,
        close_xrp: close_xrp_accounts,
        specific_fee: specific_fee,
        index: user_index,
        network: network_type,
        path: pathed, // Source
        dnkeys: { // Source
            app: dnkey_app_source,
            trustee: dnkey_trustee_source
        },
        agent: {
            dnkey: agent_dnkey
        },
        ms: { // Destination
            dnkeys: [ms_dnkey_app, ms_dnkey_trustee]
        }
    }
};
cortex_sdk.actions.application.encrypt(
{
    uid: parseInt(uid), 
    email: email_address, 
    password: password, 
    workload: workload
},
function(encrypted_workload, signature, public_key)
{
    var settings = {
        "url": {{urls.api}}/v1/api/recovering/",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({
            uid: parseInt(uid), 
            workload: encrypted_workload, 
            signature: signature
        })
    };
    jQuery.ajax(settings).done(function (response) 
    {
        console.log(response);
    });
});
```

A successfully `decrypted` recovering response should look similar to the following example:

```
[
    {
        "btc": {
            "txid": false,
            "message": "Insufficient inputs to use.",
            "address": "myixhvQtiqehBHP2ZhLghoLtq3jkhEyktj",
            "holding": "moojNuXt6AUSdiU8F7BNc7wXTTsMcWuDXm",
            "balances": {
                "hex": "0xf4240",
                "int": 1000000,
                "btc": "0.01000000"
            }
        },
        "ltc": {
            "txid": "5e05479c54d9c5f855db25c036977266f8ad1c14ba896d1684aaf0b4507e5f3f",
            "message": "Sent",
            "address": "myixhvQtiqehBHP2ZhLghoLtq3jkhEyktj",
            "holding": "moojNuXt6AUSdiU8F7BNc7wXTTsMcWuDXm",
            "balances": {
                "hex": "0xf4240",
                "int": "1000000",
                "ltc": "0.01000000"
            }
        },
        "eth": {
            "txid": "0x5218ca752f7f729a50ac47d8ab631305ca05dffa73b5fa0f18e3021aae1c5df9",
            "message": "Sent",
            "address": "0x2ee315d3df71b8fa24267a0609e13320be778e51",
            "holding": "0xf7e8207a677f01b93bf8ce53886d07e3688d420d",
            "balances": {
                "hex": "0xde0b6b3a7640000",
                "int": 1000000000000000000,
                "eth": "1"
            }
        },
        "xrp": {
            "txid": "C42695C1A7466779CE5296089EE11114128FF7D91D58D464B92EB62B063A7D84",
            "message": "Sent",
            "address": "rD9ZwKfLJqEHeZJGUTxqsnLU9ZG7tG4gg8",
            "holding": "rNUD5FhtX4V6jAVBrSyBdiih2iPh8TEQJE",
            "balances": {
                "hex": "0x2719c34",
                "int": 40999988,
                "xrp": "40.999988"
            }
        }
    }
]
```
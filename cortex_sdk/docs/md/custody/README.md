### Withdrawal Addresses 
#### Referred to as `Custody` accounts within the Credence Hot Wallet Interface

-----

The custody page features forms that enable the following functionality:

* Generate `Custody` Account
* `Withdraw` from Custody Account

-----

### `https://{{urls.api}}/v1/api/custody/`

Custody is an encrypted function that requires unlocked credentials.

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
        index: user_index,
        network: network_type,
        dnkeys: {
            app: custody_dnkey_app,
            trustee: custody_dnkey_trustee
        },
        path: select_path
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
        "url": {{urls.api}}/v1/api/custody/",
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

A successfully `decrypted` custody response should look similar to the following example:

```
{
    "id": "d4486d63994dca8b27bd3b78c477c7e20bb3ddecd80600d045677f2f3adb3df3",
    "uid": "1",
    "path": false,
    "pathed": "Master",
    "network_type": "private",
    "accounts": [
        {
            "currency": "Bitcoin",
            "symbol": "BTC",
            "decimals": 8,
            "address": "myixhvQtiqehBHP2ZhLghoLtq3jkhEyktj",
            "txs": 8,
            "balances": {
                "int": 0,
                "str": "0.00000000"
            }
        },
        {
            "currency": "Ethereum",
            "symbol": "ETH",
            "decimals": 18,
            "address": "0x2ee315d3df71b8fa24267a0609e13320be778e51",
            "txs": 18,
            "balances": {
                "int": 0,
                "str": "0"
            }
        },
        {
            "currency": "Ripple",
            "symbol": "XRP",
            "decimals": 6,
            "address": "rD9ZwKfLJqEHeZJGUTxqsnLU9ZG7tG4gg8",
            "txs": 15,
            "balances": {
                "int": 19999988,
                "str": "19.999988"
            }
        },
        {
            "currency": "Litecoin",
            "symbol": "LTC",
            "decimals": 8,
            "address": "myixhvQtiqehBHP2ZhLghoLtq3jkhEyktj",
            "txs": 1,
            "balances": {
                "int": 0,
                "str": "0.00000000"
            }
        }
    ],
    "dnkeys": {
        "app": "app.neuroware.io",
        "trustee": "trustee.neuroware.io"
    }
}
```

-----

### `https://{{urls.api}}/v1/api/withdraw/`

Withdraw is an encrypted function that requires unlocked credentials.

It is used by our client's users for instant online withdrawals.

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
        aid: hidden_agent_id,
        specific_fee: specific_fee,
        index: user_index,
        chain: chain,
        network: network_type,
        amount: amount,
        path: select_path,
        dnkeys: {
            app: dnkey_app,
            trustee: dnkey_trustee
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
        "url": {{urls.api}}/v1/api/withdraw/",
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

A successfully `decrypted` withdraw response should look similar to the following example:

```
{
    "txid": "579A6E9745390397895DDB0BF117A74C9E84306F61648341A2412424248D416A"
}
```
### Deposits 
#### Referred to as `Entities` within the Credence Hot Wallet Interface

-----

The deposits page features forms that enable the following functionality:

* Generate `Deposit` Account
* `Sweep` from Deposits

-----

### `https://{{urls.api}}/v1/api/deposit/`

Deposit is an encrypted function that requires unlocked credentials.

```
var workload = {
    uid: parseInt(uid),
    apiKey: api_key,
    email: bitcoin.crypto.sha256(email).toString('hex'),
    password: bitcoin.crypto.sha256(password).toString('hex'),
    secret: credentials.secret,
    seed: credentials.seed,
    ts: now,
    request: {
        index: user_index,
        path: select_path,
        network: network_type,
        privacy: 'public'
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
        "url": {{urls.api}}/v1/api/deposit/",
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

A successfully `decrypted` deposit response should look similar to the following example:

```
{
    "id": "a0d92ba8a1f0cbaedab64a9903b2e65742143c599a2c179486735cf4a48eb630",
    "uid": 1,
    "path": false,
    "pathed": "Master",
    "networkType": "private",
    "accounts": [
        {
            "currency": "Bitcoin",
            "symbol": "BTC",
            "decimals": 8,
            "address": "msaPsHjdC9QioWJ6Q7WosRK1cngsGmxGEC",
            "txs": 9,
            "balances": {
                "int": 0,
                "str": "0.00000000"
            }
        },
        {
            "currency": "Ethereum",
            "symbol": "ETH",
            "decimals": 18,
            "address": "0xf64b1c2420f90e2738b14cdbcaca856914a983be",
            "txs": 29,
            "balances": {
                "int": 100000000000000000,
                "str": "0.1"
            }
        },
        {
            "currency": "Ripple",
            "symbol": "XRP",
            "decimals": 6,
            "address": "r1exvH9WgaY7RA7Qsn3jrtKVosoGeiLSd",
            "txs": 0,
            "balances": {
                "int": 0,
                "str": 0
            }
        },
        {
            "currency": "Litecoin",
            "symbol": "LTC",
            "decimals": 8,
            "address": "msaPsHjdC9QioWJ6Q7WosRK1cngsGmxGEC",
            "txs": 4,
            "balances": {
                "int": 10000000,
                "str": "0.10000000"
            }
        }
    ]
}
```

The only way to assets out of a deposit address is by `sweeping` them.

-----

### `https://{{urls.api}}/v1/api/sweeping/`

Sweeping is an encrypted function that requires unlocked credentials.

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
        close_xrp: close_xrp_accounts,
        specific_fee: specific_fee,
        index: user_index,
        network: network_type,
        agent: {
            dnkey: agent_dnkey
        },
        ms: {
            dnkeys: [ms_dnkey_app, ms_dnkey_trustee]
        },
        wallet: {
            paths: path_array,
            users: user_array
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
        "url": {{urls.api}}/v1/api/sweeping/",
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

A successfully `decrypted` sweeping response should look similar to the following example:

```
[
    {
        "btc": {
            "txid": false,
            "message": "Not enough funds",
            "address": "msaPsHjdC9QioWJ6Q7WosRK1cngsGmxGEC",
            "holding": "moojNuXt6AUSdiU8F7BNc7wXTTsMcWuDXm",
            "balances": {
                "hex": "0x0",
                "int": 0,
                "btc": "0.00000000"
            }
        },
        "ltc": {
            "txid": "c2999ca66d3bd1dbabe36d394e70f0be8bdbafa93b72b042643cd999c5d99e40",
            "message": "Sent",
            "address": "msaPsHjdC9QioWJ6Q7WosRK1cngsGmxGEC",
            "holding": "moojNuXt6AUSdiU8F7BNc7wXTTsMcWuDXm",
            "balances": {
                "hex": "0x989680",
                "int": "10000000",
                "ltc": "0.10000000"
            }
        },
        "eth": {
            "txid": "0x77b7c8bce21546cbc68ebb00a0646e424c452e62067b4e4a35c9219f31df185a",
            "message": "Sent",
            "address": "0xf64b1c2420f90e2738b14cdbcaca856914a983be",
            "holding": "0xf7e8207a677f01b93bf8ce53886d07e3688d420d",
            "balances": {
                "hex": "0x16345785d8a0000",
                "int": 100000000000000000,
                "eth": "0.1"
            }
        },
        "xrp": {
            "txid": false,
            "message": "Not enough funds",
            "address": "r1exvH9WgaY7RA7Qsn3jrtKVosoGeiLSd",
            "holding": "rNUD5FhtX4V6jAVBrSyBdiih2iPh8TEQJE",
            "balances": {
                "hex": "0x0",
                "int": 0,
                "xrp": 0
            }
        }
    }
]
```
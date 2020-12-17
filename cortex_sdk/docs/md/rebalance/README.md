### Rebalance

-----

Rebalancing is the process of ensuring there is no more than approximately 30% of the client's total assets that are held in custody are available for instant online withdrawals from non multi-signature accounts.

By default, the rebalance function moves assets from either custody to holding or holding to custody.

-----

### `https://{{urls.api}}/v1/api/rebalance/`

Rebalance is an encrypted function that requires unlocked credentials. By utilizing the `check_balances_only` parameter will determine whether to perform the rebalance or whether to simply check if rebalancing is required.

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
        check_balances_only: wallet_check,
        aid: hidden_agent_id,
        network: network_type,
        agent: {
            dnkey: agent_dnkey
        },
        holding: {
            path: holding_path
        },
        ms: {
            dnkeys: [ms_dnkey_app, ms_dnkey_trustee]
        },
        withdrawals: {
            dnkeys: [ms_dnkey_app2, ms_dnkey_trustee2],
            path: withdraw_path
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
        "url": {{urls.api}}/v1/api/rebalance/",
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

A successfully `decrypted` rebalance response with `check_balances_only` set to `true` should look like:

```
{
    "accounts": {
        "holding": {
            "bitcoin": {
                "address": "2N62aE6ZzRhkD4SSu49BJhgTVaPJm2pwf5L",
                "balance": 10046708
            },
            "litecoin": {
                "address": "QMVAgeBo8MrFXatAENcRGYTpm2qMvDaE3d",
                "balance": 21002099
            },
            "ethereum": {
                "address": "0xd93e0208b854c4d533ecb4a72f9c34b734a4edaa",
                "balance": 10251387309856000000
            },
            "ripple": {
                "address": "rQDeudNGapu4oGuN8CNH8tzyCJbukZV1BK",
                "balance": 198988120
            }
        },
        "withdrawals": {
            "bitcoin": {
                "address": "moojNuXt6AUSdiU8F7BNc7wXTTsMcWuDXm",
                "balance": 6301332
            },
            "litecoin": {
                "address": "moojNuXt6AUSdiU8F7BNc7wXTTsMcWuDXm",
                "balance": 8994700
            },
            "ethereum": {
                "address": "0xf7e8207a677f01b93bf8ce53886d07e3688d420d",
                "balance": 7007518984223895000
            },
            "ripple": {
                "address": "rNUD5FhtX4V6jAVBrSyBdiih2iPh8TEQJE",
                "balance": 78921673
            }
        }
    },
    "rebalances": [
        {
            "symbol": "btc",
            "from": "moojNuXt6AUSdiU8F7BNc7wXTTsMcWuDXm",
            "to": "2N62aE6ZzRhkD4SSu49BJhgTVaPJm2pwf5L",
            "destination": "holding",
            "value": 1396920
        },{
            "symbol": "eth",
            "from": "0xf7e8207a677f01b93bf8ce53886d07e3688d420d",
            "to": "0xd93e0208b854c4d533ecb4a72f9c34b734a4edaa",
            "destination": "holding",
            "value": 1829847095999926300
        }
    ]
}
```

Whereas a successfully `decrypted` rebalance response with `check_balances_only` set to `false` should look like:

```
[
    {
        "txid": "61bc68342985a0e39c3e4c7f343ab2df0ddc6ea4037d2ca43bc106706c808b70",
        "tx": false,
        "message": "Bitcoin Successfully Sent",
        "account": {
            "symbol": "btc",
            "from": "moojNuXt6AUSdiU8F7BNc7wXTTsMcWuDXm",
            "to": "2N62aE6ZzRhkD4SSu49BJhgTVaPJm2pwf5L",
            "destination": "holding",
            "value": 1396920,
        }
    },
    {
        "txid": "0xabd45a803582c2f8fd65524f85dd535468f61e928387531688774082ba3a9b65",
        "tx": false,
        "message": "Ethereum Successfully Sent",
        "account": {
            "symbol": "eth",
            "from": "0xf7e8207a677f01b93bf8ce53886d07e3688d420d",
            "to": "0xd93e0208b854c4d533ecb4a72f9c34b734a4edaa",
            "destination": "holding",
            "value": 1829847095999926300
        }
    }
]
```
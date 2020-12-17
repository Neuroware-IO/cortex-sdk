### Holding 
#### Referred to as `Shared` accounts within the Credence Hot Wallet Interface

-----

The holding page features forms that enable the following functionality:

* Generate `Holding` Account
* Perform a `DN Key` Lookup

-----

### `https://{{urls.api}}/v1/api/holding/`

Holding is an encrypted function that requires unlocked credentials.

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
        return_addresses_only: return_addresses,
        network: network_type,
        agent: {
            dnkey: agent_dnkey,
            signature: agent_signature
        },
        ms: {
            dnkeys: [ms_dnkey_app, ms_dnkey_trustee]
        },
        application: {
            dnkey: app_dnkey,
            signature: app_signature
        },
        trustee: {
            dnkeys: [primary_trustee_dnkey, secondary_trustee_dnkey],
            signatures: [primary_trustee_signature, secondary_trustee_signature]
        },
        wallet: {
            path: select_path
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
        "url": {{urls.api}}/v1/api/holding/",
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

A successfully `decrypted` holding response should look similar to the following example:

```
{
    "btc": {
        "address": "mwx89nsojrX7gjQFkxppYjY6CXVUKXpb3a",
        "xpub": "tpubD6NzVbkrYhZ4YWDQuptBkT3Wys52eud8PXrvAiLw2n7usekk5HnvkXrWHEVgRroBLH4PFyMRiH4RSkp7fZUwgXF8VCVDTeVLNMfXEHVfLnb"
    },
    "ltc": {
        "address": "mwx89nsojrX7gjQFkxppYjY6CXVUKXpb3a",
        "xpub": "Ltub2SSUS19CirucX5JW47u6QPpNjYHwRJeCyBUbeF2u4NCirjiqf5SaRjg7Q4vvZmFC8aw4EXE72CskrfgdBbj9e1aFijdNSob9GtqTNsHFVgk"
    },
    "eth": {
        "address": "0x5461bd7030998afb8bbcb7fa65dabc7477e997be"
    },
    "xrp": {
        "address": "rwtvbUeySvBqttL5JCMpC1ZHy11qmhqr58"
    }
}
```

-----

### `https://{{urls.api}}/v1/dnkey/`

DN-Key is an unencrypted function that does not require credentials.

```
var settings = {
    "url": {{urls.api}}/v1/dnkey/",
    "method": "POST",
    "timeout": 0,
    "headers": {
        "Content-Type": "application/json"
    },
    "data": JSON.stringify({
        host: 'mark.neuroware.io'
    })
};
jQuery.ajax(settings).done(function (response) 
{
    console.log(response);
});
```

A successful dnkey response should look similar to the following example:

```
{
    "dnkey-btc-public": "15vYpF21o6CNMNDgqSW1jZQXbNSNHVqg2p",
    "dnkey-btc-private": "mkSW7J6zc7dd8UhJZ1UPZUcrTN35Dn9tu2",
    "dnkey-btc-xpub-public": "xpub661MyMwAqRbcF2Mq6UJtKFpXC5o2rNUt34qoQNYoi6n4LNAwmazyQLQom2VrcMqktGWS1GusQpCtUNH3aKZmB9sac2iKSEA9BuwPns32GBF",
    "dnkey-btc-xpub-private": "tpubD6NzVbkrYhZ4WpYgYfHyXB9tXCtgqkywahS6kvbx41Xx5eqeqor4Yn5e14ae8rnzgB3LcrRjwv2wAYmeyBR14bKsfdTd7kpNmsXoYwHNfCT",
    "dnkey-device-id": "c3b57dadc29179044289bb0250edd0784df4ff7a92ee53eb1e62bdd55234b61d",
    "dnkey-eth-public": "0xcaa97f52b46cab0f8fda17543bea4a6d71a6d72b",
    "dnkey-eth-private": "0xcaa97f52b46cab0f8fda17543bea4a6d71a6d72b",
    "dnkey-ltc-public": "LQ9W5TKqskSRcAur1aVK1aUHoaoeWz9BDe",
    "dnkey-ltc-private": "mkSW7J6zc7dd8UhJZ1UPZUcrTN35Dn9tu2",
    "dnkey-ltc-xpub-public": "Ltub2SSUS19CirucVPdmgxJtB7vkGt7bcA12AM3nETHv5bcm4jokRbViDyuF7u1tGmF1UUv1bQJRFqrGaTeAVDfD25ezuAbn6uvBgQhjhT2ua94",
    "dnkey-ltc-xpub-private": "Ltub2SSUS19CirucVPdmgxJtB7vkGt7bcA12AM3nETHv5bcm4jokRbViDyuF7u1tGmF1UUv1bQJRFqrGaTeAVDfD25ezuAbn6uvBgQhjhT2ua94",
    "dnkey-xrp-public": "rKeiNNFjaMvA9eXmDFLKfor3rdc7bPAFJp",
    "dnkey-xrp-private": "rKeiNNFjaMvA9eXmDFLKfor3rdc7bPAFJp",
}
```

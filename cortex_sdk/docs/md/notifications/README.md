### Notifications

Notification functions currently include:

* `v1/api/state`
* `v1/api/tracker`
* `v1/api/notifications`

-----

### `https://{{urls.api}}/v1/api/state/`

The state function provides a simple cache interface for address lookups.

By default, the state function will provide the last updated database entry for a specific address and will gather and store new information for any address that does not already have a state. The current state can be overwritten by utilizing the optional `reload` parameter as highlighted within the example below:

```
var chain = 'ltc';
var address = 'mxmJAtpkw1iZ6qzhBNcvD8F2FZJ3AmMh2S';
var network_type = 'private';
var refresh_cache = false;

var workload = {
    uid: parseInt(uid),
    apiKey: api_key,
    email: bitcoin.crypto.sha256(email).toString('hex'),
    password: bitcoin.crypto.sha256(password).toString('hex'),
    secret: credentials.secret,
    seed: credentials.seed,
    ts: now,
    request: {
        address: address,
        index: 0,
        chain: chain,
        network: network_type,
        reload: refresh_cache // only optional request parameter
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
        "url": client.credence.app/v1/api/state/",
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
A successfully `decrypted` state response should look similar to the following example:

```
{
  "success": true,
  "message": {
    "balance": "0.00076000",
    "tx_count": 5,
    "lastUpdated": "2021-01-25T00:44:25.676Z",
    "incomings": [
      {
        "txid": "78c89f060d86dd89d0cdae0b2d41b8982762f1add0425cadf8ab863b9ebf4038",
        "ts": 1606710925,
        "ago": "2 months ago",
        "block": 1718268,
        "confirmations": 74915,
        "ins": [
          {
            "from": "mkSW7J6zc7dd8UhJZ1UPZUcrTN35Dn9tu2",
            "id": "ada5e64dbb6d3500c332715b2682f78855448e4ef9c0cce61f19b5e63b378a3f",
            "index": 1
          }
        ],
        "value": "0.00076000"
      },
      {
        "txid": "388a0285579a31f28f89a31914a1c2f27157283c9cce1ea54e2334003426ca41",
        "ts": 1605583828,
        "ago": "2 months ago",
        "block": 1696083,
        "confirmations": 97100,
        "ins": [
          {
            "from": "mkSW7J6zc7dd8UhJZ1UPZUcrTN35Dn9tu2",
            "id": "42ca7176baa2d91ccf103639cedd238f5a49a01bdafb02cf50ee8dc19aad80d3",
            "index": 0
          }
        ],
        "value": "0.01000000"
      },
      {
        "txid": "203b1fd4b24902d04293480bbcea0b20cc27204594859d4cb6f8defdaf85ea45",
        "ts": 1605583816,
        "ago": "2 months ago",
        "block": 1696083,
        "confirmations": 97100,
        "ins": [
          {
            "from": "mkSW7J6zc7dd8UhJZ1UPZUcrTN35Dn9tu2",
            "id": "310b4567b37994fe2bd72229c21b686a0806f3c8c1e71fcfcdc954063c81beb9",
            "index": 0
          },
          {
            "from": "mkSW7J6zc7dd8UhJZ1UPZUcrTN35Dn9tu2",
            "id": "d70f9fb70b2f1d8bb8bf748e555e02dce4ac63d2619ec9eecef35e6552f98693",
            "index": 1
          }
        ],
        "value": "0.01000000"
      },
      {
        "txid": "d70f9fb70b2f1d8bb8bf748e555e02dce4ac63d2619ec9eecef35e6552f98693",
        "ts": 1605506388,
        "ago": "2 months ago",
        "block": 1695549,
        "confirmations": 97634,
        "ins": [
          {
            "from": "mkSW7J6zc7dd8UhJZ1UPZUcrTN35Dn9tu2",
            "id": "12d48606a9f7b6c206257b0f2302017fbdad1decbc49048dcacbcd3e271fd8e6",
            "index": 0
          }
        ],
        "value": "0.00100000"
      }
    ],
    "outgoings": [
      {
        "txid": "3593cc8458f83998e81c573fc004916ce50932c3ef437112035e435ec0229e89",
        "ts": 1606098933,
        "ago": "2 months ago",
        "block": 1712537,
        "confirmations": 80646,
        "outs": [
          {
            "to": "mkSW7J6zc7dd8UhJZ1UPZUcrTN35Dn9tu2",
            "amount": "0.02093800"
          }
        ],
        "value": "0.02093799",
        "fees": "0.00006201"
      }
    ],
    "address": "mxmJAtpkw1iZ6qzhBNcvD8F2FZJ3AmMh2S",
    "network": "private",
    "currency": "Litecoin",
    "chain": "ltc",
    "updated": "2021-01-25T00:44:25.676Z"
  }
}
```

-----

### `https://{{urls.api}}/v1/api/tracker/`

And then?

-----

### `https://{{urls.api}}/v1/api/notifications/`

And then?
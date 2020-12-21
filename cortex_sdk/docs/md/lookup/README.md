### Lookup

The lookup function can be used to view the transaction history for any address.

It is an unencrypted API end-point, which is unable to provide history for Ethereum non-multisignature addresses.

-----

### `https://{{urls.api}}/v1/<chain>/transactions/`

Chain can equal one of the following:

* `btc` | __Bitcoin__
* `ltc` | __Litecoin__
* `eth` | __Ethereum__
* `xrp` | __Ripple__

Required parameters include `address` and `network` - as seen below:

```
var chain = 'ltc';
var address = 'mkSW7J6zc7dd8UhJZ1UPZUcrTN35Dn9tu2';
var network = 'private';

var settings = {
    "url": "https://{{urls.api}}/v1/" + chain + "/transactions/",
    "method": "POST",
    "timeout": 0,
    "headers": {
    "Content-Type": "application/json"
    },
    "data": JSON.stringify({
        "address": address,
        "network": network
    })
};

jQuery.ajax(settings).done(function (results) {
    console.log(results);
});
```

The expected results should look similar to the following:

```
{
    "type": "Address",
    "id": "mkSW7J6zc7dd8UhJZ1UPZUcrTN35Dn9tu2",
    "network": "private",
    "currency": "Litecoin",
    "chain": "ltc",
    "address": {
        "got_txs": true,
        "got_pending": false,
        "pending": 0,
        "balance": 0.013402,
        "received": 0.92025117,
        "tx_count": 24,
        "txs": [
            {
                "txid": "580175b2fb4eb54c5d3c36264fd71365801744959220e58119517c2a3706bd9b",
                "ts": 1608166494,
                "ago": "4 days ago",
                "block": 1740467,
                "confirmations": 1064,
                "ins": [
                    {
                        "from": "mkSW7J6zc7dd8UhJZ1UPZUcrTN35Dn9tu2",
                        "id": "78c89f060d86dd89d0cdae0b2d41b8982762f1add0425cadf8ab863b9ebf4038",
                        "index": 1
                    },{
                        "from": "mkSW7J6zc7dd8UhJZ1UPZUcrTN35Dn9tu2",
                        "id": "0b3f7181bf1628dfec7a245881afbaf41b2e2d090b192b9c079512856f6c457d",
                        "index": 0
                    }
                ],
                "outs": [
                    {
                        "to": "myixhvQtiqehBHP2ZhLghoLtq3jkhEyktj",
                        "amount": "0.01000000"
                    },{
                        "to": "mkSW7J6zc7dd8UhJZ1UPZUcrTN35Dn9tu2",
                        "amount": "0.00895100"
                    }
                ],
                "incoming": false,
                "outgoing": true,
                "value": 0.01,
                "fees": 0.000044
            },
            {
                "txid": "307465e2d7e038851f528068c85eb1a75b96cd7979ffd059c4dfcfb4479a7933",
                "ts": 1607300836,
                "ago": "2 weeks ago",
                "block": 1720866,
                "confirmations": 20665,
                "ins": [
                    {
                        "from": "2MziftKC7uiNEUAmDL3mDsNFeTL5yttMvxA",
                        "id": "0b3f7181bf1628dfec7a245881afbaf41b2e2d090b192b9c079512856f6c457d",
                        "index": 1
                    }
                ],
                "outs": [],
                "incoming": true,
                "outgoing": false,
                "value": 0.00119999,
                "fees": 0
            }
        ]
    }
}
```
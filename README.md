## Cortex SDK

The Cortex SDK is used to communicate with the Credent [Hot Wallet API](cortex_sdk/docs/api/README.md).

Credence utilizes the `cortex_sdk.actions.application.prepare()` function for all interactions other than __registration__, which is the only API end-point that does not use encrypted workloads.

By including the Cortex SDK in any HTML application, the following form functions will be automatically initiated:

```js
cortex_sdk.forms.registration(); // Applied to forms with 'cortex-new-api-user-form' class
cortex_sdk.forms.deposit(); // Applied to forms with 'cortex-get-deposit-address-form' class
cortex_sdk.forms.holding(); // Applied to forms with 'cortex-get-holding-address-form' class
cortex_sdk.forms.custody(); // Applied to forms with 'cortex-get-deposit-address-form' class
cortex_sdk.forms.sweeping(); // Applied to forms with 'cortex-sweep-deposit-addresses-form' class
cortex_sdk.forms.rebalance(); // Applied to forms with 'cortex-hot-rebalance-form' class
cortex_sdk.forms.withdraw(); // Applied to forms with 'cortex-withdraw-custody-form' class
```

All forms other than `registration` utilize the `prepare` funnction and require `credentials`.

In order to utilize encrypted API end-points, a user must first register their current device, which will then enable that device to make authenticated API requests that sign unencrypted workloads using private cryptographic keys and then encrypt the workloads using public keys. API credentials are encrypted and stored within the local browser, which can only be unlocked using the correct email address and password. 

Once unlocked, the email address and password are also used in combination with the other credentials to create the private keys needed to sign and encrypt the workload.

The following function can be used to unlock stored credentials:

```js
cortex_sdk.credentials.get(uid = 0, email = "full-email", password = "full-password")
{
    var credentials = false;
    var encrypted_data = localStorage.getItem('cortex_api_credentials_user_' + uid);
    var key_hash = EthJS.Util.sha256(email + password).toString('hex');
    var keys = cortex_sdk.keys(key_hash);
    var encrypted_bytes = aesjs.utils.hex.toBytes(encrypted_data);
    var aes_ctr = new aesjs.ModeOfOperation.ctr(keys.raw);
    var decrypted_bytes = aes_ctr.decrypt(encrypted_bytes);
    var decrypted_data = aesjs.utils.utf8.fromBytes(decrypted_bytes);
    try
    {
        credentials = JSON.parse(decrypted_data);
        var key = credentials.key;
        var secret = credentials.secret;
        var seed = credentials.seed;
        var id = credentials.uid;
    }
    catch(e)
    {
        console.log('credential error: ' + e);
    }
    return credentials;
}
```

In order to get credentials, users are first required to register their devices.

`cortex_sdk.actions.client.register`
------------------------------------

```js
var user1_id = 1;
var email = "your-email";
var password = "your-password";
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


`cortex_sdk.actions.application.prepare`
----------------------------------------
One function to rule them all.

```js

// The variables
var user1_id = 1;
var user2_id = 2;
var email = "your-email";
var password = "your-password";
var network_type = "private";
var path = [20, 20];
var another_example_path = [2, 0, 2, 0];
var withdrawal_chain = "btc";

// Unlock credentials from localStorage
var credentials = cortex_sdk.credentials.get(uid, email, password);

// Every API endpoint available for preparation
var api_urls = ["deposit", "holding", "custody", "sweeping", "rebalance", "withdraw"];
var api_request_type = 0; // 0 = Deposit, 1 = Holding, etc, etc ...

// The basic workload required for every end point
var unecrypted_workload = {
    uid: user1_id,
    apiKey: credentials.key,
    email: bitcoin.crypto.sha256(email).toString('hex'),
    password: bitcoin.crypto.sha256(password).toString('hex'),
    secret: credentials.secret,
    seed: credentials.seed,
    ts: new Date().getTime()
};

// The specific API request to be included within each workload
// The array index matches the array index of the api_urls
var api_requests = [
    {
        path: path,
        network: network_type
    },
    {
        network: network_type,
        agent: {
            dnkey: "agent-dnkey",
            signature: "agent-signature"
        },
        ms: {
            dnkeys: ["app-holding-dnkey", "trustee-holding-dnkey"]
        },
        application: {
            dnkey: "app-user2-dnkey",
            signature: "app-user2-signature"
        },
        trustee: {
            dnkeys: ["trustee-user1-dnkey", "trustee-user2-dnkey"],
            signatures: ["trustee-user1-signature", "trustee-user2-signature"]
        },
        wallet: {
            path: path
        }
    },
    {
        network: network_type,
        dnkeys: {
            app: "app-custody-dnkey",
            trustee: "trustee-custody-dnkey"
        },
        path: path
    },
    {
        network: network_type,
        agent: {
            dnkey: "agent-dnkey"
        },
        ms: {
            dnkeys: ["app-holding-dnkey", "trustee-holding-dnkey"]
        },
        wallet: {
            paths: [path, another_example_path],
            users: [user1_id, user2_id]
        }
    },
    {
        check_balances_only: true, // switch to false for actual rebalance
        network: network_type,
        agent: {
            dnkey: "agent-dnkey"
        },
        holding: {
            path: path
        },
        ms: {
            dnkeys: ["app-holding-dnkey", "trustee-holding-dnkey"]
        },
        withdrawals: {
            dnkeys: ["app-custody-dnkey", "trustee-custody-dnkey"],
            path: another_example_path
        }
    },
    {
        aid: user1_id,
        chain: withdrawal_chain,
        network: network_type,
        amount: "all",
        path: path,
        dnkeys: {
            app: "app-custody-dnkey",
            trustee: "trustee-custody-dnkey"
        }
    }
];

// Link the URL endpoint to the specific api request requirements
unecrypted_workload.request = api_requests[api_request_type];

// The magic function that encrypts, sends and decrypts every end point ...
cortex_sdk.actions.application.prepare(
    {uid: uid, email: email, password: password, workload: unecrypted_workload}, // Parameters for encrypting
    {url: api_urls[api_request_type]}, // Endpoint for request
    function(decrypted_response)
    {
        console.log('decrypted_response', decrypted_response);
    }
);
```
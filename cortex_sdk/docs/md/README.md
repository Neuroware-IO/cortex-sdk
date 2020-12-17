### Introduction

This SDK is used to communicate with the __Hot Wallet API__: `https://client.credence.app/v1/api/`

The Credence interface utilizes the `cortex_sdk.actions.application.prepare()` function for all encrypted API requests.

The `prepare` function provides universal access to the following `encrypted` API end-points:

* `{{urls.api}}/v1/api/deposits/`
* `{{urls.api}}/v1/api/custody/`
* `{{urls.api}}/v1/api/holding/`
* `{{urls.api}}/v1/api/msrecovery/`
* `{{urls.api}}/v1/api/sweeping/`
* `{{urls.api}}/v1/api/rebalance/`
* `{{urls.api}}/v1/api/recovering/`
* `{{urls.api}}/v1/api/withdraw/`

By including the SDK in any HTML application, the following form functions will be automatically initiated:

```js
cortex_sdk.forms.registration(); // Applied to forms with 'cortex-new-api-user-form' class
cortex_sdk.forms.deposit(); // Applied to forms with 'cortex-get-deposit-address-form' class
cortex_sdk.forms.holding(); // Applied to forms with 'cortex-get-holding-address-form' class
cortex_sdk.forms.custody(); // Applied to forms with 'cortex-get-deposit-address-form' class
cortex_sdk.forms.sweeping(); // Applied to forms with 'cortex-sweep-deposit-addresses-form' class
cortex_sdk.forms.rebalance(); // Applied to forms with 'cortex-hot-rebalance-form' class
cortex_sdk.forms.withdraw(); // Applied to forms with 'cortex-withdraw-custody-form' class
cortex_sdk.forms.msrecovery(); // Applied to forms with 'cortex-recover-ms-tx-form' class
cortex_sdk.forms.recovering(); // Applied to forms with ''cortex-recovering-form' class
```

All forms other than `registration` utilize the `prepare` funnction and require `credentials`.

In order to utilize encrypted API end-points, a user must first register their current device, which will then enable that device to make authenticated API requests that sign unencrypted workloads using private cryptographic keys and then encrypt the workloads using public keys. API credentials are encrypted and stored within the local browser, which can only be unlocked using the correct email address and password. 

-----


`cortex_sdk.actions.application.prepare`
----------------------------------------
One function to rule them all.

The following example can be used to access every encrypted function we provide:

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
var specific_fee_to_use_in_place_of_recommended_one = 0;
var recovery_key_index_for_those_that_lost_passwords = 0;
var script = "REEDEM_SCRIPT";
var tx = "RAW_TRANSACTION";
var from = "ADDRESS_SENDING_TRANSACTION";
var txid = 0; // Related to multisig DB entry or Ethereum TX smart contract array
var close_xrp_accounts = false; // true will ignore XRP 20 minimum requirement

// Unlock credentials from localStorage
var credentials = cortex_sdk.credentials.get(uid, email, password);

// Every API endpoint available for preparation
var api_urls = [
    "deposit", 
    "holding",
    "custody", 
    "sweeping",
    "rebalance",
    "withdraw",
    "msrecovery",
    "recovering"
];
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
        network: network_type,
        index: recovery_key_index_for_those_that_lost_passwords
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
        },
        index: recovery_key_index_for_those_that_lost_passwords
    },
    {
        network: network_type,
        dnkeys: {
            app: "app-custody-dnkey",
            trustee: "trustee-custody-dnkey"
        },
        path: path,
        index: recovery_key_index_for_those_that_lost_passwords
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
        },
        specific_fee: specific_fee_to_use_in_place_of_recommended_one,
        index: recovery_key_index_for_those_that_lost_passwords
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
        },
        index: recovery_key_index_for_those_that_lost_passwords
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
        },
        specific_fee: specific_fee_to_use_in_place_of_recommended_one,
        index: recovery_key_index_for_those_that_lost_passwords
    },
    {
        aid: user1_id,
        network: network_type,
        dnkeys: [
            "app-user1-dnkey",
            "app-user2-dnkey",
            "trustee-user1-dnkey", 
            "trustee-user2-dnkey"
        ],
        path: path,
        chain: withdrawal_chain,
        script: script,
        from: from,
        txid: txid,
        tx: tx,
        index: recovery_key_index_for_those_that_lost_passwords
    },
    {
        aid: user1_id,
        close_xrp: close_xrp_accounts,
        network: network_type,
        path: path, // Path of source ...
        dnkeys: {
            app: "app-source-dnkey",
            trustee: "trustee-source-dnkey"
        },
        agent: {
            dnkey: "user-dnkey"
        },
        ms: {
            dnkeys: [
                "app-destination-dnkey", 
                "trustee-destination-dnkey"
            ]
        },
        specific_fee: specific_fee_to_use_in_place_of_recommended_one,
        index: recovery_key_index_for_those_that_lost_passwords
    }
];

// Link the URL endpoint to the specific api request requirements
unecrypted_workload.request = api_requests[api_request_type];

// The magic function that encrypts, sends and decrypts every end point ...
cortex_sdk.actions.application.prepare(
    {
        uid: uid, 
        email: email, 
        password: password, 
        workload: unecrypted_workload
    },
    {
        url: api_urls[api_request_type]
    },
    function(decrypted_response)
    {
        console.log('decrypted_response', decrypted_response);
    }
);
```
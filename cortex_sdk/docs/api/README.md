## Credent Hot Wallet API

The Credent Hot Wallet API is used by Neuroware's [Cortex SDK](../../../README.md) for [Credence](http://credence.app).

### Postman Collection

If you use Postman to test your APIs, you can download this [collection](https://github.com/Neuroware-IO/cortex-sdk/blob/master/cortex_sdk/docs/postman/API.postman_collection.json) and import it into your Postman application.

### Javascript Examples

##### shamir/share (Distribute Shard)
```js
var requestData = {
  "secret":"test",
  "shared":"3",
  "needed":"3"
};

var settings = {
  "url": "http://sinegy.neuroware.io/shamir/share/",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify(requestData),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

// Expected output
var response = [
  "80101d39b2a6a81b172dac68edec14f3f2c",
  "8025fa569c73d491d2586321452289bdc08",
  "8035e76f2ed57c8ac565c809affe9b1e350"
];
```

##### shamir/combine (Combine Shard)
```js
var requestData = [
  "801a60bdcc3b20cfbacd0",
  "80238d2d282eaad7add07",
  "8039fd97a412ba1e471a3"
];

var settings = {
  "url": "http://sinegy.neuroware.io/shamir/combine/",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify(requestData),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

// Expected output
var response = 'test';
```

##### api/auth (Register API User)
```js
var uid = 2;
var hashEmail = sha256("your-email");
var hashPassword = sha256("your-password");
var secret = sha256("salt" + uid);
var pubKey = "your-public-key";
var apiKey = sha256(pubKey + hashPassword);

var requestData = {
  "uid":uid,
  "hashEmail":hashEmail,
  "hashPassword":hashPassword,
  "secret":secret,
  "apiKey":apiKey,
  "pubKey":pubKey
};

var settings = {
  "url": "http://sinegy.neuroware.io/api/auth/",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify(),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

// Expected output
var response = {
  seed: "seed",
  secret: "secret",
  recoveryKey: "recovery-key"
};
```

---

Starting from this point onwards, all the workload will have to be encrypted by using the method below:
###### Workload encrypt
```js
var uid = 2;
var hashEmail = sha256("your-email");
var hashPassword = sha256("your-password");
var secret = sha256("salt" + uid);
var apiKey = sha256(pubKey + hashPassword);
var recovery_key = sha256("salt" + hashPassword);
var seed = sha256(secret + "salt" + apiKey + recovery_key);

var your_data = {
  uid: uid,
  apiKey: apiKey,
  email: hashEmail,
  password: hashPassword,
  secret: secret,
  seed: seed,
  ts: new Date().getTime(),
  request: request_data
};

var workloadData = {
  your_private_key: "your-private-key",
  your_public_key: "your-public-key",
  your_data: your_data
};

function workloadEncrypt(workloadData){
  var keyHash = tool.sha256(workloadData.your_public_key);
  var keys = btc.keys(keyHash);
  var textBytes = aesjs.utils.utf8.toBytes(JSON.stringify(workloadData.your_data));
  var aesCtr = new aesjs.ModeOfOperation.ctr(keys.raw);
  var encryptedBytes = aesCtr.encrypt(textBytes);
  var encyptedWorkload = aesjs.utils.hex.fromBytes(encryptedBytes);

  var message_key = bitcoin.ECKey.fromWIF(workloadData.your_private_key);
  var signature = bitcoin.Message.sign(message_key, JSON.stringify(encyptedWorkload)).toString('base64');

  return {
    workload: encyptedWorkload,
    signature: signature
  };
}
```

---

##### api/deposit (Create deposit account)
```js
// Refer to Workload encrypt
workloadData.your_data.request = {
  path: '',
  network: 'private',
  privacy: 'private'
};
var prepareData = workloadEncrypt(workloadData);
var requestData = {
  "uid":1,
  "workload":prepareData.workload,
  "signature":prepareData.signature
};

var settings = {
  "url": "http://sinegy.neuroware.io/api/deposit/",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify(requestData),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

// Expected output after decrypt
var response = {
  id: 'wallet-id',
  uid: 'uid',
  path: 'path',
  pathed: 'pathed',
  networkType: 'private',
  accounts: ['address-1', 'address-2']
};
```

##### api/holding (Create holding account)
```js
// Refer to Workload encrypt
workloadData.your_data.request = {
  network: 'private',
  agent: {
    dnkey: "dn-key",
    signature: "signature"
  },
  ms: {
    dnkeys: ["dn-key-1","dn-key-2"]
  },
  application: {
    dnkey: "dn-key",
    signature: "signature"
  },
  trustee: {
    dnkeys: ["dn-key-1","dn-key-2"],
    signatures: ["signature-1","signature-2"]
  },
  wallet: {
    path: ''
  }
};
var prepareData = workloadEncrypt(workloadData);
var requestData = {
  "uid":1,
  "workload":prepareData.workload,
  "signature":prepareData.signature
};

var settings = {
  "url": "http://sinegy.neuroware.io/api/holding/",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify(requestData),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

// Expected output after decrypt
var response = {
  id: 'wallet-id',
  uid: 'uid',
  path: 'path',
  pathed: 'pathed',
  network_type: 'private',
  accounts: [
    {
      currency: 'Bitcoin',
      symbol: 'BTC',
      decimals: 8,
      address: 'address',
      txs: 0,
      balances: {
        "hex": "0x0",
        "int": 0,
        "btc": "0"
      }
    },
    {
      currency: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
      address: 'address',
      txs: 0,
      balances: {
        "hex": "0x0",
        "int": 0,
        "eth": "0"
      }
    },
    {
      currency: 'Ripple',
      symbol: 'XRP',
      decimals: 6,
      address: 'address',
      txs: 0,
      balances: "balances": {
        "hex": "0x0",
        "int": 0,
        "xrp": 0
      }
    }
  ]
};
```

##### api/custody (Create withdrawal account)
```js
// Refer to Workload encrypt
workloadData.your_data.request = {
  network: 'private',
  path: '',
  dnkeys: {
    app: ["dn-key-1","dn-key-2"],
    trustee: ["dn-key-1","dn-key-2"],
  }
};
var prepareData = workloadEncrypt(workloadData);
var requestData = {
  "uid":"2",
  "workload":prepareData.workload,
  "signature":prepareData.signature
};

var settings = {
  "url": "http://sinegy.neuroware.io/api/custody/",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify(requestData),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

// Expected output after decrypt
var response = {
  id: 'wallet-id',
  uid: 'uid',
  path: 'path',
  pathed: 'pathed',
  network_type: 'private',
  accounts: [
    {
      currency: 'Bitcoin',
      symbol: 'BTC',
      decimals: 8,
      address: 'address',
      txs: 0,
      balances: { 
        int: 0, 
        str: '0' 
      }
    },
    {
      currency: 'Ethereum',
      symbol: 'ETH',
      decimals: 18,
      address: 'address',
      txs: 0,
      balances: { 
        int: 0, 
        str: '0' 
      }
    },
    {
      currency: 'Ripple',
      symbol: 'XRP',
      decimals: 6,
      address: 'address',
      txs: 0,
      balances: { 
        int: 0, 
        str: '0' 
      }
    }
  ],
  dnkeys: { 
    app: 'dn-key', 
    trustee: 'dn-key' 
  }
};
```

##### api/sweeping (Sweep deposit account)
```js
// Refer to Workload encrypt
workloadData.your_data.request = {
  network: 'private',
  agent: {
    dnkey: "dn-key"
  },
  ms: {
    dnkeys: ["dn-key-1","dn-key-2"]
  },
  wallet: {
    paths: ["", ""],
    users: [1 , 2],
  }
};
var prepareData = workloadEncrypt(workloadData);
var requestData = {
  "uid":1,
  "workload":prepareData.workload,
  "signature":prepareData.signature
};

var settings = {
  "url": "http://sinegy.neuroware.io/api/sweeping/",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify(requestData),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

// Expected output after decrypt
var response = [
  {
    accounts: {
      btc: {
        privateKey: 'private-key',
        publicKey: 'public-key',
        address: 'address',
        balances: {
          hex: '0x0',
          int: 0,
          btc: '0'
        },
        holding: 'app-btc-address'
       },
      eth: {
        privateKey: 'private-key',
        publicKey: 'public-key',
        address: 'address',
        balances: {
          hex: '0x0',
          int: 0,
          eth: '0'
        },
        holding: 'app-eth-address'
      },
      xrp: {
        privateKey: 'private-key',
        publicKey: 'public-key',
        address: 'address',
        balances: {
          hex: '0x0',
          int: 0,
          xrp: '0'
        },
        holding: 'app-xrp-address'
      }
    },
    recoveryKey: 'recovery-key',
    secret: 'secret',
    seed: 'seed',
    uid: 'uid',
    path: 'path'
  },
  { .. another address },
  { .. another address }
}
```

##### api/rebalance (Rebalance account)
```js
// Refer to Workload encrypt
workloadData.your_data.request = {
  network: 'private',
  holding: {
    path: ''
  },
  withdrawals: {
    path: ''
  },
  check_balances_only: true
};
var prepareData = workloadEncrypt(workloadData);
var requestData = {
  "uid":1,
  "workload":prepareData.workload,
  "signature":prepareData.signature
};

var settings = {
  "url": "http://sinegy.neuroware.io/api/rebalance/",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify(requestData),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

// Expected output after decrypt
var response = {
  accounts: {
    holding: {
      bitcoin: {
        address: 'address',
        balance: 9100000
      },
      ethereum: {
        address: 'address',
        balance: 2845037476630900000
      },
      ripple: {
        address: 'address',
        balance: 374017691
      }
    },
    withdrawals: {
      bitcoin: {
        address: 'address',
        balance: 3897400
      },
      ethereum: {
        address: 'address',
        balance: 4800916268969100000
      },
      ripple: {
        address: 'address',
        balance: 160293286
      }
    }
  },
  rebalances: [
    {
      symbol: 'eth',
      from: 'from-address',
      to: 'to-address',
      destination: 'holding',
      value: 5352167621910900000
    }
  ]
};
```

##### api/withdraw (Withdraw funds)
```js
```js
// Refer to Workload encrypt
workloadData.your_data.request = {
  network: 'private',
  chain: 'bitcoin',
  amount: '0.00000001'
  dnkeys: {
    app: ["dn-key-1","dn-key-2"],
    trustee: ["dn-key-1","dn-key-2"],
  },
  aid: 2,
  path: ''
};
var prepareData = workloadEncrypt(workloadData);
var requestData = {
  "uid":"2",
  "workload":prepareData.workload,
  "signature":prepareData.signature
};

var settings = {
  "url": "http://sinegy.neuroware.io/api/withdraw/",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json"
  },
  "data": JSON.stringify(),
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

// Expected output after decrypt
var response = {
  address: 'address',
  public_key: 'public-key',
  private_key: 'private-key',
};
```

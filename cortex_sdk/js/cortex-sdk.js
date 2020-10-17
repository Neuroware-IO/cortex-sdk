/*

CORTEX SDK

*/

var cortex_sdk_config = {
    apis: {
        wallet: 'http://157.230.244.195/api/',
        wallets: 'https://sinegy.neuroware.io/api/'
    },
    currencies: [
        {
            id: 'bitcoin',
            name: 'Bitcoin',
            symbol: 'BTC',
            decimals: 8,
            fees: {
                private: {
                    standard: 3500,
                    multisig: 7000 // for example ... ???
                }
            } 
        },
        {
            id: 'ethereum',
            name: 'Ethereum',
            symbol: 'ETH',
            decimals: 18,
            fees: {
                private: {
                    standard: 380000000000000,
                    multisig: 380000000000000 // for example ... ???
                }
            },
            nodes: {
                private: 'https://eth.neuroware.io',
                public: 'http://ethereum.neuroware.io'
            },
            contracts: {
                blockauth: '[{"constant":true,"inputs":[{"name":"userIdentification","type":"string"}],"name":"getUserByIdentification","outputs":[{"name":"userAddress","type":"address"},{"name":"username","type":"string"},{"name":"fullName","type":"string"},{"name":"webLink","type":"string"},{"name":"isBlocked","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"isAddressRegistered","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"addressesRegistered","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"userAddress","type":"address"},{"name":"newLink","type":"string"}],"name":"editLink","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"userIdentification","type":"string"}],"name":"isIdentificationRegistered","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"username","type":"string"}],"name":"isUsernameRegistered","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"username","type":"string"}],"name":"getAddressByUsername","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUserByAddress","outputs":[{"name":"username","type":"string"},{"name":"userIdentification","type":"string"},{"name":"fullName","type":"string"},{"name":"webLink","type":"string"},{"name":"isBlocked","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"userAddress","type":"address"}],"name":"blockUserByAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"id","type":"bytes32"}],"name":"getAddressByIdentificationBytes","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getNameByAddress","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"userAddress","type":"address"}],"name":"unblockUserByAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"username","type":"bytes32"}],"name":"getAddressByUsernameBytes","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getIdentificationByAddress","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"userAddress","type":"address"},{"name":"newName","type":"string"}],"name":"editName","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"proxyContractAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"proxyAddress","type":"address"}],"name":"updateProxy","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"username","type":"string"}],"name":"getUserByUsername","outputs":[{"name":"userAddress","type":"address"},{"name":"userIdentification","type":"string"},{"name":"fullName","type":"string"},{"name":"webLink","type":"string"},{"name":"isBlocked","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getNameBytesByAddress","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getIdentificationBytesByAddress","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"isUserBlocked","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userIdentification","type":"string"}],"name":"getAddressByIdentification","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"index","type":"string"},{"name":"key","type":"string"}],"name":"UID","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getLinkBytesByAddress","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getLinkByAddress","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"wasAddressRegistered","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"userAddress","type":"address"},{"name":"username","type":"string"},{"name":"userIdentification","type":"string"},{"name":"fullName","type":"string"},{"name":"webLink","type":"string"}],"name":"registerAddress","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"userAddress","type":"address"},{"name":"newUsername","type":"string"}],"name":"editUsername","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"activeAccounts","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"userAddress","type":"address"}],"name":"getUsernameByAddress","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"proxyAddress","type":"address"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"}]',
                multisig: '[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"owners","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"}],"name":"removeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"revokeConfirmation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"address"}],"name":"confirmations","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"pending","type":"bool"},{"name":"executed","type":"bool"}],"name":"getTransactionCount","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"}],"name":"addOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"isConfirmed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"getConfirmationCount","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"transactions","outputs":[{"name":"destination","type":"address"},{"name":"value","type":"uint256"},{"name":"data","type":"bytes"},{"name":"executed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getOwners","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"from","type":"uint256"},{"name":"to","type":"uint256"},{"name":"pending","type":"bool"},{"name":"executed","type":"bool"}],"name":"getTransactionIds","outputs":[{"name":"_transactionIds","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"getConfirmations","outputs":[{"name":"_confirmations","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"transactionCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_required","type":"uint256"}],"name":"changeRequirement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"confirmTransaction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"destination","type":"address"},{"name":"value","type":"uint256"},{"name":"data","type":"bytes"}],"name":"submitTransaction","outputs":[{"name":"transactionId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_OWNER_COUNT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"required","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"},{"name":"newOwner","type":"address"}],"name":"replaceOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"executeTransaction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[{"name":"_owners","type":"address[]"},{"name":"_required","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Confirmation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Revocation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Submission","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Execution","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"ExecutionFailure","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"OwnerAddition","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"OwnerRemoval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"required","type":"uint256"}],"name":"RequirementChange","type":"event"}]'
            }
        },
        {
            id: 'ripple',
            name: 'Ripple',
            symbol: 'XRP',
            decimals: 6,
            fees: {
                private: {
                    standard: 12,
                    multisig: 30 // for example ... ???
                }
            }, 
            nodes: {
                private: 'wss://xrp.credence.app',
                public: 'wss://s1.ripple.com'
            }
        }
    ]
}

// The "cortex_db" object will be replaced with the relevant database / API end-ponts upon integration ...

var cortex_db = 
{
    client: {
        users: [
            {
                email: false,
                passwords: false,
                secret: false,
                keys: false
            },
            {
                /*
                addresses: {
                    private: {
                        btc: 'mkSW7J6zc7dd8UhJZ1UPZUcrTN35Dn9tu2',
                        eth: '0xcaa97f52b46cab0f8fda17543bea4a6d71a6d72b',
                        xrp: 'rKeiNNFjaMvA9eXmDFLKfor3rdc7bPAFJp'
                    },
                    public: {
                        btc: '',
                        eth: '',
                        xrp: ''
                    }
                },
                */
                addresses: {
                    private: {
                        btc: 'n1g7xMJnMEw4dSjCJc59p5S8H2Z4RUN8sm',
                        eth: '0xe8f90d5ca18466c958c68f49a0ead720efdbc516',
                        xrp: 'r32e3aXxM5m2ZGCsyu2f3T3BzQdqDtpQ2M'
                    },
                    public: {
                        btc: '',
                        eth: '',
                        xrp: ''
                    }
                },
                email: '47dcd540c6e524c6feb91c0b784960ee6aaf58fd13ea8b9cb16c9255b4a60ac7', // mark@smalley.my
                passwords: ['9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08'], // test
                secret: 'b1763a35281683a433ca14a3102cddd709e2ba236275e1ee26d72fa0276b1d04', // sha256(salt + user_id)
                keys: ['2502159c562bbe06c182ec0c41d60c0119714afa9819fb6a540195449cbb6ee1'] // sha256(salt + hashedpw)
            },
            {
                addresses: {
                    /*
                    private: {
                        btc: 'mkSW7J6zc7dd8UhJZ1UPZUcrTN35Dn9tu2',
                        eth: '0xcaa97f52b46cab0f8fda17543bea4a6d71a6d72b',
                        xrp: 'rKeiNNFjaMvA9eXmDFLKfor3rdc7bPAFJp'
                    },
                    */
                    private: {
                        btc: 'n1g7xMJnMEw4dSjCJc59p5S8H2Z4RUN8sm',
                        eth: '0xe8f90d5ca18466c958c68f49a0ead720efdbc516',
                        xrp: 'r32e3aXxM5m2ZGCsyu2f3T3BzQdqDtpQ2M'
                    },
                    public: {
                        btc: '',
                        eth: '',
                        xrp: ''
                    }
                },
                email: '14fe83449bae82481156eddb01368bdf40e00aee107cf82ba43509be56c91763', // azri
                passwords: ['03ac674216f3e15c761ee1a5e255f067953623c8b388b4459e13f978d7c846f4'], // 1234
                secret: '560feffc9961aedfa761b371b7c5d49d0345c66e4e38a11a0146d9887f4bf8aa', // sha256(salt + user_id)
                keys: ['0077471bfd2b888f5fdf7205ca12f194c72b28f5cb035d334f439b7f4990bfc9'] // sha256(salt + hashedpw)
            }
        ]
    },
    wallet: {
        users: [
            {
                keys: false
            },
            {
                keys: ['03d6a159aea446ba6bbff3463e38593b4bfe75ed115e3ab2cb2dda1d76617e9ff3']
            },
            {
                keys: ['02d11991146b541e737bada049b3265e1505e6ace5b1df8c4f31db6260ef7eb0f1']
            }
        ]
    }
}

var cortex_sdk = 
{
    ux: {
        users: {
            add: function(this_user = false)
            {
                var users = false;
                if(this_user && typeof this_user.uid != 'undefined')
                {
                    var got_user = cortex_sdk.ux.users.get(this_user.uid);
                    users = cortex_sdk.ux.users.get();
                    if(!got_user && users)
                    {
                        users.push(this_user);
                    }
                    else if(!got_user)
                    {
                        users = [];
                        users.push(this_user);
                    }
                    localStorage.setItem(wp_user_salt + '_hot_users', JSON.stringify(users));
                }
            },
            get: function(uid = false)
            {
                var users = localStorage.getItem(wp_user_salt + '_hot_users');
                if(users) users = JSON.parse(users);
                if(uid)
                {
                    var user_to_return = false;
                    jQuery.each(users, function(u)
                    {
                        if(users[u].uid == uid)
                        {
                            user_to_return = users[u];
                        }
                    });
                    users = user_to_return;
                }
                return users;
            },
            remove: function(uid = false)
            {
                var users = localStorage.getItem(wp_user_salt + '_hot_users');
                if(users) users = JSON.parse(users);
                if(uid)
                {
                    var users_to_save = [];
                    jQuery.each(users, function(u)
                    {
                        if(users[u].uid != uid)
                        {
                            users_to_save.push(users[u]);
                        }
                    });
                    localStorage.setItem(wp_user_salt + '_hot_users', JSON.stringify(users_to_save));
                }
            }
        }
    },
    utils: {
        ethereum: {
            check_ms_address: function(options = {address: false, addresses: [], network: false}, callback = false)
            {
                var eth_addresses_response = {
                    success: false,
                    response: 'Invalid eth options supplied'
                };
                if(typeof callback != 'function')
                {
                    callback = function(data)
                    {
                        console.log('eth_addresses_response', data);
                    }
                }
                if(
                    options 
                    && typeof options.network != 'undefined'
                    && typeof options.address != 'undefined' 
                    && typeof options.addresses == 'object' 
                    && options.addresses.length > 0
                ){
                    var contract = cortex_sdk.utils.ethereum.contract('multisig', options.address, options.network);
                    contract.getOwners(function(e, owners)
                    {
                        if(owners && jQuery.isArray(owners) && owners.length > 0)
                        {
                            if(owners.length == (options.addresses.length + 1))
                            {
                                var verified_owners = [];
                                jQuery.each(options.addresses, function(oa)
                                {
                                    var this_address = options.addresses[oa].address;
                                    jQuery.each(owners, function(o)
                                    {
                                        if(owners[o] == this_address)
                                        {
                                            verified_owners.push(owners[o]);
                                        }
                                    });
                                });
                                if(verified_owners.length == options.addresses.length)
                                {
                                    eth_addresses_response.success = true;
                                    eth_addresses_response.response = verified_owners;
                                    callback(eth_addresses_response);
                                }
                                else
                                {
                                    eth_addresses_response.response = 'Not all owners have been verified';
                                    callback(eth_addresses_response);
                                }
                            }
                            else
                            {
                                eth_addresses_response.response = 'Invalid numbers of owners to verify';
                                callback(eth_addresses_response);
                            }
                        }
                        else
                        {
                            eth_addresses_response.response = 'Unknown number of owners for verification';
                            callback(eth_addresses_response);
                        }
                    });
                }
                else
                {
                    callback(eth_addresses_response);
                }
            },
            get_ms_addresses: function(options = {address: false, network: false}, callback = false)
            {
                var eth_addresses_response = {
                    success: false,
                    response: 'Invalid eth options supplied'
                };
                if(typeof callback != 'function')
                {
                    callback = function(data)
                    {
                        console.log('eth_addresses_response', data);
                    }
                }
                if(
                    options 
                    && typeof options.network != 'undefined'
                    && typeof options.address != 'undefined' 
                ){
                    var addresses = [];
                    var contract = cortex_sdk.utils.ethereum.contract('multisig', options.address, options.network);
                    if(contract && typeof contract.getOwners == 'function')
                    {
                        contract.getOwners(function(e, owners)
                        {
                            if(owners && jQuery.isArray(owners) && owners.length > 0)
                            {
                                jQuery.each(owners, function(o)
                                {
                                    addresses.push(owners[o]);
                                });

                                eth_addresses_response.success = true;
                                eth_addresses_response.response = addresses;
                                callback(eth_addresses_response);
                            }
                            else
                            {
                                eth_addresses_response.response = 'Unable to fetch owners';
                                callback(eth_addresses_response);
                            }
                        });
                    }
                    else
                    {
                        eth_addresses_response.response = 'Invalid contract address';
                        callback(eth_addresses_response);
                    }
                }
                else
                {
                    callback(eth_addresses_response);
                }
            },
            contract: function(contract_name = false, contract_address = false, network_type = false)
            {
                var contract = false;
                if(contract_name && contract_address && network_type)
                {
                    var server_address = cortex_sdk_config.currencies[1].nodes[network_type];
                    var abi = JSON.parse(cortex_sdk_config.currencies[1].contracts[contract_name]);
                    var web3 = new Web3(new Web3.providers.HttpProvider(server_address), "utils");
                    contract = web3.eth.contract(abi).at(contract_address);
                    return contract;
                }
                else
                {
                    return contract;
                }
            }
        },
        ripple: {
            check_ms_address: function(options = {address: false, addresses: [], network: false}, callback = false)
            {
                var xrp_addresses_response = {
                    success: false,
                    response: 'Invalid xrp options supplied'
                };
                if(typeof callback != 'function')
                {
                    callback = function(data)
                    {
                        console.log('eth_addresses_response', data);
                    }
                }
                if(
                    options 
                    && typeof options.network != 'undefined'
                    && typeof options.address != 'undefined' 
                    && typeof options.addresses == 'object' 
                    && options.addresses.length > 0
                ){
                    var network_type = options.network;
                    var api = new ripple.RippleAPI(
                    {
                        server: cortex_sdk_config.currencies[2].nodes[network_type]
                    });
                    api.on('error', (errorCode, errorMessage) => 
                    {
                        cortex.ux.loader(false);
                        cortex.ux.modals('Error Connecting', errorCode + ': ' + errorMessage);
                    });
                    api.on('connected', () => 
                    {
                        api.getAccountObjects(options.address).then(objects => 
                        {
                            if(
                                objects
                                && typeof objects.account_objects != 'undefined'
                                && jQuery.isArray(objects.account_objects)
                                && objects.account_objects.length > 0
                            ){
                                jQuery.each(objects.account_objects, function(i)
                                {
                                    if(
                                        typeof objects.account_objects[i].LedgerEntryType != 'undefined'
                                        && typeof objects.account_objects[i].SignerEntries != 'undefined'
                                        && typeof objects.account_objects[i].SignerQuorum != 'undefined'
                                        && objects.account_objects[i].LedgerEntryType == 'SignerList'
                                    ){
                                        signers = objects.account_objects[i].SignerEntries;
                                        needed = objects.account_objects[i].SignerQuorum;
                                        if(needed == 3 && signers.length == 5)
                                        {
                                            if(signers && jQuery.isArray(signers) && signers.length > 0)
                                            {
                                                if(signers.length == (options.addresses.length + 1))
                                                {
                                                    var verified_owners = [];
                                                    jQuery.each(options.addresses, function(oa)
                                                    {
                                                        var this_address = options.addresses[oa].address;
                                                        jQuery.each(signers, function(s)
                                                        {
                                                            if(signers[s].SignerEntry.Account == this_address)
                                                            {
                                                                verified_owners.push(this_address);
                                                            }
                                                        });
                                                    });
                                                    if(verified_owners.length == options.addresses.length)
                                                    {
                                                        xrp_addresses_response.success = true;
                                                        xrp_addresses_response.response = verified_owners;
                                                        callback(xrp_addresses_response);
                                                    }
                                                    else
                                                    {
                                                        xrp_addresses_response.response = 'Not all Ripple owners have been verified';
                                                        callback(xrp_addresses_response);
                                                    }
                                                }
                                                else
                                                {
                                                    xrp_addresses_response.response = 'Invalid number of Ripple owners to verify';
                                                    callback(xrp_addresses_response);
                                                }
                                            }
                                            else
                                            {
                                                xrp_addresses_response.response = 'Unknown number of Ripple owners for verification';
                                                callback(xrp_addresses_response);
                                            }
                                        }
                                        else
                                        {
                                            xrp_addresses_response.response = 'Invalid multi-sig Ripple setup';
                                            callback(xrp_addresses_response);
                                        }
                                    }
                                    else
                                    {
                                        xrp_addresses_response.response = 'Invalid multi-sig Ripple address';
                                        callback(xrp_addresses_response);
                                    }
                                });
                            }
                            else
                            {
                                xrp_addresses_response.response = 'Unknown multi-sig Ripple address';
                                callback(xrp_addresses_response);
                            }
                        });
                    });
                    api.on('disconnected', (code) => 
                    {

                    });
                    api.connect();
                }
                else
                {
                    callback(xrp_addresses_response);
                }
            },
            get_ms_addresses: function(options = {address: false, network: false}, callback = false)
            {
                var xrp_addresses_response = {
                    success: false,
                    response: 'Invalid xrp options supplied for getting addresses'
                };
                if(typeof callback != 'function')
                {
                    callback = function(data)
                    {
                        console.log('xrp_addresses_response', data);
                    }
                }
                if(
                    options 
                    && typeof options.network != 'undefined'
                    && typeof options.address != 'undefined' 
                ){
                    var network_type = options.network;
                    var api = new ripple.RippleAPI(
                    {
                        server: cortex_sdk_config.currencies[2].nodes[network_type]
                    });
                    api.on('error', (errorCode, errorMessage) => 
                    {
                        cortex.ux.loader(false);
                        cortex.ux.modals('Error Connecting', errorCode + ': ' + errorMessage);
                    });
                    api.on('connected', () => 
                    {
                        api.getAccountObjects(options.address).then(objects => 
                        {
                            var addresses = [];
                            if(
                                objects
                                && typeof objects.account_objects != 'undefined'
                                && jQuery.isArray(objects.account_objects)
                                && objects.account_objects.length > 0
                            ){
                                jQuery.each(objects.account_objects, function(i)
                                {
                                    if(
                                        typeof objects.account_objects[i].LedgerEntryType != 'undefined'
                                        && typeof objects.account_objects[i].SignerEntries != 'undefined'
                                        && typeof objects.account_objects[i].SignerQuorum != 'undefined'
                                        && objects.account_objects[i].LedgerEntryType == 'SignerList'
                                    ){
                                        signers = objects.account_objects[i].SignerEntries;
                                        needed = objects.account_objects[i].SignerQuorum;
                                        
                                        jQuery.each(signers, function(s)
                                        {
                                            addresses.push(signers[s].SignerEntry.Account);
                                        });
                                        
                                        xrp_addresses_response.success = true;
                                        xrp_addresses_response.response = addresses;
                                        callback(xrp_addresses_response);
                                    }
                                    else
                                    {
                                        xrp_addresses_response.response = 'Invalid multi-sig Ripple address';
                                        callback(xrp_addresses_response);
                                    }
                                });
                            }
                            else
                            {
                                xrp_addresses_response.response = 'Unknown multi-sig Ripple address';
                                callback(xrp_addresses_response);
                            }
                        });
                    });
                    api.on('disconnected', (code) => 
                    {

                    });
                    api.connect();
                }
                else
                {
                    callback(xrp_addresses_response);
                }
            }
        },
        check_ms_addresses: function(
            options = {eth: {address: false, addresses: []}, xrp: {address: false, addresses: []}, network: false}, 
            callback = false
        ){
            var ms_addresses_response = {
                success: false,
                response: 'Invalid options supplied'
            };
            if(typeof callback != 'function')
            {
                callback = function(data)
                {
                    console.log('ms_addresses_response', data);
                }
            }
            if(
                options 
                && typeof options.network != 'undefined' 
                && typeof options.eth == 'object' 
                && typeof options.xrp == 'object' 
                && typeof options.eth.address != 'undefined' 
                && typeof options.xrp.address != 'undefined' 
                && typeof options.eth.addresses == 'object' 
                && typeof options.xrp.addresses == 'object' 
                && typeof callback == 'function'
                && options.eth.addresses.length > 0
                && options.xrp.addresses.length > 0
                && options.eth.addresses.length == options.xrp.addresses.length
            )
            {
                cortex_sdk.utils.ethereum.check_ms_address(
                    {address: options.eth.address, addresses: options.eth.addresses, network: options.network}, 
                    function(eth)
                    {
                        if(eth && typeof eth.success != 'undefined' && eth.success === true)
                        {
                            cortex_sdk.utils.ripple.check_ms_address(
                                {address: options.xrp.address, addresses: options.xrp.addresses, network: options.network}, 
                                function(xrp)
                                {
                                    if(xrp && typeof xrp.success != 'undefined' && xrp.success === true)
                                    {
                                        ms_addresses_response.success = true;
                                        ms_addresses_response.response = {
                                            eth: eth,
                                            xrp: xrp
                                        };
                                        callback(ms_addresses_response);
                                    }
                                    else
                                    {
                                        ms_addresses_response.response = 'Unable to verify Ripple addresses';
                                        callback(ms_addresses_response);
                                    }
                                }
                            );
                        }
                        else
                        {
                            ms_addresses_response.response = 'Unable to verify Ethereum addresses';
                            callback(ms_addresses_response);
                        }
                    }
                );
            }
            else
            {
                callback(ms_addresses_response);
            }
        },
        verify_dnkey: function(
            workload, 
            callback = false
        ){
            var dnkey_response = {
                success: false,
                response: 'Invalid DN-Key options supplied'
            };
            if(typeof callback != 'function')
            {
                callback = function(data)
                {
                    console.log('dnkey_response', data);
                }
            }
            if(
                workload
                && typeof workload.network != 'undefined'
            )
            {
                var network_type = workload.network;
                var agent_dnkey = workload.agent.dnkey;
                var app_dnkey = workload.ms.dnkeys[0];
                var trustee_dnkey = workload.ms.dnkeys[1];
                
                bce_web.api(
                    'dnkey?host=' + app_dnkey + '&cache=off',
                    function(app_dn_keys)
                    {
                        if(
                            app_dn_keys 
                            && typeof app_dn_keys["btc-" + workload.network] != 'undefined'
                            && typeof app_dn_keys["eth-" + workload.network] != 'undefined'
                            && typeof app_dn_keys["xrp-" + workload.network] != 'undefined'
                            && typeof app_dn_keys["blockauth-" + workload.network] != 'undefined'
                        )
                        {
                            var app_btc_address = app_dn_keys["btc-" + workload.network];
                            var app_eth_address = app_dn_keys["eth-" + workload.network];
                            var app_xrp_address = app_dn_keys["xrp-" + workload.network];
                            var app_ba_address = app_dn_keys["blockauth-" + workload.network];
                            bce_web.api(
                                'dnkey?host=' + trustee_dnkey + '&cache=off',
                                function(trust_dn_keys)
                                {
                                    if(
                                        trust_dn_keys 
                                        && typeof trust_dn_keys["btc-" + workload.network] != 'undefined'
                                        && typeof trust_dn_keys["eth-" + workload.network] != 'undefined'
                                        && typeof trust_dn_keys["xrp-" + workload.network] != 'undefined'
                                        && typeof trust_dn_keys["blockauth-" + workload.network] != 'undefined'
                                    )
                                    {
                                        var trust_btc_address = trust_dn_keys["btc-" + workload.network];
                                        var trust_eth_address = trust_dn_keys["eth-" + workload.network];
                                        var trust_xrp_address = trust_dn_keys["xrp-" + workload.network];
                                        var trust_ba_address = trust_dn_keys["blockauth-" + workload.network];

                                        if(
                                            app_btc_address && trust_btc_address 
                                            && app_eth_address && trust_eth_address 
                                            && app_xrp_address && trust_xrp_address 
                                            && app_ba_address && trust_ba_address
                                            && app_btc_address == trust_btc_address
                                            && app_eth_address == trust_eth_address
                                            && app_xrp_address == trust_xrp_address
                                            && app_ba_address == trust_ba_address
                                        ){
                                            
                                            // Still need to check agent DN-Key for application entity type with BA ...
                                            
                                            bce_web.api(
                                                'dnkey?host=' + agent_dnkey + '&cache=off',
                                                function(dn_keys)
                                                {
                                                    if(
                                                        dn_keys 
                                                        && typeof dn_keys["btc-" + workload.network] != 'undefined'
                                                        && typeof dn_keys["eth-" + workload.network] != 'undefined'
                                                        && typeof dn_keys["xrp-" + workload.network] != 'undefined'
                                                        && typeof dn_keys["btc-xpub-" + workload.network] != 'undefined'
                                                    )
                                                    {
                                                        var this_chain = 'public';
                                                        if(network_type == 'private') this_chain = 'bce';

                                                        bce_web.api(
                                                            'blockauth?method=getUserByUsername&params=' + trust_ba_address + '|' + agent_dnkey + '&key=your-api-key&chain=' + this_chain + '&cache=off',
                                                            function(ba_results)
                                                            {
                                                                if(
                                                                    ba_results 
                                                                    && typeof ba_results.blocked != 'undefined'
                                                                    && typeof ba_results.url != 'undefined'
                                                                    && ba_results.blocked === false
                                                                    && ba_results.url === 'application'
                                                                ){
                                                                    dnkey_response.success = true;
                                                                    dnkey_response.response = dn_keys;
                                                                    callback(dnkey_response, app_btc_address, app_eth_address, app_xrp_address);
                                                                }
                                                                else
                                                                {
                                                                    dnkey_response.response = 'Unable to verify sweeping DN-Keys';
                                                                    callback(dnkey_response);
                                                                }
                                                            }
                                                        );
                                                    }
                                                    else
                                                    {
                                                        dnkey_response.response = 'Invalid agent DN-Key verification workload';
                                                        callback(dnkey_response);
                                                    }
                                                }
                                            );
                                        }
                                        else
                                        {
                                            dnkey_response.response = 'DN-Key mismatch';
                                            callback(dnkey_response);
                                        }
                                    }
                                    else
                                    {
                                        dnkey_response.response = 'Unable to verify trustee DN-Keys';
                                        callback(dnkey_response);
                                    }
                                }
                            );
                        }
                        else
                        {
                            dnkey_response.response = 'Unable to verify application DN-Keys';
                            callback(dnkey_response);
                        }
                    }
                );                      
            }
            else
            {
                callback(dnkey_response);
            }
        },
        verify_dnkeys: function(
            workload, 
            callback = false
        ){
            var dnkey_response = {
                success: false,
                response: 'Invalid options supplied'
            };
            if(typeof callback != 'function')
            {
                callback = function(data)
                {
                    console.log('dnkey_response', data);
                }
            }
            if(
                workload
                && typeof workload.network != 'undefined'
            )
            {
                var network_type = workload.network;
                // First need to verify if all DN-KEYs are unique ...
                // Then need to verify that each DN-KEY is the correct entity type ...

                // Then need to verify the signatures are correct ...
                var date = new Date().toString().split(' ');
                var message_to_sign = 'New Shared Hot Wallet on ';
                message_to_sign += date[0] + ' ' + date[1] + ' ' + date[2] + ' ' + date[3];

                var dnkeys = [];
                var signatures = [];
                dnkeys.push(workload.agent.dnkey);
                dnkeys.push(workload.application.dnkey);
                dnkeys.push(workload.trustee.dnkeys[0]);
                dnkeys.push(workload.trustee.dnkeys[1]);
                signatures.push(workload.agent.signature);
                signatures.push(workload.application.signature);
                signatures.push(workload.trustee.signatures[0]);
                signatures.push(workload.trustee.signatures[1]);

                var users = [];
                var completed_dnkey_checks = 0;

                bce_web.api(
                    'dnkey?host=' + workload.ms.dnkeys[0] + '&cache=off',
                    function(app_dn_keys)
                    {
                        if(
                            app_dn_keys 
                            && typeof app_dn_keys["eth-" + workload.network] != 'undefined'
                            && typeof app_dn_keys["xrp-" + workload.network] != 'undefined'
                            && typeof app_dn_keys["blockauth-" + workload.network] != 'undefined'
                        )
                        {
                            var app_eth_address = app_dn_keys["eth-" + workload.network];
                            var app_xrp_address = app_dn_keys["xrp-" + workload.network];
                            var app_ba_address = app_dn_keys["blockauth-" + workload.network];
                            bce_web.api(
                                'dnkey?host=' + workload.ms.dnkeys[1] + '&cache=off',
                                function(trust_dn_keys)
                                {
                                    if(
                                        trust_dn_keys 
                                        && typeof trust_dn_keys["eth-" + workload.network] != 'undefined'
                                        && typeof trust_dn_keys["xrp-" + workload.network] != 'undefined'
                                        && typeof trust_dn_keys["blockauth-" + workload.network] != 'undefined'
                                    )
                                    {
                                        var trust_eth_address = trust_dn_keys["eth-" + workload.network];
                                        var trust_xrp_address = trust_dn_keys["xrp-" + workload.network];
                                        var trust_ba_address = trust_dn_keys["blockauth-" + workload.network];

                                        if(
                                            app_eth_address && app_xrp_address 
                                            && app_eth_address == trust_eth_address
                                            && app_xrp_address == trust_xrp_address
                                            && app_ba_address && app_ba_address == trust_ba_address
                                        ){
                                            jQuery.each(dnkeys, function(dnk)
                                            {
                                                var this_index = dnk;
                                                var this_dnkey = dnkeys[dnk];
                                                var type = 'application';
                                                var this_signature = signatures[dnk];
                                                var this_address = false;
                                                if(dnk > 1) type = 'trustee';

                                                // You need to generate your own DN-Key API end-points ...
                                                bce_web.api(
                                                    'dnkey?host=' + dnkeys[this_index] + '&cache=off',
                                                    function(dn_keys)
                                                    {
                                                        if(
                                                            dn_keys 
                                                            && typeof dn_keys["btc-" + workload.network] != 'undefined'
                                                            && typeof dn_keys["eth-" + workload.network] != 'undefined'
                                                            && typeof dn_keys["xrp-" + workload.network] != 'undefined'
                                                            && typeof dn_keys["btc-xpub-" + workload.network] != 'undefined'
                                                        )
                                                        {
                                                            var verified = false;

                                                            try
                                                            {
                                                                this_address = dn_keys["btc-" + workload.network];       
                                                                var network = 'bitcoin';
                                                                if(workload.network == 'private') network = 'bitcointestnet';
                                                                var blockchain = bitcoin.networks[network];
                                                                verified = bitcoin.Message.verify(
                                                                    dn_keys["btc-" + workload.network], 
                                                                    this_signature, 
                                                                    message_to_sign,
                                                                    blockchain
                                                                );

                                                                var this_chain = 'public';
                                                                if(network_type == 'private') this_chain = 'bce';

                                                                bce_web.api(
                                                                    'blockauth?method=getUserByUsername&params=' + trust_ba_address + '|' + this_dnkey + '&key=your-api-key&chain=' + this_chain + '&cache=off',
                                                                    function(ba_results)
                                                                    {
                                                                        if(
                                                                            ba_results 
                                                                            && typeof ba_results.blocked != 'undefined'
                                                                            && typeof ba_results.url != 'undefined'
                                                                            && ba_results.blocked === false
                                                                            && ba_results.url === type
                                                                            && verified === true
                                                                        ){
                                                                            users.push({
                                                                                dnkey: dnkeys[dnk],
                                                                                btc: {
                                                                                    address: dn_keys["btc-" + workload.network],
                                                                                    xpub: dn_keys["btc-xpub-" + workload.network]
                                                                                },
                                                                                eth: {
                                                                                    address: dn_keys["eth-" + workload.network]
                                                                                },
                                                                                xrp: {
                                                                                    address: dn_keys["xrp-" + workload.network]
                                                                                },
                                                                                signature: signatures[dnk],
                                                                                type: type
                                                                            });
                                                                        }
                                                                        completed_dnkey_checks++;
                                                                        if(completed_dnkey_checks == dnkeys.length)
                                                                        {
                                                                            if(users.length == dnkeys.length)
                                                                            {
                                                                                // Need to check ETH and XRP addresses linked to MS accounts ...
                                                                                var eth_addresses = [];
                                                                                var xrp_addresses = [];
                                                                                
                                                                                jQuery.each(users, function(u)
                                                                                {
                                                                                    eth_addresses.push(users[u].eth);
                                                                                    xrp_addresses.push(users[u].xrp);
                                                                                });

                                                                                cortex_sdk.utils.check_ms_addresses(
                                                                                    options = {
                                                                                        eth: {
                                                                                            address: trust_eth_address, 
                                                                                            addresses: eth_addresses
                                                                                        }, 
                                                                                        xrp: {
                                                                                            address: trust_xrp_address, 
                                                                                            addresses: xrp_addresses
                                                                                        },
                                                                                        network: network_type
                                                                                    }, 
                                                                                    function(ms_addresses_response)
                                                                                    {
                                                                                        if(
                                                                                            ms_addresses_response 
                                                                                            && typeof ms_addresses_response.success != undefined
                                                                                            && ms_addresses_response.success === true
                                                                                        ){
                                                                                            dnkey_response.success = true;
                                                                                            dnkey_response.response = users;
                                                                                            callback(
                                                                                                dnkey_response, 
                                                                                                app_eth_address, 
                                                                                                app_xrp_address
                                                                                            );
                                                                                        }
                                                                                        else
                                                                                        {
                                                                                            callback(ms_addresses_response);
                                                                                        }
                                                                                    }
                                                                                );
                                                                            }
                                                                            else
                                                                            {
                                                                                dnkey_response.response = 'Unable to verify all DN-Keys';
                                                                                callback(dnkey_response);
                                                                            }
                                                                        }
                                                                    }
                                                                );
                                                            }
                                                            catch(err)
                                                            {
                                                                dnkey_response.response = 'Unable to verify DN-Keys';
                                                                callback(dnkey_response);
                                                            }
                                                        }
                                                        else
                                                        {
                                                            dnkey_response.response = 'Invalid DN-Key verification workload';
                                                            callback(dnkey_response);
                                                        }
                                                    }
                                                );
                                            });
                                        }
                                        else
                                        {
                                            dnkey_response.response = 'DN-Key mismatch';
                                            callback(dnkey_response);
                                        }
                                    }
                                    else
                                    {
                                        dnkey_response.response = 'Unable to verify trustee DN-Keys';
                                        callback(dnkey_response);
                                    }
                                }
                            );
                        }
                        else
                        {
                            ms_addresses_response.response = 'Unable to verify application DN-Keys';
                            callback(dnkey_response);
                        }
                    }
                );                      
            }
            else
            {
                callback(dnkey_response);
            }
        }
    },
    actions:
    {
        application: 
        {
            prepare: function(
                encrypt_options = {uid: false, email: false, password: false, workload: false}, 
                api_options = {url: false},
                callback = false
            ){
                var prepare_response = {
                    success: false,
                    message: 'Unable to prepare and decrypt workload'
                };
                if(typeof callback != 'function')
                {
                    callback = function(data)
                    {
                        return data;
                    }
                }
                var action = 'GENERATING';
                if(api_options.url == 'withdraw') action = 'WITHDRAWING';
                if(api_options.url == 'sweeping') action = 'SWEEPING';
                cortex.ux.loader(true, action);
                cortex_sdk.actions.application.encrypt(
                    {
                        uid: encrypt_options.uid, 
                        email: encrypt_options.email, 
                        password: encrypt_options.password, 
                        workload: encrypt_options.workload
                    },
                    function(encrypted_workload, signature, public_key)
                    {
                        if(encrypted_workload && signature && public_key)
                        {
                            var settings = {
                                "url": cortex_sdk_config.apis.wallet + api_options.url + "/",
                                "method": "POST",
                                "timeout": 0,
                                "headers": {
                                    "Content-Type": "application/json"
                                },
                                "data": JSON.stringify({
                                    uid: encrypt_options.uid, 
                                    workload: encrypted_workload, 
                                    signature: signature
                                })
                            };
                            jQuery.ajax(settings).done(function (response) 
                            {
                                if(
                                    response 
                                    && typeof response.success != 'undefined' 
                                    && response.success === true
                                ){
                                    var encrypted_response = response.rdata;
                                    if(encrypted_response)
                                    {
                                        var seed = bitcoin.crypto.sha256(public_key).toString('hex');
                                        var keys = cortex_sdk.keys(seed);
                                        var encryptedBytes = aesjs.utils.hex.toBytes(encrypted_response);
                                        var aesCtr = new aesjs.ModeOfOperation.ctr(keys.raw);
                                        var decryptedBytes = aesCtr.decrypt(encryptedBytes);
                                        var decrypted_data = aesjs.utils.utf8.fromBytes(decryptedBytes);
                                        if(decrypted_data)
                                        {
                                            prepare_response.success = true;
                                            prepare_response.message = JSON.parse(decrypted_data);
                                        }
                                        else
                                        {
                                            prepare_response.message = 'Unable to decrypted response from prepared API call';
                                        }
                                        callback(prepare_response);
                                    }
                                    else
                                    {
                                        prepare_response.message = 'No encrypted response from prepared API call';
                                        callback(prepare_response);
                                    }
                                }
                                else
                                {
                                    prepare_response.message = 'No response from prepared API call';
                                    callback(prepare_response);
                                }
                            }).error(function (err) 
                            {
                                if(typeof err.responseJSON != 'undefined' && typeof err.responseJSON.message != 'undefined')
                                {
                                    prepare_response.message = err.responseJSON.message;
                                }
                                else
                                {
                                    prepare_response.message = 'Unknown error preparing API request';
                                }
                                callback(prepare_response);
                            });
                        }
                        else
                        {
                            prepare_response.message = 'Unable to encrypt workload using prepare';
                            callback(prepare_response);
                        }
                    }
                );
            },
            encrypt: function(
                options = {uid: false, email: false, password: false, workload: false}, 
                callback = false
            ){
                var credentials = cortex_sdk.credentials.get(options.uid, options.email, options.password);
                var seed = bitcoin.crypto.sha256(options.email + credentials.secret + credentials.uid + options.password).toString('hex');
                var private_keys = cortex_sdk.keys(seed);
                var key_hash = EthJS.Util.sha256(private_keys.public_key).toString('hex');
                var keys = cortex_sdk.keys(key_hash);
                var textBytes = aesjs.utils.utf8.toBytes(JSON.stringify(options.workload));
                var aesCtr = new aesjs.ModeOfOperation.ctr(keys.raw);
                var encryptedBytes = aesCtr.encrypt(textBytes);
                var encrypted_workload = aesjs.utils.hex.fromBytes(encryptedBytes);
                
                var message_key = bitcoin.ECKey.fromWIF(private_keys.private_key);
                var signature = bitcoin.Message.sign(message_key, JSON.stringify(options.workload)).toString('base64');
                    
                if(typeof callback == 'function') callback(encrypted_workload, signature, private_keys.public_key);
                else return false;
            }
        },
        client: 
        {
            bypass: function(options = {uid: 0, email: false, password: false, id: false}, salt = false, callback = false)
            {
                // This will eventually be replaced with an API end-point from client application ...
                if(
                    typeof options.uid != 'undefined'
                    && typeof options.email != 'undefined'
                    && typeof options.password != 'undefined'
                    && typeof cortex_db.client.users[options.uid] != 'undefined'
                )
                {
                    var user = cortex_db.client.users[parseInt(options.uid)];
                    if(user && typeof user.email != 'undefined' && typeof user.password != 'undefined')
                    {
                        if(options.email == user.email && options.password == user.password)
                        {
                            if(typeof callback == 'function' && typeof cortex_db.client.users[options.id] != 'undefined')
                            {
                                // TODO - Due to moving other funds - should we verify the UID via DN-Key and BlockAuth ???
                                var this_user = cortex_db.client.users[parseInt(options.id)];
                                callback({
                                    secret: this_user.secret,
                                    key: this_user.key,
                                    password: this_user.password
                                });
                            }
                            else
                            {
                                return true;
                            }
                        }
                    }
                }
            },
            register: function(options = {email: false, password: false}, uid = 0, salt = false, callback = false)
            {
                // This will eventually be replaced with an API end-point from client application ...
                if(
                    typeof options.email != 'undefined'
                    && typeof options.password != 'undefined'
                )
                {
                    // Use email address to get or add new User ID ...
                    if(!uid || uid < 1) uid = 1;
                    if(!salt) salt = 'application_salt';

                    // The secret needs to be based on something fixed ...
                    var secret = bitcoin.crypto.sha256(salt + uid).toString('hex');
                    var recovery_key = bitcoin.crypto.sha256(salt + options.password).toString('hex');
                    var response = 
                    {
                        uid: uid,
                        secret: secret,
                        key: recovery_key
                    };
                    if(typeof callback == 'function')
                    {
                        callback(response);
                    }
                    else
                    {
                        return response;
                    }
                }
            },
            verify: function(options = {uid: 0, email: false, password: false}, salt = false, callback = false)
            {
                // This will eventually be replaced with an API end-point from client application ...
                if(
                    typeof options.uid != 'undefined'
                    && typeof options.email != 'undefined'
                    && typeof options.password != 'undefined'
                )
                {
                    var user = cortex_db.client.users[options.uid];
                    if(user && typeof user.email != 'undefined' && typeof user.password != 'undefined')
                    {
                        if(options.email == user.email && options.password == user.password)
                        {
                            if(typeof callback == 'function')
                            {
                                callback({
                                    secret: user.secret,
                                    key: user.key
                                });
                            }
                            else
                            {
                                return user.password;
                            }
                        }
                    }
                }
            },
            withdrawal: function(options = {uid: 0, aid: 0, email: false, password: false, amount: false, chain: false, network: 'private', trustee: false}, salt = false, callback = false)
            {
                var user = false;
                var agent = false;
                var response = false;
                // This will eventually be replaced with an API end-point from client application ...
                if(
                    typeof options.uid != 'undefined'
                    && typeof options.aid != 'undefined'
                    && typeof options.email != 'undefined'
                    && typeof options.password != 'undefined'
                    && typeof options.amount != 'undefined'
                    && typeof options.chain != 'undefined'
                    && typeof options.network != 'undefined'
                )
                {
                    if(
                        typeof cortex_db != 'undefined'
                        && typeof cortex_db.client != 'undefined'
                        && typeof cortex_db.client.users != 'undefined'
                        && typeof cortex_db.client.users[options.uid] != 'undefined'
                        && typeof cortex_db.client.users[options.aid] != 'undefined'
                    ){
                        user = cortex_db.client.users[options.uid];
                        agent = cortex_db.client.users[options.aid];
                    }
                    if(
                        user && agent
                        && typeof agent.secret != 'undefined' 
                        && typeof agent.key != 'undefined' 
                        && typeof user.email != 'undefined' 
                        && typeof user.password != 'undefined'
                        && typeof user.addresses != 'undefined'
                        && typeof user.addresses[options.network] != 'undefined'
                        && typeof user.addresses[options.network][options.chain] != 'undefined'
                    ){
                        if(options.email == user.email && options.password == user.password)
                        {
                            response = {
                                secret: agent.secret,
                                key: agent.key,
                                address: user.addresses[options.network][options.chain],
                                password: user.password
                            };
                        }
                    }
                }
                if(typeof callback == 'function')
                {
                    callback(response);
                }
                else
                {
                    return response;
                }
            }
        },
        wallet:
        {
            decrypt: function(
                options = {
                    uid: 0, workload: false, signature: false
                },
                app_salt = false,
                wallet_salt = false,
                callback = false 
            ){
                /*

                THIS FUNCTION IS FOR INTERNAL API USE ONLY
                
                */
                var response = {
                    success: false,
                    message: 'Invalid credentials'
                };
                if(
                    options && callback
                    && typeof callback == 'function'
                    && typeof options.uid != 'undefined'
                    && typeof options.workload != 'undefined'
                    && typeof options.signature != 'undefined'
                ){
                    if(
                        typeof cortex_db.wallet.users[parseInt(options.uid)] != 'undefined'
                        && typeof cortex_db.wallet.users[parseInt(options.uid)].key != 'undefined'
                    ){
                        // First need to decrypt the workload based on provided UID and stored public key ...
                        var public_key = cortex_db.wallet.users[parseInt(options.uid)].key;
                        var key_hash = EthJS.Util.sha256(public_key).toString('hex');
                        var keys = cortex_sdk.keys(key_hash);
                        var encryptedBytes = aesjs.utils.hex.toBytes(options.workload);
                        var aesCtr = new aesjs.ModeOfOperation.ctr(keys.raw);
                        var decryptedBytes = aesCtr.decrypt(encryptedBytes);
                        var decrypted_data = aesjs.utils.utf8.fromBytes(decryptedBytes);
                        
                        if(decrypted_data)
                        {
                            var workload = JSON.parse(decrypted_data);
                            if(
                                typeof workload.uid != 'undefined'
                                && typeof workload.apiKey != 'undefined'
                                && typeof workload.email != 'undefined'
                                && typeof workload.password != 'undefined'
                                && typeof workload.secret != 'undefined'
                                && typeof workload.seed != 'undefined'
                                && typeof workload.ts != 'undefined'
                                && typeof workload.request == 'object'
                                && typeof workload.request.network != 'undefined'
                            ){
                                // First check if the signature matches (keys) ...
                                var network_type = workload.request.network;
                                var blockchain = bitcoin.networks['bitcoin'];
                                var pubKey = bitcoin.ECPubKey.fromHex(public_key);
                                var address = pubKey.getAddress(blockchain).toString('hex');
                                var verified = bitcoin.Message.verify(address, options.signature, decrypted_data);
                                if(verified)
                                {
                                    if(bitcoin.crypto.sha256(public_key + workload.password).toString('hex') == workload.apiKey)
                                    {
                                        cortex_sdk.actions.client.verify(
                                            {uid: workload.uid, email: workload.email, password: workload.password}, 
                                            app_salt,
                                            function(client_response)
                                            {
                                                if(
                                                    client_response 
                                                    && typeof client_response.secret != 'undefined'
                                                    && typeof client_response.key != 'undefined'
                                                    && client_response.secret == workload.secret
                                                )
                                                {   
                                                    var seed = bitcoin.crypto.sha256(workload.secret + wallet_salt + workload.apiKey + client_response.key).toString('hex');
                                                    
                                                    if(seed == workload.seed)
                                                    {
                                                        var reasonable_time = false;
                                                        var now = new Date().getTime();
                                                        var time_passed = now - workload.ts;
                                                        if(time_passed < 20000) 
                                                        {
                                                            reasonable_time = true;
                                                        }
                                                        if(reasonable_time)
                                                        {
                                                            // If it all checks out ...
                                                            // Send back the decrypted request ...
                                                            response.success = true;
                                                            response.message = 'Success';
                                                            response.seed = workload.seed;
                                                            response.email = workload.email;
                                                            response.password = workload.password;
                                                            response.workload = workload.request;
                                                            callback(response);
                                                        }
                                                        else
                                                        {
                                                            response.message = 'Invalid timestamp for workload';
                                                            callback(response);
                                                        }
                                                    }
                                                    else
                                                    {
                                                        response.message = 'Invalid seed for workload';
                                                        callback(response);
                                                    }
                                                }
                                                else
                                                {
                                                    response.message = 'Invalid user for workload';
                                                    callback(response);
                                                }
                                            }
                                        );   
                                    }
                                    else
                                    {
                                        response.message = 'Invalid API key provided for workload';
                                        callback(response);
                                    }
                                }
                                else
                                {
                                    response.message = 'Invalid signature provided for workload';
                                    callback(response);
                                }
                            }
                        }
                        else
                        {
                            response.message = 'Unable to decrypt workload using stored public key';
                            callback(response);
                        }
                    }
                    else
                    {
                        response.message = 'Unable to locate corresponding wallet user';
                        callback(response);
                    }
                }
                else
                {
                    if(callback && typeof callback == 'function')
                    {
                        callback(response);
                    }
                    else
                    {
                        return false;
                    }
                }
            },
            msrecovery: function(
                options = {
                    uid: 0, workload: false, signature: false
                },
                app_salt = false,
                wallet_salt = false,
                callback = false 
            ){
                var recovery_response = {
                    success: false,
                    message: 'All fields required in order to fascilitate multisignature recovery'
                };
                if(typeof callback != 'function')
                {
                    callback = function(data)
                    {
                        return data;
                    }
                }
                if(
                    options 
                    && typeof options.uid != 'undefined'
                    && typeof options.workload != 'undefined'
                    && typeof options.signature != 'undefined'
                ){
                    cortex_sdk.actions.wallet.decrypt(
                        {uid: options.uid, workload: options.workload, signature: options.signature},
                        app_salt,
                        wallet_salt,
                        function(response)
                        {
                            if(
                                response
                                && typeof response.seed != 'undefined' 
                                && typeof response.success != 'undefined' 
                                && typeof response.workload == 'object' 
                                && response.success
                                && response.seed
                            )
                            {
                                var workload = response.workload;
                                
                                // This workload is for generating 3 out of 5 multi-sig account ...
                                // Four humans (two trustees and two application owners)
                                // Can be split into additional humans using shamir ...
                                
                                var total_number_of_keys = 5;
                                var required_keys = 3;
                                
                                if(
                                    typeof workload == 'object'
                                    && typeof workload.network != 'undefined'
                                    
                                    // Need to know which application admin initated the request ...
                                    
                                    && typeof workload.agent != 'undefined'
                                    && typeof workload.dnkeys == 'object'
                                    && workload.dnkeys.length == 4
                                    
                                ){  
                                    
                                    // TODO - Switch to Azri seed function !!!
                                    var collective_dnkeys = '';
                                    jQuery.each(workload.dnkeys, function(u)
                                    {
                                        if(u > 0) collective_dnkeys+= '_';
                                        collective_dnkeys+= workload.dnkeys[u];
                                    });
                                    var seed = bitcoin.crypto.sha256(wallet_salt + collective_dnkeys).toString('hex');

                                    cortex_hot_wallets.hd.create(
                                    {
                                        seed: seed, 
                                        path: workload.path, 
                                        network: workload.network, 
                                        privacy: 'public',
                                        lookup: true
                                    }, 
                                    function(data)
                                    {
                                        if(data && typeof data.rdata != 'undefined')
                                        {   
                                            var keys = data.rdata;

                                            // Need to store / transmit the reedem scripts ...?
                                            // Should they also be DN-KEY based ...?
                                            // Can even DN-Key shamir settings ...?
                                            // (allowing for any number of human entities)
                                            
                                            console.log('recovery keys', keys);
                                            
                                            /*

                                            users.push({
                                                btc: {
                                                    address: keys.bitcoin.address,
                                                    xpub: keys.bitcoin.xPub
                                                },
                                                eth: {
                                                    address: keys.ethereum.address
                                                },
                                                xrp: {
                                                    address: keys.ripple.address
                                                }
                                            });

                                            var network = 'bitcoin';
                                            if(workload.network == 'private') network = 'bitcointestnet';
                                            var blockchain = nwbs.bitcoin.networks[network];

                                            var key_pairs = [];
                                            jQuery.each(users, function(kp)
                                            {
                                                var this_key = users[kp].btc.xpub;
                                                var this_wallet = nwbs.bitcoin.HDNode.fromBase58(this_key, blockchain);
                                                key_pairs.push(this_wallet.getPublicKeyBuffer());
                                            });
                                            key_pairs.sort();
                                            var redeem_script = nwbs.bitcoin.script.multisig.output.encode(required_keys, key_pairs);
                                            var script_to_redeem = nwbs.bitcoin.crypto.hash160(redeem_script);
                                            var script_key = nwbs.bitcoin.script.scriptHash.output.encode(script_to_redeem);
                                            var address = nwbs.bitcoin.address.fromOutputScript(script_key, blockchain);
                                            var multi_sig_keys = {
                                                address: address,
                                                redeem: redeem_script.toString('hex')
                                            };

                                            var wallet_id = bitcoin.crypto.sha256(collective_dnkeys + JSON.stringify(workload.wallet.path) + workload.network).toString('hex');

                                            var pathed = '';
                                            jQuery.each(workload.wallet.path, function(p)
                                            {
                                                if(p < 1) pathed+= workload.wallet.path[p];
                                                else pathed+= ', ' + workload.wallet.path[p];
                                            });

                                            var accounts = [];

                                            for(c = 0; c < cortex_sdk_config.currencies.length; c++)
                                            {
                                                var id = cortex_sdk_config.currencies[c].id;
                                                var address = multi_sig_keys.address;
                                                var script = multi_sig_keys.redeem;

                                                if(id == 'ethereum')
                                                {
                                                    script = false;
                                                    address = app_eth_address;
                                                }
                                                if(id == 'ripple')
                                                {
                                                    script = false;
                                                    address = app_xrp_address;
                                                }
                                                var account = {
                                                    currency: cortex_sdk_config.currencies[c].name,
                                                    symbol: cortex_sdk_config.currencies[c].symbol,
                                                    decimals: cortex_sdk_config.currencies[c].decimals,
                                                    address: address,
                                                    script: script,
                                                    txs: 0, // Need to get REAL data
                                                    balances: {
                                                        int: 0, // Need to get REAL data
                                                        str: 0 // Need to get REAL data
                                                    }
                                                }
                                                accounts.push(account);
                                            }

                                            var shared_hot_wallet = {
                                                id: wallet_id,
                                                uid: options.uid,
                                                path: workload.wallet.path,
                                                pathed: pathed,
                                                network_type: workload.network,
                                                accounts: accounts
                                            };

                                            var public_key = cortex_db.wallet.users[options.uid].key;
                                            var seed = bitcoin.crypto.sha256(public_key).toString('hex');
                                            var private_keys = cortex_sdk.keys(seed);
                                            var keys = cortex_sdk.keys(private_keys.public_key);
                                            var textBytes = aesjs.utils.utf8.toBytes(JSON.stringify(shared_hot_wallet));
                                            var aesCtr = new aesjs.ModeOfOperation.ctr(keys.raw);
                                            var encryptedBytes = aesCtr.encrypt(textBytes);
                                            var encrypted_wallet = aesjs.utils.hex.fromBytes(encryptedBytes);

                                            if(typeof callback == 'function') callback(encrypted_wallet);
                                            else return encrypted_wallet;
                                            
                                            */
                                        }
                                    });  
                                }
                            }
                            else
                            {
                                if(response && typeof response.message != 'undefined')
                                {
                                    console.log('Holding error: ' + response.message);
                                }
                            }
                        }
                    );
                }
                else
                {
                    callback(recovery_response);
                }
            }
        }
    },
    forms: 
    {
        path: function(path)
        {
            if(path == 'Master') path = false;
            var select_path = false;                
            if(path)
            {
                if(path.indexOf(',') > 0)
                {
                    var pathed_array = path.split(',');
                    for(pa = 0; pa < pathed_array.length; pa++)
                    {
                        pathed_array[pa] = parseInt(pathed_array[pa]);
                    };
                    select_path = pathed_array;
                }
                else
                {
                    select_path = [];
                    select_path.push(parseInt(path));
                }
            }
            return select_path;

        },
        init: function()
        {
            cortex_sdk.forms.custody();
            cortex_sdk.forms.decrypt();
            cortex_sdk.forms.deposit();
            cortex_sdk.forms.holding();
            cortex_sdk.forms.msrecovery();
            cortex_sdk.forms.rebalance();
            cortex_sdk.forms.registration();
            cortex_sdk.forms.sweeping();
            cortex_sdk.forms.withdraw();
        },
        decrypt: function()
        {
            var forms = document.getElementsByClassName(cortex_sdk.classes.decrypt);
            if(forms)
            {
                for(i = 0; i < forms.length; i++)
                {
                    var form = forms[i];
                    form.addEventListener("submit", function(e)
                    {
                        e.preventDefault();
                        var id = parseInt(this.dataset.id);
                        var email = this.getElementsByClassName(cortex_sdk.classes.email)[0].value;
                        var password = this.getElementsByClassName(cortex_sdk.classes.password)[0].value;
                        if(id > 0 && email && password)
                        {
                            var credentials = cortex_sdk.credentials.get(id, email, password);
                            if(credentials)
                            {
                                var html = '<strong>User ID</strong>: ' + credentials.uid;
                                html+= '<br /><strong>API Key</strong>: ' + credentials.key;
                                html+= '<br /><strong>Secret</strong>: ' + credentials.secret;
                                html+= '<br /><strong>Seed</strong>: ' + credentials.seed;
                                var code = this.getElementsByClassName(cortex_sdk.classes.cdecrypt)[0];
                                code.innerHTML = html;
                            }
                            else
                            {
                                alert('Invalid email address and password');
                            }
                        }
                        else
                        {
                            alert('Invalid email address and password');
                        }
                    });
                }
            }
        },
        deposit: function()
        {   
            var form = document.getElementsByClassName(cortex_sdk.classes.deposit)[0];
            if(form)
            {
                form.addEventListener("submit", function(e)
                {
                    e.preventDefault();
                    
                    var deposit_response = {
                        success: false,
                        message: 'All fields required in to generate new hot wallet entity'
                    }

                    // The following two fields are required ...
                    var email = form.getElementsByClassName(cortex_sdk.classes.email)[0].value;
                    var password = form.getElementsByClassName(cortex_sdk.classes.password)[0].value;

                    // The User ID would be be generated by client upon receiving email address ...
                    var uid = form.getElementsByClassName(cortex_sdk.classes.userid)[0].value;
                    
                    // The network and path would be be filled-in by application ...
                    var network_type = form.getElementsByClassName(cortex_sdk.classes.network)[0].value;
                    var path = form.getElementsByClassName(cortex_sdk.classes.path)[0].value;
                    var callback_function = form.getElementsByClassName(cortex_sdk.classes.callback)[0].value;
                    
                    var callback = function(data)
                    {
                        return data;
                    }
                    if(typeof cortex_sdk_callbacks == 'object' && typeof cortex_sdk_callbacks[callback_function] != 'undefined')
                    {
                        callback = cortex_sdk_callbacks[callback_function];
                    }

                    // The salts and User ID, if provided - enables testing to be done locally ...
                    var app_salt = form.getElementsByClassName(cortex_sdk.classes.appsalt)[0].value;
                    var wallet_salt = form.getElementsByClassName(cortex_sdk.classes.walletsalt)[0].value;

                    // Only proceed if minimum required fields are supplied ...
                    if(uid && network_type && email && password)
                    {
                        var credentials = cortex_sdk.credentials.get(uid, email, password);

                        if(credentials)
                        {
                            if(typeof cortex != 'undefined' && typeof cortex.ux != 'undefined')
                            {
                                cortex.ux.loader(true, 'GENERATING');
                            }

                            var now = new Date().getTime();
                            var api_key = credentials.key;
                            var select_path = cortex_sdk.forms.path(path);

                            var workload = {
                                uid: parseInt(uid),
                                apiKey: api_key,
                                email: bitcoin.crypto.sha256(email).toString('hex'),
                                password: bitcoin.crypto.sha256(password).toString('hex'),
                                secret: credentials.secret,
                                seed: credentials.seed,
                                ts: now,
                                request: {
                                    path: select_path,
                                    network: network_type,
                                    privacy: 'public'
                                }
                            };
                            
                            cortex_sdk.actions.application.prepare(
                                {uid: workload.uid, email: email, password: password, workload: workload},
                                {url: 'deposit'},
                                function(decrypted_response)
                                {
                                    if(
                                        decrypted_response 
                                        && typeof decrypted_response.success != 'undefined'
                                        && decrypted_response.success == true
                                    ){
                                        var response = decrypted_response.message;
                                        if(
                                            response
                                            && typeof response.id != 'undefined'
                                            && typeof response.path != 'undefined'
                                            && typeof response.accounts == 'object'
                                            && typeof response.networkType != 'undefined'
                                        ){
                                            
                                            deposit_response.success = true;
                                            deposit_response.message = response;
                                            callback(deposit_response);
                                        }
                                        else
                                        {
                                            deposit_response.message = 'Invalid decrypted response for deposit';
                                            callback(deposit_response);
                                        }
                                    }
                                    else
                                    {
                                        deposit_response.message = 'Invalid decrypted response for depositing';
                                        callback(deposit_response);
                                    }
                                }
                            );
                        }
                        else
                        {
                            deposit_response.message = 'Invalid username and password for generating new hot wallet entity';
                            callback(deposit_response);
                        }
                    }
                    else
                    {
                        callback(deposit_response);
                    }
                });
            }
        },
        custody: function()
        {   
            var form = document.getElementsByClassName(cortex_sdk.classes.custody)[0];
            if(form)
            {
                form.addEventListener("submit", function(e)
                {
                    e.preventDefault();
                    
                    var holding_response = {
                        success: false,
                        message: 'All fields required in to generate new hot custodian wallet account'
                    }

                    // The following two fields are required ...
                    var email = form.getElementsByClassName(cortex_sdk.classes.email)[0].value;
                    var password = form.getElementsByClassName(cortex_sdk.classes.password)[0].value;

                    // The User ID would be be generated by client upon receiving email address ...
                    var uid = form.getElementsByClassName(cortex_sdk.classes.userid)[0].value;
                    var aid = form.getElementsByClassName(cortex_sdk.classes.accountid)[0].value;
                    var path = form.getElementsByClassName(cortex_sdk.classes.path)[0].value;
                    
                    // The network and path would be be filled-in by application ...
                    var network_type = form.getElementsByClassName(cortex_sdk.classes.network)[0].value;
                    var callback_function = form.getElementsByClassName(cortex_sdk.classes.callback)[0].value;
                    
                    var callback = function(data)
                    {
                        return data;
                    }
                    if(typeof cortex_sdk_callbacks == 'object' && typeof cortex_sdk_callbacks[callback_function] != 'undefined')
                    {
                        callback = cortex_sdk_callbacks[callback_function];
                    }

                    // The salts and User ID, if provided - enables testing to be done locally ...
                    var app_salt = form.getElementsByClassName(cortex_sdk.classes.appsalt)[0].value;
                    var wallet_salt = form.getElementsByClassName(cortex_sdk.classes.walletsalt)[0].value;

                    // Only proceed if minimum required fields are supplied ...
                    if(uid && network_type && email && password)
                    {
                        var credentials = cortex_sdk.credentials.get(uid, email, password);

                        if(credentials)
                        {
                            if(typeof cortex != 'undefined' && typeof cortex.ux != 'undefined')
                            {
                                cortex.ux.loader(true, 'GENERATING');
                            }

                            var now = new Date().getTime();
                            var api_key = credentials.key;
                            var select_path = cortex_sdk.forms.path(path);
                            
                            // To get from form ...
                            var agent_dnkey = form.getElementsByClassName(cortex_sdk.classes.appkey1)[0].value;
                            var custody_dnkey_app = form.getElementsByClassName(cortex_sdk.classes.mskeyapp)[0].value;
                            var custody_dnkey_trustee = form.getElementsByClassName(cortex_sdk.classes.mskeytrust)[0].value;
                            var wallet_password = form.getElementsByClassName(cortex_sdk.classes.wpassword)[0].value;
                            
                            if(
                                agent_dnkey
                                && custody_dnkey_app && custody_dnkey_trustee 
                            ){
                            
                                // First need to verify if username provided matches DN-Key records ...
                                bce_web.api(
                                    'dnkey?host=' + agent_dnkey + '&cache=off',
                                    function(dnkeys)
                                    {
                                        if(dnkeys && typeof dnkeys["btc-" + network_type] != 'undefined')
                                        {
                                            var btc_address = dnkeys["btc-" + network_type];
                                            var linked_account = cortex_accounts.get(aid, 'Bitcoin', network_type);
                                            var seed = cortex_cookies.get(agent_dnkey, wallet_password, 'bp_cortex_seed');
                                            var hash = nwbs.bitcoin.crypto.sha256(agent_dnkey + wallet_password).toString('hex');
                                            var secret = nwbs.bitcoin.crypto.sha256(seed + hash + wp_user_salt).toString('hex');
                                            var keys = cortex_crypto_utils.keys(secret, linked_account.path, network_type);
                                            var chain = 'bitcoin';
                                            if(
                                                keys 
                                                && typeof keys[chain] != 'undefined'
                                                && typeof keys[chain].address != 'undefined'
                                                && keys[chain].address == btc_address
                                            )
                                            {
                                                var workload = {
                                                    uid: uid,
                                                    apiKey: api_key,
                                                    email: bitcoin.crypto.sha256(email).toString('hex'),
                                                    password: bitcoin.crypto.sha256(password).toString('hex'),
                                                    secret: credentials.secret,
                                                    seed: credentials.seed,
                                                    ts: now,
                                                    request: {
                                                        network: network_type,
                                                        dnkeys: {
                                                            app: custody_dnkey_app,
                                                            trustee: custody_dnkey_trustee
                                                        },
                                                        path: select_path
                                                    }
                                                };

                                                cortex_sdk.actions.application.prepare(
                                                    {uid: workload.uid, email: email, password: password, workload: workload},
                                                    {url: 'custody'},
                                                    function(decrypted_response)
                                                    {
                                                        if(
                                                            decrypted_response 
                                                            && typeof decrypted_response.success != 'undefined'
                                                            && decrypted_response.success == true
                                                        ){
                                                            var response = decrypted_response.message;
                                                            if(
                                                                response
                                                                && typeof response.id != 'undefined'
                                                                && typeof response.path != 'undefined'
                                                                && typeof response.accounts == 'object'
                                                                && typeof response.network_type != 'undefined'
                                                                && typeof response.dnkeys == 'object'
                                                                && typeof response.dnkeys.app != 'undefined'
                                                                && typeof response.dnkeys.trustee != 'undefined'
                                                                && response.dnkeys.app
                                                                && response.dnkeys.trustee
                                                            ){
                                                                // FOR UX
                                                                response.aid = aid;
                                                                holding_response.success = true;
                                                                holding_response.message = response;
                                                                callback(holding_response);
                                                            }
                                                            else
                                                            {
                                                                holding_response.message = 'Invalid decrypted response for custody';
                                                                callback(holding_response);
                                                            }
                                                        }
                                                        else
                                                        {
                                                            holding_response.message = 'Invalid response for custody generation';
                                                            callback(holding_response);
                                                        }
                                                    }
                                                );
                                            }
                                        }
                                        else
                                        {
                                            holding_response.message = 'Invalid agent DN-Key for generating new shared hot wallet';
                                            callback(holding_response);
                                        }
                                    }
                                );
                            }
                            else
                            {
                                holding_response.message = 'All additional fields required for generating new shared hot wallet';
                                callback(holding_response);
                            }
                        }
                        else
                        {
                            holding_response.message = 'Invalid username and password for generating new shared hot wallet';
                            callback(holding_response);
                        }
                    }
                    else
                    {
                        callback(holding_response);
                    }
                });
            }
        },
        holding: function()
        {   
            var form = document.getElementsByClassName(cortex_sdk.classes.holding)[0];
            if(form)
            {
                form.addEventListener("submit", function(e)
                {
                    e.preventDefault();
                    
                    var holding_response = {
                        success: false,
                        message: 'All fields required in to generate new hot wallet shared account'
                    }

                    // The following two fields are required ...
                    var email = form.getElementsByClassName(cortex_sdk.classes.email)[0].value;
                    var password = form.getElementsByClassName(cortex_sdk.classes.password)[0].value;

                    // The User ID would be be generated by client upon receiving email address ...
                    var uid = form.getElementsByClassName(cortex_sdk.classes.userid)[0].value;
                    var aid = form.getElementsByClassName(cortex_sdk.classes.accountid)[0].value;
                    var path = form.getElementsByClassName(cortex_sdk.classes.path)[0].value;
                    
                    // The network and path would be be filled-in by application ...
                    var network_type = form.getElementsByClassName(cortex_sdk.classes.network)[0].value;
                    var callback_function = form.getElementsByClassName(cortex_sdk.classes.callback)[0].value;
                    
                    var callback = function(data)
                    {
                        return data;
                    }
                    if(typeof cortex_sdk_callbacks == 'object' && typeof cortex_sdk_callbacks[callback_function] != 'undefined')
                    {
                        callback = cortex_sdk_callbacks[callback_function];
                    }

                    // The salts and User ID, if provided - enables testing to be done locally ...
                    var app_salt = form.getElementsByClassName(cortex_sdk.classes.appsalt)[0].value;
                    var wallet_salt = form.getElementsByClassName(cortex_sdk.classes.walletsalt)[0].value;

                    // Only proceed if minimum required fields are supplied ...
                    if(uid && network_type && email && password)
                    {
                        var credentials = cortex_sdk.credentials.get(uid, email, password);

                        if(credentials)
                        {
                            if(typeof cortex != 'undefined' && typeof cortex.ux != 'undefined')
                            {
                                cortex.ux.loader(true, 'GENERATING');
                            }

                            var now = new Date().getTime();
                            var api_key = credentials.key;
                            var select_path = cortex_sdk.forms.path(path);
                            
                            // To get from form ...
                            var agent_dnkey = form.getElementsByClassName(cortex_sdk.classes.appkey1)[0].value;
                            var ms_dnkey_app = form.getElementsByClassName(cortex_sdk.classes.mskeyapp)[0].value;
                            var ms_dnkey_trustee = form.getElementsByClassName(cortex_sdk.classes.mskeytrust)[0].value;
                            var app_dnkey = form.getElementsByClassName(cortex_sdk.classes.appkey2)[0].value;
                            var app_signature = form.getElementsByClassName(cortex_sdk.classes.appsign2)[0].value;
                            var primary_trustee_dnkey = form.getElementsByClassName(cortex_sdk.classes.trustkey1)[0].value;
                            var primary_trustee_signature = form.getElementsByClassName(cortex_sdk.classes.trustsign1)[0].value;
                            var secondary_trustee_dnkey = form.getElementsByClassName(cortex_sdk.classes.trustkey2)[0].value;
                            var secondary_trustee_signature = form.getElementsByClassName(cortex_sdk.classes.trustsign2)[0].value;
                            var message_to_sign = form.getElementsByClassName(cortex_sdk.classes.message)[0].value;
                            var wallet_password = form.getElementsByClassName(cortex_sdk.classes.wpassword)[0].value;
                            
                            if(
                                agent_dnkey
                                && ms_dnkey_app && ms_dnkey_trustee 
                                && app_dnkey && app_signature 
                                && primary_trustee_dnkey && primary_trustee_signature
                                && secondary_trustee_dnkey && secondary_trustee_signature
                            ){
                            
                                // First need to verify if username provided matches DN-Key records ...
                                bce_web.api(
                                    'dnkey?host=' + agent_dnkey + '&cache=off',
                                    function(dnkeys)
                                    {
                                        if(dnkeys && typeof dnkeys["btc-" + network_type] != 'undefined')
                                        {
                                            var btc_address = dnkeys["btc-" + network_type];
                                            var linked_account = cortex_accounts.get(aid, 'Bitcoin', network_type);
                                            var seed = cortex_cookies.get(agent_dnkey, wallet_password, 'bp_cortex_seed');
                                            var hash = nwbs.bitcoin.crypto.sha256(agent_dnkey + wallet_password).toString('hex');
                                            var secret = nwbs.bitcoin.crypto.sha256(seed + hash + wp_user_salt).toString('hex');
                                            var keys = cortex_crypto_utils.keys(secret, linked_account.path, network_type);
                                            var chain = 'bitcoin';
                                            if(
                                                keys 
                                                && typeof keys[chain] != 'undefined'
                                                && typeof keys[chain].address != 'undefined'
                                                && keys[chain].address == btc_address
                                            )
                                            {
                                                var network = 'bitcoin';
                                                if(network_type == 'private') network = 'bitcointestnet';
                                                var blockchain = bitcoin.networks[network];
                                                var message_key = bitcoin.ECKey.fromWIF(keys[chain].privateKey);
                                                var agent_signature = bitcoin.Message.sign(message_key, message_to_sign, blockchain).toString('base64');
                                                
                                                var workload = {
                                                    uid: uid,
                                                    apiKey: api_key,
                                                    email: bitcoin.crypto.sha256(email).toString('hex'),
                                                    password: bitcoin.crypto.sha256(password).toString('hex'),
                                                    secret: credentials.secret,
                                                    seed: credentials.seed,
                                                    ts: now,
                                                    request: {
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

                                                cortex_sdk.actions.application.prepare(
                                                    {uid: workload.uid, email: email, password: password, workload: workload},
                                                    {url: 'holding'},
                                                    function(decrypted_response)
                                                    {
                                                        if(
                                                            decrypted_response 
                                                            && typeof decrypted_response.success != 'undefined'
                                                            && decrypted_response.success == true
                                                        ){
                                                            var response = decrypted_response.message;
                                                            if(
                                                                response
                                                                && typeof response.id != 'undefined'
                                                                && typeof response.path != 'undefined'
                                                                && typeof response.accounts == 'object'
                                                                && typeof response.network_type != 'undefined'
                                                            ){
                                                                // FOR UX
                                                                response.aid = aid;
                                                                holding_response.success = true;
                                                                holding_response.message = response;
                                                                callback(holding_response);
                                                            }
                                                            else
                                                            {
                                                                holding_response.message = 'Invalid decrypted response for holding';
                                                                callback(holding_response);
                                                            }
                                                        }
                                                        else
                                                        {
                                                            holding_response.message = 'Invalid response for holding';
                                                            callback(holding_response);
                                                        }
                                                    }
                                                );
                                            }
                                        }
                                        else
                                        {
                                            holding_response.message = 'Invalid agent DN-Key for generating new shared hot wallet';
                                            callback(holding_response);
                                        }
                                    }
                                );
                            }
                            else
                            {
                                holding_response.message = 'All additional fields required for generating new shared hot wallet';
                                callback(holding_response);
                            }
                        }
                        else
                        {
                            holding_response.message = 'Invalid username and password for generating new shared hot wallet';
                            callback(holding_response);
                        }
                    }
                    else
                    {
                        callback(holding_response);
                    }
                });
            }
        },
        msrecovery: function()
        {   
            var form = document.getElementsByClassName(cortex_sdk.classes.msrecovery)[0];
            if(form)
            {
                form.addEventListener("submit", function(e)
                {
                    e.preventDefault();

                    var recovery_response = {
                        success: false,
                        message: 'All fields required in to use multisignature recovery functions'
                    }

                    // The following two fields are required ...
                    var email = form.getElementsByClassName(cortex_sdk.classes.email)[0].value;
                    var password = form.getElementsByClassName(cortex_sdk.classes.password)[0].value;

                    // The User ID would be be generated by client upon receiving email address ...
                    var uid = form.getElementsByClassName(cortex_sdk.classes.userid)[0].value;
                    var agent_id = form.getElementsByClassName(cortex_sdk.classes.agent)[0].value;
                    var path = form.getElementsByClassName(cortex_sdk.classes.path)[0].value;

                    // The network and path would be be filled-in by application ...
                    var network_type = form.getElementsByClassName(cortex_sdk.classes.network)[0].value;
                    var callback = form.getElementsByClassName(cortex_sdk.classes.callback)[0].value;

                    // The salts and User ID, if provided - enables testing to be done locally ...
                    var app_salt = form.getElementsByClassName(cortex_sdk.classes.appsalt)[0].value;
                    var wallet_salt = form.getElementsByClassName(cortex_sdk.classes.walletsalt)[0].value;
                    
                    // Need for Cortex UX
                    var txid = form.getElementsByClassName(cortex_sdk.classes.txid)[0].value;;
                    var from = form.getElementsByClassName(cortex_sdk.classes.from)[0].value;;

                    var agent_dnkey = form.getElementsByClassName(cortex_sdk.classes.appkey1)[0].value;
                    var app_dnkey = form.getElementsByClassName(cortex_sdk.classes.appkey2)[0].value;
                    var primary_trustee_dnkey = form.getElementsByClassName(cortex_sdk.classes.trustkey1)[0].value;
                    var secondary_trustee_dnkey = form.getElementsByClassName(cortex_sdk.classes.trustkey2)[0].value;

                    // Only proceed if minimum required fields are supplied ...
                    if(uid && network_type && email && password && agent_id && agent_dnkey && app_dnkey && primary_trustee_dnkey && secondary_trustee_dnkey && txid && from)
                    {
                        var credentials = cortex_sdk.credentials.get(uid, email, password);

                        if(credentials)
                        {
                            if(typeof cortex != 'undefined' && typeof cortex.ux != 'undefined')
                            {
                                cortex.ux.loader(true, 'GENERATING');
                            }

                            var now = new Date().getTime();
                            var api_key = credentials.key;
                            var select_path = false;
                            if(path)
                            {
                                if(path.indexOf(',') > 0)
                                {
                                    var pathed_array = path.split(',');
                                    for(pa = 0; pa < pathed_array.length; pa++)
                                    {
                                        pathed_array[pa] = parseInt(pathed_array[pa]);
                                    };
                                    select_path = pathed_array;
                                }
                                else
                                {
                                    select_path = [];
                                    select_path.push(parseInt(path));
                                }
                            }

                            // And then?

                            var workload = {
                                uid: uid,
                                apiKey: api_key,
                                email: bitcoin.crypto.sha256(email).toString('hex'),
                                password: bitcoin.crypto.sha256(password).toString('hex'),
                                secret: credentials.secret,
                                seed: credentials.seed,
                                ts: now,
                                request: {
                                    agent: agent_id,
                                    network: network_type,
                                    dnkeys: [
                                        agent_dnkey,
                                        app_dnkey,
                                        primary_trustee_dnkey, 
                                        secondary_trustee_dnkey
                                    ],
                                    path: select_path
                                }
                            };

                            cortex_sdk.actions.application.encrypt(
                                {uid: workload.uid, email: email, password: password, workload: workload},
                                function(encrypted_workload, signature, public_key)
                                {
                                    if(encrypted_workload && signature && public_key)
                                    {
                                        cortex_sdk.actions.wallet.msrecovery(
                                            {uid: uid, workload: encrypted_workload, signature: signature},
                                            'application_salt',
                                            'wallet_salt',
                                            function(encrypted_response)
                                            {
                                                // TODO - Functionalize this ...???
                                                if(encrypted_response)
                                                {
                                                    var seed = bitcoin.crypto.sha256(public_key).toString('hex');
                                                    var private_keys = cortex_sdk.keys(seed);
                                                    var keys = cortex_sdk.keys(private_keys.public_key);
                                                    var encryptedBytes = aesjs.utils.hex.toBytes(encrypted_response);
                                                    var aesCtr = new aesjs.ModeOfOperation.ctr(keys.raw);
                                                    var decryptedBytes = aesCtr.decrypt(encryptedBytes);
                                                    var decrypted_data = aesjs.utils.utf8.fromBytes(decryptedBytes);

                                                    if(decrypted_data)
                                                    {
                                                        var response = JSON.parse(decrypted_data);
                                                        if(
                                                            response
                                                            && typeof response.id != 'undefined'
                                                            && typeof response.path != 'undefined'
                                                            && typeof response.accounts == 'object'
                                                            && typeof response.network_type != 'undefined'
                                                        ){
                                                            // FOR UX
                                                            response.txid = txid;
                                                            response.from = from;
                                                            // Now need to store hot wallet for UX ...?
                                                            if(
                                                                typeof cortex_sdk_callbacks == 'object'
                                                                && typeof cortex_sdk_callbacks[callback] != 'undefined'
                                                            ){
                                                                cortex_sdk_callbacks[callback](response);
                                                            }
                                                        }
                                                    }   
                                                    else
                                                    {
                                                        if(
                                                            typeof cortex_sdk_callbacks == 'object'
                                                            && typeof cortex_sdk_callbacks[callback] != 'undefined'
                                                        ){
                                                            if(encrypted_response && typeof encrypted_response.message !='undefined')
                                                            {
                                                                cortex_sdk_callbacks[callback]('Invalid decryption: ' + encrypted_response.message);
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        );
                                    }
                                }
                            );
                        }
                        else
                        {
                            recovery_response.message = 'Invalid username and password for recovery multisignature funds';
                            if(typeof cortex != 'undefined' && typeof cortex.ux != 'undefined')
                            {
                                cortex.ux.modals('Warning', recovery_response.message);
                            }
                            else
                            {
                                alert('Warning: ' + recovery_response.message);
                            }
                        }
                    }
                    else
                    {
                        if(typeof cortex != 'undefined' && typeof cortex.ux != 'undefined')
                        {
                            cortex.ux.modals('Warning', recovery_response.message);
                        }
                        else
                        {
                            alert('Warning: ' + recovery_response.message);
                        }
                    }
                });
            }
        },
        registration: function()
        {   
            var form = document.getElementsByClassName(cortex_sdk.classes.registration)[0];
            if(form)
            {
                form.addEventListener("submit", function(e)
                {
                    e.preventDefault();

                    // The following two fields are required ...
                    var email = form.getElementsByClassName(cortex_sdk.classes.email)[0].value;
                    var password = form.getElementsByClassName(cortex_sdk.classes.password)[0].value;

                    // The User ID would be be generated by client upon receiving email address ...
                    var uid = parseInt(form.getElementsByClassName(cortex_sdk.classes.userid)[0].value);

                    // The salts and User ID, if provided - enables testing to be done locally ...
                    var app_salt = form.getElementsByClassName(cortex_sdk.classes.appsalt)[0].value;
                    var wallet_salt = form.getElementsByClassName(cortex_sdk.classes.walletsalt)[0].value;
                    
                    var callback = form.getElementsByClassName(cortex_sdk.classes.callback)[0].value;

                    // Only proceed if minimum required fields are supplied ...
                    if(email && password)
                    {
                        var hashed_password = bitcoin.crypto.sha256(password).toString('hex');
                        var hashed_email = bitcoin.crypto.sha256(email).toString('hex');

                        cortex_sdk.actions.client.register(
                        {
                            email: hashed_email,
                            password: hashed_password
                        },
                        uid,
                        app_salt,
                        function(client_user)
                        {
                            if(
                                client_user
                                && typeof client_user.uid != 'undefined'
                                && typeof client_user.secret != 'undefined'
                                && typeof client_user.key != 'undefined' // for demo / non-db
                            )
                            {
                                var seed = bitcoin.crypto.sha256(email + client_user.secret + client_user.uid + password).toString('hex');
                                var keys = cortex_sdk.keys(seed);
                                var api_key = bitcoin.crypto.sha256(keys.public_key + hashed_password).toString('hex');

                                var settings = {
                                    "url": cortex_sdk_config.apis.wallet + "auth/",
                                    "method": "POST",
                                    "timeout": 0,
                                    "headers": {
                                        "Content-Type": "application/json"
                                    },
                                    "data": JSON.stringify({
                                        "uid": client_user.uid,
                                        "hashEmail": hashed_email,
                                        "hashPassword": hashed_password,
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

                                        cortex_sdk.ux.users.add(user_to_store);
                                        cortex_sdk.credentials.store(credentials, email, password);

                                        if(
                                            typeof cortex_sdk_callbacks == 'object'
                                            && typeof cortex_sdk_callbacks[callback] != 'undefined'
                                        ){
                                            cortex_sdk_callbacks[callback](true);
                                        }
                                        else
                                        {
                                            alert('We have successfully registered User ID ' + client_user.uid + ' with both the application and the wallet API');
                                        }
                                    }
                                    else
                                    {
                                        if(typeof callback == 'function')
                                        {
                                            callback(false);
                                        }
                                        else
                                        {
                                            return false;
                                        }
                                    }
                                });
                            }
                        })
                    }
                });
            }
        },
        rebalance: function()
        {   
            var form = document.getElementsByClassName(cortex_sdk.classes.rebalance)[0];
            if(form)
            {
                form.addEventListener("submit", function(e)
                {
                    e.preventDefault();
                    
                    if(typeof cortex == 'object') cortex.ux.loader(true, 'REBALANCING');
                    
                    var rebalance_response = {
                        success: false,
                        message: 'All fields required in to perform rebalance action'
                    }

                    // The following two fields are required ...
                    var email = form.getElementsByClassName(cortex_sdk.classes.email)[0].value;
                    var password = form.getElementsByClassName(cortex_sdk.classes.password)[0].value;

                    // The User ID would be be generated by client upon receiving email address ...
                    var uid = form.getElementsByClassName(cortex_sdk.classes.userid)[0].value;
                    var holding_path = form.getElementsByClassName(cortex_sdk.classes.path)[0].value;
                    var withdraw_path = form.getElementsByClassName(cortex_sdk.classes.path2)[0].value;
                    
                    // The network and path would be be filled-in by application ...
                    var network_type = form.getElementsByClassName(cortex_sdk.classes.network)[0].value;
                    var callback = form.getElementsByClassName(cortex_sdk.classes.callback)[0].value;

                    // The salts and User ID, if provided - enables testing to be done locally ...
                    var app_salt = form.getElementsByClassName(cortex_sdk.classes.appsalt)[0].value;
                    var wallet_salt = form.getElementsByClassName(cortex_sdk.classes.walletsalt)[0].value;
                    
                    var wallet_check = false;
                    if(
                        form.getElementsByClassName('cortex-form-check').length > 0
                        && form.getElementsByClassName('cortex-form-check')[0].value
                    ){
                        wallet_check = form.getElementsByClassName('cortex-form-check')[0].value;
                    }

                    // Only proceed if minimum required fields are supplied ...
                    if(uid && network_type && email && password)
                    {
                        var credentials = cortex_sdk.credentials.get(uid, email, password);

                        if(credentials)
                        {
                            if(typeof cortex != 'undefined' && typeof cortex.ux != 'undefined')
                            {
                                cortex.ux.loader(true, 'GENERATING');
                            }

                            var now = new Date().getTime();
                            var api_key = credentials.key;
                            
                            var agent_dnkey = form.getElementsByClassName(cortex_sdk.classes.appkey1)[0].value;
                            var ms_dnkey_app = form.getElementsByClassName(cortex_sdk.classes.mskeyapp)[0].value;
                            var ms_dnkey_trustee = form.getElementsByClassName(cortex_sdk.classes.mskeytrust)[0].value;
                            var ms_dnkey_app2 = form.getElementsByClassName(cortex_sdk.classes.mskeyapp2)[0].value;
                            var ms_dnkey_trustee2 = form.getElementsByClassName(cortex_sdk.classes.mskeytrust2)[0].value;
                            
                            var workload = {
                                uid: uid,
                                apiKey: api_key,
                                email: bitcoin.crypto.sha256(email).toString('hex'),
                                password: bitcoin.crypto.sha256(password).toString('hex'),
                                secret: credentials.secret,
                                seed: credentials.seed,
                                ts: now,
                                request: {
                                    check_balances_only: wallet_check,
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
                            cortex_sdk.actions.application.prepare(
                                {uid: workload.uid, email: email, password: password, workload: workload},
                                {url: 'rebalance'},
                                function(decrypted_response)
                                {
                                    if(
                                        typeof cortex_sdk_callbacks == 'object'
                                        && typeof cortex_sdk_callbacks[callback] != 'undefined'
                                    ){
                                        cortex_sdk_callbacks[callback](decrypted_response);
                                    }
                                    else
                                    {
                                        return decrypted_response;
                                    }
                                }
                            );
                                            
                            /*
                                        cortex_sdk.actions.wallet.rebalance(
                                            {uid: uid, workload: encrypted_workload, signature: signature},
                                            'application_salt',
                                            'wallet_salt',
                                            function(encrypted_response)
                                            {
                                                if(encrypted_response && typeof encrypted_response.success != 'undefined' && encrypted_response.success === true)
                                                {
                                                    var raw_data = false;
                                                    
                                                    // Waiting for Azri to return real data ???
                                                    
                                                    //var encrypted_data = encrypted_response.rdata;
                                                    raw_data = encrypted_response.message;
                                                    
                                                    if(raw_data)
                                                    {
                                                        // To be removed ...
                                                        if(
                                                            typeof cortex_sdk_callbacks == 'object'
                                                            && typeof cortex_sdk_callbacks[callback] != 'undefined'
                                                        ){
                                                            cortex_sdk_callbacks[callback](raw_data);
                                                        }
                                                        else
                                                        {
                                                            return response;
                                                        }
                                                    }
                                                    else if(encrypted_data)
                                                    {
                                                        var seed = bitcoin.crypto.sha256(public_key).toString('hex');
                                                        var keys = cortex_sdk.keys(seed);
                                                        var encryptedBytes = aesjs.utils.hex.toBytes(encrypted_data);
                                                        var aesCtr = new aesjs.ModeOfOperation.ctr(keys.raw);
                                                        var decryptedBytes = aesCtr.decrypt(encryptedBytes);
                                                        var decrypted_data = aesjs.utils.utf8.fromBytes(decryptedBytes);
                                                        if(decrypted_data)
                                                        {
                                                            var response = JSON.parse(decrypted_data);
                                                            if(
                                                                typeof cortex_sdk_callbacks == 'object'
                                                                && typeof cortex_sdk_callbacks[callback] != 'undefined'
                                                            ){
                                                                cortex_sdk_callbacks[callback](response);
                                                            }
                                                            else
                                                            {
                                                                return response;
                                                            }
                                                        }
                                                    }
                                                }
                                                else
                                                {
                                                    if(
                                                        typeof cortex_sdk_callbacks == 'object'
                                                        && typeof cortex_sdk_callbacks[callback] != 'undefined'
                                                    ){
                                                        cortex_sdk_callbacks[callback](encrypted_response);
                                                    }
                                                    else
                                                    {
                                                        return encrypted_response;
                                                    }
                                                }
                                            }
                                        );
                                    }
                                    else
                                    {
                                        holding_response.message = 'Unable to encrypt workload for shared hot wallet';
                                        if(typeof cortex != 'undefined' && typeof cortex.ux != 'undefined')
                                        {
                                            cortex.ux.modals('Warning', holding_response.message);
                                        }
                                        else
                                        {
                                            alert('Warning: ' + holding_response.message);
                                        }
                                    }
                                }
                            );
                            */
                        }
                        else
                        {
                            rebalance_response.message = 'Invalid username and password for generating new shared hot wallet';
                            if(typeof cortex != 'undefined' && typeof cortex.ux != 'undefined')
                            {
                                cortex.ux.modals('Warning', holding_response.message);
                            }
                            else
                            {
                                alert('Warning: ' + holding_response.message);
                            }
                        }
                    }
                    else
                    {
                        if(typeof cortex != 'undefined' && typeof cortex.ux != 'undefined')
                        {
                            cortex.ux.modals('Warning', holding_response.message);
                        }
                        else
                        {
                            alert('Warning: ' + holding_response.message);
                        }
                    }
                });
            }
        },
        sweeping: function()
        {   
            var form = document.getElementsByClassName(cortex_sdk.classes.sweeping)[0];
            if(form)
            {
                form.addEventListener("submit", function(e)
                {
                    
                    e.preventDefault();
                    
                    var sweeping_response = {
                        success: false,
                        message: 'All fields required in order to perform sweeping action'
                    }

                    // The following two fields are required ...
                    var email = form.getElementsByClassName(cortex_sdk.classes.email)[0].value;
                    var password = form.getElementsByClassName(cortex_sdk.classes.password)[0].value;

                    // The User ID would be be generated by client upon receiving email address ...
                    var uid = form.getElementsByClassName(cortex_sdk.classes.userid)[0].value;
                    
                    // The network and path would be be filled-in by application ...
                    var network_type = form.getElementsByClassName(cortex_sdk.classes.network)[0].value;
                    var callback_function = form.getElementsByClassName(cortex_sdk.classes.callback)[0].value;
                    
                    var callback = function(data)
                    {
                        return data;
                    }
                    if(typeof cortex_sdk_callbacks == 'object' && typeof cortex_sdk_callbacks[callback_function] != 'undefined')
                    {
                        callback = cortex_sdk_callbacks[callback_function];
                    }

                    // The salts and User ID, if provided - enables testing to be done locally ...
                    var app_salt = form.getElementsByClassName(cortex_sdk.classes.appsalt)[0].value;
                    var wallet_salt = form.getElementsByClassName(cortex_sdk.classes.walletsalt)[0].value;
                    
                    // Function specific ...
                    var uids = form.getElementsByClassName(cortex_sdk.classes.userids)[0].value;
                    var paths = form.getElementsByClassName(cortex_sdk.classes.path)[0].value;
                    var agent_dnkey = form.getElementsByClassName(cortex_sdk.classes.appkey1)[0].value;
                    var ms_dnkey_app = form.getElementsByClassName(cortex_sdk.classes.mskeyapp)[0].value;
                    var ms_dnkey_trustee = form.getElementsByClassName(cortex_sdk.classes.mskeytrust)[0].value;

                    // Only proceed if minimum required fields are supplied ...
                    if(uid && network_type && email && password && uids && paths && agent_dnkey && ms_dnkey_app && ms_dnkey_trustee)
                    {
                        var credentials = cortex_sdk.credentials.get(uid, email, password);

                        if(credentials)
                        {
                            if(typeof cortex != 'undefined' && typeof cortex.ux != 'undefined')
                            {
                                cortex.ux.loader(true, 'GENERATING');
                            }

                            var now = new Date().getTime();
                            var api_key = credentials.key;
                            
                            var path_array = [];
                            if(paths) paths = JSON.parse(paths);
                            if(paths && typeof paths == 'object' && paths.length > 0)
                            {
                                path_array = paths;
                            }
                            
                            var user_array = [];
                            if(uids) uids = JSON.parse(uids);
                            if(uids && typeof uids == 'object' && uids.length > 0)
                            {
                                user_array = uids;
                            }
                            
                            if(path_array.length > 0 && user_array.length > 0)
                            {   
                                var workload = {
                                    uid: uid,
                                    apiKey: api_key,
                                    email: bitcoin.crypto.sha256(email).toString('hex'),
                                    password: bitcoin.crypto.sha256(password).toString('hex'),
                                    secret: credentials.secret,
                                    seed: credentials.seed,
                                    ts: now,
                                    request: {
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
                                
                                cortex_sdk.actions.application.prepare(
                                    {uid: workload.uid, email: email, password: password, workload: workload},
                                    {url: 'sweeping'},
                                    function(decrypted_response)
                                    {
                                        if(
                                            decrypted_response 
                                            && typeof decrypted_response.success != 'undefined'
                                            && decrypted_response.success == true
                                        ){
                                            var response = decrypted_response.message;
                                            // FOR UX
                                            response.aid = aid;
                                            sweeping_response.success = true;
                                            sweeping_response.message = response;
                                            callback(sweeping_response);
                                        }
                                        else
                                        {
                                            sweeping_response.message = 'Invalid response for sweeping';
                                            callback(sweeping_response);
                                        }
                                    }
                                );
                            }
                            else
                            {
                                sweeping_response.message = 'At least one User ID and at least one path (in JSON format) is required in order to perform a sweeping action';
                                callback(sweeping_response);
                            }
                        }
                        else
                        {
                            sweeping_response.message = 'Invalid username and password for generating new shared hot wallet';
                            callback(sweeping_response);
                        }
                    }
                    else
                    {
                        callback(sweeping_response);
                    }
                });
            }
        },
        withdraw: function()
        {   
            var form = document.getElementsByClassName(cortex_sdk.classes.withdraw)[0];
            if(form)
            {
                form.addEventListener("submit", function(e)
                {
                    
                    e.preventDefault();
                    
                    var withdraw_response = {
                        success: false,
                        message: 'All fields required in order to perform withdraw action'
                    }

                    // The following two fields are required ...
                    var email = form.getElementsByClassName(cortex_sdk.classes.email)[0].value;
                    var password = form.getElementsByClassName(cortex_sdk.classes.password)[0].value;

                    // The User ID would be be generated by client upon receiving email address ...
                    var uid = form.getElementsByClassName(cortex_sdk.classes.userid)[0].value;
                    
                    // The network and path would be be filled-in by application ...
                    var network_type = form.getElementsByClassName(cortex_sdk.classes.network)[0].value;
                    var callback_function = form.getElementsByClassName(cortex_sdk.classes.callback)[0].value;
                    
                    var callback = function(data)
                    {
                        return data;
                    }
                    if(typeof cortex_sdk_callbacks == 'object' && typeof cortex_sdk_callbacks[callback_function] != 'undefined')
                    {
                        callback = cortex_sdk_callbacks[callback_function];
                    }

                    // The salts and User ID, if provided - enables testing to be done locally ...
                    var app_salt = form.getElementsByClassName(cortex_sdk.classes.appsalt)[0].value;
                    var wallet_salt = form.getElementsByClassName(cortex_sdk.classes.walletsalt)[0].value;
                    
                    // Function specific ...
                    var amount = form.getElementsByClassName(cortex_sdk.classes.amount)[0].value;
                    var dnkey_app = form.getElementsByClassName(cortex_sdk.classes.mskeyapp)[0].value;
                    var dnkey_trustee = form.getElementsByClassName(cortex_sdk.classes.mskeytrust)[0].value;
                    var currency = form.getElementsByClassName(cortex_sdk.classes.currency)[0].value;
                    var path = form.getElementsByClassName(cortex_sdk.classes.path)[0].value;
                    var hidden_agent_id = form.getElementsByClassName(cortex_sdk.classes.agent)[0].value;
                    
                    var chain = false;
                    if(currency == 'Bitcoin') chain = 'btc';
                    else if(currency == 'Ethereum') chain = 'eth';
                    else if(currency == 'Ripple') chain = 'xrp';

                    // Only proceed if minimum required fields are supplied ...
                    // And then?
                    if(uid && network_type && email && password)
                    {
                        var credentials = cortex_sdk.credentials.get(uid, email, password);

                        if(credentials)
                        {
                            if(typeof cortex != 'undefined' && typeof cortex.ux != 'undefined')
                            {
                                cortex.ux.loader(true, 'GENERATING');
                            }

                            var now = new Date().getTime();
                            var api_key = credentials.key;
                            var select_path = cortex_sdk.forms.path(path);
                            
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
                            cortex_sdk.actions.application.prepare(
                                {uid: workload.uid, email: email, password: password, workload: workload},
                                {url: 'withdraw'},
                                function(decrypted_response)
                                {
                                    if(
                                        decrypted_response 
                                        && typeof decrypted_response.success != 'undefined'
                                        && decrypted_response.success == true
                                    ){
                                        var response = decrypted_response.message;
                                        if(
                                            response
                                            && typeof response.txid != 'undefined'
                                        ){
                                            // FOR UX
                                            response.aid = hidden_agent_id;
                                            withdraw_response.success = true;
                                            withdraw_response.message = response;
                                            callback(withdraw_response);
                                        }
                                        else
                                        {
                                            withdraw_response.message = 'Invalid decrypted response for withdraw';
                                            callback(withdraw_response);
                                        }
                                    }
                                    else
                                    {
                                        var message = 'Invalid response for custody';
                                        if(typeof decrypted_response.message != 'undefined') message = decrypted_response.message;
                                        withdraw_response.message = message;
                                        callback(withdraw_response);
                                    }
                                }
                            );                        
                        }
                        else
                        {
                            withdraw_response.message = 'Invalid username and password for generating new shared hot wallet';
                            callback(withdraw_response);
                        }
                    }
                    else
                    {
                        callback(withdraw_response);
                    }
                });
            }
        }
    },
    classes: 
    {
        appsalt: 'cortex-form-application-salt',
        walletsalt: 'cortex-form-wallet-salt',
        email: 'cortex-form-email-address',
        password: 'cortex-form-password',
        amount: 'cortex-form-amount',
        wpassword: 'cortex-form-wallet-password',
        userid: 'cortex-form-user-id',
        agent: 'cortex-form-agent',
        userids: 'cortex-form-user-ids',
        accountid: 'cortex-form-account-id',
        network: 'cortex-form-network',
        currency: 'cortex-form-currency',
        path: 'cortex-form-path',
        path2: 'cortex-form-path2',
        callback: 'cortex-form-callback',
        deposit: 'cortex-get-deposit-address-form',
        holding: 'cortex-get-holding-address-form',
        custody: 'cortex-get-custody-address-form',
        registration: 'cortex-new-api-user-form',
        decrypt: 'cortex-form-decrypt-credentials',
        cdecrypt: 'cortex-code-decrypted-credentials',
        appkey1: 'cortex-form-appkey1',
        appkey2: 'cortex-form-appkey2',
        mskeyapp: 'cortex-form-mskeyapp',
        mskeytrust: 'cortex-form-mskeytrust',
        mskeyapp2: 'cortex-form-mskeyapp2',
        mskeytrust2: 'cortex-form-mskeytrust2',
        appsign2: 'cortex-form-appsign2',
        trustkey1: 'cortex-form-trustkey1',
        trustsign1: 'cortex-form-trustsign1',
        trustkey2: 'cortex-form-trustkey2',
        trustsign2: 'cortex-form-trustsign2',
        message: 'cortex-form-message',
        txid: 'cortex-form-txid',
        from: 'cortex-form-from',
        msrecovery: 'cortex-recover-ms-tx-form',
        sweeping: 'cortex-sweep-deposit-addresses-form',
        withdraw: 'cortex-withdraw-custody-form',
        rebalance: 'cortex-hot-rebalance-form'
    },
    credentials:
    {
        get: function(uid = false, email = false, password = false)
        {
            var credentials = false;
            var encrypted_data = localStorage.getItem('cortex_api_credentials_user_' + uid);
            var key_hash = EthJS.Util.sha256(email + password).toString('hex');
            var keys = cortex_sdk.keys(key_hash);
            var encryptedBytes = aesjs.utils.hex.toBytes(encrypted_data);
            var aesCtr = new aesjs.ModeOfOperation.ctr(keys.raw);
            var decryptedBytes = aesCtr.decrypt(encryptedBytes);
            var decrypted_data = aesjs.utils.utf8.fromBytes(decryptedBytes);
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
        },
        store: function(
            credentials = {key: false, uid: false, secret: false, seed: false}, 
            email = false, password = false
        )
        {
            if(
                credentials
                && typeof credentials.key != 'undefined'
                && typeof credentials.uid != 'undefined'
                && typeof credentials.secret != 'undefined'
                && typeof credentials.seed != 'undefined'
            ){
                var data = JSON.stringify(credentials);
                var key_hash = bitcoin.crypto.sha256(email + password).toString('hex');
                var keys = cortex_sdk.keys(key_hash);
                var textBytes = aesjs.utils.utf8.toBytes(data);
                var aesCtr = new aesjs.ModeOfOperation.ctr(keys.raw);
                var encryptedBytes = aesCtr.encrypt(textBytes);
                var encrypted_data = aesjs.utils.hex.fromBytes(encryptedBytes);  
                localStorage.setItem(
                    'cortex_api_credentials_user_' + credentials.uid, 
                    encrypted_data
                );
            }
        }
    },
    init: function(evt = false)
    {
        cortex_sdk.forms.init();
    },
    keys: function(seed = false)
    {
        var network = 'bitcoin';
        var blockchain = bitcoin.networks[network];
        var hash = bitcoin.crypto.sha256(seed);
        var raw_keys = bitcoin.HDNode.fromSeedBuffer(hash, blockchain);
        var key_pair = {
            address: raw_keys.pubKey.getAddress(blockchain).toString('hex'),
            public_key: raw_keys.pubKey.toHex(),
            private_key: raw_keys.privKey.toWIF(blockchain),
            raw: bitcoin.ECKey.fromWIF(raw_keys.privKey.toWIF(blockchain)).d.toBuffer()
        };
        return key_pair;
    }
};

/*

LOAD SDK

*/

if(window.attachEvent) 
{
    window.attachEvent('onload', cortex_sdk.init());
} 
else 
{
    if(window.onload)
    {
        var curronload = window.onload;
        var newonload = function(evt) 
        {
            curronload(evt);
            cortex_sdk.init(evt);
        };
        window.onload = newonload;
    } 
    else 
    {
        window.onload = cortex_sdk.init();
    }
}
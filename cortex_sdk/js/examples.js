var wp_user_salt = 'temporary-user-salt';

var cortex_sdk_callbacks = 
{
    deposit: function(res)
    {
        console.log('callbacks.deposit.results', res);
        var alert_text = 'Unable to get deposit address';
        if(
            res
            && typeof res.success != 'undefined'
            && res.success === true
        )
        {
            var response = res.message;
            alert_text = "BTC Address: " + response.accounts[0].address;
            alert_text+= "\nBTC Balance: " + response.accounts[0].balances.str;
            alert_text+= "\nBTC TXs: " + response.accounts[0].txs;
            alert_text+= "\n";
            alert_text+= "\nETH Address: " + response.accounts[1].address;
            alert_text+= "\nETH Balance: " + response.accounts[1].balances.str;
            alert_text+= "\nETH TXs: " + response.accounts[1].txs;
            alert_text+= "\n";
            alert_text+= "\nXRP Address: " + response.accounts[2].address;
            alert_text+= "\nXRP Balance: " + response.accounts[2].balances.str;
            alert_text+= "\nXRP TXs: " + response.accounts[2].txs;
        }
        else
        {
            if(typeof res.message != 'undefined' && res.message)
            {
                alert_text = 'Deposit error: ' + res.message;
            }
        }
        alert(alert_text);
    },
    custody: function(res)
    {
        console.log('callbacks.custody.results', res);
        var alert_text = 'Unable to get custody address';
        if(
            res
            && typeof res.success != 'undefined'
            && res.success === true
        )
        {
            var response = res.message;
            alert_text = "BTC Address: " + response.accounts[0].address;
            alert_text+= "\nBTC Balance: " + response.accounts[0].balances.str;
            alert_text+= "\nBTC TXs: " + response.accounts[0].txs;
            alert_text+= "\n";
            alert_text+= "\nETH Address: " + response.accounts[1].address;
            alert_text+= "\nETH Balance: " + response.accounts[1].balances.str;
            alert_text+= "\nETH TXs: " + response.accounts[1].txs;
            alert_text+= "\n";
            alert_text+= "\nXRP Address: " + response.accounts[2].address;
            alert_text+= "\nXRP Balance: " + response.accounts[2].balances.str;
            alert_text+= "\nXRP TXs: " + response.accounts[2].txs;
        }
        else
        {
            if(typeof res.message != 'undefined' && res.message)
            {
                alert_text = 'Custody error: ' + res.message;
            }
        }
        alert(alert_text);
    },
    holding: function(res)
    {
        console.log('callbacks.holding.results', res);
        var alert_text = 'Unable to get holding address';
        if(
            res
            && typeof res.success != 'undefined'
            && res.success === true
        )
        {
            var response = res.message;
            if(
                typeof response.btc != 'undefined'
                && typeof response.eth != 'undefined'
                && typeof response.xrp != 'undefined'
            )
            {
                alert_text = "BTC Address: " + response.btc.address;
                alert_text+= "\n";
                alert_text+= "\nBTC xPub: " + response.btc.xpub;
                alert_text+= "\n";
                alert_text+= "\nETH Address: " + response.eth.address;
                alert_text+= "\n";
                alert_text+= "\nXRP Address: " + response.xrp.address;
            }
            else if(
                typeof response.id !== 'undefined'
                && typeof response.accounts == 'object'
                && response.accounts.length > 0
            )
            {
                alert_text = "BTC Address: " + response.accounts[0].address;
                alert_text+= "\nBTC Balance: " + response.accounts[0].balances.str;
                alert_text+= "\nBTC TXs: " + response.accounts[0].txs;
                alert_text+= "\n";
                alert_text+= "\nETH Address: " + response.accounts[1].address;
                alert_text+= "\nETH Balance: " + response.accounts[1].balances.str;
                alert_text+= "\nETH TXs: " + response.accounts[1].txs;
                alert_text+= "\n";
                alert_text+= "\nXRP Address: " + response.accounts[2].address;
                alert_text+= "\nXRP Balance: " + response.accounts[2].balances.str;
                alert_text+= "\nXRP TXs: " + response.accounts[2].txs;
            }
        }
        else
        {
            if(typeof res.message != 'undefined' && res.message)
            {
                alert_text = 'Holding error: ' + res.message;
            }
        }
        alert(alert_text);
    },
    rebalance: function(res)
    {
        console.log('callbacks.rebalance.results', res);
        var alert_text = 'Unable to get rebalance results';
        if(
            res
            && typeof res.success != 'undefined'
            && res.success === true
        )
        {
            var response = res.message;
            if(typeof response.accounts == 'object' && typeof response.rebalances == 'object')
            {
                alert_text = 'Rebalance Not Required';
                if(response.rebalances.length > 0)
                {
                    alert_text = 'Rebalance Results Available';
                    jQuery.each(response.rebalances, function(i)
                    {
                        var tx = response.rebalances[i];
                        var decimals = 8;
                        var text = 'Send to Holding: ';
                        if(tx.symbol == 'eth') decimals = 18;
                        else if(tx.symbol == 'xrp') decimals = 6;
                        var value = parseFloat(tx.value / (10 ** decimals));
                        if(tx.destination == 'withdraw')
                        {
                            text = 'Send to Withdrawal: '
                        }
                        text+= value;
                        jQuery('#cortex-rebalance-results-' + tx.symbol + '-address').val(tx.from);
                        jQuery('#cortex-rebalance-results-' + tx.symbol + '-addressed').val(tx.to);
                        jQuery('#cortex-rebalance-results-' + tx.symbol + '-status').val(text);
                    })
                }
            }
            else if(typeof response == 'object' && response.length > 0)
            {
                alert_text = 'Rebalance Results Available';
                jQuery.each(response, function(i)
                {
                    var tx = response[i];
                    var text = 'Transaction Needs Signing: ';
                    var decimals = 8;
                    if(tx.account.symbol == 'eth') decimals = 18;
                    else if(tx.account.symbol == 'xrp') decimals = 6;
                    var value = parseFloat(tx.account.value / (10 ** decimals));
                    var txid = tx.tx;
                    if(tx.txid)
                    {
                        text = 'Transaction Sent: ';
                        txid = tx.txid;
                    }
                    text+= value;
                    jQuery('#cortex-rebalance-results-' + tx.account.symbol + '-address').val(tx.account.from);
                    jQuery('#cortex-rebalance-results-' + tx.account.symbol + '-addressed').val(tx.account.to);
                    jQuery('#cortex-rebalance-results-' + tx.account.symbol + '-status').val(text);
                    jQuery('#cortex-rebalance-results-' + tx.account.symbol + '-tx').val(txid);
                });
            }
            else
            {
                alert_text = 'Rebalance Not Required';
            }
        }
        else
        {
            if(typeof res.message != 'undefined' && res.message)
            {
                alert_text = 'Rebalance error: ' + res.message;
            }
        }
        alert(alert_text);
    },
    register: function(uid = false)
    {
        console.log('callbacks.register.results', uid);
        var alert_text = 'Unable to get returned register data';
        if(uid)
        {
            alert_text = 'We have successfully registered User ID ' + uid + ' with both the application and the wallet API';
        }
        else
        {
            if(typeof res.message != 'undefined' && res.message)
            {
                alert_text = 'Register error: ' + res.message;
            }
        }
        alert(alert_text);
    },
    sweeping: function(res = false)
    {
        console.log('callbacks.sweeping.results', res);
        var alert_text = 'Unable to get sweeping results';
        if(
            res
            && typeof res.success != 'undefined'
            && res.success === true
        )
        {
            var response = res.message;
            alert_text = '';
            if(typeof response == 'object' && response.length > 0)
            {
                jQuery.each(response, function(i)
                {
                    if(i>0) alert_text+= "\n";
                    alert_text+= "BTC Address: " + response[i].btc.address;
                    if(response[i].btc.txid)
                    {
                        alert_text+= "\nBTC TXID: " + response[i].btc.txid;
                    }
                    else
                    {
                        alert_text+= "\nBTC TXID: " + response[i].btc.message;
                    }
                    alert_text+= "\n";
                    alert_text+= "\nETH Address: " + response[i].eth.address;
                    if(response[i].eth.txid)
                    {
                        alert_text+= "\nETH TXID: " + response[i].eth.txid;
                    }
                    else
                    {
                        alert_text+= "\nETH TXID: " + response[i].eth.message;
                    }
                    alert_text+= "\n";
                    alert_text+= "\nXRP Address: " + response[i].xrp.address;
                    if(response[i].xrp.txid)
                    {
                        alert_text+= "\nXRP TXID: " + response[i].xrp.txid;
                    }
                    else
                    {
                        alert_text+= "\nXRP TXID: " + response[i].xrp.message;
                    }
                });
            }
        }
        else
        {
            if(typeof res.message != 'undefined' && res.message)
            {
                alert_text = 'Sweeping error: ' + res.message;
            }
        }
        alert(alert_text);
    },
    withdraw: function(res = false, error = false)
    {
        console.log('callbacks.withdraw.results', res);
        var alert_text = 'Unable to get withdrawal results';
        if(
            res
            && typeof res.success != 'undefined'
            && res.success === true
        )
        {
            var response = res.message;
            if(typeof response.txid != 'undefined')
            {
                alert('Success - TXID: ' + response.txid);
            }
        }
        else
        {
            if(typeof res.message != 'undefined' && res.message)
            {
                alert_text = 'Withdraw error: ' + res.message;
            }
        }
        alert(alert_text);
    }
};

var cortex_sdk_ux = 
{
    init: function()
    {
        var date = new Date().toString().split(' ');
        var message_to_sign = 'New Shared Hot Wallet on ' + date[0] + ' ' + date[1] + ' ' + date[2] + ' ' + date[3];
        var input = document.getElementById('cortex-hot-new-message');
        if(input) input.value = message_to_sign;
    }
}

/*

LOAD UX

*/

if(window.attachEvent) 
{
    window.attachEvent('onload', cortex_sdk_ux.init());
} 
else 
{
    if(window.onload)
    {
        var curronload = window.onload;
        var newonload = function(evt) 
        {
            curronload(evt);
            cortex_sdk_ux.init(evt);
        };
        window.onload = newonload;
    } 
    else 
    {
        window.onload = cortex_sdk_ux.init();
    }
}
var wp_user_salt = 'temporary-user-salt';

var cortex_sdk_callbacks = 
{
    deposit: function(res)
    {
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
        alert(alert_text);
    },
    custody: function(res)
    {
        console.log('res', res);
        var alert_text = 'Unable to get custody address';
        if(
            res
            && typeof res.success != 'undefined'
            && res.success === true
        )
        {
            
        }
        alert(alert_text);
    },
    holding: function(res)
    {
        console.log('res', res);
        var alert_text = 'Unable to get holding address';
        if(
            res
            && typeof res.success != 'undefined'
            && res.success === true
        )
        {
            
        }
        alert(alert_text);
    },
    rebalance: function(res)
    {
        console.log('res', res);
        var alert_text = 'Unable to get rebalance results';
        if(
            res
            && typeof res.success != 'undefined'
            && res.success === true
        )
        {
            
        }
        alert(alert_text);
    },
    register: function(uid = false)
    {
        var alert_text = 'Unable to get returned register data';
        if(uid)
        {
            alert_text = 'We have successfully registered User ID ' + uid + ' with both the application and the wallet API';
        }
        alert(alert_text);
    },
    sweeping: function(res = false)
    {
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
                    alert_text+= "ETH Address: " + response[i].eth.address;
                    if(response[i].eth.txid)
                    {
                        alert_text+= "\nETH TXID: " + response[i].eth.txid;
                    }
                    else
                    {
                        alert_text+= "\nETH TXID: " + response[i].eth.message;
                    }
                    alert_text+= "\n";
                    alert_text+= "XRP Address: " + response[i].xrp.address;
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
        alert(alert_text);
    },
    withdraw: function(res = false, error = false)
    {
        console.log('res', res);
        var alert_text = 'Unable to get withdrawal results';
        if(
            res
            && typeof res.success != 'undefined'
            && res.success === true
        )
        {
            
        }
        alert(alert_text);
    }
};
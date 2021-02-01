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
            && typeof res.message != 'undefined'
            && typeof res.message.accounts == 'object'
            && res.message.accounts.length == 4
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
            alert_text+= "\n";
            alert_text+= "\nLTC Address: " + response.accounts[3].address;
            alert_text+= "\nLTC Balance: " + response.accounts[3].balances.str;
            alert_text+= "\nLTC TXs: " + response.accounts[3].txs;
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
            alert_text+= "\n";
            alert_text+= "\nLTC Address: " + response.accounts[3].address;
            alert_text+= "\nLTC Balance: " + response.accounts[3].balances.str;
            alert_text+= "\nLTC TXs: " + response.accounts[3].txs;
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
                && typeof response.ltc != 'undefined'
            )
            {
                alert_text = "BTC Address: " + response.btc.address;
                alert_text+= "\n";
                alert_text+= "\nBTC xPub: " + response.btc.xpub;
                alert_text+= "\n";
                alert_text+= "\nETH Address: " + response.eth.address;
                alert_text+= "\n";
                alert_text+= "\nXRP Address: " + response.xrp.address;
                alert_text+= "\n";
                alert_text+= "\nLTC Address: " + response.ltc.address;
                alert_text+= "\n";
                alert_text+= "\nLTC xPub: " + response.ltc.xpub;
                alert_text+= "\n";
            }
            else if(
                typeof response.id !== 'undefined'
                && typeof response.accounts == 'object'
                && response.accounts.length == 4
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
                alert_text+= "\n";
                alert_text+= "\nLTC Address: " + response.accounts[3].address;
                alert_text+= "\nLTC Balance: " + response.accounts[3].balances.str;
                alert_text+= "\nLTC TXs: " + response.accounts[3].txs;
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
                    else if(!tx.tx)
                    {
                        text = 'Error: ';
                        value = tx.message;
                        txid = 'N/A';
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
                    alert_text+= "\n";
                    alert_text+= "\nLTC Address: " + response[i].ltc.address;
                    if(response[i].ltc.txid)
                    {
                        alert_text+= "\nLTC TXID: " + response[i].ltc.txid;
                    }
                    else
                    {
                        alert_text+= "\nLTC TXID: " + response[i].ltc.message;
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
    },
    recovering: function(response = false)
    {
        var contents = 'Unable to peform recovering action';
        if(response && typeof response.message == 'object' && response.message.length > 0)
        {
            contents = 'Recovering Complete';
            jQuery.each(response.message, function(i)
            {
                var this_btc_value = response.message[i].btc.message;
                var this_eth_value = response.message[i].eth.message;
                var this_xrp_value = response.message[i].xrp.message;
                var this_ltc_value = response.message[i].ltc.message;
                if(response.message[i].btc.txid) this_btc_value = response.message[i].btc.txid;
                if(response.message[i].eth.txid) this_eth_value = response.message[i].eth.txid;
                if(response.message[i].xrp.txid) this_xrp_value = response.message[i].xrp.txid;
                if(response.message[i].ltc.txid) this_ltc_value = response.message[i].ltc.txid;

                contents+= "\n";
                contents+= "\n";
                contents+= "BTC: " + this_btc_value + "\nAddress: " + response.message[i].btc.address;
                contents+= "\n";
                contents+= "\n";
                contents+= "LTC: " + this_ltc_value + "\nAddress: " + response.message[i].ltc.address;
                contents+= "\n";
                contents+= "\n";
                contents+= "ETH: " + this_eth_value + "\nAddress: " + response.message[i].eth.address;
                contents+= "\n";
                contents+= "\n";
                contents+= "XRP: " + this_xrp_value + "\nAddress: " + response.message[i].xrp.address;
            });
            alert(contents);
        }
        else
        {
            alert(contents);
        }
    },
    notifications: function(res = false)
    {
        console.log('res', res);
        var title = 'Warning';
        var contents = 'Unknown error whilst performing notifications';
        if(
            res
            && typeof res.success != 'undefined'
            && res.success === true
        )
        {
            var response = res.message;
            if(
                typeof response == 'object'
                && typeof response.balance != 'undefined'
                && typeof response.incomings == 'object'
                && typeof response.lastUpdated != 'undefined'
                && typeof response.outgoings == 'object'
                && typeof response.tx_count != 'undefined'
                && typeof response.address != 'undefined'
                && typeof response.network != 'undefined'
                && typeof response.currency != 'undefined'
                && typeof response.chain  != 'undefined'
            )
            {
                var these_txs = [];
                var got_txs = false;
                
                if(response.tx_count > 0) got_txs = true;
                if(response.incomings.length > 0)
                {
                    jQuery.each(response.incomings, function(ins){
                        these_txs.push({
                            txid: response.incomings[ins].txid,
                            ts: response.incomings[ins].ts,
                            ago: response.incomings[ins].ago,
                            block: response.incomings[ins].block,
                            confirmations: response.incomings[ins].confirmations,
                            ins: response.incomings[ins].ins,
                            outs: false,
                            incoming: true,
                            outgoing: false,
                            value: response.incomings[ins].value,
                            fees: 'N/A'
                        });
                    });
                }
                if(response.outgoings.length > 0)
                {
                    jQuery.each(response.outgoings, function(outs){
                        these_txs.push({
                            txid: response.outgoings[outs].txid,
                            ts: response.outgoings[outs].ts,
                            ago: response.outgoings[outs].ago,
                            block: response.outgoings[outs].block,
                            confirmations: response.outgoings[outs].confirmations,
                            ins: false,
                            outs: response.outgoings[outs].outs,
                            incoming: false,
                            outgoing: true,
                            value: response.outgoings[outs].value,
                            fees: response.outgoings[outs].fees
                        });
                    });
                }
                
                these_txs.sort((a,b) => (a.block < b.block) ? 1 : ((b.block < a.block) ? -1 : 0));
                
                var tx_data = {
                    explorer: {
                        type: 'Address',
                        id: response.address,
                        network: response.network,
                        currency: response.currency,
                        chain: response.chain,
                        updated: response.updated,
                        updated_ago: jQuery.timeago(response.updated),
                        address: {
                            got_txs: got_txs,
                            got_pending: false,
                            pending: 0,
                            balance: response.balance,
                            received: 'N/A',
                            tx_count: response.tx_count,
                            txs: these_txs
                        }
                    }
                };

                var tx_html = jQuery('.lookup-tx-history-hidden').html();
                var html = cortex_sdk_ux.html(tx_html, tx_data, false);
                jQuery('.lookup-tx-history').html(html);
                jQuery('.lookup-tx-history').removeClass('hidden');
                jQuery('.lookup-tx-history-alert').addClass('hidden');
                jQuery('body').find('.qr-holder').each(function()
                {
                    if(jQuery(this).find('img').length > 0)
                    {
                        jQuery(this).find('img').remove();
                    }
                    jQuery(this).qrcode({
                        render: 'image',
                        text: jQuery(this).attr('data-content')
                    });
                });
                jQuery('body').removeClass('cortex-loading');
            }
            else if(
                response
                && typeof response.callbackUrl != 'undefined'
                && typeof response.currency != 'undefined'
                && typeof response.conditions != 'undefined'
                && typeof response.address != 'undefined'
            )
            {
                if(response.status == 'active')
                {
                    title = 'Tracker Activated';
                    var conditions = JSON.stringify(response.conditions);
                    contents = response.currency + ' Address Tracker: ' + response.address + ' | Callback URL: ' + response.callbackUrl + ' | Conditions: ' + conditions;
                    alert(contents);
                }
                else if(response.status == 'inactive')
                {
                    title = 'Tracker De-Activated';
                    alert(title);
                }
            }
            else if(
                response
                && typeof response.notifications == 'object'
                && response.notifications.length > 0
            ){
                var tx_data = {
                    explorer: []
                };
                jQuery.each(response.notifications, function(n)
                {
                    var this_notification = response.notifications[n];
                    
                    var these_txs = [];
                    var got_txs = false;

                    if(this_notification.tx_count > 0) got_txs = true;
                    if(this_notification.incomings.length > 0)
                    {
                        jQuery.each(this_notification.incomings, function(ins){
                            these_txs.push({
                                txid: this_notification.incomings[ins].txid,
                                ts: this_notification.incomings[ins].ts,
                                ago: this_notification.incomings[ins].ago,
                                block: this_notification.incomings[ins].block,
                                confirmations: this_notification.incomings[ins].confirmations,
                                ins: this_notification.incomings[ins].ins,
                                outs: false,
                                incoming: true,
                                outgoing: false,
                                value: this_notification.incomings[ins].value,
                                fees: 'N/A'
                            });
                        });
                    }
                    if(this_notification.outgoings.length > 0)
                    {
                        jQuery.each(this_notification.outgoings, function(outs){
                            these_txs.push({
                                txid: this_notification.outgoings[outs].txid,
                                ts: this_notification.outgoings[outs].ts,
                                ago: this_notification.outgoings[outs].ago,
                                block: this_notification.outgoings[outs].block,
                                confirmations: this_notification.outgoings[outs].confirmations,
                                ins: false,
                                outs: this_notification.outgoings[outs].outs,
                                incoming: false,
                                outgoing: true,
                                value: this_notification.outgoings[outs].value,
                                fees: this_notification.outgoings[outs].fees
                            });
                        });
                    }

                    these_txs.sort((a,b) => (a.block < b.block) ? 1 : ((b.block < a.block) ? -1 : 0));

                    tx_data.explorer.push({
                        type: 'Address',
                        id: this_notification.address,
                        network: this_notification.network,
                        currency: this_notification.currency,
                        chain: this_notification.chain,
                        updated: this_notification.ts,
                        updated_ago: jQuery.timeago(this_notification.ts),
                        address: {
                            got_txs: got_txs,
                            got_pending: false,
                            pending: 0,
                            balance: this_notification.balance,
                            received: 'N/A',
                            tx_count: this_notification.tx_count,
                            txs: these_txs
                        }
                    });
                });
                
                var tx_html = jQuery('.lookup-tx-history-hidden').html();
                var html = cortex_sdk_ux.html(tx_html, tx_data, false);
                jQuery('.lookup-tx-history').html(html);
                jQuery('.lookup-tx-history').removeClass('hidden');
                jQuery('.lookup-tx-history-alert').addClass('hidden');
                jQuery('body').find('.qr-holder').each(function()
                {
                    if(jQuery(this).find('img').length > 0)
                    {
                        jQuery(this).find('img').remove();
                    }
                    jQuery(this).qrcode({
                        render: 'image',
                        text: jQuery(this).attr('data-content')
                    });
                });
                jQuery('body').removeClass('cortex-loading');
            }
        }
        else
        {
            if(res && typeof res.message != 'undefined')
            {
                contents = res.message;
            }
            alert(title + ': ' + contents);
        }
    }
};

var cortex_markdown_data = {
    urls: {
        api: "client.credence.app"
    }
}

var cortex_sdk_ux = 
{
    html: function(html_input, data_input, element = '#cortex-html-wrapper')
    {
        var html = Mustache.render(html_input, data_input);
        if(element) jQuery(element).html(html);
        else return html;
    },
    init: function()
    {
        var date = new Date().toString().split(' ');
        var message_to_sign = 'New Shared Hot Wallet on ' + date[0] + ' ' + date[1] + ' ' + date[2] + ' ' + date[3];
        var input = document.getElementById('cortex-hot-new-message');
        if(input) input.value = message_to_sign;
        cortex_sdk_ux.lookup();
    },
    lookup: function()
    {
        jQuery('body').on('submit', 'form.cortex-lookup-form', function(e)
        {
            e.preventDefault();
            var address = jQuery(this).find('.cortex-form-address').val();
            var chain = jQuery(this).find('.cortex-form-chain').val();
            var network = jQuery(this).find('.cortex-form-network').val();
            if(address && chain && network)
            {
                jQuery('body').addClass('cortex-loading');
                var settings = {
                    "url": cortex_sdk_config.apis.wallet + "../" + chain + "/transactions/",
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
                jQuery.ajax(settings).done(function (res) {
                    if(res && typeof res.success != 'undefined' && res.success === true)
                    {
                        var tx_data = {
                            explorer: res.rdata
                        };
                        var tx_html = jQuery('.lookup-tx-history-hidden').html();
                        var html = cortex_sdk_ux.html(tx_html, tx_data, false);
                        jQuery('.lookup-tx-history').html(html);
                        jQuery('.lookup-tx-history').removeClass('hidden');
                        jQuery('.lookup-tx-history-alert').addClass('hidden');
                        var address_html = jQuery('.lookup-address-history-hidden').html();
                        var addressed_html = cortex_sdk_ux.html(address_html, tx_data, false);
                        jQuery('.lookup-address-history').html(addressed_html);
                        jQuery('.lookup-address-history').removeClass('hidden');
                        jQuery('.lookup-address-history-alert').addClass('hidden');
                        jQuery('body').find('.qr-holder').each(function()
                        {
                            if(jQuery(this).find('img').length > 0)
                            {
                                jQuery(this).find('img').remove();
                            }
                            jQuery(this).qrcode({
                                render: 'image',
                                text: jQuery(this).attr('data-content')
                            });
                        });
                        jQuery('body').removeClass('cortex-loading');
                    }
                });
            }
        })
    },
    md: function(md, element = '#cortex-md-wrapper')
    {
        var markdown = new markdownit();
        var html = markdown.render(md);
        jQuery(element).html(html);
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
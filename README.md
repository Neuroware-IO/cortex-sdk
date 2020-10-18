## Cortex SDK

The Cortex SDK is used to communicate with the Credent Hot Wallet.

Credence utilizes the `cortex_sdk.actions.application.prepare()` function for all interactions other than __registration__, which is the only API end-point that does not use encrypted workloads.

By including the Cortex SDK in any HTML application, the following form functions will be automatically initiated:

```
cortex_sdk.forms.registration();
cortex_sdk.forms.deposit();
cortex_sdk.forms.holding();
cortex_sdk.forms.custody();
cortex_sdk.forms.sweeping();
cortex_sdk.forms.rebalance();
cortex_sdk.forms.withdraw();
```

`cortex_sdk.forms.registration`
-------------------------------
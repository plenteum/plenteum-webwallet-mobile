"use strict";
var global = typeof window !== 'undefined' ? window : self;
global.config = {
    apiUrl: 'https://wallet.mobile.plenteum.com/api/',
    mainnetExplorerUrl: "http://block-explorer.plenteum.com",
    coinUnitPlaces: 8,
    coinDisplayUnitPlaces: 2,
    txMinConfirms: 20,
    txCoinbaseMinConfirms: 20,
    addressPrefix: 18181,
    integratedAddressPrefix: 18181,
    feePerKB: new JSBigInt('0'),
    dustThreshold: new JSBigInt('1000000'),
    defaultMixin: 0,
    idleTimeout: 30,
    idleWarningDuration: 20,
    coinSymbol: 'PLE',
    coinName: 'Plenteum',
    coinUriPrefix: 'plenteum:',
    avgBlockTime: 120,
    maxBlockNumber: 500000000,
};

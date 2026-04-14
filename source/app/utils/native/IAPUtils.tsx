// app/utils/native/IAPUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var10 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var11;
    var1 = function serializePurchaseResponse(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 8;
            var1 = var4[var1];
            var5 = undefined;
            var6 = var3.bind(var5)(var1);
            var1 = var2.transactionId;
            var4 = null;
            var3 = var4 != var1;
            var1 = 'should have transactionId';
            var1 = var6.bind(var5)(var3, var1);
            var1 = {};
            var3 = var2.originalTransactionDateIOS;
            var1['originalTransactionDate'] = var3;
            var3 = var2.originalTransactionIdentifierIOS;
            var4 = var4 != var3;
            var3 = undefined;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = global;
            var6 = var4.parseInt;
            var4 = var2.originalTransactionIdentifierIOS;
            var3 = var6.bind(var5)(var4);
case 2:
            var1['originalTransactionIdentifier'] = var3;
            var3 = var2.transactionDate;
            var1['transactionDate'] = var3;
            var3 = global;
            var4 = var3.parseInt;
            var3 = var2.transactionId;
            var3 = var4.bind(var5)(var3);
            var1['transactionIdentifier'] = var3;
            var3 = var2.productId;
            var1['productIdentifier'] = var3;
            var3 = var2.transactionReceipt;
            var1['transactionReceipt'] = var3;
            var2 = var2.verificationResultIOS;
            var1['jwsRepresentation'] = var2;
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var7 = function convertToUUID(arg1) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 13;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.v5;
        var2 = _closure1_slot8;
        var1 = arg1;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var7;
    var1 = function _restorePurchases() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var2 = arg1;
                    var3 = var2.fullRestore;
                    var10 = undefined;
                    var _closure4_slot0 = var10;
                    SaveGenerator(address=31);
case 6:
                    return var10;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var5 = _closure1_slot14;
                    var5 = var5.bind(var10)();
                    if(var5) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var5 = new Array(0);
                    return var5;
case 10:
                    var7 = _closure1_slot10;
                    if(var3) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var3 = var7.getPendingTransactions;
                    var3 = var3.bind(var7)();
                    SaveGenerator(address=85);
case 14:
                    return var3;
case 15:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                    var8 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var5 = 12;
                    var9 = var12[var5];
                    var13 = var8.bind(var10)(var9);
                    var11 = var13.map;
                    var9 = function(arg1) {
                        var1 = arg1;
                        var1 = var1.id;
                        return var1;
                    };
                    var9 = var11.bind(var13)(var3, var9);
                    _closure4_slot0 = var9;
                    var5 = var12[var5];
                    var11 = var8.bind(var10)(var5);
                    var9 = var11.filter;
                    var8 = _closure1_slot0;
                    var5 = 14;
                    var5 = var12[var5];
                    var12 = var8.bind(var10)(var5);
                    var8 = var12.getAvailablePurchases;
                    var5 = {};
                    var13 = false;
                    var5['onlyIncludeActiveItems'] = var13;
                    var8 = var8.bind(var12)(var5);
                    SaveGenerator(address=188);
case 18:
                    return var8;
case 19:
                    ResumeGenerator(result_out_reg=7, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 20; continue _fun0002 }
case 21:
                    var5 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var2 = arg1;
                            var3 = var2.transactionId;
                            var1 = null;
                            var1 = var1 != var3;
                            if(!var1) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                            var4 = _closure4_slot0;
                            var3 = var4.includes;
                            var5 = global;
                            var6 = var5.parseInt;
                            var5 = var2.transactionId;
                            var2 = undefined;
                            var2 = var6.bind(var2)(var5);
                            var1 = var3.bind(var4)(var2);
case 22:
                            return var1;
                        }
                    };
                    var11 = var9.bind(var11)(var8, var5);
                    var9 = var11.map;
                    var5 = function(arg1) {
                        var4 = arg1;
                        var1 = {};
                        var1['originalPurchase'] = var4;
                        var3 = _closure1_slot11;
                        var2 = undefined;
                        var2 = var3.bind(var2)(var4);
                        var1['purchaseResponse'] = var2;
                        return var1;
                    };
                    var5 = var9.bind(var11)(var5);
                    _fun0002_ip = 24; continue _fun0002;
case 20:
                    return var8;
case 16:
                    return var3;
case 12:
                    var3 = var7.sync;
                    var3 = var3.bind(var7)();
                    SaveGenerator(address=242);
case 25:
                    return var3;
case 26:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=6);
                    if(var7) { _fun0002_ip = 27; continue _fun0002 }
case 28:
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var7 = 12;
                    var7 = var11[var7];
                    var8 = var8.bind(var10)(var7);
                    var7 = var8.map;
                    var9 = _closure1_slot0;
                    var4 = 14;
                    var4 = var11[var4];
                    var10 = var9.bind(var10)(var4);
                    var9 = var10.getAvailablePurchases;
                    var4 = {};
                    var11 = false;
                    var4['onlyIncludeActiveItems'] = var11;
                    var4 = var9.bind(var10)(var4);
                    SaveGenerator(address=313);
case 29:
                    return var4;
case 30:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=8);
                    if(var9) { _fun0002_ip = 31; continue _fun0002 }
case 32:
                    var6 = function(arg1) {
                        var4 = arg1;
                        var1 = {};
                        var1['originalPurchase'] = var4;
                        var3 = _closure1_slot11;
                        var2 = undefined;
                        var2 = var3.bind(var2)(var4);
                        var1['purchaseResponse'] = var2;
                        return var1;
                    };
                    var5 = var7.bind(var8)(var4, var6);
case 24:
                    return var5;
case 31:
                    return var4;
case 27:
                    return var3;
case 8:
                    return var2;
case 4:
                    return var1;
                }
            };
            var2 = var1.next;
            var2 = var2.bind(var1)();
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var6 = function isStorekit2Available() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var3 = undefined;
            var4 = var4.bind(var3)(var1);
            var1 = var4.isIOS;
            var1 = var1.bind(var4)();
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
case 34:
            var5 = _closure1_slot10;
            var4 = null;
            var4 = var4 == var5;
            var3 = undefined;
            if(var4) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var4 = _closure1_slot10;
            var2 = var4.isAvailable;
            var3 = var2.bind(var4)();
case 35:
            var2 = 1;
            var1 = var2 === var3;
case 33:
            return var1;
        }
    };
    var _closure1_slot14 = var6;
    var5 = function remapStorefront(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot4;
            var1 = var2.countryCode;
            var7 = undefined;
            var3 = var3.bind(var7)(var1);
            var4 = var2.currency;
            var1 = null;
            if(!(var1 != var4)) { _fun0005_ip = 10; continue _fun0005 }
case 37:
            var6 = _closure1_slot7;
            var8 = var2.currency;
            var4 = var8.toUpperCase;
            var4 = var4.bind(var8)();
            var4 = var6[var4];
            _fun0005_ip = 38; continue _fun0005;
case 10:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 17;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var5 = var5.GeneratedPaymentCurrenciesSets;
            var5 = var5.APPLE_STORE_COUNTRY_CURRENCIES;
            var4 = var5[var3];
            if(!(var1 != var4)) { _fun0005_ip = 39; continue _fun0005 }
case 38:
            var1 = {};
            var1['currency'] = var4;
            var1['country'] = var3;
            return var1;
case 39:
            var1 = global;
            var3 = var1.Error;
            var4 = var2.countryCode;
            var1 = var1.HermesInternal;
            var2 = var1.concat;
            var1 = 'Unable to get currency from countryCode ';
            var9 = var2.bind(var1)(var4);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var10 = var2;
            var1 = new var10[var3](var9, var8);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var _closure1_slot15 = var5;
    var4 = function fetchStoreFront() {
        var1 = undefined;
        var4 = _closure1_slot16;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var1 = function _fetchStoreFront() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                    var5 = undefined;
                    var6 = undefined;
                    var3 = _closure1_slot14;
                    var3 = var3.bind(var5)();
                    if(var3) { _fun0006_ip = 42; continue _fun0006 }
case 43:
                    var3 = null;
                    return var3;
case 42: // try_start_0
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 14;
                    var3 = var7[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.getStorefront;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=67);
case 44:
                    return var3;
case 35:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 2; continue _fun0006 }
case 45:
                    var6 = var3;
                    var4 = null;
                    if(!(var4 == var3)) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                    var4 = var6;
                    _fun0006_ip = 48; continue _fun0006;
case 46:
                    var7 = _closure1_slot15;
                    var4 = var7.bind(var5)(var6);
case 48: // try_end0
                    return var4;
case 2:
                    return var3;
case 49: // catch_target0
                    CatchBlockStart(arg_register=3);
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 15;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.captureBillingException;
                    var2 = var2.bind(var3)(var4);
                    var2 = null;
                    return var2;
case 40:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot16 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var13 = var1.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var12.bind(var13)(var3, var1, var8);
    var1 = 0;
    var8 = var11[var1];
    var1 = undefined;
    var8 = var9.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var11[var8];
    var8 = var10.bind(var1)(var8);
    var8 = var8.NativeModules;
    var12 = 2;
    var12 = var11[var12];
    var12 = var10.bind(var1)(var12);
    var12 = var12.convertToAlpha2;
    var _closure1_slot4 = var12;
    var12 = 3;
    var12 = var11[var12];
    var12 = var9.bind(var1)(var12);
    var _closure1_slot5 = var12;
    var12 = 4;
    var12 = var11[var12];
    var12 = var9.bind(var1)(var12);
    var _closure1_slot6 = var12;
    var12 = 5;
    var12 = var11[var12];
    var12 = var10.bind(var1)(var12);
    var12 = var12.CurrencyCodes;
    var _closure1_slot7 = var12;
    var12 = 6;
    var12 = var11[var12];
    var12 = var10.bind(var1)(var12);
    var12 = var12.NAMESPACE_SNOWFLAKE_UUID;
    var _closure1_slot8 = var12;
    var12 = var8.InAppUtils;
    var _closure1_slot9 = var12;
    var8 = var8.RNIapIosSk2;
    var _closure1_slot10 = var8;
    var8 = 7;
    var8 = var11[var8];
    var12 = var9.bind(var1)(var8);
    var8 = var12.prototype;
    var17 = Object.create(var8, {constructor: {value: var12}});
    var16 = 'IAPUtils.tsx';
    var8 = new var17[var12](var16, var15);
    var8 = {};
    var9 = function loadProducts() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 9;
            var1 = var4[var1];
            var11 = undefined;
            var3 = var3.bind(var11)(var1);
            var1 = var3.isIOS;
            var1 = var1.bind(var3)();
            var8 = global;
            var4 = var8.Promise;
            if(var1) { _fun0007_ip = 44; continue _fun0007 }
case 50:
            var3 = var4.resolve;
            var1 = new Array(0);
            var1 = var3.bind(var4)(var1);
            _fun0007_ip = 51; continue _fun0007;
case 44:
            var3 = var4.all;
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 10;
            var5 = var12[var6];
            var13 = var7.bind(var11)(var5);
            var9 = var13.fetchSubscriptions;
            var15 = var8.Object;
            var14 = var15.values;
            var10 = _closure1_slot0;
            var5 = 11;
            var2 = var12[var5];
            var2 = var10.bind(var11)(var2);
            var2 = var2.ProductIds;
            var2 = var14.bind(var15)(var2);
            var9 = var9.bind(var13)(var2);
            var2 = new Array(2);
            var2[0] = var9;
            var6 = var12[var6];
            var7 = var7.bind(var11)(var6);
            var6 = var7.fetchProducts;
            var9 = var8.Object;
            var8 = var9.values;
            var5 = var12[var5];
            var5 = var10.bind(var11)(var5);
            var5 = var5.ProductIds;
            var5 = var8.bind(var9)(var5);
            var5 = var6.bind(var7)(var5);
            var2[1] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var5 = arg1;
                    var2 = var5[Symbol.iterator];
                    var5 = var2().next;
                    var6 = var5().value;
                    var3 = var2;
                    var4 = undefined;
                    var3 = var3 === var4;
                    var7 = undefined;
                    if(var3) { _fun0008_ip = 6; continue _fun0008 }
case 52:
                    var7 = var6;
case 6:
                    var6 = undefined;
                    if(var3) { _fun0008_ip = 53; continue _fun0008 }
case 54:
                    var8 = var5().value;
                    var5 = var2;
                    var5 = var5 === var4;
                    var6 = undefined;
                    var3 = var5;
                    if(var5) { _fun0008_ip = 53; continue _fun0008 }
case 36:
                    var6 = var8;
                    var3 = var5;
case 53:
                    if(var3) { _fun0008_ip = 44; continue _fun0008 }
case 55:
                    var2.return();
case 44:
                    var _closure3_slot0 = var4;
                    var2 = global;
                    var2 = var2.Set;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var13 = var3;
                    var2 = new var13[var2](var12);
                    var2 = var2 instanceof Object ? var2 : var3;
                    _closure3_slot0 = var2;
                    var3 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var2 = 12;
                    var2 = var5[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.filter;
                    var2 = new Array(0);
                    var10 = 0;
                    var12 = var2;
                    var11 = var7;
                    var10 = arraySpread(var12, var11, var10);
                    var12 = var2;
                    var11 = var6;
                    var5 = arraySpread(var12, var11, var10);
                    var1 = function(arg1) {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                            var2 = arg1;
                            var5 = _closure3_slot0;
                            var4 = var5.has;
                            var1 = var2.identifier;
                            var1 = var4.bind(var5)(var1);
                            var1 = !var1;
                            if(!var1) { _fun0009_ip = 11; continue _fun0009 }
case 56:
                            var4 = _closure3_slot0;
                            var3 = var4.add;
                            var2 = var2.identifier;
                            var2 = var3.bind(var4)(var2);
                            var1 = true;
case 11:
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
case 51:
            return var1;
        }
    };
    var8['loadProducts'] = var9;
    var9 = function purchaseProduct(arg1, arg2, arg3) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* (arg1, arg2) {
                var1 = function* anon_0_(arg1, arg2) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0010_ip = 57; continue _fun0010 }
case 41:
                        var7 = arg1;
                        var3 = arg2;
                        var2 = undefined;
                        var6 = undefined;
                        var5 = _closure1_slot5;
                        var4 = var5.getCurrentUser;
                        var5 = var4.bind(var5)();
                        var4 = null;
                        if(!(var4 == var5)) { _fun0010_ip = 58; continue _fun0010 }
case 59:
                        var5 = var3;
                        var4 = global;
                        var10 = var4.Error;
                        var4 = var10.prototype;
                        var9 = Object.create(var4, {constructor: {value: var10}});
                        var13 = 'purchaseProduct: no valid user';
                        var14 = var9;
                        var4 = new var14[var10](var13, var12);
                        var4 = var4 instanceof Object ? var4 : var9;
                        var4 = var5.bind(var2)(var4);
                        _fun0010_ip = 60; continue _fun0010;
case 58: // try_start_0
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var10 = 14;
                        var4 = var4[var10];
                        var5 = var5.bind(var2)(var4);
                        var4 = var5.clearTransactionIOS;
                        var4 = var4.bind(var5)();
                        SaveGenerator(address=123);
case 61:
                        return var4;
case 62:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                        if(var5) { _fun0010_ip = 63; continue _fun0010 }
case 64:
                        var9 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var5 = var5[var10];
                        var10 = var9.bind(var2)(var5);
                        var9 = var10.requestPurchase;
                        var5 = {};
                        var12 = _closure2_slot0;
                        var5['sku'] = var12;
                        var12 = _closure2_slot2;
                        var5['appAccountToken'] = var12;
                        var11 = _closure2_slot1;
                        var5['withOffer'] = var11;
                        var5 = var9.bind(var10)(var5);
                        SaveGenerator(address=198);
case 65:
                        return var5;
case 66:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                        if(var9) { _fun0010_ip = 67; continue _fun0010 }
case 68:
                        var6 = var5;
                        var9 = global;
                        var10 = var9.Object;
                        var10 = var5 instanceof var10;
                        if(var10) { _fun0010_ip = 69; continue _fun0010 }
case 20:
                        var11 = var9.Error;
                        var9 = var11.prototype;
                        var10 = Object.create(var9, {constructor: {value: var11}});
                        var13 = 'Unable to select a platform, no request was made';
                        var14 = var10;
                        var9 = new var14[var11](var13, var12);
                        var9 = var9 instanceof Object ? var9 : var10;
                        throw var9;
case 69:
                        var8 = _closure1_slot11;
                        var6 = var8.bind(var2)(var6);
                        var6 = var7.bind(var2)(var6);
case 70: // try_end0
                        _fun0010_ip = 60; continue _fun0010;
case 67:
                        return var5;
case 63:
                        return var4;
case 71: // catch_target0
                        CatchBlockStart(arg_register=3);
                        var3 = var3.bind(var2)(var4);
case 60:
                        return var2;
case 57:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var1 = undefined;
        var4 = var2.bind(var1)();
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var8['purchaseProduct'] = var9;
    var9 = function canMakePayments() {
        var1 = global;
        var3 = var1.Promise;
        var1 = var3.prototype;
        var2 = Object.create(var1, {constructor: {value: var3}});
        var4 = function(arg1, arg2) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = arg2;
            var _closure3_slot1 = var2;
            var3 = _closure1_slot9;
            var2 = var3.canMakePayments;
            var1 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = arg1;
                    if(var3) { _fun0011_ip = 72; continue _fun0011 }
case 73:
                    var4 = _closure3_slot1;
                    var1 = global;
                    var1 = var1.Error;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {constructor: {value: var1}});
                    var6 = var2;
                    var1 = new var6[var1](var5);
                    var2 = var1 instanceof Object ? var1 : var2;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var2);
case 72:
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var8['canMakePayments'] = var9;
    var9 = function restorePurchases() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var8['restorePurchases'] = var9;
    var8['fetchStoreFront'] = var4;
    var9 = 18;
    var9 = var11[var9];
    var11 = var10.bind(var1)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'utils/native/IAPUtils.tsx';
    var9 = var10.bind(var11)(var9);
    var3['default'] = var8;
    var3['convertToUUID'] = var7;
    var7 = function makeIAPRequest(arg1, arg2, arg3) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = arg3;
        var _closure2_slot2 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* (arg1, arg2) {
                var1 = function* anon_0_(arg1, arg2) {
                    _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0012_ip = 74; continue _fun0012 }
case 41:
                        var6 = arg1;
                        var3 = arg2;
                        var2 = undefined;
                        var11 = undefined;
                        var9 = undefined;
                        var7 = _closure1_slot5;
                        var4 = var7.getCurrentUser;
                        var7 = var4.bind(var7)();
                        var11 = var7;
                        var4 = null;
                        if(!(var4 == var7)) { _fun0012_ip = 17; continue _fun0012 }
case 75:
                        var7 = var3;
                        var4 = global;
                        var10 = var4.Error;
                        var4 = var10.prototype;
                        var8 = Object.create(var4, {constructor: {value: var10}});
                        var13 = 'purchaseProduct: no valid user';
                        var14 = var8;
                        var4 = new var14[var10](var13, var12);
                        var4 = var4 instanceof Object ? var4 : var8;
                        var4 = var7.bind(var2)(var4);
                        _fun0012_ip = 76; continue _fun0012;
case 17: // try_start_0
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 14;
                        var4 = var8[var4];
                        var8 = var7.bind(var2)(var4);
                        var7 = var8.requestPurchase;
                        var4 = {};
                        var12 = _closure2_slot0;
                        var4['requestJSONString'] = var12;
                        var12 = _closure2_slot1;
                        var4['sku'] = var12;
                        var12 = _closure1_slot12;
                        var11 = var11.id;
                        var11 = var12.bind(var2)(var11);
                        var4['appAccountToken'] = var11;
                        var11 = false;
                        var4['andDangerouslyFinishTransactionAutomaticallyIOS'] = var11;
                        var10 = _closure2_slot2;
                        var4['useACOM'] = var10;
                        var4 = var7.bind(var8)(var4);
                        SaveGenerator(address=191);
case 77:
                        return var4;
case 78:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                        if(var7) { _fun0012_ip = 79; continue _fun0012 }
case 80:
                        var9 = var4;
                        var8 = global;
                        var7 = var8.Object;
                        var7 = var4 instanceof var7;
                        if(var7) { _fun0012_ip = 81; continue _fun0012 }
case 82:
                        var11 = var8.Error;
                        var7 = var11.prototype;
                        var10 = Object.create(var7, {constructor: {value: var11}});
                        var13 = 'Unable to select a platform, no request was made';
                        var14 = var10;
                        var7 = new var14[var11](var13, var12);
                        var7 = var7 instanceof Object ? var7 : var10;
                        throw var7;
case 81:
                        var7 = var6;
                        var6 = {};
                        var10 = _closure1_slot11;
                        var11 = var9;
                        var10 = var10.bind(var2)(var11);
                        var6['purchaseResponse'] = var10;
                        var10 = var8.Array;
                        var8 = var10.isArray;
                        var8 = var8.bind(var10)(var11);
                        var10 = var9;
                        if(var8) { _fun0012_ip = 83; continue _fun0012 }
case 84:
                        var8 = var10;
                        _fun0012_ip = 85; continue _fun0012;
case 83:
                        var9 = 0;
                        var8 = var10[var9];
case 85:
                        var6['originalPurchase'] = var8;
                        var6 = var7.bind(var2)(var6);
case 86: // try_end0
                        _fun0012_ip = 76; continue _fun0012;
case 79:
                        return var4;
case 32: // catch_target0
                        CatchBlockStart(arg_register=3);
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 15;
                        var5 = var7[var5];
                        var6 = var6.bind(var2)(var5);
                        var5 = var6.captureBillingException;
                        var5 = var5.bind(var6)(var4);
                        var3 = var3.bind(var2)(var4);
case 76:
                        return var2;
case 74:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var4.bind(var3)(var2);
            var _closure3_slot0 = var2;
            var1 = function() {
                var1 = undefined;
                var4 = _closure3_slot0;
                var3 = var4.apply;
                var1 = arguments;
                var2 = var1;
                var1 = this;
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            };
            return var1;
        };
        var1 = undefined;
        var4 = var2.bind(var1)();
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var3['makeIAPRequest'] = var7;
    var7 = function useCanPurchaseIAP(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var3 = 16;
        var7 = var6[var3];
        var4 = undefined;
        var11 = var5.bind(var4)(var7);
        var10 = var11.useStateFromStores;
        var7 = _closure1_slot5;
        var9 = new Array(1);
        var9[0] = var7;
        var8 = function() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var3 = var1.bind(var2)();
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0013_ip = 42; continue _fun0013 }
case 87:
                var2 = var3.verified;
case 42:
                var1 = var1 != var2;
                if(!var1) { _fun0013_ip = 88; continue _fun0013 }
case 9:
                var1 = var2;
case 88:
                return var1;
            }
        };
        var7 = new Array(0);
        var7 = var10.bind(var11)(var9, var8, var7);
        var _closure2_slot1 = var7;
        var3 = var6[var3];
        var4 = var5.bind(var4)(var3);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot6;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var2 = _closure1_slot6;
                var1 = var2.isReady;
                var1 = var1.bind(var2)();
                var1 = !var1;
                if(var1) { _fun0014_ip = 89; continue _fun0014 }
case 90:
                var3 = _closure1_slot6;
                var2 = var3.isBusy;
                var2 = var2.bind(var3)();
                if(!var2) { _fun0014_ip = 91; continue _fun0014 }
case 9:
                var6 = _closure2_slot0;
                var3 = null;
                var3 = var3 == var6;
                if(var3) { _fun0014_ip = 92; continue _fun0014 }
case 22:
                var6 = _closure1_slot6;
                var5 = var6.isPurchasingProduct;
                var4 = _closure2_slot0;
                var4 = var5.bind(var6)(var4);
                var3 = !var4;
case 92:
                var2 = var3;
case 91:
                var1 = var2;
case 89:
                if(var1) { _fun0014_ip = 93; continue _fun0014 }
case 46:
                var2 = _closure2_slot1;
                var1 = !var2;
case 93:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        var1 = !var1;
        return var1;
    };
    var3['useCanPurchaseIAP'] = var7;
    var3['isStorekit2Available'] = var6;
    var3['remapStorefront'] = var5;
    var3['fetchStoreFront'] = var4;
    var2 = function manageSubscription() {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var3 = _closure1_slot14;
            var1 = undefined;
            var1 = var3.bind(var1)();
            if(var1) { _fun0015_ip = 94; continue _fun0015 }
case 95:
            var1 = global;
            var4 = var1.Promise;
            var3 = var4.reject;
            var6 = var1.Error;
            var1 = var6.prototype;
            var5 = Object.create(var1, {constructor: {value: var6}});
            var7 = 'StoreKit 2 is not available';
            var8 = var5;
            var1 = new var8[var6](var7, var6);
            var1 = var1 instanceof Object ? var1 : var5;
            var1 = var3.bind(var4)(var1);
            _fun0015_ip = 14; continue _fun0015;
case 94:
            var3 = _closure1_slot10;
            var2 = var3.showManageSubscriptions;
            var1 = var2.bind(var3)();
case 14:
            return var1;
        }
    };
    var3['manageSubscription'] = var2;
    return var1;
})();
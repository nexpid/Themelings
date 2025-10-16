// app/utils/native/IAPUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var9 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var9;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var10;
    var1 = function serializePurchaseResponse(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 6;
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
    var _closure1_slot10 = var1;
    var6 = function convertToUUID(arg1) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 11;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.v5;
        var2 = _closure1_slot7;
        var1 = arg1;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var6;
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
                    var4 = var2.fullRestore;
                    var10 = undefined;
                    var _closure4_slot0 = var10;
                    SaveGenerator(address=31);
case 6:
                    return var10;
case 7:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var5 = _closure1_slot5;
                    var3 = var5.getCurrentUser;
                    var3 = var3.bind(var5)();
                    _closure4_slot0 = var3;
                    var5 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var3 = 14;
                    var3 = var8[var3];
                    var3 = var5.bind(var10)(var3);
                    var8 = var3.StoreKitV2Experiment;
                    var5 = var8.getCurrentConfig;
                    var3 = {};
                    var9 = 'restoreFromLocalReceipt';
                    var3['location'] = var9;
                    var3 = var5.bind(var8)(var3);
                    var3 = var3.enabled;
                    if(!var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var3 = _closure1_slot13;
                    var3 = var3.bind(var10)();
                    if(var3) { _fun0002_ip = 12; continue _fun0002 }
case 10:
                    var3 = global;
                    var8 = var3.Promise;
                    var3 = var8.prototype;
                    var5 = Object.create(var3, {constructor: {value: var8}});
                    var14 = function(arg1, arg2) {
                        var1 = arg1;
                        var _closure5_slot0 = var1;
                        var1 = arg2;
                        var _closure5_slot1 = var1;
                        var5 = _closure1_slot8;
                        var4 = var5.restorePurchasesForUser;
                        var6 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 15;
                        var3 = var3[var1];
                        var1 = undefined;
                        var7 = var6.bind(var1)(var3);
                        var6 = var7.v3;
                        var3 = _closure4_slot0;
                        var3 = var3.id;
                        var6 = var6.bind(var7)(var3);
                        var3 = var6.toString;
                        var3 = var3.bind(var6)();
                        var2 = function(arg1, arg2) {
                            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                                var3 = arg1;
                                if(var3) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                                var5 = _closure5_slot0;
                                var4 = undefined;
                                var2 = arg2;
                                var2 = var5.bind(var4)(var2);
                                _fun0003_ip = 15; continue _fun0003;
case 13:
                                var2 = _closure5_slot1;
                                var1 = undefined;
                                var1 = var2.bind(var1)(var3);
case 15:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        var2 = var4.bind(var5)(var3, var2);
                        return var1;
                    };
                    var15 = var5;
                    var3 = new var15[var8](var14, var13);
                    var5 = var3 instanceof Object ? var3 : var5;
                    _fun0002_ip = 16; continue _fun0002;
case 12:
                    if(!var4) { _fun0002_ip = 17; continue _fun0002 }
case 18:
                    var8 = _closure1_slot9;
                    var3 = var8.sync;
                    var3 = var3.bind(var8)();
                    SaveGenerator(address=185);
case 19:
                    return var3;
case 20:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=7);
                    if(var8) { _fun0002_ip = 21; continue _fun0002 }
case 17:
                    if(var4) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var8 = _closure1_slot9;
                    var4 = var8.getPendingTransactions;
                    var4 = var4.bind(var8)();
                    SaveGenerator(address=215);
case 24:
                    return var4;
case 25:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    var9 = var4;
                    if(!var8) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                    return var4;
case 22:
                    var8 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var4 = 12;
                    var4 = var11[var4];
                    var11 = var8.bind(var10)(var4);
                    var8 = var11.getAvailablePurchases;
                    var4 = {};
                    var12 = false;
                    var4['onlyIncludeActiveItems'] = var12;
                    var4 = var8.bind(var11)(var4);
                    SaveGenerator(address=271);
case 28:
                    return var4;
case 29:
                    ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                    var9 = var4;
                    if(var8) { _fun0002_ip = 30; continue _fun0002 }
case 26:
                    var8 = _closure1_slot1;
                    var11 = _closure1_slot2;
                    var7 = 10;
                    var7 = var11[var7];
                    var8 = var8.bind(var10)(var7);
                    var7 = var8.map;
                    var6 = function(arg1) {
                        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                            var2 = arg1;
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 6;
                            var1 = var4[var1];
                            var5 = undefined;
                            var4 = var3.bind(var5)(var1);
                            var1 = var2.transactionId;
                            var7 = null;
                            var3 = var7 != var1;
                            var1 = 'should have transactionId';
                            var1 = var4.bind(var5)(var3, var1);
                            var1 = {};
                            var3 = var2.originalTransactionDateIOS;
                            if(!(var7 == var3)) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                            var3 = var2.transactionDate;
case 31:
                            var1['originalTransactionDate'] = var3;
                            var3 = global;
                            var6 = var3.parseInt;
                            var4 = var2.originalTransactionIdentifierIOS;
                            if(!(var7 == var4)) { _fun0004_ip = 2; continue _fun0004 }
case 33:
                            var4 = var2.transactionId;
case 2:
                            var4 = var6.bind(var5)(var4);
                            var1['originalTransactionIdentifier'] = var4;
                            var4 = var2.transactionDate;
                            var1['transactionDate'] = var4;
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
                    var5 = var7.bind(var8)(var9, var6);
case 16:
                    return var5;
case 30:
                    return var4;
case 21:
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
        _closure1_slot12 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var4 = function isStorekit2Available() {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 7;
            var1 = var3[var1];
            var3 = undefined;
            var4 = var4.bind(var3)(var1);
            var1 = var4.isIOS;
            var1 = var1.bind(var4)();
            if(!var1) { _fun0005_ip = 34; continue _fun0005 }
case 35:
            var5 = _closure1_slot9;
            var4 = null;
            var4 = var4 == var5;
            var3 = undefined;
            if(var4) { _fun0005_ip = 36; continue _fun0005 }
case 37:
            var4 = _closure1_slot9;
            var2 = var4.isAvailable;
            var3 = var2.bind(var4)();
case 36:
            var2 = 1;
            var1 = var2 === var3;
case 34:
            return var1;
        }
    };
    var _closure1_slot13 = var4;
    var2 = function fetchStoreFront() {
        var1 = undefined;
        var4 = _closure1_slot14;
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
                    if(var2) { _fun0006_ip = 38; continue _fun0006 }
case 39:
                    var5 = undefined;
                    var6 = undefined;
                    var8 = undefined;
                    var7 = undefined;
                    var3 = _closure1_slot13;
                    var3 = var3.bind(var5)();
                    if(var3) { _fun0006_ip = 40; continue _fun0006 }
case 41:
                    var3 = null;
                    return var3;
case 40: // try_start_0
                    var4 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 12;
                    var3 = var9[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.getStorefront;
                    var3 = var3.bind(var4)();
                    SaveGenerator(address=71);
case 42:
                    return var3;
case 43:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0006_ip = 44; continue _fun0006 }
case 3:
                    var6 = var3;
                    var9 = null;
                    if(!(var9 != var3)) { _fun0006_ip = 45; continue _fun0006 }
case 46:
                    var10 = _closure1_slot4;
                    var4 = var6;
                    var10 = var10.bind(var5)(var4);
                    var8 = var10;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot2;
                    var4 = 17;
                    var4 = var12[var4];
                    var4 = var11.bind(var5)(var4);
                    var4 = var4.GeneratedPaymentCurrenciesSets;
                    var4 = var4.APPLE_STORE_COUNTRY_CURRENCIES;
                    var4 = var4[var10];
                    var7 = var4;
                    if(!(var9 != var4)) { _fun0006_ip = 47; continue _fun0006 }
case 48:
                    var4 = {};
                    var4['country'] = var8;
                    var4['currency'] = var7;
case 49: // try_end0
                    return var4;
case 47: // try_start_1
                    var4 = global;
                    var7 = var4.Error;
                    var8 = var6;
                    var4 = var4.HermesInternal;
                    var6 = var4.concat;
                    var4 = 'Unable to get currency from storefront ';
                    var13 = var6.bind(var4)(var8);
                    var6 = var7.prototype;
                    var6 = Object.create(var6, {constructor: {value: var7}});
                    var14 = var6;
                    var4 = new var14[var7](var13, var12);
                    var4 = var4 instanceof Object ? var4 : var6;
                    throw var4;
case 45:
                    var4 = global;
                    var7 = var4.Error;
                    var4 = var7.prototype;
                    var6 = Object.create(var4, {constructor: {value: var7}});
                    var13 = 'Unable to fetch storefront from react-native-iap';
                    var14 = var6;
                    var4 = new var14[var7](var13, var12);
                    var4 = var4 instanceof Object ? var4 : var6;
                    throw var4;
case 44: // try_end1
                    return var3;
case 50: // catch_target0 // catch_target1
                    CatchBlockStart(arg_register=3);
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 13;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.captureBillingException;
                    var2 = var2.bind(var3)(var4);
                    var2 = null;
                    return var2;
case 38:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = global;
    var12 = var1.Object;
    var8 = var12.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var12)(var3, var1, var7);
    var1 = 0;
    var7 = var10[var1];
    var1 = undefined;
    var7 = var11.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var10[var7];
    var7 = var9.bind(var1)(var7);
    var7 = var7.NativeModules;
    var8 = 2;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var8 = var8.convertToAlpha2;
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var10[var8];
    var8 = var11.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 5;
    var8 = var10[var8];
    var8 = var9.bind(var1)(var8);
    var8 = var8.NAMESPACE_SNOWFLAKE_UUID;
    var _closure1_slot7 = var8;
    var8 = var7.InAppUtils;
    var _closure1_slot8 = var8;
    var7 = var7.RNIapIosSk2;
    var _closure1_slot9 = var7;
    var7 = {};
    var8 = function loadProducts() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 7;
            var1 = var4[var1];
            var11 = undefined;
            var3 = var3.bind(var11)(var1);
            var1 = var3.isIOS;
            var1 = var1.bind(var3)();
            var8 = global;
            var4 = var8.Promise;
            if(var1) { _fun0007_ip = 51; continue _fun0007 }
case 52:
            var3 = var4.resolve;
            var1 = new Array(0);
            var1 = var3.bind(var4)(var1);
            _fun0007_ip = 53; continue _fun0007;
case 51:
            var3 = var4.all;
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 8;
            var5 = var12[var6];
            var13 = var7.bind(var11)(var5);
            var9 = var13.fetchSubscriptions;
            var15 = var8.Object;
            var14 = var15.values;
            var10 = _closure1_slot0;
            var5 = 9;
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
case 54:
                    var7 = var6;
case 6:
                    var6 = undefined;
                    if(var3) { _fun0008_ip = 55; continue _fun0008 }
case 56:
                    var8 = var5().value;
                    var5 = var2;
                    var5 = var5 === var4;
                    var6 = undefined;
                    var3 = var5;
                    if(var5) { _fun0008_ip = 55; continue _fun0008 }
case 37:
                    var6 = var8;
                    var3 = var5;
case 55:
                    if(var3) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                    var2.return();
case 57:
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
                    var2 = 10;
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
                            if(!var1) { _fun0009_ip = 59; continue _fun0009 }
case 41:
                            var4 = _closure3_slot0;
                            var3 = var4.add;
                            var2 = var2.identifier;
                            var2 = var3.bind(var4)(var2);
                            var1 = true;
case 59:
                            return var1;
                        }
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
case 53:
            return var1;
        }
    };
    var7['loadProducts'] = var8;
    var8 = function purchaseProduct(arg1, arg2, arg3) {
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
                        if(var2) { _fun0010_ip = 60; continue _fun0010 }
case 39:
                        var7 = arg1;
                        var3 = arg2;
                        var2 = undefined;
                        var6 = undefined;
                        var5 = _closure1_slot5;
                        var4 = var5.getCurrentUser;
                        var5 = var4.bind(var5)();
                        var4 = null;
                        if(!(var4 == var5)) { _fun0010_ip = 61; continue _fun0010 }
case 62:
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
                        _fun0010_ip = 63; continue _fun0010;
case 61: // try_start_0
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var10 = 12;
                        var4 = var4[var10];
                        var5 = var5.bind(var2)(var4);
                        var4 = var5.clearTransactionIOS;
                        var4 = var4.bind(var5)();
                        SaveGenerator(address=123);
case 64:
                        return var4;
case 65:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                        if(var5) { _fun0010_ip = 66; continue _fun0010 }
case 67:
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
case 68:
                        return var5;
case 69:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                        if(var9) { _fun0010_ip = 70; continue _fun0010 }
case 71:
                        var6 = var5;
                        var9 = global;
                        var10 = var9.Object;
                        var10 = var5 instanceof var10;
                        if(var10) { _fun0010_ip = 44; continue _fun0010 }
case 72:
                        var11 = var9.Error;
                        var9 = var11.prototype;
                        var10 = Object.create(var9, {constructor: {value: var11}});
                        var13 = 'Unable to select a platform, no request was made';
                        var14 = var10;
                        var9 = new var14[var11](var13, var12);
                        var9 = var9 instanceof Object ? var9 : var10;
                        throw var9;
case 44:
                        var8 = _closure1_slot10;
                        var6 = var8.bind(var2)(var6);
                        var6 = var7.bind(var2)(var6);
case 73: // try_end0
                        _fun0010_ip = 63; continue _fun0010;
case 70:
                        return var5;
case 66:
                        return var4;
case 74: // catch_target0
                        CatchBlockStart(arg_register=3);
                        var3 = var3.bind(var2)(var4);
case 63:
                        return var2;
case 60:
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
    var7['purchaseProduct'] = var8;
    var8 = function canMakePayments() {
        var1 = global;
        var3 = var1.Promise;
        var1 = var3.prototype;
        var2 = Object.create(var1, {constructor: {value: var3}});
        var4 = function(arg1, arg2) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = arg2;
            var _closure3_slot1 = var2;
            var3 = _closure1_slot8;
            var2 = var3.canMakePayments;
            var1 = function(arg1) {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = arg1;
                    if(var3) { _fun0011_ip = 75; continue _fun0011 }
case 76:
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
case 75:
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
    var7['canMakePayments'] = var8;
    var8 = function restorePurchases() {
        var1 = undefined;
        var4 = _closure1_slot12;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var7['restorePurchases'] = var8;
    var8 = function receiptData() {
        var1 = global;
        var3 = var1.Promise;
        var1 = var3.prototype;
        var2 = Object.create(var1, {constructor: {value: var3}});
        var4 = function(arg1, arg2) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = arg2;
            var _closure3_slot1 = var2;
            var3 = _closure1_slot8;
            var2 = var3.receiptData;
            var1 = function(arg1, arg2) {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                    var2 = arg1;
                    if(var2) { _fun0012_ip = 13; continue _fun0012 }
case 14:
                    var4 = _closure3_slot0;
                    var3 = undefined;
                    var2 = arg2;
                    var2 = var4.bind(var3)(var2);
                    _fun0012_ip = 31; continue _fun0012;
case 13:
                    var3 = _closure3_slot1;
                    var1 = global;
                    var4 = var1.Error;
                    var1 = var4.prototype;
                    var2 = Object.create(var1, {constructor: {value: var4}});
                    var5 = 'No Receipt Available';
                    var6 = var2;
                    var1 = new var6[var4](var5, var4);
                    var2 = var1 instanceof Object ? var1 : var2;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 31:
                    var1 = undefined;
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
    var7['receiptData'] = var8;
    var8 = function loadGenericProducts() {
        var1 = global;
        var3 = var1.Promise;
        var2 = var3.all;
        var6 = _closure1_slot1;
        var9 = _closure1_slot2;
        var5 = 8;
        var4 = var9[var5];
        var8 = undefined;
        var11 = var6.bind(var8)(var4);
        var10 = var11.fetchSubscriptions;
        var7 = _closure1_slot0;
        var4 = 9;
        var1 = var9[var4];
        var1 = var7.bind(var8)(var1);
        var1 = var1.ProductIds;
        var12 = var1.GENERIC_SUBSCRIPTION;
        var1 = new Array(1);
        var1[0] = var12;
        var10 = var10.bind(var11)(var1);
        var1 = new Array(2);
        var1[0] = var10;
        var5 = var9[var5];
        var6 = var6.bind(var8)(var5);
        var5 = var6.fetchProducts;
        var4 = var9[var4];
        var4 = var7.bind(var8)(var4);
        var4 = var4.ProductIds;
        var7 = var4.GENERIC_CONSUMABLE;
        var4 = new Array(1);
        var4[0] = var7;
        var4 = var5.bind(var6)(var4);
        var1[1] = var4;
        var3 = var2.bind(var3)(var1);
        var2 = var3.then;
        var1 = function(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var5 = arg1;
                var1 = var5[Symbol.iterator];
                var5 = var1().next;
                var3 = var5().value;
                var2 = var1;
                var7 = undefined;
                var2 = var2 === var7;
                var4 = undefined;
                if(var2) { _fun0013_ip = 77; continue _fun0013 }
case 78:
                var4 = var3;
case 77:
                var3 = undefined;
                if(var2) { _fun0013_ip = 79; continue _fun0013 }
case 41:
                var6 = var5().value;
                var5 = var1;
                var5 = var5 === var7;
                var3 = undefined;
                var2 = var5;
                if(var5) { _fun0013_ip = 79; continue _fun0013 }
case 80:
                var3 = var6;
                var2 = var5;
case 79:
                if(var2) { _fun0013_ip = 81; continue _fun0013 }
case 82:
                var1.return();
case 81:
                var1 = new Array(0);
                var8 = 0;
                var10 = var1;
                var9 = var4;
                var8 = arraySpread(var10, var9, var8);
                var10 = var1;
                var9 = var3;
                var2 = arraySpread(var10, var9, var8);
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var7['loadGenericProducts'] = var8;
    var7['fetchStoreFront'] = var2;
    var8 = 18;
    var8 = var10[var8];
    var10 = var9.bind(var1)(var8);
    var9 = var10.fileFinishedImporting;
    var8 = 'utils/native/IAPUtils.tsx';
    var8 = var9.bind(var10)(var8);
    var3['default'] = var7;
    var3['convertToUUID'] = var6;
    var6 = function makeIAPRequest(arg1, arg2) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var2 = arg2;
        var _closure2_slot1 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = function() {
            var4 = _closure1_slot3;
            var3 = undefined;
            var2 = function* (arg1, arg2) {
                var1 = function* anon_0_(arg1, arg2) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0014_ip = 83; continue _fun0014 }
case 39:
                        var6 = arg1;
                        var3 = arg2;
                        var2 = undefined;
                        var10 = undefined;
                        var9 = undefined;
                        var7 = _closure1_slot5;
                        var4 = var7.getCurrentUser;
                        var7 = var4.bind(var7)();
                        var10 = var7;
                        var4 = null;
                        if(!(var4 == var7)) { _fun0014_ip = 84; continue _fun0014 }
case 85:
                        var7 = var3;
                        var4 = global;
                        var11 = var4.Error;
                        var4 = var11.prototype;
                        var8 = Object.create(var4, {constructor: {value: var11}});
                        var13 = 'purchaseProduct: no valid user';
                        var14 = var8;
                        var4 = new var14[var11](var13, var12);
                        var4 = var4 instanceof Object ? var4 : var8;
                        var4 = var7.bind(var2)(var4);
                        _fun0014_ip = 86; continue _fun0014;
case 84: // try_start_0
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 12;
                        var4 = var8[var4];
                        var8 = var7.bind(var2)(var4);
                        var7 = var8.requestPurchase;
                        var4 = {};
                        var12 = _closure2_slot0;
                        var4['requestJSONString'] = var12;
                        var11 = _closure2_slot1;
                        var4['sku'] = var11;
                        var11 = _closure1_slot11;
                        var10 = var10.id;
                        var10 = var11.bind(var2)(var10);
                        var4['appAccountToken'] = var10;
                        var10 = false;
                        var4['andDangerouslyFinishTransactionAutomaticallyIOS'] = var10;
                        var4 = var7.bind(var8)(var4);
                        SaveGenerator(address=180);
case 87:
                        return var4;
case 88:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                        if(var7) { _fun0014_ip = 89; continue _fun0014 }
case 90:
                        var9 = var4;
                        var8 = global;
                        var7 = var8.Object;
                        var7 = var4 instanceof var7;
                        if(var7) { _fun0014_ip = 91; continue _fun0014 }
case 71:
                        var11 = var8.Error;
                        var7 = var11.prototype;
                        var10 = Object.create(var7, {constructor: {value: var11}});
                        var13 = 'Unable to select a platform, no request was made';
                        var14 = var10;
                        var7 = new var14[var11](var13, var12);
                        var7 = var7 instanceof Object ? var7 : var10;
                        throw var7;
case 91:
                        var7 = var6;
                        var6 = {};
                        var10 = _closure1_slot10;
                        var11 = var9;
                        var10 = var10.bind(var2)(var11);
                        var6['purchaseResponse'] = var10;
                        var10 = var8.Array;
                        var8 = var10.isArray;
                        var8 = var8.bind(var10)(var11);
                        var10 = var9;
                        if(var8) { _fun0014_ip = 92; continue _fun0014 }
case 93:
                        var8 = var10;
                        _fun0014_ip = 94; continue _fun0014;
case 92:
                        var9 = 0;
                        var8 = var10[var9];
case 94:
                        var6['originalPurchase'] = var8;
                        var6 = var7.bind(var2)(var6);
case 95: // try_end0
                        _fun0014_ip = 86; continue _fun0014;
case 89:
                        return var4;
case 96: // catch_target0
                        CatchBlockStart(arg_register=3);
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 13;
                        var5 = var7[var5];
                        var6 = var6.bind(var2)(var5);
                        var5 = var6.captureBillingException;
                        var5 = var5.bind(var6)(var4);
                        var3 = var3.bind(var2)(var4);
case 86:
                        return var2;
case 83:
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
    var3['makeIAPRequest'] = var6;
    var5 = function useCanPurchaseIAP(arg1) {
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
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var3 = var1.bind(var2)();
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0015_ip = 97; continue _fun0015 }
case 77:
                var2 = var3.verified;
case 97:
                var1 = var1 != var2;
                if(!var1) { _fun0015_ip = 98; continue _fun0015 }
case 9:
                var1 = var2;
case 98:
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
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var2 = _closure1_slot6;
                var1 = var2.isReady;
                var1 = var1.bind(var2)();
                var1 = !var1;
                if(var1) { _fun0016_ip = 99; continue _fun0016 }
case 100:
                var3 = _closure1_slot6;
                var2 = var3.isBusy;
                var2 = var2.bind(var3)();
                if(!var2) { _fun0016_ip = 101; continue _fun0016 }
case 9:
                var6 = _closure2_slot0;
                var3 = null;
                var3 = var3 == var6;
                if(var3) { _fun0016_ip = 102; continue _fun0016 }
case 103:
                var6 = _closure1_slot6;
                var5 = var6.isPurchasingProduct;
                var4 = _closure2_slot0;
                var4 = var5.bind(var6)(var4);
                var3 = !var4;
case 102:
                var2 = var3;
case 101:
                var1 = var2;
case 99:
                if(var1) { _fun0016_ip = 104; continue _fun0016 }
case 105:
                var2 = _closure2_slot1;
                var1 = !var2;
case 104:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        var1 = !var1;
        return var1;
    };
    var3['useCanPurchaseIAP'] = var5;
    var3['isStorekit2Available'] = var4;
    var3['fetchStoreFront'] = var2;
    return var1;
})();
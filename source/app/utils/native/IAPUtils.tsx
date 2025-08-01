// app/utils/native/IAPUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var1 = function serializePurchaseResponse(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var1 = 5;
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
            if(!var4) { _fun0001_ip = 99; continue _fun0001 }
 80:
            var4 = global;
            var6 = var4.parseInt;
            var4 = var2.originalTransactionIdentifierIOS;
            var3 = var6.bind(var5)(var4);
 99:
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
    var _closure1_slot9 = var1;
    var4 = function convertToUUID(arg1) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 9;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.v5;
        var2 = _closure1_slot6;
        var1 = arg1;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var4;
    var1 = global;
    var10 = var1.Object;
    var6 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var8[var1];
    var1 = undefined;
    var5 = var9.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var7.bind(var1)(var5);
    var5 = var5.NativeModules;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var1)(var6);
    var _closure1_slot5 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var7.bind(var1)(var6);
    var6 = var6.NAMESPACE_SNOWFLAKE_UUID;
    var _closure1_slot6 = var6;
    var6 = var5.InAppUtils;
    var _closure1_slot7 = var6;
    var5 = var5.RNIapIosSk2;
    var _closure1_slot8 = var5;
    var5 = {};
    var6 = function loadProducts() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 6;
            var1 = var4[var1];
            var11 = undefined;
            var3 = var3.bind(var11)(var1);
            var1 = var3.isIOS;
            var1 = var1.bind(var3)();
            var8 = global;
            var4 = var8.Promise;
            if(var1) { _fun0002_ip = 66; continue _fun0002 }
 46:
            var3 = var4.resolve;
            var1 = new Array(0);
            var1 = var3.bind(var4)(var1);
            _fun0002_ip = 226; continue _fun0002;
 66:
            var3 = var4.all;
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var6 = 7;
            var5 = var12[var6];
            var13 = var7.bind(var11)(var5);
            var9 = var13.fetchSubscriptions;
            var15 = var8.Object;
            var14 = var15.values;
            var10 = _closure1_slot0;
            var5 = 8;
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
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var5 = arg1;
                    var1 = var5[Symbol.iterator];
                    var5 = var1().next;
                    var3 = var5().value;
                    var2 = var1;
                    var7 = undefined;
                    var2 = var2 === var7;
                    var4 = undefined;
                    if(var2) { _fun0003_ip = 27; continue _fun0003 }
 24:
                    var4 = var3;
 27:
                    var3 = undefined;
                    if(var2) { _fun0003_ip = 57; continue _fun0003 }
 32:
                    var6 = var5().value;
                    var5 = var1;
                    var5 = var5 === var7;
                    var3 = undefined;
                    var2 = var5;
                    if(var5) { _fun0003_ip = 57; continue _fun0003 }
 51:
                    var3 = var6;
                    var2 = var5;
 57:
                    if(var2) { _fun0003_ip = 63; continue _fun0003 }
 60:
                    var1.return();
 63:
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
            var1 = var3.bind(var4)(var2);
 226:
            return var1;
        }
    };
    var5['loadProducts'] = var6;
    var6 = function purchaseProduct(arg1, arg2, arg3) {
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
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0004_ip = 288; continue _fun0004 }
 10:
                        var7 = arg1;
                        var3 = arg2;
                        var2 = undefined;
                        var6 = undefined;
                        var5 = _closure1_slot4;
                        var4 = var5.getCurrentUser;
                        var5 = var4.bind(var5)();
                        var4 = null;
                        if(!(var4 == var5)) { _fun0004_ip = 89; continue _fun0004 }
 42:
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
                        _fun0004_ip = 285; continue _fun0004;
 89: // try_start_0
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var10 = 10;
                        var4 = var4[var10];
                        var5 = var5.bind(var2)(var4);
                        var4 = var5.clearTransactionIOS;
                        var4 = var4.bind(var5)();
                        SaveGenerator(address=123);
 121:
                        return var4;
 123:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=4);
                        if(var5) { _fun0004_ip = 275; continue _fun0004 }
 132:
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
 196:
                        return var5;
 198:
                        ResumeGenerator(result_out_reg=4, return_bool_out_reg=8);
                        if(var9) { _fun0004_ip = 272; continue _fun0004 }
 204:
                        var6 = var5;
                        var9 = global;
                        var10 = var9.Object;
                        var10 = var5 instanceof var10;
                        if(var10) { _fun0004_ip = 256; continue _fun0004 }
 222:
                        var11 = var9.Error;
                        var9 = var11.prototype;
                        var10 = Object.create(var9, {constructor: {value: var11}});
                        var13 = 'Unable to select a platform, no request was made';
                        var14 = var10;
                        var9 = new var14[var11](var13, var12);
                        var9 = var9 instanceof Object ? var9 : var10;
                        throw var9;
 256:
                        var8 = _closure1_slot9;
                        var6 = var8.bind(var2)(var6);
                        var6 = var7.bind(var2)(var6);
 270: // try_end0
                        _fun0004_ip = 285; continue _fun0004;
 272:
                        return var5;
 275:
                        return var4;
 278: // catch_target0
                        CatchBlockStart(arg_register=3);
                        var3 = var3.bind(var2)(var4);
 285:
                        return var2;
 288:
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
    var5['purchaseProduct'] = var6;
    var6 = function canMakePayments() {
        var1 = global;
        var3 = var1.Promise;
        var1 = var3.prototype;
        var2 = Object.create(var1, {constructor: {value: var3}});
        var4 = function(arg1, arg2) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = arg2;
            var _closure3_slot1 = var2;
            var3 = _closure1_slot7;
            var2 = var3.canMakePayments;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = arg1;
                    if(var3) { _fun0005_ip = 48; continue _fun0005 }
 6:
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
 48:
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
    var5['canMakePayments'] = var6;
    var6 = function restorePurchases() {
        var3 = _closure1_slot4;
        var2 = var3.getCurrentUser;
        var2 = var2.bind(var3)();
        var _closure2_slot0 = var2;
        var2 = global;
        var3 = var2.Promise;
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var4 = function(arg1, arg2) {
            var1 = arg1;
            var _closure3_slot0 = var1;
            var1 = arg2;
            var _closure3_slot1 = var1;
            var5 = _closure1_slot7;
            var4 = var5.restorePurchasesForUser;
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 12;
            var3 = var3[var1];
            var1 = undefined;
            var7 = var6.bind(var1)(var3);
            var6 = var7.v3;
            var3 = _closure2_slot0;
            var3 = var3.id;
            var6 = var6.bind(var7)(var3);
            var3 = var6.toString;
            var3 = var3.bind(var6)();
            var2 = function(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var3 = arg1;
                    if(var3) { _fun0006_ip = 25; continue _fun0006 }
 9:
                    var5 = _closure3_slot0;
                    var4 = undefined;
                    var2 = arg2;
                    var2 = var5.bind(var4)(var2);
                    _fun0006_ip = 36; continue _fun0006;
 25:
                    var2 = _closure3_slot1;
                    var1 = undefined;
                    var1 = var2.bind(var1)(var3);
 36:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        };
        var5 = var2;
        var1 = new var5[var3](var4, var3);
        var1 = var1 instanceof Object ? var1 : var2;
        return var1;
    };
    var5['restorePurchases'] = var6;
    var6 = function receiptData() {
        var1 = global;
        var3 = var1.Promise;
        var1 = var3.prototype;
        var2 = Object.create(var1, {constructor: {value: var3}});
        var4 = function(arg1, arg2) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = arg2;
            var _closure3_slot1 = var2;
            var3 = _closure1_slot7;
            var2 = var3.receiptData;
            var1 = function(arg1, arg2) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                    var2 = arg1;
                    if(var2) { _fun0007_ip = 25; continue _fun0007 }
 9:
                    var4 = _closure3_slot0;
                    var3 = undefined;
                    var2 = arg2;
                    var2 = var4.bind(var3)(var2);
                    _fun0007_ip = 70; continue _fun0007;
 25:
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
 70:
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
    var5['receiptData'] = var6;
    var6 = function loadGenericProducts() {
        var1 = global;
        var3 = var1.Promise;
        var2 = var3.all;
        var6 = _closure1_slot1;
        var9 = _closure1_slot2;
        var5 = 7;
        var4 = var9[var5];
        var8 = undefined;
        var11 = var6.bind(var8)(var4);
        var10 = var11.fetchSubscriptions;
        var7 = _closure1_slot0;
        var4 = 8;
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
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var5 = arg1;
                var1 = var5[Symbol.iterator];
                var5 = var1().next;
                var3 = var5().value;
                var2 = var1;
                var7 = undefined;
                var2 = var2 === var7;
                var4 = undefined;
                if(var2) { _fun0008_ip = 27; continue _fun0008 }
 24:
                var4 = var3;
 27:
                var3 = undefined;
                if(var2) { _fun0008_ip = 57; continue _fun0008 }
 32:
                var6 = var5().value;
                var5 = var1;
                var5 = var5 === var7;
                var3 = undefined;
                var2 = var5;
                if(var5) { _fun0008_ip = 57; continue _fun0008 }
 51:
                var3 = var6;
                var2 = var5;
 57:
                if(var2) { _fun0008_ip = 63; continue _fun0008 }
 60:
                var1.return();
 63:
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
    var5['loadGenericProducts'] = var6;
    var6 = 14;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'utils/native/IAPUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['convertToUUID'] = var4;
    var4 = function makeIAPRequest(arg1, arg2) {
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
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0009_ip = 349; continue _fun0009 }
 10:
                        var6 = arg1;
                        var3 = arg2;
                        var2 = undefined;
                        var10 = undefined;
                        var9 = undefined;
                        var7 = _closure1_slot4;
                        var4 = var7.getCurrentUser;
                        var7 = var4.bind(var7)();
                        var10 = var7;
                        var4 = null;
                        if(!(var4 == var7)) { _fun0009_ip = 94; continue _fun0009 }
 47:
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
                        _fun0009_ip = 346; continue _fun0009;
 94: // try_start_0
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 10;
                        var4 = var8[var4];
                        var8 = var7.bind(var2)(var4);
                        var7 = var8.requestPurchase;
                        var4 = {};
                        var12 = _closure2_slot0;
                        var4['requestJSONString'] = var12;
                        var11 = _closure2_slot1;
                        var4['sku'] = var11;
                        var11 = _closure1_slot10;
                        var10 = var10.id;
                        var10 = var11.bind(var2)(var10);
                        var4['appAccountToken'] = var10;
                        var10 = false;
                        var4['andDangerouslyFinishTransactionAutomaticallyIOS'] = var10;
                        var4 = var7.bind(var8)(var4);
                        SaveGenerator(address=180);
 178:
                        return var4;
 180:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=6);
                        if(var7) { _fun0009_ip = 305; continue _fun0009 }
 186:
                        var9 = var4;
                        var8 = global;
                        var7 = var8.Object;
                        var7 = var4 instanceof var7;
                        if(var7) { _fun0009_ip = 238; continue _fun0009 }
 204:
                        var11 = var8.Error;
                        var7 = var11.prototype;
                        var10 = Object.create(var7, {constructor: {value: var11}});
                        var13 = 'Unable to select a platform, no request was made';
                        var14 = var10;
                        var7 = new var14[var11](var13, var12);
                        var7 = var7 instanceof Object ? var7 : var10;
                        throw var7;
 238:
                        var7 = var6;
                        var6 = {};
                        var10 = _closure1_slot9;
                        var11 = var9;
                        var10 = var10.bind(var2)(var11);
                        var6['purchaseResponse'] = var10;
                        var10 = var8.Array;
                        var8 = var10.isArray;
                        var8 = var8.bind(var10)(var11);
                        var10 = var9;
                        if(var8) { _fun0009_ip = 287; continue _fun0009 }
 282:
                        var8 = var10;
                        _fun0009_ip = 293; continue _fun0009;
 287:
                        var9 = 0;
                        var8 = var10[var9];
 293:
                        var6['originalPurchase'] = var8;
                        var6 = var7.bind(var2)(var6);
 303: // try_end0
                        _fun0009_ip = 346; continue _fun0009;
 305:
                        return var4;
 308: // catch_target0
                        CatchBlockStart(arg_register=3);
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var5 = 11;
                        var5 = var7[var5];
                        var6 = var6.bind(var2)(var5);
                        var5 = var6.captureBillingException;
                        var5 = var5.bind(var6)(var4);
                        var3 = var3.bind(var2)(var4);
 346:
                        return var2;
 349:
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
    var3['makeIAPRequest'] = var4;
    var4 = function useCanPurchaseIAP(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var3 = 13;
        var7 = var6[var3];
        var4 = undefined;
        var11 = var5.bind(var4)(var7);
        var10 = var11.useStateFromStores;
        var7 = _closure1_slot4;
        var9 = new Array(1);
        var9[0] = var7;
        var8 = function() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var2 = _closure1_slot4;
                var1 = var2.getCurrentUser;
                var3 = var1.bind(var2)();
                var1 = null;
                var4 = var1 == var3;
                var2 = undefined;
                if(var4) { _fun0010_ip = 33; continue _fun0010 }
 27:
                var2 = var3.verified;
 33:
                var1 = var1 != var2;
                if(!var1) { _fun0010_ip = 43; continue _fun0010 }
 40:
                var1 = var2;
 43:
                return var1;
            }
        };
        var7 = new Array(0);
        var7 = var10.bind(var11)(var9, var8, var7);
        var _closure2_slot1 = var7;
        var3 = var6[var3];
        var4 = var5.bind(var4)(var3);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot5;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var2 = _closure1_slot5;
                var1 = var2.isReady;
                var1 = var1.bind(var2)();
                var1 = !var1;
                if(var1) { _fun0011_ip = 84; continue _fun0011 }
 23:
                var3 = _closure1_slot5;
                var2 = var3.isBusy;
                var2 = var2.bind(var3)();
                if(!var2) { _fun0011_ip = 81; continue _fun0011 }
 40:
                var6 = _closure2_slot0;
                var3 = null;
                var3 = var3 == var6;
                if(var3) { _fun0011_ip = 78; continue _fun0011 }
 56:
                var6 = _closure1_slot5;
                var5 = var6.isPurchasingProduct;
                var4 = _closure2_slot0;
                var4 = var5.bind(var6)(var4);
                var3 = !var4;
 78:
                var2 = var3;
 81:
                var1 = var2;
 84:
                if(var1) { _fun0011_ip = 97; continue _fun0011 }
 87:
                var2 = _closure2_slot1;
                var1 = !var2;
 97:
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        var1 = !var1;
        return var1;
    };
    var3['useCanPurchaseIAP'] = var4;
    var2 = function isStorekit2Avaiable() {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 6;
            var1 = var3[var1];
            var3 = undefined;
            var4 = var4.bind(var3)(var1);
            var1 = var4.isIOS;
            var1 = var1.bind(var4)();
            if(!var1) { _fun0012_ip = 74; continue _fun0012 }
 38:
            var5 = _closure1_slot8;
            var4 = null;
            var4 = var4 == var5;
            var3 = undefined;
            if(var4) { _fun0012_ip = 67; continue _fun0012 }
 53:
            var4 = _closure1_slot8;
            var2 = var4.isAvailable;
            var3 = var2.bind(var4)();
 67:
            var2 = 1;
            var1 = var2 === var3;
 74:
            return var1;
        }
    };
    var3['isStorekit2Avaiable'] = var2;
    return var1;
})();
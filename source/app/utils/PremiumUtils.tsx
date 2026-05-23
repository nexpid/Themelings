// app/utils/PremiumUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var15 = require;
    var67 = metroImportDefault;
    var3 = exports;
    var16 = dependencyMap;
    var _closure1_slot0 = var15;
    var _closure1_slot1 = var67;
    var _closure1_slot2 = var16;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3["@@iterator"];
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot58;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot58;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot57 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot58 = var1;
    var66 = function getPremiumPlanItem(arg1) {
        var1 = arg1;
        var3 = var1.items;
        var2 = var3.find;
        var1 = function(arg1) {
            var3 = _closure1_slot31;
            var2 = var3.has;
            var1 = arg1;
            var1 = var1.planId;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot59 = var66;
    var65 = function getDefaultPrice(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var7 = arguments[1];
            var6 = arguments[2];
            var1 = arguments[3];
            var5 = arguments[4];
            var4 = undefined;
            if(!(var7 === var4)) { _fun0004_ip = 29; continue _fun0004 }
case 36:
            var7 = false;
case 29:
            if(!(var6 === var4)) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var6 = false;
case 37:
            if(!(var1 === var4)) { _fun0004_ip = 39; continue _fun0004 }
case 3:
            var1 = undefined;
case 39:
            if(!(var5 === var4)) { _fun0004_ip = 40; continue _fun0004 }
case 41:
            var5 = true;
case 40:
            var3 = _closure1_slot7;
            var3 = var3.defaultPaymentSourceId;
            var11 = null;
            var9 = var11 != var3;
            var8 = undefined;
            if(!var9) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var8 = var3;
case 42:
            var9 = _closure1_slot9;
            var3 = var9.getPremiumTypeSubscription;
            var3 = var3.bind(var9)();
            var9 = var11 != var3;
            if(!var9) { _fun0004_ip = 11; continue _fun0004 }
case 9:
            var10 = var3.paymentSourceId;
            var9 = var11 != var10;
case 11:
            if(!var9) { _fun0004_ip = 44; continue _fun0004 }
case 45:
            var8 = var3.paymentSourceId;
case 44:
            var3 = _closure1_slot61;
            var2 = {};
            var2['paymentSourceId'] = var8;
            var2['currency'] = var1;
            var16 = arg1;
            var17 = undefined;
            var15 = var7;
            var14 = var6;
            var13 = var2;
            var12 = var5;
            var1 = var17[var3](var16, var15, var14, var13, var12, var11);
            return var1;
        }
    };
    var _closure1_slot60 = var65;
    var64 = function getPrice(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var9 = arg1;
            var1 = arguments[1];
            var6 = arguments[2];
            var16 = arguments[3];
            var4 = arguments[4];
            var5 = undefined;
            if(!(var1 === var5)) { _fun0005_ip = 31; continue _fun0005 }
case 46:
            var1 = false;
case 31:
            if(!(var6 === var5)) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var6 = false;
case 47:
            if(!(var16 === var5)) { _fun0005_ip = 49; continue _fun0005 }
case 33:
            var16 = {};
case 49:
            if(!(var4 === var5)) { _fun0005_ip = 50; continue _fun0005 }
case 51:
            var4 = true;
case 50:
            var10 = var16.paymentSourceId;
            var8 = var16.currency;
            var2 = var16.contextPlanPrices;
            var7 = null;
            if(!(var7 != var2)) { _fun0005_ip = 52; continue _fun0005 }
case 30:
            var2 = var2[var9];
            if(!(var7 == var2)) { _fun0005_ip = 53; continue _fun0005 }
case 52:
            var12 = _closure1_slot8;
            var11 = var12.get;
            var11 = var11.bind(var12)(var9);
            if(!(var7 == var11)) { _fun0005_ip = 54; continue _fun0005 }
case 55:
            var11 = global;
            var13 = var11.Error;
            var11 = var13.prototype;
            var12 = Object.create(var11, {constructor: {value: var13}});
            var20 = 'Plan not found';
            var21 = var12;
            var11 = new var21[var13](var20, var19);
            var11 = var11 instanceof Object ? var11 : var12;
            if(!var4) { _fun0005_ip = 56; continue _fun0005 }
case 57:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var12 = 12;
            var12 = var14[var12];
            var14 = var13.bind(var5)(var12);
            var13 = var14.captureBillingException;
            var12 = {};
            var15 = {};
            var15['planId'] = var9;
            var18 = var7 != var8;
            var17 = 'unknown';
            if(!var18) { _fun0005_ip = 58; continue _fun0005 }
case 59:
            var17 = var8;
case 58:
            var15['currency'] = var17;
            var12['tags'] = var15;
            var15 = {};
            var20 = var15;
            var19 = var16;
            var16 = copyDataProperties(var20, var19);
            var16 = 'isGift';
            var15[15] = var6;
            var12['extra'] = var15;
            var12 = var13.bind(var14)(var11, var12);
case 56:
            throw var11;
case 54:
            var11 = _closure1_slot12;
            var11 = var11.DEFAULT;
            if(var6) { _fun0005_ip = 60; continue _fun0005 }
case 61:
            if(!var1) { _fun0005_ip = 12; continue _fun0005 }
case 62:
            var1 = _closure1_slot12;
            var11 = var1.PREMIUM_TIER_1;
            _fun0005_ip = 12; continue _fun0005;
case 60:
            var1 = _closure1_slot12;
            var11 = var1.GIFT;
case 12:
            var6 = _closure1_slot64;
            var1 = {};
            var1['paymentSourceId'] = var10;
            var1['purchaseType'] = var11;
            var1['currency'] = var8;
            var1 = var6.bind(var5)(var9, var1);
            if(!(var7 != var1)) { _fun0005_ip = 63; continue _fun0005 }
case 64:
            return var1;
case 63:
            var1 = global;
            var12 = var1.Error;
            var1 = var12.prototype;
            var6 = Object.create(var1, {constructor: {value: var12}});
            var20 = "Couldn't find price";
            var21 = var6;
            var1 = new var21[var12](var20, var19);
            var1 = var1 instanceof Object ? var1 : var6;
            if(!var4) { _fun0005_ip = 65; continue _fun0005 }
case 66:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 12;
            var3 = var6[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.captureBillingException;
            var3 = {};
            var6 = {};
            var6['paymentSourceId'] = var10;
            var3['extra'] = var6;
            var6 = {};
            var10 = var11.toString;
            var10 = var10.bind(var11)();
            var6['purchaseType'] = var10;
            var6['planId'] = var9;
            var9 = var7 != var8;
            var7 = 'unknown';
            if(!var9) { _fun0005_ip = 67; continue _fun0005 }
case 68:
            var7 = var8;
case 67:
            var6['currency'] = var7;
            var3['tags'] = var6;
            var3 = var4.bind(var5)(var1, var3);
case 65:
            throw var1;
case 53:
            var1 = {};
            var3 = var2.amount;
            var1['amount'] = var3;
            var3 = var2.currency;
            var1['currency'] = var3;
            var2 = var2.exponent;
            var1['exponent'] = var2;
            var2 = 0;
            var1['tax'] = var2;
            var2 = false;
            var1['taxInclusive'] = var2;
            return var1;
        }
    };
    var _closure1_slot61 = var64;
    var1 = function getPurchaseTypePrices(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var6 = arg1;
            var7 = arg2;
            var3 = _closure1_slot8;
            var1 = var3.get;
            var3 = var1.bind(var3)(var6);
            var4 = null;
            if(!(var4 != var3)) { _fun0006_ip = 69; continue _fun0006 }
case 39:
            var1 = var3.prices;
            if(!(var4 != var1)) { _fun0006_ip = 70; continue _fun0006 }
case 71:
            var1 = var3.prices;
            var1 = var1[var7];
            if(!(var4 != var1)) { _fun0006_ip = 7; continue _fun0006 }
case 72:
            return var1;
case 7:
            var5 = _closure1_slot52;
            var4 = var5.info;
            var1 = global;
            var9 = var1.JSON;
            var8 = var9.stringify;
            var11 = var1.Object;
            var10 = var11.keys;
            var3 = var3.prices;
            var3 = var10.bind(var11)(var3);
            var9 = var8.bind(var9)(var3);
            var3 = var1.HermesInternal;
            var8 = var3.concat;
            var3 = 'Purchase types: ';
            var3 = var8.bind(var3)(var9);
            var3 = var4.bind(var5)(var3);
            var4 = var1.Error;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var3 = 'No prices returned for purchase type ';
            var1 = ' for plan ';
            var14 = var5.bind(var3)(var7, var1, var6);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var15 = var3;
            var1 = new var15[var4](var14, var13);
            var1 = var1 instanceof Object ? var1 : var3;
            throw var1;
case 70:
            var1 = global;
            var4 = var1.Error;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var3 = 'No prices returned for ';
            var1 = ', is your user in the experiment?';
            var14 = var5.bind(var3)(var6, var1);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var15 = var3;
            var1 = new var15[var4](var14, var13);
            var1 = var1 instanceof Object ? var1 : var3;
            throw var1;
case 69:
            var1 = global;
            var4 = var1.Error;
            var1 = var4.prototype;
            var3 = Object.create(var1, {constructor: {value: var4}});
            var14 = 'Plan not found';
            var15 = var3;
            var1 = new var15[var4](var14, var13);
            var1 = var1 instanceof Object ? var1 : var3;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 12;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.captureBillingException;
            var2 = {};
            var5 = {};
            var5['planId'] = var6;
            var6 = var7.toString;
            var6 = var6.bind(var7)();
            var5['purchaseType'] = var6;
            var2['tags'] = var5;
            var2 = var3.bind(var4)(var1, var2);
            throw var1;
        }
    };
    var _closure1_slot62 = var1;
    var63 = function experimentalGetPrices(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var6 = arg1;
            var1 = arguments[1];
            var4 = undefined;
            if(!(var1 === var4)) { _fun0007_ip = 49; continue _fun0007 }
case 73:
            var2 = {};
            var3 = _closure1_slot12;
            var3 = var3.DEFAULT;
            var2['purchaseType'] = var3;
            var1 = var2;
case 49:
            var11 = var1.paymentSourceId;
            var12 = var1.purchaseType;
            var1 = _closure1_slot62;
            var7 = var1.bind(var4)(var6, var12);
            var3 = null;
            if(!(var3 != var11)) { _fun0007_ip = 74; continue _fun0007 }
case 75:
            var1 = var7.paymentSourcePrices;
            var13 = var1[var11];
            if(!(var3 != var13)) { _fun0007_ip = 45; continue _fun0007 }
case 76:
            var5 = var13.length;
            var1 = 0;
            if(!(var1 !== var5)) { _fun0007_ip = 74; continue _fun0007 }
case 77:
            return var13;
case 45:
            var9 = _closure1_slot52;
            var8 = var9.info;
            var1 = global;
            var14 = var1.JSON;
            var10 = var14.stringify;
            var16 = var1.Object;
            var15 = var16.keys;
            var5 = var7.paymentSourcePrices;
            var5 = var15.bind(var16)(var5);
            var14 = var10.bind(var14)(var5);
            var5 = var1.HermesInternal;
            var10 = var5.concat;
            var5 = 'Payment sources IDs: ';
            var5 = var10.bind(var5)(var14);
            var5 = var8.bind(var9)(var5);
            var9 = _closure1_slot52;
            var8 = var9.info;
            var5 = var1.HermesInternal;
            var10 = var5.concat;
            var5 = 'prices: ';
            var5 = var10.bind(var5)(var13);
            var5 = var8.bind(var9)(var5);
            var8 = var1.Error;
            var1 = var8.prototype;
            var5 = Object.create(var1, {constructor: {value: var8}});
            var18 = 'Missing prices for payment source on subscription plan';
            var19 = var5;
            var1 = new var19[var8](var18, var17);
            var9 = var1 instanceof Object ? var1 : var5;
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 12;
            var1 = var8[var1];
            var8 = var5.bind(var4)(var1);
            var5 = var8.captureBillingException;
            var1 = {};
            var10 = {};
            var10['paymentSourceId'] = var11;
            var1['extra'] = var10;
            var10 = {};
            var11 = var12.toString;
            var11 = var11.bind(var12)();
            var10['purchaseType'] = var11;
            var10['planId'] = var6;
            var1['tags'] = var10;
            var1 = var5.bind(var8)(var9, var1);
case 74:
            var1 = var7.countryPrices;
            var1 = var1.prices;
            if(!(var3 != var1)) { _fun0007_ip = 78; continue _fun0007 }
case 79:
            var1 = var7.countryPrices;
            var1 = var1.prices;
            return var1;
case 78:
            var8 = _closure1_slot52;
            var5 = var8.info;
            var1 = global;
            var10 = var1.JSON;
            var9 = var10.stringify;
            var3 = var7.countryPrices;
            var10 = var9.bind(var10)(var3);
            var3 = var1.HermesInternal;
            var9 = var3.concat;
            var3 = 'countryPrices: ';
            var3 = var9.bind(var3)(var10);
            var3 = var5.bind(var8)(var3);
            var5 = var1.Error;
            var1 = var5.prototype;
            var3 = Object.create(var1, {constructor: {value: var5}});
            var18 = 'Missing prices for country';
            var19 = var3;
            var1 = new var19[var5](var18, var17);
            var1 = var1 instanceof Object ? var1 : var3;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 12;
            var2 = var5[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.captureBillingException;
            var2 = {};
            var5 = {};
            var7 = var7.countryPrices;
            var7 = var7.countryCode;
            var5['countryCode'] = var7;
            var5['planId'] = var6;
            var2['tags'] = var5;
            var2 = var3.bind(var4)(var1, var2);
            throw var1;
        }
    };
    var _closure1_slot63 = var63;
    var62 = function experimentalGetPrice(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var7 = arg1;
            var1 = arguments[1];
            var6 = undefined;
            if(!(var1 === var6)) { _fun0008_ip = 80; continue _fun0008 }
case 32:
            var2 = {};
            var4 = _closure1_slot12;
            var4 = var4.DEFAULT;
            var2['purchaseType'] = var4;
            var1 = var2;
case 80:
            var5 = var1.paymentSourceId;
            var8 = var1.purchaseType;
            var9 = var1.currency;
            var _closure2_slot0 = var9;
            var2 = _closure1_slot63;
            var1 = {};
            var1['paymentSourceId'] = var5;
            var1['purchaseType'] = var8;
            var10 = var2.bind(var6)(var7, var1);
            var2 = var10.length;
            var1 = 0;
            if(!(var1 === var2)) { _fun0008_ip = 81; continue _fun0008 }
case 82:
            var12 = _closure1_slot52;
            var11 = var12.warn;
            var2 = global;
            var2 = var2.HermesInternal;
            var15 = var2.concat;
            var21 = 'No prices found for planId: ';
            var19 = ', paymentSourceId: ';
            var17 = ', purchaseType: ';
            var20 = var7;
            var18 = var5;
            var16 = var8;
            var2 = var21[var15](var20, var19, var18, var17, var16, var15);
            var2 = var11.bind(var12)(var2);
case 81:
            var2 = null;
            if(!(var2 == var9)) { _fun0008_ip = 83; continue _fun0008 }
case 84:
            var1 = var10[var1];
            return var1;
case 83:
            var9 = var10.find;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.currency;
                var3 = _closure2_slot0;
                var1 = var3.toLowerCase;
                var1 = var1.bind(var3)();
                var1 = var2 === var1;
                return var1;
            };
            var1 = var9.bind(var10)(var1);
            if(!(var2 == var1)) { _fun0008_ip = 85; continue _fun0008 }
case 86:
            var5 = var2 != var5;
            var2 = undefined;
            if(!var5) { _fun0008_ip = 87; continue _fun0008 }
case 88:
            var5 = _closure1_slot63;
            var4 = {};
            var4['purchaseType'] = var8;
            var5 = var5.bind(var6)(var7, var4);
            var4 = var5.find;
            var3 = function(arg1) {
                var1 = arg1;
                var2 = var1.currency;
                var3 = _closure2_slot0;
                var1 = var3.toLowerCase;
                var1 = var1.bind(var3)();
                var1 = var2 === var1;
                return var1;
            };
            var2 = var4.bind(var5)(var3);
case 87:
            var1 = var2;
case 85:
            return var1;
        }
    };
    var _closure1_slot64 = var62;
    var61 = function getServerPriceFromClientPrice(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.amount;
        var1['amount'] = var3;
        var3 = var2.currency;
        var1['currency'] = var3;
        var2 = var2.exponent;
        var1['exponent'] = var2;
        return var1;
    };
    var _closure1_slot65 = var61;
    var60 = function getItemPlansTotalServerPrice(arg1, arg2, arg3) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var5 = arg1;
            var11 = arg2;
            var10 = arg3;
            var3 = {'currency': null, 'amount': 0, 'tax': 0, 'taxInclusive': false};
            var3['currency'] = var11;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 13;
            var4 = var4[var2];
            var2 = undefined;
            var6 = var6.bind(var2)(var4);
            var4 = var6.getBaseSubscriptionItemForSubscriptionItems;
            var4 = var4.bind(var6)(var5);
            var6 = null;
            var6 = var6 != var4;
            var12 = undefined;
            if(!var6) { _fun0009_ip = 11; continue _fun0009 }
case 89:
            var6 = _closure1_slot41;
            var4 = var4.planId;
            var4 = var6[var4];
            var12 = var4.premiumType;
case 11:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 14;
            var8 = var7[var4];
            var14 = var6.bind(var2)(var8);
            var13 = var14.isPremiumAtLeast;
            var8 = _closure1_slot38;
            var8 = var8.TIER_0;
            var8 = var13.bind(var14)(var12, var8);
            var4 = var7[var4];
            var7 = var6.bind(var2)(var4);
            var6 = var7.isPremiumAtLeast;
            var4 = _closure1_slot38;
            var4 = var4.TIER_2;
            var7 = var6.bind(var7)(var12, var4);
            var4 = _closure1_slot57;
            var6 = var4.bind(var2)(var5);
            var5 = var6.bind(var2)();
            var4 = var5.done;
            if(var4) { _fun0009_ip = 90; continue _fun0009 }
case 88:
            var4 = var5.value;
            var14 = _closure1_slot30;
            var13 = var14.has;
            var12 = var4.planId;
            var12 = var13.bind(var14)(var12);
            var15 = var7;
            if(var12) { _fun0009_ip = 69; continue _fun0009 }
case 91:
            var14 = _closure1_slot31;
            var13 = var14.has;
            var12 = var4.planId;
            var12 = var13.bind(var14)(var12);
            var12 = !var12;
            if(!var12) { _fun0009_ip = 92; continue _fun0009 }
case 93:
            var12 = var8;
case 92:
            var15 = var12;
case 69:
            if(!(var2 !== var10)) { _fun0009_ip = 94; continue _fun0009 }
case 60:
            var14 = _closure1_slot61;
            var20 = var4.planId;
            var12 = {};
            var12['paymentSourceId'] = var10;
            var12['currency'] = var11;
            var21 = undefined;
            var19 = var15;
            var18 = false;
            var17 = var12;
            var13 = var21[var14](var20, var19, var18, var17, var16);
            _fun0009_ip = 95; continue _fun0009;
case 94:
            var14 = _closure1_slot60;
            var20 = var4.planId;
            var21 = undefined;
            var19 = var15;
            var18 = false;
            var17 = var11;
            var13 = var21[var14](var20, var19, var18, var17, var16);
case 95:
            var12 = var3.amount;
            var13 = var13.amount;
            var4 = var4.quantity;
            var4 = var13 * var4;
            var4 = var12 + var4;
            var3['amount'] = var4;
            var12 = var6.bind(var2)();
            var4 = var12.done;
            var5 = var12;
            if(!var4) { _fun0009_ip = 88; continue _fun0009 }
case 90:
            var1 = _closure1_slot65;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot66 = var60;
    var59 = function getInterval(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var7 = arg1;
            var1 = _closure1_slot41;
            var2 = var1[var7];
            var1 = null;
            if(!(var1 == var2)) { _fun0010_ip = 96; continue _fun0010 }
case 29:
            var1 = global;
            var5 = var1.Error;
            var1 = var5.prototype;
            var4 = Object.create(var1, {constructor: {value: var5}});
            var9 = 'Unsupported plan';
            var10 = var4;
            var1 = new var10[var5](var9, var8);
            var1 = var1 instanceof Object ? var1 : var4;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 12;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.captureBillingException;
            var3 = {};
            var6 = {};
            var6['planId'] = var7;
            var3['tags'] = var6;
            var3 = var4.bind(var5)(var1, var3);
            throw var1;
case 96:
            var1 = {};
            var3 = var2.interval;
            var1['intervalType'] = var3;
            var2 = var2.intervalCount;
            var1['intervalCount'] = var2;
            return var1;
        }
    };
    var58 = function getIntervalString(arg1, arg2, arg3) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var5 = arg1;
            var10 = arguments[3];
            var3 = arguments[4];
            var4 = arguments[5];
            var6 = undefined;
            if(!(var10 === var6)) { _fun0011_ip = 46; continue _fun0011 }
case 36:
            var10 = 1;
case 46:
            if(!(var3 === var6)) { _fun0011_ip = 48; continue _fun0011 }
case 97:
            var3 = false;
case 48:
            if(!(var4 === var6)) { _fun0011_ip = 98; continue _fun0011 }
case 99:
            var1 = _closure1_slot38;
            var4 = var1.TIER_2;
case 98:
            var1 = arg2;
            if(var1) { _fun0011_ip = 100; continue _fun0011 }
case 101:
            var1 = arg3;
            if(var1) { _fun0011_ip = 100; continue _fun0011 }
case 43:
            var1 = _closure1_slot40;
            var1 = var1.MONTH;
            if(!(var1 !== var5)) { _fun0011_ip = 58; continue _fun0011 }
case 102:
            var1 = _closure1_slot40;
            var1 = var1.YEAR;
            if(!(var1 !== var5)) { _fun0011_ip = 103; continue _fun0011 }
case 104:
            var1 = global;
            var8 = var1.Error;
            var1 = var8.prototype;
            var7 = Object.create(var1, {constructor: {value: var8}});
            var15 = 'Unexpected interval';
            var16 = var7;
            var1 = new var16[var8](var15, var14);
            var1 = var1 instanceof Object ? var1 : var7;
            throw var1;
case 103:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 16;
            var7 = var11[var1];
            var7 = var9.bind(var6)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var1 = var11[var1];
            var1 = var9.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1["/Q4HRN"];
            var1 = var7.bind(var8)(var1);
            return var1;
case 58:
            var1 = 1;
            if(!(var1 === var10)) { _fun0011_ip = 105; continue _fun0011 }
case 20:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 16;
            var7 = var11[var1];
            var7 = var9.bind(var6)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var1 = var11[var1];
            var1 = var9.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.DKzs96;
            var1 = var7.bind(var8)(var1);
            _fun0011_ip = 106; continue _fun0011;
case 105:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 16;
            var8 = var11[var2];
            var8 = var7.bind(var6)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var2 = var11[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var7 = var2["0UlZnH"];
            var2 = {};
            var2['intervalCount'] = var10;
            var1 = var8.bind(var9)(var7, var2);
case 106:
            return var1;
case 100:
            var1 = _closure1_slot40;
            var1 = var1.MONTH;
            if(!(var1 !== var5)) { _fun0011_ip = 107; continue _fun0011 }
case 108:
            var1 = _closure1_slot40;
            var1 = var1.YEAR;
            if(!(var1 !== var5)) { _fun0011_ip = 109; continue _fun0011 }
case 110:
            var1 = global;
            var7 = var1.Error;
            var1 = var7.prototype;
            var5 = Object.create(var1, {constructor: {value: var7}});
            var15 = 'Unexpected interval';
            var16 = var5;
            var1 = new var16[var7](var15, var14);
            var1 = var1 instanceof Object ? var1 : var5;
            throw var1;
case 109:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var10 = 16;
            var1 = var1[var10];
            var1 = var5.bind(var6)(var1);
            var8 = var1.intl;
            var7 = var8.formatToPlainString;
            var1 = _closure1_slot38;
            var1 = var1.TIER_0;
            if(!(var4 !== var1)) { _fun0011_ip = 111; continue _fun0011 }
case 112:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var10];
            var1 = var5.bind(var6)(var1);
            var1 = var1.t;
            var5 = var1.poEovT;
            _fun0011_ip = 113; continue _fun0011;
case 111:
            var9 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var10];
            var1 = var9.bind(var6)(var1);
            var1 = var1.t;
            var5 = var1.NPKsLz;
case 113:
            var1 = {};
            var13 = _closure1_slot0;
            var9 = _closure1_slot2;
            var11 = var9[var10];
            var11 = var13.bind(var6)(var11);
            var12 = var11.intl;
            var11 = var12.string;
            var9 = var9[var10];
            var9 = var13.bind(var6)(var9);
            var9 = var9.t;
            var9 = var9.tfqrhj;
            var9 = var11.bind(var12)(var9);
            var1['timeInterval'] = var9;
            var1 = var7.bind(var8)(var5, var1);
            if(var3) { _fun0011_ip = 114; continue _fun0011 }
case 115:
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var7 = var5[var10];
            var7 = var9.bind(var6)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var5 = var5[var10];
            var5 = var9.bind(var6)(var5);
            var5 = var5.t;
            var5 = var5.DRgqMo;
            var1 = var7.bind(var8)(var5);
case 114:
            return var1;
case 107:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 16;
            var1 = var1[var7];
            var1 = var5.bind(var6)(var1);
            var8 = var1.intl;
            var5 = var8.formatToPlainString;
            var1 = _closure1_slot38;
            var1 = var1.TIER_0;
            if(!(var4 !== var1)) { _fun0011_ip = 116; continue _fun0011 }
case 117:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var4.bind(var6)(var1);
            var1 = var1.t;
            var4 = var1.poEovT;
            _fun0011_ip = 118; continue _fun0011;
case 116:
            var9 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var9.bind(var6)(var1);
            var1 = var1.t;
            var4 = var1.NPKsLz;
case 118:
            var1 = {};
            var12 = _closure1_slot0;
            var9 = _closure1_slot2;
            var10 = var9[var7];
            var10 = var12.bind(var6)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var9[var7];
            var9 = var12.bind(var6)(var9);
            var9 = var9.t;
            var9 = var9.FPybU7;
            var9 = var10.bind(var11)(var9);
            var1['timeInterval'] = var9;
            var1 = var5.bind(var8)(var4, var1);
            if(var3) { _fun0011_ip = 119; continue _fun0011 }
case 120:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = var2[var7];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var2[var7];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.Mh9bTt;
            var1 = var3.bind(var4)(var2);
case 119:
            return var1;
        }
    };
    var57 = function getIntervalStringAsNoun(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot40;
            var2 = var2.MONTH;
            if(!(var2 !== var3)) { _fun0012_ip = 103; continue _fun0012 }
case 29:
            var2 = _closure1_slot40;
            var2 = var2.YEAR;
            if(!(var2 !== var3)) { _fun0012_ip = 35; continue _fun0012 }
case 121:
            var2 = global;
            var4 = var2.Error;
            var2 = var4.prototype;
            var3 = Object.create(var2, {constructor: {value: var4}});
            var8 = 'Unexpected interval';
            var9 = var3;
            var2 = new var9[var4](var8, var7);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 35:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 16;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.tfqrhj;
            var2 = var3.bind(var4)(var2);
            return var2;
case 103:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 16;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.FPybU7;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot67 = var57;
    var56 = function getPremiumType(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var7 = arg1;
            var1 = _closure1_slot41;
            var1 = var1[var7];
            var2 = null;
            if(!(var2 == var1)) { _fun0013_ip = 96; continue _fun0013 }
case 29:
            var2 = global;
            var5 = var2.Error;
            var2 = var5.prototype;
            var4 = Object.create(var2, {constructor: {value: var5}});
            var9 = 'Unsupported plan';
            var10 = var4;
            var2 = new var10[var5](var9, var8);
            var2 = var2 instanceof Object ? var2 : var4;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 12;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.captureBillingException;
            var3 = {};
            var6 = {};
            var6['planId'] = var7;
            var3['tags'] = var6;
            var3 = var4.bind(var5)(var2, var3);
            throw var2;
case 96:
            var1 = var1.premiumType;
            return var1;
        }
    };
    var _closure1_slot68 = var56;
    var55 = function getDisplayName(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var11 = arg1;
            var4 = arguments[1];
            var1 = arguments[2];
            var6 = arguments[3];
            var7 = undefined;
            if(!(var4 === var7)) { _fun0014_ip = 29; continue _fun0014 }
case 36:
            var4 = false;
case 29:
            if(!(var1 === var7)) { _fun0014_ip = 37; continue _fun0014 }
case 38:
            var1 = false;
case 37:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_MONTH_TIER_0;
            if(!(var3 !== var11)) { _fun0014_ip = 122; continue _fun0014 }
case 2:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_YEAR_TIER_0;
            if(!(var3 !== var11)) { _fun0014_ip = 123; continue _fun0014 }
case 124:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_MONTH_TIER_1;
            if(!(var3 !== var11)) { _fun0014_ip = 125; continue _fun0014 }
case 126:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_YEAR_TIER_1;
            if(!(var3 !== var11)) { _fun0014_ip = 127; continue _fun0014 }
case 77:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_MONTH_TIER_2;
            if(!(var3 !== var11)) { _fun0014_ip = 128; continue _fun0014 }
case 129:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_GROUP_MONTH;
            if(!(var3 !== var11)) { _fun0014_ip = 130; continue _fun0014 }
case 131:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_YEAR_TIER_2;
            if(!(var3 !== var11)) { _fun0014_ip = 132; continue _fun0014 }
case 133:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_3_MONTH_TIER_2;
            if(!(var3 !== var11)) { _fun0014_ip = 134; continue _fun0014 }
case 83:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_6_MONTH_TIER_2;
            if(!(var3 !== var11)) { _fun0014_ip = 135; continue _fun0014 }
case 136:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_MONTH_GUILD;
            if(!(var3 !== var11)) { _fun0014_ip = 137; continue _fun0014 }
case 138:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_YEAR_GUILD;
            if(!(var3 !== var11)) { _fun0014_ip = 139; continue _fun0014 }
case 140:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_3_MONTH_GUILD;
            if(!(var3 !== var11)) { _fun0014_ip = 141; continue _fun0014 }
case 142:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_6_MONTH_GUILD;
            if(!(var3 !== var11)) { _fun0014_ip = 143; continue _fun0014 }
case 93:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_MONTH_LEGACY;
            if(!(var3 !== var11)) { _fun0014_ip = 144; continue _fun0014 }
case 145:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_YEAR_LEGACY;
            if(!(var3 !== var11)) { _fun0014_ip = 146; continue _fun0014 }
case 147:
            var3 = global;
            var8 = var3.Error;
            var3 = var8.prototype;
            var5 = Object.create(var3, {constructor: {value: var8}});
            var15 = 'Unsupported plan';
            var16 = var5;
            var3 = new var16[var8](var15, var14);
            var3 = var3 instanceof Object ? var3 : var5;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var5 = 12;
            var5 = var9[var5];
            var9 = var8.bind(var7)(var5);
            var8 = var9.captureBillingException;
            var5 = {};
            var10 = {};
            var10['planId'] = var11;
            var5['tags'] = var10;
            var5 = var8.bind(var9)(var3, var5);
            throw var3;
case 146:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 16;
            var5 = var10[var3];
            var5 = var9.bind(var7)(var5);
            var8 = var5.intl;
            var5 = var8.string;
            var3 = var10[var3];
            var3 = var9.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.LtJgTC;
            var3 = var5.bind(var8)(var3);
            return var3;
case 144:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 16;
            var5 = var10[var3];
            var5 = var9.bind(var7)(var5);
            var8 = var5.intl;
            var5 = var8.string;
            var3 = var10[var3];
            var3 = var9.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.PD6k79;
            var3 = var5.bind(var8)(var3);
            return var3;
case 143:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 16;
            var5 = var10[var3];
            var5 = var9.bind(var7)(var5);
            var8 = var5.intl;
            var5 = var8.string;
            var3 = var10[var3];
            var3 = var9.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.X2KDO2;
            var3 = var5.bind(var8)(var3);
            return var3;
case 141:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 16;
            var5 = var10[var3];
            var5 = var9.bind(var7)(var5);
            var8 = var5.intl;
            var5 = var8.string;
            var3 = var10[var3];
            var3 = var9.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.EZHHB6;
            var3 = var5.bind(var8)(var3);
            return var3;
case 139:
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 16;
            var8 = var10[var3];
            var8 = var5.bind(var7)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var3 = var10[var3];
            var3 = var5.bind(var7)(var3);
            var5 = var3.t;
            if(var1) { _fun0014_ip = 148; continue _fun0014 }
case 149:
            var3 = var5.ZHkls0;
            var3 = var8.bind(var9)(var3);
            _fun0014_ip = 150; continue _fun0014;
case 148:
            var5 = var5.YDpAzZ;
            var3 = var8.bind(var9)(var5);
case 150:
            return var3;
case 137:
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 16;
            var8 = var10[var3];
            var8 = var5.bind(var7)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var3 = var10[var3];
            var3 = var5.bind(var7)(var3);
            var5 = var3.t;
            if(var1) { _fun0014_ip = 151; continue _fun0014 }
case 152:
            var3 = var5.h80cx/;
            var3 = var8.bind(var9)(var3);
            _fun0014_ip = 153; continue _fun0014;
case 151:
            var5 = var5["6ZR3By"];
            var3 = var8.bind(var9)(var5);
case 153:
            return var3;
case 135:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 16;
            var5 = var10[var3];
            var5 = var9.bind(var7)(var5);
            var8 = var5.intl;
            var5 = var8.string;
            var3 = var10[var3];
            var3 = var9.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.e3/ArU;
            var3 = var5.bind(var8)(var3);
            return var3;
case 134:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 16;
            var5 = var10[var3];
            var5 = var9.bind(var7)(var5);
            var8 = var5.intl;
            var5 = var8.string;
            var3 = var10[var3];
            var3 = var9.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.wCbINr;
            var3 = var5.bind(var8)(var3);
            return var3;
case 132:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 16;
            var3 = var11[var5];
            var3 = var8.bind(var7)(var3);
            var10 = var3.intl;
            if(var4) { _fun0014_ip = 154; continue _fun0014 }
case 155:
            var12 = var10.string;
            var3 = var11[var5];
            var3 = var8.bind(var7)(var3);
            var9 = var3.t;
            if(var1) { _fun0014_ip = 156; continue _fun0014 }
case 157:
            var3 = var9.cfu/5d;
            var3 = var12.bind(var10)(var3);
            _fun0014_ip = 158; continue _fun0014;
case 156:
            var9 = var9.JIq4O1;
            var3 = var12.bind(var10)(var9);
case 158:
            _fun0014_ip = 159; continue _fun0014;
case 154:
            var9 = var10.format;
            var5 = var11[var5];
            var5 = var8.bind(var7)(var5);
            var5 = var5.t;
            var8 = var5["1wBcPi"];
            var5 = {};
            var5['duration'] = var6;
            var3 = var9.bind(var10)(var8, var5);
case 159:
            return var3;
case 130:
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 16;
            var8 = var10[var3];
            var8 = var5.bind(var7)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var3 = var10[var3];
            var3 = var5.bind(var7)(var3);
            var5 = var3.t;
            if(var1) { _fun0014_ip = 160; continue _fun0014 }
case 161:
            var3 = var5.FKYNC6;
            var3 = var8.bind(var9)(var3);
            _fun0014_ip = 162; continue _fun0014;
case 160:
            var5 = var5.SmVbHc;
            var3 = var8.bind(var9)(var5);
case 162:
            return var3;
case 128:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 16;
            var3 = var11[var5];
            var3 = var8.bind(var7)(var3);
            var10 = var3.intl;
            if(var4) { _fun0014_ip = 163; continue _fun0014 }
case 164:
            var12 = var10.string;
            var3 = var11[var5];
            var3 = var8.bind(var7)(var3);
            var9 = var3.t;
            if(var1) { _fun0014_ip = 165; continue _fun0014 }
case 166:
            var3 = var9.FKYNC6;
            var3 = var12.bind(var10)(var3);
            _fun0014_ip = 167; continue _fun0014;
case 165:
            var9 = var9.SmVbHc;
            var3 = var12.bind(var10)(var9);
case 167:
            _fun0014_ip = 168; continue _fun0014;
case 163:
            var9 = var10.format;
            var5 = var11[var5];
            var5 = var8.bind(var7)(var5);
            var5 = var5.t;
            var8 = var5.aI6QXz;
            var5 = {};
            var5['duration'] = var6;
            var3 = var9.bind(var10)(var8, var5);
case 168:
            return var3;
case 127:
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 16;
            var8 = var10[var3];
            var8 = var5.bind(var7)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var3 = var10[var3];
            var3 = var5.bind(var7)(var3);
            var5 = var3.t;
            if(var1) { _fun0014_ip = 169; continue _fun0014 }
case 170:
            var3 = var5.Md5xbi;
            var3 = var8.bind(var9)(var3);
            _fun0014_ip = 171; continue _fun0014;
case 169:
            var5 = var5.pdZJaq;
            var3 = var8.bind(var9)(var5);
case 171:
            return var3;
case 125:
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 16;
            var8 = var10[var3];
            var8 = var5.bind(var7)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var3 = var10[var3];
            var3 = var5.bind(var7)(var3);
            var5 = var3.t;
            if(var1) { _fun0014_ip = 172; continue _fun0014 }
case 173:
            var3 = var5["7O6qSq"];
            var3 = var8.bind(var9)(var3);
            _fun0014_ip = 174; continue _fun0014;
case 172:
            var5 = var5.g/dH5g;
            var3 = var8.bind(var9)(var5);
case 174:
            return var3;
case 123:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 16;
            var3 = var11[var5];
            var3 = var8.bind(var7)(var3);
            var10 = var3.intl;
            if(var4) { _fun0014_ip = 175; continue _fun0014 }
case 176:
            var12 = var10.string;
            var3 = var11[var5];
            var3 = var8.bind(var7)(var3);
            var9 = var3.t;
            if(var1) { _fun0014_ip = 177; continue _fun0014 }
case 178:
            var3 = var9.eoVuBn;
            var3 = var12.bind(var10)(var3);
            _fun0014_ip = 179; continue _fun0014;
case 177:
            var9 = var9.UvzqY1;
            var3 = var12.bind(var10)(var9);
case 179:
            _fun0014_ip = 180; continue _fun0014;
case 175:
            var9 = var10.format;
            var5 = var11[var5];
            var5 = var8.bind(var7)(var5);
            var5 = var5.t;
            var8 = var5.eqRhC7;
            var5 = {};
            var5['duration'] = var6;
            var3 = var9.bind(var10)(var8, var5);
case 180:
            return var3;
case 122:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 16;
            var5 = var8[var2];
            var5 = var3.bind(var7)(var5);
            var5 = var5.intl;
            if(var4) { _fun0014_ip = 181; continue _fun0014 }
case 182:
            var9 = var5.string;
            var4 = var8[var2];
            var4 = var3.bind(var7)(var4);
            var4 = var4.t;
            if(var1) { _fun0014_ip = 183; continue _fun0014 }
case 184:
            var1 = var4["0efVPy"];
            var1 = var9.bind(var5)(var1);
            _fun0014_ip = 185; continue _fun0014;
case 183:
            var4 = var4["81iAgs"];
            var1 = var9.bind(var5)(var4);
case 185:
            _fun0014_ip = 186; continue _fun0014;
case 181:
            var4 = var5.format;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            var3 = var2.TZXHNj;
            var2 = {};
            var2['duration'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 186:
            return var1;
        }
    };
    var _closure1_slot69 = var55;
    var54 = function getTierDisplayNameByPlanId(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var9 = arg1;
            var2 = _closure1_slot41;
            var3 = var2[var9];
            var2 = null;
            var5 = var2 == var3;
            var4 = undefined;
            var6 = undefined;
            if(var5) { _fun0015_ip = 33; continue _fun0015 }
case 48:
            var6 = var3.premiumType;
case 33:
            var5 = var2 != var6;
            var3 = null;
            if(!var5) { _fun0015_ip = 187; continue _fun0015 }
case 188:
            var5 = _closure1_slot36;
            var3 = var5[var6];
case 187:
            if(!(var2 == var3)) { _fun0015_ip = 189; continue _fun0015 }
case 190:
            var2 = global;
            var6 = var2.Error;
            var2 = var6.prototype;
            var5 = Object.create(var2, {constructor: {value: var6}});
            var11 = 'Unsupported plan';
            var12 = var5;
            var2 = new var12[var6](var11, var10);
            var2 = var2 instanceof Object ? var2 : var5;
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 12;
            var5 = var7[var5];
            var7 = var6.bind(var4)(var5);
            var6 = var7.captureBillingException;
            var5 = {};
            var8 = {};
            var8['planId'] = var9;
            var5['tags'] = var8;
            var5 = var6.bind(var7)(var2, var5);
            throw var2;
case 189:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 16;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.intl;
            var1 = var2.string;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var76 = function getPlanDescription(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var3 = arg1;
            var13 = var3.subscription;
            var17 = var3.planId;
            var7 = var3.price;
            var10 = var3.includePremiumGuilds;
            var16 = var3.hasDiscountApplied;
            var24 = var3.activeDiscountInfo;
            var2 = var3.renewalInvoiceWithoutEntitlementsPreview;
            var1 = var3.renewalInvoiceWithEntitlementsPreview;
            var6 = var3.hasFractionalPremiumWithSub;
            var4 = _closure1_slot41;
            var4 = var4[var17];
            var9 = _closure1_slot96;
            var11 = _closure1_slot60;
            var5 = var4.id;
            var8 = undefined;
            var5 = var11.bind(var8)(var5);
            var4 = var4.interval;
            var22 = var9.bind(var8)(var5, var4);
            var4 = null;
            var5 = var4 != var1;
            if(!var5) { _fun0016_ip = 191; continue _fun0016 }
case 192:
            var9 = var1.subtotal;
            var1 = 0;
            var5 = var1 === var9;
case 191:
            var1 = _closure1_slot83;
            var9 = var1.bind(var8)(var13);
            if(var9) { _fun0016_ip = 193; continue _fun0016 }
case 194:
            var1 = var13.paymentSourceId;
            var1 = var4 == var1;
            if(!var1) { _fun0016_ip = 195; continue _fun0016 }
case 133:
            var11 = var13.isPurchasedExternally;
            var1 = !var11;
case 195:
            if(!var1) { _fun0016_ip = 20; continue _fun0016 }
case 196:
            var12 = _closure1_slot5;
            var11 = var12.getCurrentUser;
            var14 = var11.bind(var12)();
            var11 = var4 != var14;
            if(!var11) { _fun0016_ip = 197; continue _fun0016 }
case 198:
            var12 = var14.hasFreePremium;
            var11 = var12.bind(var14)();
case 197:
            var1 = !var11;
case 20:
            if(!var1) { _fun0016_ip = 199; continue _fun0016 }
case 200:
            var1 = !var5;
case 199:
            var9 = var1;
case 193:
            var1 = var4 != var7;
            if(!var1) { _fun0016_ip = 201; continue _fun0016 }
case 202:
            var5 = var13.paymentGateway;
            var1 = var4 == var5;
case 201:
            var11 = var13.status;
            var5 = _closure1_slot13;
            var5 = var5.UNPAID;
            var5 = var11 === var5;
            if(!var5) { _fun0016_ip = 92; continue _fun0016 }
case 203:
            var11 = var13.latestInvoice;
            var5 = var4 !== var11;
case 92:
            if(!var5) { _fun0016_ip = 204; continue _fun0016 }
case 69:
            var11 = var13.latestInvoice;
            var14 = var4 == var11;
            var12 = undefined;
            if(var14) { _fun0016_ip = 205; continue _fun0016 }
case 206:
            var12 = var11.status;
case 205:
            var11 = _closure1_slot10;
            var11 = var11.OPEN;
            var5 = var12 === var11;
case 204:
            if(var9) { _fun0016_ip = 207; continue _fun0016 }
case 208:
            if(var5) { _fun0016_ip = 63; continue _fun0016 }
case 209:
            var11 = var13.status;
            _fun0016_ip = 210; continue _fun0016;
case 63:
            var5 = _closure1_slot13;
            var11 = var5.UNPAID;
case 210:
            _fun0016_ip = 211; continue _fun0016;
case 207:
            var5 = _closure1_slot13;
            var11 = var5.CANCELED;
case 211:
            var9 = var4 == var2;
            var5 = undefined;
            if(var9) { _fun0016_ip = 66; continue _fun0016 }
case 79:
            var5 = var2.taxInclusive;
case 66:
            if(!(var4 == var5)) { _fun0016_ip = 212; continue _fun0016 }
case 213:
            var9 = var13.latestInvoice;
            var12 = var4 == var9;
            var2 = undefined;
            if(var12) { _fun0016_ip = 214; continue _fun0016 }
case 215:
            var2 = var9.taxInclusive;
case 214:
            var5 = var2;
case 212:
            var2 = var4 == var5;
            if(var2) { _fun0016_ip = 216; continue _fun0016 }
case 217:
            var2 = var5;
case 216:
            var9 = _closure1_slot27;
            var5 = 0;
            if(!var10) { _fun0016_ip = 218; continue _fun0016 }
case 219:
            var12 = _closure1_slot72;
            var10 = var13.additionalPlans;
            var5 = var12.bind(var8)(var10);
case 218:
            var20 = var9 + var5;
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var9 = 16;
            var5 = var10[var9];
            var5 = var12.bind(var8)(var5);
            var19 = var5.intl;
            if(var1) { _fun0016_ip = 220; continue _fun0016 }
case 221:
            var14 = var19.string;
            var5 = var10[var9];
            var5 = var12.bind(var8)(var5);
            var5 = var5.t;
            var5 = var5.zYx3Y6;
            var5 = var14.bind(var19)(var5);
            _fun0016_ip = 222; continue _fun0016;
case 220:
            var18 = var19.format;
            var10 = var10[var9];
            var10 = var12.bind(var8)(var10);
            var12 = var10.t;
            if(var2) { _fun0016_ip = 223; continue _fun0016 }
case 224:
            var14 = var12.NUkcpF;
            var10 = {};
            var10['price'] = var7;
            var10 = var18.bind(var19)(var14, var10);
            _fun0016_ip = 225; continue _fun0016;
case 223:
            var14 = var12.cd+hqB;
            var12 = {};
            var12['price'] = var7;
            var10 = var18.bind(var19)(var14, var12);
case 225:
            var5 = var10;
case 222:
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = var12[var9];
            var10 = var14.bind(var8)(var10);
            var21 = var10.intl;
            if(var1) { _fun0016_ip = 226; continue _fun0016 }
case 227:
            var18 = var21.string;
            var10 = var12[var9];
            var10 = var14.bind(var8)(var10);
            var10 = var10.t;
            var10 = var10["8rSipI"];
            var10 = var18.bind(var21)(var10);
            _fun0016_ip = 228; continue _fun0016;
case 226:
            var19 = var21.format;
            var12 = var12[var9];
            var12 = var14.bind(var8)(var12);
            var14 = var12.t;
            if(var2) { _fun0016_ip = 229; continue _fun0016 }
case 230:
            var18 = var14.hJ5xEX;
            var12 = {};
            var12['price'] = var7;
            var12 = var19.bind(var21)(var18, var12);
            _fun0016_ip = 231; continue _fun0016;
case 229:
            var18 = var14.VsKcFB;
            var14 = {};
            var14['price'] = var7;
            var12 = var19.bind(var21)(var18, var14);
case 231:
            var10 = var12;
case 228:
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var18 = var12[var9];
            var18 = var14.bind(var8)(var18);
            var23 = var18.intl;
            var21 = var23.format;
            var12 = var12[var9];
            var12 = var14.bind(var8)(var12);
            var18 = var12.t;
            if(var1) { _fun0016_ip = 232; continue _fun0016 }
case 233:
            var14 = var18.U+z/HJ;
            var12 = {};
            var12['num'] = var20;
            var12 = var21.bind(var23)(var14, var12);
            _fun0016_ip = 234; continue _fun0016;
case 232:
            if(var2) { _fun0016_ip = 235; continue _fun0016 }
case 236:
            var19 = var18.tTNE8M;
            var14 = {};
            var14['price'] = var7;
            var14['num'] = var20;
            var14 = var21.bind(var23)(var19, var14);
            _fun0016_ip = 237; continue _fun0016;
case 235:
            var19 = var18.jRy6/J;
            var18 = {};
            var18['price'] = var7;
            var18['num'] = var20;
            var14 = var21.bind(var23)(var19, var18);
case 237:
            var12 = var14;
case 234:
            var14 = _closure1_slot42;
            var14 = var14.PREMIUM_MONTH_TIER_0;
            if(!(var14 !== var17)) { _fun0016_ip = 238; continue _fun0016 }
case 239:
            var14 = _closure1_slot42;
            var14 = var14.PREMIUM_YEAR_TIER_0;
            if(!(var14 !== var17)) { _fun0016_ip = 238; continue _fun0016 }
case 240:
            var14 = _closure1_slot42;
            var14 = var14.PREMIUM_MONTH_TIER_1;
            if(!(var14 !== var17)) { _fun0016_ip = 241; continue _fun0016 }
case 242:
            var14 = _closure1_slot42;
            var14 = var14.PREMIUM_YEAR_TIER_1;
            if(!(var14 !== var17)) { _fun0016_ip = 241; continue _fun0016 }
case 243:
            var14 = _closure1_slot42;
            var14 = var14.PREMIUM_MONTH_TIER_2;
            if(!(var14 !== var17)) { _fun0016_ip = 244; continue _fun0016 }
case 245:
            var14 = _closure1_slot42;
            var14 = var14.PREMIUM_YEAR_TIER_2;
            if(!(var14 !== var17)) { _fun0016_ip = 244; continue _fun0016 }
case 246:
            var14 = _closure1_slot42;
            var14 = var14.PREMIUM_3_MONTH_TIER_2;
            if(!(var14 !== var17)) { _fun0016_ip = 244; continue _fun0016 }
case 247:
            var14 = _closure1_slot42;
            var14 = var14.PREMIUM_6_MONTH_TIER_2;
            if(!(var14 !== var17)) { _fun0016_ip = 244; continue _fun0016 }
case 248:
            var14 = _closure1_slot42;
            var14 = var14.PREMIUM_GROUP_MONTH;
            if(!(var14 !== var17)) { _fun0016_ip = 244; continue _fun0016 }
case 249:
            var14 = global;
            var19 = var14.Error;
            var14 = var14.HermesInternal;
            var18 = var14.concat;
            var14 = 'Invalid planId ';
            var27 = var18.bind(var14)(var17);
            var18 = var19.prototype;
            var18 = Object.create(var18, {constructor: {value: var19}});
            var28 = var18;
            var14 = new var28[var19](var27, var26);
            var14 = var14 instanceof Object ? var14 : var18;
            throw var14;
case 244:
            var14 = _closure1_slot13;
            var14 = var14.CANCELED;
            if(!(var14 !== var11)) { _fun0016_ip = 250; continue _fun0016 }
case 251:
            var14 = _closure1_slot13;
            var14 = var14.ACCOUNT_HOLD;
            if(!(var14 !== var11)) { _fun0016_ip = 252; continue _fun0016 }
case 253:
            var14 = _closure1_slot13;
            var14 = var14.UNPAID;
            if(!(var14 !== var11)) { _fun0016_ip = 254; continue _fun0016 }
case 255:
            var14 = _closure1_slot13;
            var14 = var14.PAUSE_PENDING;
            if(!(var14 !== var11)) { _fun0016_ip = 256; continue _fun0016 }
case 257:
            var14 = _closure1_slot13;
            var14 = var14.PAUSED;
            if(!(var14 !== var11)) { _fun0016_ip = 258; continue _fun0016 }
case 259:
            var14 = _closure1_slot13;
            var14 = var14.BILLING_RETRY;
            if(!(var14 !== var11)) { _fun0016_ip = 185; continue _fun0016 }
case 260:
            var14 = _closure1_slot13;
            var14 = var14.PAST_DUE;
            if(!(var14 !== var11)) { _fun0016_ip = 261; continue _fun0016 }
case 262:
            var14 = var12;
            if(!var16) { _fun0016_ip = 263; continue _fun0016 }
case 264:
            var16 = _closure1_slot42;
            var16 = var16.PREMIUM_YEAR_TIER_2;
            if(!(var17 !== var16)) { _fun0016_ip = 265; continue _fun0016 }
case 266:
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var18 = var16[var9];
            var18 = var17.bind(var8)(var18);
            var21 = var18.intl;
            var19 = var21.formatToPlainString;
            var16 = var16[var9];
            var16 = var17.bind(var8)(var16);
            var17 = var16.t;
            if(var2) { _fun0016_ip = 267; continue _fun0016 }
case 268:
            var18 = var17.G6+XOT;
            var16 = {};
            var25 = var4 == var24;
            var23 = undefined;
            if(var25) { _fun0016_ip = 269; continue _fun0016 }
case 270:
            var23 = var24.percentage;
case 269:
            if(!(var4 == var23)) { _fun0016_ip = 271; continue _fun0016 }
case 272:
            var23 = _closure1_slot20;
case 271:
            var16['percent'] = var23;
            var16['regularPrice'] = var22;
            var25 = var4 == var24;
            var23 = undefined;
            if(var25) { _fun0016_ip = 273; continue _fun0016 }
case 274:
            var23 = var24.duration;
case 273:
            if(!(var4 == var23)) { _fun0016_ip = 275; continue _fun0016 }
case 276:
            var23 = _closure1_slot19;
case 275:
            var16['numMonths'] = var23;
            var16 = var19.bind(var21)(var18, var16);
            _fun0016_ip = 277; continue _fun0016;
case 267:
            var18 = var17["3ZiutU"];
            var17 = {};
            var25 = var4 == var24;
            var23 = undefined;
            if(var25) { _fun0016_ip = 278; continue _fun0016 }
case 279:
            var23 = var24.percentage;
case 278:
            if(!(var4 == var23)) { _fun0016_ip = 280; continue _fun0016 }
case 281:
            var23 = _closure1_slot20;
case 280:
            var17['percent'] = var23;
            var17['regularPrice'] = var22;
            var25 = var4 == var24;
            var23 = undefined;
            if(var25) { _fun0016_ip = 282; continue _fun0016 }
case 283:
            var23 = var24.duration;
case 282:
            if(!(var4 == var23)) { _fun0016_ip = 284; continue _fun0016 }
case 285:
            var23 = _closure1_slot19;
case 284:
            var17['numMonths'] = var23;
            var16 = var19.bind(var21)(var18, var17);
case 277:
            _fun0016_ip = 286; continue _fun0016;
case 265:
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var19 = var17[var9];
            var19 = var18.bind(var8)(var19);
            var21 = var19.intl;
            var19 = var21.format;
            var17 = var17[var9];
            var17 = var18.bind(var8)(var17);
            var17 = var17.t;
            var18 = var17["+qqh6g"];
            var17 = {};
            var25 = var4 == var24;
            var23 = undefined;
            if(var25) { _fun0016_ip = 287; continue _fun0016 }
case 288:
            var23 = var24.percentage;
case 287:
            if(!(var4 == var23)) { _fun0016_ip = 289; continue _fun0016 }
case 290:
            var23 = _closure1_slot15;
case 289:
            var17['percent'] = var23;
            var17['regularPrice'] = var22;
            var16 = var19.bind(var21)(var18, var17);
case 286:
            var14 = var16;
case 263:
            return var14;
case 261:
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var14 = var22[var9];
            var14 = var21.bind(var8)(var14);
            var18 = var14.intl;
            var17 = var18.format;
            var14 = var22[var9];
            var14 = var21.bind(var8)(var14);
            var14 = var14.t;
            var16 = var14.d+0vwo;
            var14 = {};
            var19 = 18;
            var19 = var22[var19];
            var23 = var21.bind(var8)(var19);
            var22 = var23.dateFormat;
            var19 = _closure1_slot76;
            var19 = var19.bind(var8)(var13);
            var21 = var19.expiresDate;
            var19 = 'LL';
            var19 = var22.bind(var23)(var21, var19);
            var14['endDate'] = var19;
            var19 = function onClick() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = 'https://support.discord.com/hc/articles/23082866222871';
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var14['onClick'] = var19;
            var14 = var17.bind(var18)(var16, var14);
            return var14;
case 185:
            var16 = _closure1_slot0;
            var22 = _closure1_slot2;
            var14 = var22[var9];
            var14 = var16.bind(var8)(var14);
            var18 = var14.intl;
            var17 = var18.format;
            var14 = var22[var9];
            var14 = var16.bind(var8)(var14);
            var14 = var14.t;
            var16 = var14.IlJ/HV;
            var14 = {};
            var21 = _closure1_slot1;
            var19 = 17;
            var19 = var22[var19];
            var21 = var21.bind(var8)(var19);
            var19 = var13.currentPeriodStart;
            var23 = var21.bind(var8)(var19);
            var22 = var23.add;
            var21 = _closure1_slot28;
            var19 = 'days';
            var21 = var22.bind(var23)(var21, var19);
            var19 = var21.toDate;
            var19 = var19.bind(var21)();
            var14['endDate'] = var19;
            var14 = var17.bind(var18)(var16, var14);
            return var14;
case 258:
            if(var6) { _fun0016_ip = 291; continue _fun0016 }
case 292:
            var16 = _closure1_slot0;
            var14 = _closure1_slot2;
            var17 = var14[var9];
            var17 = var16.bind(var8)(var17);
            var18 = var17.intl;
            var17 = var18.format;
            var14 = var14[var9];
            var14 = var16.bind(var8)(var14);
            var14 = var14.t;
            var16 = var14["6RTdZA"];
            var14 = {};
            var19 = var13.pauseEndsAt;
            var14['resumeDate'] = var19;
            var12 = var17.bind(var18)(var16, var14);
case 291:
            return var12;
case 256:
            var12 = var13.pauseEndsAt;
            var12 = var4 != var12;
            var19 = null;
            if(!var12) { _fun0016_ip = 293; continue _fun0016 }
case 294:
            var14 = _closure1_slot1;
            var16 = _closure1_slot2;
            var12 = 17;
            var12 = var16[var12];
            var14 = var14.bind(var8)(var12);
            var12 = var13.pauseEndsAt;
            var17 = var14.bind(var8)(var12);
            var16 = var17.diff;
            var14 = var13.currentPeriodEnd;
            var12 = 'days';
            var19 = var16.bind(var17)(var14, var12);
case 293:
            if(!(var4 == var19)) { _fun0016_ip = 295; continue _fun0016 }
case 296:
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var16 = var12[var9];
            var16 = var14.bind(var8)(var16);
            var17 = var16.intl;
            var16 = var17.format;
            var12 = var12[var9];
            var12 = var14.bind(var8)(var12);
            var12 = var12.t;
            var14 = var12.VlWufv;
            var12 = {};
            var18 = var13.currentPeriodEnd;
            var12['pauseDate'] = var18;
            var12 = var16.bind(var17)(var14, var12);
            _fun0016_ip = 297; continue _fun0016;
case 295:
            var16 = _closure1_slot0;
            var14 = _closure1_slot2;
            var17 = var14[var9];
            var17 = var16.bind(var8)(var17);
            var18 = var17.intl;
            var17 = var18.format;
            var14 = var14[var9];
            var14 = var16.bind(var8)(var14);
            var14 = var14.t;
            var16 = var14.WUfOD5;
            var14 = {};
            var21 = var13.currentPeriodEnd;
            var14['pauseDate'] = var21;
            var14['pauseDuration'] = var19;
            var12 = var17.bind(var18)(var16, var14);
case 297:
            return var12;
case 254:
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var16 = var12[var9];
            var16 = var14.bind(var8)(var16);
            var17 = var16.intl;
            var16 = var17.format;
            var12 = var12[var9];
            var12 = var14.bind(var8)(var12);
            var12 = var12.t;
            var14 = var12["0HopYf"];
            var12 = {};
            var12['num'] = var20;
            var12 = var16.bind(var17)(var14, var12);
            return var12;
case 252:
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var16 = var12[var9];
            var16 = var14.bind(var8)(var16);
            var19 = var16.intl;
            var18 = var19.format;
            var12 = var12[var9];
            var12 = var14.bind(var8)(var12);
            var16 = var12.t;
            if(var1) { _fun0016_ip = 298; continue _fun0016 }
case 299:
            var14 = var16.ivjxcn;
            var12 = {};
            var12['num'] = var20;
            var12 = var18.bind(var19)(var14, var12);
            _fun0016_ip = 300; continue _fun0016;
case 298:
            if(var2) { _fun0016_ip = 301; continue _fun0016 }
case 302:
            var17 = var16.xfYkhu;
            var14 = {};
            var14['price'] = var7;
            var14['num'] = var20;
            var14 = var18.bind(var19)(var17, var14);
            _fun0016_ip = 303; continue _fun0016;
case 301:
            var17 = var16["5C/0QG"];
            var16 = {};
            var16['price'] = var7;
            var16['num'] = var20;
            var14 = var18.bind(var19)(var17, var16);
case 303:
            var12 = var14;
case 300:
            return var12;
case 250:
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var16 = var12[var9];
            var16 = var14.bind(var8)(var16);
            var19 = var16.intl;
            var18 = var19.format;
            var12 = var12[var9];
            var12 = var14.bind(var8)(var12);
            var16 = var12.t;
            if(var1) { _fun0016_ip = 304; continue _fun0016 }
case 305:
            var14 = var16.EcSdRH;
            var12 = {};
            var12['num'] = var20;
            var12 = var18.bind(var19)(var14, var12);
            _fun0016_ip = 306; continue _fun0016;
case 304:
            if(var2) { _fun0016_ip = 307; continue _fun0016 }
case 308:
            var17 = var16.nXdbKo;
            var14 = {};
            var14['price'] = var7;
            var14['num'] = var20;
            var14 = var18.bind(var19)(var17, var14);
            _fun0016_ip = 309; continue _fun0016;
case 307:
            var17 = var16.xoFgRh;
            var16 = {};
            var16['price'] = var7;
            var16['num'] = var20;
            var14 = var18.bind(var19)(var17, var16);
case 309:
            var12 = var14;
case 306:
            return var12;
case 241:
            var12 = _closure1_slot13;
            var12 = var12.CANCELED;
            if(!(var12 !== var11)) { _fun0016_ip = 310; continue _fun0016 }
case 311:
            var12 = _closure1_slot13;
            var12 = var12.ACCOUNT_HOLD;
            if(!(var12 !== var11)) { _fun0016_ip = 312; continue _fun0016 }
case 313:
            var12 = _closure1_slot13;
            var12 = var12.UNPAID;
            if(!(var12 !== var11)) { _fun0016_ip = 314; continue _fun0016 }
case 315:
            var12 = _closure1_slot13;
            var12 = var12.PAUSE_PENDING;
            if(!(var12 !== var11)) { _fun0016_ip = 316; continue _fun0016 }
case 317:
            var12 = _closure1_slot13;
            var12 = var12.PAUSED;
            if(!(var12 !== var11)) { _fun0016_ip = 318; continue _fun0016 }
case 319:
            var12 = _closure1_slot13;
            var12 = var12.PAST_DUE;
            if(!(var12 !== var11)) { _fun0016_ip = 320; continue _fun0016 }
case 321:
            return var10;
case 320:
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var12 = var20[var9];
            var12 = var19.bind(var8)(var12);
            var17 = var12.intl;
            var16 = var17.format;
            var12 = var20[var9];
            var12 = var19.bind(var8)(var12);
            var12 = var12.t;
            var14 = var12.d+0vwo;
            var12 = {};
            var18 = 18;
            var18 = var20[var18];
            var21 = var19.bind(var8)(var18);
            var20 = var21.dateFormat;
            var18 = _closure1_slot76;
            var18 = var18.bind(var8)(var13);
            var19 = var18.expiresDate;
            var18 = 'LL';
            var18 = var20.bind(var21)(var19, var18);
            var12['endDate'] = var18;
            var18 = function onClick() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = 'https://support.discord.com/hc/articles/23082866222871';
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var12['onClick'] = var18;
            var12 = var16.bind(var17)(var14, var12);
            return var12;
case 318:
            if(var6) { _fun0016_ip = 322; continue _fun0016 }
case 323:
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var16 = var12[var9];
            var16 = var14.bind(var8)(var16);
            var17 = var16.intl;
            var16 = var17.format;
            var12 = var12[var9];
            var12 = var14.bind(var8)(var12);
            var12 = var12.t;
            var14 = var12["6RTdZA"];
            var12 = {};
            var18 = var13.pauseEndsAt;
            var12['resumeDate'] = var18;
            var10 = var16.bind(var17)(var14, var12);
case 322:
            return var10;
case 316:
            var10 = var13.pauseEndsAt;
            var10 = var4 != var10;
            var18 = null;
            if(!var10) { _fun0016_ip = 324; continue _fun0016 }
case 325:
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var10 = 17;
            var10 = var14[var10];
            var12 = var12.bind(var8)(var10);
            var10 = var13.pauseEndsAt;
            var16 = var12.bind(var8)(var10);
            var14 = var16.diff;
            var12 = var13.currentPeriodEnd;
            var10 = 'days';
            var18 = var14.bind(var16)(var12, var10);
case 324:
            if(!(var4 == var18)) { _fun0016_ip = 326; continue _fun0016 }
case 327:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var14 = var10[var9];
            var14 = var12.bind(var8)(var14);
            var16 = var14.intl;
            var14 = var16.format;
            var10 = var10[var9];
            var10 = var12.bind(var8)(var10);
            var10 = var10.t;
            var12 = var10.VlWufv;
            var10 = {};
            var17 = var13.currentPeriodEnd;
            var10['pauseDate'] = var17;
            var10 = var14.bind(var16)(var12, var10);
            _fun0016_ip = 328; continue _fun0016;
case 326:
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var16 = var12[var9];
            var16 = var14.bind(var8)(var16);
            var17 = var16.intl;
            var16 = var17.format;
            var12 = var12[var9];
            var12 = var14.bind(var8)(var12);
            var12 = var12.t;
            var14 = var12.WUfOD5;
            var12 = {};
            var19 = var13.currentPeriodEnd;
            var12['pauseDate'] = var19;
            var12['pauseDuration'] = var18;
            var10 = var16.bind(var17)(var14, var12);
case 328:
            return var10;
case 314:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var14 = var10[var9];
            var14 = var12.bind(var8)(var14);
            var16 = var14.intl;
            var14 = var16.format;
            var10 = var10[var9];
            var10 = var12.bind(var8)(var10);
            var10 = var10.t;
            var12 = var10.McIzwj;
            var10 = {};
            var10 = var14.bind(var16)(var12, var10);
            return var10;
case 312:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var14 = var10[var9];
            var14 = var12.bind(var8)(var14);
            var18 = var14.intl;
            var17 = var18.format;
            var10 = var10[var9];
            var10 = var12.bind(var8)(var10);
            var14 = var10.t;
            if(var1) { _fun0016_ip = 329; continue _fun0016 }
case 330:
            var12 = var14["0+/WH7"];
            var10 = {};
            var10 = var17.bind(var18)(var12, var10);
            _fun0016_ip = 331; continue _fun0016;
case 329:
            if(var2) { _fun0016_ip = 332; continue _fun0016 }
case 333:
            var16 = var14.ZsO1Sx;
            var12 = {};
            var12['price'] = var7;
            var12 = var17.bind(var18)(var16, var12);
            _fun0016_ip = 334; continue _fun0016;
case 332:
            var16 = var14.HBkIBi;
            var14 = {};
            var14['price'] = var7;
            var12 = var17.bind(var18)(var16, var14);
case 334:
            var10 = var12;
case 331:
            return var10;
case 310:
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = var12[var9];
            var10 = var14.bind(var8)(var10);
            var18 = var10.intl;
            if(var1) { _fun0016_ip = 335; continue _fun0016 }
case 336:
            var16 = var18.string;
            var10 = var12[var9];
            var10 = var14.bind(var8)(var10);
            var10 = var10.t;
            var10 = var10.K6tYFa;
            var10 = var16.bind(var18)(var10);
            _fun0016_ip = 337; continue _fun0016;
case 335:
            var17 = var18.format;
            var12 = var12[var9];
            var12 = var14.bind(var8)(var12);
            var14 = var12.t;
            if(var2) { _fun0016_ip = 338; continue _fun0016 }
case 339:
            var16 = var14.C/XsHt;
            var12 = {};
            var12['price'] = var7;
            var12 = var17.bind(var18)(var16, var12);
            _fun0016_ip = 340; continue _fun0016;
case 338:
            var16 = var14.cXy8Bp;
            var14 = {};
            var14['price'] = var7;
            var12 = var17.bind(var18)(var16, var14);
case 340:
            var10 = var12;
case 337:
            return var10;
case 238:
            var10 = _closure1_slot13;
            var10 = var10.CANCELED;
            if(!(var10 !== var11)) { _fun0016_ip = 341; continue _fun0016 }
case 342:
            var10 = _closure1_slot13;
            var10 = var10.ACCOUNT_HOLD;
            if(!(var10 !== var11)) { _fun0016_ip = 343; continue _fun0016 }
case 344:
            var10 = _closure1_slot13;
            var10 = var10.UNPAID;
            if(!(var10 !== var11)) { _fun0016_ip = 345; continue _fun0016 }
case 346:
            var10 = _closure1_slot13;
            var10 = var10.PAUSE_PENDING;
            if(!(var10 !== var11)) { _fun0016_ip = 347; continue _fun0016 }
case 348:
            var10 = _closure1_slot13;
            var10 = var10.PAUSED;
            if(!(var10 !== var11)) { _fun0016_ip = 349; continue _fun0016 }
case 350:
            var10 = _closure1_slot13;
            var10 = var10.PAST_DUE;
            if(!(var10 !== var11)) { _fun0016_ip = 351; continue _fun0016 }
case 352:
            return var5;
case 351:
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var10 = var18[var9];
            var10 = var17.bind(var8)(var10);
            var14 = var10.intl;
            var12 = var14.format;
            var10 = var18[var9];
            var10 = var17.bind(var8)(var10);
            var10 = var10.t;
            var11 = var10.d+0vwo;
            var10 = {};
            var16 = 18;
            var16 = var18[var16];
            var19 = var17.bind(var8)(var16);
            var18 = var19.dateFormat;
            var16 = _closure1_slot76;
            var16 = var16.bind(var8)(var13);
            var17 = var16.expiresDate;
            var16 = 'LL';
            var16 = var18.bind(var19)(var17, var16);
            var10['endDate'] = var16;
            var15 = function onClick() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = 'https://support.discord.com/hc/articles/23082866222871';
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var10['onClick'] = var15;
            var10 = var12.bind(var14)(var11, var10);
            return var10;
case 349:
            if(var6) { _fun0016_ip = 353; continue _fun0016 }
case 354:
            var10 = _closure1_slot0;
            var6 = _closure1_slot2;
            var11 = var6[var9];
            var11 = var10.bind(var8)(var11);
            var12 = var11.intl;
            var11 = var12.format;
            var6 = var6[var9];
            var6 = var10.bind(var8)(var6);
            var6 = var6.t;
            var10 = var6["6RTdZA"];
            var6 = {};
            var14 = var13.pauseEndsAt;
            var6['resumeDate'] = var14;
            var5 = var11.bind(var12)(var10, var6);
case 353:
            return var5;
case 347:
            var5 = var13.pauseEndsAt;
            var5 = var4 != var5;
            var12 = null;
            if(!var5) { _fun0016_ip = 355; continue _fun0016 }
case 356:
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 17;
            var5 = var10[var5];
            var6 = var6.bind(var8)(var5);
            var5 = var13.pauseEndsAt;
            var11 = var6.bind(var8)(var5);
            var10 = var11.diff;
            var6 = var13.currentPeriodEnd;
            var5 = 'days';
            var12 = var10.bind(var11)(var6, var5);
case 355:
            if(!(var4 == var12)) { _fun0016_ip = 357; continue _fun0016 }
case 358:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var6 = var4[var9];
            var6 = var5.bind(var8)(var6);
            var10 = var6.intl;
            var6 = var10.format;
            var4 = var4[var9];
            var4 = var5.bind(var8)(var4);
            var4 = var4.t;
            var5 = var4.VlWufv;
            var4 = {};
            var11 = var13.currentPeriodEnd;
            var4['pauseDate'] = var11;
            var4 = var6.bind(var10)(var5, var4);
            _fun0016_ip = 359; continue _fun0016;
case 357:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var10 = var5[var9];
            var10 = var6.bind(var8)(var10);
            var11 = var10.intl;
            var10 = var11.format;
            var5 = var5[var9];
            var5 = var6.bind(var8)(var5);
            var5 = var5.t;
            var6 = var5.WUfOD5;
            var5 = {};
            var13 = var13.currentPeriodEnd;
            var5['pauseDate'] = var13;
            var5['pauseDuration'] = var12;
            var4 = var10.bind(var11)(var6, var5);
case 359:
            return var4;
case 345:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var6 = var4[var9];
            var6 = var5.bind(var8)(var6);
            var10 = var6.intl;
            var6 = var10.format;
            var4 = var4[var9];
            var4 = var5.bind(var8)(var4);
            var4 = var4.t;
            var5 = var4.cmkbFB;
            var4 = {};
            var4 = var6.bind(var10)(var5, var4);
            return var4;
case 343:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var6 = var4[var9];
            var6 = var5.bind(var8)(var6);
            var12 = var6.intl;
            var11 = var12.format;
            var4 = var4[var9];
            var4 = var5.bind(var8)(var4);
            var6 = var4.t;
            if(var1) { _fun0016_ip = 360; continue _fun0016 }
case 361:
            var5 = var6.SsLIXS;
            var4 = {};
            var4 = var11.bind(var12)(var5, var4);
            _fun0016_ip = 362; continue _fun0016;
case 360:
            if(var2) { _fun0016_ip = 363; continue _fun0016 }
case 364:
            var10 = var6.nkAEfZ;
            var5 = {};
            var5['price'] = var7;
            var5 = var11.bind(var12)(var10, var5);
            _fun0016_ip = 365; continue _fun0016;
case 363:
            var10 = var6["5mv+2i"];
            var6 = {};
            var6['price'] = var7;
            var5 = var11.bind(var12)(var10, var6);
case 365:
            var4 = var5;
case 362:
            return var4;
case 341:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = var3[var9];
            var5 = var4.bind(var8)(var5);
            var6 = var5.intl;
            if(var1) { _fun0016_ip = 366; continue _fun0016 }
case 367:
            var5 = var6.string;
            var1 = var3[var9];
            var1 = var4.bind(var8)(var1);
            var1 = var1.t;
            var1 = var1.JshLzq;
            var1 = var5.bind(var6)(var1);
            _fun0016_ip = 368; continue _fun0016;
case 366:
            var5 = var6.format;
            var3 = var3[var9];
            var3 = var4.bind(var8)(var3);
            var3 = var3.t;
            if(var2) { _fun0016_ip = 369; continue _fun0016 }
case 370:
            var4 = var3.FS//l2;
            var2 = {};
            var2['price'] = var7;
            var2 = var5.bind(var6)(var4, var2);
            _fun0016_ip = 371; continue _fun0016;
case 369:
            var4 = var3.USi/nc;
            var3 = {};
            var3['price'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 371:
            var1 = var2;
case 368:
            return var1;
        }
    };
    var _closure1_slot70 = var76;
    var53 = function getPremiumPlanOptions(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var1 = arg1;
            var7 = var1.skuId;
            var2 = var1.isPremium;
            var1 = var1.defaultPlanId;
            var3 = null;
            if(!(var3 != var7)) { _fun0017_ip = 372; continue _fun0017 }
case 99:
            if(!var2) { _fun0017_ip = 372; continue _fun0017 }
case 80:
            var2 = undefined;
            var3 = undefined;
            if(!(var2 !== var1)) { _fun0017_ip = 35; continue _fun0017 }
case 71:
            var4 = _closure1_slot41;
            var4 = var4[var1];
            var4 = var4.skuId;
            var3 = undefined;
            if(!(var7 === var4)) { _fun0017_ip = 35; continue _fun0017 }
case 30:
            var3 = var1;
case 35:
            var1 = _closure1_slot37;
            var1 = var1.TIER_0;
            if(!(var1 !== var7)) { _fun0017_ip = 373; continue _fun0017 }
case 374:
            var1 = _closure1_slot37;
            var1 = var1.TIER_1;
            if(!(var1 !== var7)) { _fun0017_ip = 193; continue _fun0017 }
case 96:
            var1 = _closure1_slot37;
            var1 = var1.TIER_2;
            if(!(var1 !== var7)) { _fun0017_ip = 375; continue _fun0017 }
case 376:
            var1 = global;
            var6 = var1.Error;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var1 = 'Unexpected SKU: ';
            var9 = var4.bind(var1)(var7);
            var4 = var6.prototype;
            var4 = Object.create(var4, {constructor: {value: var6}});
            var10 = var4;
            var1 = new var10[var6](var9, var8);
            var1 = var1 instanceof Object ? var1 : var4;
            throw var1;
case 375:
            var1 = _closure1_slot42;
            var4 = var1.PREMIUM_YEAR_TIER_2;
            var1 = new Array(2);
            var1[0] = var4;
            var4 = _closure1_slot42;
            var4 = var4.PREMIUM_MONTH_TIER_2;
            var1[1] = var4;
            _fun0017_ip = 377; continue _fun0017;
case 193:
            var4 = _closure1_slot42;
            var6 = var4.PREMIUM_MONTH_TIER_1;
            var4 = new Array(1);
            var4[0] = var6;
            var1 = var4;
            _fun0017_ip = 377; continue _fun0017;
case 373:
            var4 = _closure1_slot42;
            var6 = var4.PREMIUM_YEAR_TIER_0;
            var4 = new Array(2);
            var4[0] = var6;
            var5 = _closure1_slot42;
            var5 = var5.PREMIUM_MONTH_TIER_0;
            var4[1] = var5;
            var1 = var4;
case 377:
            if(!(var2 !== var3)) { _fun0017_ip = 63; continue _fun0017 }
case 378:
            var2 = var1.indexOf;
            var5 = var2.bind(var1)(var3);
            var4 = var1.splice;
            var2 = 1;
            var2 = var4.bind(var1)(var5, var2);
            var2 = var1.unshift;
            var2 = var2.bind(var1)(var3);
case 63:
            return var1;
case 372:
            var1 = new Array(0);
            return var1;
        }
    };
    var75 = function getSkuIdForPlan(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var6 = arg1;
            var1 = _closure1_slot41;
            var1 = var1[var6];
            var3 = null;
            if(!(var3 != var1)) { _fun0018_ip = 48; continue _fun0018 }
case 29:
            var1 = var1.skuId;
            return var1;
case 48:
            var1 = global;
            var4 = var1.Error;
            var1 = var4.prototype;
            var3 = Object.create(var1, {constructor: {value: var4}});
            var8 = 'Unsupported plan';
            var9 = var3;
            var1 = new var9[var4](var8, var7);
            var1 = var1 instanceof Object ? var1 : var3;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 12;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.captureBillingException;
            var2 = {};
            var5 = {};
            var5['planId'] = var6;
            var2['tags'] = var5;
            var2 = var3.bind(var4)(var1, var2);
            throw var1;
        }
    };
    var _closure1_slot71 = var75;
    var52 = function getNumPremiumGuildSubscriptions(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var4 = arg1;
            var6 = _closure1_slot8;
            var5 = var6.getPlanIdsForSkus;
            var3 = _closure1_slot37;
            var7 = var3.GUILD;
            var3 = new Array(1);
            var3[0] = var7;
            var3 = var5.bind(var6)(var3);
            var _closure2_slot0 = var3;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 15;
            var1 = var6[var1];
            var7 = undefined;
            var6 = var5.bind(var7)(var1);
            var1 = null;
            var5 = var1 != var3;
            var3 = 'Missing guildSubscriptionPlanIds';
            var3 = var6.bind(var7)(var5, var3);
            var3 = var4.find;
            var2 = function(arg1) {
                var1 = arg1;
                var3 = var1.planId;
                var2 = _closure2_slot0;
                var1 = var2.includes;
                var1 = var1.bind(var2)(var3);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            var3 = var1 != var2;
            var1 = 0;
            if(!var3) { _fun0019_ip = 379; continue _fun0019 }
case 192:
            var1 = var2.quantity;
case 379:
            return var1;
        }
    };
    var _closure1_slot72 = var52;
    var51 = function subscriptionHasPremiumGuildPlan(arg1) {
        var3 = _closure1_slot72;
        var1 = arg1;
        var2 = var1.additionalPlans;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = 0;
        var1 = var2 > var1;
        return var1;
    };
    var _closure1_slot73 = var51;
    var50 = function isPremiumBaseSubscriptionPlan(arg1) {
        var3 = _closure1_slot55;
        var2 = var3.has;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot74 = var50;
    var49 = function isPremiumGuildSubscriptionPlan(arg1) {
        var3 = _closure1_slot30;
        var2 = var3.has;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot75 = var49;
    var48 = function getBillingGracePeriodDaysAndExpiresDate(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var3 = arg1;
            var1 = var3.isPurchasedViaApple;
            if(!var1) { _fun0020_ip = 98; continue _fun0020 }
case 73:
            var4 = var3.metadata;
            var2 = null;
            var5 = var2 == var4;
            var6 = undefined;
            var1 = undefined;
            if(var5) { _fun0020_ip = 80; continue _fun0020 }
case 99:
            var1 = var4.apple_grace_period_expires_date;
case 80:
            if(!(var2 == var1)) { _fun0020_ip = 380; continue _fun0020 }
case 98:
            var1 = var3.isPurchasedViaGoogle;
            if(!var1) { _fun0020_ip = 13; continue _fun0020 }
case 101:
            var4 = var3.metadata;
            var2 = null;
            var5 = var2 == var4;
            var7 = undefined;
            var1 = undefined;
            if(var5) { _fun0020_ip = 52; continue _fun0020 }
case 381:
            var1 = var4.google_grace_period_expires_date;
case 52:
            if(!(var2 != var1)) { _fun0020_ip = 13; continue _fun0020 }
case 382:
            var4 = var3.metadata;
            var5 = var2 == var4;
            var1 = undefined;
            if(var5) { _fun0020_ip = 383; continue _fun0020 }
case 77:
            var1 = var4.google_original_expires_date;
case 383:
            if(!(var2 == var1)) { _fun0020_ip = 384; continue _fun0020 }
case 13:
            var1 = var3.isPurchasedExternally;
            if(var1) { _fun0020_ip = 215; continue _fun0020 }
case 385:
            var2 = var3.metadata;
            var4 = null;
            var8 = var4 == var2;
            var5 = undefined;
            var1 = undefined;
            if(var8) { _fun0020_ip = 386; continue _fun0020 }
case 387:
            var1 = var2.grace_period_expires_date;
case 386:
            if(!(var4 == var1)) { _fun0020_ip = 388; continue _fun0020 }
case 389:
            var1 = var3.paymentSourceId;
            if(!(var4 != var1)) { _fun0020_ip = 375; continue _fun0020 }
case 390:
            var10 = _closure1_slot29;
            _fun0020_ip = 391; continue _fun0020;
case 375:
            var10 = _closure1_slot18;
case 391:
            var1 = {};
            var1['days'] = var10;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 17;
            var2 = var9[var2];
            var8 = var8.bind(var5)(var2);
            var2 = var3.currentPeriodStart;
            var9 = var8.bind(var5)(var2);
            var8 = var9.add;
            var2 = 'days';
            var2 = var8.bind(var9)(var10, var2);
            var1['expiresDate'] = var2;
            return var1;
case 388:
            var1 = {};
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var8 = 17;
            var9 = var9[var8];
            var9 = var10.bind(var5)(var9);
            var10 = var3.metadata;
            var11 = var4 == var10;
            var4 = undefined;
            if(var11) { _fun0020_ip = 392; continue _fun0020 }
case 393:
            var4 = var10.grace_period_expires_date;
case 392:
            var11 = var9.bind(var5)(var4);
            var10 = var11.diff;
            var9 = var3.currentPeriodStart;
            var4 = 'days';
            var4 = var10.bind(var11)(var9, var4);
            var1['days'] = var4;
            var4 = _closure1_slot1;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var4 = var4.bind(var5)(var2);
            var2 = var3.metadata;
            var2 = var2.grace_period_expires_date;
            var2 = var4.bind(var5)(var2);
            var1['expiresDate'] = var2;
            return var1;
case 215:
            var1 = var3.isPurchasedViaApple;
            if(var1) { _fun0020_ip = 394; continue _fun0020 }
case 395:
            var8 = _closure1_slot17;
            _fun0020_ip = 396; continue _fun0020;
case 394:
            var8 = _closure1_slot16;
case 396:
            var1 = {};
            var1['days'] = var8;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 17;
            var2 = var5[var2];
            var5 = undefined;
            var4 = var4.bind(var5)(var2);
            var2 = var3.currentPeriodStart;
            var5 = var4.bind(var5)(var2);
            var4 = var5.add;
            var2 = 'days';
            var2 = var4.bind(var5)(var8, var2);
            var1['expiresDate'] = var2;
            return var1;
case 384:
            var5 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 17;
            var1 = var9[var4];
            var2 = var5.bind(var7)(var1);
            var1 = var3.metadata;
            var1 = var1.google_grace_period_expires_date;
            var2 = var2.bind(var7)(var1);
            var1 = var9[var4];
            var8 = var5.bind(var7)(var1);
            var1 = var3.metadata;
            var1 = var1.google_original_expires_date;
            var8 = var8.bind(var7)(var1);
            var1 = {};
            var4 = var9[var4];
            var7 = var5.bind(var7)(var4);
            var5 = var7.duration;
            var4 = var2.diff;
            var4 = var4.bind(var2)(var8);
            var5 = var5.bind(var7)(var4);
            var4 = var5.days;
            var4 = var4.bind(var5)();
            var1['days'] = var4;
            var1['expiresDate'] = var2;
            return var1;
case 380:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 17;
            var1 = var7[var4];
            var2 = var5.bind(var6)(var1);
            var1 = var3.metadata;
            var1 = var1.apple_grace_period_expires_date;
            var2 = var2.bind(var6)(var1);
            var1 = {};
            var4 = var7[var4];
            var5 = var5.bind(var6)(var4);
            var4 = var5.duration;
            var6 = var2.diff;
            var3 = var3.currentPeriodStart;
            var3 = var6.bind(var2)(var3);
            var4 = var4.bind(var5)(var3);
            var3 = var4.days;
            var3 = var3.bind(var4)();
            var1['days'] = var3;
            var1['expiresDate'] = var2;
            return var1;
        }
    };
    var _closure1_slot76 = var48;
    var47 = function getBillingInformationString(arg1, arg2) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var3 = arg1;
            var10 = arg2;
            var1 = arguments[2];
            var7 = arguments[3];
            var2 = arguments[4];
            var6 = undefined;
            if(!(var1 === var6)) { _fun0021_ip = 97; continue _fun0021 }
case 31:
            var1 = null;
case 97:
            if(!(var7 === var6)) { _fun0021_ip = 99; continue _fun0021 }
case 47:
            var7 = false;
case 99:
            if(!(var2 === var6)) { _fun0021_ip = 390; continue _fun0021 }
case 40:
            var4 = {'isFractionalPremiumActive': false, 'fetched': true};
            var9 = _closure1_slot24;
            var9 = var9.NONE;
            var4['fractionalState'] = var9;
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var5 = 17;
            var9 = var12[var5];
            var13 = var11.bind(var6)(var9);
            var9 = 0;
            var13 = var13.bind(var6)(var9);
            var4['startsAt'] = var13;
            var13 = var12[var5];
            var13 = var11.bind(var6)(var13);
            var13 = var13.bind(var6)(var9);
            var4['endsAt'] = var13;
            var13 = '';
            var4['currentEntitlementId'] = var13;
            var5 = var12[var5];
            var5 = var11.bind(var6)(var5);
            var5 = var5.bind(var6)(var9);
            var4['currentEntitlementEndsAt'] = var5;
            var5 = new Array(0);
            var4['unactivatedUnits'] = var5;
            var2 = var4;
case 390:
            var5 = null;
            var4 = var10;
            if(!(var5 !== var1)) { _fun0021_ip = 200; continue _fun0021 }
case 375:
            var11 = var3.status;
            var9 = _closure1_slot13;
            var9 = var9.PAST_DUE;
            var4 = var10;
            if(!(var11 === var9)) { _fun0021_ip = 200; continue _fun0021 }
case 20:
            var4 = var1;
case 200:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 20;
            var9 = var12[var9];
            var11 = var11.bind(var6)(var9);
            var9 = var11.formatPrice;
            if(var7) { _fun0021_ip = 93; continue _fun0021 }
case 56:
            var13 = var4.total;
            var12 = var4.currency;
            var12 = var9.bind(var11)(var13, var12);
            _fun0021_ip = 397; continue _fun0021;
case 93:
            var15 = var4.invoiceItems;
            var14 = var15.filter;
            var13 = function(arg1) {
                var3 = _closure1_slot33;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.subscriptionPlanId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var15 = var14.bind(var15)(var13);
            var14 = var15.map;
            var13 = function(arg1) {
                var1 = arg1;
                var1 = var1.amount;
                return var1;
            };
            var15 = var14.bind(var15)(var13);
            var14 = var15.reduce;
            var13 = function(arg1, arg2) {
                var2 = arg2;
                var1 = arg1;
                var1 = var2 + var1;
                return var1;
            };
            var8 = 0;
            var8 = var14.bind(var15)(var13, var8);
            var4 = var4.currency;
            var12 = var9.bind(var11)(var8, var4);
case 397:
            var8 = _closure1_slot5;
            var4 = var8.getCurrentUser;
            var8 = var4.bind(var8)();
            if(!(var5 != var8)) { _fun0021_ip = 398; continue _fun0021 }
case 79:
            var4 = var8.isOnReverseTrial;
            var4 = var4.bind(var8)();
            if(var4) { _fun0021_ip = 399; continue _fun0021 }
case 398:
            var8 = var3.status;
            var4 = _closure1_slot13;
            var4 = var4.CANCELED;
            if(!(var8 !== var4)) { _fun0021_ip = 400; continue _fun0021 }
case 90:
            var8 = var3.status;
            var4 = _closure1_slot13;
            var4 = var4.PAUSE_PENDING;
            if(!(var8 !== var4)) { _fun0021_ip = 401; continue _fun0021 }
case 402:
            var8 = var3.status;
            var4 = _closure1_slot13;
            var4 = var4.PAUSED;
            if(!(var8 !== var4)) { _fun0021_ip = 403; continue _fun0021 }
case 404:
            var8 = var3.status;
            var4 = _closure1_slot13;
            var4 = var4.PAST_DUE;
            if(!(var8 !== var4)) { _fun0021_ip = 405; continue _fun0021 }
case 406:
            var8 = var3.status;
            var4 = _closure1_slot13;
            var4 = var4.BILLING_RETRY;
            if(!(var8 !== var4)) { _fun0021_ip = 407; continue _fun0021 }
case 408:
            var8 = var3.status;
            var4 = _closure1_slot13;
            var4 = var4.ACCOUNT_HOLD;
            if(!(var8 !== var4)) { _fun0021_ip = 409; continue _fun0021 }
case 410:
            var4 = _closure1_slot78;
            var4 = var4.bind(var6)(var3);
            if(var4) { _fun0021_ip = 411; continue _fun0021 }
case 412:
            var8 = var3.status;
            var4 = _closure1_slot13;
            var4 = var4.UNPAID;
            if(!(var8 !== var4)) { _fun0021_ip = 132; continue _fun0021 }
case 413:
            var4 = var3.isPurchasedExternally;
            if(var4) { _fun0021_ip = 414; continue _fun0021 }
case 415:
            var4 = global;
            var9 = var4.Date;
            var21 = var10.subscriptionPeriodStart;
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var22 = var8;
            var4 = new var22[var9](var21, var20);
            var9 = var4 instanceof Object ? var4 : var8;
            var4 = var3.isBoostOnly;
            if(var4) { _fun0021_ip = 416; continue _fun0021 }
case 417:
            var4 = var3.hasAnyPremiumGroup;
case 416:
            var14 = var9;
            if(var4) { _fun0021_ip = 418; continue _fun0021 }
case 419:
            var8 = _closure1_slot77;
            var4 = var2.unactivatedUnits;
            var14 = var8.bind(var6)(var9, var4);
case 418:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var15 = 16;
            var4 = var19[var15];
            var4 = var18.bind(var6)(var4);
            var13 = var4.intl;
            var11 = var13.format;
            var4 = var19[var15];
            var4 = var18.bind(var6)(var4);
            var8 = var4.t;
            if(var7) { _fun0021_ip = 420; continue _fun0021 }
case 421:
            var9 = var8.Q18lRK;
            var4 = {};
            var4['renewalDate'] = var14;
            var4['price'] = var12;
            var4 = var11.bind(var13)(var9, var4);
            _fun0021_ip = 422; continue _fun0021;
case 420:
            var9 = var8.Vl3cED;
            var8 = {};
            var16 = var19[var15];
            var16 = var18.bind(var6)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var19[var15];
            var15 = var18.bind(var6)(var15);
            var15 = var15.t;
            var15 = var15.Ipxkog;
            var15 = var16.bind(var17)(var15);
            var8['planName'] = var15;
            var8['renewalDate'] = var14;
            var8['price'] = var12;
            var4 = var11.bind(var13)(var9, var8);
case 422:
            return var4;
case 414:
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 16;
            var9 = var13[var4];
            var9 = var8.bind(var6)(var9);
            var11 = var9.intl;
            var9 = var11.format;
            var4 = var13[var4];
            var4 = var8.bind(var6)(var4);
            var4 = var4.t;
            var8 = var4.ZlWXgR;
            var4 = {};
            var13 = var10.subscriptionPeriodStart;
            var4['renewalDate'] = var13;
            var14 = _closure1_slot48;
            var13 = var3.paymentGateway;
            var13 = var14[var13];
            var4['paymentGatewayName'] = var13;
            var15 = _closure1_slot89;
            var14 = var3.paymentGateway;
            var13 = 'SUBSCRIPTION_MANAGEMENT';
            var13 = var15.bind(var6)(var14, var13);
            var4['subscriptionManagementLink'] = var13;
            var4 = var9.bind(var11)(var8, var4);
            return var4;
case 132:
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 16;
            var9 = var13[var4];
            var9 = var8.bind(var6)(var9);
            var11 = var9.intl;
            var9 = var11.format;
            var4 = var13[var4];
            var4 = var8.bind(var6)(var4);
            var4 = var4.t;
            var8 = var4.CzTKom;
            var4 = {};
            var13 = _closure1_slot26;
            var4['maxProcessingTimeInDays'] = var13;
            var4 = var9.bind(var11)(var8, var4);
            return var4;
case 411:
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 16;
            var9 = var13[var4];
            var9 = var8.bind(var6)(var9);
            var11 = var9.intl;
            var9 = var11.format;
            var4 = var13[var4];
            var4 = var8.bind(var6)(var4);
            var4 = var4.t;
            var8 = var4.awpB0C;
            var4 = {};
            var13 = var3.currentPeriodEnd;
            var4['prepaidEndDate'] = var13;
            var4 = var9.bind(var11)(var8, var4);
            return var4;
case 409:
            var4 = var3.isPurchasedViaGoogle;
            if(!var4) { _fun0021_ip = 423; continue _fun0021 }
case 424:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 21;
            var4 = var9[var4];
            var8 = var8.bind(var6)(var4);
            var4 = var8.isGooglePlayBillingSupported;
            var4 = var4.bind(var8)();
            if(var4) { _fun0021_ip = 423; continue _fun0021 }
case 259:
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var4 = 16;
            var9 = var15[var4];
            var9 = var8.bind(var6)(var9);
            var11 = var9.intl;
            var9 = var11.format;
            var4 = var15[var4];
            var4 = var8.bind(var6)(var4);
            var4 = var4.t;
            var8 = var4.dtcxw+;
            var4 = {};
            var14 = _closure1_slot1;
            var13 = 17;
            var13 = var15[var13];
            var14 = var14.bind(var6)(var13);
            var13 = var3.currentPeriodStart;
            var16 = var14.bind(var6)(var13);
            var15 = var16.add;
            var14 = _closure1_slot25;
            var13 = 'days';
            var14 = var15.bind(var16)(var14, var13);
            var13 = var14.toDate;
            var13 = var13.bind(var14)();
            var4['endDate'] = var13;
            var14 = _closure1_slot48;
            var13 = var3.paymentGateway;
            var13 = var14[var13];
            var4['paymentGatewayName'] = var13;
            var15 = _closure1_slot89;
            var14 = var3.paymentGateway;
            var13 = 'PAYMENT_SOURCE_MANAGEMENT';
            var13 = var15.bind(var6)(var14, var13);
            var4['paymentSourceLink'] = var13;
            var4 = var9.bind(var11)(var8, var4);
            _fun0021_ip = 425; continue _fun0021;
case 423:
            var9 = _closure1_slot0;
            var16 = _closure1_slot2;
            var8 = 16;
            var11 = var16[var8];
            var11 = var9.bind(var6)(var11);
            var13 = var11.intl;
            var11 = var13.format;
            var8 = var16[var8];
            var8 = var9.bind(var6)(var8);
            var8 = var8.t;
            var9 = var8.EMTLOT;
            var8 = {};
            var15 = _closure1_slot1;
            var14 = 17;
            var14 = var16[var14];
            var15 = var15.bind(var6)(var14);
            var14 = var3.currentPeriodStart;
            var17 = var15.bind(var6)(var14);
            var16 = var17.add;
            var15 = _closure1_slot25;
            var14 = 'days';
            var15 = var16.bind(var17)(var15, var14);
            var14 = var15.toDate;
            var14 = var14.bind(var15)();
            var8['endDate'] = var14;
            var8['price'] = var12;
            var4 = var11.bind(var13)(var9, var8);
case 425:
            return var4;
case 407:
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var4 = 16;
            var9 = var15[var4];
            var9 = var8.bind(var6)(var9);
            var11 = var9.intl;
            var9 = var11.format;
            var4 = var15[var4];
            var4 = var8.bind(var6)(var4);
            var4 = var4.t;
            var8 = var4.EMTLOT;
            var4 = {};
            var14 = _closure1_slot1;
            var13 = 17;
            var13 = var15[var13];
            var14 = var14.bind(var6)(var13);
            var13 = var3.currentPeriodStart;
            var16 = var14.bind(var6)(var13);
            var15 = var16.add;
            var14 = _closure1_slot28;
            var13 = 'days';
            var14 = var15.bind(var16)(var14, var13);
            var13 = var14.toDate;
            var13 = var13.bind(var14)();
            var4['endDate'] = var13;
            var4['price'] = var12;
            var4 = var9.bind(var11)(var8, var4);
            return var4;
case 405:
            var4 = _closure1_slot76;
            var4 = var4.bind(var6)(var3);
            var15 = var4.expiresDate;
            var4 = var3.isPurchasedViaGoogle;
            if(!var4) { _fun0021_ip = 426; continue _fun0021 }
case 427:
            var9 = var3.metadata;
            var11 = var5 == var9;
            var8 = undefined;
            if(var11) { _fun0021_ip = 428; continue _fun0021 }
case 429:
            var8 = var9.google_grace_period_expires_date;
case 428:
            var4 = var5 != var8;
case 426:
            if(!var4) { _fun0021_ip = 430; continue _fun0021 }
case 431:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 17;
            var4 = var9[var4];
            var8 = var8.bind(var6)(var4);
            var4 = var3.metadata;
            var4 = var4.google_grace_period_expires_date;
            var15 = var8.bind(var6)(var4);
case 430:
            var4 = var3.isPurchasedViaApple;
            if(!var4) { _fun0021_ip = 432; continue _fun0021 }
case 433:
            var9 = var3.metadata;
            var11 = var5 == var9;
            var8 = undefined;
            if(var11) { _fun0021_ip = 434; continue _fun0021 }
case 435:
            var8 = var9.apple_grace_period_expires_date;
case 434:
            var4 = var5 != var8;
case 432:
            if(!var4) { _fun0021_ip = 436; continue _fun0021 }
case 437:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 17;
            var4 = var9[var4];
            var8 = var8.bind(var6)(var4);
            var4 = var3.metadata;
            var4 = var4.apple_grace_period_expires_date;
            var15 = var8.bind(var6)(var4);
case 436:
            var4 = var3.isPurchasedExternally;
            var9 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 16;
            var11 = var14[var8];
            var11 = var9.bind(var6)(var11);
            var13 = var11.intl;
            var11 = var13.format;
            var8 = var14[var8];
            var8 = var9.bind(var6)(var8);
            var8 = var8.t;
            if(var4) { _fun0021_ip = 438; continue _fun0021 }
case 439:
            var9 = var8.qEIzyi;
            var4 = {};
            var14 = var15.toDate;
            var14 = var14.bind(var15)();
            var4['endDate'] = var14;
            var4['price'] = var12;
            var4 = var11.bind(var13)(var9, var4);
            _fun0021_ip = 440; continue _fun0021;
case 438:
            var9 = var8.U2hb3W;
            var8 = {};
            var14 = var15.toDate;
            var14 = var14.bind(var15)();
            var8['endDate'] = var14;
            var15 = _closure1_slot48;
            var14 = var3.paymentGateway;
            var14 = var15[var14];
            var8['paymentGatewayName'] = var14;
            var16 = _closure1_slot89;
            var15 = var3.paymentGateway;
            var14 = 'PAYMENT_SOURCE_MANAGEMENT';
            var14 = var16.bind(var6)(var15, var14);
            var8['paymentSourceLink'] = var14;
            var4 = var11.bind(var13)(var9, var8);
case 440:
            return var4;
case 403:
            var8 = var2.fractionalState;
            var4 = _closure1_slot24;
            var4 = var4.NONE;
            if(!(var8 === var4)) { _fun0021_ip = 441; continue _fun0021 }
case 442:
            var4 = var3.pauseEndsAt;
            if(!(var5 != var4)) { _fun0021_ip = 443; continue _fun0021 }
case 444:
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 16;
            var4 = var18[var14];
            var4 = var17.bind(var6)(var4);
            var13 = var4.intl;
            var11 = var13.format;
            var4 = var18[var14];
            var4 = var17.bind(var6)(var4);
            var8 = var4.t;
            if(var7) { _fun0021_ip = 445; continue _fun0021 }
case 446:
            var9 = var8.V8+l6k;
            var4 = {};
            var15 = var3.pauseEndsAt;
            var4['resumeDate'] = var15;
            var4 = var11.bind(var13)(var9, var4);
            _fun0021_ip = 447; continue _fun0021;
case 445:
            var9 = var8.zcgtzf;
            var8 = {};
            var15 = var18[var14];
            var15 = var17.bind(var6)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var6)(var14);
            var14 = var14.t;
            var14 = var14.Ipxkog;
            var14 = var15.bind(var16)(var14);
            var8['planName'] = var14;
            var14 = var3.pauseEndsAt;
            var8['resumeDate'] = var14;
            var8['price'] = var12;
            var4 = var11.bind(var13)(var9, var8);
case 447:
            _fun0021_ip = 448; continue _fun0021;
case 443:
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 16;
            var8 = var18[var14];
            var8 = var17.bind(var6)(var8);
            var13 = var8.intl;
            if(var7) { _fun0021_ip = 449; continue _fun0021 }
case 450:
            var8 = var13.string;
            var7 = var18[var14];
            var7 = var17.bind(var6)(var7);
            var7 = var7.t;
            var7 = var7.fMz6Lg;
            var7 = var8.bind(var13)(var7);
            _fun0021_ip = 451; continue _fun0021;
case 449:
            var11 = var13.format;
            var8 = var18[var14];
            var8 = var17.bind(var6)(var8);
            var8 = var8.t;
            var9 = var8.KTYQCg;
            var8 = {};
            var15 = var18[var14];
            var15 = var17.bind(var6)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var18[var14];
            var14 = var17.bind(var6)(var14);
            var14 = var14.t;
            var14 = var14.Ipxkog;
            var14 = var15.bind(var16)(var14);
            var8['planName'] = var14;
            var8['price'] = var12;
            var7 = var11.bind(var13)(var9, var8);
case 451:
            var4 = var7;
case 448:
            _fun0021_ip = 452; continue _fun0021;
case 441:
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 16;
            var9 = var13[var7];
            var9 = var8.bind(var6)(var9);
            var11 = var9.intl;
            var9 = var11.format;
            var7 = var13[var7];
            var7 = var8.bind(var6)(var7);
            var7 = var7.t;
            var8 = var7.Q18lRK;
            var7 = {};
            var14 = var2.endsAt;
            var13 = var14.toDate;
            var13 = var13.bind(var14)();
            var7['renewalDate'] = var13;
            var7['price'] = var12;
            var4 = var9.bind(var11)(var8, var7);
case 452:
            return var4;
case 401:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 16;
            var8 = var11[var4];
            var8 = var7.bind(var6)(var8);
            var9 = var8.intl;
            var8 = var9.format;
            var4 = var11[var4];
            var4 = var7.bind(var6)(var4);
            var4 = var4.t;
            var7 = var4.uBLUGU;
            var4 = {};
            var11 = var3.currentPeriodEnd;
            var4['pauseDate'] = var11;
            var11 = var3.pauseEndsAt;
            var4['resumeDate'] = var11;
            var4 = var8.bind(var9)(var7, var4);
            return var4;
case 400:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 16;
            var8 = var11[var4];
            var8 = var7.bind(var6)(var8);
            var9 = var8.intl;
            var8 = var9.format;
            var4 = var11[var4];
            var4 = var7.bind(var6)(var4);
            var4 = var4.t;
            var7 = var4.Whp/qk;
            var4 = {};
            var10 = var10.subscriptionPeriodStart;
            var4['endDate'] = var10;
            var4 = var8.bind(var9)(var7, var4);
            return var4;
case 399:
            var4 = var2.currentEntitlementEndsAt;
            if(!(var5 == var4)) { _fun0021_ip = 453; continue _fun0021 }
case 454:
            var5 = var3.currentPeriodEnd;
            _fun0021_ip = 455; continue _fun0021;
case 453:
            var3 = var2.currentEntitlementEndsAt;
            var2 = var3.toDate;
            var5 = var2.bind(var3)();
case 455:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 16;
            var3 = var7[var1];
            var3 = var2.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.format;
            var1 = var7[var1];
            var1 = var2.bind(var6)(var1);
            var1 = var1.t;
            var2 = var1["7ZS2m1"];
            var1 = {};
            var1['trialEnd'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var46 = function extendDateWithUnconsumedFractionalPremium(arg1, arg2, arg3, arg4) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var5 = arg1;
            var9 = arg2;
            var8 = arg3;
            var6 = arg4;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var7 = 17;
            var1 = var1[var7];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = undefined;
            if(var6) { _fun0022_ip = 71; continue _fun0022 }
case 188:
            var1 = var5;
case 71:
            var11 = var2.bind(var4)(var1);
            var2 = var9.length;
            var1 = 0;
            var5 = var11;
            if(!(var2 > var1)) { _fun0022_ip = 456; continue _fun0022 }
case 457:
            var2 = _closure1_slot99;
            var10 = var2.bind(var4)(var9);
            var9 = var11.add;
            var2 = 'hours';
            var5 = var9.bind(var11)(var10, var2);
case 456:
            var2 = var5;
            if(var6) { _fun0022_ip = 84; continue _fun0022 }
case 458:
            var2 = var5;
            if(!(var4 !== var8)) { _fun0022_ip = 84; continue _fun0022 }
case 459:
            var6 = _closure1_slot1;
            var3 = _closure1_slot2;
            var3 = var3[var7];
            var3 = var6.bind(var4)(var3);
            var7 = var3.bind(var4)();
            var6 = var8.diff;
            var4 = 'hours';
            var3 = true;
            var3 = var6.bind(var8)(var7, var4, var3);
            var2 = var5;
            if(!(var3 > var1)) { _fun0022_ip = 84; continue _fun0022 }
case 133:
            var1 = var5.add;
            var2 = var1.bind(var5)(var3, var4);
case 84:
            var1 = var2.toDate;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var _closure1_slot77 = var46;
    var45 = function getUnactivatedFractionalPremiumDurationString(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = arg1;
            var4 = _closure1_slot99;
            var2 = var1.unactivatedUnits;
            var5 = undefined;
            var12 = var4.bind(var5)(var2);
            var11 = 0;
            if(!(var12 > var11)) { _fun0023_ip = 5; continue _fun0023 }
case 47:
            var2 = var1.fractionalState;
            var1 = _closure1_slot24;
            var1 = var1.NONE;
            if(!(var2 !== var1)) { _fun0023_ip = 4; continue _fun0023 }
case 5:
            var1 = '';
            return var1;
case 4:
            var4 = {};
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 16;
            var7 = var6[var1];
            var7 = var2.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.fYmirx;
            var4['days'] = var7;
            var7 = var6[var1];
            var7 = var2.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.C3RO+g;
            var4['hours'] = var7;
            var1 = var6[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.r77oHc;
            var4['minutes'] = var1;
            var1 = 22;
            var1 = var6[var1];
            var8 = var2.bind(var5)(var1);
            var7 = var8.roundFPCountdownUnits;
            var1 = 18;
            var9 = var6[var1];
            var10 = var2.bind(var5)(var9);
            var9 = var10.diffAsUnits;
            var13 = _closure1_slot1;
            var3 = 23;
            var3 = var6[var3];
            var3 = var13.bind(var5)(var3);
            var3 = var3.Millis;
            var3 = var3.HOUR;
            var3 = var12 * var3;
            var3 = var9.bind(var10)(var11, var3);
            var3 = var7.bind(var8)(var3);
            var1 = var6[var1];
            var2 = var2.bind(var5)(var1);
            var1 = var2.unitsAsStrings;
            var1 = var1.bind(var2)(var3, var4);
            return var1;
        }
    };
    var44 = function isSwitchingPlansDisabled(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var2 = arg1;
            var1 = var2.renewalMutations;
            var4 = null;
            var1 = var4 != var1;
            if(var1) { _fun0024_ip = 34; continue _fun0024 }
case 36:
            var3 = var2.trialEndsAt;
            var1 = var4 != var3;
case 34:
            if(var1) { _fun0024_ip = 101; continue _fun0024 }
case 99:
            var3 = var2.status;
            var2 = _closure1_slot13;
            var2 = var2.PAST_DUE;
            var1 = var3 === var2;
case 101:
            return var1;
        }
    };
    var43 = function getSwitchingPlansDisabledMessage(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var2 = arg1;
            var1 = var2.renewalMutations;
            var3 = null;
            var4 = var3 != var1;
            var1 = null;
            if(!var4) { _fun0025_ip = 460; continue _fun0025 }
case 31:
            var4 = var2.renewalMutations;
            var5 = var4.planId;
            var4 = var2.planId;
            if(!(var5 === var4)) { _fun0025_ip = 461; continue _fun0025 }
case 71:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 16;
            var5 = var9[var4];
            var7 = undefined;
            var5 = var8.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var8.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4["9dLQ0/"];
            var4 = var5.bind(var6)(var4);
            _fun0025_ip = 462; continue _fun0025;
case 461:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 16;
            var6 = var10[var5];
            var8 = undefined;
            var6 = var9.bind(var8)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var10[var5];
            var5 = var9.bind(var8)(var5);
            var5 = var5.t;
            var5 = var5["0rzJ4J"];
            var4 = var6.bind(var7)(var5);
case 462:
            var1 = var4;
case 460:
            var2 = var2.trialEndsAt;
            if(!(var3 != var2)) { _fun0025_ip = 463; continue _fun0025 }
case 86:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 16;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.a9Mdb3;
            var1 = var3.bind(var4)(var2);
case 463:
            return var1;
        }
    };
    var42 = function isSubscriptionPrepaidPaymentSource(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var2 = arg1;
            var3 = var2.paymentSourceId;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0026_ip = 40; continue _fun0026 }
case 36:
            var4 = _closure1_slot79;
            var3 = var2.paymentSourceId;
            var2 = undefined;
            var1 = var4.bind(var2)(var3);
case 40:
            return var1;
        }
    };
    var _closure1_slot78 = var42;
    var41 = function isPrepaidPaymentSource(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 != var5)) { _fun0027_ip = 464; continue _fun0027 }
case 465:
            var4 = _closure1_slot7;
            var2 = var4.getPaymentSource;
            var2 = var2.bind(var4)(var5);
            var1 = var1 != var2;
            if(!var1) { _fun0027_ip = 4; continue _fun0027 }
case 41:
            var4 = _closure1_slot49;
            var3 = var4.has;
            var2 = var2.type;
            var1 = var3.bind(var4)(var2);
case 4:
            return var1;
case 464:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot79 = var41;
    var40 = function getCoercedPremiumGuildSubscriptionStatus(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var2 = arg1;
            var1 = var2.renewalMutations;
            var4 = var2.additionalPlans;
            var5 = var2.status;
            var3 = _closure1_slot72;
            var7 = undefined;
            var4 = var3.bind(var7)(var4);
            var6 = null;
            var3 = var6 != var1;
            if(!var3) { _fun0028_ip = 466; continue _fun0028 }
case 467:
            var3 = _closure1_slot72;
            var1 = var1.additionalPlans;
            var6 = var3.bind(var7)(var1);
case 466:
            var3 = 0;
            var1 = var5;
            if(!(var3 === var6)) { _fun0028_ip = 468; continue _fun0028 }
case 30:
            var1 = var5;
            if(!(var3 !== var4)) { _fun0028_ip = 468; continue _fun0028 }
case 469:
            var2 = _closure1_slot13;
            var1 = var2.CANCELED;
case 468:
            return var1;
        }
    };
    var _closure1_slot80 = var40;
    var39 = function isPremiumGuildSubscriptionCanceled(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var3 = arg1;
            var1 = var3.isPurchasedExternally;
            if(var1) { _fun0029_ip = 188; continue _fun0029 }
case 470:
            var4 = _closure1_slot80;
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var1 = _closure1_slot13;
            var1 = var1.CANCELED;
            var1 = var4 === var1;
            _fun0029_ip = 7; continue _fun0029;
case 188:
            var3 = var3.status;
            var2 = _closure1_slot13;
            var2 = var2.CANCELED;
            var1 = var3 === var2;
case 7:
            return var1;
        }
    };
    var _closure1_slot81 = var39;
    var38 = function getFormattedPriceForPlan(arg1, arg2, arg3) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var5 = arguments[3];
            var2 = arg1;
            var4 = arg2;
            var6 = undefined;
            if(!(var5 === var6)) { _fun0030_ip = 471; continue _fun0030 }
case 470:
            var5 = false;
case 471:
            var1 = var5;
            var3 = undefined;
            var7 = var4;
            var5 = null;
            if(!(var5 == var7)) { _fun0030_ip = 472; continue _fun0030 }
case 99:
            var9 = _closure1_slot60;
            var5 = var2;
            var8 = var5.id;
            var7 = var1;
            var5 = false;
            var3 = var9.bind(var6)(var8, var5, var7);
            _fun0030_ip = 473; continue _fun0030;
case 472: // try_start_0
            var9 = _closure1_slot61;
            var5 = var2;
            var13 = var5.id;
            var11 = var1;
            var10 = var4;
            var12 = false;
            var14 = undefined;
            var3 = var14[var9](var13, var12, var11, var10, var9);
case 474: // try_end0
            _fun0030_ip = 473; continue _fun0030;
case 475: // catch_target0
            CatchBlockStart(arg_register=3);
            var7 = _closure1_slot60;
            var4 = var2;
            var5 = var4.id;
            var4 = var1;
            var1 = false;
            var3 = var7.bind(var6)(var5, var1, var4);
case 473:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 20;
            var4 = var7[var4];
            var6 = var5.bind(var6)(var4);
            var5 = var6.formatPrice;
            var4 = var3.amount;
            var3 = var3.currency;
            var4 = var5.bind(var6)(var4, var3);
            var2 = var2.currency;
            var1 = _closure1_slot47;
            var1 = var1.USD;
            var2 = var2 !== var1;
            if(!var2) { _fun0030_ip = 138; continue _fun0030 }
case 476:
            var3 = true;
            var1 = arg3;
            var2 = var3 === var1;
case 138:
            var1 = var4;
            if(!var2) { _fun0030_ip = 477; continue _fun0030 }
case 22:
            var3 = var4.concat;
            var2 = '*';
            var1 = var3.bind(var4)(var2);
case 477:
            return var1;
        }
    };
    var _closure1_slot82 = var38;
    var37 = function getPlanIdFromInvoice(arg1, arg2) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var1 = var3.planId;
            var6 = var3.status;
            var5 = _closure1_slot13;
            var5 = var5.CANCELED;
            if(!(var6 !== var5)) { _fun0031_ip = 197; continue _fun0031 }
case 80:
            var6 = var3.status;
            var5 = _closure1_slot13;
            var5 = var5.PAUSE_PENDING;
            if(!(var6 !== var5)) { _fun0031_ip = 197; continue _fun0031 }
case 72:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 15;
            var5 = var7[var5];
            var7 = undefined;
            var9 = var6.bind(var7)(var5);
            var5 = null;
            var8 = var5 != var2;
            var6 = 'Expected invoicePreview';
            var6 = var9.bind(var7)(var8, var6);
            var8 = var2.invoiceItems;
            var6 = var8.find;
            var2 = function(arg1) {
                var1 = arg1;
                var3 = var1.subscriptionPlanId;
                var2 = _closure1_slot74;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            };
            var2 = var6.bind(var8)(var2);
            if(!(var5 != var2)) { _fun0031_ip = 86; continue _fun0031 }
case 478:
            var6 = _closure1_slot4;
            var4 = var2.subscriptionPlanId;
            var4 = var6.bind(var7)(var4);
            if(var4) { _fun0031_ip = 86; continue _fun0031 }
case 479:
            var4 = var3.renewalMutations;
            if(!(var5 != var4)) { _fun0031_ip = 480; continue _fun0031 }
case 481:
            var4 = var3.renewalMutations;
            var5 = var4.planId;
            var4 = var3.planId;
            if(!(var5 === var4)) { _fun0031_ip = 86; continue _fun0031 }
case 480:
            var2 = var2.subscriptionPlanId;
            _fun0031_ip = 476; continue _fun0031;
case 86:
            var2 = var3.planId;
case 476:
            return var2;
case 197:
            return var1;
        }
    };
    var36 = function getStatusFromInvoice(arg1, arg2) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
            var4 = arg1;
            var2 = arg2;
            var1 = var4.status;
            var6 = var4.status;
            var5 = _closure1_slot13;
            var5 = var5.CANCELED;
            if(!(var6 !== var5)) { _fun0032_ip = 15; continue _fun0032 }
case 41:
            var5 = var4.status;
            var4 = _closure1_slot13;
            var4 = var4.PAUSE_PENDING;
            if(!(var5 !== var4)) { _fun0032_ip = 15; continue _fun0032 }
case 4:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 15;
            var4 = var6[var4];
            var6 = undefined;
            var8 = var5.bind(var6)(var4);
            var4 = null;
            var7 = var4 != var2;
            var5 = 'Expected invoicePreview';
            var5 = var8.bind(var6)(var7, var5);
            var7 = var2.invoiceItems;
            var5 = var7.find;
            var2 = function(arg1) {
                var1 = arg1;
                var3 = var1.subscriptionPlanId;
                var2 = _closure1_slot74;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            };
            var2 = var5.bind(var7)(var2);
            var4 = var4 == var2;
            if(var4) { _fun0032_ip = 482; continue _fun0032 }
case 483:
            var5 = _closure1_slot4;
            var2 = var2.subscriptionPlanId;
            var4 = var5.bind(var6)(var2);
case 482:
            var2 = var1;
            if(!var4) { _fun0032_ip = 484; continue _fun0032 }
case 485:
            var3 = _closure1_slot13;
            var2 = var3.CANCELED;
case 484:
            return var2;
case 15:
            return var1;
        }
    };
    var35 = function isBaseSubscriptionCanceled(arg1) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
            var3 = arg1;
            var2 = var3.status;
            var4 = var3.renewalMutations;
            var1 = _closure1_slot13;
            var1 = var1.CANCELED;
            var1 = var2 === var1;
            if(var1) { _fun0033_ip = 486; continue _fun0033 }
case 121:
            var2 = null;
            var2 = var2 != var4;
            if(!var2) { _fun0033_ip = 472; continue _fun0033 }
case 467:
            var6 = _closure1_slot4;
            var5 = var4.planId;
            var4 = undefined;
            var2 = var6.bind(var4)(var5);
case 472:
            if(!var2) { _fun0033_ip = 381; continue _fun0033 }
case 124:
            var3 = var3.isPurchasedExternally;
            var2 = !var3;
case 381:
            var1 = var2;
case 486:
            return var1;
        }
    };
    var _closure1_slot83 = var35;
    var34 = function isSubscriptionStatusFailedPayment(arg1) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot13;
            var1 = var1.PAST_DUE;
            var1 = var3 === var1;
            if(var1) { _fun0034_ip = 80; continue _fun0034 }
case 31:
            var4 = _closure1_slot13;
            var4 = var4.ACCOUNT_HOLD;
            var1 = var3 === var4;
case 80:
            if(var1) { _fun0034_ip = 190; continue _fun0034 }
case 487:
            var2 = _closure1_slot13;
            var2 = var2.BILLING_RETRY;
            var1 = var3 === var2;
case 190:
            return var1;
        }
    };
    var _closure1_slot84 = var34;
    var33 = function getFormattedPlanPriceFromInvoice(arg1, arg2, arg3) {
        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
            var2 = arg1;
            var3 = arg2;
            var1 = arg3;
            var5 = var2.findInvoiceItemByPlanId;
            var4 = var1.id;
            var4 = var5.bind(var2)(var4);
            var5 = null;
            if(!(var5 != var4)) { _fun0035_ip = 50; continue _fun0035 }
case 33:
            var7 = var4.amount;
            _fun0035_ip = 11; continue _fun0035;
case 50:
            var8 = _closure1_slot61;
            var13 = var1.id;
            var5 = {};
            var4 = var3.paymentSourceId;
            var5['paymentSourceId'] = var4;
            var3 = var3.currency;
            var5['currency'] = var3;
            var14 = undefined;
            var12 = false;
            var11 = false;
            var10 = var5;
            var3 = var14[var8](var13, var12, var11, var10, var9);
            var7 = var3.amount;
case 11:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 20;
            var4 = var9[var3];
            var6 = undefined;
            var5 = var8.bind(var6)(var4);
            var4 = var5.formatRate;
            var3 = var9[var3];
            var6 = var8.bind(var6)(var3);
            var3 = var6.formatPrice;
            var2 = var2.currency;
            var3 = var3.bind(var6)(var7, var2);
            var2 = var1.interval;
            var1 = var1.intervalCount;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        }
    };
    var _closure1_slot85 = var33;
    var32 = function getPremiumGuildIntervalPrice(arg1, arg2, arg3, arg4) {
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
            var6 = arg1;
            var4 = arg2;
            var2 = arg3;
            var3 = null;
            if(!(var3 == var4)) { _fun0036_ip = 98; continue _fun0036 }
case 470:
            var8 = {};
            var1 = _closure1_slot6;
            var1 = var1.ipCountryCodeWithFallback;
            var8['country'] = var1;
            var8['currency'] = var2;
            _fun0036_ip = 72; continue _fun0036;
case 98:
            var1 = {};
            var1['paymentSourceId'] = var4;
            var1['currency'] = var2;
            var8 = var1;
case 72:
            var4 = _closure1_slot8;
            var1 = var4.get;
            var1 = var1.bind(var4)(var6);
            if(!(var3 != var1)) { _fun0036_ip = 206; continue _fun0036 }
case 76:
            var9 = _closure1_slot8;
            var7 = var9.getForSkuAndInterval;
            var4 = _closure1_slot37;
            var5 = var4.GUILD;
            var4 = var1.interval;
            var1 = var1.intervalCount;
            var1 = var7.bind(var9)(var5, var4, var1);
            if(!(var3 != var1)) { _fun0036_ip = 19; continue _fun0036 }
case 478:
            var7 = _closure1_slot61;
            var5 = var1.id;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 14;
            var1 = var4[var1];
            var4 = undefined;
            var9 = var3.bind(var4)(var1);
            var3 = var9.isPremium;
            var1 = arg4;
            var12 = var3.bind(var9)(var1);
            var11 = false;
            var14 = undefined;
            var13 = var5;
            var10 = var8;
            var1 = var14[var7](var13, var12, var11, var10, var9);
            return var1;
case 19:
            var1 = global;
            var4 = var1.Error;
            var1 = var4.prototype;
            var3 = Object.create(var1, {constructor: {value: var4}});
            var13 = 'Unsupported plan';
            var14 = var3;
            var1 = new var14[var4](var13, var12);
            var1 = var1 instanceof Object ? var1 : var3;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 12;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.captureBillingException;
            var3 = {};
            var7 = {};
            var7['planId'] = var6;
            var3['tags'] = var7;
            var3 = var4.bind(var5)(var1, var3);
            throw var1;
case 206:
            var1 = global;
            var4 = var1.Error;
            var1 = var4.prototype;
            var3 = Object.create(var1, {constructor: {value: var4}});
            var13 = 'Unsupported plan';
            var14 = var3;
            var1 = new var14[var4](var13, var12);
            var1 = var1 instanceof Object ? var1 : var3;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 12;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.captureBillingException;
            var2 = {};
            var5 = {};
            var5['planId'] = var6;
            var2['tags'] = var5;
            var2 = var3.bind(var4)(var1, var2);
            throw var1;
        }
    };
    var _closure1_slot86 = var32;
    var31 = function getBillingReviewSubheader(arg1, arg2, arg3) {
        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
            var8 = arg2;
            var2 = arg3;
            var10 = var8.id;
            var3 = null;
            var1 = arg1;
            if(!(var3 != var1)) { _fun0037_ip = 488; continue _fun0037 }
case 31:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_MONTH_TIER_0;
            if(!(var3 !== var10)) { _fun0037_ip = 489; continue _fun0037 }
case 467:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_YEAR_TIER_0;
            if(!(var3 !== var10)) { _fun0037_ip = 490; continue _fun0037 }
case 472:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_MONTH_TIER_1;
            if(!(var3 !== var10)) { _fun0037_ip = 491; continue _fun0037 }
case 492:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_YEAR_TIER_1;
            if(!(var3 !== var10)) { _fun0037_ip = 493; continue _fun0037 }
case 458:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_MONTH_TIER_2;
            if(!(var3 !== var10)) { _fun0037_ip = 494; continue _fun0037 }
case 192:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_GROUP_MONTH;
            if(!(var3 !== var10)) { _fun0037_ip = 494; continue _fun0037 }
case 495:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_YEAR_TIER_2;
            if(!(var3 !== var10)) { _fun0037_ip = 496; continue _fun0037 }
case 488:
            var4 = _closure1_slot42;
            var4 = var4.PREMIUM_MONTH_TIER_0;
            if(!(var4 !== var10)) { _fun0037_ip = 497; continue _fun0037 }
case 83:
            var4 = _closure1_slot42;
            var4 = var4.PREMIUM_YEAR_TIER_0;
            if(!(var4 !== var10)) { _fun0037_ip = 498; continue _fun0037 }
case 136:
            var4 = _closure1_slot42;
            var4 = var4.PREMIUM_MONTH_TIER_1;
            if(!(var4 !== var10)) { _fun0037_ip = 499; continue _fun0037 }
case 138:
            var4 = _closure1_slot42;
            var4 = var4.PREMIUM_YEAR_TIER_1;
            if(!(var4 !== var10)) { _fun0037_ip = 500; continue _fun0037 }
case 140:
            var4 = _closure1_slot42;
            var4 = var4.PREMIUM_MONTH_TIER_2;
            if(!(var4 !== var10)) { _fun0037_ip = 501; continue _fun0037 }
case 142:
            var4 = _closure1_slot42;
            var4 = var4.PREMIUM_GROUP_MONTH;
            if(!(var4 !== var10)) { _fun0037_ip = 502; continue _fun0037 }
case 93:
            var4 = _closure1_slot42;
            var4 = var4.PREMIUM_YEAR_TIER_2;
            if(!(var4 !== var10)) { _fun0037_ip = 503; continue _fun0037 }
case 145:
            var4 = _closure1_slot42;
            var4 = var4.PREMIUM_3_MONTH_TIER_2;
            if(!(var4 !== var10)) { _fun0037_ip = 504; continue _fun0037 }
case 505:
            var4 = _closure1_slot42;
            var4 = var4.PREMIUM_6_MONTH_TIER_2;
            if(!(var4 !== var10)) { _fun0037_ip = 504; continue _fun0037 }
case 64:
            var4 = _closure1_slot42;
            var4 = var4.NONE_MONTH;
            if(!(var4 !== var10)) { _fun0037_ip = 506; continue _fun0037 }
case 74:
            var4 = _closure1_slot42;
            var4 = var4.NONE_YEAR;
            if(!(var4 !== var10)) { _fun0037_ip = 506; continue _fun0037 }
case 507:
            var4 = _closure1_slot42;
            var4 = var4.NONE_3_MONTH;
            if(!(var4 !== var10)) { _fun0037_ip = 506; continue _fun0037 }
case 508:
            var4 = _closure1_slot42;
            var4 = var4.NONE_6_MONTH;
            if(!(var4 !== var10)) { _fun0037_ip = 506; continue _fun0037 }
case 509:
            var4 = _closure1_slot42;
            var4 = var4.PREMIUM_MONTH_GUILD;
            if(!(var4 !== var10)) { _fun0037_ip = 506; continue _fun0037 }
case 510:
            var4 = _closure1_slot42;
            var4 = var4.PREMIUM_YEAR_GUILD;
            if(!(var4 !== var10)) { _fun0037_ip = 506; continue _fun0037 }
case 511:
            var4 = _closure1_slot42;
            var4 = var4.PREMIUM_3_MONTH_GUILD;
            if(!(var4 !== var10)) { _fun0037_ip = 506; continue _fun0037 }
case 512:
            var4 = _closure1_slot42;
            var4 = var4.PREMIUM_6_MONTH_GUILD;
            if(!(var4 !== var10)) { _fun0037_ip = 506; continue _fun0037 }
case 513:
            var4 = global;
            var6 = var4.Error;
            var4 = var6.prototype;
            var5 = Object.create(var4, {constructor: {value: var6}});
            var12 = 'User is purchasing an unsupported plan';
            var13 = var5;
            var4 = new var13[var6](var12, var11);
            var4 = var4 instanceof Object ? var4 : var5;
            var7 = _closure1_slot0;
            var6 = _closure1_slot2;
            var5 = 12;
            var6 = var6[var5];
            var5 = undefined;
            var7 = var7.bind(var5)(var6);
            var6 = var7.captureBillingException;
            var5 = {};
            var9 = {};
            var9['planId'] = var10;
            var5['tags'] = var9;
            var5 = var6.bind(var7)(var4, var5);
            throw var4;
case 506:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 16;
            var5 = var10[var4];
            var7 = undefined;
            var5 = var9.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var10[var4];
            var4 = var9.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.eUEeCt;
            var4 = var5.bind(var6)(var4);
            return var4;
case 504:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 16;
            var6 = var10[var4];
            var5 = undefined;
            var6 = var9.bind(var5)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var4 = var10[var4];
            var4 = var9.bind(var5)(var4);
            var4 = var4.t;
            var5 = var4.BCD4fT;
            var4 = {};
            var8 = var8.intervalCount;
            var4['intervalCount'] = var8;
            var4 = var6.bind(var7)(var5, var4);
            return var4;
case 503:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 16;
            var6 = var9[var4];
            var5 = undefined;
            var6 = var8.bind(var5)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var5 = var4.t;
            if(var2) { _fun0037_ip = 514; continue _fun0037 }
case 515:
            var4 = var5["0nfg1x"];
            var4 = var6.bind(var7)(var4);
            _fun0037_ip = 152; continue _fun0037;
case 514:
            var5 = var5.cRCCJ3;
            var4 = var6.bind(var7)(var5);
case 152:
            return var4;
case 502:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 16;
            var4 = var8[var4];
            var9 = undefined;
            var4 = var5.bind(var9)(var4);
            var7 = var4.intl;
            var6 = var7.formatToPlainString;
            var5 = _closure1_slot1;
            var4 = 24;
            var4 = var8[var4];
            var4 = var5.bind(var9)(var4);
            var5 = var4.LwdrNi;
            var4 = {};
            var8 = _closure1_slot46;
            var8 = var8.bind(var9)();
            var4['premiumGroupProductName'] = var8;
            var4 = var6.bind(var7)(var5, var4);
            return var4;
case 501:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 16;
            var6 = var9[var4];
            var5 = undefined;
            var6 = var8.bind(var5)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var5 = var4.t;
            if(var2) { _fun0037_ip = 516; continue _fun0037 }
case 517:
            var4 = var5.LQVQIq;
            var4 = var6.bind(var7)(var4);
            _fun0037_ip = 518; continue _fun0037;
case 516:
            var5 = var5.cRCCJ3;
            var4 = var6.bind(var7)(var5);
case 518:
            return var4;
case 500:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 16;
            var6 = var9[var4];
            var5 = undefined;
            var6 = var8.bind(var5)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var5 = var4.t;
            if(var2) { _fun0037_ip = 519; continue _fun0037 }
case 249:
            var4 = var5.MhH/vW;
            var4 = var6.bind(var7)(var4);
            _fun0037_ip = 520; continue _fun0037;
case 519:
            var5 = var5.cRCCJ3;
            var4 = var6.bind(var7)(var5);
case 520:
            return var4;
case 499:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 16;
            var6 = var9[var4];
            var5 = undefined;
            var6 = var8.bind(var5)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var5 = var4.t;
            if(var2) { _fun0037_ip = 521; continue _fun0037 }
case 522:
            var4 = var5.gueLg5;
            var4 = var6.bind(var7)(var4);
            _fun0037_ip = 255; continue _fun0037;
case 521:
            var5 = var5.cRCCJ3;
            var4 = var6.bind(var7)(var5);
case 255:
            return var4;
case 498:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 16;
            var6 = var9[var4];
            var5 = undefined;
            var6 = var8.bind(var5)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var5 = var4.t;
            if(var2) { _fun0037_ip = 523; continue _fun0037 }
case 260:
            var4 = var5["2eQpsL"];
            var4 = var6.bind(var7)(var4);
            _fun0037_ip = 264; continue _fun0037;
case 523:
            var5 = var5.cRCCJ3;
            var4 = var6.bind(var7)(var5);
case 264:
            return var4;
case 497:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 16;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            if(var2) { _fun0037_ip = 524; continue _fun0037 }
case 525:
            var2 = var3["/G3aKw"];
            var2 = var4.bind(var5)(var2);
            _fun0037_ip = 526; continue _fun0037;
case 524:
            var3 = var3.cRCCJ3;
            var2 = var4.bind(var5)(var3);
case 526:
            return var2;
case 496:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 16;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.G0mISV;
            var2 = var3.bind(var4)(var2);
            return var2;
case 494:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 16;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2["5l1MuV"];
            var2 = var3.bind(var4)(var2);
            return var2;
case 493:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 16;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.D/l7Yt;
            var2 = var3.bind(var4)(var2);
            return var2;
case 491:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 16;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.uph4Jx;
            var2 = var3.bind(var4)(var2);
            return var2;
case 490:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 16;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.jm+ZQw;
            var2 = var3.bind(var4)(var2);
            return var2;
case 489:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 16;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1["0ggVqN"];
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var30 = function getIntervalForInvoice(arg1) {
        var1 = arg1;
        var2 = var1.invoiceItems;
        var1 = 0;
        var1 = var2[var1];
        var4 = var1.subscriptionPlanId;
        var3 = _closure1_slot8;
        var2 = var3.get;
        var2 = var2.bind(var3)(var4);
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 15;
        var1 = var4[var1];
        var5 = undefined;
        var4 = var3.bind(var5)(var1);
        var1 = null;
        var3 = var1 != var2;
        var1 = 'Missing subscriptionPlan';
        var1 = var4.bind(var5)(var3, var1);
        var1 = {};
        var3 = var2.interval;
        var1['intervalType'] = var3;
        var2 = var2.intervalCount;
        var1['intervalCount'] = var2;
        return var1;
    };
    var29 = function getDefaultCurrency() {
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
            var1 = undefined;
            var3 = _closure1_slot47;
            var1 = var3.USD;
case 470: // try_start_0
            var4 = _closure1_slot60;
            var2 = _closure1_slot42;
            var10 = var2.PREMIUM_MONTH_TIER_2;
            var11 = undefined;
            var9 = false;
            var8 = false;
            var7 = undefined;
            var6 = false;
            var2 = var11[var4](var10, var9, var8, var7, var6, var5);
            var1 = var2.currency;
case 5: // try_end0
            _fun0038_ip = 101; continue _fun0038;
case 527: // catch_target0
            CatchBlockStart(arg_register=1);
case 101:
            return var1;
        }
    };
    var _closure1_slot87 = var29;
    var28 = function formatTrialCtaIntervalDuration(arg1) {
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
            var1 = arg1;
            var4 = var1.intervalType;
            var9 = undefined;
            if(!(var4 === var9)) { _fun0039_ip = 34; continue _fun0039 }
case 470:
            var2 = _closure1_slot40;
            var4 = var2.MONTH;
case 34:
            var8 = var1.intervalCount;
            if(!(var8 === var9)) { _fun0039_ip = 50; continue _fun0039 }
case 40:
            var8 = 1;
case 50:
            var1 = _closure1_slot87;
            var7 = var1.bind(var9)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 20;
            var1 = var5[var1];
            var6 = var3.bind(var9)(var1);
            var5 = var6.formatPrice;
            var3 = 0;
            var1 = {'maximumFractionDigits': 0, 'minimumFractionDigits': 0};
            var6 = var5.bind(var6)(var3, var7, var1);
            var1 = _closure1_slot40;
            var1 = var1.DAY;
            if(!(var1 !== var4)) { _fun0039_ip = 528; continue _fun0039 }
case 376:
            var1 = _closure1_slot40;
            var1 = var1.MONTH;
            if(!(var1 !== var4)) { _fun0039_ip = 529; continue _fun0039 }
case 194:
            var1 = _closure1_slot40;
            var1 = var1.YEAR;
            if(!(var1 !== var4)) { _fun0039_ip = 59; continue _fun0039 }
case 530:
            var1 = global;
            var5 = var1.Error;
            var1 = var5.prototype;
            var4 = Object.create(var1, {constructor: {value: var5}});
            var13 = 'Unsupported interval duration.';
            var14 = var4;
            var1 = new var14[var5](var13, var12);
            var1 = var1 instanceof Object ? var1 : var4;
            throw var1;
case 59:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 16;
            var5 = var10[var1];
            var5 = var4.bind(var9)(var5);
            var7 = var5.intl;
            var5 = var7.formatToPlainString;
            var1 = var10[var1];
            var1 = var4.bind(var9)(var1);
            var1 = var1.t;
            var4 = var1.xzAcST;
            var1 = {};
            var1['years'] = var8;
            var1['price'] = var6;
            var1 = var5.bind(var7)(var4, var1);
            return var1;
case 529:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 16;
            var5 = var10[var1];
            var5 = var4.bind(var9)(var5);
            var7 = var5.intl;
            var5 = var7.formatToPlainString;
            var1 = var10[var1];
            var1 = var4.bind(var9)(var1);
            var1 = var1.t;
            var4 = var1["8FZfNo"];
            var1 = {};
            var1['months'] = var8;
            var1['price'] = var6;
            var1 = var5.bind(var7)(var4, var1);
            return var1;
case 528:
            var7 = 7;
            if(!(var8 >= var7)) { _fun0039_ip = 213; continue _fun0039 }
case 531:
            var1 = var8 % var7;
            if(!(var1 !== var3)) { _fun0039_ip = 404; continue _fun0039 }
case 213:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 16;
            var4 = var10[var1];
            var4 = var3.bind(var9)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var1 = var10[var1];
            var1 = var3.bind(var9)(var1);
            var1 = var1.t;
            var3 = var1.cR9ifw;
            var1 = {};
            var1['days'] = var8;
            var1['price'] = var6;
            var1 = var4.bind(var5)(var3, var1);
            _fun0039_ip = 224; continue _fun0039;
case 404:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 16;
            var4 = var10[var2];
            var4 = var3.bind(var9)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var10[var2];
            var2 = var3.bind(var9)(var2);
            var2 = var2.t;
            var3 = var2.C6i5Jt;
            var2 = {};
            var7 = var8 / var7;
            var2['weeks'] = var7;
            var2['price'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 224:
            return var1;
        }
    };
    var _closure1_slot88 = var28;
    var27 = function getExternalSubscriptionMethodUrl(arg1, arg2) {
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
            var6 = arg1;
            var2 = arg2;
            var3 = _closure1_slot11;
            var3 = var3.APPLE_PARTNER;
            if(!(var3 !== var6)) { _fun0040_ip = 532; continue _fun0040 }
case 31:
            var3 = _closure1_slot11;
            var3 = var3.APPLE_ADVANCED_COMMERCE;
            if(!(var3 !== var6)) { _fun0040_ip = 532; continue _fun0040 }
case 80:
            var3 = _closure1_slot11;
            var3 = var3.APPLE;
            if(!(var3 !== var6)) { _fun0040_ip = 532; continue _fun0040 }
case 527:
            var3 = _closure1_slot11;
            var3 = var3.GOOGLE;
            if(!(var3 !== var6)) { _fun0040_ip = 379; continue _fun0040 }
case 42:
            var3 = global;
            var5 = var3.Error;
            var3 = var3.HermesInternal;
            var4 = var3.concat;
            var3 = 'Invalid external payment gateway ';
            var7 = var4.bind(var3)(var6);
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var8 = var4;
            var3 = new var8[var5](var7, var6);
            var3 = var3 instanceof Object ? var3 : var4;
            throw var3;
case 379:
            var3 = _closure1_slot51;
            var3 = var3[var2];
            return var3;
case 532:
            var1 = _closure1_slot50;
            var1 = var1[var2];
            return var1;
        }
    };
    var _closure1_slot89 = var27;
    var26 = function getItemsFromNewAdditionalPlans(arg1, arg2) {
        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var3 = new Array(0);
            var5 = var4.renewalMutations;
            var2 = null;
            var7 = var2 == var5;
            var6 = undefined;
            if(var7) { _fun0041_ip = 41; continue _fun0041 }
case 3:
            var6 = var5.items;
case 41:
            if(!(var2 == var6)) { _fun0041_ip = 2; continue _fun0041 }
case 487:
            var6 = var4.items;
case 2:
            var5 = var6.find;
            var4 = function(arg1) {
                var3 = _closure1_slot31;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.planId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            if(!(var2 != var4)) { _fun0041_ip = 486; continue _fun0041 }
case 42:
            var2 = var3.push;
            var2 = var2.bind(var3)(var4);
case 486:
            var4 = var3.push;
            var2 = new Array(0);
            var9 = arg2;
            var8 = 0;
            var10 = var2;
            var5 = arraySpread(var10, var9, var8);
            var10 = var4;
            var9 = var2;
            var8 = var3;
            var2 = apply(var10, var9, var8);
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
                    var1 = arg1;
                    var3 = _closure1_slot57;
                    var2 = _closure2_slot0;
                    var2 = var2.items;
                    var6 = undefined;
                    var5 = var3.bind(var6)(var2);
                    var3 = var5.bind(var6)();
                    var2 = var3.done;
                    var4 = var3;
                    if(var2) { _fun0042_ip = 533; continue _fun0042 }
case 71:
                    var3 = var4.value;
                    var7 = var1.planId;
                    var2 = var3.planId;
                    if(!(var7 !== var2)) { _fun0042_ip = 76; continue _fun0042 }
case 534:
                    var7 = var5.bind(var6)();
                    var2 = var7.done;
                    var4 = var7;
                    if(var2) { _fun0042_ip = 533; continue _fun0042 }
case 535:
                    _fun0042_ip = 71; continue _fun0042;
case 76:
                    var2 = {};
                    var9 = var2;
                    var8 = var3;
                    var3 = copyDataProperties(var9, var8);
                    var9 = var2;
                    var8 = var1;
                    var3 = copyDataProperties(var9, var8);
                    return var2;
case 533:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot90 = var26;
    var25 = function getItemsWithoutPremiumPlanItem(arg1) {
        var3 = arg1;
        var2 = var3.filter;
        var1 = function(arg1) {
            var3 = _closure1_slot31;
            var2 = var3.has;
            var1 = arg1;
            var1 = var1.planId;
            var1 = var2.bind(var3)(var1);
            var1 = !var1;
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot91 = var25;
    var24 = function getItemsWithUpsertedPlanIdForGroup(arg1, arg2, arg3, arg4) {
        _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
            var2 = arg1;
            var7 = arg2;
            var6 = arg3;
            var4 = arg4;
            var _closure2_slot0 = var7;
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var4;
            var5 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 15;
            var3 = var8[var3];
            var8 = undefined;
            var5 = var5.bind(var8)(var3);
            var3 = var4.has;
            var4 = var3.bind(var4)(var7);
            var3 = 'Expected planId in group';
            var3 = var5.bind(var8)(var4, var3);
            var3 = false;
            var _closure2_slot3 = var3;
            var3 = var2.renewalMutations;
            var5 = null;
            var4 = var5 == var3;
            if(var4) { _fun0043_ip = 536; continue _fun0043 }
case 458:
            var8 = var3.items;
case 536:
            if(!(var5 == var8)) { _fun0043_ip = 13; continue _fun0043 }
case 96:
            var8 = var2.items;
case 13:
            var4 = var8.map;
            var3 = function(arg1) {
                _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
case 0:
                    var4 = arg1;
                    var5 = _closure2_slot2;
                    var2 = var5.has;
                    var1 = var4.planId;
                    var2 = var2.bind(var5)(var1);
                    var1 = var4;
                    if(!var2) { _fun0044_ip = 102; continue _fun0044 }
case 39:
                    var2 = true;
                    _closure2_slot3 = var2;
                    var2 = {};
                    var7 = var2;
                    var6 = var4;
                    var4 = copyDataProperties(var7, var6);
                    var5 = _closure2_slot1;
                    var4 = 'quantity';
                    var2[3] = var5;
                    var4 = _closure2_slot0;
                    var3 = 'planId';
                    var2[2] = var4;
                    var1 = var2;
case 102:
                    return var1;
                }
            };
            var3 = var4.bind(var8)(var3);
            var4 = _closure2_slot3;
            if(var4) { _fun0043_ip = 476; continue _fun0043 }
case 537:
            var4 = {};
            var4['planId'] = var7;
            var4['quantity'] = var6;
            var7 = var2.items;
            var6 = var7.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.planId;
                var1 = _closure2_slot0;
                var1 = var2 === var1;
                return var1;
            };
            var2 = var6.bind(var7)(var2);
            if(!(var5 != var2)) { _fun0043_ip = 198; continue _fun0043 }
case 17:
            var2 = var2.id;
            var4['id'] = var2;
case 198:
            var2 = var3.push;
            var2 = var2.bind(var3)(var4);
case 476:
            var2 = var3.filter;
            var1 = function(arg1) {
                var1 = arg1;
                var2 = var1.quantity;
                var1 = 0;
                var1 = var1 !== var2;
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot92 = var24;
    var23 = function getGuildBoostPlanItem(arg1) {
        _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var3 = var1 == var2;
            if(var3) { _fun0045_ip = 49; continue _fun0045 }
case 73:
            var4 = var2.items;
            var3 = var4.find;
            var2 = function(arg1) {
                var3 = _closure1_slot30;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.planId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 49:
            return var1;
        }
    };
    var _closure1_slot93 = var23;
    var22 = function isBoostOnlySubscription(arg1) {
        _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
            var5 = arg1;
            var3 = null;
            var1 = var3 != var5;
            if(!var1) { _fun0046_ip = 3; continue _fun0046 }
case 73:
            var4 = _closure1_slot59;
            var2 = undefined;
            var2 = var4.bind(var2)(var5);
            var1 = var3 == var2;
case 3:
            if(!var1) { _fun0046_ip = 527; continue _fun0046 }
case 33:
            var4 = _closure1_slot93;
            var2 = undefined;
            var2 = var4.bind(var2)(var5);
            var1 = var3 != var2;
case 527:
            return var1;
        }
    };
    var21 = function getPremiumSkuIdForSubscription(arg1) {
        _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            var3 = var1 != var5;
            var2 = null;
            if(!var3) { _fun0047_ip = 34; continue _fun0047 }
case 32:
            var4 = _closure1_slot59;
            var3 = undefined;
            var2 = var4.bind(var3)(var5);
case 34:
            var3 = var1 != var2;
            var1 = null;
            if(!var3) { _fun0047_ip = 464; continue _fun0047 }
case 80:
            var4 = _closure1_slot71;
            var3 = var2.planId;
            var2 = undefined;
            var1 = var4.bind(var2)(var3);
case 464:
            return var1;
        }
    };
    var20 = function getPremiumTypeFromSubscription(arg1) {
        _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
            var5 = arg1;
            var4 = null;
            if(!(var4 != var5)) { _fun0048_ip = 48; continue _fun0048 }
case 465:
            var1 = _closure1_slot59;
            var3 = undefined;
            var1 = var1.bind(var3)(var5);
            if(!(var4 == var1)) { _fun0048_ip = 99; continue _fun0048 }
case 48:
            var4 = undefined;
            return var4;
case 99:
            var2 = _closure1_slot68;
            var1 = var1.planId;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var73 = function canUseQuestOrbMultiplier(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 27;
        var3 = var6[var1];
        var2 = undefined;
        var4 = var5.bind(var2)(var3);
        var3 = var4.canUserUse;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var2 = var1.QUEST_ORB_MULTIPLIER;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot94 = var73;
    var72 = function canUseCollectibles(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 27;
        var3 = var6[var1];
        var2 = undefined;
        var4 = var5.bind(var2)(var3);
        var3 = var4.canUserUse;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var2 = var1.COLLECTIBLES;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot95 = var72;
    var18 = function formatPriceString(arg1, arg2) {
        var2 = arg1;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 20;
        var4 = var4[var3];
        var3 = undefined;
        var6 = var5.bind(var3)(var4);
        var5 = var6.formatPrice;
        var4 = var2.amount;
        var2 = var2.currency;
        var5 = var5.bind(var6)(var4, var2);
        var2 = _closure1_slot67;
        var1 = arg2;
        var4 = var2.bind(var3)(var1);
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = '';
        var1 = '/';
        var1 = var3.bind(var2)(var5, var1, var4);
        return var1;
    };
    var _closure1_slot96 = var18;
    var17 = function castPremiumSubscriptionAsSkuId(arg1) {
        var1 = arg1;
        return var1;
    };
    var13 = function isTrialOffer(arg1) {
        _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0049_ip = 29; continue _fun0049 }
case 73:
            var2 = 'trial_id';
            var1 = var2 in var3;
case 29:
            return var1;
        }
    };
    var _closure1_slot97 = var13;
    var12 = function isDiscountOffer(arg1) {
        _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0050_ip = 29; continue _fun0050 }
case 73:
            var2 = 'discountId';
            var1 = var2 in var3;
case 29:
            return var1;
        }
    };
    var _closure1_slot98 = var12;
    var11 = function formatInterval(arg1) {
        _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
            var5 = arg1;
            var2 = _closure1_slot40;
            var2 = var2.YEAR;
            if(!(var5 !== var2)) { _fun0051_ip = 133; continue _fun0051 }
case 31:
            var2 = _closure1_slot40;
            var2 = var2.MONTH;
            if(!(var5 !== var2)) { _fun0051_ip = 474; continue _fun0051 }
case 80:
            var2 = global;
            var4 = var2.Error;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'Invalid interval type: ';
            var8 = var3.bind(var2)(var5);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var9 = var3;
            var2 = new var9[var4](var8, var7);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 474:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 16;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.FPybU7;
            var2 = var3.bind(var4)(var2);
            return var2;
case 133:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 16;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.tfqrhj;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var10 = function isPremiumEligible(arg1) {
        _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0052_ip = 46; continue _fun0052 }
case 73:
            var3 = var2.isProvisional;
            var1 = !var3;
case 46:
            if(!var1) { _fun0052_ip = 33; continue _fun0052 }
case 38:
            var2 = var2.bot;
            var1 = !var2;
case 33:
            return var1;
        }
    };
    var9 = function getFractionalPremiumUnitsHours(arg1) {
        var4 = arg1;
        var3 = _closure1_slot100;
        var2 = var4.map;
        var1 = function(arg1) {
            var1 = arg1;
            var1 = var1.skuId;
            return var1;
        };
        var2 = var2.bind(var4)(var1);
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot99 = var9;
    var8 = function getFractionalPremiumUnitsHoursFromSkuIds(arg1) {
        var4 = arg1;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
case 0:
                var5 = _closure1_slot3;
                var2 = _closure1_slot22;
                var1 = arg2;
                var4 = var2[var1];
                var2 = undefined;
                var1 = 2;
                var1 = var5.bind(var2)(var4, var1);
                var2 = 0;
                var4 = var1[var2];
                var5 = 1;
                var2 = var1[var5];
                var1 = _closure1_slot23;
                var6 = var1.HOUR;
                var1 = var5;
                if(!(var6 !== var4)) { _fun0053_ip = 102; continue _fun0053 }
case 72:
                var3 = _closure1_slot23;
                var3 = var3.DAY;
                var1 = var5;
                if(!(var3 === var4)) { _fun0053_ip = 102; continue _fun0053 }
case 89:
                var1 = 24;
case 102:
                var2 = var1 * var2;
                var1 = arg1;
                var1 = var1 + var2;
                return var1;
            }
        };
        var1 = 0;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot100 = var8;
    var5 = function calculateDiscountPercentageForYearlyPlan(arg1) {
        _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
case 0:
            var8 = arguments[1];
            var7 = arguments[2];
            var6 = arg1;
            var1 = undefined;
            if(!(var8 === var1)) { _fun0054_ip = 471; continue _fun0054 }
case 470:
            var8 = false;
case 471:
            var5 = var8;
            if(!(var7 === var1)) { _fun0054_ip = 37; continue _fun0054 }
case 38:
            var7 = {};
case 37:
            var4 = var7;
            var2 = undefined;
            var3 = undefined;
            var7 = var6;
            var9 = var7.interval;
            var8 = _closure1_slot40;
            var8 = var8.YEAR;
            if(!(var9 === var8)) { _fun0054_ip = 387; continue _fun0054 }
case 72: // try_start_0
            var9 = _closure1_slot56;
            var8 = {};
            var10 = var6;
            var8['subscriptionPlan'] = var10;
            var10 = var5;
            var8['isGift'] = var10;
            var10 = var4;
            var8['priceOptions'] = var10;
            var9 = var9.bind(var1)(var8);
            var2 = var9;
            var8 = null;
            if(!(var8 != var9)) { _fun0054_ip = 199; continue _fun0054 }
case 383:
            var8 = _closure1_slot61;
            var14 = var6.id;
            var12 = var5;
            var11 = var4;
            var13 = false;
            var15 = undefined;
            var3 = var15[var8](var14, var13, var12, var11, var10);
case 478: // try_end0
            var4 = var2;
            var5 = var4.amount;
            var4 = 0;
            if(!(var4 === var5)) { _fun0054_ip = 538; continue _fun0054 }
case 387:
            return var1;
case 538:
            var3 = var3.amount;
            var4 = var2.amount;
            var2 = 12;
            var2 = var2 * var4;
            var6 = var3 / var2;
            var2 = global;
            var4 = var2.Math;
            var3 = var4.floor;
            var5 = 100;
            var2 = 1;
            var2 = var2 - var6;
            var2 = var5 * var2;
            var2 = var3.bind(var4)(var2);
            return var2;
case 199:
            return var1;
case 539: // catch_target0
            CatchBlockStart(arg_register=1);
            return var1;
        }
    };
    var _closure1_slot101 = var5;
    var4 = function getDaysSincePremium(arg1) {
        _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
case 0:
            var10 = arg1;
            var1 = null;
            var2 = var1 == var10;
            var5 = 0;
            var1 = 0;
            if(var2) { _fun0055_ip = 532; continue _fun0055 }
case 540:
            var2 = global;
            var4 = var2.Math;
            var3 = var4.max;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var6 = 18;
            var7 = var7[var6];
            var6 = undefined;
            var8 = var8.bind(var6)(var7);
            var7 = var8.differenceInCalendarDays;
            var6 = var2.Date;
            var9 = var6.prototype;
            var9 = Object.create(var9, {constructor: {value: var6}});
            var13 = var9;
            var6 = new var13[var6](var12);
            var6 = var6 instanceof Object ? var6 : var9;
            var2 = var2.Date;
            var9 = var2.prototype;
            var9 = Object.create(var9, {constructor: {value: var2}});
            var13 = var9;
            var12 = var10;
            var2 = new var13[var2](var12, var11);
            var2 = var2 instanceof Object ? var2 : var9;
            var2 = var7.bind(var8)(var6, var2);
            var1 = var3.bind(var4)(var2, var5);
case 532:
            return var1;
        }
    };
    var2 = function getDaysRemainingUntilSubscriptionCurrentPeriodEnds(arg1) {
        var1 = global;
        var4 = var1.Math;
        var3 = var4.max;
        var5 = var1.Math;
        var2 = var5.ceil;
        var8 = _closure1_slot0;
        var7 = _closure1_slot2;
        var6 = 18;
        var7 = var7[var6];
        var6 = undefined;
        var8 = var8.bind(var6)(var7);
        var7 = var8.differenceInDays;
        var10 = var1.Date;
        var6 = arg1;
        var12 = var6.currentPeriodEnd;
        var9 = var10.prototype;
        var9 = Object.create(var9, {constructor: {value: var10}});
        var13 = var9;
        var6 = new var13[var10](var12, var11);
        var6 = var6 instanceof Object ? var6 : var9;
        var1 = var1.Date;
        var9 = var1.prototype;
        var9 = Object.create(var9, {constructor: {value: var1}});
        var13 = var9;
        var1 = new var13[var1](var12);
        var1 = var1 instanceof Object ? var1 : var9;
        var1 = var7.bind(var8)(var6, var1);
        var2 = var2.bind(var5)(var1);
        var1 = 1;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var14 = global;
    var68 = var14.Object;
    var19 = var68.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var19.bind(var68)(var3, var1, var7);
    var1 = 0;
    var7 = var16[var1];
    var1 = undefined;
    var7 = var67.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var16[var7];
    var7 = var15.bind(var1)(var7);
    var74 = var7.isNoneSubscription;
    var _closure1_slot4 = var74;
    var7 = 2;
    var7 = var16[var7];
    var7 = var67.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var16[var7];
    var7 = var67.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var16[var7];
    var7 = var67.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var16[var7];
    var7 = var67.bind(var1)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var16[var7];
    var7 = var67.bind(var1)(var7);
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var16[var7];
    var7 = var15.bind(var1)(var7);
    var19 = var7.InvoiceStatusTypes;
    var _closure1_slot10 = var19;
    var19 = var7.PaymentGateways;
    var _closure1_slot11 = var19;
    var19 = var7.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot12 = var19;
    var7 = var7.SubscriptionStatusTypes;
    var _closure1_slot13 = var7;
    var7 = 8;
    var7 = var16[var7];
    var7 = var15.bind(var1)(var7);
    var19 = var7.DISCOUNTS;
    var _closure1_slot14 = var19;
    var19 = var7.ANNUAL_DISCOUNT_PERCENTAGE_FALLBACK;
    var _closure1_slot15 = var19;
    var19 = var7.DEFAULT_APPLE_GRACE_PERIOD_DAYS;
    var _closure1_slot16 = var19;
    var19 = var7.DEFAULT_GOOGLE_GRACE_PERIOD_DAYS;
    var _closure1_slot17 = var19;
    var19 = var7.DEFAULT_MAX_GRACE_PERIOD_DAYS;
    var _closure1_slot18 = var19;
    var19 = var7.DISCOUNT_DURATION_FALLBACK;
    var _closure1_slot19 = var19;
    var19 = var7.DISCOUNT_PERCENTAGE_FALLBACK;
    var _closure1_slot20 = var19;
    var19 = var7.DiscountUserUsageLimitIntervalTypes;
    var _closure1_slot21 = var19;
    var19 = var7.FRACTIONAL_PREMIUM_SKU_INTERVAL_COUNTS;
    var _closure1_slot22 = var19;
    var19 = var7.FractionalPremiumIntervalTypes;
    var _closure1_slot23 = var19;
    var19 = var7.FractionalPremiumStates;
    var _closure1_slot24 = var19;
    var19 = var7.MAX_ACCOUNT_HOLD_DAYS;
    var _closure1_slot25 = var19;
    var19 = var7.MAX_PAYMENT_PROCESSING_TIME_DAYS;
    var _closure1_slot26 = var19;
    var19 = var7.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM;
    var _closure1_slot27 = var19;
    var19 = var7.PAID_SUBSCRIPTION_MAX_BILLING_RETRY_DAYS;
    var _closure1_slot28 = var19;
    var19 = var7.PAID_SUBSCRIPTION_MAX_GRACE_PERIOD_DAYS;
    var _closure1_slot29 = var19;
    var19 = var7.PREMIUM_GUILD_SUBSCRIPTION_PLANS;
    var _closure1_slot30 = var19;
    var19 = var7.PREMIUM_PLANS;
    var _closure1_slot31 = var19;
    var19 = var7.PREMIUM_SKU_TO_MONTHLY_PLAN;
    var _closure1_slot32 = var19;
    var19 = var7.PREMIUM_TIER_2_PLANS;
    var _closure1_slot33 = var19;
    var19 = var7.PREMIUM_TIER_2_REVERSE_FOLLOWUP_TRIAL_ID;
    var _closure1_slot34 = var19;
    var19 = var7.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
    var _closure1_slot35 = var19;
    var19 = var7.PREMIUM_TYPE_DISPLAY_NAME;
    var _closure1_slot36 = var19;
    var19 = var7.PremiumSubscriptionSKUs;
    var _closure1_slot37 = var19;
    var19 = var7.PremiumTypes;
    var _closure1_slot38 = var19;
    var19 = var7.PremiumUserLimits;
    var _closure1_slot39 = var19;
    var19 = var7.SubscriptionIntervalTypes;
    var _closure1_slot40 = var19;
    var19 = var7.SubscriptionPlanInfo;
    var _closure1_slot41 = var19;
    var19 = var7.SubscriptionPlans;
    var _closure1_slot42 = var19;
    var68 = var7.TRIAL_FOR_EVERYONE_OFFER_EXPIRES_APPROACHING_THRESHOLD;
    var _closure1_slot43 = var68;
    var68 = var7.USER_PREMIUM_OFFER_EXPIRES_APPROACHING_4_DAY_THRESHOLD;
    var _closure1_slot44 = var68;
    var7 = var7.USER_PREMIUM_OFFER_EXPIRES_APPROACHING_7_DAY_THRESHOLD;
    var _closure1_slot45 = var7;
    var7 = 9;
    var7 = var16[var7];
    var7 = var15.bind(var1)(var7);
    var7 = var7.getPremiumGroupProductName;
    var _closure1_slot46 = var7;
    var7 = 10;
    var7 = var16[var7];
    var7 = var15.bind(var1)(var7);
    var68 = var7.CurrencyCodes;
    var _closure1_slot47 = var68;
    var68 = var7.PaymentGatewayToFriendlyName;
    var _closure1_slot48 = var68;
    var7 = var7.PREPAID_PAYMENT_SOURCES;
    var _closure1_slot49 = var7;
    var7 = {'PAYMENT_SOURCE_MANAGEMENT': 'https://support.apple.com/HT201266', 'BILLING_HISTORY': 'https://support.apple.com/HT201266', 'SUBSCRIPTION_MANAGEMENT': 'https://support.apple.com/HT202039'};
    var _closure1_slot50 = var7;
    var7 = {'SUBSCRIPTION_MANAGEMENT': 'https://play.google.com/store/account/subscriptions', 'PAYMENT_SOURCE_MANAGEMENT': 'https://play.google.com/store/paymentmethods', 'BILLING_HISTORY': 'https://play.google.com/store/account/orderhistory'};
    var _closure1_slot51 = var7;
    var7 = 11;
    var7 = var16[var7];
    var68 = var67.bind(var1)(var7);
    var7 = var68.prototype;
    var67 = Object.create(var7, {constructor: {value: var68}});
    var80 = 'PremiumUtils.tsx';
    var81 = var67;
    var7 = new var81[var68](var80, var79);
    var7 = var7 instanceof Object ? var7 : var67;
    var _closure1_slot52 = var7;
    var68 = {};
    var7 = 'bundle';
    var68['BUNDLE'] = var7;
    var7 = 'tier_0';
    var68['TIER_0'] = var7;
    var7 = 'tier_1';
    var68['TIER_1'] = var7;
    var7 = 'tier_2';
    var68['TIER_2'] = var7;
    var7 = 'premium_guild';
    var68['PREMIUM_GUILD'] = var7;
    var _closure1_slot53 = var68;
    var67 = {};
    var7 = 'mid';
    var67['MID'] = var7;
    var7 = 'high';
    var67['HIGH'] = var7;
    var _closure1_slot54 = var67;
    var69 = var14.Set;
    var70 = var19.NONE_MONTH;
    var7 = new Array(13);
    var7[0] = var70;
    var70 = var19.NONE_3_MONTH;
    var7[1] = var70;
    var70 = var19.NONE_6_MONTH;
    var7[2] = var70;
    var70 = var19.NONE_YEAR;
    var7[3] = var70;
    var70 = var19.PREMIUM_MONTH_TIER_0;
    var7[4] = var70;
    var70 = var19.PREMIUM_MONTH_TIER_1;
    var7[5] = var70;
    var70 = var19.PREMIUM_MONTH_TIER_2;
    var7[6] = var70;
    var70 = var19.PREMIUM_YEAR_TIER_0;
    var7[7] = var70;
    var70 = var19.PREMIUM_YEAR_TIER_1;
    var7[8] = var70;
    var70 = var19.PREMIUM_YEAR_TIER_2;
    var7[9] = var70;
    var70 = var19.PREMIUM_3_MONTH_TIER_2;
    var7[10] = var70;
    var70 = var19.PREMIUM_6_MONTH_TIER_2;
    var7[11] = var70;
    var19 = var19.PREMIUM_GROUP_MONTH;
    var7[12] = var19;
    var19 = var69.prototype;
    var19 = Object.create(var19, {constructor: {value: var69}});
    var81 = var19;
    var80 = var7;
    var7 = new var81[var69](var80, var79);
    var7 = var7 instanceof Object ? var7 : var19;
    var _closure1_slot55 = var7;
    var19 = function isNewUser(arg1) {
        _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0056_ip = 124; continue _fun0056 }
case 73:
            var3 = global;
            var4 = var3.Date;
            var3 = var4.now;
            var3 = var3.bind(var4)();
            var4 = var2.createdAt;
            var2 = var4.getTime;
            var2 = var2.bind(var4)();
            var3 = var3 - var2;
            var2 = 2592000000.0;
            var1 = var3 < var2;
case 124:
            return var1;
        }
    };
    var7 = function getMonthlyPrice(arg1) {
        _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
case 0:
            var2 = arg1;
            var1 = var2.subscriptionPlan;
            var7 = var2.isGift;
            var6 = undefined;
            if(!(var7 === var6)) { _fun0057_ip = 31; continue _fun0057 }
case 46:
            var7 = false;
case 31:
            var5 = var2.priceOptions;
            if(!(var5 === var6)) { _fun0057_ip = 49; continue _fun0057 }
case 33:
            var5 = {};
case 49:
            var3 = _closure1_slot32;
            var1 = var1.skuId;
            var4 = var3[var1];
            var1 = null;
            var3 = var1 == var4;
            if(var3) { _fun0057_ip = 535; continue _fun0057 }
case 472:
            var3 = _closure1_slot61;
            var10 = false;
            var12 = undefined;
            var11 = var4;
            var9 = var7;
            var8 = var5;
            var1 = var12[var3](var11, var10, var9, var8, var7);
case 535:
            return var1;
        }
    };
    var _closure1_slot56 = var7;
    var71 = var14.Object;
    var70 = var71.freeze;
    var69 = {};
    var69['isNewUser'] = var19;
    var14 = 14;
    var77 = var16[var14];
    var77 = var15.bind(var1)(var77);
    var77 = var77.isPremiumAtLeast;
    var69['isPremiumAtLeast'] = var77;
    var77 = var16[var14];
    var77 = var15.bind(var1)(var77);
    var77 = var77.isPremium;
    var69['isPremium'] = var77;
    var77 = var16[var14];
    var77 = var15.bind(var1)(var77);
    var77 = var77.isPremiumExactly;
    var69['isPremiumExactly'] = var77;
    var69['isPremiumEligible'] = var10;
    var69['getPrice'] = var64;
    var69['getDefaultPrice'] = var65;
    var69['getInterval'] = var59;
    var69['getIntervalString'] = var58;
    var69['getIntervalStringAsNoun'] = var57;
    var69['getPremiumType'] = var56;
    var69['getTierDisplayNameByPlanId'] = var54;
    var69['getDisplayName'] = var55;
    var69['getPremiumPlanOptions'] = var53;
    var69['formatInterval'] = var11;
    var69['getPlanDescription'] = var76;
    var76 = function isPremiumSku(arg1) {
        _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot37;
            var1 = var1.TIER_0;
            var1 = var3 === var1;
            if(var1) { _fun0058_ip = 80; continue _fun0058 }
case 31:
            var4 = _closure1_slot37;
            var4 = var4.TIER_1;
            var1 = var3 === var4;
case 80:
            if(var1) { _fun0058_ip = 190; continue _fun0058 }
case 487:
            var2 = _closure1_slot37;
            var2 = var2.TIER_2;
            var1 = var3 === var2;
case 190:
            return var1;
        }
    };
    var69['isPremiumSku'] = var76;
    var76 = function getIntervalMonths(arg1, arg2) {
        _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
case 0:
            var6 = arg1;
            var1 = arg2;
            var3 = _closure1_slot40;
            var3 = var3.MONTH;
            if(!(var6 !== var3)) { _fun0059_ip = 383; continue _fun0059 }
case 31:
            var2 = _closure1_slot40;
            var2 = var2.YEAR;
            if(!(var6 !== var2)) { _fun0059_ip = 458; continue _fun0059 }
case 80:
            var2 = global;
            var4 = var2.Error;
            var2 = var2.HermesInternal;
            var5 = var2.concat;
            var3 = '';
            var2 = ' interval subscription period not implemented';
            var8 = var5.bind(var3)(var6, var2);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var9 = var3;
            var2 = new var9[var4](var8, var7);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 458:
            var2 = 12;
            var2 = var2 * var1;
            return var2;
case 383:
            return var1;
        }
    };
    var69['getIntervalMonths'] = var76;
    var76 = 32;
    var76 = var16[var76];
    var76 = var15.bind(var1)(var76);
    var76 = var76.getUserMaxFileSize;
    var69['getUserMaxFileSize'] = var76;
    var69['getSkuIdForPlan'] = var75;
    var75 = function getSkuIdForPremiumType(arg1) {
        _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot38;
            var2 = var2.TIER_0;
            if(!(var2 !== var3)) { _fun0060_ip = 89; continue _fun0060 }
case 29:
            var2 = _closure1_slot38;
            var2 = var2.TIER_1;
            if(!(var2 !== var3)) { _fun0060_ip = 457; continue _fun0060 }
case 121:
            var2 = _closure1_slot38;
            var2 = var2.TIER_2;
            if(!(var2 !== var3)) { _fun0060_ip = 541; continue _fun0060 }
case 542:
            var2 = undefined;
            return var2;
case 541:
            var2 = _closure1_slot37;
            var2 = var2.TIER_2;
            return var2;
case 457:
            var2 = _closure1_slot37;
            var2 = var2.TIER_1;
            return var2;
case 89:
            var1 = _closure1_slot37;
            var1 = var1.TIER_0;
            return var1;
        }
    };
    var69['getSkuIdForPremiumType'] = var75;
    var75 = function getNumIncludedPremiumGuildSubscriptionSlots(arg1) {
        _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
case 0:
            var4 = _closure1_slot68;
            var3 = undefined;
            var1 = arg1;
            var4 = var4.bind(var3)(var1);
            var1 = _closure1_slot38;
            var3 = var1.TIER_2;
            var1 = 0;
            if(!(var4 === var3)) { _fun0061_ip = 80; continue _fun0061 }
case 33:
            var1 = _closure1_slot27;
case 80:
            return var1;
        }
    };
    var69['getNumIncludedPremiumGuildSubscriptionSlots'] = var75;
    var69['getBillingInformationString'] = var47;
    var69['extendDateWithUnconsumedFractionalPremium'] = var46;
    var69['getUnactivatedFractionalPremiumDurationString'] = var45;
    var69['isSwitchingPlansDisabled'] = var44;
    var69['getSwitchingPlansDisabledMessage'] = var43;
    var69['isNoneSubscription'] = var74;
    var69['getPlanIdFromInvoice'] = var37;
    var69['getStatusFromInvoice'] = var36;
    var69['isBaseSubscriptionCanceled'] = var35;
    var69['getPremiumGuildIntervalPrice'] = var32;
    var74 = function hasAccountCredit(arg1) {
        _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0062_ip = 31; continue _fun0062 }
case 73:
            var3 = var4.size;
            var2 = 0;
            var1 = var2 !== var3;
case 31:
            if(!var1) { _fun0062_ip = 43; continue _fun0062 }
case 37:
            var2 = global;
            var3 = var2.Array;
            var2 = var3.from;
            var4 = var2.bind(var3)(var4);
            var3 = var4.some;
            var2 = function(arg1) {
                _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.subscriptionPlanId;
                    var4 = var2.parentId;
                    var2 = var2.consumed;
                    var3 = null;
                    var1 = var3 != var1;
                    if(!var1) { _fun0063_ip = 121; continue _fun0063 }
case 3:
                    var1 = var3 != var4;
case 121:
                    if(!var1) { _fun0063_ip = 487; continue _fun0063 }
case 80:
                    var1 = !var2;
case 487:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
case 43:
            return var1;
        }
    };
    var69['hasAccountCredit'] = var74;
    var74 = function hasUnconsumedGiftForSubscriptionPlan(arg1, arg2) {
        _fun0064: for(var _fun0064_ip = 0; ; ) switch(_fun0064_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var _closure2_slot0 = var4;
            var3 = null;
            var1 = var3 != var5;
            if(!var1) { _fun0064_ip = 39; continue _fun0064 }
case 46:
            var7 = var5.size;
            var6 = 0;
            var1 = var6 !== var7;
case 39:
            if(!var1) { _fun0064_ip = 51; continue _fun0064 }
case 49:
            var1 = var3 != var4;
case 51:
            if(!var1) { _fun0064_ip = 89; continue _fun0064 }
case 188:
            var3 = global;
            var4 = var3.Array;
            var3 = var4.from;
            var4 = var3.bind(var4)(var5);
            var3 = var4.some;
            var2 = function(arg1) {
                _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.subscriptionPlanId;
                    var5 = var1.parentId;
                    var2 = var1.consumed;
                    var4 = null;
                    var1 = var4 != var3;
                    if(!var1) { _fun0065_ip = 121; continue _fun0065 }
case 3:
                    var1 = var4 != var5;
case 121:
                    if(!var1) { _fun0065_ip = 487; continue _fun0065 }
case 80:
                    var1 = !var2;
case 487:
                    if(!var1) { _fun0065_ip = 190; continue _fun0065 }
case 467:
                    var2 = _closure2_slot0;
                    var1 = var3 === var2;
case 190:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
case 89:
            return var1;
        }
    };
    var69['hasUnconsumedGiftForSubscriptionPlan'] = var74;
    var69['getBillingReviewSubheader'] = var31;
    var69['getIntervalForInvoice'] = var30;
    var69['getPremiumPlanItem'] = var66;
    var69['getGuildBoostPlanItem'] = var23;
    var69['isBoostOnlySubscription'] = var22;
    var69['getPremiumSkuIdForSubscription'] = var21;
    var69['getPremiumTypeFromSubscription'] = var20;
    var69['getUnactivatedFractionalPremiumHours'] = var9;
    var69['castPremiumSubscriptionAsSkuId'] = var17;
    var69['calculateDiscountPercentageForYearlyPlan'] = var5;
    var69['getDaysSincePremium'] = var4;
    var69['getDaysRemainingUntilSubscriptionCurrentPeriodEnds'] = var2;
    var74 = function canUseAnimatedEmojis(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 27;
        var3 = var6[var1];
        var2 = undefined;
        var4 = var5.bind(var2)(var3);
        var3 = var4.canUserUse;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var2 = var1.ANIMATED_EMOJIS;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var69['canUseAnimatedEmojis'] = var74;
    var74 = function canUseEmojisEverywhere(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 27;
        var3 = var6[var1];
        var2 = undefined;
        var4 = var5.bind(var2)(var3);
        var3 = var4.canUserUse;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var2 = var1.EMOJIS_EVERYWHERE;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var69['canUseEmojisEverywhere'] = var74;
    var74 = function canUseSoundboardEverywhere(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 27;
        var3 = var6[var1];
        var2 = undefined;
        var4 = var5.bind(var2)(var3);
        var3 = var4.canUserUse;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var2 = var1.SOUNDBOARD_EVERYWHERE;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var69['canUseSoundboardEverywhere'] = var74;
    var74 = function canUseCustomCallSounds(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 27;
        var3 = var6[var1];
        var2 = undefined;
        var4 = var5.bind(var2)(var3);
        var3 = var4.canUserUse;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var2 = var1.CUSTOM_CALL_SOUNDS;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var69['canUseCustomCallSounds'] = var74;
    var74 = function canUploadLargeFiles(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 27;
        var3 = var6[var1];
        var2 = undefined;
        var4 = var5.bind(var2)(var3);
        var3 = var4.canUserUse;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var2 = var1.UPLOAD_LARGE_FILES;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var69['canUploadLargeFiles'] = var74;
    var74 = function canUseBadges(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 27;
        var3 = var6[var1];
        var2 = undefined;
        var4 = var5.bind(var2)(var3);
        var3 = var4.canUserUse;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var2 = var1.PROFILE_BADGES;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var69['canUseBadges'] = var74;
    var74 = function canUseHighVideoUploadQuality(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 27;
        var3 = var6[var1];
        var2 = undefined;
        var4 = var5.bind(var2)(var3);
        var3 = var4.canUserUse;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var2 = var1.INCREASED_VIDEO_UPLOAD_QUALITY;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var69['canUseHighVideoUploadQuality'] = var74;
    var74 = function canEditDiscriminator(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 27;
        var3 = var6[var1];
        var2 = undefined;
        var4 = var5.bind(var2)(var3);
        var3 = var4.canUserUse;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var2 = var1.CUSTOM_DISCRIMINATOR;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var69['canEditDiscriminator'] = var74;
    var74 = function hasBoostDiscount(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 27;
        var3 = var6[var1];
        var2 = undefined;
        var4 = var5.bind(var2)(var3);
        var3 = var4.canUserUse;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var2 = var1.BOOST_DISCOUNT;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var69['hasBoostDiscount'] = var74;
    var74 = function canUseAnimatedAvatar(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 27;
        var3 = var6[var1];
        var2 = undefined;
        var4 = var5.bind(var2)(var3);
        var3 = var4.canUserUse;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var2 = var1.ANIMATED_AVATAR;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var69['canUseAnimatedAvatar'] = var74;
    var74 = function canInstallPremiumApplications(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 27;
        var3 = var6[var1];
        var2 = undefined;
        var4 = var5.bind(var2)(var3);
        var3 = var4.canUserUse;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var2 = var1.INSTALL_PREMIUM_APPLICATIONS;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var69['canInstallPremiumApplications'] = var74;
    var74 = function canUseIncreasedMessageLength(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 27;
        var3 = var6[var1];
        var2 = undefined;
        var4 = var5.bind(var2)(var3);
        var3 = var4.canUserUse;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var2 = var1.INCREASED_MESSAGE_LENGTH;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var69['canUseIncreasedMessageLength'] = var74;
    var74 = function canUseIncreasedGuildCap(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 27;
        var3 = var6[var1];
        var2 = undefined;
        var4 = var5.bind(var2)(var3);
        var3 = var4.canUserUse;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var2 = var1.INCREASED_GUILD_LIMIT;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var69['canUseIncreasedGuildCap'] = var74;
    var74 = function canRedeemPremiumPerks(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 27;
        var3 = var6[var1];
        var2 = undefined;
        var4 = var5.bind(var2)(var3);
        var3 = var4.canUserUse;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var2 = var1.REDEEM_PREMIUM_PERKS;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var69['canRedeemPremiumPerks'] = var74;
    var74 = function canUsePremiumProfileCustomization(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 27;
        var3 = var6[var1];
        var2 = undefined;
        var4 = var5.bind(var2)(var3);
        var3 = var4.canUserUse;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var2 = var1.PROFILE_PREMIUM_FEATURES;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var69['canUsePremiumProfileCustomization'] = var74;
    var74 = function canUsePremiumAppIcons(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 27;
        var3 = var6[var1];
        var2 = undefined;
        var4 = var5.bind(var2)(var3);
        var3 = var4.canUserUse;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var2 = var1.APP_ICONS;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var69['canUsePremiumAppIcons'] = var74;
    var74 = function canUsePremiumGuildMemberProfile(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 27;
        var3 = var6[var1];
        var2 = undefined;
        var4 = var5.bind(var2)(var3);
        var3 = var4.canUserUse;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var2 = var1.PREMIUM_GUILD_MEMBER_PROFILE;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var69['canUsePremiumGuildMemberProfile'] = var74;
    var74 = function canUseClientThemes(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 27;
        var3 = var6[var1];
        var2 = undefined;
        var4 = var5.bind(var2)(var3);
        var3 = var4.canUserUse;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var2 = var1.CLIENT_THEMES;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var69['canUseClientThemes'] = var74;
    var74 = function canStreamQuality(arg1, arg2) {
        _fun0066: for(var _fun0066_ip = 0; ; ) switch(_fun0066_ip) {
case 0:
            var3 = arg1;
            var5 = arg2;
            var1 = _closure1_slot54;
            var1 = var1.HIGH;
            if(!(var3 !== var1)) { _fun0066_ip = 475; continue _fun0066 }
case 31:
            var1 = _closure1_slot54;
            var1 = var1.MID;
            var1 = var3 === var1;
            if(!var1) { _fun0066_ip = 474; continue _fun0066 }
case 487:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 27;
            var4 = var9[var3];
            var7 = undefined;
            var6 = var8.bind(var7)(var4);
            var4 = var6.canUserUse;
            var3 = var9[var3];
            var3 = var8.bind(var7)(var3);
            var3 = var3.STREAM_MID_QUALITY;
            var1 = var4.bind(var6)(var3, var5);
case 474:
            _fun0066_ip = 482; continue _fun0066;
case 475:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 27;
            var3 = var8[var2];
            var6 = undefined;
            var4 = var7.bind(var6)(var3);
            var3 = var4.canUserUse;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.STREAM_HIGH_QUALITY;
            var1 = var3.bind(var4)(var2, var5);
case 482:
            return var1;
        }
    };
    var69['canStreamQuality'] = var74;
    var69['canUseQuestOrbMultiplier'] = var73;
    var73 = function hasFreeBoosts(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 27;
        var3 = var6[var1];
        var2 = undefined;
        var4 = var5.bind(var2)(var3);
        var3 = var4.canUserUse;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var2 = var1.FREE_BOOSTS;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var69['hasFreeBoosts'] = var73;
    var73 = function canUseCustomStickersEverywhere(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 27;
        var3 = var6[var1];
        var2 = undefined;
        var4 = var5.bind(var2)(var3);
        var3 = var4.canUserUse;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var2 = var1.STICKERS_EVERYWHERE;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var69['canUseCustomStickersEverywhere'] = var73;
    var73 = function canUseCustomBackgrounds(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 27;
        var3 = var6[var1];
        var2 = undefined;
        var4 = var5.bind(var2)(var3);
        var3 = var4.canUserUse;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var2 = var1.VIDEO_FILTER_ASSETS;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var69['canUseCustomBackgrounds'] = var73;
    var69['canUseCollectibles'] = var72;
    var72 = function canUseMonthlyOrbs(arg1) {
        _fun0067: for(var _fun0067_ip = 0; ; ) switch(_fun0067_ip) {
case 0:
            var6 = arg1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 28;
            var1 = var4[var1];
            var7 = undefined;
            var4 = var3.bind(var7)(var1);
            var3 = var4.getIsCrepeEnabled;
            var1 = 'canUseMonthlyOrbs';
            var1 = var3.bind(var4)(var1);
            var3 = !var1;
            var1 = !var3;
            if(var3) { _fun0067_ip = 543; continue _fun0067 }
case 541:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 29;
            var3 = var5[var3];
            var5 = var4.bind(var7)(var3);
            var4 = var5.hasPerk;
            var3 = null;
            var8 = var3 == var6;
            var3 = undefined;
            if(var8) { _fun0067_ip = 82; continue _fun0067 }
case 474:
            var3 = var6.perks;
case 82:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 30;
            var2 = var8[var2];
            var2 = var6.bind(var7)(var2);
            var2 = var2.Perk;
            var2 = var2.MONTHLY_ORBS;
            var1 = var4.bind(var5)(var3, var2);
case 543:
            return var1;
        }
    };
    var69['canUseMonthlyOrbs'] = var72;
    var72 = function canUseShopDiscounts(arg1) {
        _fun0068: for(var _fun0068_ip = 0; ; ) switch(_fun0068_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 28;
            var1 = var3[var1];
            var3 = undefined;
            var6 = var5.bind(var3)(var1);
            var5 = var6.getIsCrepeEnabled;
            var1 = 'canUseShopDiscounts';
            var1 = var5.bind(var6)(var1);
            if(!var1) { _fun0068_ip = 532; continue _fun0068 }
case 2:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 29;
            var5 = var7[var5];
            var8 = var6.bind(var3)(var5);
            var7 = var8.hasPerk;
            var5 = null;
            var5 = var5 == var4;
            var6 = undefined;
            if(var5) { _fun0068_ip = 474; continue _fun0068 }
case 76:
            var6 = var4.perks;
case 474:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 30;
            var5 = var10[var5];
            var5 = var9.bind(var3)(var5);
            var5 = var5.Perk;
            var5 = var5.SHOP_DISCOUNTS;
            var1 = var7.bind(var8)(var6, var5);
case 532:
            if(var1) { _fun0068_ip = 57; continue _fun0068 }
case 544:
            var2 = _closure1_slot95;
            var1 = var2.bind(var3)(var4);
case 57:
            return var1;
        }
    };
    var69['canUseShopDiscounts'] = var72;
    var72 = function canUseMoreQuestOrbs(arg1) {
        _fun0069: for(var _fun0069_ip = 0; ; ) switch(_fun0069_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 28;
            var1 = var3[var1];
            var3 = undefined;
            var6 = var5.bind(var3)(var1);
            var5 = var6.getIsCrepeEnabled;
            var1 = 'canUseMoreQuestOrbs';
            var1 = var5.bind(var6)(var1);
            if(!var1) { _fun0069_ip = 532; continue _fun0069 }
case 2:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 29;
            var5 = var7[var5];
            var8 = var6.bind(var3)(var5);
            var7 = var8.hasPerk;
            var5 = null;
            var5 = var5 == var4;
            var6 = undefined;
            if(var5) { _fun0069_ip = 474; continue _fun0069 }
case 76:
            var6 = var4.perks;
case 474:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 30;
            var5 = var10[var5];
            var5 = var9.bind(var3)(var5);
            var5 = var5.Perk;
            var5 = var5.MORE_QUEST_ORBS;
            var1 = var7.bind(var8)(var6, var5);
case 532:
            if(var1) { _fun0069_ip = 57; continue _fun0069 }
case 544:
            var2 = _closure1_slot94;
            var1 = var2.bind(var3)(var4);
case 57:
            return var1;
        }
    };
    var69['canUseMoreQuestOrbs'] = var72;
    var69['formatPriceString'] = var18;
    var69['StreamQuality'] = var67;
    var69 = var70.bind(var71)(var69);
    var70 = 33;
    var70 = var16[var70];
    var72 = var15.bind(var1)(var70);
    var71 = var72.fileFinishedImporting;
    var70 = 'utils/PremiumUtils.tsx';
    var70 = var71.bind(var72)(var70);
    var3['default'] = var69;
    var3['Branding'] = var68;
    var3['StreamQuality'] = var67;
    var67 = function getPremiumBranding(arg1) {
        _fun0070: for(var _fun0070_ip = 0; ; ) switch(_fun0070_ip) {
case 0:
            var5 = arg1;
            var3 = var5.planId;
            var4 = _closure1_slot31;
            var1 = var4.has;
            var1 = var1.bind(var4)(var3);
            if(!var1) { _fun0070_ip = 2; continue _fun0070 }
case 47:
            var4 = _closure1_slot73;
            var1 = undefined;
            var1 = var4.bind(var1)(var5);
            if(var1) { _fun0070_ip = 545; continue _fun0070 }
case 2:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_MONTH_TIER_0;
            if(!(var3 !== var1)) { _fun0070_ip = 70; continue _fun0070 }
case 124:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_YEAR_TIER_0;
            if(!(var3 !== var1)) { _fun0070_ip = 70; continue _fun0070 }
case 492:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_MONTH_TIER_1;
            if(!(var3 !== var1)) { _fun0070_ip = 59; continue _fun0070 }
case 475:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_YEAR_TIER_1;
            if(!(var3 !== var1)) { _fun0070_ip = 59; continue _fun0070 }
case 44:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_MONTH_TIER_2;
            if(!(var3 !== var1)) { _fun0070_ip = 546; continue _fun0070 }
case 547:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_YEAR_TIER_2;
            if(!(var3 !== var1)) { _fun0070_ip = 546; continue _fun0070 }
case 543:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_3_MONTH_TIER_2;
            if(!(var3 !== var1)) { _fun0070_ip = 546; continue _fun0070 }
case 386:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_6_MONTH_TIER_2;
            if(!(var3 !== var1)) { _fun0070_ip = 546; continue _fun0070 }
case 390:
            var1 = _closure1_slot53;
            var1 = var1.PREMIUM_GUILD;
            _fun0070_ip = 548; continue _fun0070;
case 546:
            var3 = _closure1_slot53;
            var1 = var3.TIER_2;
case 548:
            _fun0070_ip = 20; continue _fun0070;
case 59:
            var3 = _closure1_slot53;
            var1 = var3.TIER_1;
case 20:
            _fun0070_ip = 549; continue _fun0070;
case 70:
            var3 = _closure1_slot53;
            var1 = var3.TIER_0;
case 549:
            _fun0070_ip = 477; continue _fun0070;
case 545:
            var2 = _closure1_slot53;
            var1 = var2.BUNDLE;
case 477:
            return var1;
        }
    };
    var3['getPremiumBranding'] = var67;
    var3['getPremiumPlanItem'] = var66;
    var3['getDefaultPrice'] = var65;
    var65 = function withContextPlanPrices(arg1, arg2) {
        _fun0071: for(var _fun0071_ip = 0; ; ) switch(_fun0071_ip) {
case 0:
            var3 = arg1;
            var7 = arg2;
            var2 = null;
            var1 = var3;
            if(!(var2 != var7)) { _fun0071_ip = 492; continue _fun0071 }
case 470:
            var2 = {};
            var9 = var2;
            var8 = var3;
            var3 = copyDataProperties(var9, var8);
            var3 = global;
            var5 = var3.Object;
            var4 = var5.fromEntries;
            var6 = var7.map;
            var3 = function(arg1) {
                var2 = arg1;
                var3 = var2.id;
                var1 = new Array(2);
                var1[0] = var3;
                var2 = var2.price;
                var1[1] = var2;
                return var1;
            };
            var3 = var6.bind(var7)(var3);
            var4 = var4.bind(var5)(var3);
            var3 = 'contextPlanPrices';
            var2[2] = var4;
            var1 = var2;
case 492:
            return var1;
        }
    };
    var3['withContextPlanPrices'] = var65;
    var3['getPrice'] = var64;
    var64 = function getCountryPrices(arg1) {
        _fun0072: for(var _fun0072_ip = 0; ; ) switch(_fun0072_ip) {
case 0:
            var4 = arguments[1];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0072_ip = 550; continue _fun0072 }
case 465:
            var1 = _closure1_slot12;
            var4 = var1.DEFAULT;
case 550:
            var2 = _closure1_slot62;
            var1 = arg1;
            var1 = var2.bind(var3)(var1, var4);
            var1 = var1.countryPrices;
            return var1;
        }
    };
    var3['getCountryPrices'] = var64;
    var3['experimentalGetPrices'] = var63;
    var3['experimentalGetPrice'] = var62;
    var3['getServerPriceFromClientPrice'] = var61;
    var3['getItemPlansTotalServerPrice'] = var60;
    var60 = function getSubscriptionWithNewPlansTotalServerPrice(arg1, arg2, arg3, arg4) {
        _fun0073: for(var _fun0073_ip = 0; ; ) switch(_fun0073_ip) {
case 0:
            var6 = arg1;
            var3 = arg2;
            var2 = null;
            if(!(var2 === var3)) { _fun0073_ip = 464; continue _fun0073 }
case 73:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 15;
            var1 = var5[var1];
            var7 = undefined;
            var5 = var4.bind(var7)(var1);
            var4 = var2 !== var6;
            var1 = "Subscription can't be null";
            var1 = var5.bind(var7)(var4, var1);
            var3 = new Array(0);
case 464:
            var5 = _closure1_slot66;
            if(!(var2 === var6)) { _fun0073_ip = 535; continue _fun0073 }
case 551:
            var4 = _closure1_slot91;
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            _fun0073_ip = 104; continue _fun0073;
case 535:
            var2 = _closure1_slot90;
            var1 = undefined;
            var4 = var2.bind(var1)(var6, var3);
case 104:
            var3 = undefined;
            var2 = arg3;
            var1 = arg4;
            var1 = var5.bind(var3)(var4, var2, var1);
            return var1;
        }
    };
    var3['getSubscriptionWithNewPlansTotalServerPrice'] = var60;
    var3['getInterval'] = var59;
    var59 = function getDiscountIntervalString(arg1) {
        _fun0074: for(var _fun0074_ip = 0; ; ) switch(_fun0074_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot21;
            var2 = var2.MONTH;
            if(!(var2 !== var3)) { _fun0074_ip = 484; continue _fun0074 }
case 31:
            var2 = _closure1_slot21;
            var2 = var2.YEAR;
            if(!(var2 !== var3)) { _fun0074_ip = 77; continue _fun0074 }
case 80:
            var2 = _closure1_slot21;
            var2 = var2.DAY;
            if(!(var2 !== var3)) { _fun0074_ip = 7; continue _fun0074 }
case 527:
            var2 = _closure1_slot21;
            var2 = var2.WEEK;
case 7:
            var2 = global;
            var4 = var2.Error;
            var2 = var4.prototype;
            var3 = Object.create(var2, {constructor: {value: var4}});
            var8 = 'Unexpected interval';
            var9 = var3;
            var2 = new var9[var4](var8, var7);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 77:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 16;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.tfqrhj;
            var2 = var3.bind(var4)(var2);
            return var2;
case 484:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 16;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.FPybU7;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getDiscountIntervalString'] = var59;
    var3['getIntervalString'] = var58;
    var3['getIntervalStringAsNoun'] = var57;
    var3['getPremiumType'] = var56;
    var3['getDisplayName'] = var55;
    var55 = function getDisplayNameFromSku(arg1) {
        _fun0075: for(var _fun0075_ip = 0; ; ) switch(_fun0075_ip) {
case 0:
            var7 = arg1;
            var2 = _closure1_slot37;
            var2 = var2.TIER_0;
            if(!(var2 !== var7)) { _fun0075_ip = 552; continue _fun0075 }
case 31:
            var2 = _closure1_slot37;
            var2 = var2.TIER_1;
            if(!(var2 !== var7)) { _fun0075_ip = 553; continue _fun0075 }
case 487:
            var2 = _closure1_slot37;
            var2 = var2.TIER_2;
            if(!(var2 !== var7)) { _fun0075_ip = 554; continue _fun0075 }
case 190:
            var2 = global;
            var4 = var2.Error;
            var2 = var4.prototype;
            var3 = Object.create(var2, {constructor: {value: var4}});
            var9 = 'Unsupported sku';
            var10 = var3;
            var2 = new var10[var4](var9, var8);
            var2 = var2 instanceof Object ? var2 : var3;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 12;
            var4 = var4[var3];
            var3 = undefined;
            var5 = var5.bind(var3)(var4);
            var4 = var5.captureBillingException;
            var3 = {};
            var6 = {};
            var6['skuId'] = var7;
            var3['tags'] = var6;
            var3 = var4.bind(var5)(var2, var3);
            throw var2;
case 554:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 16;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.lG6a5x;
            var2 = var3.bind(var4)(var2);
            return var2;
case 553:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 16;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.FSOz78;
            var2 = var3.bind(var4)(var2);
            return var2;
case 552:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 16;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.t9uG/o;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getDisplayNameFromSku'] = var55;
    var3['getTierDisplayNameByPlanId'] = var54;
    var54 = function getPremiumTypeDisplayName(arg1) {
        _fun0076: for(var _fun0076_ip = 0; ; ) switch(_fun0076_ip) {
case 0:
            var4 = arg1;
            var3 = arguments[1];
            var6 = undefined;
            if(!(var3 === var6)) { _fun0076_ip = 32; continue _fun0076 }
case 73:
            var3 = false;
case 32:
            var1 = _closure1_slot38;
            var1 = var1.TIER_0;
            if(!(var1 !== var4)) { _fun0076_ip = 19; continue _fun0076 }
case 121:
            var1 = _closure1_slot38;
            var1 = var1.TIER_1;
            if(!(var1 !== var4)) { _fun0076_ip = 555; continue _fun0076 }
case 542:
            var1 = _closure1_slot38;
            var1 = var1.TIER_2;
            if(!(var1 !== var4)) { _fun0076_ip = 457; continue _fun0076 }
case 43:
            return var6;
case 457:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 16;
            var4 = var8[var1];
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var1 = var8[var1];
            var1 = var7.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.lG6a5x;
            var1 = var4.bind(var5)(var1);
            return var1;
case 555:
            var1 = 'Classic';
            if(var3) { _fun0076_ip = 59; continue _fun0076 }
case 544:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 16;
            var5 = var9[var4];
            var5 = var8.bind(var6)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var4 = var9[var4];
            var4 = var8.bind(var6)(var4);
            var4 = var4.t;
            var4 = var4.FSOz78;
            var1 = var5.bind(var7)(var4);
case 59:
            return var1;
case 19:
            var1 = 'Basic';
            if(var3) { _fun0076_ip = 18; continue _fun0076 }
case 556:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 16;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.t9uG/o;
            var1 = var3.bind(var4)(var2);
case 18:
            return var1;
        }
    };
    var3['getPremiumTypeDisplayName'] = var54;
    var54 = function getPlanDescriptionFromInvoice(arg1) {
        _fun0077: for(var _fun0077_ip = 0; ; ) switch(_fun0077_ip) {
case 0:
            var1 = arg1;
            var6 = var1.renewalInvoicePreview;
            var5 = var1.renewalInvoiceWithEntitlementsPreview;
            var12 = var1.subscription;
            var11 = var1.planId;
            var9 = var1.includePremiumGuilds;
            var3 = undefined;
            if(!(var9 === var3)) { _fun0077_ip = 50; continue _fun0077 }
case 51:
            var9 = false;
case 50:
            var8 = var1.hasDiscountApplied;
            if(!(var8 === var3)) { _fun0077_ip = 101; continue _fun0077 }
case 527:
            var8 = false;
case 101:
            var7 = var1.activeDiscountInfo;
            var4 = var1.hasFractionalPremiumWithSub;
            if(!(var4 === var3)) { _fun0077_ip = 557; continue _fun0077 }
case 75:
            var4 = false;
case 557:
            var2 = _closure1_slot8;
            var1 = var2.get;
            var11 = var1.bind(var2)(var11);
            var2 = _closure1_slot1;
            var13 = _closure1_slot2;
            var1 = 15;
            var1 = var13[var1];
            var13 = var2.bind(var3)(var1);
            var1 = null;
            var2 = var1 != var11;
            var1 = 'Missing plan';
            var1 = var13.bind(var3)(var2, var1);
            var2 = _closure1_slot70;
            var1 = {};
            var1['subscription'] = var12;
            var13 = var11.id;
            var1['planId'] = var13;
            var10 = _closure1_slot85;
            var10 = var10.bind(var3)(var6, var12, var11);
            var1['price'] = var10;
            var1['includePremiumGuilds'] = var9;
            var1['hasDiscountApplied'] = var8;
            var1['activeDiscountInfo'] = var7;
            var1['renewalInvoiceWithoutEntitlementsPreview'] = var6;
            var1['renewalInvoiceWithEntitlementsPreview'] = var5;
            var1['hasFractionalPremiumWithSub'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getPlanDescriptionFromInvoice'] = var54;
    var54 = function getExternalPlanDisplayName(arg1) {
        _fun0078: for(var _fun0078_ip = 0; ; ) switch(_fun0078_ip) {
case 0:
            var1 = arg1;
            var4 = var1.planId;
            var5 = var1.additionalPlans;
            var2 = _closure1_slot4;
            var7 = undefined;
            var3 = var2.bind(var7)(var4);
            var2 = null;
            var6 = null;
            if(var3) { _fun0078_ip = 71; continue _fun0078 }
case 41:
            var3 = _closure1_slot69;
            var6 = var3.bind(var7)(var4);
case 71:
            var3 = var2 == var5;
            var11 = undefined;
            if(var3) { _fun0078_ip = 557; continue _fun0078 }
case 190:
            var4 = var5.find;
            var3 = function(arg1) {
                var1 = arg1;
                var3 = var1.planId;
                var2 = _closure1_slot30;
                var1 = var2.has;
                var1 = var1.bind(var2)(var3);
                return var1;
            };
            var11 = var4.bind(var5)(var3);
case 557:
            var3 = var2 == var11;
            var4 = undefined;
            if(var3) { _fun0078_ip = 9; continue _fun0078 }
case 126:
            var4 = var11.planId;
case 9:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_MONTH_GUILD;
            if(!(var4 !== var3)) { _fun0078_ip = 131; continue _fun0078 }
case 536:
            var3 = var2 == var11;
            var4 = undefined;
            if(var3) { _fun0078_ip = 558; continue _fun0078 }
case 461:
            var4 = var11.planId;
case 558:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_YEAR_GUILD;
            var9 = null;
            if(!(var4 === var3)) { _fun0078_ip = 559; continue _fun0078 }
case 131:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 16;
            var3 = var5[var3];
            var3 = var4.bind(var7)(var3);
            var3 = var3.t;
            var9 = var3.Pi5yMJ;
case 559:
            var3 = var2 != var9;
            var5 = undefined;
            if(!var3) { _fun0078_ip = 560; continue _fun0078 }
case 546:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 16;
            var3 = var8[var3];
            var3 = var4.bind(var7)(var3);
            var8 = var3.intl;
            var4 = var8.formatToPlainString;
            var3 = {};
            var12 = var2 == var11;
            var10 = undefined;
            if(var12) { _fun0078_ip = 561; continue _fun0078 }
case 562:
            var10 = var11.quantity;
case 561:
            var3['num'] = var10;
            var5 = var4.bind(var8)(var9, var3);
case 560:
            if(!(var2 != var6)) { _fun0078_ip = 563; continue _fun0078 }
case 564:
            if(!(var2 == var5)) { _fun0078_ip = 565; continue _fun0078 }
case 563:
            if(!(var2 == var6)) { _fun0078_ip = 566; continue _fun0078 }
case 203:
            if(!(var2 == var5)) { _fun0078_ip = 10; continue _fun0078 }
case 23:
            var2 = global;
            var4 = var2.Error;
            var2 = var4.prototype;
            var3 = Object.create(var2, {constructor: {value: var4}});
            var14 = 'Subscription without premium or premium guild subscription';
            var15 = var3;
            var2 = new var15[var4](var14, var13);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 10:
            return var5;
case 566:
            return var6;
case 565:
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 16;
            var3 = var8[var1];
            var3 = var2.bind(var7)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var8[var1];
            var1 = var2.bind(var7)(var1);
            var1 = var1.t;
            var2 = var1.FN5T9r;
            var1 = {};
            var1['premiumDescription'] = var6;
            var1['premiumGuildDescription'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getExternalPlanDisplayName'] = var54;
    var3['getPremiumPlanOptions'] = var53;
    var53 = function getPlanIdForPremiumType(arg1, arg2) {
        _fun0079: for(var _fun0079_ip = 0; ; ) switch(_fun0079_ip) {
case 0:
            var6 = arg1;
            var3 = arg2;
            var1 = global;
            var7 = var1.Set;
            var4 = _closure1_slot40;
            var5 = var4.MONTH;
            var4 = new Array(2);
            var4[0] = var5;
            var5 = _closure1_slot40;
            var5 = var5.YEAR;
            var4[1] = var5;
            var5 = var7.prototype;
            var5 = Object.create(var5, {constructor: {value: var7}});
            var9 = var5;
            var8 = var4;
            var4 = new var9[var7](var8, var7);
            var5 = var4 instanceof Object ? var4 : var5;
            var4 = var5.has;
            var4 = var4.bind(var5)(var3);
            if(var4) { _fun0079_ip = 194; continue _fun0079 }
case 567:
            var7 = var1.Error;
            var4 = var1.HermesInternal;
            var5 = var4.concat;
            var4 = 'Unsupported plan interval for premium type: ';
            var8 = var5.bind(var4)(var3);
            var5 = var7.prototype;
            var5 = Object.create(var5, {constructor: {value: var7}});
            var9 = var5;
            var4 = new var9[var7](var8, var7);
            var4 = var4 instanceof Object ? var4 : var5;
            throw var4;
case 194:
            var4 = _closure1_slot38;
            var4 = var4.TIER_0;
            if(!(var4 !== var6)) { _fun0079_ip = 568; continue _fun0079 }
case 569:
            var4 = _closure1_slot38;
            var4 = var4.TIER_1;
            if(!(var4 !== var6)) { _fun0079_ip = 570; continue _fun0079 }
case 571:
            var4 = _closure1_slot38;
            var4 = var4.TIER_2;
            if(!(var4 !== var6)) { _fun0079_ip = 56; continue _fun0079 }
case 198:
            var5 = var1.Error;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var1 = 'Unsupported premium type: ';
            var8 = var4.bind(var1)(var6);
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var9 = var4;
            var1 = new var9[var5](var8, var7);
            var1 = var1 instanceof Object ? var1 : var4;
            throw var1;
case 56:
            var1 = _closure1_slot40;
            var1 = var1.MONTH;
            if(!(var3 !== var1)) { _fun0079_ip = 69; continue _fun0079 }
case 572:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_YEAR_TIER_2;
            _fun0079_ip = 378; continue _fun0079;
case 69:
            var4 = _closure1_slot42;
            var1 = var4.PREMIUM_MONTH_TIER_2;
case 378:
            return var1;
case 570:
            var1 = _closure1_slot40;
            var1 = var1.MONTH;
            if(!(var3 !== var1)) { _fun0079_ip = 573; continue _fun0079 }
case 574:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_YEAR_TIER_1;
            _fun0079_ip = 575; continue _fun0079;
case 573:
            var4 = _closure1_slot42;
            var1 = var4.PREMIUM_MONTH_TIER_1;
case 575:
            return var1;
case 568:
            var1 = _closure1_slot40;
            var1 = var1.MONTH;
            if(!(var3 !== var1)) { _fun0079_ip = 576; continue _fun0079 }
case 577:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_YEAR_TIER_0;
            _fun0079_ip = 578; continue _fun0079;
case 576:
            var2 = _closure1_slot42;
            var1 = var2.PREMIUM_MONTH_TIER_0;
case 578:
            return var1;
        }
    };
    var3['getPlanIdForPremiumType'] = var53;
    var3['getNumPremiumGuildSubscriptions'] = var52;
    var3['subscriptionHasPremiumGuildPlan'] = var51;
    var3['isPremiumBaseSubscriptionPlan'] = var50;
    var3['isPremiumGuildSubscriptionPlan'] = var49;
    var49 = function isPremiumSubscriptionPlan(arg1) {
        _fun0080: for(var _fun0080_ip = 0; ; ) switch(_fun0080_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot74;
            var3 = undefined;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0080_ip = 47; continue _fun0080 }
case 29:
            var2 = _closure1_slot75;
            var1 = var2.bind(var3)(var4);
case 47:
            return var1;
        }
    };
    var3['isPremiumSubscriptionPlan'] = var49;
    var49 = function isPremiumGroupSubscriptionPlan(arg1) {
        _fun0081: for(var _fun0081_ip = 0; ; ) switch(_fun0081_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0081_ip = 47; continue _fun0081 }
case 73:
            var2 = _closure1_slot42;
            var2 = var2.PREMIUM_GROUP_MONTH;
            var1 = var3 === var2;
case 47:
            return var1;
        }
    };
    var3['isPremiumGroupSubscriptionPlan'] = var49;
    var3['getBillingGracePeriodDaysAndExpiresDate'] = var48;
    var3['getBillingInformationString'] = var47;
    var3['extendDateWithUnconsumedFractionalPremium'] = var46;
    var3['getUnactivatedFractionalPremiumDurationString'] = var45;
    var3['isSwitchingPlansDisabled'] = var44;
    var3['getSwitchingPlansDisabledMessage'] = var43;
    var3['isSubscriptionPrepaidPaymentSource'] = var42;
    var3['isPrepaidPaymentSource'] = var41;
    var3['getCoercedPremiumGuildSubscriptionStatus'] = var40;
    var3['isPremiumGuildSubscriptionCanceled'] = var39;
    var39 = function getPremiumGuildHeaderDescription(arg1) {
        _fun0082: for(var _fun0082_ip = 0; ; ) switch(_fun0082_ip) {
case 0:
            var2 = arg1;
            var3 = var2.subscription;
            var22 = var2.user;
            var12 = var2.price;
            var1 = var2.renewalInvoicePreview;
            var4 = var2.fractionalPremiumInfo;
            var8 = var3.planId;
            var7 = var3.additionalPlans;
            var6 = _closure1_slot8;
            var5 = var6.get;
            var8 = var5.bind(var6)(var8);
            var6 = _closure1_slot1;
            var9 = _closure1_slot2;
            var5 = 15;
            var5 = var9[var5];
            var11 = undefined;
            var10 = var6.bind(var11)(var5);
            var5 = null;
            var9 = var5 != var8;
            var6 = 'Missing plan';
            var6 = var10.bind(var11)(var9, var6);
            var6 = _closure1_slot72;
            var6 = var6.bind(var11)(var7);
            var13 = _closure1_slot86;
            var25 = var3.planId;
            var24 = var3.paymentSourceId;
            var23 = var3.currency;
            var26 = undefined;
            var7 = var26[var13](var25, var24, var23, var22, var21);
            var7 = var7.amount;
            var9 = var7 * var6;
            var13 = var9;
            if(!(var5 != var1)) { _fun0082_ip = 579; continue _fun0082 }
case 195:
            var15 = var1.invoiceItems;
            var10 = var15.find;
            var7 = function(arg1) {
                var3 = _closure1_slot30;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.subscriptionPlanId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var10.bind(var15)(var7);
            var13 = var9;
            if(!(var5 != var7)) { _fun0082_ip = 579; continue _fun0082 }
case 59:
            var13 = var7.amount;
case 579:
            if(!(var5 == var12)) { _fun0082_ip = 142; continue _fun0082 }
case 20:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 20;
            var7 = var10[var7];
            var10 = var9.bind(var11)(var7);
            var9 = var10.formatPrice;
            var7 = var3.currency;
            var12 = var9.bind(var10)(var13, var7);
case 142:
            var9 = var5 == var1;
            var7 = undefined;
            if(var9) { _fun0082_ip = 62; continue _fun0082 }
case 580:
            var7 = var1.taxInclusive;
case 62:
            if(!(var5 == var7)) { _fun0082_ip = 205; continue _fun0082 }
case 581:
            var9 = var3.latestInvoice;
            var10 = var5 == var9;
            var1 = undefined;
            if(var10) { _fun0082_ip = 582; continue _fun0082 }
case 145:
            var1 = var9.taxInclusive;
case 582:
            var7 = var1;
case 205:
            var1 = var5 == var7;
            if(var1) { _fun0082_ip = 392; continue _fun0082 }
case 10:
            var1 = var7;
case 392:
            var7 = _closure1_slot81;
            var7 = var7.bind(var11)(var3);
            if(var7) { _fun0082_ip = 583; continue _fun0082 }
case 64:
            var9 = var3.status;
            var7 = _closure1_slot13;
            var7 = var7.ACCOUNT_HOLD;
            if(!(var7 !== var9)) { _fun0082_ip = 584; continue _fun0082 }
case 8:
            var7 = _closure1_slot13;
            var7 = var7.PAUSE_PENDING;
            if(!(var7 !== var9)) { _fun0082_ip = 585; continue _fun0082 }
case 66:
            var7 = _closure1_slot13;
            var7 = var7.PAUSED;
            if(!(var7 !== var9)) { _fun0082_ip = 585; continue _fun0082 }
case 586:
            var7 = _closure1_slot13;
            var7 = var7.PAST_DUE;
            if(!(var7 === var9)) { _fun0082_ip = 587; continue _fun0082 }
case 395:
            var7 = var3.isBoostOnly;
            if(var7) { _fun0082_ip = 588; continue _fun0082 }
case 587:
            var7 = var3.isPurchasedViaGoogle;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var9 = 16;
            var10 = var19[var9];
            var10 = var18.bind(var11)(var10);
            var15 = var10.intl;
            var13 = var15.format;
            var9 = var19[var9];
            var9 = var18.bind(var11)(var9);
            var9 = var9.t;
            if(var7) { _fun0082_ip = 589; continue _fun0082 }
case 590:
            if(var1) { _fun0082_ip = 591; continue _fun0082 }
case 592:
            var10 = var9.ijSDcI;
            var7 = {};
            var7['quantity'] = var6;
            var16 = 20;
            var16 = var19[var16];
            var21 = var18.bind(var11)(var16);
            var20 = var21.formatRate;
            var17 = var8.interval;
            var16 = var8.intervalCount;
            var16 = var20.bind(var21)(var12, var17, var16);
            var7['rate'] = var16;
            var7 = var13.bind(var15)(var10, var7);
            _fun0082_ip = 593; continue _fun0082;
case 591:
            var16 = var9.eDwrLA;
            var10 = {};
            var10['quantity'] = var6;
            var17 = 20;
            var17 = var19[var17];
            var20 = var18.bind(var11)(var17);
            var19 = var20.formatRate;
            var18 = var8.interval;
            var17 = var8.intervalCount;
            var17 = var19.bind(var20)(var12, var18, var17);
            var10['rate'] = var17;
            var7 = var13.bind(var15)(var16, var10);
case 593:
            _fun0082_ip = 594; continue _fun0082;
case 589:
            var10 = var9["5iud9s"];
            var9 = {};
            var9['quantity'] = var6;
            var7 = var13.bind(var15)(var10, var9);
case 594:
            return var7;
case 588:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var7 = 16;
            var9 = var17[var7];
            var9 = var16.bind(var11)(var9);
            var13 = var9.intl;
            var10 = var13.format;
            var7 = var17[var7];
            var7 = var16.bind(var11)(var7);
            var7 = var7.t;
            var9 = var7.d+0vwo;
            var7 = {};
            var15 = 18;
            var15 = var17[var15];
            var18 = var16.bind(var11)(var15);
            var17 = var18.dateFormat;
            var15 = _closure1_slot76;
            var15 = var15.bind(var11)(var3);
            var16 = var15.expiresDate;
            var15 = 'LL';
            var15 = var17.bind(var18)(var16, var15);
            var7['endDate'] = var15;
            var14 = function onClick() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 19;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = 'https://support.discord.com/hc/articles/23082866222871';
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var7['onClick'] = var14;
            var7 = var10.bind(var13)(var9, var7);
            return var7;
case 585:
            if(!(var5 != var4)) { _fun0082_ip = 595; continue _fun0082 }
case 596:
            var4 = var4.isFractionalPremiumActive;
            if(var4) { _fun0082_ip = 595; continue _fun0082 }
case 597:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 16;
            var5 = var10[var4];
            var5 = var9.bind(var11)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var4 = var10[var4];
            var4 = var9.bind(var11)(var4);
            var4 = var4.t;
            var4 = var4.CduWAm;
            var4 = var5.bind(var7)(var4);
            _fun0082_ip = 598; continue _fun0082;
case 595:
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 16;
            var9 = var13[var5];
            var9 = var7.bind(var11)(var9);
            var10 = var9.intl;
            var9 = var10.format;
            var5 = var13[var5];
            var5 = var7.bind(var11)(var5);
            var5 = var5.t;
            var7 = var5["5iud9s"];
            var5 = {};
            var5['quantity'] = var6;
            var4 = var9.bind(var10)(var7, var5);
case 598:
            return var4;
case 584:
            var4 = var3.isPurchasedViaGoogle;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var5 = 16;
            var7 = var16[var5];
            var7 = var15.bind(var11)(var7);
            var10 = var7.intl;
            var9 = var10.format;
            var5 = var16[var5];
            var5 = var15.bind(var11)(var5);
            var5 = var5.t;
            if(var4) { _fun0082_ip = 599; continue _fun0082 }
case 600:
            if(var1) { _fun0082_ip = 601; continue _fun0082 }
case 602:
            var7 = var5["0QxOAi"];
            var4 = {};
            var4['quantity'] = var6;
            var4['boostQuantity'] = var6;
            var13 = 20;
            var13 = var16[var13];
            var18 = var15.bind(var11)(var13);
            var17 = var18.formatRate;
            var14 = var8.interval;
            var13 = var8.intervalCount;
            var13 = var17.bind(var18)(var12, var14, var13);
            var4['rate'] = var13;
            var4 = var9.bind(var10)(var7, var4);
            _fun0082_ip = 603; continue _fun0082;
case 601:
            var13 = var5.oiRy7v;
            var7 = {};
            var7['quantity'] = var6;
            var7['boostQuantity'] = var6;
            var14 = 20;
            var14 = var16[var14];
            var17 = var15.bind(var11)(var14);
            var16 = var17.formatRate;
            var15 = var8.interval;
            var14 = var8.intervalCount;
            var14 = var16.bind(var17)(var12, var15, var14);
            var7['rate'] = var14;
            var4 = var9.bind(var10)(var13, var7);
case 603:
            _fun0082_ip = 604; continue _fun0082;
case 599:
            var7 = var5.Nlf3nc;
            var5 = {};
            var5['quantity'] = var6;
            var5['boostQuantity'] = var6;
            var4 = var9.bind(var10)(var7, var5);
case 604:
            return var4;
case 583:
            var3 = var3.isPurchasedViaGoogle;
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 16;
            var4 = var13[var2];
            var4 = var10.bind(var11)(var4);
            var5 = var4.intl;
            var4 = var5.format;
            var2 = var13[var2];
            var2 = var10.bind(var11)(var2);
            var2 = var2.t;
            if(var3) { _fun0082_ip = 605; continue _fun0082 }
case 606:
            if(var1) { _fun0082_ip = 607; continue _fun0082 }
case 608:
            var3 = var2.yjsv/s;
            var1 = {};
            var1['quantity'] = var6;
            var7 = 20;
            var7 = var13[var7];
            var15 = var10.bind(var11)(var7);
            var14 = var15.formatRate;
            var9 = var8.interval;
            var7 = var8.intervalCount;
            var7 = var14.bind(var15)(var12, var9, var7);
            var1['rate'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0082_ip = 609; continue _fun0082;
case 607:
            var7 = var2["0ozBSB"];
            var3 = {};
            var3['quantity'] = var6;
            var9 = 20;
            var9 = var13[var9];
            var11 = var10.bind(var11)(var9);
            var10 = var11.formatRate;
            var9 = var8.interval;
            var8 = var8.intervalCount;
            var8 = var10.bind(var11)(var12, var9, var8);
            var3['rate'] = var8;
            var1 = var4.bind(var5)(var7, var3);
case 609:
            _fun0082_ip = 610; continue _fun0082;
case 605:
            var3 = var2["3/WTrI"];
            var2 = {};
            var2['quantity'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 610:
            return var1;
        }
    };
    var3['getPremiumGuildHeaderDescription'] = var39;
    var3['getFormattedPriceForPlan'] = var38;
    var38 = function getFormattedRateForPlan(arg1, arg2, arg3) {
        var1 = arg1;
        var6 = _closure1_slot82;
        var4 = undefined;
        var5 = arg2;
        var3 = arg3;
        var5 = var6.bind(var4)(var1, var5, var3);
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 20;
        var2 = var6[var2];
        var4 = var3.bind(var4)(var2);
        var3 = var4.formatRate;
        var2 = var1.interval;
        var1 = var1.intervalCount;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var3['getFormattedRateForPlan'] = var38;
    var3['getPlanIdFromInvoice'] = var37;
    var3['getStatusFromInvoice'] = var36;
    var3['isBaseSubscriptionCanceled'] = var35;
    var3['isSubscriptionStatusFailedPayment'] = var34;
    var3['getFormattedPlanPriceFromInvoice'] = var33;
    var3['getPremiumGuildIntervalPrice'] = var32;
    var3['getBillingReviewSubheader'] = var31;
    var3['getIntervalForInvoice'] = var30;
    var3['getDefaultCurrency'] = var29;
    var29 = function formatTrialOfferIntervalDuration(arg1) {
        _fun0083: for(var _fun0083_ip = 0; ; ) switch(_fun0083_ip) {
case 0:
            var1 = arg1;
            var4 = var1.intervalType;
            var9 = undefined;
            if(!(var4 === var9)) { _fun0083_ip = 34; continue _fun0083 }
case 470:
            var2 = _closure1_slot40;
            var4 = var2.MONTH;
case 34:
            var8 = var1.intervalCount;
            if(!(var8 === var9)) { _fun0083_ip = 50; continue _fun0083 }
case 40:
            var8 = 1;
case 50:
            var2 = var1.capitalize;
            if(!(var2 === var9)) { _fun0083_ip = 101; continue _fun0083 }
case 527:
            var2 = false;
case 101:
            var1 = _closure1_slot40;
            var1 = var1.DAY;
            if(!(var1 !== var4)) { _fun0083_ip = 27; continue _fun0083 }
case 611:
            var1 = _closure1_slot40;
            var1 = var1.MONTH;
            if(!(var1 !== var4)) { _fun0083_ip = 142; continue _fun0083 }
case 374:
            var1 = _closure1_slot40;
            var1 = var1.YEAR;
            if(!(var1 !== var4)) { _fun0083_ip = 482; continue _fun0083 }
case 96:
            var1 = global;
            var5 = var1.Error;
            var1 = var5.prototype;
            var4 = Object.create(var1, {constructor: {value: var5}});
            var13 = 'Unsupported interval duration.';
            var14 = var4;
            var1 = new var14[var5](var13, var12);
            var1 = var1 instanceof Object ? var1 : var4;
            throw var1;
case 482:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 16;
            var6 = var5[var1];
            var6 = var4.bind(var9)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var1 = var5[var1];
            var1 = var4.bind(var9)(var1);
            var4 = var1.t;
            if(var2) { _fun0083_ip = 612; continue _fun0083 }
case 19:
            var5 = var4["9DFiHk"];
            var1 = {};
            var1['years'] = var8;
            var1 = var6.bind(var7)(var5, var1);
            _fun0083_ip = 560; continue _fun0083;
case 612:
            var5 = var4.h+63yl;
            var4 = {};
            var4['years'] = var8;
            var1 = var6.bind(var7)(var5, var4);
case 560:
            return var1;
case 142:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 16;
            var6 = var5[var1];
            var6 = var4.bind(var9)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var1 = var5[var1];
            var1 = var4.bind(var9)(var1);
            var4 = var1.t;
            if(var2) { _fun0083_ip = 63; continue _fun0083 }
case 393:
            var5 = var4["4SEnCZ"];
            var1 = {};
            var1['months'] = var8;
            var1 = var6.bind(var7)(var5, var1);
            _fun0083_ip = 613; continue _fun0083;
case 63:
            var5 = var4.x5MgxS;
            var4 = {};
            var4['months'] = var8;
            var1 = var6.bind(var7)(var5, var4);
case 613:
            return var1;
case 27:
            var7 = 7;
            if(!(var8 >= var7)) { _fun0083_ip = 6; continue _fun0083 }
case 614:
            var4 = var8 % var7;
            var1 = 0;
            if(!(var4 !== var1)) { _fun0083_ip = 615; continue _fun0083 }
case 6:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 16;
            var6 = var5[var1];
            var6 = var4.bind(var9)(var6);
            var10 = var6.intl;
            var6 = var10.formatToPlainString;
            var1 = var5[var1];
            var1 = var4.bind(var9)(var1);
            var4 = var1.t;
            if(var2) { _fun0083_ip = 616; continue _fun0083 }
case 617:
            var5 = var4.kbBj/h;
            var1 = {};
            var1['days'] = var8;
            var1 = var6.bind(var10)(var5, var1);
            _fun0083_ip = 221; continue _fun0083;
case 616:
            var5 = var4["6Cdzoy"];
            var4 = {};
            var4['days'] = var8;
            var1 = var6.bind(var10)(var5, var4);
case 221:
            _fun0083_ip = 618; continue _fun0083;
case 615:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 16;
            var5 = var10[var3];
            var5 = var4.bind(var9)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var3 = var10[var3];
            var3 = var4.bind(var9)(var3);
            var3 = var3.t;
            if(var2) { _fun0083_ip = 619; continue _fun0083 }
case 620:
            var4 = var3.EIpHEj;
            var2 = {};
            var9 = var8 / var7;
            var2['weeks'] = var9;
            var2 = var5.bind(var6)(var4, var2);
            _fun0083_ip = 621; continue _fun0083;
case 619:
            var4 = var3.fRNBRX;
            var3 = {};
            var7 = var8 / var7;
            var3['weeks'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 621:
            var1 = var2;
case 618:
            return var1;
        }
    };
    var3['formatTrialOfferIntervalDuration'] = var29;
    var3['formatTrialCtaIntervalDuration'] = var28;
    var28 = function formatTrialCtaIntervalDurationFromTrialOffer(arg1, arg2) {
        _fun0084: for(var _fun0084_ip = 0; ; ) switch(_fun0084_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 != var1)) { _fun0084_ip = 40; continue _fun0084 }
case 465:
            var3 = var1.subscription_trial;
            if(!(var2 != var3)) { _fun0084_ip = 40; continue _fun0084 }
case 622:
            var3 = var1.subscription_trial;
            var4 = var3.sku_id;
            var3 = arg2;
            if(!(var4 !== var3)) { _fun0084_ip = 487; continue _fun0084 }
case 40:
            return var2;
case 487:
            var1 = var1.subscription_trial;
            var3 = _closure1_slot88;
            var2 = {};
            var4 = var1.interval;
            var2['intervalType'] = var4;
            var1 = var1.interval_count;
            var2['intervalCount'] = var1;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        }
    };
    var3['formatTrialCtaIntervalDurationFromTrialOffer'] = var28;
    var28 = function formatIntervalDuration(arg1) {
        _fun0085: for(var _fun0085_ip = 0; ; ) switch(_fun0085_ip) {
case 0:
            var1 = arg1;
            var4 = var1.intervalType;
            var9 = undefined;
            if(!(var4 === var9)) { _fun0085_ip = 34; continue _fun0085 }
case 470:
            var2 = _closure1_slot40;
            var4 = var2.MONTH;
case 34:
            var8 = var1.intervalCount;
            if(!(var8 === var9)) { _fun0085_ip = 50; continue _fun0085 }
case 40:
            var8 = 1;
case 50:
            var2 = var1.capitalize;
            if(!(var2 === var9)) { _fun0085_ip = 101; continue _fun0085 }
case 527:
            var2 = false;
case 101:
            var1 = _closure1_slot40;
            var1 = var1.DAY;
            if(!(var1 !== var4)) { _fun0085_ip = 74; continue _fun0085 }
case 611:
            var1 = _closure1_slot40;
            var1 = var1.MONTH;
            if(!(var1 !== var4)) { _fun0085_ip = 623; continue _fun0085 }
case 374:
            var1 = _closure1_slot40;
            var1 = var1.YEAR;
            if(!(var1 !== var4)) { _fun0085_ip = 482; continue _fun0085 }
case 96:
            var1 = global;
            var5 = var1.Error;
            var1 = var5.prototype;
            var4 = Object.create(var1, {constructor: {value: var5}});
            var13 = 'Unsupported interval duration.';
            var14 = var4;
            var1 = new var14[var5](var13, var12);
            var1 = var1 instanceof Object ? var1 : var4;
            throw var1;
case 482:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 16;
            var6 = var5[var1];
            var6 = var4.bind(var9)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var1 = var5[var1];
            var1 = var4.bind(var9)(var1);
            var4 = var1.t;
            if(var2) { _fun0085_ip = 624; continue _fun0085 }
case 19:
            var5 = var4.PClsrw;
            var1 = {};
            var1['years'] = var8;
            var1 = var6.bind(var7)(var5, var1);
            _fun0085_ip = 373; continue _fun0085;
case 624:
            var5 = var4.IfYQVC;
            var4 = {};
            var4['years'] = var8;
            var1 = var6.bind(var7)(var5, var4);
case 373:
            return var1;
case 623:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 16;
            var6 = var5[var1];
            var6 = var4.bind(var9)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var1 = var5[var1];
            var1 = var4.bind(var9)(var1);
            var4 = var1.t;
            if(var2) { _fun0085_ip = 625; continue _fun0085 }
case 205:
            var5 = var4.kridzK;
            var1 = {};
            var1['months'] = var8;
            var1 = var6.bind(var7)(var5, var1);
            _fun0085_ip = 626; continue _fun0085;
case 625:
            var5 = var4.erUSmA;
            var4 = {};
            var4['months'] = var8;
            var1 = var6.bind(var7)(var5, var4);
case 626:
            return var1;
case 74:
            var7 = 7;
            if(!(var8 >= var7)) { _fun0085_ip = 507; continue _fun0085 }
case 211:
            var4 = var8 % var7;
            var1 = 0;
            if(!(var4 !== var1)) { _fun0085_ip = 627; continue _fun0085 }
case 507:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 16;
            var6 = var5[var1];
            var6 = var4.bind(var9)(var6);
            var10 = var6.intl;
            var6 = var10.formatToPlainString;
            var1 = var5[var1];
            var1 = var4.bind(var9)(var1);
            var4 = var1.t;
            if(var2) { _fun0085_ip = 628; continue _fun0085 }
case 629:
            var5 = var4.k2UNz+;
            var1 = {};
            var1['days'] = var8;
            var1 = var6.bind(var10)(var5, var1);
            _fun0085_ip = 144; continue _fun0085;
case 628:
            var5 = var4.jzH70Z;
            var4 = {};
            var4['days'] = var8;
            var1 = var6.bind(var10)(var5, var4);
case 144:
            _fun0085_ip = 630; continue _fun0085;
case 627:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 16;
            var5 = var10[var3];
            var5 = var4.bind(var9)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var3 = var10[var3];
            var3 = var4.bind(var9)(var3);
            var3 = var3.t;
            if(var2) { _fun0085_ip = 631; continue _fun0085 }
case 632:
            var4 = var3.EmoBD2;
            var2 = {};
            var9 = var8 / var7;
            var2['weeks'] = var9;
            var2 = var5.bind(var6)(var4, var2);
            _fun0085_ip = 413; continue _fun0085;
case 631:
            var4 = var3.iVZYyl;
            var3 = {};
            var7 = var8 / var7;
            var3['weeks'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 413:
            var1 = var2;
case 630:
            return var1;
        }
    };
    var3['formatIntervalDuration'] = var28;
    var3['getExternalSubscriptionMethodUrl'] = var27;
    var27 = function hasPremiumSubscriptionToDisplay(arg1, arg2) {
        _fun0086: for(var _fun0086_ip = 0; ; ) switch(_fun0086_ip) {
case 0:
            var5 = arg2;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 14;
            var1 = var4[var1];
            var4 = undefined;
            var6 = var3.bind(var4)(var1);
            var3 = var6.isPremium;
            var1 = arg1;
            var1 = var3.bind(var6)(var1);
            if(var1) { _fun0086_ip = 35; continue _fun0086 }
case 71:
            var3 = _closure1_slot84;
            var2 = null;
            var6 = var2 == var5;
            var2 = undefined;
            if(var6) { _fun0086_ip = 42; continue _fun0086 }
case 472:
            var2 = var5.status;
case 42:
            var1 = var3.bind(var4)(var2);
case 35:
            return var1;
        }
    };
    var3['hasPremiumSubscriptionToDisplay'] = var27;
    var27 = function useHasPremiumSubscriptionToDisplay() {
        _fun0087: for(var _fun0087_ip = 0; ; ) switch(_fun0087_ip) {
case 0:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var6 = 25;
            var5 = var7[var6];
            var4 = undefined;
            var10 = var3.bind(var4)(var5);
            var9 = var10.useStateFromStores;
            var5 = _closure1_slot9;
            var8 = new Array(1);
            var8[0] = var5;
            var5 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var9.bind(var10)(var8, var5);
            var6 = var7[var6];
            var9 = var3.bind(var4)(var6);
            var8 = var9.useStateFromStores;
            var10 = _closure1_slot5;
            var6 = new Array(1);
            var6[0] = var10;
            var1 = function() {
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var8.bind(var9)(var6, var1);
            var1 = 14;
            var1 = var7[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.isPremium;
            var1 = var1.bind(var3)(var6);
            if(var1) { _fun0087_ip = 538; continue _fun0087 }
case 376:
            var3 = _closure1_slot84;
            var2 = null;
            var6 = var2 == var5;
            var2 = undefined;
            if(var6) { _fun0087_ip = 633; continue _fun0087 }
case 543:
            var2 = var5.status;
case 633:
            var1 = var3.bind(var4)(var2);
case 538:
            return var1;
        }
    };
    var3['useHasPremiumSubscriptionToDisplay'] = var27;
    var3['getItemsFromNewAdditionalPlans'] = var26;
    var3['getItemsWithoutPremiumPlanItem'] = var25;
    var3['getItemsWithUpsertedPlanIdForGroup'] = var24;
    var24 = function getItemsWithUpsertedPremiumPlanId(arg1, arg2) {
        var6 = _closure1_slot92;
        var7 = _closure1_slot31;
        var11 = undefined;
        var10 = arg1;
        var9 = arg2;
        var8 = 1;
        var1 = var11[var6](var10, var9, var8, var7, var6);
        return var1;
    };
    var3['getItemsWithUpsertedPremiumPlanId'] = var24;
    var24 = function getItemsWithUpsertedPremiumGuildPlan(arg1, arg2, arg3) {
        var6 = _closure1_slot92;
        var7 = _closure1_slot30;
        var11 = undefined;
        var10 = arg1;
        var9 = arg3;
        var8 = arg2;
        var1 = var11[var6](var10, var9, var8, var7, var6);
        return var1;
    };
    var3['getItemsWithUpsertedPremiumGuildPlan'] = var24;
    var24 = function coerceExistingItemsToNewItemInterval(arg1) {
        _fun0088: for(var _fun0088_ip = 0; ; ) switch(_fun0088_ip) {
case 0:
            var4 = arg1;
            var3 = var4.find;
            var1 = function(arg1) {
                var2 = 'id';
                var1 = arg1;
                var1 = var2 in var1;
                var1 = !var1;
                return var1;
            };
            var3 = var3.bind(var4)(var1);
            var5 = null;
            if(!(var5 == var3)) { _fun0088_ip = 50; continue _fun0088 }
case 37:
            var6 = var4.find;
            var1 = function(arg1) {
                var3 = _closure1_slot31;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.planId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var6.bind(var4)(var1);
case 50:
            var _closure2_slot0 = var3;
            var1 = var4;
            if(!(var5 != var3)) { _fun0088_ip = 537; continue _fun0088 }
case 541:
            var8 = _closure1_slot8;
            var7 = var8.get;
            var3 = var3.planId;
            var3 = var7.bind(var8)(var3);
            var _closure2_slot1 = var3;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var6 = 15;
            var6 = var7[var6];
            var7 = undefined;
            var6 = var8.bind(var7)(var6);
            var5 = var5 != var3;
            var3 = 'Missing plan';
            var3 = var6.bind(var7)(var5, var3);
            var3 = var4.map;
            var2 = function(arg1) {
                _fun0089: for(var _fun0089_ip = 0; ; ) switch(_fun0089_ip) {
case 0:
                    var1 = arg1;
                    var2 = _closure2_slot0;
                    if(!(var1 !== var2)) { _fun0089_ip = 87; continue _fun0089 }
case 471:
                    var6 = _closure1_slot8;
                    var5 = var6.get;
                    var2 = var1.planId;
                    var5 = var5.bind(var6)(var2);
                    var8 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var7 = 15;
                    var2 = var2[var7];
                    var6 = undefined;
                    var10 = var8.bind(var6)(var2);
                    var2 = null;
                    var9 = var2 != var5;
                    var8 = 'Missing plan';
                    var8 = var10.bind(var6)(var9, var8);
                    var8 = _closure2_slot1;
                    var9 = var8.interval;
                    var8 = var5.interval;
                    if(!(var9 === var8)) { _fun0089_ip = 473; continue _fun0089 }
case 536:
                    var8 = _closure2_slot1;
                    var9 = var8.intervalCount;
                    var8 = var5.intervalCount;
                    if(!(var9 !== var8)) { _fun0089_ip = 634; continue _fun0089 }
case 473:
                    var10 = _closure1_slot8;
                    var9 = var10.getForSkuAndInterval;
                    var8 = var5.skuId;
                    var5 = _closure2_slot1;
                    var5 = var5.interval;
                    var3 = _closure2_slot1;
                    var3 = var3.intervalCount;
                    var3 = var9.bind(var10)(var8, var5, var3);
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var5 = var5.bind(var6)(var4);
                    var4 = var2 != var3;
                    var2 = 'Missing planForInterval';
                    var2 = var5.bind(var6)(var4, var2);
                    var2 = {};
                    var13 = var2;
                    var12 = var1;
                    var4 = copyDataProperties(var13, var12);
                    var4 = var3.id;
                    var3 = 'planId';
                    var2[2] = var4;
                    return var2;
case 634:
                    return var1;
case 87:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
case 537:
            return var1;
        }
    };
    var3['coerceExistingItemsToNewItemInterval'] = var24;
    var24 = function getMaxFileSizeForPremiumType(arg1) {
        _fun0090: for(var _fun0090_ip = 0; ; ) switch(_fun0090_ip) {
case 0:
            var5 = arguments[1];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0090_ip = 46; continue _fun0090 }
case 465:
            var1 = {};
            var2 = true;
            var1['useSpace'] = var2;
            var5 = var1;
case 46:
            var3 = _closure1_slot39;
            var2 = arg1;
            var2 = var3[var2];
            var2 = var2.fileSize;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 26;
            var1 = var6[var1];
            var4 = var3.bind(var4)(var1);
            var3 = var4.formatSize;
            var1 = 1024;
            var2 = var2 / var1;
            var1 = {};
            var6 = true;
            var1['useKibibytes'] = var6;
            var5 = var5.useSpace;
            var1['useSpace'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getMaxFileSizeForPremiumType'] = var24;
    var3['getGuildBoostPlanItem'] = var23;
    var3['isBoostOnlySubscription'] = var22;
    var3['getPremiumSkuIdForSubscription'] = var21;
    var3['getPremiumTypeFromSubscription'] = var20;
    var3['isNewUser'] = var19;
    var3['formatPriceString'] = var18;
    var3['castPremiumSubscriptionAsSkuId'] = var17;
    var17 = function getPremiumTypeFromPlanId(arg1) {
        _fun0091: for(var _fun0091_ip = 0; ; ) switch(_fun0091_ip) {
case 0:
            var5 = arg1;
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_MONTH_TIER_0;
            if(!(var1 !== var5)) { _fun0091_ip = 635; continue _fun0091 }
case 31:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_YEAR_TIER_0;
            if(!(var1 !== var5)) { _fun0091_ip = 636; continue _fun0091 }
case 487:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_MONTH_TIER_2;
            if(!(var1 !== var5)) { _fun0091_ip = 637; continue _fun0091 }
case 190:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_GROUP_MONTH;
            if(!(var1 !== var5)) { _fun0091_ip = 637; continue _fun0091 }
case 551:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_YEAR_TIER_2;
            if(!(var1 !== var5)) { _fun0091_ip = 638; continue _fun0091 }
case 382:
            var1 = global;
            var4 = var1.Error;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var1 = 'Unsupported gifting planId: ';
            var6 = var3.bind(var1)(var5);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var7 = var3;
            var1 = new var7[var4](var6, var5);
            var1 = var1 instanceof Object ? var1 : var3;
            throw var1;
case 638:
            var1 = {};
            var3 = _closure1_slot38;
            var3 = var3.TIER_2;
            var1['premiumType'] = var3;
            var3 = _closure1_slot40;
            var3 = var3.YEAR;
            var1['planInterval'] = var3;
            return var1;
case 637:
            var1 = {};
            var3 = _closure1_slot38;
            var3 = var3.TIER_2;
            var1['premiumType'] = var3;
            var3 = _closure1_slot40;
            var3 = var3.MONTH;
            var1['planInterval'] = var3;
            return var1;
case 636:
            var1 = {};
            var3 = _closure1_slot38;
            var3 = var3.TIER_0;
            var1['premiumType'] = var3;
            var3 = _closure1_slot40;
            var3 = var3.YEAR;
            var1['planInterval'] = var3;
            return var1;
case 635:
            var1 = {};
            var3 = _closure1_slot38;
            var3 = var3.TIER_0;
            var1['premiumType'] = var3;
            var2 = _closure1_slot40;
            var2 = var2.MONTH;
            var1['planInterval'] = var2;
            return var1;
        }
    };
    var3['getPremiumTypeFromPlanId'] = var17;
    var17 = function isNitroLockedState(arg1) {
        var2 = 'isNitroLocked';
        var1 = arg1;
        var1 = var2 in var1;
        return var1;
    };
    var3['isNitroLockedState'] = var17;
    var17 = var16[var14];
    var17 = var15.bind(var1)(var17);
    var17 = var17.isPremiumAtLeast;
    var3['isPremiumAtLeast'] = var17;
    var17 = var16[var14];
    var17 = var15.bind(var1)(var17);
    var17 = var17.isPremiumAtMost;
    var3['isPremiumAtMost'] = var17;
    var17 = var16[var14];
    var17 = var15.bind(var1)(var17);
    var17 = var17.isPremium;
    var3['isPremium'] = var17;
    var14 = var16[var14];
    var14 = var15.bind(var1)(var14);
    var14 = var14.isPremiumExactly;
    var3['isPremiumExactly'] = var14;
    var14 = function useHasTier2Premium() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 25;
        var2 = var6[var2];
        var3 = undefined;
        var8 = var5.bind(var3)(var2);
        var7 = var8.useStateFromStores;
        var2 = _closure1_slot5;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() {
            var2 = _closure1_slot5;
            var1 = var2.getCurrentUser;
            var1 = var1.bind(var2)();
            return var1;
        };
        var4 = var7.bind(var8)(var4, var2);
        var2 = 14;
        var2 = var6[var2];
        var3 = var5.bind(var3)(var2);
        var2 = var3.isPremiumExactly;
        var1 = _closure1_slot38;
        var1 = var1.TIER_2;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var3['useHasTier2Premium'] = var14;
    var14 = function getOfferNoticeThreshold(arg1) {
        _fun0092: for(var _fun0092_ip = 0; ; ) switch(_fun0092_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot45;
            var4 = _closure1_slot97;
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            if(var4) { _fun0092_ip = 487; continue _fun0092 }
case 38:
            var4 = _closure1_slot98;
            var4 = var4.bind(var5)(var3);
            if(var4) { _fun0092_ip = 40; continue _fun0092 }
case 41:
            return var2;
case 40:
            return var2;
case 487:
            var4 = var3.trial_id;
            var3 = _closure1_slot34;
            if(!(var3 !== var4)) { _fun0092_ip = 35; continue _fun0092 }
case 190:
            var3 = _closure1_slot35;
            if(!(var3 !== var4)) { _fun0092_ip = 457; continue _fun0092 }
case 43:
            return var2;
case 457:
            var2 = _closure1_slot43;
            return var2;
case 35:
            var1 = _closure1_slot44;
            return var1;
        }
    };
    var3['getOfferNoticeThreshold'] = var14;
    var3['isTrialOffer'] = var13;
    var3['isDiscountOffer'] = var12;
    var3['formatInterval'] = var11;
    var3['isPremiumEligible'] = var10;
    var3['getFractionalPremiumUnitsHours'] = var9;
    var3['getFractionalPremiumUnitsHoursFromSkuIds'] = var8;
    var3['getMonthlyPrice'] = var7;
    var7 = function(arg1) {
        _fun0093: for(var _fun0093_ip = 0; ; ) switch(_fun0093_ip) {
case 0:
            var1 = arg1;
            var8 = var1.planId;
            var6 = var1.isGift;
            var5 = var1.priceOptions;
            var4 = var1.subscriptionPlan;
            var7 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 31;
            var1 = var3[var1];
            var3 = undefined;
            var9 = var7.bind(var3)(var1);
            var7 = var9.getConfig;
            var1 = {};
            var10 = 'getSavingsPercent';
            var1['location'] = var10;
            var1 = var7.bind(var9)(var1);
            var7 = var1.enabled;
            var1 = _closure1_slot14;
            var1 = var1[var8];
            if(!var7) { _fun0093_ip = 77; continue _fun0093 }
case 475:
            var8 = null;
            var7 = var8 != var4;
case 77:
            if(!var7) { _fun0093_ip = 192; continue _fun0093 }
case 536:
            var2 = _closure1_slot101;
            var1 = var2.bind(var3)(var4, var6, var5);
case 192:
            return var1;
        }
    };
    var3['getSavingsPercent'] = var7;
    var6 = function calculateMonthlyPriceEquivalentTotal(arg1) {
        _fun0094: for(var _fun0094_ip = 0; ; ) switch(_fun0094_ip) {
case 0:
            var1 = arg1;
            var4 = var1.subscriptionPlan;
            var7 = var1.isGift;
            var5 = undefined;
            if(!(var7 === var5)) { _fun0094_ip = 31; continue _fun0094 }
case 46:
            var7 = false;
case 31:
            var6 = var1.priceOptions;
            if(!(var6 === var5)) { _fun0094_ip = 49; continue _fun0094 }
case 33:
            var6 = {};
case 49:
            var2 = var4.interval;
            var1 = _closure1_slot40;
            var1 = var1.DAY;
            if(!(var2 !== var1)) { _fun0094_ip = 59; continue _fun0094 }
case 7:
            var2 = var4.interval;
            var1 = _closure1_slot40;
            var1 = var1.MONTH;
            if(!(var2 === var1)) { _fun0094_ip = 458; continue _fun0094 }
case 535:
            var2 = var4.intervalCount;
            var1 = 1;
            if(!(var1 !== var2)) { _fun0094_ip = 639; continue _fun0094 }
case 458:
            var2 = _closure1_slot56;
            var1 = {};
            var1['subscriptionPlan'] = var4;
            var1['isGift'] = var7;
            var1['priceOptions'] = var6;
            var2 = var2.bind(var5)(var1);
            var1 = null;
            if(!(var1 != var2)) { _fun0094_ip = 16; continue _fun0094 }
case 478:
            var5 = var4.interval;
            var3 = _closure1_slot40;
            var3 = var3.MONTH;
            if(!(var5 !== var3)) { _fun0094_ip = 390; continue _fun0094 }
case 485:
            var5 = var4.intervalCount;
            var3 = 12;
            var3 = var3 * var5;
            _fun0094_ip = 640; continue _fun0094;
case 390:
            var3 = var4.intervalCount;
case 640:
            var2 = var2.amount;
            var2 = var2 * var3;
            return var2;
case 16:
            return var1;
case 639:
            var1 = null;
            return var1;
case 59:
            var1 = null;
            return var1;
        }
    };
    var3['calculateMonthlyPriceEquivalentTotal'] = var6;
    var3['calculateDiscountPercentageForYearlyPlan'] = var5;
    var3['getDaysSincePremium'] = var4;
    var3['getDaysRemainingUntilSubscriptionCurrentPeriodEnds'] = var2;
    return var1;
})();
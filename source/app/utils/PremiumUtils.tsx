// app/utils/PremiumUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var19 = require;
    var74 = metroImportDefault;
    var3 = exports;
    var20 = dependencyMap;
    var _closure1_slot0 = var19;
    var _closure1_slot1 = var74;
    var _closure1_slot2 = var20;
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
    var72 = function getPremiumPlanItem(arg1) {
        var1 = arg1;
        var3 = var1.items;
        var2 = var3.find;
        var1 = function(arg1) {
            var3 = _closure1_slot32;
            var2 = var3.has;
            var1 = arg1;
            var1 = var1.planId;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot59 = var72;
    var71 = function getDefaultPrice(arg1) {
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
            var3 = _closure1_slot8;
            var3 = var3.defaultPaymentSourceId;
            var11 = null;
            var9 = var11 != var3;
            var8 = undefined;
            if(!var9) { _fun0004_ip = 42; continue _fun0004 }
case 43:
            var8 = var3;
case 42:
            var9 = _closure1_slot10;
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
            var3 = _closure1_slot62;
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
    var _closure1_slot60 = var71;
    var70 = function withContextPlanPrices(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var3 = arg1;
            var7 = arg2;
            var2 = null;
            var1 = var3;
            if(!(var2 != var7)) { _fun0005_ip = 46; continue _fun0005 }
case 47:
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
case 46:
            return var1;
        }
    };
    var _closure1_slot61 = var70;
    var69 = function getPrice(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var8 = arg1;
            var1 = arguments[1];
            var5 = arguments[2];
            var15 = arguments[3];
            var3 = arguments[4];
            var4 = undefined;
            if(!(var1 === var4)) { _fun0006_ip = 31; continue _fun0006 }
case 48:
            var1 = false;
case 31:
            if(!(var5 === var4)) { _fun0006_ip = 49; continue _fun0006 }
case 50:
            var5 = false;
case 49:
            if(!(var15 === var4)) { _fun0006_ip = 51; continue _fun0006 }
case 33:
            var15 = {};
case 51:
            if(!(var3 === var4)) { _fun0006_ip = 52; continue _fun0006 }
case 53:
            var3 = true;
case 52:
            var9 = var15.paymentSourceId;
            var7 = var15.currency;
            var2 = var15.contextPlanPrices;
            var6 = null;
            if(!(var6 != var2)) { _fun0006_ip = 54; continue _fun0006 }
case 30:
            var10 = var2[var8];
            var2 = var6 != var7;
            if(!var2) { _fun0006_ip = 55; continue _fun0006 }
case 56:
            var2 = var6 != var10;
case 55:
            if(!var2) { _fun0006_ip = 57; continue _fun0006 }
case 58:
            var11 = var10.currency;
            var2 = var11 !== var7;
case 57:
            if(!(var6 != var10)) { _fun0006_ip = 54; continue _fun0006 }
case 45:
            if(var2) { _fun0006_ip = 54; continue _fun0006 }
case 59:
            var2 = {};
            var11 = var10.amount;
            var2['amount'] = var11;
            var11 = var10.currency;
            var2['currency'] = var11;
            var10 = var10.exponent;
            var2['exponent'] = var10;
            var10 = 0;
            var2['tax'] = var10;
            var10 = false;
            var2['taxInclusive'] = var10;
            return var2;
case 54:
            var11 = _closure1_slot9;
            var10 = var11.get;
            var10 = var10.bind(var11)(var8);
            if(!(var6 == var10)) { _fun0006_ip = 60; continue _fun0006 }
case 61:
            var10 = global;
            var12 = var10.Error;
            var10 = var12.prototype;
            var11 = Object.create(var10, {constructor: {value: var12}});
            var19 = 'Plan not found';
            var20 = var11;
            var10 = new var20[var12](var19, var18);
            var10 = var10 instanceof Object ? var10 : var11;
            if(!var3) { _fun0006_ip = 62; continue _fun0006 }
case 63:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 13;
            var11 = var13[var11];
            var13 = var12.bind(var4)(var11);
            var12 = var13.captureBillingException;
            var11 = {};
            var14 = {};
            var14['planId'] = var8;
            var17 = var6 != var7;
            var16 = 'unknown';
            if(!var17) { _fun0006_ip = 64; continue _fun0006 }
case 65:
            var16 = var7;
case 64:
            var14['currency'] = var16;
            var11['tags'] = var14;
            var14 = {};
            var19 = var14;
            var18 = var15;
            var15 = copyDataProperties(var19, var18);
            var15 = 'isGift';
            var14[14] = var5;
            var11['extra'] = var14;
            var11 = var12.bind(var13)(var10, var11);
case 62:
            throw var10;
case 60:
            var10 = _closure1_slot13;
            var10 = var10.DEFAULT;
            if(var5) { _fun0006_ip = 66; continue _fun0006 }
case 67:
            if(!var1) { _fun0006_ip = 68; continue _fun0006 }
case 8:
            var1 = _closure1_slot13;
            var10 = var1.PREMIUM_TIER_1;
            _fun0006_ip = 68; continue _fun0006;
case 66:
            var1 = _closure1_slot13;
            var10 = var1.GIFT;
case 68:
            var5 = _closure1_slot65;
            var1 = {};
            var1['paymentSourceId'] = var9;
            var1['purchaseType'] = var10;
            var1['currency'] = var7;
            var1 = var5.bind(var4)(var8, var1);
            if(!(var6 != var1)) { _fun0006_ip = 69; continue _fun0006 }
case 70:
            return var1;
case 69:
            var1 = global;
            var11 = var1.Error;
            var1 = var11.prototype;
            var5 = Object.create(var1, {constructor: {value: var11}});
            var19 = "Couldn't find price";
            var20 = var5;
            var1 = new var20[var11](var19, var18);
            var1 = var1 instanceof Object ? var1 : var5;
            if(!var3) { _fun0006_ip = 71; continue _fun0006 }
case 72:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 13;
            var2 = var5[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.captureBillingException;
            var2 = {};
            var5 = {};
            var5['paymentSourceId'] = var9;
            var2['extra'] = var5;
            var5 = {};
            var9 = var10.toString;
            var9 = var9.bind(var10)();
            var5['purchaseType'] = var9;
            var5['planId'] = var8;
            var8 = var6 != var7;
            var6 = 'unknown';
            if(!var8) { _fun0006_ip = 73; continue _fun0006 }
case 74:
            var6 = var7;
case 73:
            var5['currency'] = var6;
            var2['tags'] = var5;
            var2 = var3.bind(var4)(var1, var2);
case 71:
            throw var1;
        }
    };
    var _closure1_slot62 = var69;
    var1 = function getPurchaseTypePrices(arg1, arg2) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var6 = arg1;
            var7 = arg2;
            var3 = _closure1_slot9;
            var1 = var3.get;
            var3 = var1.bind(var3)(var6);
            var4 = null;
            if(!(var4 != var3)) { _fun0007_ip = 75; continue _fun0007 }
case 39:
            var1 = var3.prices;
            if(!(var4 != var1)) { _fun0007_ip = 76; continue _fun0007 }
case 77:
            var1 = var3.prices;
            var1 = var1[var7];
            if(!(var4 != var1)) { _fun0007_ip = 7; continue _fun0007 }
case 78:
            return var1;
case 7:
            var5 = _closure1_slot53;
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
case 76:
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
case 75:
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
            var2 = 13;
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
    var _closure1_slot63 = var1;
    var68 = function experimentalGetPrices(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var6 = arg1;
            var1 = arguments[1];
            var4 = undefined;
            if(!(var1 === var4)) { _fun0008_ip = 51; continue _fun0008 }
case 79:
            var2 = {};
            var3 = _closure1_slot13;
            var3 = var3.DEFAULT;
            var2['purchaseType'] = var3;
            var1 = var2;
case 51:
            var11 = var1.paymentSourceId;
            var12 = var1.purchaseType;
            var1 = _closure1_slot63;
            var7 = var1.bind(var4)(var6, var12);
            var3 = null;
            if(!(var3 != var11)) { _fun0008_ip = 80; continue _fun0008 }
case 81:
            var1 = var7.paymentSourcePrices;
            var13 = var1[var11];
            if(!(var3 != var13)) { _fun0008_ip = 45; continue _fun0008 }
case 82:
            var5 = var13.length;
            var1 = 0;
            if(!(var1 !== var5)) { _fun0008_ip = 80; continue _fun0008 }
case 83:
            return var13;
case 45:
            var9 = _closure1_slot53;
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
            var9 = _closure1_slot53;
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
            var1 = 13;
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
case 80:
            var1 = var7.countryPrices;
            var1 = var1.prices;
            if(!(var3 != var1)) { _fun0008_ip = 84; continue _fun0008 }
case 85:
            var1 = var7.countryPrices;
            var1 = var1.prices;
            return var1;
case 84:
            var8 = _closure1_slot53;
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
            var2 = 13;
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
    var _closure1_slot64 = var68;
    var67 = function experimentalGetPrice(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var7 = arg1;
            var1 = arguments[1];
            var6 = undefined;
            if(!(var1 === var6)) { _fun0009_ip = 86; continue _fun0009 }
case 32:
            var2 = {};
            var4 = _closure1_slot13;
            var4 = var4.DEFAULT;
            var2['purchaseType'] = var4;
            var1 = var2;
case 86:
            var5 = var1.paymentSourceId;
            var8 = var1.purchaseType;
            var9 = var1.currency;
            var _closure2_slot0 = var9;
            var2 = _closure1_slot64;
            var1 = {};
            var1['paymentSourceId'] = var5;
            var1['purchaseType'] = var8;
            var10 = var2.bind(var6)(var7, var1);
            var2 = var10.length;
            var1 = 0;
            if(!(var1 === var2)) { _fun0009_ip = 54; continue _fun0009 }
case 57:
            var12 = _closure1_slot53;
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
case 54:
            var2 = null;
            if(!(var2 == var9)) { _fun0009_ip = 87; continue _fun0009 }
case 88:
            var1 = var10[var1];
            return var1;
case 87:
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
            if(!(var2 == var1)) { _fun0009_ip = 89; continue _fun0009 }
case 90:
            var5 = var2 != var5;
            var2 = undefined;
            if(!var5) { _fun0009_ip = 91; continue _fun0009 }
case 92:
            var5 = _closure1_slot64;
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
case 91:
            var1 = var2;
case 89:
            return var1;
        }
    };
    var _closure1_slot65 = var67;
    var66 = function getServerPriceFromClientPrice(arg1) {
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
    var _closure1_slot66 = var66;
    var65 = function getItemPlansTotalServerPrice(arg1, arg2, arg3) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var5 = arg1;
            var11 = arg2;
            var10 = arg3;
            var3 = {'currency': null, 'amount': 0, 'tax': 0, 'taxInclusive': false};
            var3['currency'] = var11;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 14;
            var4 = var4[var2];
            var2 = undefined;
            var6 = var6.bind(var2)(var4);
            var4 = var6.getBaseSubscriptionItemForSubscriptionItems;
            var4 = var4.bind(var6)(var5);
            var6 = null;
            var6 = var6 != var4;
            var12 = undefined;
            if(!var6) { _fun0010_ip = 11; continue _fun0010 }
case 93:
            var6 = _closure1_slot42;
            var4 = var4.planId;
            var4 = var6[var4];
            var12 = var4.premiumType;
case 11:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 15;
            var8 = var7[var4];
            var14 = var6.bind(var2)(var8);
            var13 = var14.isPremiumAtLeast;
            var8 = _closure1_slot39;
            var8 = var8.TIER_0;
            var8 = var13.bind(var14)(var12, var8);
            var4 = var7[var4];
            var7 = var6.bind(var2)(var4);
            var6 = var7.isPremiumAtLeast;
            var4 = _closure1_slot39;
            var4 = var4.TIER_2;
            var7 = var6.bind(var7)(var12, var4);
            var4 = _closure1_slot57;
            var6 = var4.bind(var2)(var5);
            var5 = var6.bind(var2)();
            var4 = var5.done;
            if(var4) { _fun0010_ip = 94; continue _fun0010 }
case 95:
            var4 = var5.value;
            var14 = _closure1_slot31;
            var13 = var14.has;
            var12 = var4.planId;
            var12 = var13.bind(var14)(var12);
            var15 = var7;
            if(var12) { _fun0010_ip = 75; continue _fun0010 }
case 96:
            var14 = _closure1_slot32;
            var13 = var14.has;
            var12 = var4.planId;
            var12 = var13.bind(var14)(var12);
            var12 = !var12;
            if(!var12) { _fun0010_ip = 97; continue _fun0010 }
case 98:
            var12 = var8;
case 97:
            var15 = var12;
case 75:
            if(!(var2 !== var10)) { _fun0010_ip = 99; continue _fun0010 }
case 65:
            var14 = _closure1_slot62;
            var20 = var4.planId;
            var12 = {};
            var12['paymentSourceId'] = var10;
            var12['currency'] = var11;
            var21 = undefined;
            var19 = var15;
            var18 = false;
            var17 = var12;
            var13 = var21[var14](var20, var19, var18, var17, var16);
            _fun0010_ip = 100; continue _fun0010;
case 99:
            var14 = _closure1_slot60;
            var20 = var4.planId;
            var21 = undefined;
            var19 = var15;
            var18 = false;
            var17 = var11;
            var13 = var21[var14](var20, var19, var18, var17, var16);
case 100:
            var12 = var3.amount;
            var13 = var13.amount;
            var4 = var4.quantity;
            var4 = var13 * var4;
            var4 = var12 + var4;
            var3['amount'] = var4;
            var12 = var6.bind(var2)();
            var4 = var12.done;
            var5 = var12;
            if(!var4) { _fun0010_ip = 95; continue _fun0010 }
case 94:
            var1 = _closure1_slot66;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot67 = var65;
    var64 = function getInterval(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var7 = arg1;
            var1 = _closure1_slot42;
            var2 = var1[var7];
            var1 = null;
            if(!(var1 == var2)) { _fun0011_ip = 101; continue _fun0011 }
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
            var3 = 13;
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
case 101:
            var1 = {};
            var3 = var2.interval;
            var1['intervalType'] = var3;
            var2 = var2.intervalCount;
            var1['intervalCount'] = var2;
            return var1;
        }
    };
    var63 = function getIntervalString(arg1, arg2, arg3) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var5 = arg1;
            var10 = arguments[3];
            var3 = arguments[4];
            var4 = arguments[5];
            var6 = undefined;
            if(!(var10 === var6)) { _fun0012_ip = 48; continue _fun0012 }
case 36:
            var10 = 1;
case 48:
            if(!(var3 === var6)) { _fun0012_ip = 50; continue _fun0012 }
case 102:
            var3 = false;
case 50:
            if(!(var4 === var6)) { _fun0012_ip = 103; continue _fun0012 }
case 104:
            var1 = _closure1_slot39;
            var4 = var1.TIER_2;
case 103:
            var1 = arg2;
            if(var1) { _fun0012_ip = 105; continue _fun0012 }
case 106:
            var1 = arg3;
            if(var1) { _fun0012_ip = 105; continue _fun0012 }
case 43:
            var1 = _closure1_slot41;
            var1 = var1.MONTH;
            if(!(var1 !== var5)) { _fun0012_ip = 107; continue _fun0012 }
case 108:
            var1 = _closure1_slot41;
            var1 = var1.YEAR;
            if(!(var1 !== var5)) { _fun0012_ip = 109; continue _fun0012 }
case 110:
            var1 = global;
            var8 = var1.Error;
            var1 = var8.prototype;
            var7 = Object.create(var1, {constructor: {value: var8}});
            var15 = 'Unexpected interval';
            var16 = var7;
            var1 = new var16[var8](var15, var14);
            var1 = var1 instanceof Object ? var1 : var7;
            throw var1;
case 109:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 17;
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
case 107:
            var1 = 1;
            if(!(var1 === var10)) { _fun0012_ip = 111; continue _fun0012 }
case 20:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 17;
            var7 = var11[var1];
            var7 = var9.bind(var6)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var1 = var11[var1];
            var1 = var9.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.DKzs96;
            var1 = var7.bind(var8)(var1);
            _fun0012_ip = 112; continue _fun0012;
case 111:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 17;
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
case 112:
            return var1;
case 105:
            var1 = _closure1_slot41;
            var1 = var1.MONTH;
            if(!(var1 !== var5)) { _fun0012_ip = 113; continue _fun0012 }
case 114:
            var1 = _closure1_slot41;
            var1 = var1.YEAR;
            if(!(var1 !== var5)) { _fun0012_ip = 115; continue _fun0012 }
case 116:
            var1 = global;
            var7 = var1.Error;
            var1 = var7.prototype;
            var5 = Object.create(var1, {constructor: {value: var7}});
            var15 = 'Unexpected interval';
            var16 = var5;
            var1 = new var16[var7](var15, var14);
            var1 = var1 instanceof Object ? var1 : var5;
            throw var1;
case 115:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var10 = 17;
            var1 = var1[var10];
            var1 = var5.bind(var6)(var1);
            var8 = var1.intl;
            var7 = var8.formatToPlainString;
            var1 = _closure1_slot39;
            var1 = var1.TIER_0;
            if(!(var4 !== var1)) { _fun0012_ip = 117; continue _fun0012 }
case 118:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var10];
            var1 = var5.bind(var6)(var1);
            var1 = var1.t;
            var5 = var1.poEovT;
            _fun0012_ip = 119; continue _fun0012;
case 117:
            var9 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var10];
            var1 = var9.bind(var6)(var1);
            var1 = var1.t;
            var5 = var1.NPKsLz;
case 119:
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
            if(var3) { _fun0012_ip = 120; continue _fun0012 }
case 121:
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
case 120:
            return var1;
case 113:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 17;
            var1 = var1[var7];
            var1 = var5.bind(var6)(var1);
            var8 = var1.intl;
            var5 = var8.formatToPlainString;
            var1 = _closure1_slot39;
            var1 = var1.TIER_0;
            if(!(var4 !== var1)) { _fun0012_ip = 122; continue _fun0012 }
case 123:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var4.bind(var6)(var1);
            var1 = var1.t;
            var4 = var1.poEovT;
            _fun0012_ip = 124; continue _fun0012;
case 122:
            var9 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var9.bind(var6)(var1);
            var1 = var1.t;
            var4 = var1.NPKsLz;
case 124:
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
            if(var3) { _fun0012_ip = 125; continue _fun0012 }
case 126:
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
case 125:
            return var1;
        }
    };
    var62 = function getIntervalStringAsNoun(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot41;
            var2 = var2.MONTH;
            if(!(var2 !== var3)) { _fun0013_ip = 109; continue _fun0013 }
case 29:
            var2 = _closure1_slot41;
            var2 = var2.YEAR;
            if(!(var2 !== var3)) { _fun0013_ip = 35; continue _fun0013 }
case 127:
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
            var2 = 17;
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
case 109:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 17;
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
    var _closure1_slot68 = var62;
    var61 = function getPremiumType(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var7 = arg1;
            var1 = _closure1_slot42;
            var1 = var1[var7];
            var2 = null;
            if(!(var2 == var1)) { _fun0014_ip = 101; continue _fun0014 }
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
            var3 = 13;
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
case 101:
            var1 = var1.premiumType;
            return var1;
        }
    };
    var _closure1_slot69 = var61;
    var60 = function getDisplayName(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var11 = arg1;
            var4 = arguments[1];
            var1 = arguments[2];
            var6 = arguments[3];
            var7 = undefined;
            if(!(var4 === var7)) { _fun0015_ip = 29; continue _fun0015 }
case 36:
            var4 = false;
case 29:
            if(!(var1 === var7)) { _fun0015_ip = 37; continue _fun0015 }
case 38:
            var1 = false;
case 37:
            var3 = _closure1_slot43;
            var3 = var3.PREMIUM_MONTH_TIER_0;
            if(!(var3 !== var11)) { _fun0015_ip = 128; continue _fun0015 }
case 2:
            var3 = _closure1_slot43;
            var3 = var3.PREMIUM_YEAR_TIER_0;
            if(!(var3 !== var11)) { _fun0015_ip = 129; continue _fun0015 }
case 130:
            var3 = _closure1_slot43;
            var3 = var3.PREMIUM_MONTH_TIER_1;
            if(!(var3 !== var11)) { _fun0015_ip = 131; continue _fun0015 }
case 132:
            var3 = _closure1_slot43;
            var3 = var3.PREMIUM_YEAR_TIER_1;
            if(!(var3 !== var11)) { _fun0015_ip = 133; continue _fun0015 }
case 83:
            var3 = _closure1_slot43;
            var3 = var3.PREMIUM_MONTH_TIER_2;
            if(!(var3 !== var11)) { _fun0015_ip = 134; continue _fun0015 }
case 135:
            var3 = _closure1_slot43;
            var3 = var3.PREMIUM_GROUP_MONTH;
            if(!(var3 !== var11)) { _fun0015_ip = 136; continue _fun0015 }
case 137:
            var3 = _closure1_slot43;
            var3 = var3.PREMIUM_YEAR_TIER_2;
            if(!(var3 !== var11)) { _fun0015_ip = 138; continue _fun0015 }
case 139:
            var3 = _closure1_slot43;
            var3 = var3.PREMIUM_3_MONTH_TIER_2;
            if(!(var3 !== var11)) { _fun0015_ip = 140; continue _fun0015 }
case 87:
            var3 = _closure1_slot43;
            var3 = var3.PREMIUM_6_MONTH_TIER_2;
            if(!(var3 !== var11)) { _fun0015_ip = 141; continue _fun0015 }
case 142:
            var3 = _closure1_slot43;
            var3 = var3.PREMIUM_MONTH_GUILD;
            if(!(var3 !== var11)) { _fun0015_ip = 143; continue _fun0015 }
case 144:
            var3 = _closure1_slot43;
            var3 = var3.PREMIUM_YEAR_GUILD;
            if(!(var3 !== var11)) { _fun0015_ip = 145; continue _fun0015 }
case 146:
            var3 = _closure1_slot43;
            var3 = var3.PREMIUM_3_MONTH_GUILD;
            if(!(var3 !== var11)) { _fun0015_ip = 147; continue _fun0015 }
case 148:
            var3 = _closure1_slot43;
            var3 = var3.PREMIUM_6_MONTH_GUILD;
            if(!(var3 !== var11)) { _fun0015_ip = 149; continue _fun0015 }
case 98:
            var3 = _closure1_slot43;
            var3 = var3.PREMIUM_MONTH_LEGACY;
            if(!(var3 !== var11)) { _fun0015_ip = 150; continue _fun0015 }
case 151:
            var3 = _closure1_slot43;
            var3 = var3.PREMIUM_YEAR_LEGACY;
            if(!(var3 !== var11)) { _fun0015_ip = 152; continue _fun0015 }
case 153:
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
            var5 = 13;
            var5 = var9[var5];
            var9 = var8.bind(var7)(var5);
            var8 = var9.captureBillingException;
            var5 = {};
            var10 = {};
            var10['planId'] = var11;
            var5['tags'] = var10;
            var5 = var8.bind(var9)(var3, var5);
            throw var3;
case 152:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 17;
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
case 150:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 17;
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
case 149:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 17;
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
case 147:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 17;
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
case 145:
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 17;
            var8 = var10[var3];
            var8 = var5.bind(var7)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var3 = var10[var3];
            var3 = var5.bind(var7)(var3);
            var5 = var3.t;
            if(var1) { _fun0015_ip = 154; continue _fun0015 }
case 155:
            var3 = var5.ZHkls0;
            var3 = var8.bind(var9)(var3);
            _fun0015_ip = 156; continue _fun0015;
case 154:
            var5 = var5.YDpAzZ;
            var3 = var8.bind(var9)(var5);
case 156:
            return var3;
case 143:
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 17;
            var8 = var10[var3];
            var8 = var5.bind(var7)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var3 = var10[var3];
            var3 = var5.bind(var7)(var3);
            var5 = var3.t;
            if(var1) { _fun0015_ip = 157; continue _fun0015 }
case 158:
            var3 = var5.h80cx/;
            var3 = var8.bind(var9)(var3);
            _fun0015_ip = 159; continue _fun0015;
case 157:
            var5 = var5["6ZR3By"];
            var3 = var8.bind(var9)(var5);
case 159:
            return var3;
case 141:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 17;
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
case 140:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 17;
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
case 138:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 17;
            var3 = var11[var5];
            var3 = var8.bind(var7)(var3);
            var10 = var3.intl;
            if(var4) { _fun0015_ip = 160; continue _fun0015 }
case 161:
            var12 = var10.string;
            var3 = var11[var5];
            var3 = var8.bind(var7)(var3);
            var9 = var3.t;
            if(var1) { _fun0015_ip = 162; continue _fun0015 }
case 163:
            var3 = var9.cfu/5d;
            var3 = var12.bind(var10)(var3);
            _fun0015_ip = 164; continue _fun0015;
case 162:
            var9 = var9.JIq4O1;
            var3 = var12.bind(var10)(var9);
case 164:
            _fun0015_ip = 165; continue _fun0015;
case 160:
            var9 = var10.format;
            var5 = var11[var5];
            var5 = var8.bind(var7)(var5);
            var5 = var5.t;
            var8 = var5["1wBcPi"];
            var5 = {};
            var5['duration'] = var6;
            var3 = var9.bind(var10)(var8, var5);
case 165:
            return var3;
case 136:
            var10 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 17;
            var3 = var11[var5];
            var3 = var10.bind(var7)(var3);
            var9 = var3.intl;
            if(var1) { _fun0015_ip = 166; continue _fun0015 }
case 167:
            var12 = var9.formatToPlainString;
            var8 = _closure1_slot1;
            var3 = 18;
            var3 = var11[var3];
            var3 = var8.bind(var7)(var3);
            var8 = var3["8bPDtb"];
            var3 = {};
            var13 = _closure1_slot47;
            var13 = var13.bind(var7)();
            var3['premiumGroupProductName'] = var13;
            var3 = var12.bind(var9)(var8, var3);
            _fun0015_ip = 168; continue _fun0015;
case 166:
            var8 = var9.string;
            var5 = var11[var5];
            var5 = var10.bind(var7)(var5);
            var5 = var5.t;
            var5 = var5.SmVbHc;
            var3 = var8.bind(var9)(var5);
case 168:
            return var3;
case 134:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 17;
            var3 = var11[var5];
            var3 = var8.bind(var7)(var3);
            var10 = var3.intl;
            if(var4) { _fun0015_ip = 169; continue _fun0015 }
case 170:
            var12 = var10.string;
            var3 = var11[var5];
            var3 = var8.bind(var7)(var3);
            var9 = var3.t;
            if(var1) { _fun0015_ip = 171; continue _fun0015 }
case 172:
            var3 = var9.FKYNC6;
            var3 = var12.bind(var10)(var3);
            _fun0015_ip = 173; continue _fun0015;
case 171:
            var9 = var9.SmVbHc;
            var3 = var12.bind(var10)(var9);
case 173:
            _fun0015_ip = 174; continue _fun0015;
case 169:
            var9 = var10.format;
            var5 = var11[var5];
            var5 = var8.bind(var7)(var5);
            var5 = var5.t;
            var8 = var5.aI6QXz;
            var5 = {};
            var5['duration'] = var6;
            var3 = var9.bind(var10)(var8, var5);
case 174:
            return var3;
case 133:
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 17;
            var8 = var10[var3];
            var8 = var5.bind(var7)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var3 = var10[var3];
            var3 = var5.bind(var7)(var3);
            var5 = var3.t;
            if(var1) { _fun0015_ip = 175; continue _fun0015 }
case 176:
            var3 = var5.Md5xbi;
            var3 = var8.bind(var9)(var3);
            _fun0015_ip = 177; continue _fun0015;
case 175:
            var5 = var5.pdZJaq;
            var3 = var8.bind(var9)(var5);
case 177:
            return var3;
case 131:
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 17;
            var8 = var10[var3];
            var8 = var5.bind(var7)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var3 = var10[var3];
            var3 = var5.bind(var7)(var3);
            var5 = var3.t;
            if(var1) { _fun0015_ip = 178; continue _fun0015 }
case 179:
            var3 = var5["7O6qSq"];
            var3 = var8.bind(var9)(var3);
            _fun0015_ip = 180; continue _fun0015;
case 178:
            var5 = var5.g/dH5g;
            var3 = var8.bind(var9)(var5);
case 180:
            return var3;
case 129:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 17;
            var3 = var11[var5];
            var3 = var8.bind(var7)(var3);
            var10 = var3.intl;
            if(var4) { _fun0015_ip = 181; continue _fun0015 }
case 182:
            var12 = var10.string;
            var3 = var11[var5];
            var3 = var8.bind(var7)(var3);
            var9 = var3.t;
            if(var1) { _fun0015_ip = 183; continue _fun0015 }
case 184:
            var3 = var9.eoVuBn;
            var3 = var12.bind(var10)(var3);
            _fun0015_ip = 185; continue _fun0015;
case 183:
            var9 = var9.UvzqY1;
            var3 = var12.bind(var10)(var9);
case 185:
            _fun0015_ip = 186; continue _fun0015;
case 181:
            var9 = var10.format;
            var5 = var11[var5];
            var5 = var8.bind(var7)(var5);
            var5 = var5.t;
            var8 = var5.eqRhC7;
            var5 = {};
            var5['duration'] = var6;
            var3 = var9.bind(var10)(var8, var5);
case 186:
            return var3;
case 128:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 17;
            var5 = var8[var2];
            var5 = var3.bind(var7)(var5);
            var5 = var5.intl;
            if(var4) { _fun0015_ip = 187; continue _fun0015 }
case 188:
            var9 = var5.string;
            var4 = var8[var2];
            var4 = var3.bind(var7)(var4);
            var4 = var4.t;
            if(var1) { _fun0015_ip = 189; continue _fun0015 }
case 190:
            var1 = var4["0efVPy"];
            var1 = var9.bind(var5)(var1);
            _fun0015_ip = 191; continue _fun0015;
case 189:
            var4 = var4["81iAgs"];
            var1 = var9.bind(var5)(var4);
case 191:
            _fun0015_ip = 192; continue _fun0015;
case 187:
            var4 = var5.format;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            var3 = var2.TZXHNj;
            var2 = {};
            var2['duration'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 192:
            return var1;
        }
    };
    var _closure1_slot70 = var60;
    var59 = function getTierDisplayNameByPlanId(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var9 = arg1;
            var2 = _closure1_slot42;
            var3 = var2[var9];
            var2 = null;
            var5 = var2 == var3;
            var4 = undefined;
            var6 = undefined;
            if(var5) { _fun0016_ip = 33; continue _fun0016 }
case 50:
            var6 = var3.premiumType;
case 33:
            var5 = var2 != var6;
            var3 = null;
            if(!var5) { _fun0016_ip = 193; continue _fun0016 }
case 194:
            var5 = _closure1_slot37;
            var3 = var5[var6];
case 193:
            if(!(var2 == var3)) { _fun0016_ip = 195; continue _fun0016 }
case 196:
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
            var5 = 13;
            var5 = var7[var5];
            var7 = var6.bind(var4)(var5);
            var6 = var7.captureBillingException;
            var5 = {};
            var8 = {};
            var8['planId'] = var9;
            var5['tags'] = var8;
            var5 = var6.bind(var7)(var2, var5);
            throw var2;
case 195:
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 17;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.intl;
            var1 = var2.string;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var82 = function getPlanDescription(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var3 = arg1;
            var13 = var3.subscription;
            var17 = var3.planId;
            var7 = var3.price;
            var10 = var3.includePremiumGuilds;
            var16 = var3.hasDiscountApplied;
            var25 = var3.activeDiscountInfo;
            var2 = var3.renewalInvoiceWithoutEntitlementsPreview;
            var1 = var3.renewalInvoiceWithEntitlementsPreview;
            var6 = var3.hasFractionalPremiumWithSub;
            var23 = var3.fractionalPremiumInfo;
            var4 = _closure1_slot42;
            var4 = var4[var17];
            var9 = _closure1_slot98;
            var11 = _closure1_slot60;
            var5 = var4.id;
            var8 = undefined;
            var5 = var11.bind(var8)(var5);
            var4 = var4.interval;
            var22 = var9.bind(var8)(var5, var4);
            var4 = null;
            var5 = var4 != var1;
            if(!var5) { _fun0017_ip = 109; continue _fun0017 }
case 197:
            var9 = var1.subtotal;
            var1 = 0;
            var5 = var1 === var9;
case 109:
            var1 = _closure1_slot85;
            var9 = var1.bind(var8)(var13);
            if(var9) { _fun0017_ip = 198; continue _fun0017 }
case 199:
            var1 = var13.paymentSourceId;
            var1 = var4 == var1;
            if(!var1) { _fun0017_ip = 14; continue _fun0017 }
case 200:
            var11 = var13.isPurchasedExternally;
            var1 = !var11;
case 14:
            if(!var1) { _fun0017_ip = 201; continue _fun0017 }
case 202:
            var12 = _closure1_slot6;
            var11 = var12.getCurrentUser;
            var14 = var11.bind(var12)();
            var11 = var4 != var14;
            if(!var11) { _fun0017_ip = 203; continue _fun0017 }
case 204:
            var12 = var14.hasFreePremium;
            var11 = var12.bind(var14)();
case 203:
            var1 = !var11;
case 201:
            if(!var1) { _fun0017_ip = 205; continue _fun0017 }
case 206:
            var1 = !var5;
case 205:
            var9 = var1;
case 198:
            var1 = var4 != var7;
            if(!var1) { _fun0017_ip = 91; continue _fun0017 }
case 207:
            var5 = var13.paymentGateway;
            var1 = var4 == var5;
case 91:
            var11 = var13.status;
            var5 = _closure1_slot14;
            var5 = var5.UNPAID;
            var5 = var11 === var5;
            if(!var5) { _fun0017_ip = 208; continue _fun0017 }
case 18:
            var11 = var13.latestInvoice;
            var5 = var4 !== var11;
case 208:
            if(!var5) { _fun0017_ip = 209; continue _fun0017 }
case 210:
            var11 = var13.latestInvoice;
            var14 = var4 == var11;
            var12 = undefined;
            if(var14) { _fun0017_ip = 211; continue _fun0017 }
case 212:
            var12 = var11.status;
case 211:
            var11 = _closure1_slot11;
            var11 = var11.OPEN;
            var5 = var12 === var11;
case 209:
            if(var9) { _fun0017_ip = 105; continue _fun0017 }
case 213:
            if(var5) { _fun0017_ip = 214; continue _fun0017 }
case 215:
            var11 = var13.status;
            _fun0017_ip = 112; continue _fun0017;
case 214:
            var5 = _closure1_slot14;
            var11 = var5.UNPAID;
case 112:
            _fun0017_ip = 216; continue _fun0017;
case 105:
            var5 = _closure1_slot14;
            var11 = var5.CANCELED;
case 216:
            var9 = var4 == var2;
            var5 = undefined;
            if(var9) { _fun0017_ip = 217; continue _fun0017 }
case 218:
            var5 = var2.taxInclusive;
case 217:
            if(!(var4 == var5)) { _fun0017_ip = 219; continue _fun0017 }
case 220:
            var9 = var13.latestInvoice;
            var12 = var4 == var9;
            var2 = undefined;
            if(var12) { _fun0017_ip = 221; continue _fun0017 }
case 222:
            var2 = var9.taxInclusive;
case 221:
            var5 = var2;
case 219:
            var2 = var4 == var5;
            if(var2) { _fun0017_ip = 223; continue _fun0017 }
case 224:
            var2 = var5;
case 223:
            var9 = _closure1_slot28;
            var5 = 0;
            if(!var10) { _fun0017_ip = 225; continue _fun0017 }
case 226:
            var12 = _closure1_slot73;
            var10 = var13.additionalPlans;
            var5 = var12.bind(var8)(var10);
case 225:
            var20 = var9 + var5;
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var9 = 17;
            var5 = var10[var9];
            var5 = var12.bind(var8)(var5);
            var19 = var5.intl;
            if(var1) { _fun0017_ip = 227; continue _fun0017 }
case 228:
            var14 = var19.string;
            var5 = var10[var9];
            var5 = var12.bind(var8)(var5);
            var5 = var5.t;
            var5 = var5.zYx3Y6;
            var5 = var14.bind(var19)(var5);
            _fun0017_ip = 229; continue _fun0017;
case 227:
            var18 = var19.format;
            var10 = var10[var9];
            var10 = var12.bind(var8)(var10);
            var12 = var10.t;
            if(var2) { _fun0017_ip = 230; continue _fun0017 }
case 231:
            var14 = var12.NUkcpF;
            var10 = {};
            var10['price'] = var7;
            var10 = var18.bind(var19)(var14, var10);
            _fun0017_ip = 147; continue _fun0017;
case 230:
            var14 = var12.cd+hqB;
            var12 = {};
            var12['price'] = var7;
            var10 = var18.bind(var19)(var14, var12);
case 147:
            var5 = var10;
case 229:
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = var12[var9];
            var10 = var14.bind(var8)(var10);
            var21 = var10.intl;
            if(var1) { _fun0017_ip = 232; continue _fun0017 }
case 233:
            var18 = var21.string;
            var10 = var12[var9];
            var10 = var14.bind(var8)(var10);
            var10 = var10.t;
            var10 = var10["8rSipI"];
            var10 = var18.bind(var21)(var10);
            _fun0017_ip = 234; continue _fun0017;
case 232:
            var19 = var21.format;
            var12 = var12[var9];
            var12 = var14.bind(var8)(var12);
            var14 = var12.t;
            if(var2) { _fun0017_ip = 235; continue _fun0017 }
case 236:
            var18 = var14.hJ5xEX;
            var12 = {};
            var12['price'] = var7;
            var12 = var19.bind(var21)(var18, var12);
            _fun0017_ip = 237; continue _fun0017;
case 235:
            var18 = var14.VsKcFB;
            var14 = {};
            var14['price'] = var7;
            var12 = var19.bind(var21)(var18, var14);
case 237:
            var10 = var12;
case 234:
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var18 = var12[var9];
            var18 = var14.bind(var8)(var18);
            var24 = var18.intl;
            var21 = var24.format;
            var12 = var12[var9];
            var12 = var14.bind(var8)(var12);
            var18 = var12.t;
            if(var1) { _fun0017_ip = 157; continue _fun0017 }
case 238:
            var14 = var18.U+z/HJ;
            var12 = {};
            var12['num'] = var20;
            var12 = var21.bind(var24)(var14, var12);
            _fun0017_ip = 239; continue _fun0017;
case 157:
            if(var2) { _fun0017_ip = 240; continue _fun0017 }
case 241:
            var19 = var18.tTNE8M;
            var14 = {};
            var14['price'] = var7;
            var14['num'] = var20;
            var14 = var21.bind(var24)(var19, var14);
            _fun0017_ip = 242; continue _fun0017;
case 240:
            var19 = var18.jRy6/J;
            var18 = {};
            var18['price'] = var7;
            var18['num'] = var20;
            var14 = var21.bind(var24)(var19, var18);
case 242:
            var12 = var14;
case 239:
            var14 = _closure1_slot43;
            var14 = var14.PREMIUM_MONTH_TIER_0;
            if(!(var14 !== var17)) { _fun0017_ip = 243; continue _fun0017 }
case 244:
            var14 = _closure1_slot43;
            var14 = var14.PREMIUM_YEAR_TIER_0;
            if(!(var14 !== var17)) { _fun0017_ip = 243; continue _fun0017 }
case 245:
            var14 = _closure1_slot43;
            var14 = var14.PREMIUM_MONTH_TIER_1;
            if(!(var14 !== var17)) { _fun0017_ip = 246; continue _fun0017 }
case 247:
            var14 = _closure1_slot43;
            var14 = var14.PREMIUM_YEAR_TIER_1;
            if(!(var14 !== var17)) { _fun0017_ip = 246; continue _fun0017 }
case 248:
            var14 = _closure1_slot43;
            var14 = var14.PREMIUM_MONTH_TIER_2;
            if(!(var14 !== var17)) { _fun0017_ip = 249; continue _fun0017 }
case 250:
            var14 = _closure1_slot43;
            var14 = var14.PREMIUM_YEAR_TIER_2;
            if(!(var14 !== var17)) { _fun0017_ip = 249; continue _fun0017 }
case 251:
            var14 = _closure1_slot43;
            var14 = var14.PREMIUM_3_MONTH_TIER_2;
            if(!(var14 !== var17)) { _fun0017_ip = 249; continue _fun0017 }
case 252:
            var14 = _closure1_slot43;
            var14 = var14.PREMIUM_6_MONTH_TIER_2;
            if(!(var14 !== var17)) { _fun0017_ip = 249; continue _fun0017 }
case 253:
            var14 = _closure1_slot43;
            var14 = var14.PREMIUM_GROUP_MONTH;
            if(!(var14 !== var17)) { _fun0017_ip = 249; continue _fun0017 }
case 162:
            var14 = global;
            var19 = var14.Error;
            var14 = var14.HermesInternal;
            var18 = var14.concat;
            var14 = 'Invalid planId ';
            var28 = var18.bind(var14)(var17);
            var18 = var19.prototype;
            var18 = Object.create(var18, {constructor: {value: var19}});
            var29 = var18;
            var14 = new var29[var19](var28, var27);
            var14 = var14 instanceof Object ? var14 : var18;
            throw var14;
case 249:
            var14 = _closure1_slot14;
            var14 = var14.CANCELED;
            if(!(var14 !== var11)) { _fun0017_ip = 254; continue _fun0017 }
case 255:
            var14 = _closure1_slot14;
            var14 = var14.ACCOUNT_HOLD;
            if(!(var14 !== var11)) { _fun0017_ip = 256; continue _fun0017 }
case 257:
            var14 = _closure1_slot14;
            var14 = var14.UNPAID;
            if(!(var14 !== var11)) { _fun0017_ip = 258; continue _fun0017 }
case 259:
            var14 = _closure1_slot14;
            var14 = var14.PAUSE_PENDING;
            if(!(var14 !== var11)) { _fun0017_ip = 260; continue _fun0017 }
case 261:
            var14 = _closure1_slot14;
            var14 = var14.PAUSED;
            if(!(var14 !== var11)) { _fun0017_ip = 262; continue _fun0017 }
case 263:
            var14 = _closure1_slot14;
            var14 = var14.BILLING_RETRY;
            if(!(var14 !== var11)) { _fun0017_ip = 264; continue _fun0017 }
case 265:
            var14 = _closure1_slot14;
            var14 = var14.PAST_DUE;
            if(!(var14 !== var11)) { _fun0017_ip = 266; continue _fun0017 }
case 267:
            var14 = var12;
            if(!var16) { _fun0017_ip = 268; continue _fun0017 }
case 269:
            var16 = _closure1_slot43;
            var16 = var16.PREMIUM_YEAR_TIER_2;
            if(!(var17 !== var16)) { _fun0017_ip = 270; continue _fun0017 }
case 271:
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var18 = var16[var9];
            var18 = var17.bind(var8)(var18);
            var21 = var18.intl;
            var19 = var21.formatToPlainString;
            var16 = var16[var9];
            var16 = var17.bind(var8)(var16);
            var17 = var16.t;
            if(var2) { _fun0017_ip = 272; continue _fun0017 }
case 273:
            var18 = var17.G6+XOT;
            var16 = {};
            var26 = var4 == var25;
            var24 = undefined;
            if(var26) { _fun0017_ip = 274; continue _fun0017 }
case 275:
            var24 = var25.percentage;
case 274:
            if(!(var4 == var24)) { _fun0017_ip = 276; continue _fun0017 }
case 277:
            var24 = _closure1_slot21;
case 276:
            var16['percent'] = var24;
            var16['regularPrice'] = var22;
            var26 = var4 == var25;
            var24 = undefined;
            if(var26) { _fun0017_ip = 278; continue _fun0017 }
case 279:
            var24 = var25.duration;
case 278:
            if(!(var4 == var24)) { _fun0017_ip = 280; continue _fun0017 }
case 281:
            var24 = _closure1_slot20;
case 280:
            var16['numMonths'] = var24;
            var16 = var19.bind(var21)(var18, var16);
            _fun0017_ip = 282; continue _fun0017;
case 272:
            var18 = var17["3ZiutU"];
            var17 = {};
            var26 = var4 == var25;
            var24 = undefined;
            if(var26) { _fun0017_ip = 283; continue _fun0017 }
case 284:
            var24 = var25.percentage;
case 283:
            if(!(var4 == var24)) { _fun0017_ip = 285; continue _fun0017 }
case 286:
            var24 = _closure1_slot21;
case 285:
            var17['percent'] = var24;
            var17['regularPrice'] = var22;
            var26 = var4 == var25;
            var24 = undefined;
            if(var26) { _fun0017_ip = 287; continue _fun0017 }
case 288:
            var24 = var25.duration;
case 287:
            if(!(var4 == var24)) { _fun0017_ip = 289; continue _fun0017 }
case 290:
            var24 = _closure1_slot20;
case 289:
            var17['numMonths'] = var24;
            var16 = var19.bind(var21)(var18, var17);
case 282:
            _fun0017_ip = 291; continue _fun0017;
case 270:
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var19 = var17[var9];
            var19 = var18.bind(var8)(var19);
            var21 = var19.intl;
            var19 = var21.format;
            var17 = var17[var9];
            var17 = var18.bind(var8)(var17);
            var17 = var17.t;
            var18 = var17.z2oQtA;
            var17 = {};
            var26 = var4 == var25;
            var24 = undefined;
            if(var26) { _fun0017_ip = 292; continue _fun0017 }
case 293:
            var24 = var25.percentage;
case 292:
            if(!(var4 == var24)) { _fun0017_ip = 294; continue _fun0017 }
case 295:
            var24 = _closure1_slot16;
case 294:
            var17['percent'] = var24;
            var17['regularPrice'] = var22;
            var22 = _closure1_slot78;
            var22 = var22.bind(var8)(var13, var23);
            var17['renewalDate'] = var22;
            var16 = var19.bind(var21)(var18, var17);
case 291:
            var14 = var16;
case 268:
            return var14;
case 266:
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
            var19 = 20;
            var19 = var22[var19];
            var23 = var21.bind(var8)(var19);
            var22 = var23.dateFormat;
            var19 = _closure1_slot77;
            var19 = var19.bind(var8)(var13);
            var21 = var19.expiresDate;
            var19 = 'LL';
            var19 = var22.bind(var23)(var21, var19);
            var14['endDate'] = var19;
            var19 = function onClick() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 21;
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
case 264:
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
            var19 = 19;
            var19 = var22[var19];
            var21 = var21.bind(var8)(var19);
            var19 = var13.currentPeriodStart;
            var23 = var21.bind(var8)(var19);
            var22 = var23.add;
            var21 = _closure1_slot29;
            var19 = 'days';
            var21 = var22.bind(var23)(var21, var19);
            var19 = var21.toDate;
            var19 = var19.bind(var21)();
            var14['endDate'] = var19;
            var14 = var17.bind(var18)(var16, var14);
            return var14;
case 262:
            if(var6) { _fun0017_ip = 296; continue _fun0017 }
case 297:
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
case 296:
            return var12;
case 260:
            var12 = var13.pauseEndsAt;
            var12 = var4 != var12;
            var19 = null;
            if(!var12) { _fun0017_ip = 298; continue _fun0017 }
case 299:
            var14 = _closure1_slot1;
            var16 = _closure1_slot2;
            var12 = 19;
            var12 = var16[var12];
            var14 = var14.bind(var8)(var12);
            var12 = var13.pauseEndsAt;
            var17 = var14.bind(var8)(var12);
            var16 = var17.diff;
            var14 = var13.currentPeriodEnd;
            var12 = 'days';
            var19 = var16.bind(var17)(var14, var12);
case 298:
            if(!(var4 == var19)) { _fun0017_ip = 300; continue _fun0017 }
case 301:
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
            _fun0017_ip = 302; continue _fun0017;
case 300:
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
case 302:
            return var12;
case 258:
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
case 256:
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var16 = var12[var9];
            var16 = var14.bind(var8)(var16);
            var19 = var16.intl;
            var18 = var19.format;
            var12 = var12[var9];
            var12 = var14.bind(var8)(var12);
            var16 = var12.t;
            if(var1) { _fun0017_ip = 303; continue _fun0017 }
case 304:
            var14 = var16.ivjxcn;
            var12 = {};
            var12['num'] = var20;
            var12 = var18.bind(var19)(var14, var12);
            _fun0017_ip = 305; continue _fun0017;
case 303:
            if(var2) { _fun0017_ip = 306; continue _fun0017 }
case 307:
            var17 = var16.xfYkhu;
            var14 = {};
            var14['price'] = var7;
            var14['num'] = var20;
            var14 = var18.bind(var19)(var17, var14);
            _fun0017_ip = 308; continue _fun0017;
case 306:
            var17 = var16["5C/0QG"];
            var16 = {};
            var16['price'] = var7;
            var16['num'] = var20;
            var14 = var18.bind(var19)(var17, var16);
case 308:
            var12 = var14;
case 305:
            return var12;
case 254:
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var16 = var12[var9];
            var16 = var14.bind(var8)(var16);
            var19 = var16.intl;
            var18 = var19.format;
            var12 = var12[var9];
            var12 = var14.bind(var8)(var12);
            var16 = var12.t;
            if(var1) { _fun0017_ip = 309; continue _fun0017 }
case 310:
            var14 = var16.EcSdRH;
            var12 = {};
            var12['num'] = var20;
            var12 = var18.bind(var19)(var14, var12);
            _fun0017_ip = 311; continue _fun0017;
case 309:
            if(var2) { _fun0017_ip = 312; continue _fun0017 }
case 313:
            var17 = var16.nXdbKo;
            var14 = {};
            var14['price'] = var7;
            var14['num'] = var20;
            var14 = var18.bind(var19)(var17, var14);
            _fun0017_ip = 314; continue _fun0017;
case 312:
            var17 = var16.xoFgRh;
            var16 = {};
            var16['price'] = var7;
            var16['num'] = var20;
            var14 = var18.bind(var19)(var17, var16);
case 314:
            var12 = var14;
case 311:
            return var12;
case 246:
            var12 = _closure1_slot14;
            var12 = var12.CANCELED;
            if(!(var12 !== var11)) { _fun0017_ip = 315; continue _fun0017 }
case 316:
            var12 = _closure1_slot14;
            var12 = var12.ACCOUNT_HOLD;
            if(!(var12 !== var11)) { _fun0017_ip = 317; continue _fun0017 }
case 318:
            var12 = _closure1_slot14;
            var12 = var12.UNPAID;
            if(!(var12 !== var11)) { _fun0017_ip = 319; continue _fun0017 }
case 320:
            var12 = _closure1_slot14;
            var12 = var12.PAUSE_PENDING;
            if(!(var12 !== var11)) { _fun0017_ip = 321; continue _fun0017 }
case 322:
            var12 = _closure1_slot14;
            var12 = var12.PAUSED;
            if(!(var12 !== var11)) { _fun0017_ip = 323; continue _fun0017 }
case 324:
            var12 = _closure1_slot14;
            var12 = var12.PAST_DUE;
            if(!(var12 !== var11)) { _fun0017_ip = 325; continue _fun0017 }
case 326:
            return var10;
case 325:
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
            var18 = 20;
            var18 = var20[var18];
            var21 = var19.bind(var8)(var18);
            var20 = var21.dateFormat;
            var18 = _closure1_slot77;
            var18 = var18.bind(var8)(var13);
            var19 = var18.expiresDate;
            var18 = 'LL';
            var18 = var20.bind(var21)(var19, var18);
            var12['endDate'] = var18;
            var18 = function onClick() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 21;
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
case 323:
            if(var6) { _fun0017_ip = 327; continue _fun0017 }
case 328:
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
case 327:
            return var10;
case 321:
            var10 = var13.pauseEndsAt;
            var10 = var4 != var10;
            var18 = null;
            if(!var10) { _fun0017_ip = 329; continue _fun0017 }
case 330:
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var10 = 19;
            var10 = var14[var10];
            var12 = var12.bind(var8)(var10);
            var10 = var13.pauseEndsAt;
            var16 = var12.bind(var8)(var10);
            var14 = var16.diff;
            var12 = var13.currentPeriodEnd;
            var10 = 'days';
            var18 = var14.bind(var16)(var12, var10);
case 329:
            if(!(var4 == var18)) { _fun0017_ip = 331; continue _fun0017 }
case 332:
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
            _fun0017_ip = 333; continue _fun0017;
case 331:
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
case 333:
            return var10;
case 319:
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
case 317:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var14 = var10[var9];
            var14 = var12.bind(var8)(var14);
            var18 = var14.intl;
            var17 = var18.format;
            var10 = var10[var9];
            var10 = var12.bind(var8)(var10);
            var14 = var10.t;
            if(var1) { _fun0017_ip = 334; continue _fun0017 }
case 335:
            var12 = var14["0+/WH7"];
            var10 = {};
            var10 = var17.bind(var18)(var12, var10);
            _fun0017_ip = 336; continue _fun0017;
case 334:
            if(var2) { _fun0017_ip = 337; continue _fun0017 }
case 338:
            var16 = var14.ZsO1Sx;
            var12 = {};
            var12['price'] = var7;
            var12 = var17.bind(var18)(var16, var12);
            _fun0017_ip = 339; continue _fun0017;
case 337:
            var16 = var14.HBkIBi;
            var14 = {};
            var14['price'] = var7;
            var12 = var17.bind(var18)(var16, var14);
case 339:
            var10 = var12;
case 336:
            return var10;
case 315:
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = var12[var9];
            var10 = var14.bind(var8)(var10);
            var18 = var10.intl;
            if(var1) { _fun0017_ip = 340; continue _fun0017 }
case 341:
            var16 = var18.string;
            var10 = var12[var9];
            var10 = var14.bind(var8)(var10);
            var10 = var10.t;
            var10 = var10.K6tYFa;
            var10 = var16.bind(var18)(var10);
            _fun0017_ip = 342; continue _fun0017;
case 340:
            var17 = var18.format;
            var12 = var12[var9];
            var12 = var14.bind(var8)(var12);
            var14 = var12.t;
            if(var2) { _fun0017_ip = 343; continue _fun0017 }
case 344:
            var16 = var14.C/XsHt;
            var12 = {};
            var12['price'] = var7;
            var12 = var17.bind(var18)(var16, var12);
            _fun0017_ip = 345; continue _fun0017;
case 343:
            var16 = var14.cXy8Bp;
            var14 = {};
            var14['price'] = var7;
            var12 = var17.bind(var18)(var16, var14);
case 345:
            var10 = var12;
case 342:
            return var10;
case 243:
            var10 = _closure1_slot14;
            var10 = var10.CANCELED;
            if(!(var10 !== var11)) { _fun0017_ip = 346; continue _fun0017 }
case 347:
            var10 = _closure1_slot14;
            var10 = var10.ACCOUNT_HOLD;
            if(!(var10 !== var11)) { _fun0017_ip = 348; continue _fun0017 }
case 349:
            var10 = _closure1_slot14;
            var10 = var10.UNPAID;
            if(!(var10 !== var11)) { _fun0017_ip = 350; continue _fun0017 }
case 351:
            var10 = _closure1_slot14;
            var10 = var10.PAUSE_PENDING;
            if(!(var10 !== var11)) { _fun0017_ip = 352; continue _fun0017 }
case 353:
            var10 = _closure1_slot14;
            var10 = var10.PAUSED;
            if(!(var10 !== var11)) { _fun0017_ip = 354; continue _fun0017 }
case 355:
            var10 = _closure1_slot14;
            var10 = var10.PAST_DUE;
            if(!(var10 !== var11)) { _fun0017_ip = 356; continue _fun0017 }
case 357:
            return var5;
case 356:
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
            var16 = 20;
            var16 = var18[var16];
            var19 = var17.bind(var8)(var16);
            var18 = var19.dateFormat;
            var16 = _closure1_slot77;
            var16 = var16.bind(var8)(var13);
            var17 = var16.expiresDate;
            var16 = 'LL';
            var16 = var18.bind(var19)(var17, var16);
            var10['endDate'] = var16;
            var15 = function onClick() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 21;
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
case 354:
            if(var6) { _fun0017_ip = 358; continue _fun0017 }
case 359:
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
case 358:
            return var5;
case 352:
            var5 = var13.pauseEndsAt;
            var5 = var4 != var5;
            var12 = null;
            if(!var5) { _fun0017_ip = 360; continue _fun0017 }
case 361:
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 19;
            var5 = var10[var5];
            var6 = var6.bind(var8)(var5);
            var5 = var13.pauseEndsAt;
            var11 = var6.bind(var8)(var5);
            var10 = var11.diff;
            var6 = var13.currentPeriodEnd;
            var5 = 'days';
            var12 = var10.bind(var11)(var6, var5);
case 360:
            if(!(var4 == var12)) { _fun0017_ip = 362; continue _fun0017 }
case 363:
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
            _fun0017_ip = 364; continue _fun0017;
case 362:
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
case 364:
            return var4;
case 350:
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
case 348:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var6 = var4[var9];
            var6 = var5.bind(var8)(var6);
            var12 = var6.intl;
            var11 = var12.format;
            var4 = var4[var9];
            var4 = var5.bind(var8)(var4);
            var6 = var4.t;
            if(var1) { _fun0017_ip = 365; continue _fun0017 }
case 366:
            var5 = var6.SsLIXS;
            var4 = {};
            var4 = var11.bind(var12)(var5, var4);
            _fun0017_ip = 367; continue _fun0017;
case 365:
            if(var2) { _fun0017_ip = 368; continue _fun0017 }
case 369:
            var10 = var6.nkAEfZ;
            var5 = {};
            var5['price'] = var7;
            var5 = var11.bind(var12)(var10, var5);
            _fun0017_ip = 370; continue _fun0017;
case 368:
            var10 = var6["5mv+2i"];
            var6 = {};
            var6['price'] = var7;
            var5 = var11.bind(var12)(var10, var6);
case 370:
            var4 = var5;
case 367:
            return var4;
case 346:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = var3[var9];
            var5 = var4.bind(var8)(var5);
            var6 = var5.intl;
            if(var1) { _fun0017_ip = 371; continue _fun0017 }
case 372:
            var5 = var6.string;
            var1 = var3[var9];
            var1 = var4.bind(var8)(var1);
            var1 = var1.t;
            var1 = var1.JshLzq;
            var1 = var5.bind(var6)(var1);
            _fun0017_ip = 373; continue _fun0017;
case 371:
            var5 = var6.format;
            var3 = var3[var9];
            var3 = var4.bind(var8)(var3);
            var3 = var3.t;
            if(var2) { _fun0017_ip = 374; continue _fun0017 }
case 375:
            var4 = var3.FS//l2;
            var2 = {};
            var2['price'] = var7;
            var2 = var5.bind(var6)(var4, var2);
            _fun0017_ip = 376; continue _fun0017;
case 374:
            var4 = var3.USi/nc;
            var3 = {};
            var3['price'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 376:
            var1 = var2;
case 373:
            return var1;
        }
    };
    var _closure1_slot71 = var82;
    var58 = function getPremiumPlanOptions(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var1 = arg1;
            var7 = var1.skuId;
            var2 = var1.isPremium;
            var1 = var1.defaultPlanId;
            var3 = null;
            if(!(var3 != var7)) { _fun0018_ip = 62; continue _fun0018 }
case 104:
            if(!var2) { _fun0018_ip = 62; continue _fun0018 }
case 86:
            var2 = undefined;
            var3 = undefined;
            if(!(var2 !== var1)) { _fun0018_ip = 35; continue _fun0018 }
case 77:
            var4 = _closure1_slot42;
            var4 = var4[var1];
            var4 = var4.skuId;
            var3 = undefined;
            if(!(var7 === var4)) { _fun0018_ip = 35; continue _fun0018 }
case 30:
            var3 = var1;
case 35:
            var1 = _closure1_slot38;
            var1 = var1.TIER_0;
            if(!(var1 !== var7)) { _fun0018_ip = 91; continue _fun0018 }
case 377:
            var1 = _closure1_slot38;
            var1 = var1.TIER_1;
            if(!(var1 !== var7)) { _fun0018_ip = 206; continue _fun0018 }
case 101:
            var1 = _closure1_slot38;
            var1 = var1.TIER_2;
            if(!(var1 !== var7)) { _fun0018_ip = 378; continue _fun0018 }
case 379:
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
case 378:
            var1 = _closure1_slot43;
            var4 = var1.PREMIUM_YEAR_TIER_2;
            var1 = new Array(2);
            var1[0] = var4;
            var4 = _closure1_slot43;
            var4 = var4.PREMIUM_MONTH_TIER_2;
            var1[1] = var4;
            _fun0018_ip = 210; continue _fun0018;
case 206:
            var4 = _closure1_slot43;
            var6 = var4.PREMIUM_MONTH_TIER_1;
            var4 = new Array(1);
            var4[0] = var6;
            var1 = var4;
            _fun0018_ip = 210; continue _fun0018;
case 91:
            var4 = _closure1_slot43;
            var6 = var4.PREMIUM_YEAR_TIER_0;
            var4 = new Array(2);
            var4[0] = var6;
            var5 = _closure1_slot43;
            var5 = var5.PREMIUM_MONTH_TIER_0;
            var4[1] = var5;
            var1 = var4;
case 210:
            if(!(var2 !== var3)) { _fun0018_ip = 380; continue _fun0018 }
case 381:
            var2 = var1.indexOf;
            var5 = var2.bind(var1)(var3);
            var4 = var1.splice;
            var2 = 1;
            var2 = var4.bind(var1)(var5, var2);
            var2 = var1.unshift;
            var2 = var2.bind(var1)(var3);
case 380:
            return var1;
case 62:
            var1 = new Array(0);
            return var1;
        }
    };
    var81 = function getSkuIdForPlan(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var6 = arg1;
            var1 = _closure1_slot42;
            var1 = var1[var6];
            var3 = null;
            if(!(var3 != var1)) { _fun0019_ip = 50; continue _fun0019 }
case 29:
            var1 = var1.skuId;
            return var1;
case 50:
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
            var2 = 13;
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
    var _closure1_slot72 = var81;
    var57 = function getNumPremiumGuildSubscriptions(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var4 = arg1;
            var6 = _closure1_slot9;
            var5 = var6.getPlanIdsForSkus;
            var3 = _closure1_slot38;
            var7 = var3.GUILD;
            var3 = new Array(1);
            var3[0] = var7;
            var3 = var5.bind(var6)(var3);
            var _closure2_slot0 = var3;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 16;
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
            if(!var3) { _fun0020_ip = 379; continue _fun0020 }
case 382:
            var1 = var2.quantity;
case 379:
            return var1;
        }
    };
    var _closure1_slot73 = var57;
    var56 = function subscriptionHasPremiumGuildPlan(arg1) {
        var3 = _closure1_slot73;
        var1 = arg1;
        var2 = var1.additionalPlans;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = 0;
        var1 = var2 > var1;
        return var1;
    };
    var _closure1_slot74 = var56;
    var55 = function isPremiumBaseSubscriptionPlan(arg1) {
        var3 = _closure1_slot56;
        var2 = var3.has;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot75 = var55;
    var54 = function isPremiumGuildSubscriptionPlan(arg1) {
        var3 = _closure1_slot31;
        var2 = var3.has;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot76 = var54;
    var53 = function getBillingGracePeriodDaysAndExpiresDate(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var3 = arg1;
            var1 = var3.isPurchasedViaApple;
            if(!var1) { _fun0021_ip = 103; continue _fun0021 }
case 79:
            var4 = var3.metadata;
            var2 = null;
            var5 = var2 == var4;
            var6 = undefined;
            var1 = undefined;
            if(var5) { _fun0021_ip = 86; continue _fun0021 }
case 104:
            var1 = var4.apple_grace_period_expires_date;
case 86:
            if(!(var2 == var1)) { _fun0021_ip = 383; continue _fun0021 }
case 103:
            var1 = var3.isPurchasedViaGoogle;
            if(!var1) { _fun0021_ip = 13; continue _fun0021 }
case 106:
            var4 = var3.metadata;
            var2 = null;
            var5 = var2 == var4;
            var7 = undefined;
            var1 = undefined;
            if(var5) { _fun0021_ip = 56; continue _fun0021 }
case 384:
            var1 = var4.google_grace_period_expires_date;
case 56:
            if(!(var2 != var1)) { _fun0021_ip = 13; continue _fun0021 }
case 55:
            var4 = var3.metadata;
            var5 = var2 == var4;
            var1 = undefined;
            if(var5) { _fun0021_ip = 385; continue _fun0021 }
case 83:
            var1 = var4.google_original_expires_date;
case 385:
            if(!(var2 == var1)) { _fun0021_ip = 386; continue _fun0021 }
case 13:
            var1 = var3.isPurchasedExternally;
            if(var1) { _fun0021_ip = 387; continue _fun0021 }
case 388:
            var2 = var3.metadata;
            var4 = null;
            var8 = var4 == var2;
            var5 = undefined;
            var1 = undefined;
            if(var8) { _fun0021_ip = 389; continue _fun0021 }
case 199:
            var1 = var2.grace_period_expires_date;
case 389:
            if(!(var4 == var1)) { _fun0021_ip = 390; continue _fun0021 }
case 391:
            var1 = var3.paymentSourceId;
            if(!(var4 != var1)) { _fun0021_ip = 378; continue _fun0021 }
case 392:
            var10 = _closure1_slot30;
            _fun0021_ip = 61; continue _fun0021;
case 378:
            var10 = _closure1_slot19;
case 61:
            var1 = {};
            var1['days'] = var10;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 19;
            var2 = var9[var2];
            var8 = var8.bind(var5)(var2);
            var2 = var3.currentPeriodStart;
            var9 = var8.bind(var5)(var2);
            var8 = var9.add;
            var2 = 'days';
            var2 = var8.bind(var9)(var10, var2);
            var1['expiresDate'] = var2;
            return var1;
case 390:
            var1 = {};
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var8 = 19;
            var9 = var9[var8];
            var9 = var10.bind(var5)(var9);
            var10 = var3.metadata;
            var11 = var4 == var10;
            var4 = undefined;
            if(var11) { _fun0021_ip = 393; continue _fun0021 }
case 394:
            var4 = var10.grace_period_expires_date;
case 393:
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
case 387:
            var1 = var3.isPurchasedViaApple;
            if(var1) { _fun0021_ip = 395; continue _fun0021 }
case 221:
            var8 = _closure1_slot18;
            _fun0021_ip = 224; continue _fun0021;
case 395:
            var8 = _closure1_slot17;
case 224:
            var1 = {};
            var1['days'] = var8;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 19;
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
case 386:
            var5 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 19;
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
case 383:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 19;
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
    var _closure1_slot77 = var53;
    var52 = function getExpectedRenewalDate(arg1, arg2) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = arg1;
            var2 = arg2;
            var3 = global;
            var5 = var3.Date;
            var7 = var1.currentPeriodEnd;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var8 = var4;
            var3 = new var8[var5](var7, var6);
            var5 = var3 instanceof Object ? var3 : var4;
            var3 = null;
            var3 = var3 == var2;
            if(var3) { _fun0022_ip = 4; continue _fun0022 }
case 5:
            var3 = var1.isBoostOnly;
case 4:
            if(var3) { _fun0022_ip = 396; continue _fun0022 }
case 397:
            var3 = var1.hasAnyPremiumGroup;
case 396:
            var1 = var5;
            if(var3) { _fun0022_ip = 398; continue _fun0022 }
case 35:
            var4 = _closure1_slot79;
            var3 = var2.unactivatedUnits;
            var2 = undefined;
            var1 = var4.bind(var2)(var5, var3);
case 398:
            return var1;
        }
    };
    var _closure1_slot78 = var52;
    var51 = function getBillingInformationString(arg1, arg2) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var3 = arg1;
            var10 = arg2;
            var1 = arguments[2];
            var7 = arguments[3];
            var2 = arguments[4];
            var6 = undefined;
            if(!(var1 === var6)) { _fun0023_ip = 102; continue _fun0023 }
case 31:
            var1 = null;
case 102:
            if(!(var7 === var6)) { _fun0023_ip = 104; continue _fun0023 }
case 49:
            var7 = false;
case 104:
            if(!(var2 === var6)) { _fun0023_ip = 392; continue _fun0023 }
case 40:
            var4 = {'isFractionalPremiumActive': false, 'fetched': true};
            var9 = _closure1_slot25;
            var9 = var9.NONE;
            var4['fractionalState'] = var9;
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var5 = 19;
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
case 392:
            var5 = null;
            var4 = var10;
            if(!(var5 !== var1)) { _fun0023_ip = 203; continue _fun0023 }
case 378:
            var11 = var3.status;
            var9 = _closure1_slot14;
            var9 = var9.PAST_DUE;
            var4 = var10;
            if(!(var11 === var9)) { _fun0023_ip = 203; continue _fun0023 }
case 20:
            var4 = var1;
case 203:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 22;
            var9 = var12[var9];
            var11 = var11.bind(var6)(var9);
            var9 = var11.formatPrice;
            if(var7) { _fun0023_ip = 98; continue _fun0023 }
case 89:
            var13 = var4.total;
            var12 = var4.currency;
            var12 = var9.bind(var11)(var13, var12);
            _fun0023_ip = 399; continue _fun0023;
case 98:
            var15 = var4.invoiceItems;
            var14 = var15.filter;
            var13 = function(arg1) {
                var3 = _closure1_slot34;
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
case 399:
            var8 = _closure1_slot6;
            var4 = var8.getCurrentUser;
            var8 = var4.bind(var8)();
            if(!(var5 != var8)) { _fun0023_ip = 220; continue _fun0023 }
case 85:
            var4 = var8.isOnReverseTrial;
            var4 = var4.bind(var8)();
            if(var4) { _fun0023_ip = 400; continue _fun0023 }
case 220:
            var8 = var3.status;
            var4 = _closure1_slot14;
            var4 = var4.CANCELED;
            if(!(var8 !== var4)) { _fun0023_ip = 401; continue _fun0023 }
case 94:
            var8 = var3.status;
            var4 = _closure1_slot14;
            var4 = var4.PAUSE_PENDING;
            if(!(var8 !== var4)) { _fun0023_ip = 402; continue _fun0023 }
case 403:
            var8 = var3.status;
            var4 = _closure1_slot14;
            var4 = var4.PAUSED;
            if(!(var8 !== var4)) { _fun0023_ip = 404; continue _fun0023 }
case 405:
            var8 = var3.status;
            var4 = _closure1_slot14;
            var4 = var4.PAST_DUE;
            if(!(var8 !== var4)) { _fun0023_ip = 406; continue _fun0023 }
case 407:
            var8 = var3.status;
            var4 = _closure1_slot14;
            var4 = var4.BILLING_RETRY;
            if(!(var8 !== var4)) { _fun0023_ip = 408; continue _fun0023 }
case 409:
            var8 = var3.status;
            var4 = _closure1_slot14;
            var4 = var4.ACCOUNT_HOLD;
            if(!(var8 !== var4)) { _fun0023_ip = 410; continue _fun0023 }
case 411:
            var4 = _closure1_slot80;
            var4 = var4.bind(var6)(var3);
            if(var4) { _fun0023_ip = 412; continue _fun0023 }
case 413:
            var8 = var3.status;
            var4 = _closure1_slot14;
            var4 = var4.UNPAID;
            if(!(var8 !== var4)) { _fun0023_ip = 138; continue _fun0023 }
case 230:
            var4 = var3.isPurchasedExternally;
            if(var4) { _fun0023_ip = 414; continue _fun0023 }
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
            if(var4) { _fun0023_ip = 416; continue _fun0023 }
case 417:
            var4 = var3.hasAnyPremiumGroup;
case 416:
            var14 = var9;
            if(var4) { _fun0023_ip = 232; continue _fun0023 }
case 418:
            var8 = _closure1_slot79;
            var4 = var2.unactivatedUnits;
            var14 = var8.bind(var6)(var9, var4);
case 232:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var15 = 17;
            var4 = var19[var15];
            var4 = var18.bind(var6)(var4);
            var13 = var4.intl;
            var11 = var13.format;
            var4 = var19[var15];
            var4 = var18.bind(var6)(var4);
            var8 = var4.t;
            if(var7) { _fun0023_ip = 419; continue _fun0023 }
case 420:
            var9 = var8.Q18lRK;
            var4 = {};
            var4['renewalDate'] = var14;
            var4['price'] = var12;
            var4 = var11.bind(var13)(var9, var4);
            _fun0023_ip = 421; continue _fun0023;
case 419:
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
case 421:
            return var4;
case 414:
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 17;
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
            var14 = _closure1_slot49;
            var13 = var3.paymentGateway;
            var13 = var14[var13];
            var4['paymentGatewayName'] = var13;
            var15 = _closure1_slot91;
            var14 = var3.paymentGateway;
            var13 = 'SUBSCRIPTION_MANAGEMENT';
            var13 = var15.bind(var6)(var14, var13);
            var4['subscriptionManagementLink'] = var13;
            var4 = var9.bind(var11)(var8, var4);
            return var4;
case 138:
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 17;
            var9 = var13[var4];
            var9 = var8.bind(var6)(var9);
            var11 = var9.intl;
            var9 = var11.format;
            var4 = var13[var4];
            var4 = var8.bind(var6)(var4);
            var4 = var4.t;
            var8 = var4.CzTKom;
            var4 = {};
            var13 = _closure1_slot27;
            var4['maxProcessingTimeInDays'] = var13;
            var4 = var9.bind(var11)(var8, var4);
            return var4;
case 412:
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var4 = 17;
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
case 410:
            var4 = var3.isPurchasedViaGoogle;
            if(!var4) { _fun0023_ip = 422; continue _fun0023 }
case 423:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 23;
            var4 = var9[var4];
            var8 = var8.bind(var6)(var4);
            var4 = var8.isGooglePlayBillingSupported;
            var4 = var4.bind(var8)();
            if(var4) { _fun0023_ip = 422; continue _fun0023 }
case 424:
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var4 = 17;
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
            var13 = 19;
            var13 = var15[var13];
            var14 = var14.bind(var6)(var13);
            var13 = var3.currentPeriodStart;
            var16 = var14.bind(var6)(var13);
            var15 = var16.add;
            var14 = _closure1_slot26;
            var13 = 'days';
            var14 = var15.bind(var16)(var14, var13);
            var13 = var14.toDate;
            var13 = var13.bind(var14)();
            var4['endDate'] = var13;
            var14 = _closure1_slot49;
            var13 = var3.paymentGateway;
            var13 = var14[var13];
            var4['paymentGatewayName'] = var13;
            var15 = _closure1_slot91;
            var14 = var3.paymentGateway;
            var13 = 'PAYMENT_SOURCE_MANAGEMENT';
            var13 = var15.bind(var6)(var14, var13);
            var4['paymentSourceLink'] = var13;
            var4 = var9.bind(var11)(var8, var4);
            _fun0023_ip = 425; continue _fun0023;
case 422:
            var9 = _closure1_slot0;
            var16 = _closure1_slot2;
            var8 = 17;
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
            var14 = 19;
            var14 = var16[var14];
            var15 = var15.bind(var6)(var14);
            var14 = var3.currentPeriodStart;
            var17 = var15.bind(var6)(var14);
            var16 = var17.add;
            var15 = _closure1_slot26;
            var14 = 'days';
            var15 = var16.bind(var17)(var15, var14);
            var14 = var15.toDate;
            var14 = var14.bind(var15)();
            var8['endDate'] = var14;
            var8['price'] = var12;
            var4 = var11.bind(var13)(var9, var8);
case 425:
            return var4;
case 408:
            var8 = _closure1_slot0;
            var15 = _closure1_slot2;
            var4 = 17;
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
            var13 = 19;
            var13 = var15[var13];
            var14 = var14.bind(var6)(var13);
            var13 = var3.currentPeriodStart;
            var16 = var14.bind(var6)(var13);
            var15 = var16.add;
            var14 = _closure1_slot29;
            var13 = 'days';
            var14 = var15.bind(var16)(var14, var13);
            var13 = var14.toDate;
            var13 = var13.bind(var14)();
            var4['endDate'] = var13;
            var4['price'] = var12;
            var4 = var9.bind(var11)(var8, var4);
            return var4;
case 406:
            var4 = _closure1_slot77;
            var4 = var4.bind(var6)(var3);
            var15 = var4.expiresDate;
            var4 = var3.isPurchasedViaGoogle;
            if(!var4) { _fun0023_ip = 426; continue _fun0023 }
case 427:
            var9 = var3.metadata;
            var11 = var5 == var9;
            var8 = undefined;
            if(var11) { _fun0023_ip = 428; continue _fun0023 }
case 429:
            var8 = var9.google_grace_period_expires_date;
case 428:
            var4 = var5 != var8;
case 426:
            if(!var4) { _fun0023_ip = 187; continue _fun0023 }
case 430:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 19;
            var4 = var9[var4];
            var8 = var8.bind(var6)(var4);
            var4 = var3.metadata;
            var4 = var4.google_grace_period_expires_date;
            var15 = var8.bind(var6)(var4);
case 187:
            var4 = var3.isPurchasedViaApple;
            if(!var4) { _fun0023_ip = 431; continue _fun0023 }
case 432:
            var9 = var3.metadata;
            var11 = var5 == var9;
            var8 = undefined;
            if(var11) { _fun0023_ip = 433; continue _fun0023 }
case 434:
            var8 = var9.apple_grace_period_expires_date;
case 433:
            var4 = var5 != var8;
case 431:
            if(!var4) { _fun0023_ip = 435; continue _fun0023 }
case 436:
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 19;
            var4 = var9[var4];
            var8 = var8.bind(var6)(var4);
            var4 = var3.metadata;
            var4 = var4.apple_grace_period_expires_date;
            var15 = var8.bind(var6)(var4);
case 435:
            var4 = var3.isPurchasedExternally;
            var9 = _closure1_slot0;
            var14 = _closure1_slot2;
            var8 = 17;
            var11 = var14[var8];
            var11 = var9.bind(var6)(var11);
            var13 = var11.intl;
            var11 = var13.format;
            var8 = var14[var8];
            var8 = var9.bind(var6)(var8);
            var8 = var8.t;
            if(var4) { _fun0023_ip = 296; continue _fun0023 }
case 437:
            var9 = var8.qEIzyi;
            var4 = {};
            var14 = var15.toDate;
            var14 = var14.bind(var15)();
            var4['endDate'] = var14;
            var4['price'] = var12;
            var4 = var11.bind(var13)(var9, var4);
            _fun0023_ip = 438; continue _fun0023;
case 296:
            var9 = var8.U2hb3W;
            var8 = {};
            var14 = var15.toDate;
            var14 = var14.bind(var15)();
            var8['endDate'] = var14;
            var15 = _closure1_slot49;
            var14 = var3.paymentGateway;
            var14 = var15[var14];
            var8['paymentGatewayName'] = var14;
            var16 = _closure1_slot91;
            var15 = var3.paymentGateway;
            var14 = 'PAYMENT_SOURCE_MANAGEMENT';
            var14 = var16.bind(var6)(var15, var14);
            var8['paymentSourceLink'] = var14;
            var4 = var11.bind(var13)(var9, var8);
case 438:
            return var4;
case 404:
            var8 = var2.fractionalState;
            var4 = _closure1_slot25;
            var4 = var4.NONE;
            if(!(var8 === var4)) { _fun0023_ip = 439; continue _fun0023 }
case 440:
            var4 = var3.pauseEndsAt;
            if(!(var5 != var4)) { _fun0023_ip = 441; continue _fun0023 }
case 442:
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 17;
            var4 = var18[var14];
            var4 = var17.bind(var6)(var4);
            var13 = var4.intl;
            var11 = var13.format;
            var4 = var18[var14];
            var4 = var17.bind(var6)(var4);
            var8 = var4.t;
            if(var7) { _fun0023_ip = 443; continue _fun0023 }
case 444:
            var9 = var8.V8+l6k;
            var4 = {};
            var15 = var3.pauseEndsAt;
            var4['resumeDate'] = var15;
            var4 = var11.bind(var13)(var9, var4);
            _fun0023_ip = 445; continue _fun0023;
case 443:
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
case 445:
            _fun0023_ip = 446; continue _fun0023;
case 441:
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var14 = 17;
            var8 = var18[var14];
            var8 = var17.bind(var6)(var8);
            var13 = var8.intl;
            if(var7) { _fun0023_ip = 447; continue _fun0023 }
case 448:
            var8 = var13.string;
            var7 = var18[var14];
            var7 = var17.bind(var6)(var7);
            var7 = var7.t;
            var7 = var7.fMz6Lg;
            var7 = var8.bind(var13)(var7);
            _fun0023_ip = 449; continue _fun0023;
case 447:
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
case 449:
            var4 = var7;
case 446:
            _fun0023_ip = 450; continue _fun0023;
case 439:
            var8 = _closure1_slot0;
            var13 = _closure1_slot2;
            var7 = 17;
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
case 450:
            return var4;
case 402:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 17;
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
case 401:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var4 = 17;
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
case 400:
            var4 = var2.currentEntitlementEndsAt;
            if(!(var5 == var4)) { _fun0023_ip = 451; continue _fun0023 }
case 452:
            var5 = var3.currentPeriodEnd;
            _fun0023_ip = 453; continue _fun0023;
case 451:
            var3 = var2.currentEntitlementEndsAt;
            var2 = var3.toDate;
            var5 = var2.bind(var3)();
case 453:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 17;
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
    var50 = function extendDateWithUnconsumedFractionalPremium(arg1, arg2, arg3, arg4) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var5 = arg1;
            var9 = arg2;
            var8 = arg3;
            var6 = arg4;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var7 = 19;
            var1 = var1[var7];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = undefined;
            if(var6) { _fun0024_ip = 77; continue _fun0024 }
case 194:
            var1 = var5;
case 77:
            var11 = var2.bind(var4)(var1);
            var2 = var9.length;
            var1 = 0;
            var5 = var11;
            if(!(var2 > var1)) { _fun0024_ip = 454; continue _fun0024 }
case 396:
            var2 = _closure1_slot101;
            var10 = var2.bind(var4)(var9);
            var9 = var11.add;
            var2 = 'hours';
            var5 = var9.bind(var11)(var10, var2);
case 454:
            var2 = var5;
            if(var6) { _fun0024_ip = 88; continue _fun0024 }
case 455:
            var2 = var5;
            if(!(var4 !== var8)) { _fun0024_ip = 88; continue _fun0024 }
case 456:
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
            if(!(var3 > var1)) { _fun0024_ip = 88; continue _fun0024 }
case 139:
            var1 = var5.add;
            var2 = var1.bind(var5)(var3, var4);
case 88:
            var1 = var2.toDate;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var _closure1_slot79 = var50;
    var49 = function getUnactivatedFractionalPremiumDurationString(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var1 = arg1;
            var4 = _closure1_slot101;
            var2 = var1.unactivatedUnits;
            var5 = undefined;
            var12 = var4.bind(var5)(var2);
            var11 = 0;
            if(!(var12 > var11)) { _fun0025_ip = 5; continue _fun0025 }
case 49:
            var2 = var1.fractionalState;
            var1 = _closure1_slot25;
            var1 = var1.NONE;
            if(!(var2 !== var1)) { _fun0025_ip = 4; continue _fun0025 }
case 5:
            var1 = '';
            return var1;
case 4:
            var4 = {};
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 17;
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
            var1 = 24;
            var1 = var6[var1];
            var8 = var2.bind(var5)(var1);
            var7 = var8.roundFPCountdownUnits;
            var1 = 20;
            var9 = var6[var1];
            var10 = var2.bind(var5)(var9);
            var9 = var10.diffAsUnits;
            var13 = _closure1_slot1;
            var3 = 25;
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
    var48 = function isSwitchingPlansDisabled(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var2 = arg1;
            var1 = var2.renewalMutations;
            var4 = null;
            var1 = var4 != var1;
            if(var1) { _fun0026_ip = 34; continue _fun0026 }
case 36:
            var3 = var2.trialEndsAt;
            var1 = var4 != var3;
case 34:
            if(var1) { _fun0026_ip = 106; continue _fun0026 }
case 104:
            var3 = var2.status;
            var2 = _closure1_slot14;
            var2 = var2.PAST_DUE;
            var1 = var3 === var2;
case 106:
            return var1;
        }
    };
    var47 = function getSwitchingPlansDisabledMessage(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var2 = arg1;
            var1 = var2.renewalMutations;
            var3 = null;
            var4 = var3 != var1;
            var1 = null;
            if(!var4) { _fun0027_ip = 457; continue _fun0027 }
case 31:
            var4 = var2.renewalMutations;
            var5 = var4.planId;
            var4 = var2.planId;
            if(!(var5 === var4)) { _fun0027_ip = 458; continue _fun0027 }
case 77:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 17;
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
            _fun0027_ip = 459; continue _fun0027;
case 458:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 17;
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
case 459:
            var1 = var4;
case 457:
            var2 = var2.trialEndsAt;
            if(!(var3 != var2)) { _fun0027_ip = 460; continue _fun0027 }
case 461:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 17;
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
case 460:
            return var1;
        }
    };
    var46 = function isSubscriptionPrepaidPaymentSource(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var2 = arg1;
            var3 = var2.paymentSourceId;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0028_ip = 40; continue _fun0028 }
case 36:
            var4 = _closure1_slot81;
            var3 = var2.paymentSourceId;
            var2 = undefined;
            var1 = var4.bind(var2)(var3);
case 40:
            return var1;
        }
    };
    var _closure1_slot80 = var46;
    var45 = function isPrepaidPaymentSource(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 != var5)) { _fun0029_ip = 462; continue _fun0029 }
case 463:
            var4 = _closure1_slot8;
            var2 = var4.getPaymentSource;
            var2 = var2.bind(var4)(var5);
            var1 = var1 != var2;
            if(!var1) { _fun0029_ip = 4; continue _fun0029 }
case 41:
            var4 = _closure1_slot50;
            var3 = var4.has;
            var2 = var2.type;
            var1 = var3.bind(var4)(var2);
case 4:
            return var1;
case 462:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot81 = var45;
    var44 = function getCoercedPremiumGuildSubscriptionStatus(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var2 = arg1;
            var1 = var2.renewalMutations;
            var4 = var2.additionalPlans;
            var5 = var2.status;
            var3 = _closure1_slot73;
            var7 = undefined;
            var4 = var3.bind(var7)(var4);
            var6 = null;
            var3 = var6 != var1;
            if(!var3) { _fun0030_ip = 397; continue _fun0030 }
case 464:
            var3 = _closure1_slot73;
            var1 = var1.additionalPlans;
            var6 = var3.bind(var7)(var1);
case 397:
            var3 = 0;
            var1 = var5;
            if(!(var3 === var6)) { _fun0030_ip = 465; continue _fun0030 }
case 30:
            var1 = var5;
            if(!(var3 !== var4)) { _fun0030_ip = 465; continue _fun0030 }
case 466:
            var2 = _closure1_slot14;
            var1 = var2.CANCELED;
case 465:
            return var1;
        }
    };
    var _closure1_slot82 = var44;
    var43 = function isPremiumGuildSubscriptionCanceled(arg1) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
            var3 = arg1;
            var1 = var3.isPurchasedExternally;
            if(var1) { _fun0031_ip = 194; continue _fun0031 }
case 47:
            var4 = _closure1_slot82;
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var1 = _closure1_slot14;
            var1 = var1.CANCELED;
            var1 = var4 === var1;
            _fun0031_ip = 7; continue _fun0031;
case 194:
            var3 = var3.status;
            var2 = _closure1_slot14;
            var2 = var2.CANCELED;
            var1 = var3 === var2;
case 7:
            return var1;
        }
    };
    var _closure1_slot83 = var43;
    var42 = function getFormattedPriceForPlan(arg1, arg2, arg3) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
            var5 = arguments[3];
            var2 = arg1;
            var4 = arg2;
            var6 = undefined;
            if(!(var5 === var6)) { _fun0032_ip = 467; continue _fun0032 }
case 47:
            var5 = false;
case 467:
            var1 = var5;
            var3 = undefined;
            var7 = var4;
            var5 = null;
            if(!(var5 == var7)) { _fun0032_ip = 468; continue _fun0032 }
case 104:
            var9 = _closure1_slot60;
            var5 = var2;
            var8 = var5.id;
            var7 = var1;
            var5 = false;
            var3 = var9.bind(var6)(var8, var5, var7);
            _fun0032_ip = 469; continue _fun0032;
case 468: // try_start_0
            var9 = _closure1_slot62;
            var5 = var2;
            var13 = var5.id;
            var11 = var1;
            var10 = var4;
            var12 = false;
            var14 = undefined;
            var3 = var14[var9](var13, var12, var11, var10, var9);
case 470: // try_end0
            _fun0032_ip = 469; continue _fun0032;
case 398: // catch_target0
            CatchBlockStart(arg_register=3);
            var7 = _closure1_slot60;
            var4 = var2;
            var5 = var4.id;
            var4 = var1;
            var1 = false;
            var3 = var7.bind(var6)(var5, var1, var4);
case 469:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 22;
            var4 = var7[var4];
            var6 = var5.bind(var6)(var4);
            var5 = var6.formatPrice;
            var4 = var3.amount;
            var3 = var3.currency;
            var4 = var5.bind(var6)(var4, var3);
            var2 = var2.currency;
            var1 = _closure1_slot48;
            var1 = var1.USD;
            var2 = var2 !== var1;
            if(!var2) { _fun0032_ip = 144; continue _fun0032 }
case 471:
            var3 = true;
            var1 = arg3;
            var2 = var3 === var1;
case 144:
            var1 = var4;
            if(!var2) { _fun0032_ip = 472; continue _fun0032 }
case 22:
            var3 = var4.concat;
            var2 = '*';
            var1 = var3.bind(var4)(var2);
case 472:
            return var1;
        }
    };
    var _closure1_slot84 = var42;
    var41 = function getPlanIdFromInvoice(arg1, arg2) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var1 = var3.planId;
            var6 = var3.status;
            var5 = _closure1_slot14;
            var5 = var5.CANCELED;
            if(!(var6 !== var5)) { _fun0033_ip = 95; continue _fun0033 }
case 86:
            var6 = var3.status;
            var5 = _closure1_slot14;
            var5 = var5.PAUSE_PENDING;
            if(!(var6 !== var5)) { _fun0033_ip = 95; continue _fun0033 }
case 78:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 16;
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
                var2 = _closure1_slot75;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            };
            var2 = var6.bind(var8)(var2);
            if(!(var5 != var2)) { _fun0033_ip = 90; continue _fun0033 }
case 473:
            var6 = _closure1_slot5;
            var4 = var2.subscriptionPlanId;
            var4 = var6.bind(var7)(var4);
            if(var4) { _fun0033_ip = 90; continue _fun0033 }
case 474:
            var4 = var3.renewalMutations;
            if(!(var5 != var4)) { _fun0033_ip = 61; continue _fun0033 }
case 475:
            var4 = var3.renewalMutations;
            var5 = var4.planId;
            var4 = var3.planId;
            if(!(var5 === var4)) { _fun0033_ip = 90; continue _fun0033 }
case 61:
            var2 = var2.subscriptionPlanId;
            _fun0033_ip = 476; continue _fun0033;
case 90:
            var2 = var3.planId;
case 476:
            return var2;
case 95:
            return var1;
        }
    };
    var40 = function getStatusFromInvoice(arg1, arg2) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
            var4 = arg1;
            var2 = arg2;
            var1 = var4.status;
            var6 = var4.status;
            var5 = _closure1_slot14;
            var5 = var5.CANCELED;
            if(!(var6 !== var5)) { _fun0034_ip = 88; continue _fun0034 }
case 41:
            var5 = var4.status;
            var4 = _closure1_slot14;
            var4 = var4.PAUSE_PENDING;
            if(!(var5 !== var4)) { _fun0034_ip = 88; continue _fun0034 }
case 4:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 16;
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
                var2 = _closure1_slot75;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            };
            var2 = var5.bind(var7)(var2);
            var4 = var4 == var2;
            if(var4) { _fun0034_ip = 199; continue _fun0034 }
case 477:
            var5 = _closure1_slot5;
            var2 = var2.subscriptionPlanId;
            var4 = var5.bind(var6)(var2);
case 199:
            var2 = var1;
            if(!var4) { _fun0034_ip = 478; continue _fun0034 }
case 389:
            var3 = _closure1_slot14;
            var2 = var3.CANCELED;
case 478:
            return var2;
case 88:
            return var1;
        }
    };
    var39 = function isBaseSubscriptionCanceled(arg1) {
        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
            var3 = arg1;
            var2 = var3.status;
            var4 = var3.renewalMutations;
            var1 = _closure1_slot14;
            var1 = var1.CANCELED;
            var1 = var2 === var1;
            if(var1) { _fun0035_ip = 479; continue _fun0035 }
case 127:
            var2 = null;
            var2 = var2 != var4;
            if(!var2) { _fun0035_ip = 468; continue _fun0035 }
case 464:
            var6 = _closure1_slot5;
            var5 = var4.planId;
            var4 = undefined;
            var2 = var6.bind(var4)(var5);
case 468:
            if(!var2) { _fun0035_ip = 384; continue _fun0035 }
case 130:
            var3 = var3.isPurchasedExternally;
            var2 = !var3;
case 384:
            var1 = var2;
case 479:
            return var1;
        }
    };
    var _closure1_slot85 = var39;
    var38 = function isSubscriptionStatusFailedPayment(arg1) {
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot14;
            var1 = var1.PAST_DUE;
            var1 = var3 === var1;
            if(var1) { _fun0036_ip = 86; continue _fun0036 }
case 31:
            var4 = _closure1_slot14;
            var4 = var4.ACCOUNT_HOLD;
            var1 = var3 === var4;
case 86:
            if(var1) { _fun0036_ip = 196; continue _fun0036 }
case 480:
            var2 = _closure1_slot14;
            var2 = var2.BILLING_RETRY;
            var1 = var3 === var2;
case 196:
            return var1;
        }
    };
    var _closure1_slot86 = var38;
    var37 = function getFormattedPlanPriceFromInvoice(arg1, arg2, arg3) {
        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
            var2 = arg1;
            var3 = arg2;
            var1 = arg3;
            var5 = var2.findInvoiceItemByPlanId;
            var4 = var1.id;
            var4 = var5.bind(var2)(var4);
            var5 = null;
            if(!(var5 != var4)) { _fun0037_ip = 52; continue _fun0037 }
case 33:
            var7 = var4.amount;
            _fun0037_ip = 11; continue _fun0037;
case 52:
            var8 = _closure1_slot62;
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
            var3 = 22;
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
    var _closure1_slot87 = var37;
    var36 = function getPremiumGuildIntervalPrice(arg1, arg2, arg3, arg4) {
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
            var6 = arg1;
            var4 = arg2;
            var2 = arg3;
            var3 = null;
            if(!(var3 == var4)) { _fun0038_ip = 103; continue _fun0038 }
case 47:
            var8 = {};
            var1 = _closure1_slot7;
            var1 = var1.ipCountryCodeWithFallback;
            var8['country'] = var1;
            var8['currency'] = var2;
            _fun0038_ip = 78; continue _fun0038;
case 103:
            var1 = {};
            var1['paymentSourceId'] = var4;
            var1['currency'] = var2;
            var8 = var1;
case 78:
            var4 = _closure1_slot9;
            var1 = var4.get;
            var1 = var1.bind(var4)(var6);
            if(!(var3 != var1)) { _fun0038_ip = 481; continue _fun0038 }
case 82:
            var9 = _closure1_slot9;
            var7 = var9.getForSkuAndInterval;
            var4 = _closure1_slot38;
            var5 = var4.GUILD;
            var4 = var1.interval;
            var1 = var1.intervalCount;
            var1 = var7.bind(var9)(var5, var4, var1);
            if(!(var3 != var1)) { _fun0038_ip = 19; continue _fun0038 }
case 477:
            var7 = _closure1_slot62;
            var5 = var1.id;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 15;
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
            var3 = 13;
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
case 481:
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
            var2 = 13;
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
    var _closure1_slot88 = var36;
    var35 = function getBillingReviewSubheader(arg1, arg2, arg3) {
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
            var8 = arg2;
            var2 = arg3;
            var10 = var8.id;
            var3 = null;
            var1 = arg1;
            if(!(var3 != var1)) { _fun0039_ip = 474; continue _fun0039 }
case 31:
            var3 = _closure1_slot43;
            var3 = var3.PREMIUM_MONTH_TIER_0;
            if(!(var3 !== var10)) { _fun0039_ip = 482; continue _fun0039 }
case 464:
            var3 = _closure1_slot43;
            var3 = var3.PREMIUM_YEAR_TIER_0;
            if(!(var3 !== var10)) { _fun0039_ip = 483; continue _fun0039 }
case 468:
            var3 = _closure1_slot43;
            var3 = var3.PREMIUM_MONTH_TIER_1;
            if(!(var3 !== var10)) { _fun0039_ip = 484; continue _fun0039 }
case 46:
            var3 = _closure1_slot43;
            var3 = var3.PREMIUM_YEAR_TIER_1;
            if(!(var3 !== var10)) { _fun0039_ip = 485; continue _fun0039 }
case 455:
            var3 = _closure1_slot43;
            var3 = var3.PREMIUM_MONTH_TIER_2;
            if(!(var3 !== var10)) { _fun0039_ip = 486; continue _fun0039 }
case 487:
            var3 = _closure1_slot43;
            var3 = var3.PREMIUM_GROUP_MONTH;
            if(!(var3 !== var10)) { _fun0039_ip = 486; continue _fun0039 }
case 488:
            var3 = _closure1_slot43;
            var3 = var3.PREMIUM_YEAR_TIER_2;
            if(!(var3 !== var10)) { _fun0039_ip = 489; continue _fun0039 }
case 474:
            var4 = _closure1_slot43;
            var4 = var4.PREMIUM_MONTH_TIER_0;
            if(!(var4 !== var10)) { _fun0039_ip = 490; continue _fun0039 }
case 87:
            var4 = _closure1_slot43;
            var4 = var4.PREMIUM_YEAR_TIER_0;
            if(!(var4 !== var10)) { _fun0039_ip = 491; continue _fun0039 }
case 142:
            var4 = _closure1_slot43;
            var4 = var4.PREMIUM_MONTH_TIER_1;
            if(!(var4 !== var10)) { _fun0039_ip = 492; continue _fun0039 }
case 144:
            var4 = _closure1_slot43;
            var4 = var4.PREMIUM_YEAR_TIER_1;
            if(!(var4 !== var10)) { _fun0039_ip = 493; continue _fun0039 }
case 146:
            var4 = _closure1_slot43;
            var4 = var4.PREMIUM_MONTH_TIER_2;
            if(!(var4 !== var10)) { _fun0039_ip = 494; continue _fun0039 }
case 148:
            var4 = _closure1_slot43;
            var4 = var4.PREMIUM_GROUP_MONTH;
            if(!(var4 !== var10)) { _fun0039_ip = 495; continue _fun0039 }
case 98:
            var4 = _closure1_slot43;
            var4 = var4.PREMIUM_YEAR_TIER_2;
            if(!(var4 !== var10)) { _fun0039_ip = 496; continue _fun0039 }
case 151:
            var4 = _closure1_slot43;
            var4 = var4.PREMIUM_3_MONTH_TIER_2;
            if(!(var4 !== var10)) { _fun0039_ip = 497; continue _fun0039 }
case 498:
            var4 = _closure1_slot43;
            var4 = var4.PREMIUM_6_MONTH_TIER_2;
            if(!(var4 !== var10)) { _fun0039_ip = 497; continue _fun0039 }
case 499:
            var4 = _closure1_slot43;
            var4 = var4.NONE_MONTH;
            if(!(var4 !== var10)) { _fun0039_ip = 500; continue _fun0039 }
case 80:
            var4 = _closure1_slot43;
            var4 = var4.NONE_YEAR;
            if(!(var4 !== var10)) { _fun0039_ip = 500; continue _fun0039 }
case 66:
            var4 = _closure1_slot43;
            var4 = var4.NONE_3_MONTH;
            if(!(var4 !== var10)) { _fun0039_ip = 500; continue _fun0039 }
case 501:
            var4 = _closure1_slot43;
            var4 = var4.NONE_6_MONTH;
            if(!(var4 !== var10)) { _fun0039_ip = 500; continue _fun0039 }
case 502:
            var4 = _closure1_slot43;
            var4 = var4.PREMIUM_MONTH_GUILD;
            if(!(var4 !== var10)) { _fun0039_ip = 500; continue _fun0039 }
case 503:
            var4 = _closure1_slot43;
            var4 = var4.PREMIUM_YEAR_GUILD;
            if(!(var4 !== var10)) { _fun0039_ip = 500; continue _fun0039 }
case 504:
            var4 = _closure1_slot43;
            var4 = var4.PREMIUM_3_MONTH_GUILD;
            if(!(var4 !== var10)) { _fun0039_ip = 500; continue _fun0039 }
case 505:
            var4 = _closure1_slot43;
            var4 = var4.PREMIUM_6_MONTH_GUILD;
            if(!(var4 !== var10)) { _fun0039_ip = 500; continue _fun0039 }
case 506:
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
            var5 = 13;
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
case 500:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 17;
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
case 497:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 17;
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
case 496:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 17;
            var6 = var9[var4];
            var5 = undefined;
            var6 = var8.bind(var5)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var5 = var4.t;
            if(var2) { _fun0039_ip = 507; continue _fun0039 }
case 508:
            var4 = var5["0nfg1x"];
            var4 = var6.bind(var7)(var4);
            _fun0039_ip = 158; continue _fun0039;
case 507:
            var5 = var5.cRCCJ3;
            var4 = var6.bind(var7)(var5);
case 158:
            return var4;
case 495:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 17;
            var4 = var8[var4];
            var9 = undefined;
            var4 = var5.bind(var9)(var4);
            var7 = var4.intl;
            var6 = var7.formatToPlainString;
            var5 = _closure1_slot1;
            var4 = 18;
            var4 = var8[var4];
            var4 = var5.bind(var9)(var4);
            var5 = var4.LwdrNi;
            var4 = {};
            var8 = _closure1_slot47;
            var8 = var8.bind(var9)();
            var4['premiumGroupProductName'] = var8;
            var4 = var6.bind(var7)(var5, var4);
            return var4;
case 494:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 17;
            var6 = var9[var4];
            var5 = undefined;
            var6 = var8.bind(var5)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var5 = var4.t;
            if(var2) { _fun0039_ip = 509; continue _fun0039 }
case 510:
            var4 = var5.LQVQIq;
            var4 = var6.bind(var7)(var4);
            _fun0039_ip = 511; continue _fun0039;
case 509:
            var5 = var5.cRCCJ3;
            var4 = var6.bind(var7)(var5);
case 511:
            return var4;
case 493:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 17;
            var6 = var9[var4];
            var5 = undefined;
            var6 = var8.bind(var5)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var5 = var4.t;
            if(var2) { _fun0039_ip = 512; continue _fun0039 }
case 513:
            var4 = var5.MhH/vW;
            var4 = var6.bind(var7)(var4);
            _fun0039_ip = 514; continue _fun0039;
case 512:
            var5 = var5.cRCCJ3;
            var4 = var6.bind(var7)(var5);
case 514:
            return var4;
case 492:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 17;
            var6 = var9[var4];
            var5 = undefined;
            var6 = var8.bind(var5)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var5 = var4.t;
            if(var2) { _fun0039_ip = 257; continue _fun0039 }
case 515:
            var4 = var5.gueLg5;
            var4 = var6.bind(var7)(var4);
            _fun0039_ip = 516; continue _fun0039;
case 257:
            var5 = var5.cRCCJ3;
            var4 = var6.bind(var7)(var5);
case 516:
            return var4;
case 491:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 17;
            var6 = var9[var4];
            var5 = undefined;
            var6 = var8.bind(var5)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var5 = var4.t;
            if(var2) { _fun0039_ip = 517; continue _fun0039 }
case 518:
            var4 = var5["2eQpsL"];
            var4 = var6.bind(var7)(var4);
            _fun0039_ip = 519; continue _fun0039;
case 517:
            var5 = var5.cRCCJ3;
            var4 = var6.bind(var7)(var5);
case 519:
            return var4;
case 490:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 17;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            if(var2) { _fun0039_ip = 520; continue _fun0039 }
case 521:
            var2 = var3["/G3aKw"];
            var2 = var4.bind(var5)(var2);
            _fun0039_ip = 522; continue _fun0039;
case 520:
            var3 = var3.cRCCJ3;
            var2 = var4.bind(var5)(var3);
case 522:
            return var2;
case 489:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 17;
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
case 486:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 17;
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
case 485:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 17;
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
case 484:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 17;
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
case 483:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 17;
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
case 482:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 17;
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
    var34 = function getIntervalForInvoice(arg1) {
        var1 = arg1;
        var2 = var1.invoiceItems;
        var1 = 0;
        var1 = var2[var1];
        var4 = var1.subscriptionPlanId;
        var3 = _closure1_slot9;
        var2 = var3.get;
        var2 = var2.bind(var3)(var4);
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var1 = 16;
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
    var33 = function getDefaultCurrency() {
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
            var1 = undefined;
            var3 = _closure1_slot48;
            var1 = var3.USD;
case 47: // try_start_0
            var4 = _closure1_slot60;
            var2 = _closure1_slot43;
            var10 = var2.PREMIUM_MONTH_TIER_2;
            var11 = undefined;
            var9 = false;
            var8 = false;
            var7 = undefined;
            var6 = false;
            var2 = var11[var4](var10, var9, var8, var7, var6, var5);
            var1 = var2.currency;
case 5: // try_end0
            _fun0040_ip = 106; continue _fun0040;
case 523: // catch_target0
            CatchBlockStart(arg_register=1);
case 106:
            return var1;
        }
    };
    var _closure1_slot89 = var33;
    var32 = function formatTrialCtaIntervalDuration(arg1) {
        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
case 0:
            var1 = arg1;
            var4 = var1.intervalType;
            var9 = undefined;
            if(!(var4 === var9)) { _fun0041_ip = 34; continue _fun0041 }
case 47:
            var2 = _closure1_slot41;
            var4 = var2.MONTH;
case 34:
            var8 = var1.intervalCount;
            if(!(var8 === var9)) { _fun0041_ip = 52; continue _fun0041 }
case 40:
            var8 = 1;
case 52:
            var1 = _closure1_slot89;
            var7 = var1.bind(var9)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 22;
            var1 = var5[var1];
            var6 = var3.bind(var9)(var1);
            var5 = var6.formatPrice;
            var3 = 0;
            var1 = {'maximumFractionDigits': 0, 'minimumFractionDigits': 0};
            var6 = var5.bind(var6)(var3, var7, var1);
            var1 = _closure1_slot41;
            var1 = var1.DAY;
            if(!(var1 !== var4)) { _fun0041_ip = 524; continue _fun0041 }
case 379:
            var1 = _closure1_slot41;
            var1 = var1.MONTH;
            if(!(var1 !== var4)) { _fun0041_ip = 525; continue _fun0041 }
case 526:
            var1 = _closure1_slot41;
            var1 = var1.YEAR;
            if(!(var1 !== var4)) { _fun0041_ip = 90; continue _fun0041 }
case 527:
            var1 = global;
            var5 = var1.Error;
            var1 = var5.prototype;
            var4 = Object.create(var1, {constructor: {value: var5}});
            var13 = 'Unsupported interval duration.';
            var14 = var4;
            var1 = new var14[var5](var13, var12);
            var1 = var1 instanceof Object ? var1 : var4;
            throw var1;
case 90:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 17;
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
case 525:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 17;
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
case 524:
            var7 = 7;
            if(!(var8 >= var7)) { _fun0041_ip = 528; continue _fun0041 }
case 529:
            var1 = var8 % var7;
            if(!(var1 !== var3)) { _fun0041_ip = 405; continue _fun0041 }
case 528:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 17;
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
            _fun0041_ip = 73; continue _fun0041;
case 405:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 17;
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
case 73:
            return var1;
        }
    };
    var _closure1_slot90 = var32;
    var31 = function getExternalSubscriptionMethodUrl(arg1, arg2) {
        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
case 0:
            var6 = arg1;
            var2 = arg2;
            var3 = _closure1_slot12;
            var3 = var3.APPLE_PARTNER;
            if(!(var3 !== var6)) { _fun0042_ip = 473; continue _fun0042 }
case 31:
            var3 = _closure1_slot12;
            var3 = var3.APPLE_ADVANCED_COMMERCE;
            if(!(var3 !== var6)) { _fun0042_ip = 473; continue _fun0042 }
case 86:
            var3 = _closure1_slot12;
            var3 = var3.APPLE;
            if(!(var3 !== var6)) { _fun0042_ip = 473; continue _fun0042 }
case 523:
            var3 = _closure1_slot12;
            var3 = var3.GOOGLE;
            if(!(var3 !== var6)) { _fun0042_ip = 197; continue _fun0042 }
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
case 197:
            var3 = _closure1_slot52;
            var3 = var3[var2];
            return var3;
case 473:
            var1 = _closure1_slot51;
            var1 = var1[var2];
            return var1;
        }
    };
    var _closure1_slot91 = var31;
    var30 = function getItemsFromNewAdditionalPlans(arg1, arg2) {
        _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var3 = new Array(0);
            var5 = var4.renewalMutations;
            var2 = null;
            var7 = var2 == var5;
            var6 = undefined;
            if(var7) { _fun0043_ip = 41; continue _fun0043 }
case 3:
            var6 = var5.items;
case 41:
            if(!(var2 == var6)) { _fun0043_ip = 2; continue _fun0043 }
case 480:
            var6 = var4.items;
case 2:
            var5 = var6.find;
            var4 = function(arg1) {
                var3 = _closure1_slot32;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.planId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var5.bind(var6)(var4);
            if(!(var2 != var4)) { _fun0043_ip = 93; continue _fun0043 }
case 530:
            var2 = var3.push;
            var2 = var2.bind(var3)(var4);
case 93:
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
                _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
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
                    if(var2) { _fun0044_ip = 531; continue _fun0044 }
case 77:
                    var3 = var4.value;
                    var7 = var1.planId;
                    var2 = var3.planId;
                    if(!(var7 !== var2)) { _fun0044_ip = 82; continue _fun0044 }
case 530:
                    var7 = var5.bind(var6)();
                    var2 = var7.done;
                    var4 = var7;
                    if(var2) { _fun0044_ip = 531; continue _fun0044 }
case 532:
                    _fun0044_ip = 77; continue _fun0044;
case 82:
                    var2 = {};
                    var9 = var2;
                    var8 = var3;
                    var3 = copyDataProperties(var9, var8);
                    var9 = var2;
                    var8 = var1;
                    var3 = copyDataProperties(var9, var8);
                    return var2;
case 531:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot92 = var30;
    var29 = function getItemsWithoutPremiumPlanItem(arg1) {
        var3 = arg1;
        var2 = var3.filter;
        var1 = function(arg1) {
            var3 = _closure1_slot32;
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
    var _closure1_slot93 = var29;
    var28 = function getItemsWithUpsertedPlanIdForGroup(arg1, arg2, arg3, arg4) {
        _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
            var2 = arg1;
            var7 = arg2;
            var6 = arg3;
            var8 = arg4;
            var _closure2_slot0 = var7;
            var _closure2_slot1 = var6;
            var _closure2_slot2 = var8;
            var3 = var8.has;
            var3 = var3.bind(var8)(var7);
            if(var3) { _fun0045_ip = 477; continue _fun0045 }
case 53:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 27;
            var4 = var4[var3];
            var3 = undefined;
            var3 = var5.bind(var3)(var4);
            var5 = var3.CheckoutError;
            var3 = {};
            var4 = 'Expected planId in group';
            var3['message'] = var4;
            var4 = {};
            var4['newPlanId'] = var7;
            var4['planGroup'] = var8;
            var3['extraSentryInformation'] = var4;
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var11 = var4;
            var10 = var3;
            var3 = new var11[var5](var10, var9);
            var3 = var3 instanceof Object ? var3 : var4;
            throw var3;
case 477:
            var3 = false;
            var _closure2_slot3 = var3;
            var3 = var2.renewalMutations;
            var5 = null;
            var4 = var5 == var3;
            var8 = undefined;
            if(var4) { _fun0045_ip = 475; continue _fun0045 }
case 527:
            var8 = var3.items;
case 475:
            if(!(var5 == var8)) { _fun0045_ip = 87; continue _fun0045 }
case 88:
            var8 = var2.items;
case 87:
            var4 = var8.map;
            var3 = function(arg1) {
                _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
                    var4 = arg1;
                    var5 = _closure2_slot2;
                    var2 = var5.has;
                    var1 = var4.planId;
                    var2 = var2.bind(var5)(var1);
                    var1 = var4;
                    if(!var2) { _fun0046_ip = 108; continue _fun0046 }
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
case 108:
                    return var1;
                }
            };
            var3 = var4.bind(var8)(var3);
            var4 = _closure2_slot3;
            if(var4) { _fun0045_ip = 460; continue _fun0045 }
case 19:
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
            if(!(var5 != var2)) { _fun0045_ip = 533; continue _fun0045 }
case 534:
            var2 = var2.id;
            var4['id'] = var2;
case 533:
            var2 = var3.push;
            var2 = var2.bind(var3)(var4);
case 460:
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
    var _closure1_slot94 = var28;
    var27 = function getGuildBoostPlanItem(arg1) {
        _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var3 = var1 == var2;
            if(var3) { _fun0047_ip = 41; continue _fun0047 }
case 79:
            var4 = var2.items;
            var3 = var4.find;
            var2 = function(arg1) {
                var3 = _closure1_slot31;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.planId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 41:
            return var1;
        }
    };
    var _closure1_slot95 = var27;
    var26 = function isBoostOnlySubscription(arg1) {
        _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
            var5 = arg1;
            var3 = null;
            var1 = var3 != var5;
            if(!var1) { _fun0048_ip = 3; continue _fun0048 }
case 79:
            var4 = _closure1_slot59;
            var2 = undefined;
            var2 = var4.bind(var2)(var5);
            var1 = var3 == var2;
case 3:
            if(!var1) { _fun0048_ip = 523; continue _fun0048 }
case 33:
            var4 = _closure1_slot95;
            var2 = undefined;
            var2 = var4.bind(var2)(var5);
            var1 = var3 != var2;
case 523:
            return var1;
        }
    };
    var25 = function getPremiumSkuIdForSubscription(arg1) {
        _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            var3 = var1 != var5;
            var2 = null;
            if(!var3) { _fun0049_ip = 34; continue _fun0049 }
case 32:
            var4 = _closure1_slot59;
            var3 = undefined;
            var2 = var4.bind(var3)(var5);
case 34:
            var3 = var1 != var2;
            var1 = null;
            if(!var3) { _fun0049_ip = 462; continue _fun0049 }
case 86:
            var4 = _closure1_slot72;
            var3 = var2.planId;
            var2 = undefined;
            var1 = var4.bind(var2)(var3);
case 462:
            return var1;
        }
    };
    var24 = function getPremiumTypeFromSubscription(arg1) {
        _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
            var5 = arg1;
            var4 = null;
            if(!(var4 != var5)) { _fun0050_ip = 50; continue _fun0050 }
case 463:
            var1 = _closure1_slot59;
            var3 = undefined;
            var1 = var1.bind(var3)(var5);
            if(!(var4 == var1)) { _fun0050_ip = 104; continue _fun0050 }
case 50:
            var4 = undefined;
            return var4;
case 104:
            var2 = _closure1_slot69;
            var1 = var1.planId;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var23 = function isNewUser(arg1) {
        _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0051_ip = 130; continue _fun0051 }
case 79:
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
case 130:
            return var1;
        }
    };
    var79 = function canUseQuestOrbMultiplier(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 29;
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
    var _closure1_slot96 = var79;
    var78 = function canUseCollectibles(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 29;
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
    var _closure1_slot97 = var78;
    var22 = function formatPriceString(arg1, arg2) {
        var2 = arg1;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 22;
        var4 = var4[var3];
        var3 = undefined;
        var6 = var5.bind(var3)(var4);
        var5 = var6.formatPrice;
        var4 = var2.amount;
        var2 = var2.currency;
        var5 = var5.bind(var6)(var4, var2);
        var2 = _closure1_slot68;
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
    var _closure1_slot98 = var22;
    var21 = function castPremiumSubscriptionAsSkuId(arg1) {
        var1 = arg1;
        return var1;
    };
    var17 = function isTrialOffer(arg1) {
        _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0052_ip = 29; continue _fun0052 }
case 79:
            var2 = 'trial_id';
            var1 = var2 in var3;
case 29:
            return var1;
        }
    };
    var _closure1_slot99 = var17;
    var16 = function isDiscountOffer(arg1) {
        _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0053_ip = 29; continue _fun0053 }
case 79:
            var2 = 'discountId';
            var1 = var2 in var3;
case 29:
            return var1;
        }
    };
    var _closure1_slot100 = var16;
    var15 = function formatInterval(arg1) {
        _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
case 0:
            var5 = arg1;
            var2 = _closure1_slot41;
            var2 = var2.YEAR;
            if(!(var5 !== var2)) { _fun0054_ip = 139; continue _fun0054 }
case 31:
            var2 = _closure1_slot41;
            var2 = var2.MONTH;
            if(!(var5 !== var2)) { _fun0054_ip = 470; continue _fun0054 }
case 86:
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
case 470:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 17;
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
case 139:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 17;
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
    var14 = function isPremiumEligible(arg1) {
        _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0055_ip = 48; continue _fun0055 }
case 79:
            var3 = var2.isProvisional;
            var1 = !var3;
case 48:
            if(!var1) { _fun0055_ip = 33; continue _fun0055 }
case 38:
            var2 = var2.bot;
            var1 = !var2;
case 33:
            return var1;
        }
    };
    var13 = function getFractionalPremiumUnitsHours(arg1) {
        var4 = arg1;
        var3 = _closure1_slot102;
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
    var _closure1_slot101 = var13;
    var12 = function getFractionalPremiumUnitsHoursFromSkuIds(arg1) {
        var4 = arg1;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
case 0:
                var5 = _closure1_slot3;
                var2 = _closure1_slot23;
                var1 = arg2;
                var4 = var2[var1];
                var2 = undefined;
                var1 = 2;
                var1 = var5.bind(var2)(var4, var1);
                var2 = 0;
                var4 = var1[var2];
                var5 = 1;
                var2 = var1[var5];
                var1 = _closure1_slot24;
                var6 = var1.HOUR;
                var1 = var5;
                if(!(var6 !== var4)) { _fun0056_ip = 108; continue _fun0056 }
case 78:
                var3 = _closure1_slot24;
                var3 = var3.DAY;
                var1 = var5;
                if(!(var3 === var4)) { _fun0056_ip = 108; continue _fun0056 }
case 93:
                var1 = 24;
case 108:
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
    var _closure1_slot102 = var12;
    var11 = function getMonthlyPrice(arg1) {
        _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
case 0:
            var2 = arg1;
            var1 = var2.subscriptionPlan;
            var7 = var2.isGift;
            var6 = undefined;
            if(!(var7 === var6)) { _fun0057_ip = 31; continue _fun0057 }
case 48:
            var7 = false;
case 31:
            var5 = var2.priceOptions;
            if(!(var5 === var6)) { _fun0057_ip = 51; continue _fun0057 }
case 33:
            var5 = {};
case 51:
            var3 = _closure1_slot33;
            var1 = var1.skuId;
            var4 = var3[var1];
            var1 = null;
            var3 = var1 == var4;
            if(var3) { _fun0057_ip = 532; continue _fun0057 }
case 468:
            var3 = _closure1_slot62;
            var10 = false;
            var12 = undefined;
            var11 = var4;
            var9 = var7;
            var8 = var5;
            var1 = var12[var3](var11, var10, var9, var8, var7);
case 532:
            return var1;
        }
    };
    var _closure1_slot103 = var11;
    var9 = function calculateMonthlyPriceEquivalentTotal(arg1) {
        _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
case 0:
            var1 = arg1;
            var4 = var1.subscriptionPlan;
            var7 = var1.isGift;
            var5 = undefined;
            if(!(var7 === var5)) { _fun0058_ip = 31; continue _fun0058 }
case 48:
            var7 = false;
case 31:
            var6 = var1.priceOptions;
            if(!(var6 === var5)) { _fun0058_ip = 51; continue _fun0058 }
case 33:
            var6 = {};
case 51:
            var2 = var4.interval;
            var1 = _closure1_slot41;
            var1 = var1.DAY;
            if(!(var2 !== var1)) { _fun0058_ip = 90; continue _fun0058 }
case 7:
            var2 = var4.interval;
            var1 = _closure1_slot41;
            var1 = var1.MONTH;
            if(!(var2 === var1)) { _fun0058_ip = 455; continue _fun0058 }
case 532:
            var2 = var4.intervalCount;
            var1 = 1;
            if(!(var1 !== var2)) { _fun0058_ip = 535; continue _fun0058 }
case 455:
            var2 = _closure1_slot103;
            var1 = {};
            var1['subscriptionPlan'] = var4;
            var1['isGift'] = var7;
            var1['priceOptions'] = var6;
            var2 = var2.bind(var5)(var1);
            var1 = null;
            if(!(var1 != var2)) { _fun0058_ip = 16; continue _fun0058 }
case 477:
            var5 = var4.interval;
            var3 = _closure1_slot41;
            var3 = var3.MONTH;
            if(!(var5 !== var3)) { _fun0058_ip = 392; continue _fun0058 }
case 536:
            var5 = var4.intervalCount;
            var3 = 12;
            var3 = var3 * var5;
            _fun0058_ip = 537; continue _fun0058;
case 392:
            var3 = var4.intervalCount;
case 537:
            var2 = var2.amount;
            var2 = var2 * var3;
            return var2;
case 16:
            return var1;
case 535:
            var1 = null;
            return var1;
case 90:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot104 = var9;
    var8 = function calculateDiscountPercentageForYearlyPlan(arg1) {
        _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
case 0:
            var8 = arguments[1];
            var7 = arguments[2];
            var6 = arg1;
            var1 = undefined;
            if(!(var8 === var1)) { _fun0059_ip = 467; continue _fun0059 }
case 47:
            var8 = false;
case 467:
            var5 = var8;
            if(!(var7 === var1)) { _fun0059_ip = 37; continue _fun0059 }
case 38:
            var7 = {};
case 37:
            var4 = var7;
            var2 = undefined;
            var3 = undefined;
            var7 = var6;
            var9 = var7.interval;
            var8 = _closure1_slot41;
            var8 = var8.YEAR;
            if(!(var9 === var8)) { _fun0059_ip = 199; continue _fun0059 }
case 78: // try_start_0
            var9 = _closure1_slot103;
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
            if(!(var8 != var9)) { _fun0059_ip = 201; continue _fun0059 }
case 385:
            var8 = _closure1_slot62;
            var14 = var6.id;
            var12 = var5;
            var11 = var4;
            var13 = false;
            var15 = undefined;
            var3 = var15[var8](var14, var13, var12, var11, var10);
case 477: // try_end0
            var4 = var2;
            var5 = var4.amount;
            var4 = 0;
            if(!(var4 === var5)) { _fun0059_ip = 538; continue _fun0059 }
case 199:
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
case 201:
            return var1;
case 539: // catch_target0
            CatchBlockStart(arg_register=1);
            return var1;
        }
    };
    var _closure1_slot105 = var8;
    var7 = function calculateYearlyPlanDollarSavingsAmount(arg1) {
        _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
case 0:
            var2 = arg1;
            var9 = arguments[1];
            var8 = arguments[2];
            var7 = undefined;
            if(!(var9 === var7)) { _fun0060_ip = 467; continue _fun0060 }
case 47:
            var9 = false;
case 467:
            if(!(var8 === var7)) { _fun0060_ip = 31; continue _fun0060 }
case 48:
            var8 = {};
case 31:
            var3 = _closure1_slot104;
            var1 = {};
            var1['subscriptionPlan'] = var2;
            var1['isGift'] = var9;
            var1['priceOptions'] = var8;
            var5 = var3.bind(var7)(var1);
            var1 = null;
            if(!(var1 != var5)) { _fun0060_ip = 477; continue _fun0060 }
case 397:
            var3 = 0;
            if(!(!(var5 <= var3))) { _fun0060_ip = 477; continue _fun0060 }
case 396:
            var6 = _closure1_slot62;
            var13 = var2.id;
            var12 = false;
            var14 = undefined;
            var11 = var9;
            var10 = var8;
            var4 = var14[var6](var13, var12, var11, var10, var9);
            var2 = var4.amount;
            var5 = var5 - var2;
            var2 = null;
            if(!(!(var5 <= var3))) { _fun0060_ip = 540; continue _fun0060 }
case 385:
            var3 = {};
            var3['amount'] = var5;
            var4 = var4.currency;
            var3['currency'] = var4;
            var2 = var3;
case 540:
            return var2;
case 477:
            return var1;
        }
    };
    var _closure1_slot106 = var7;
    var6 = function calculateYearlyPlanMonthsSaved(arg1) {
        _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
case 0:
            var8 = arg1;
            var7 = arguments[1];
            var6 = arguments[2];
            var5 = undefined;
            if(!(var7 === var5)) { _fun0061_ip = 467; continue _fun0061 }
case 47:
            var7 = false;
case 467:
            if(!(var6 === var5)) { _fun0061_ip = 31; continue _fun0061 }
case 48:
            var6 = {};
case 31:
            var2 = var8.interval;
            var1 = _closure1_slot41;
            var1 = var1.YEAR;
            if(!(var2 === var1)) { _fun0061_ip = 202; continue _fun0061 }
case 2:
            var2 = _closure1_slot103;
            var1 = {};
            var1['subscriptionPlan'] = var8;
            var1['isGift'] = var7;
            var1['priceOptions'] = var6;
            var2 = var2.bind(var5)(var1);
            var1 = null;
            if(!(var1 != var2)) { _fun0061_ip = 541; continue _fun0061 }
case 56:
            var9 = var2.amount;
            var4 = 0;
            if(!(var4 !== var9)) { _fun0061_ip = 541; continue _fun0061 }
case 377:
            var3 = _closure1_slot106;
            var3 = var3.bind(var5)(var8, var7, var6);
            if(!(var1 != var3)) { _fun0061_ip = 542; continue _fun0061 }
case 44:
            var5 = global;
            var6 = var5.Math;
            var5 = var6.floor;
            var3 = var3.amount;
            var2 = var2.amount;
            var2 = var3 / var2;
            var3 = 2;
            var2 = var2 * var3;
            var2 = var5.bind(var6)(var2);
            var3 = var2 / var3;
            var2 = null;
            if(!(!(var3 <= var4))) { _fun0061_ip = 543; continue _fun0061 }
case 478:
            var2 = var3;
case 543:
            return var2;
case 542:
            return var1;
case 541:
            return var1;
case 202:
            var1 = null;
            return var1;
        }
    };
    var5 = function calculateYearlyPlanMonthlyRateAmount(arg1) {
        _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
case 0:
            var1 = arg1;
            var6 = arguments[1];
            var5 = arguments[2];
            var4 = undefined;
            if(!(var6 === var4)) { _fun0062_ip = 467; continue _fun0062 }
case 47:
            var6 = false;
case 467:
            if(!(var5 === var4)) { _fun0062_ip = 31; continue _fun0062 }
case 48:
            var5 = {};
case 31:
            var7 = var1.interval;
            var3 = _closure1_slot41;
            var3 = var3.YEAR;
            if(!(var7 === var3)) { _fun0062_ip = 544; continue _fun0062 }
case 2:
            var3 = _closure1_slot62;
            var11 = var1.id;
            var10 = false;
            var12 = undefined;
            var9 = var6;
            var8 = var5;
            var3 = var12[var3](var11, var10, var9, var8, var7);
            var4 = var3.amount;
            var2 = 0;
            var1 = null;
            if(!(var2 !== var4)) { _fun0062_ip = 526; continue _fun0062 }
case 82:
            var2 = {};
            var4 = global;
            var6 = var4.Math;
            var5 = var6.round;
            var7 = var3.amount;
            var4 = 12;
            var4 = var7 / var4;
            var4 = var5.bind(var6)(var4);
            var2['amount'] = var4;
            var3 = var3.currency;
            var2['currency'] = var3;
            var1 = var2;
case 526:
            return var1;
case 544:
            var1 = null;
            return var1;
        }
    };
    var4 = function getDaysSincePremium(arg1) {
        _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
case 0:
            var10 = arg1;
            var1 = null;
            var2 = var1 == var10;
            var5 = 0;
            var1 = 0;
            if(var2) { _fun0063_ip = 473; continue _fun0063 }
case 545:
            var2 = global;
            var4 = var2.Math;
            var3 = var4.max;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var6 = 20;
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
case 473:
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
        var6 = 20;
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
    var18 = global;
    var76 = var18.Object;
    var75 = var76.defineProperty;
    var73 = {};
    var1 = true;
    var73['value'] = var1;
    var1 = '__esModule';
    var1 = var75.bind(var76)(var3, var1, var73);
    var1 = 0;
    var73 = var20[var1];
    var1 = undefined;
    var73 = var74.bind(var1)(var73);
    var _closure1_slot3 = var73;
    var73 = 1;
    var75 = var20[var73];
    var73 = metroImportAll;
    var73 = var73.bind(var1)(var75);
    var _closure1_slot4 = var73;
    var73 = 2;
    var73 = var20[var73];
    var73 = var19.bind(var1)(var73);
    var80 = var73.isNoneSubscription;
    var _closure1_slot5 = var80;
    var73 = 3;
    var73 = var20[var73];
    var73 = var74.bind(var1)(var73);
    var _closure1_slot6 = var73;
    var73 = 4;
    var73 = var20[var73];
    var73 = var74.bind(var1)(var73);
    var _closure1_slot7 = var73;
    var73 = 5;
    var73 = var20[var73];
    var73 = var74.bind(var1)(var73);
    var _closure1_slot8 = var73;
    var73 = 6;
    var73 = var20[var73];
    var73 = var74.bind(var1)(var73);
    var _closure1_slot9 = var73;
    var73 = 7;
    var73 = var20[var73];
    var73 = var74.bind(var1)(var73);
    var _closure1_slot10 = var73;
    var73 = 8;
    var73 = var20[var73];
    var73 = var19.bind(var1)(var73);
    var75 = var73.InvoiceStatusTypes;
    var _closure1_slot11 = var75;
    var75 = var73.PaymentGateways;
    var _closure1_slot12 = var75;
    var75 = var73.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot13 = var75;
    var73 = var73.SubscriptionStatusTypes;
    var _closure1_slot14 = var73;
    var73 = 9;
    var73 = var20[var73];
    var73 = var19.bind(var1)(var73);
    var75 = var73.DISCOUNTS;
    var _closure1_slot15 = var75;
    var75 = var73.ANNUAL_DISCOUNT_PERCENTAGE_FALLBACK;
    var _closure1_slot16 = var75;
    var75 = var73.DEFAULT_APPLE_GRACE_PERIOD_DAYS;
    var _closure1_slot17 = var75;
    var75 = var73.DEFAULT_GOOGLE_GRACE_PERIOD_DAYS;
    var _closure1_slot18 = var75;
    var75 = var73.DEFAULT_MAX_GRACE_PERIOD_DAYS;
    var _closure1_slot19 = var75;
    var75 = var73.DISCOUNT_DURATION_FALLBACK;
    var _closure1_slot20 = var75;
    var75 = var73.DISCOUNT_PERCENTAGE_FALLBACK;
    var _closure1_slot21 = var75;
    var75 = var73.DiscountUserUsageLimitIntervalTypes;
    var _closure1_slot22 = var75;
    var75 = var73.FRACTIONAL_PREMIUM_SKU_INTERVAL_COUNTS;
    var _closure1_slot23 = var75;
    var75 = var73.FractionalPremiumIntervalTypes;
    var _closure1_slot24 = var75;
    var75 = var73.FractionalPremiumStates;
    var _closure1_slot25 = var75;
    var75 = var73.MAX_ACCOUNT_HOLD_DAYS;
    var _closure1_slot26 = var75;
    var75 = var73.MAX_PAYMENT_PROCESSING_TIME_DAYS;
    var _closure1_slot27 = var75;
    var75 = var73.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM;
    var _closure1_slot28 = var75;
    var75 = var73.PAID_SUBSCRIPTION_MAX_BILLING_RETRY_DAYS;
    var _closure1_slot29 = var75;
    var75 = var73.PAID_SUBSCRIPTION_MAX_GRACE_PERIOD_DAYS;
    var _closure1_slot30 = var75;
    var75 = var73.PREMIUM_GUILD_SUBSCRIPTION_PLANS;
    var _closure1_slot31 = var75;
    var75 = var73.PREMIUM_PLANS;
    var _closure1_slot32 = var75;
    var75 = var73.PREMIUM_SKU_TO_MONTHLY_PLAN;
    var _closure1_slot33 = var75;
    var75 = var73.PREMIUM_TIER_2_PLANS;
    var _closure1_slot34 = var75;
    var75 = var73.PREMIUM_TIER_2_REVERSE_FOLLOWUP_TRIAL_ID;
    var _closure1_slot35 = var75;
    var75 = var73.PREMIUM_TIER_2_TRIAL_FOR_EVERYONE_TRIAL_ID;
    var _closure1_slot36 = var75;
    var75 = var73.PREMIUM_TYPE_DISPLAY_NAME;
    var _closure1_slot37 = var75;
    var75 = var73.PremiumSubscriptionSKUs;
    var _closure1_slot38 = var75;
    var75 = var73.PremiumTypes;
    var _closure1_slot39 = var75;
    var75 = var73.PremiumUserLimits;
    var _closure1_slot40 = var75;
    var75 = var73.SubscriptionIntervalTypes;
    var _closure1_slot41 = var75;
    var75 = var73.SubscriptionPlanInfo;
    var _closure1_slot42 = var75;
    var76 = var73.SubscriptionPlans;
    var _closure1_slot43 = var76;
    var75 = var73.TRIAL_FOR_EVERYONE_OFFER_EXPIRES_APPROACHING_THRESHOLD;
    var _closure1_slot44 = var75;
    var75 = var73.USER_PREMIUM_OFFER_EXPIRES_APPROACHING_4_DAY_THRESHOLD;
    var _closure1_slot45 = var75;
    var73 = var73.USER_PREMIUM_OFFER_EXPIRES_APPROACHING_7_DAY_THRESHOLD;
    var _closure1_slot46 = var73;
    var73 = 10;
    var73 = var20[var73];
    var73 = var19.bind(var1)(var73);
    var73 = var73.getPremiumGroupProductName;
    var _closure1_slot47 = var73;
    var73 = 11;
    var73 = var20[var73];
    var73 = var19.bind(var1)(var73);
    var75 = var73.CurrencyCodes;
    var _closure1_slot48 = var75;
    var75 = var73.PaymentGatewayToFriendlyName;
    var _closure1_slot49 = var75;
    var73 = var73.PREPAID_PAYMENT_SOURCES;
    var _closure1_slot50 = var73;
    var73 = {'PAYMENT_SOURCE_MANAGEMENT': 'https://support.apple.com/HT201266', 'BILLING_HISTORY': 'https://support.apple.com/HT201266', 'SUBSCRIPTION_MANAGEMENT': 'https://support.apple.com/HT202039'};
    var _closure1_slot51 = var73;
    var73 = {'SUBSCRIPTION_MANAGEMENT': 'https://play.google.com/store/account/subscriptions', 'PAYMENT_SOURCE_MANAGEMENT': 'https://play.google.com/store/paymentmethods', 'BILLING_HISTORY': 'https://play.google.com/store/account/orderhistory'};
    var _closure1_slot52 = var73;
    var73 = 12;
    var73 = var20[var73];
    var75 = var74.bind(var1)(var73);
    var73 = var75.prototype;
    var74 = Object.create(var73, {constructor: {value: var75}});
    var86 = 'PremiumUtils.tsx';
    var87 = var74;
    var73 = new var87[var75](var86, var85);
    var73 = var73 instanceof Object ? var73 : var74;
    var _closure1_slot53 = var73;
    var74 = {};
    var73 = 'bundle';
    var74['BUNDLE'] = var73;
    var73 = 'tier_0';
    var74['TIER_0'] = var73;
    var73 = 'tier_1';
    var74['TIER_1'] = var73;
    var73 = 'tier_2';
    var74['TIER_2'] = var73;
    var73 = 'premium_guild';
    var74['PREMIUM_GUILD'] = var73;
    var _closure1_slot54 = var74;
    var73 = {};
    var75 = 'mid';
    var73['MID'] = var75;
    var75 = 'high';
    var73['HIGH'] = var75;
    var _closure1_slot55 = var73;
    var77 = var18.Set;
    var83 = var76.NONE_MONTH;
    var75 = new Array(13);
    var75[0] = var83;
    var83 = var76.NONE_3_MONTH;
    var75[1] = var83;
    var83 = var76.NONE_6_MONTH;
    var75[2] = var83;
    var83 = var76.NONE_YEAR;
    var75[3] = var83;
    var83 = var76.PREMIUM_MONTH_TIER_0;
    var75[4] = var83;
    var83 = var76.PREMIUM_MONTH_TIER_1;
    var75[5] = var83;
    var83 = var76.PREMIUM_MONTH_TIER_2;
    var75[6] = var83;
    var83 = var76.PREMIUM_YEAR_TIER_0;
    var75[7] = var83;
    var83 = var76.PREMIUM_YEAR_TIER_1;
    var75[8] = var83;
    var83 = var76.PREMIUM_YEAR_TIER_2;
    var75[9] = var83;
    var83 = var76.PREMIUM_3_MONTH_TIER_2;
    var75[10] = var83;
    var83 = var76.PREMIUM_6_MONTH_TIER_2;
    var75[11] = var83;
    var76 = var76.PREMIUM_GROUP_MONTH;
    var75[12] = var76;
    var76 = var77.prototype;
    var76 = Object.create(var76, {constructor: {value: var77}});
    var87 = var76;
    var86 = var75;
    var75 = new var87[var77](var86, var85);
    var75 = var75 instanceof Object ? var75 : var76;
    var _closure1_slot56 = var75;
    var77 = var18.Object;
    var76 = var77.freeze;
    var75 = {};
    var75['isNewUser'] = var23;
    var18 = 15;
    var83 = var20[var18];
    var83 = var19.bind(var1)(var83);
    var83 = var83.isPremiumAtLeast;
    var75['isPremiumAtLeast'] = var83;
    var83 = var20[var18];
    var83 = var19.bind(var1)(var83);
    var83 = var83.isPremium;
    var75['isPremium'] = var83;
    var83 = var20[var18];
    var83 = var19.bind(var1)(var83);
    var83 = var83.isPremiumExactly;
    var75['isPremiumExactly'] = var83;
    var75['isPremiumEligible'] = var14;
    var75['getPrice'] = var69;
    var75['getDefaultPrice'] = var71;
    var75['getInterval'] = var64;
    var75['getIntervalString'] = var63;
    var75['getIntervalStringAsNoun'] = var62;
    var75['getPremiumType'] = var61;
    var75['getTierDisplayNameByPlanId'] = var59;
    var75['getDisplayName'] = var60;
    var75['getPremiumPlanOptions'] = var58;
    var75['formatInterval'] = var15;
    var75['getPlanDescription'] = var82;
    var82 = function isPremiumSku(arg1) {
        _fun0064: for(var _fun0064_ip = 0; ; ) switch(_fun0064_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot38;
            var1 = var1.TIER_0;
            var1 = var3 === var1;
            if(var1) { _fun0064_ip = 86; continue _fun0064 }
case 31:
            var4 = _closure1_slot38;
            var4 = var4.TIER_1;
            var1 = var3 === var4;
case 86:
            if(var1) { _fun0064_ip = 196; continue _fun0064 }
case 480:
            var2 = _closure1_slot38;
            var2 = var2.TIER_2;
            var1 = var3 === var2;
case 196:
            return var1;
        }
    };
    var75['isPremiumSku'] = var82;
    var82 = function getIntervalMonths(arg1, arg2) {
        _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
case 0:
            var6 = arg1;
            var1 = arg2;
            var3 = _closure1_slot41;
            var3 = var3.MONTH;
            if(!(var6 !== var3)) { _fun0065_ip = 385; continue _fun0065 }
case 31:
            var2 = _closure1_slot41;
            var2 = var2.YEAR;
            if(!(var6 !== var2)) { _fun0065_ip = 455; continue _fun0065 }
case 86:
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
case 455:
            var2 = 12;
            var2 = var2 * var1;
            return var2;
case 385:
            return var1;
        }
    };
    var75['getIntervalMonths'] = var82;
    var82 = 33;
    var82 = var20[var82];
    var82 = var19.bind(var1)(var82);
    var82 = var82.getUserMaxFileSize;
    var75['getUserMaxFileSize'] = var82;
    var75['getSkuIdForPlan'] = var81;
    var81 = function getSkuIdForPremiumType(arg1) {
        _fun0066: for(var _fun0066_ip = 0; ; ) switch(_fun0066_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot39;
            var2 = var2.TIER_0;
            if(!(var2 !== var3)) { _fun0066_ip = 93; continue _fun0066 }
case 29:
            var2 = _closure1_slot39;
            var2 = var2.TIER_1;
            if(!(var2 !== var3)) { _fun0066_ip = 396; continue _fun0066 }
case 127:
            var2 = _closure1_slot39;
            var2 = var2.TIER_2;
            if(!(var2 !== var3)) { _fun0066_ip = 546; continue _fun0066 }
case 547:
            var2 = undefined;
            return var2;
case 546:
            var2 = _closure1_slot38;
            var2 = var2.TIER_2;
            return var2;
case 396:
            var2 = _closure1_slot38;
            var2 = var2.TIER_1;
            return var2;
case 93:
            var1 = _closure1_slot38;
            var1 = var1.TIER_0;
            return var1;
        }
    };
    var75['getSkuIdForPremiumType'] = var81;
    var81 = function getNumIncludedPremiumGuildSubscriptionSlots(arg1) {
        _fun0067: for(var _fun0067_ip = 0; ; ) switch(_fun0067_ip) {
case 0:
            var4 = _closure1_slot69;
            var3 = undefined;
            var1 = arg1;
            var4 = var4.bind(var3)(var1);
            var1 = _closure1_slot39;
            var3 = var1.TIER_2;
            var1 = 0;
            if(!(var4 === var3)) { _fun0067_ip = 86; continue _fun0067 }
case 33:
            var1 = _closure1_slot28;
case 86:
            return var1;
        }
    };
    var75['getNumIncludedPremiumGuildSubscriptionSlots'] = var81;
    var75['getBillingInformationString'] = var51;
    var75['getExpectedRenewalDate'] = var52;
    var75['extendDateWithUnconsumedFractionalPremium'] = var50;
    var75['getUnactivatedFractionalPremiumDurationString'] = var49;
    var75['isSwitchingPlansDisabled'] = var48;
    var75['getSwitchingPlansDisabledMessage'] = var47;
    var75['isNoneSubscription'] = var80;
    var75['getPlanIdFromInvoice'] = var41;
    var75['getStatusFromInvoice'] = var40;
    var75['isBaseSubscriptionCanceled'] = var39;
    var75['getPremiumGuildIntervalPrice'] = var36;
    var80 = function hasAccountCredit(arg1) {
        _fun0068: for(var _fun0068_ip = 0; ; ) switch(_fun0068_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0068_ip = 31; continue _fun0068 }
case 79:
            var3 = var4.size;
            var2 = 0;
            var1 = var2 !== var3;
case 31:
            if(!var1) { _fun0068_ip = 43; continue _fun0068 }
case 37:
            var2 = global;
            var3 = var2.Array;
            var2 = var3.from;
            var4 = var2.bind(var3)(var4);
            var3 = var4.some;
            var2 = function(arg1) {
                _fun0069: for(var _fun0069_ip = 0; ; ) switch(_fun0069_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.subscriptionPlanId;
                    var4 = var2.parentId;
                    var2 = var2.consumed;
                    var3 = null;
                    var1 = var3 != var1;
                    if(!var1) { _fun0069_ip = 127; continue _fun0069 }
case 3:
                    var1 = var3 != var4;
case 127:
                    if(!var1) { _fun0069_ip = 480; continue _fun0069 }
case 86:
                    var1 = !var2;
case 480:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
case 43:
            return var1;
        }
    };
    var75['hasAccountCredit'] = var80;
    var80 = function hasUnconsumedGiftForSubscriptionPlan(arg1, arg2) {
        _fun0070: for(var _fun0070_ip = 0; ; ) switch(_fun0070_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var _closure2_slot0 = var4;
            var3 = null;
            var1 = var3 != var5;
            if(!var1) { _fun0070_ip = 39; continue _fun0070 }
case 48:
            var7 = var5.size;
            var6 = 0;
            var1 = var6 !== var7;
case 39:
            if(!var1) { _fun0070_ip = 53; continue _fun0070 }
case 51:
            var1 = var3 != var4;
case 53:
            if(!var1) { _fun0070_ip = 93; continue _fun0070 }
case 194:
            var3 = global;
            var4 = var3.Array;
            var3 = var4.from;
            var4 = var3.bind(var4)(var5);
            var3 = var4.some;
            var2 = function(arg1) {
                _fun0071: for(var _fun0071_ip = 0; ; ) switch(_fun0071_ip) {
case 0:
                    var1 = arg1;
                    var3 = var1.subscriptionPlanId;
                    var5 = var1.parentId;
                    var2 = var1.consumed;
                    var4 = null;
                    var1 = var4 != var3;
                    if(!var1) { _fun0071_ip = 127; continue _fun0071 }
case 3:
                    var1 = var4 != var5;
case 127:
                    if(!var1) { _fun0071_ip = 480; continue _fun0071 }
case 86:
                    var1 = !var2;
case 480:
                    if(!var1) { _fun0071_ip = 196; continue _fun0071 }
case 464:
                    var2 = _closure2_slot0;
                    var1 = var3 === var2;
case 196:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
case 93:
            return var1;
        }
    };
    var75['hasUnconsumedGiftForSubscriptionPlan'] = var80;
    var75['getBillingReviewSubheader'] = var35;
    var75['getIntervalForInvoice'] = var34;
    var75['getPremiumPlanItem'] = var72;
    var75['getGuildBoostPlanItem'] = var27;
    var75['isBoostOnlySubscription'] = var26;
    var75['getPremiumSkuIdForSubscription'] = var25;
    var75['getPremiumTypeFromSubscription'] = var24;
    var75['getUnactivatedFractionalPremiumHours'] = var13;
    var75['castPremiumSubscriptionAsSkuId'] = var21;
    var75['calculateDiscountPercentageForYearlyPlan'] = var8;
    var75['calculateYearlyPlanDollarSavingsAmount'] = var7;
    var75['calculateYearlyPlanMonthsSaved'] = var6;
    var75['calculateYearlyPlanMonthlyRateAmount'] = var5;
    var75['getDaysSincePremium'] = var4;
    var75['getDaysRemainingUntilSubscriptionCurrentPeriodEnds'] = var2;
    var80 = function canUseAnimatedEmojis(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 29;
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
    var75['canUseAnimatedEmojis'] = var80;
    var80 = function canUseEmojisEverywhere(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 29;
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
    var75['canUseEmojisEverywhere'] = var80;
    var80 = function canUseSoundboardEverywhere(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 29;
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
    var75['canUseSoundboardEverywhere'] = var80;
    var80 = function canUseCustomCallSounds(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 29;
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
    var75['canUseCustomCallSounds'] = var80;
    var80 = function canUploadLargeFiles(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 29;
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
    var75['canUploadLargeFiles'] = var80;
    var80 = function canUseBadges(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 29;
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
    var75['canUseBadges'] = var80;
    var80 = function canUseHighVideoUploadQuality(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 29;
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
    var75['canUseHighVideoUploadQuality'] = var80;
    var80 = function canEditDiscriminator(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 29;
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
    var75['canEditDiscriminator'] = var80;
    var80 = function hasBoostDiscount(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 29;
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
    var75['hasBoostDiscount'] = var80;
    var80 = function canUseAnimatedAvatar(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 29;
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
    var75['canUseAnimatedAvatar'] = var80;
    var80 = function canInstallPremiumApplications(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 29;
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
    var75['canInstallPremiumApplications'] = var80;
    var80 = function canUseIncreasedMessageLength(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 29;
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
    var75['canUseIncreasedMessageLength'] = var80;
    var80 = function canUseIncreasedGuildCap(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 29;
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
    var75['canUseIncreasedGuildCap'] = var80;
    var80 = function canRedeemPremiumPerks(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 29;
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
    var75['canRedeemPremiumPerks'] = var80;
    var80 = function canUsePremiumProfileCustomization(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 29;
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
    var75['canUsePremiumProfileCustomization'] = var80;
    var80 = function canUsePremiumAppIcons(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 29;
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
    var75['canUsePremiumAppIcons'] = var80;
    var80 = function canUsePremiumGuildMemberProfile(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 29;
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
    var75['canUsePremiumGuildMemberProfile'] = var80;
    var80 = function canUseClientThemes(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 29;
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
    var75['canUseClientThemes'] = var80;
    var80 = function canStreamQuality(arg1, arg2) {
        _fun0072: for(var _fun0072_ip = 0; ; ) switch(_fun0072_ip) {
case 0:
            var5 = arg2;
            var1 = _closure1_slot55;
            var3 = var1.HIGH;
            var1 = arg1;
            if(!(var1 !== var3)) { _fun0072_ip = 466; continue _fun0072 }
case 31:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 29;
            var3 = var8[var1];
            var6 = undefined;
            var4 = var7.bind(var6)(var3);
            var3 = var4.canUserUse;
            var1 = var8[var1];
            var1 = var7.bind(var6)(var1);
            var1 = var1.STREAM_MID_QUALITY;
            var1 = var3.bind(var4)(var1, var5);
            _fun0072_ip = 548; continue _fun0072;
case 466:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 29;
            var3 = var8[var2];
            var6 = undefined;
            var4 = var7.bind(var6)(var3);
            var3 = var4.canUserUse;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.STREAM_HIGH_QUALITY;
            var1 = var3.bind(var4)(var2, var5);
case 548:
            return var1;
        }
    };
    var75['canStreamQuality'] = var80;
    var75['canUseQuestOrbMultiplier'] = var79;
    var79 = function hasFreeBoosts(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 29;
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
    var75['hasFreeBoosts'] = var79;
    var79 = function canUseCustomStickersEverywhere(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 29;
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
    var75['canUseCustomStickersEverywhere'] = var79;
    var79 = function canUseCustomBackgrounds(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 29;
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
    var75['canUseCustomBackgrounds'] = var79;
    var75['canUseCollectibles'] = var78;
    var78 = function canUseMonthlyOrbs(arg1) {
        _fun0073: for(var _fun0073_ip = 0; ; ) switch(_fun0073_ip) {
case 0:
            var6 = arg1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 30;
            var1 = var4[var1];
            var7 = undefined;
            var4 = var3.bind(var7)(var1);
            var3 = var4.getIsCrepeEnabled;
            var1 = 'canUseMonthlyOrbs';
            var1 = var3.bind(var4)(var1);
            var3 = !var1;
            var1 = !var3;
            if(var3) { _fun0073_ip = 549; continue _fun0073 }
case 546:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 31;
            var3 = var5[var3];
            var5 = var4.bind(var7)(var3);
            var4 = var5.hasPerk;
            var3 = null;
            var8 = var3 == var6;
            var3 = undefined;
            if(var8) { _fun0073_ip = 57; continue _fun0073 }
case 470:
            var3 = var6.perks;
case 57:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 32;
            var2 = var8[var2];
            var2 = var6.bind(var7)(var2);
            var2 = var2.Perk;
            var2 = var2.MONTHLY_ORBS;
            var1 = var4.bind(var5)(var3, var2);
case 549:
            return var1;
        }
    };
    var75['canUseMonthlyOrbs'] = var78;
    var78 = function canUseShopDiscounts(arg1) {
        _fun0074: for(var _fun0074_ip = 0; ; ) switch(_fun0074_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 30;
            var1 = var3[var1];
            var3 = undefined;
            var6 = var5.bind(var3)(var1);
            var5 = var6.getIsCrepeEnabled;
            var1 = 'canUseShopDiscounts';
            var1 = var5.bind(var6)(var1);
            if(!var1) { _fun0074_ip = 473; continue _fun0074 }
case 2:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 31;
            var5 = var7[var5];
            var8 = var6.bind(var3)(var5);
            var7 = var8.hasPerk;
            var5 = null;
            var5 = var5 == var4;
            var6 = undefined;
            if(var5) { _fun0074_ip = 470; continue _fun0074 }
case 82:
            var6 = var4.perks;
case 470:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 32;
            var5 = var10[var5];
            var5 = var9.bind(var3)(var5);
            var5 = var5.Perk;
            var5 = var5.SHOP_DISCOUNTS;
            var1 = var7.bind(var8)(var6, var5);
case 473:
            if(var1) { _fun0074_ip = 550; continue _fun0074 }
case 551:
            var2 = _closure1_slot97;
            var1 = var2.bind(var3)(var4);
case 550:
            return var1;
        }
    };
    var75['canUseShopDiscounts'] = var78;
    var78 = function canUseMoreQuestOrbs(arg1) {
        _fun0075: for(var _fun0075_ip = 0; ; ) switch(_fun0075_ip) {
case 0:
            var4 = arg1;
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 30;
            var1 = var3[var1];
            var3 = undefined;
            var6 = var5.bind(var3)(var1);
            var5 = var6.getIsCrepeEnabled;
            var1 = 'canUseMoreQuestOrbs';
            var1 = var5.bind(var6)(var1);
            if(!var1) { _fun0075_ip = 473; continue _fun0075 }
case 2:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var5 = 31;
            var5 = var7[var5];
            var8 = var6.bind(var3)(var5);
            var7 = var8.hasPerk;
            var5 = null;
            var5 = var5 == var4;
            var6 = undefined;
            if(var5) { _fun0075_ip = 470; continue _fun0075 }
case 82:
            var6 = var4.perks;
case 470:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 32;
            var5 = var10[var5];
            var5 = var9.bind(var3)(var5);
            var5 = var5.Perk;
            var5 = var5.MORE_QUEST_ORBS;
            var1 = var7.bind(var8)(var6, var5);
case 473:
            if(var1) { _fun0075_ip = 550; continue _fun0075 }
case 551:
            var2 = _closure1_slot96;
            var1 = var2.bind(var3)(var4);
case 550:
            return var1;
        }
    };
    var75['canUseMoreQuestOrbs'] = var78;
    var75['formatPriceString'] = var22;
    var75['StreamQuality'] = var73;
    var75 = var76.bind(var77)(var75);
    var76 = 34;
    var76 = var20[var76];
    var78 = var19.bind(var1)(var76);
    var77 = var78.fileFinishedImporting;
    var76 = 'utils/PremiumUtils.tsx';
    var76 = var77.bind(var78)(var76);
    var3['default'] = var75;
    var3['Branding'] = var74;
    var3['StreamQuality'] = var73;
    var73 = function getPremiumBranding(arg1) {
        _fun0076: for(var _fun0076_ip = 0; ; ) switch(_fun0076_ip) {
case 0:
            var5 = arg1;
            var3 = var5.planId;
            var4 = _closure1_slot32;
            var1 = var4.has;
            var1 = var1.bind(var4)(var3);
            if(!var1) { _fun0076_ip = 2; continue _fun0076 }
case 49:
            var4 = _closure1_slot74;
            var1 = undefined;
            var1 = var4.bind(var1)(var5);
            if(var1) { _fun0076_ip = 552; continue _fun0076 }
case 2:
            var1 = _closure1_slot43;
            var1 = var1.PREMIUM_MONTH_TIER_0;
            if(!(var3 !== var1)) { _fun0076_ip = 76; continue _fun0076 }
case 130:
            var1 = _closure1_slot43;
            var1 = var1.PREMIUM_YEAR_TIER_0;
            if(!(var3 !== var1)) { _fun0076_ip = 76; continue _fun0076 }
case 46:
            var1 = _closure1_slot43;
            var1 = var1.PREMIUM_MONTH_TIER_1;
            if(!(var3 !== var1)) { _fun0076_ip = 90; continue _fun0076 }
case 398:
            var1 = _closure1_slot43;
            var1 = var1.PREMIUM_YEAR_TIER_1;
            if(!(var3 !== var1)) { _fun0076_ip = 90; continue _fun0076 }
case 44:
            var1 = _closure1_slot43;
            var1 = var1.PREMIUM_MONTH_TIER_2;
            if(!(var3 !== var1)) { _fun0076_ip = 553; continue _fun0076 }
case 554:
            var1 = _closure1_slot43;
            var1 = var1.PREMIUM_YEAR_TIER_2;
            if(!(var3 !== var1)) { _fun0076_ip = 553; continue _fun0076 }
case 549:
            var1 = _closure1_slot43;
            var1 = var1.PREMIUM_3_MONTH_TIER_2;
            if(!(var3 !== var1)) { _fun0076_ip = 553; continue _fun0076 }
case 389:
            var1 = _closure1_slot43;
            var1 = var1.PREMIUM_6_MONTH_TIER_2;
            if(!(var3 !== var1)) { _fun0076_ip = 553; continue _fun0076 }
case 392:
            var1 = _closure1_slot54;
            var1 = var1.PREMIUM_GUILD;
            _fun0076_ip = 555; continue _fun0076;
case 553:
            var3 = _closure1_slot54;
            var1 = var3.TIER_2;
case 555:
            _fun0076_ip = 20; continue _fun0076;
case 90:
            var3 = _closure1_slot54;
            var1 = var3.TIER_1;
case 20:
            _fun0076_ip = 205; continue _fun0076;
case 76:
            var3 = _closure1_slot54;
            var1 = var3.TIER_0;
case 205:
            _fun0076_ip = 472; continue _fun0076;
case 552:
            var2 = _closure1_slot54;
            var1 = var2.BUNDLE;
case 472:
            return var1;
        }
    };
    var3['getPremiumBranding'] = var73;
    var3['getPremiumPlanItem'] = var72;
    var3['getDefaultPrice'] = var71;
    var3['withContextPlanPrices'] = var70;
    var70 = function usePlanSelectPriceState(arg1, arg2, arg3) {
        var8 = arg1;
        var7 = arg2;
        var5 = arg3;
        var _closure2_slot0 = var8;
        var _closure2_slot1 = var7;
        var _closure2_slot2 = var5;
        var4 = _closure1_slot4;
        var6 = var4.useMemo;
        var3 = new Array(1);
        var3[0] = var7;
        var2 = function() {
            _fun0077: for(var _fun0077_ip = 0; ; ) switch(_fun0077_ip) {
case 0:
                var1 = _closure2_slot1;
                var4 = null;
                var3 = var4 == var1;
                var1 = null;
                if(var3) { _fun0077_ip = 56; continue _fun0077 }
case 36:
                var3 = _closure2_slot1;
                var3 = var3.checkoutContext;
                var3 = var4 == var3;
                var1 = null;
                if(var3) { _fun0077_ip = 56; continue _fun0077 }
case 86:
                var3 = _closure2_slot1;
                var3 = var3.checkoutContext;
                var3 = var3.available_plans;
                var3 = var4 == var3;
                var1 = null;
                if(var3) { _fun0077_ip = 56; continue _fun0077 }
case 43:
                var2 = _closure2_slot1;
                var2 = var2.checkoutContext;
                var1 = var2.available_plans;
case 56:
                return var1;
            }
        };
        var6 = var6.bind(var4)(var2, var3);
        var _closure2_slot3 = var6;
        var3 = var4.useMemo;
        var2 = new Array(4);
        var2[0] = var8;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var5;
        var1 = function() {
            _fun0078: for(var _fun0078_ip = 0; ; ) switch(_fun0078_ip) {
case 0:
                var1 = {};
                var6 = _closure1_slot61;
                var2 = _closure2_slot0;
                var5 = _closure2_slot3;
                var4 = undefined;
                var4 = var6.bind(var4)(var2, var5);
                var1['priceOptions'] = var4;
                var2 = var2.currency;
                var4 = null;
                var2 = var4 != var2;
                if(!var2) { _fun0078_ip = 28; continue _fun0078 }
case 547:
                var5 = _closure2_slot1;
                var2 = var4 != var5;
case 28:
                if(!var2) { _fun0078_ip = 82; continue _fun0078 }
case 78:
                var5 = _closure2_slot1;
                var6 = var5.currency;
                var5 = _closure2_slot0;
                var5 = var5.currency;
                var2 = var6 !== var5;
case 82:
                if(!var2) { _fun0078_ip = 455; continue _fun0078 }
case 9:
                var3 = _closure2_slot2;
                var2 = var4 == var3;
case 455:
                var1['planPricesLoading'] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['usePlanSelectPriceState'] = var70;
    var3['getPrice'] = var69;
    var69 = function getCountryPrices(arg1) {
        _fun0079: for(var _fun0079_ip = 0; ; ) switch(_fun0079_ip) {
case 0:
            var4 = arguments[1];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0079_ip = 556; continue _fun0079 }
case 463:
            var1 = _closure1_slot13;
            var4 = var1.DEFAULT;
case 556:
            var2 = _closure1_slot63;
            var1 = arg1;
            var1 = var2.bind(var3)(var1, var4);
            var1 = var1.countryPrices;
            return var1;
        }
    };
    var3['getCountryPrices'] = var69;
    var3['experimentalGetPrices'] = var68;
    var3['experimentalGetPrice'] = var67;
    var3['getServerPriceFromClientPrice'] = var66;
    var3['getItemPlansTotalServerPrice'] = var65;
    var65 = function getSubscriptionWithNewPlansTotalServerPrice(arg1, arg2, arg3, arg4) {
        _fun0080: for(var _fun0080_ip = 0; ; ) switch(_fun0080_ip) {
case 0:
            var6 = arg1;
            var3 = arg2;
            var2 = null;
            if(!(var2 === var3)) { _fun0080_ip = 462; continue _fun0080 }
case 79:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 16;
            var1 = var5[var1];
            var7 = undefined;
            var5 = var4.bind(var7)(var1);
            var4 = var2 !== var6;
            var1 = "Subscription can't be null";
            var1 = var5.bind(var7)(var4, var1);
            var3 = new Array(0);
case 462:
            var5 = _closure1_slot67;
            if(!(var2 === var6)) { _fun0080_ip = 532; continue _fun0080 }
case 557:
            var4 = _closure1_slot93;
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            _fun0080_ip = 110; continue _fun0080;
case 532:
            var2 = _closure1_slot92;
            var1 = undefined;
            var4 = var2.bind(var1)(var6, var3);
case 110:
            var3 = undefined;
            var2 = arg3;
            var1 = arg4;
            var1 = var5.bind(var3)(var4, var2, var1);
            return var1;
        }
    };
    var3['getSubscriptionWithNewPlansTotalServerPrice'] = var65;
    var3['getInterval'] = var64;
    var64 = function getDiscountIntervalString(arg1) {
        _fun0081: for(var _fun0081_ip = 0; ; ) switch(_fun0081_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot22;
            var2 = var2.MONTH;
            if(!(var2 !== var3)) { _fun0081_ip = 558; continue _fun0081 }
case 31:
            var2 = _closure1_slot22;
            var2 = var2.YEAR;
            if(!(var2 !== var3)) { _fun0081_ip = 83; continue _fun0081 }
case 86:
            var2 = _closure1_slot22;
            var2 = var2.DAY;
            if(!(var2 !== var3)) { _fun0081_ip = 7; continue _fun0081 }
case 523:
            var2 = _closure1_slot22;
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
case 83:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 17;
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
case 558:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 17;
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
    var3['getDiscountIntervalString'] = var64;
    var3['getIntervalString'] = var63;
    var3['getIntervalStringAsNoun'] = var62;
    var3['getPremiumType'] = var61;
    var3['getDisplayName'] = var60;
    var60 = function getDisplayNameFromSku(arg1) {
        _fun0082: for(var _fun0082_ip = 0; ; ) switch(_fun0082_ip) {
case 0:
            var7 = arg1;
            var2 = _closure1_slot38;
            var2 = var2.TIER_0;
            if(!(var2 !== var7)) { _fun0082_ip = 559; continue _fun0082 }
case 31:
            var2 = _closure1_slot38;
            var2 = var2.TIER_1;
            if(!(var2 !== var7)) { _fun0082_ip = 560; continue _fun0082 }
case 480:
            var2 = _closure1_slot38;
            var2 = var2.TIER_2;
            if(!(var2 !== var7)) { _fun0082_ip = 544; continue _fun0082 }
case 196:
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
            var3 = 13;
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
case 544:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 17;
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
case 560:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 17;
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
case 559:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 17;
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
    var3['getDisplayNameFromSku'] = var60;
    var3['getTierDisplayNameByPlanId'] = var59;
    var59 = function getPremiumTypeDisplayName(arg1) {
        _fun0083: for(var _fun0083_ip = 0; ; ) switch(_fun0083_ip) {
case 0:
            var4 = arg1;
            var3 = arguments[1];
            var6 = undefined;
            if(!(var3 === var6)) { _fun0083_ip = 32; continue _fun0083 }
case 79:
            var3 = false;
case 32:
            var1 = _closure1_slot39;
            var1 = var1.TIER_0;
            if(!(var1 !== var4)) { _fun0083_ip = 19; continue _fun0083 }
case 127:
            var1 = _closure1_slot39;
            var1 = var1.TIER_1;
            if(!(var1 !== var4)) { _fun0083_ip = 561; continue _fun0083 }
case 547:
            var1 = _closure1_slot39;
            var1 = var1.TIER_2;
            if(!(var1 !== var4)) { _fun0083_ip = 396; continue _fun0083 }
case 43:
            return var6;
case 396:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 17;
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
case 561:
            var1 = 'Classic';
            if(var3) { _fun0083_ip = 90; continue _fun0083 }
case 551:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 17;
            var5 = var9[var4];
            var5 = var8.bind(var6)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var4 = var9[var4];
            var4 = var8.bind(var6)(var4);
            var4 = var4.t;
            var4 = var4.FSOz78;
            var1 = var5.bind(var7)(var4);
case 90:
            return var1;
case 19:
            var1 = 'Basic';
            if(var3) { _fun0083_ip = 18; continue _fun0083 }
case 92:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 17;
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
    var3['getPremiumTypeDisplayName'] = var59;
    var59 = function getPlanDescriptionFromInvoice(arg1) {
        _fun0084: for(var _fun0084_ip = 0; ; ) switch(_fun0084_ip) {
case 0:
            var1 = arg1;
            var7 = var1.renewalInvoicePreview;
            var6 = var1.renewalInvoiceWithEntitlementsPreview;
            var13 = var1.subscription;
            var12 = var1.planId;
            var10 = var1.includePremiumGuilds;
            var3 = undefined;
            if(!(var10 === var3)) { _fun0084_ip = 52; continue _fun0084 }
case 53:
            var10 = false;
case 52:
            var9 = var1.hasDiscountApplied;
            if(!(var9 === var3)) { _fun0084_ip = 106; continue _fun0084 }
case 523:
            var9 = false;
case 106:
            var8 = var1.activeDiscountInfo;
            var5 = var1.hasFractionalPremiumWithSub;
            if(!(var5 === var3)) { _fun0084_ip = 562; continue _fun0084 }
case 81:
            var5 = false;
case 562:
            var4 = var1.fractionalPremiumInfo;
            var2 = _closure1_slot9;
            var1 = var2.get;
            var12 = var1.bind(var2)(var12);
            var2 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 16;
            var1 = var14[var1];
            var14 = var2.bind(var3)(var1);
            var1 = null;
            var2 = var1 != var12;
            var1 = 'Missing plan';
            var1 = var14.bind(var3)(var2, var1);
            var2 = _closure1_slot71;
            var1 = {};
            var1['subscription'] = var13;
            var14 = var12.id;
            var1['planId'] = var14;
            var11 = _closure1_slot87;
            var11 = var11.bind(var3)(var7, var13, var12);
            var1['price'] = var11;
            var1['includePremiumGuilds'] = var10;
            var1['hasDiscountApplied'] = var9;
            var1['activeDiscountInfo'] = var8;
            var1['renewalInvoiceWithoutEntitlementsPreview'] = var7;
            var1['renewalInvoiceWithEntitlementsPreview'] = var6;
            var1['hasFractionalPremiumWithSub'] = var5;
            var1['fractionalPremiumInfo'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getPlanDescriptionFromInvoice'] = var59;
    var59 = function getExternalPlanDisplayName(arg1) {
        _fun0085: for(var _fun0085_ip = 0; ; ) switch(_fun0085_ip) {
case 0:
            var1 = arg1;
            var4 = var1.planId;
            var5 = var1.additionalPlans;
            var2 = _closure1_slot5;
            var7 = undefined;
            var3 = var2.bind(var7)(var4);
            var2 = null;
            var6 = null;
            if(var3) { _fun0085_ip = 77; continue _fun0085 }
case 41:
            var3 = _closure1_slot70;
            var6 = var3.bind(var7)(var4);
case 77:
            var3 = var2 == var5;
            var11 = undefined;
            if(var3) { _fun0085_ip = 384; continue _fun0085 }
case 196:
            var4 = var5.find;
            var3 = function(arg1) {
                var1 = arg1;
                var3 = var1.planId;
                var2 = _closure1_slot31;
                var1 = var2.has;
                var1 = var1.bind(var2)(var3);
                return var1;
            };
            var11 = var4.bind(var5)(var3);
case 384:
            var3 = var2 == var11;
            var4 = undefined;
            if(var3) { _fun0085_ip = 563; continue _fun0085 }
case 532:
            var4 = var11.planId;
case 563:
            var3 = _closure1_slot43;
            var3 = var3.PREMIUM_MONTH_GUILD;
            if(!(var4 !== var3)) { _fun0085_ip = 564; continue _fun0085 }
case 456:
            var3 = var2 == var11;
            var4 = undefined;
            if(var3) { _fun0085_ip = 565; continue _fun0085 }
case 13:
            var4 = var11.planId;
case 565:
            var3 = _closure1_slot43;
            var3 = var3.PREMIUM_YEAR_GUILD;
            var9 = null;
            if(!(var4 === var3)) { _fun0085_ip = 87; continue _fun0085 }
case 564:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 17;
            var3 = var5[var3];
            var3 = var4.bind(var7)(var3);
            var3 = var3.t;
            var9 = var3.Pi5yMJ;
case 87:
            var3 = var2 != var9;
            var5 = undefined;
            if(!var3) { _fun0085_ip = 566; continue _fun0085 }
case 457:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 17;
            var3 = var8[var3];
            var3 = var4.bind(var7)(var3);
            var8 = var3.intl;
            var4 = var8.formatToPlainString;
            var3 = {};
            var12 = var2 == var11;
            var10 = undefined;
            if(var12) { _fun0085_ip = 567; continue _fun0085 }
case 568:
            var10 = var11.quantity;
case 567:
            var3['num'] = var10;
            var5 = var4.bind(var8)(var9, var3);
case 566:
            if(!(var2 != var6)) { _fun0085_ip = 390; continue _fun0085 }
case 533:
            if(!(var2 == var5)) { _fun0085_ip = 569; continue _fun0085 }
case 390:
            if(!(var2 == var6)) { _fun0085_ip = 393; continue _fun0085 }
case 570:
            if(!(var2 == var5)) { _fun0085_ip = 498; continue _fun0085 }
case 571:
            var2 = global;
            var4 = var2.Error;
            var2 = var4.prototype;
            var3 = Object.create(var2, {constructor: {value: var4}});
            var14 = 'Subscription without premium or premium guild subscription';
            var15 = var3;
            var2 = new var15[var4](var14, var13);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 498:
            return var5;
case 393:
            return var6;
case 569:
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 17;
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
    var3['getExternalPlanDisplayName'] = var59;
    var3['getPremiumPlanOptions'] = var58;
    var58 = function getPlanIdForPremiumType(arg1, arg2) {
        _fun0086: for(var _fun0086_ip = 0; ; ) switch(_fun0086_ip) {
case 0:
            var6 = arg1;
            var3 = arg2;
            var1 = global;
            var7 = var1.Set;
            var4 = _closure1_slot41;
            var5 = var4.MONTH;
            var4 = new Array(2);
            var4[0] = var5;
            var5 = _closure1_slot41;
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
            if(var4) { _fun0086_ip = 526; continue _fun0086 }
case 58:
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
case 526:
            var4 = _closure1_slot39;
            var4 = var4.TIER_0;
            if(!(var4 !== var6)) { _fun0086_ip = 572; continue _fun0086 }
case 573:
            var4 = _closure1_slot39;
            var4 = var4.TIER_1;
            if(!(var4 !== var6)) { _fun0086_ip = 574; continue _fun0086 }
case 202:
            var4 = _closure1_slot39;
            var4 = var4.TIER_2;
            if(!(var4 !== var6)) { _fun0086_ip = 89; continue _fun0086 }
case 575:
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
case 89:
            var1 = _closure1_slot41;
            var1 = var1.MONTH;
            if(!(var3 !== var1)) { _fun0086_ip = 75; continue _fun0086 }
case 570:
            var1 = _closure1_slot43;
            var1 = var1.PREMIUM_YEAR_TIER_2;
            _fun0086_ip = 381; continue _fun0086;
case 75:
            var4 = _closure1_slot43;
            var1 = var4.PREMIUM_MONTH_TIER_2;
case 381:
            return var1;
case 574:
            var1 = _closure1_slot41;
            var1 = var1.MONTH;
            if(!(var3 !== var1)) { _fun0086_ip = 576; continue _fun0086 }
case 211:
            var1 = _closure1_slot43;
            var1 = var1.PREMIUM_YEAR_TIER_1;
            _fun0086_ip = 577; continue _fun0086;
case 576:
            var4 = _closure1_slot43;
            var1 = var4.PREMIUM_MONTH_TIER_1;
case 577:
            return var1;
case 572:
            var1 = _closure1_slot41;
            var1 = var1.MONTH;
            if(!(var3 !== var1)) { _fun0086_ip = 578; continue _fun0086 }
case 67:
            var1 = _closure1_slot43;
            var1 = var1.PREMIUM_YEAR_TIER_0;
            _fun0086_ip = 579; continue _fun0086;
case 578:
            var2 = _closure1_slot43;
            var1 = var2.PREMIUM_MONTH_TIER_0;
case 579:
            return var1;
        }
    };
    var3['getPlanIdForPremiumType'] = var58;
    var3['getNumPremiumGuildSubscriptions'] = var57;
    var3['subscriptionHasPremiumGuildPlan'] = var56;
    var3['isPremiumBaseSubscriptionPlan'] = var55;
    var3['isPremiumGuildSubscriptionPlan'] = var54;
    var54 = function isPremiumSubscriptionPlan(arg1) {
        _fun0087: for(var _fun0087_ip = 0; ; ) switch(_fun0087_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot75;
            var3 = undefined;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0087_ip = 49; continue _fun0087 }
case 29:
            var2 = _closure1_slot76;
            var1 = var2.bind(var3)(var4);
case 49:
            return var1;
        }
    };
    var3['isPremiumSubscriptionPlan'] = var54;
    var54 = function isPremiumGroupSubscriptionPlan(arg1) {
        _fun0088: for(var _fun0088_ip = 0; ; ) switch(_fun0088_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0088_ip = 49; continue _fun0088 }
case 79:
            var2 = _closure1_slot43;
            var2 = var2.PREMIUM_GROUP_MONTH;
            var1 = var3 === var2;
case 49:
            return var1;
        }
    };
    var3['isPremiumGroupSubscriptionPlan'] = var54;
    var3['getBillingGracePeriodDaysAndExpiresDate'] = var53;
    var3['getExpectedRenewalDate'] = var52;
    var3['getBillingInformationString'] = var51;
    var3['extendDateWithUnconsumedFractionalPremium'] = var50;
    var3['getUnactivatedFractionalPremiumDurationString'] = var49;
    var3['isSwitchingPlansDisabled'] = var48;
    var3['getSwitchingPlansDisabledMessage'] = var47;
    var3['isSubscriptionPrepaidPaymentSource'] = var46;
    var3['isPrepaidPaymentSource'] = var45;
    var3['getCoercedPremiumGuildSubscriptionStatus'] = var44;
    var3['isPremiumGuildSubscriptionCanceled'] = var43;
    var43 = function getPremiumGuildHeaderDescription(arg1) {
        _fun0089: for(var _fun0089_ip = 0; ; ) switch(_fun0089_ip) {
case 0:
            var2 = arg1;
            var3 = var2.subscription;
            var19 = var2.user;
            var12 = var2.price;
            var1 = var2.renewalInvoicePreview;
            var4 = var2.fractionalPremiumInfo;
            var8 = var3.planId;
            var9 = var3.additionalPlans;
            var7 = var3.renewalMutations;
            var6 = _closure1_slot9;
            var5 = var6.get;
            var8 = var5.bind(var6)(var8);
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 16;
            var5 = var10[var5];
            var11 = undefined;
            var13 = var6.bind(var11)(var5);
            var5 = null;
            var10 = var5 != var8;
            var6 = 'Missing plan';
            var6 = var13.bind(var11)(var10, var6);
            var6 = _closure1_slot73;
            var6 = var6.bind(var11)(var9);
            var10 = var5 == var7;
            var9 = undefined;
            if(var10) { _fun0089_ip = 549; continue _fun0089 }
case 473:
            var9 = var7.additionalPlans;
case 549:
            var16 = var6;
            if(!(var5 != var9)) { _fun0089_ip = 475; continue _fun0089 }
case 580:
            var9 = _closure1_slot73;
            var7 = var7.additionalPlans;
            var16 = var9.bind(var11)(var7);
case 475:
            var7 = global;
            var13 = var7.Math;
            var10 = var13.max;
            var9 = var6 - var16;
            var7 = 0;
            var15 = var10.bind(var13)(var7, var9);
            var18 = var16 > var7;
            if(!var18) { _fun0089_ip = 476; continue _fun0089 }
case 19:
            var18 = var15 > var7;
case 476:
            var9 = var6;
            if(!var18) { _fun0089_ip = 581; continue _fun0089 }
case 76:
            var9 = var16;
case 581:
            var17 = _closure1_slot88;
            var31 = var3.planId;
            var30 = var3.paymentSourceId;
            var29 = var3.currency;
            var32 = undefined;
            var28 = var19;
            var7 = var32[var17](var31, var30, var29, var28, var27);
            var7 = var7.amount;
            var9 = var7 * var9;
            var13 = var9;
            if(!(var5 != var1)) { _fun0089_ip = 10; continue _fun0089 }
case 571:
            var17 = var1.invoiceItems;
            var10 = var17.find;
            var7 = function(arg1) {
                var3 = _closure1_slot31;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.subscriptionPlanId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var10.bind(var17)(var7);
            var13 = var9;
            if(!(var5 != var7)) { _fun0089_ip = 10; continue _fun0089 }
case 212:
            var13 = var7.amount;
case 10:
            if(!(var5 == var12)) { _fun0089_ip = 582; continue _fun0089 }
case 583:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 22;
            var7 = var10[var7];
            var10 = var9.bind(var11)(var7);
            var9 = var10.formatPrice;
            var7 = var3.currency;
            var12 = var9.bind(var10)(var13, var7);
case 582:
            var9 = var5 == var1;
            var7 = undefined;
            if(var9) { _fun0089_ip = 218; continue _fun0089 }
case 85:
            var7 = var1.taxInclusive;
case 218:
            if(!(var5 == var7)) { _fun0089_ip = 584; continue _fun0089 }
case 528:
            var9 = var3.latestInvoice;
            var10 = var5 == var9;
            var1 = undefined;
            if(var10) { _fun0089_ip = 222; continue _fun0089 }
case 387:
            var1 = var9.taxInclusive;
case 222:
            var7 = var1;
case 584:
            var1 = var5 == var7;
            if(var1) { _fun0089_ip = 69; continue _fun0089 }
case 585:
            var1 = var7;
case 69:
            var7 = _closure1_slot83;
            var7 = var7.bind(var11)(var3);
            if(var7) { _fun0089_ip = 586; continue _fun0089 }
case 226:
            var9 = var3.status;
            var7 = _closure1_slot14;
            var7 = var7.ACCOUNT_HOLD;
            if(!(var7 !== var9)) { _fun0089_ip = 269; continue _fun0089 }
case 72:
            var7 = _closure1_slot14;
            var7 = var7.PAUSE_PENDING;
            if(!(var7 !== var9)) { _fun0089_ip = 587; continue _fun0089 }
case 588:
            var7 = _closure1_slot14;
            var7 = var7.PAUSED;
            if(!(var7 !== var9)) { _fun0089_ip = 587; continue _fun0089 }
case 589:
            var7 = _closure1_slot14;
            var7 = var7.PAST_DUE;
            if(!(var7 === var9)) { _fun0089_ip = 590; continue _fun0089 }
case 591:
            var7 = var3.isBoostOnly;
            if(var7) { _fun0089_ip = 592; continue _fun0089 }
case 590:
            var13 = var3.isPurchasedViaGoogle;
            var9 = _closure1_slot0;
            var17 = _closure1_slot2;
            var7 = 17;
            var10 = var17[var7];
            var10 = var9.bind(var11)(var10);
            if(var18) { _fun0089_ip = 593; continue _fun0089 }
case 594:
            var22 = var10.intl;
            var21 = var22.format;
            var18 = var17[var7];
            var18 = var9.bind(var11)(var18);
            var19 = var18.t;
            if(var13) { _fun0089_ip = 595; continue _fun0089 }
case 596:
            if(var1) { _fun0089_ip = 597; continue _fun0089 }
case 147:
            var20 = var19.ijSDcI;
            var18 = {};
            var18['quantity'] = var6;
            var23 = 22;
            var23 = var17[var23];
            var26 = var9.bind(var11)(var23);
            var25 = var26.formatRate;
            var24 = var8.interval;
            var23 = var8.intervalCount;
            var23 = var25.bind(var26)(var12, var24, var23);
            var18['rate'] = var23;
            var18 = var21.bind(var22)(var20, var18);
            _fun0089_ip = 237; continue _fun0089;
case 597:
            var23 = var19.eDwrLA;
            var20 = {};
            var20['quantity'] = var6;
            var24 = 22;
            var24 = var17[var24];
            var27 = var9.bind(var11)(var24);
            var26 = var27.formatRate;
            var25 = var8.interval;
            var24 = var8.intervalCount;
            var24 = var26.bind(var27)(var12, var25, var24);
            var20['rate'] = var24;
            var18 = var21.bind(var22)(var23, var20);
case 237:
            _fun0089_ip = 122; continue _fun0089;
case 595:
            var20 = var19["5iud9s"];
            var19 = {};
            var19['quantity'] = var6;
            var18 = var21.bind(var22)(var20, var19);
case 122:
            return var18;
case 593:
            if(var13) { _fun0089_ip = 598; continue _fun0089 }
case 599:
            var13 = var10.t;
            if(var1) { _fun0089_ip = 507; continue _fun0089 }
case 600:
            var20 = var13.BmaudS;
            _fun0089_ip = 601; continue _fun0089;
case 507:
            var20 = var13["4nc7+E"];
case 601:
            var22 = _closure1_slot0;
            var23 = _closure1_slot2;
            var13 = var23[var7];
            var13 = var22.bind(var11)(var13);
            var19 = var13.intl;
            var18 = var19.format;
            var13 = {};
            var13['activeQuantity'] = var16;
            var13['pendingQuantity'] = var15;
            var21 = 22;
            var21 = var23[var21];
            var24 = var22.bind(var11)(var21);
            var23 = var24.formatRate;
            var22 = var8.interval;
            var21 = var8.intervalCount;
            var21 = var23.bind(var24)(var12, var22, var21);
            var13['rate'] = var21;
            var13 = var18.bind(var19)(var20, var13);
            return var13;
case 598:
            var13 = var10.intl;
            var10 = var13.format;
            var7 = var17[var7];
            var7 = var9.bind(var11)(var7);
            var7 = var7.t;
            var9 = var7.krRy+d;
            var7 = {};
            var7['activeQuantity'] = var16;
            var7['pendingQuantity'] = var15;
            var7 = var10.bind(var13)(var9, var7);
            return var7;
case 592:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var7 = 17;
            var9 = var17[var7];
            var9 = var16.bind(var11)(var9);
            var13 = var9.intl;
            var10 = var13.format;
            var7 = var17[var7];
            var7 = var16.bind(var11)(var7);
            var7 = var7.t;
            var9 = var7.d+0vwo;
            var7 = {};
            var15 = 20;
            var15 = var17[var15];
            var18 = var16.bind(var11)(var15);
            var17 = var18.dateFormat;
            var15 = _closure1_slot77;
            var15 = var15.bind(var11)(var3);
            var16 = var15.expiresDate;
            var15 = 'LL';
            var15 = var17.bind(var18)(var16, var15);
            var7['endDate'] = var15;
            var14 = function onClick() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 21;
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
case 587:
            if(!(var5 != var4)) { _fun0089_ip = 602; continue _fun0089 }
case 603:
            var4 = var4.isFractionalPremiumActive;
            if(var4) { _fun0089_ip = 602; continue _fun0089 }
case 136:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 17;
            var5 = var10[var4];
            var5 = var9.bind(var11)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var4 = var10[var4];
            var4 = var9.bind(var11)(var4);
            var4 = var4.t;
            var4 = var4.CduWAm;
            var4 = var5.bind(var7)(var4);
            _fun0089_ip = 604; continue _fun0089;
case 602:
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 17;
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
case 604:
            return var4;
case 269:
            var4 = var3.isPurchasedViaGoogle;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var5 = 17;
            var7 = var16[var5];
            var7 = var15.bind(var11)(var7);
            var10 = var7.intl;
            var9 = var10.format;
            var5 = var16[var5];
            var5 = var15.bind(var11)(var5);
            var5 = var5.t;
            if(var4) { _fun0089_ip = 605; continue _fun0089 }
case 606:
            if(var1) { _fun0089_ip = 607; continue _fun0089 }
case 608:
            var7 = var5["0QxOAi"];
            var4 = {};
            var4['quantity'] = var6;
            var4['boostQuantity'] = var6;
            var13 = 22;
            var13 = var16[var13];
            var18 = var15.bind(var11)(var13);
            var17 = var18.formatRate;
            var14 = var8.interval;
            var13 = var8.intervalCount;
            var13 = var17.bind(var18)(var12, var14, var13);
            var4['rate'] = var13;
            var4 = var9.bind(var10)(var7, var4);
            _fun0089_ip = 609; continue _fun0089;
case 607:
            var13 = var5.oiRy7v;
            var7 = {};
            var7['quantity'] = var6;
            var7['boostQuantity'] = var6;
            var14 = 22;
            var14 = var16[var14];
            var17 = var15.bind(var11)(var14);
            var16 = var17.formatRate;
            var15 = var8.interval;
            var14 = var8.intervalCount;
            var14 = var16.bind(var17)(var12, var15, var14);
            var7['rate'] = var14;
            var4 = var9.bind(var10)(var13, var7);
case 609:
            _fun0089_ip = 610; continue _fun0089;
case 605:
            var7 = var5.Nlf3nc;
            var5 = {};
            var5['quantity'] = var6;
            var5['boostQuantity'] = var6;
            var4 = var9.bind(var10)(var7, var5);
case 610:
            return var4;
case 586:
            var3 = var3.isPurchasedViaGoogle;
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 17;
            var4 = var13[var2];
            var4 = var10.bind(var11)(var4);
            var5 = var4.intl;
            var4 = var5.format;
            var2 = var13[var2];
            var2 = var10.bind(var11)(var2);
            var2 = var2.t;
            if(var3) { _fun0089_ip = 611; continue _fun0089 }
case 295:
            if(var1) { _fun0089_ip = 612; continue _fun0089 }
case 613:
            var3 = var2.yjsv/s;
            var1 = {};
            var1['quantity'] = var6;
            var7 = 22;
            var7 = var13[var7];
            var15 = var10.bind(var11)(var7);
            var14 = var15.formatRate;
            var9 = var8.interval;
            var7 = var8.intervalCount;
            var7 = var14.bind(var15)(var12, var9, var7);
            var1['rate'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0089_ip = 614; continue _fun0089;
case 612:
            var7 = var2["0ozBSB"];
            var3 = {};
            var3['quantity'] = var6;
            var9 = 22;
            var9 = var13[var9];
            var11 = var10.bind(var11)(var9);
            var10 = var11.formatRate;
            var9 = var8.interval;
            var8 = var8.intervalCount;
            var8 = var10.bind(var11)(var12, var9, var8);
            var3['rate'] = var8;
            var1 = var4.bind(var5)(var7, var3);
case 614:
            _fun0089_ip = 615; continue _fun0089;
case 611:
            var3 = var2["3/WTrI"];
            var2 = {};
            var2['quantity'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 615:
            return var1;
        }
    };
    var3['getPremiumGuildHeaderDescription'] = var43;
    var3['getFormattedPriceForPlan'] = var42;
    var42 = function getFormattedRateForPlan(arg1, arg2, arg3) {
        var1 = arg1;
        var6 = _closure1_slot84;
        var4 = undefined;
        var5 = arg2;
        var3 = arg3;
        var5 = var6.bind(var4)(var1, var5, var3);
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 22;
        var2 = var6[var2];
        var4 = var3.bind(var4)(var2);
        var3 = var4.formatRate;
        var2 = var1.interval;
        var1 = var1.intervalCount;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var3['getFormattedRateForPlan'] = var42;
    var3['getPlanIdFromInvoice'] = var41;
    var3['getStatusFromInvoice'] = var40;
    var3['isBaseSubscriptionCanceled'] = var39;
    var3['isSubscriptionStatusFailedPayment'] = var38;
    var3['getFormattedPlanPriceFromInvoice'] = var37;
    var3['getPremiumGuildIntervalPrice'] = var36;
    var3['getBillingReviewSubheader'] = var35;
    var3['getIntervalForInvoice'] = var34;
    var3['getDefaultCurrency'] = var33;
    var33 = function formatTrialOfferIntervalDuration(arg1) {
        _fun0090: for(var _fun0090_ip = 0; ; ) switch(_fun0090_ip) {
case 0:
            var1 = arg1;
            var4 = var1.intervalType;
            var9 = undefined;
            if(!(var4 === var9)) { _fun0090_ip = 34; continue _fun0090 }
case 47:
            var2 = _closure1_slot41;
            var4 = var2.MONTH;
case 34:
            var8 = var1.intervalCount;
            if(!(var8 === var9)) { _fun0090_ip = 52; continue _fun0090 }
case 40:
            var8 = 1;
case 52:
            var2 = var1.capitalize;
            if(!(var2 === var9)) { _fun0090_ip = 106; continue _fun0090 }
case 523:
            var2 = false;
case 106:
            var1 = _closure1_slot41;
            var1 = var1.DAY;
            if(!(var1 !== var4)) { _fun0090_ip = 27; continue _fun0090 }
case 616:
            var1 = _closure1_slot41;
            var1 = var1.MONTH;
            if(!(var1 !== var4)) { _fun0090_ip = 148; continue _fun0090 }
case 377:
            var1 = _closure1_slot41;
            var1 = var1.YEAR;
            if(!(var1 !== var4)) { _fun0090_ip = 580; continue _fun0090 }
case 101:
            var1 = global;
            var5 = var1.Error;
            var1 = var5.prototype;
            var4 = Object.create(var1, {constructor: {value: var5}});
            var13 = 'Unsupported interval duration.';
            var14 = var4;
            var1 = new var14[var5](var13, var12);
            var1 = var1 instanceof Object ? var1 : var4;
            throw var1;
case 580:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 17;
            var6 = var5[var1];
            var6 = var4.bind(var9)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var1 = var5[var1];
            var1 = var4.bind(var9)(var1);
            var4 = var1.t;
            if(var2) { _fun0090_ip = 198; continue _fun0090 }
case 19:
            var5 = var4["9DFiHk"];
            var1 = {};
            var1['years'] = var8;
            var1 = var6.bind(var7)(var5, var1);
            _fun0090_ip = 617; continue _fun0090;
case 198:
            var5 = var4.h+63yl;
            var4 = {};
            var4['years'] = var8;
            var1 = var6.bind(var7)(var5, var4);
case 617:
            return var1;
case 148:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 17;
            var6 = var5[var1];
            var6 = var4.bind(var9)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var1 = var5[var1];
            var1 = var4.bind(var9)(var1);
            var4 = var1.t;
            if(var2) { _fun0090_ip = 380; continue _fun0090 }
case 394:
            var5 = var4["4SEnCZ"];
            var1 = {};
            var1['months'] = var8;
            var1 = var6.bind(var7)(var5, var1);
            _fun0090_ip = 618; continue _fun0090;
case 380:
            var5 = var4.x5MgxS;
            var4 = {};
            var4['months'] = var8;
            var1 = var6.bind(var7)(var5, var4);
case 618:
            return var1;
case 27:
            var7 = 7;
            if(!(var8 >= var7)) { _fun0090_ip = 6; continue _fun0090 }
case 619:
            var4 = var8 % var7;
            var1 = 0;
            if(!(var4 !== var1)) { _fun0090_ip = 620; continue _fun0090 }
case 6:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 17;
            var6 = var5[var1];
            var6 = var4.bind(var9)(var6);
            var10 = var6.intl;
            var6 = var10.formatToPlainString;
            var1 = var5[var1];
            var1 = var4.bind(var9)(var1);
            var4 = var1.t;
            if(var2) { _fun0090_ip = 621; continue _fun0090 }
case 622:
            var5 = var4.kbBj/h;
            var1 = {};
            var1['days'] = var8;
            var1 = var6.bind(var10)(var5, var1);
            _fun0090_ip = 623; continue _fun0090;
case 621:
            var5 = var4["6Cdzoy"];
            var4 = {};
            var4['days'] = var8;
            var1 = var6.bind(var10)(var5, var4);
case 623:
            _fun0090_ip = 624; continue _fun0090;
case 620:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 17;
            var5 = var10[var3];
            var5 = var4.bind(var9)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var3 = var10[var3];
            var3 = var4.bind(var9)(var3);
            var3 = var3.t;
            if(var2) { _fun0090_ip = 625; continue _fun0090 }
case 626:
            var4 = var3.EIpHEj;
            var2 = {};
            var9 = var8 / var7;
            var2['weeks'] = var9;
            var2 = var5.bind(var6)(var4, var2);
            _fun0090_ip = 627; continue _fun0090;
case 625:
            var4 = var3.fRNBRX;
            var3 = {};
            var7 = var8 / var7;
            var3['weeks'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 627:
            var1 = var2;
case 624:
            return var1;
        }
    };
    var3['formatTrialOfferIntervalDuration'] = var33;
    var3['formatTrialCtaIntervalDuration'] = var32;
    var32 = function formatTrialCtaIntervalDurationFromTrialOffer(arg1, arg2) {
        _fun0091: for(var _fun0091_ip = 0; ; ) switch(_fun0091_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 != var1)) { _fun0091_ip = 40; continue _fun0091 }
case 463:
            var3 = var1.subscription_trial;
            if(!(var2 != var3)) { _fun0091_ip = 40; continue _fun0091 }
case 628:
            var3 = var1.subscription_trial;
            var4 = var3.sku_id;
            var3 = arg2;
            if(!(var4 !== var3)) { _fun0091_ip = 480; continue _fun0091 }
case 40:
            return var2;
case 480:
            var1 = var1.subscription_trial;
            var3 = _closure1_slot90;
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
    var3['formatTrialCtaIntervalDurationFromTrialOffer'] = var32;
    var32 = function formatIntervalDuration(arg1) {
        _fun0092: for(var _fun0092_ip = 0; ; ) switch(_fun0092_ip) {
case 0:
            var1 = arg1;
            var4 = var1.intervalType;
            var9 = undefined;
            if(!(var4 === var9)) { _fun0092_ip = 34; continue _fun0092 }
case 47:
            var2 = _closure1_slot41;
            var4 = var2.MONTH;
case 34:
            var8 = var1.intervalCount;
            if(!(var8 === var9)) { _fun0092_ip = 52; continue _fun0092 }
case 40:
            var8 = 1;
case 52:
            var2 = var1.capitalize;
            if(!(var2 === var9)) { _fun0092_ip = 106; continue _fun0092 }
case 523:
            var2 = false;
case 106:
            var1 = _closure1_slot41;
            var1 = var1.DAY;
            if(!(var1 !== var4)) { _fun0092_ip = 80; continue _fun0092 }
case 616:
            var1 = _closure1_slot41;
            var1 = var1.MONTH;
            if(!(var1 !== var4)) { _fun0092_ip = 629; continue _fun0092 }
case 377:
            var1 = _closure1_slot41;
            var1 = var1.YEAR;
            if(!(var1 !== var4)) { _fun0092_ip = 580; continue _fun0092 }
case 101:
            var1 = global;
            var5 = var1.Error;
            var1 = var5.prototype;
            var4 = Object.create(var1, {constructor: {value: var5}});
            var13 = 'Unsupported interval duration.';
            var14 = var4;
            var1 = new var14[var5](var13, var12);
            var1 = var1 instanceof Object ? var1 : var4;
            throw var1;
case 580:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 17;
            var6 = var5[var1];
            var6 = var4.bind(var9)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var1 = var5[var1];
            var1 = var4.bind(var9)(var1);
            var4 = var1.t;
            if(var2) { _fun0092_ip = 630; continue _fun0092 }
case 19:
            var5 = var4.PClsrw;
            var1 = {};
            var1['years'] = var8;
            var1 = var6.bind(var7)(var5, var1);
            _fun0092_ip = 91; continue _fun0092;
case 630:
            var5 = var4.IfYQVC;
            var4 = {};
            var4['years'] = var8;
            var1 = var6.bind(var7)(var5, var4);
case 91:
            return var1;
case 629:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 17;
            var6 = var5[var1];
            var6 = var4.bind(var9)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var1 = var5[var1];
            var1 = var4.bind(var9)(var1);
            var4 = var1.t;
            if(var2) { _fun0092_ip = 631; continue _fun0092 }
case 632:
            var5 = var4.kridzK;
            var1 = {};
            var1['months'] = var8;
            var1 = var6.bind(var7)(var5, var1);
            _fun0092_ip = 633; continue _fun0092;
case 631:
            var5 = var4.erUSmA;
            var4 = {};
            var4['months'] = var8;
            var1 = var6.bind(var7)(var5, var4);
case 633:
            return var1;
case 80:
            var7 = 7;
            if(!(var8 >= var7)) { _fun0092_ip = 66; continue _fun0092 }
case 582:
            var4 = var8 % var7;
            var1 = 0;
            if(!(var4 !== var1)) { _fun0092_ip = 634; continue _fun0092 }
case 66:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 17;
            var6 = var5[var1];
            var6 = var4.bind(var9)(var6);
            var10 = var6.intl;
            var6 = var10.formatToPlainString;
            var1 = var5[var1];
            var1 = var4.bind(var9)(var1);
            var4 = var1.t;
            if(var2) { _fun0092_ip = 635; continue _fun0092 }
case 636:
            var5 = var4.k2UNz+;
            var1 = {};
            var1['days'] = var8;
            var1 = var6.bind(var10)(var5, var1);
            _fun0092_ip = 150; continue _fun0092;
case 635:
            var5 = var4.jzH70Z;
            var4 = {};
            var4['days'] = var8;
            var1 = var6.bind(var10)(var5, var4);
case 150:
            _fun0092_ip = 637; continue _fun0092;
case 634:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 17;
            var5 = var10[var3];
            var5 = var4.bind(var9)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var3 = var10[var3];
            var3 = var4.bind(var9)(var3);
            var3 = var3.t;
            if(var2) { _fun0092_ip = 231; continue _fun0092 }
case 638:
            var4 = var3.EmoBD2;
            var2 = {};
            var9 = var8 / var7;
            var2['weeks'] = var9;
            var2 = var5.bind(var6)(var4, var2);
            _fun0092_ip = 230; continue _fun0092;
case 231:
            var4 = var3.iVZYyl;
            var3 = {};
            var7 = var8 / var7;
            var3['weeks'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 230:
            var1 = var2;
case 637:
            return var1;
        }
    };
    var3['formatIntervalDuration'] = var32;
    var3['getExternalSubscriptionMethodUrl'] = var31;
    var31 = function hasPremiumSubscriptionToDisplay(arg1, arg2) {
        _fun0093: for(var _fun0093_ip = 0; ; ) switch(_fun0093_ip) {
case 0:
            var5 = arg2;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 15;
            var1 = var4[var1];
            var4 = undefined;
            var6 = var3.bind(var4)(var1);
            var3 = var6.isPremium;
            var1 = arg1;
            var1 = var3.bind(var6)(var1);
            if(var1) { _fun0093_ip = 35; continue _fun0093 }
case 77:
            var3 = _closure1_slot86;
            var2 = null;
            var6 = var2 == var5;
            var2 = undefined;
            if(var6) { _fun0093_ip = 42; continue _fun0093 }
case 468:
            var2 = var5.status;
case 42:
            var1 = var3.bind(var4)(var2);
case 35:
            return var1;
        }
    };
    var3['hasPremiumSubscriptionToDisplay'] = var31;
    var31 = function useHasPremiumSubscriptionToDisplay() {
        _fun0094: for(var _fun0094_ip = 0; ; ) switch(_fun0094_ip) {
case 0:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var6 = 26;
            var5 = var7[var6];
            var4 = undefined;
            var10 = var3.bind(var4)(var5);
            var9 = var10.useStateFromStores;
            var5 = _closure1_slot10;
            var8 = new Array(1);
            var8[0] = var5;
            var5 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getPremiumTypeSubscription;
                var1 = var1.bind(var2)();
                return var1;
            };
            var5 = var9.bind(var10)(var8, var5);
            var6 = var7[var6];
            var9 = var3.bind(var4)(var6);
            var8 = var9.useStateFromStores;
            var10 = _closure1_slot6;
            var6 = new Array(1);
            var6[0] = var10;
            var1 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getCurrentUser;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var8.bind(var9)(var6, var1);
            var1 = 15;
            var1 = var7[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.isPremium;
            var1 = var1.bind(var3)(var6);
            if(var1) { _fun0094_ip = 538; continue _fun0094 }
case 379:
            var3 = _closure1_slot86;
            var2 = null;
            var6 = var2 == var5;
            var2 = undefined;
            if(var6) { _fun0094_ip = 639; continue _fun0094 }
case 549:
            var2 = var5.status;
case 639:
            var1 = var3.bind(var4)(var2);
case 538:
            return var1;
        }
    };
    var3['useHasPremiumSubscriptionToDisplay'] = var31;
    var3['getItemsFromNewAdditionalPlans'] = var30;
    var3['getItemsWithoutPremiumPlanItem'] = var29;
    var3['getItemsWithUpsertedPlanIdForGroup'] = var28;
    var28 = function getItemsWithUpsertedPremiumPlanId(arg1, arg2) {
        var6 = _closure1_slot94;
        var7 = _closure1_slot32;
        var11 = undefined;
        var10 = arg1;
        var9 = arg2;
        var8 = 1;
        var1 = var11[var6](var10, var9, var8, var7, var6);
        return var1;
    };
    var3['getItemsWithUpsertedPremiumPlanId'] = var28;
    var28 = function getItemsWithUpsertedPremiumGuildPlan(arg1, arg2, arg3) {
        var6 = _closure1_slot94;
        var7 = _closure1_slot31;
        var11 = undefined;
        var10 = arg1;
        var9 = arg3;
        var8 = arg2;
        var1 = var11[var6](var10, var9, var8, var7, var6);
        return var1;
    };
    var3['getItemsWithUpsertedPremiumGuildPlan'] = var28;
    var28 = function coerceExistingItemsToNewItemInterval(arg1) {
        _fun0095: for(var _fun0095_ip = 0; ; ) switch(_fun0095_ip) {
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
            if(!(var5 == var3)) { _fun0095_ip = 464; continue _fun0095 }
case 50:
            var6 = var4.find;
            var1 = function(arg1) {
                var3 = _closure1_slot32;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.planId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var6.bind(var4)(var1);
case 464:
            var _closure2_slot0 = var3;
            var1 = var4;
            if(!(var5 != var3)) { _fun0095_ip = 640; continue _fun0095 }
case 196:
            var8 = _closure1_slot9;
            var7 = var8.get;
            var3 = var3.planId;
            var3 = var7.bind(var8)(var3);
            var _closure2_slot1 = var3;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var6 = 16;
            var6 = var7[var6];
            var7 = undefined;
            var6 = var8.bind(var7)(var6);
            var5 = var5 != var3;
            var3 = 'Missing plan';
            var3 = var6.bind(var7)(var5, var3);
            var3 = var4.map;
            var2 = function(arg1) {
                _fun0096: for(var _fun0096_ip = 0; ; ) switch(_fun0096_ip) {
case 0:
                    var1 = arg1;
                    var2 = _closure2_slot0;
                    if(!(var1 !== var2)) { _fun0096_ip = 534; continue _fun0096 }
case 467:
                    var6 = _closure1_slot9;
                    var5 = var6.get;
                    var2 = var1.planId;
                    var5 = var5.bind(var6)(var2);
                    var8 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var7 = 16;
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
                    if(!(var9 === var8)) { _fun0096_ip = 469; continue _fun0096 }
case 641:
                    var8 = _closure2_slot1;
                    var9 = var8.intervalCount;
                    var8 = var5.intervalCount;
                    if(!(var9 !== var8)) { _fun0096_ip = 642; continue _fun0096 }
case 469:
                    var10 = _closure1_slot9;
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
case 642:
                    return var1;
case 534:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
case 640:
            return var1;
        }
    };
    var3['coerceExistingItemsToNewItemInterval'] = var28;
    var28 = function getMaxFileSizeForPremiumType(arg1) {
        _fun0097: for(var _fun0097_ip = 0; ; ) switch(_fun0097_ip) {
case 0:
            var5 = arguments[1];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0097_ip = 48; continue _fun0097 }
case 463:
            var1 = {};
            var2 = true;
            var1['useSpace'] = var2;
            var5 = var1;
case 48:
            var3 = _closure1_slot40;
            var2 = arg1;
            var2 = var3[var2];
            var2 = var2.fileSize;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 28;
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
    var3['getMaxFileSizeForPremiumType'] = var28;
    var3['getGuildBoostPlanItem'] = var27;
    var3['isBoostOnlySubscription'] = var26;
    var3['getPremiumSkuIdForSubscription'] = var25;
    var3['getPremiumTypeFromSubscription'] = var24;
    var3['isNewUser'] = var23;
    var3['formatPriceString'] = var22;
    var3['castPremiumSubscriptionAsSkuId'] = var21;
    var21 = function getPremiumTypeFromPlanId(arg1) {
        _fun0098: for(var _fun0098_ip = 0; ; ) switch(_fun0098_ip) {
case 0:
            var5 = arg1;
            var1 = _closure1_slot43;
            var1 = var1.PREMIUM_MONTH_TIER_0;
            if(!(var1 !== var5)) { _fun0098_ip = 533; continue _fun0098 }
case 31:
            var1 = _closure1_slot43;
            var1 = var1.PREMIUM_YEAR_TIER_0;
            if(!(var1 !== var5)) { _fun0098_ip = 643; continue _fun0098 }
case 480:
            var1 = _closure1_slot43;
            var1 = var1.PREMIUM_MONTH_TIER_2;
            if(!(var1 !== var5)) { _fun0098_ip = 644; continue _fun0098 }
case 196:
            var1 = _closure1_slot43;
            var1 = var1.PREMIUM_GROUP_MONTH;
            if(!(var1 !== var5)) { _fun0098_ip = 644; continue _fun0098 }
case 557:
            var1 = _closure1_slot43;
            var1 = var1.PREMIUM_YEAR_TIER_2;
            if(!(var1 !== var5)) { _fun0098_ip = 640; continue _fun0098 }
case 55:
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
case 640:
            var1 = {};
            var3 = _closure1_slot39;
            var3 = var3.TIER_2;
            var1['premiumType'] = var3;
            var3 = _closure1_slot41;
            var3 = var3.YEAR;
            var1['planInterval'] = var3;
            return var1;
case 644:
            var1 = {};
            var3 = _closure1_slot39;
            var3 = var3.TIER_2;
            var1['premiumType'] = var3;
            var3 = _closure1_slot41;
            var3 = var3.MONTH;
            var1['planInterval'] = var3;
            return var1;
case 643:
            var1 = {};
            var3 = _closure1_slot39;
            var3 = var3.TIER_0;
            var1['premiumType'] = var3;
            var3 = _closure1_slot41;
            var3 = var3.YEAR;
            var1['planInterval'] = var3;
            return var1;
case 533:
            var1 = {};
            var3 = _closure1_slot39;
            var3 = var3.TIER_0;
            var1['premiumType'] = var3;
            var2 = _closure1_slot41;
            var2 = var2.MONTH;
            var1['planInterval'] = var2;
            return var1;
        }
    };
    var3['getPremiumTypeFromPlanId'] = var21;
    var21 = function isNitroLockedState(arg1) {
        var2 = 'isNitroLocked';
        var1 = arg1;
        var1 = var2 in var1;
        return var1;
    };
    var3['isNitroLockedState'] = var21;
    var21 = var20[var18];
    var21 = var19.bind(var1)(var21);
    var21 = var21.isPremiumAtLeast;
    var3['isPremiumAtLeast'] = var21;
    var21 = var20[var18];
    var21 = var19.bind(var1)(var21);
    var21 = var21.isPremiumAtMost;
    var3['isPremiumAtMost'] = var21;
    var21 = var20[var18];
    var21 = var19.bind(var1)(var21);
    var21 = var21.isPremium;
    var3['isPremium'] = var21;
    var18 = var20[var18];
    var18 = var19.bind(var1)(var18);
    var18 = var18.isPremiumExactly;
    var3['isPremiumExactly'] = var18;
    var18 = function useHasTier2Premium() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 26;
        var2 = var6[var2];
        var3 = undefined;
        var8 = var5.bind(var3)(var2);
        var7 = var8.useStateFromStores;
        var2 = _closure1_slot6;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() {
            var2 = _closure1_slot6;
            var1 = var2.getCurrentUser;
            var1 = var1.bind(var2)();
            return var1;
        };
        var4 = var7.bind(var8)(var4, var2);
        var2 = 15;
        var2 = var6[var2];
        var3 = var5.bind(var3)(var2);
        var2 = var3.isPremiumExactly;
        var1 = _closure1_slot39;
        var1 = var1.TIER_2;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var3['useHasTier2Premium'] = var18;
    var18 = function getOfferNoticeThreshold(arg1) {
        _fun0099: for(var _fun0099_ip = 0; ; ) switch(_fun0099_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot46;
            var4 = _closure1_slot99;
            var5 = undefined;
            var4 = var4.bind(var5)(var3);
            if(var4) { _fun0099_ip = 480; continue _fun0099 }
case 38:
            var4 = _closure1_slot100;
            var4 = var4.bind(var5)(var3);
            if(var4) { _fun0099_ip = 40; continue _fun0099 }
case 41:
            return var2;
case 40:
            return var2;
case 480:
            var4 = var3.trial_id;
            var3 = _closure1_slot35;
            if(!(var3 !== var4)) { _fun0099_ip = 35; continue _fun0099 }
case 196:
            var3 = _closure1_slot36;
            if(!(var3 !== var4)) { _fun0099_ip = 396; continue _fun0099 }
case 43:
            return var2;
case 396:
            var2 = _closure1_slot44;
            return var2;
case 35:
            var1 = _closure1_slot45;
            return var1;
        }
    };
    var3['getOfferNoticeThreshold'] = var18;
    var3['isTrialOffer'] = var17;
    var3['isDiscountOffer'] = var16;
    var3['formatInterval'] = var15;
    var3['isPremiumEligible'] = var14;
    var3['getFractionalPremiumUnitsHours'] = var13;
    var3['getFractionalPremiumUnitsHoursFromSkuIds'] = var12;
    var3['getMonthlyPrice'] = var11;
    var10 = function getSavingsPercent(arg1) {
        _fun0100: for(var _fun0100_ip = 0; ; ) switch(_fun0100_ip) {
case 0:
            var1 = arg1;
            var3 = var1.planId;
            var6 = var1.isGift;
            var5 = var1.priceOptions;
            var4 = var1.subscriptionPlan;
            var1 = _closure1_slot15;
            var1 = var1[var3];
            var3 = null;
            if(!(var3 != var4)) { _fun0100_ip = 462; continue _fun0100 }
case 103:
            var3 = _closure1_slot105;
            var2 = undefined;
            var1 = var3.bind(var2)(var4, var6, var5);
case 462:
            return var1;
        }
    };
    var3['getSavingsPercent'] = var10;
    var3['calculateMonthlyPriceEquivalentTotal'] = var9;
    var3['calculateDiscountPercentageForYearlyPlan'] = var8;
    var3['calculateYearlyPlanDollarSavingsAmount'] = var7;
    var3['calculateYearlyPlanMonthsSaved'] = var6;
    var3['calculateYearlyPlanMonthlyRateAmount'] = var5;
    var3['getDaysSincePremium'] = var4;
    var3['getDaysRemainingUntilSubscriptionCurrentPeriodEnds'] = var2;
    return var1;
})();
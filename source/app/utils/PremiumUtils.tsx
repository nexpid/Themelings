// app/utils/PremiumUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var13 = require;
    var66 = metroImportDefault;
    var3 = exports;
    var14 = dependencyMap;
    var _closure1_slot0 = var13;
    var _closure1_slot1 = var66;
    var _closure1_slot2 = var14;
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
            var2 = var3.@@iterator;
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
            var9 = _closure1_slot55;
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
            var7 = _closure1_slot55;
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
    var _closure1_slot54 = var1;
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
    var _closure1_slot55 = var1;
    var65 = function getPremiumPlanItem(arg1) {
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
    var _closure1_slot56 = var65;
    var64 = function getDefaultPrice(arg1) {
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
            var3 = _closure1_slot58;
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
    var _closure1_slot57 = var64;
    var63 = function getPrice(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var8 = arg1;
            var1 = arguments[1];
            var5 = arguments[2];
            var15 = arguments[3];
            var3 = arguments[4];
            var4 = undefined;
            if(!(var1 === var4)) { _fun0005_ip = 31; continue _fun0005 }
case 46:
            var1 = false;
case 31:
            if(!(var5 === var4)) { _fun0005_ip = 47; continue _fun0005 }
case 48:
            var5 = false;
case 47:
            if(!(var15 === var4)) { _fun0005_ip = 49; continue _fun0005 }
case 33:
            var15 = {};
case 49:
            if(!(var3 === var4)) { _fun0005_ip = 50; continue _fun0005 }
case 51:
            var3 = true;
case 50:
            var9 = var15.paymentSourceId;
            var7 = var15.currency;
            var10 = _closure1_slot8;
            var6 = var10.get;
            var10 = var6.bind(var10)(var8);
            var6 = null;
            if(!(var6 == var10)) { _fun0005_ip = 52; continue _fun0005 }
case 53:
            var10 = global;
            var12 = var10.Error;
            var10 = var12.prototype;
            var11 = Object.create(var10, {constructor: {value: var12}});
            var19 = 'Plan not found';
            var20 = var11;
            var10 = new var20[var12](var19, var18);
            var10 = var10 instanceof Object ? var10 : var11;
            if(!var3) { _fun0005_ip = 54; continue _fun0005 }
case 55:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var11 = 11;
            var11 = var13[var11];
            var13 = var12.bind(var4)(var11);
            var12 = var13.captureBillingException;
            var11 = {};
            var14 = {};
            var14['planId'] = var8;
            var17 = var6 != var7;
            var16 = 'unknown';
            if(!var17) { _fun0005_ip = 56; continue _fun0005 }
case 57:
            var16 = var7;
case 56:
            var14['currency'] = var16;
            var11['tags'] = var14;
            var14 = {};
            var19 = var14;
            var18 = var15;
            var15 = copyDataProperties(var19, var18);
            var15 = 'isGift';
            var14[var15] = var5;
            var11['extra'] = var14;
            var11 = var12.bind(var13)(var10, var11);
case 54:
            throw var10;
case 52:
            var10 = _closure1_slot12;
            var10 = var10.DEFAULT;
            if(var5) { _fun0005_ip = 58; continue _fun0005 }
case 59:
            if(!var1) { _fun0005_ip = 23; continue _fun0005 }
case 60:
            var1 = _closure1_slot12;
            var10 = var1.PREMIUM_TIER_1;
            _fun0005_ip = 23; continue _fun0005;
case 58:
            var1 = _closure1_slot12;
            var10 = var1.GIFT;
case 23:
            var5 = _closure1_slot61;
            var1 = {};
            var1['paymentSourceId'] = var9;
            var1['purchaseType'] = var10;
            var1['currency'] = var7;
            var1 = var5.bind(var4)(var8, var1);
            if(!(var6 != var1)) { _fun0005_ip = 61; continue _fun0005 }
case 62:
            return var1;
case 61:
            var1 = global;
            var11 = var1.Error;
            var1 = var11.prototype;
            var5 = Object.create(var1, {constructor: {value: var11}});
            var19 = "Couldn't find price";
            var20 = var5;
            var1 = new var20[var11](var19, var18);
            var1 = var1 instanceof Object ? var1 : var5;
            if(!var3) { _fun0005_ip = 63; continue _fun0005 }
case 64:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 11;
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
            if(!var8) { _fun0005_ip = 65; continue _fun0005 }
case 66:
            var6 = var7;
case 65:
            var5['currency'] = var6;
            var2['tags'] = var5;
            var2 = var3.bind(var4)(var1, var2);
case 63:
            throw var1;
        }
    };
    var _closure1_slot58 = var63;
    var1 = function getPurchaseTypePrices(arg1, arg2) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var6 = arg1;
            var7 = arg2;
            var3 = _closure1_slot8;
            var1 = var3.get;
            var3 = var1.bind(var3)(var6);
            var4 = null;
            if(!(var4 != var3)) { _fun0006_ip = 67; continue _fun0006 }
case 39:
            var1 = var3.prices;
            if(!(var4 != var1)) { _fun0006_ip = 68; continue _fun0006 }
case 69:
            var1 = var3.prices;
            var1 = var1[var7];
            if(!(var4 != var1)) { _fun0006_ip = 7; continue _fun0006 }
case 70:
            return var1;
case 7:
            var5 = _closure1_slot50;
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
case 68:
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
case 67:
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
            var2 = 11;
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
    var _closure1_slot59 = var1;
    var62 = function experimentalGetPrices(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var6 = arg1;
            var1 = arguments[1];
            var4 = undefined;
            if(!(var1 === var4)) { _fun0007_ip = 49; continue _fun0007 }
case 71:
            var2 = {};
            var3 = _closure1_slot12;
            var3 = var3.DEFAULT;
            var2['purchaseType'] = var3;
            var1 = var2;
case 49:
            var11 = var1.paymentSourceId;
            var12 = var1.purchaseType;
            var1 = _closure1_slot59;
            var7 = var1.bind(var4)(var6, var12);
            var3 = null;
            if(!(var3 != var11)) { _fun0007_ip = 72; continue _fun0007 }
case 73:
            var1 = var7.paymentSourcePrices;
            var13 = var1[var11];
            if(!(var3 != var13)) { _fun0007_ip = 45; continue _fun0007 }
case 74:
            var5 = var13.length;
            var1 = 0;
            if(!(var1 !== var5)) { _fun0007_ip = 72; continue _fun0007 }
case 75:
            return var13;
case 45:
            var9 = _closure1_slot50;
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
            var9 = _closure1_slot50;
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
            var1 = 11;
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
case 72:
            var1 = var7.countryPrices;
            var1 = var1.prices;
            if(!(var3 != var1)) { _fun0007_ip = 76; continue _fun0007 }
case 77:
            var1 = var7.countryPrices;
            var1 = var1.prices;
            return var1;
case 76:
            var8 = _closure1_slot50;
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
            var2 = 11;
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
    var _closure1_slot60 = var62;
    var61 = function experimentalGetPrice(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var13 = arg1;
            var1 = arguments[1];
            var6 = undefined;
            if(!(var1 === var6)) { _fun0008_ip = 78; continue _fun0008 }
case 32:
            var3 = {};
            var4 = _closure1_slot12;
            var4 = var4.DEFAULT;
            var3['purchaseType'] = var4;
            var1 = var3;
case 78:
            var12 = var1.paymentSourceId;
            var11 = var1.purchaseType;
            var5 = var1.currency;
            var _closure2_slot0 = var5;
            var4 = _closure1_slot60;
            var1 = {};
            var1['paymentSourceId'] = var12;
            var1['purchaseType'] = var11;
            var4 = var4.bind(var6)(var13, var1);
            var6 = var4.length;
            var1 = 0;
            if(!(var1 === var6)) { _fun0008_ip = 79; continue _fun0008 }
case 80:
            var7 = _closure1_slot50;
            var6 = var7.warn;
            var3 = global;
            var3 = var3.HermesInternal;
            var10 = var3.concat;
            var19 = 'No prices found for planId: ';
            var17 = ', paymentSourceId: ';
            var15 = ', purchaseType: ';
            var18 = var13;
            var16 = var12;
            var14 = var11;
            var3 = var19[var10](var18, var17, var16, var15, var14, var13);
            var3 = var6.bind(var7)(var3);
case 79:
            var3 = null;
            if(!(var3 == var5)) { _fun0008_ip = 56; continue _fun0008 }
case 81:
            var1 = var4[var1];
            _fun0008_ip = 82; continue _fun0008;
case 56:
            var3 = var4.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.currency;
                var3 = _closure2_slot0;
                var1 = var3.toLowerCase;
                var1 = var1.bind(var3)();
                var1 = var2 === var1;
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 82:
            return var1;
        }
    };
    var _closure1_slot61 = var61;
    var60 = function getServerPriceFromClientPrice(arg1) {
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
    var _closure1_slot62 = var60;
    var59 = function getItemPlansTotalServerPrice(arg1, arg2, arg3) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var5 = arg1;
            var11 = arg2;
            var10 = arg3;
            var3 = {'currency': null, 'amount': 0, 'tax': 0, 'taxInclusive': false};
            var3['currency'] = var11;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var2 = 12;
            var4 = var4[var2];
            var2 = undefined;
            var6 = var6.bind(var2)(var4);
            var4 = var6.getBaseSubscriptionItemForSubscriptionItems;
            var4 = var4.bind(var6)(var5);
            var6 = null;
            var6 = var6 != var4;
            var12 = undefined;
            if(!var6) { _fun0009_ip = 11; continue _fun0009 }
case 83:
            var6 = _closure1_slot41;
            var4 = var4.planId;
            var4 = var6[var4];
            var12 = var4.premiumType;
case 11:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 13;
            var8 = var7[var4];
            var14 = var6.bind(var2)(var8);
            var13 = var14.isPremiumAtLeast;
            var8 = _closure1_slot37;
            var8 = var8.TIER_0;
            var8 = var13.bind(var14)(var12, var8);
            var4 = var7[var4];
            var7 = var6.bind(var2)(var4);
            var6 = var7.isPremiumAtLeast;
            var4 = _closure1_slot37;
            var4 = var4.TIER_2;
            var7 = var6.bind(var7)(var12, var4);
            var4 = _closure1_slot54;
            var6 = var4.bind(var2)(var5);
            var5 = var6.bind(var2)();
            var4 = var5.done;
            if(var4) { _fun0009_ip = 84; continue _fun0009 }
case 85:
            var4 = var5.value;
            var14 = _closure1_slot31;
            var13 = var14.has;
            var12 = var4.planId;
            var12 = var13.bind(var14)(var12);
            var15 = var7;
            if(var12) { _fun0009_ip = 67; continue _fun0009 }
case 86:
            var14 = _closure1_slot32;
            var13 = var14.has;
            var12 = var4.planId;
            var12 = var13.bind(var14)(var12);
            var12 = !var12;
            if(!var12) { _fun0009_ip = 87; continue _fun0009 }
case 88:
            var12 = var8;
case 87:
            var15 = var12;
case 67:
            if(!(var2 !== var10)) { _fun0009_ip = 89; continue _fun0009 }
case 90:
            var14 = _closure1_slot58;
            var20 = var4.planId;
            var12 = {};
            var12['paymentSourceId'] = var10;
            var12['currency'] = var11;
            var21 = undefined;
            var19 = var15;
            var18 = false;
            var17 = var12;
            var13 = var21[var14](var20, var19, var18, var17, var16);
            _fun0009_ip = 91; continue _fun0009;
case 89:
            var14 = _closure1_slot57;
            var20 = var4.planId;
            var21 = undefined;
            var19 = var15;
            var18 = false;
            var17 = var11;
            var13 = var21[var14](var20, var19, var18, var17, var16);
case 91:
            var12 = var3.amount;
            var13 = var13.amount;
            var4 = var4.quantity;
            var4 = var13 * var4;
            var4 = var12 + var4;
            var3['amount'] = var4;
            var12 = var6.bind(var2)();
            var4 = var12.done;
            var5 = var12;
            if(!var4) { _fun0009_ip = 85; continue _fun0009 }
case 84:
            var1 = _closure1_slot62;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot63 = var59;
    var58 = function getInterval(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var7 = arg1;
            var1 = _closure1_slot41;
            var2 = var1[var7];
            var1 = null;
            if(!(var1 == var2)) { _fun0010_ip = 92; continue _fun0010 }
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
            var3 = 11;
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
case 92:
            var1 = {};
            var3 = var2.interval;
            var1['intervalType'] = var3;
            var2 = var2.intervalCount;
            var1['intervalCount'] = var2;
            return var1;
        }
    };
    var57 = function getIntervalString(arg1, arg2, arg3) {
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
case 93:
            var3 = false;
case 48:
            if(!(var4 === var6)) { _fun0011_ip = 94; continue _fun0011 }
case 95:
            var1 = _closure1_slot37;
            var4 = var1.TIER_2;
case 94:
            var1 = arg2;
            if(var1) { _fun0011_ip = 96; continue _fun0011 }
case 97:
            var1 = arg3;
            if(var1) { _fun0011_ip = 96; continue _fun0011 }
case 43:
            var1 = _closure1_slot40;
            var1 = var1.MONTH;
            if(!(var1 !== var5)) { _fun0011_ip = 98; continue _fun0011 }
case 53:
            var1 = _closure1_slot40;
            var1 = var1.YEAR;
            if(!(var1 !== var5)) { _fun0011_ip = 99; continue _fun0011 }
case 100:
            var1 = global;
            var8 = var1.Error;
            var1 = var8.prototype;
            var7 = Object.create(var1, {constructor: {value: var8}});
            var15 = 'Unexpected interval';
            var16 = var7;
            var1 = new var16[var8](var15, var14);
            var1 = var1 instanceof Object ? var1 : var7;
            throw var1;
case 99:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 15;
            var7 = var11[var1];
            var7 = var9.bind(var6)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var1 = var11[var1];
            var1 = var9.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1./Q4HRE;
            var1 = var7.bind(var8)(var1);
            return var1;
case 98:
            var1 = 1;
            if(!(var1 === var10)) { _fun0011_ip = 101; continue _fun0011 }
case 20:
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var1 = 15;
            var7 = var11[var1];
            var7 = var9.bind(var6)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var1 = var11[var1];
            var1 = var9.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.DKzs9/;
            var1 = var7.bind(var8)(var1);
            _fun0011_ip = 102; continue _fun0011;
case 101:
            var7 = _closure1_slot0;
            var11 = _closure1_slot2;
            var2 = 15;
            var8 = var11[var2];
            var8 = var7.bind(var6)(var8);
            var9 = var8.intl;
            var8 = var9.formatToPlainString;
            var2 = var11[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var7 = var2.0UlZnJ;
            var2 = {};
            var2['intervalCount'] = var10;
            var1 = var8.bind(var9)(var7, var2);
case 102:
            return var1;
case 96:
            var1 = _closure1_slot40;
            var1 = var1.MONTH;
            if(!(var1 !== var5)) { _fun0011_ip = 103; continue _fun0011 }
case 104:
            var1 = _closure1_slot40;
            var1 = var1.YEAR;
            if(!(var1 !== var5)) { _fun0011_ip = 105; continue _fun0011 }
case 106:
            var1 = global;
            var7 = var1.Error;
            var1 = var7.prototype;
            var5 = Object.create(var1, {constructor: {value: var7}});
            var15 = 'Unexpected interval';
            var16 = var5;
            var1 = new var16[var7](var15, var14);
            var1 = var1 instanceof Object ? var1 : var5;
            throw var1;
case 105:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var10 = 15;
            var1 = var1[var10];
            var1 = var5.bind(var6)(var1);
            var8 = var1.intl;
            var7 = var8.formatToPlainString;
            var1 = _closure1_slot37;
            var1 = var1.TIER_0;
            if(!(var4 !== var1)) { _fun0011_ip = 107; continue _fun0011 }
case 108:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var10];
            var1 = var5.bind(var6)(var1);
            var1 = var1.t;
            var5 = var1.poEovb;
            _fun0011_ip = 109; continue _fun0011;
case 107:
            var9 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var10];
            var1 = var9.bind(var6)(var1);
            var1 = var1.t;
            var5 = var1.NPKsLy;
case 109:
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
            var9 = var9.tfqrho;
            var9 = var11.bind(var12)(var9);
            var1['timeInterval'] = var9;
            var1 = var7.bind(var8)(var5, var1);
            if(var3) { _fun0011_ip = 110; continue _fun0011 }
case 111:
            var9 = _closure1_slot0;
            var5 = _closure1_slot2;
            var7 = var5[var10];
            var7 = var9.bind(var6)(var7);
            var8 = var7.intl;
            var7 = var8.string;
            var5 = var5[var10];
            var5 = var9.bind(var6)(var5);
            var5 = var5.t;
            var5 = var5.DRgqMj;
            var1 = var7.bind(var8)(var5);
case 110:
            return var1;
case 103:
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var7 = 15;
            var1 = var1[var7];
            var1 = var5.bind(var6)(var1);
            var8 = var1.intl;
            var5 = var8.formatToPlainString;
            var1 = _closure1_slot37;
            var1 = var1.TIER_0;
            if(!(var4 !== var1)) { _fun0011_ip = 112; continue _fun0011 }
case 113:
            var4 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var4.bind(var6)(var1);
            var1 = var1.t;
            var4 = var1.poEovb;
            _fun0011_ip = 114; continue _fun0011;
case 112:
            var9 = _closure1_slot0;
            var1 = _closure1_slot2;
            var1 = var1[var7];
            var1 = var9.bind(var6)(var1);
            var1 = var1.t;
            var4 = var1.NPKsLy;
case 114:
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
            var9 = var9.FPybU1;
            var9 = var10.bind(var11)(var9);
            var1['timeInterval'] = var9;
            var1 = var5.bind(var8)(var4, var1);
            if(var3) { _fun0011_ip = 115; continue _fun0011 }
case 116:
            var5 = _closure1_slot0;
            var2 = _closure1_slot2;
            var3 = var2[var7];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var2[var7];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.Mh9bTk;
            var1 = var3.bind(var4)(var2);
case 115:
            return var1;
        }
    };
    var56 = function getIntervalStringAsNoun(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot40;
            var2 = var2.MONTH;
            if(!(var2 !== var3)) { _fun0012_ip = 99; continue _fun0012 }
case 29:
            var2 = _closure1_slot40;
            var2 = var2.YEAR;
            if(!(var2 !== var3)) { _fun0012_ip = 35; continue _fun0012 }
case 117:
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
            var2 = 15;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.tfqrho;
            var2 = var3.bind(var4)(var2);
            return var2;
case 99:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 15;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.FPybU1;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot64 = var56;
    var55 = function getPremiumType(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var7 = arg1;
            var1 = _closure1_slot41;
            var1 = var1[var7];
            var2 = null;
            if(!(var2 == var1)) { _fun0013_ip = 92; continue _fun0013 }
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
            var3 = 11;
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
case 92:
            var1 = var1.premiumType;
            return var1;
        }
    };
    var _closure1_slot65 = var55;
    var54 = function getDisplayName(arg1) {
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
            if(!(var3 !== var11)) { _fun0014_ip = 118; continue _fun0014 }
case 2:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_YEAR_TIER_0;
            if(!(var3 !== var11)) { _fun0014_ip = 119; continue _fun0014 }
case 120:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_MONTH_TIER_1;
            if(!(var3 !== var11)) { _fun0014_ip = 121; continue _fun0014 }
case 122:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_YEAR_TIER_1;
            if(!(var3 !== var11)) { _fun0014_ip = 123; continue _fun0014 }
case 75:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_MONTH_TIER_2;
            if(!(var3 !== var11)) { _fun0014_ip = 124; continue _fun0014 }
case 125:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_YEAR_TIER_2;
            if(!(var3 !== var11)) { _fun0014_ip = 126; continue _fun0014 }
case 127:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_3_MONTH_TIER_2;
            if(!(var3 !== var11)) { _fun0014_ip = 128; continue _fun0014 }
case 129:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_6_MONTH_TIER_2;
            if(!(var3 !== var11)) { _fun0014_ip = 130; continue _fun0014 }
case 56:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_MONTH_GUILD;
            if(!(var3 !== var11)) { _fun0014_ip = 113; continue _fun0014 }
case 131:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_YEAR_GUILD;
            if(!(var3 !== var11)) { _fun0014_ip = 132; continue _fun0014 }
case 133:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_3_MONTH_GUILD;
            if(!(var3 !== var11)) { _fun0014_ip = 134; continue _fun0014 }
case 135:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_6_MONTH_GUILD;
            if(!(var3 !== var11)) { _fun0014_ip = 136; continue _fun0014 }
case 137:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_MONTH_LEGACY;
            if(!(var3 !== var11)) { _fun0014_ip = 138; continue _fun0014 }
case 88:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_YEAR_LEGACY;
            if(!(var3 !== var11)) { _fun0014_ip = 139; continue _fun0014 }
case 140:
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
            var5 = 11;
            var5 = var9[var5];
            var9 = var8.bind(var7)(var5);
            var8 = var9.captureBillingException;
            var5 = {};
            var10 = {};
            var10['planId'] = var11;
            var5['tags'] = var10;
            var5 = var8.bind(var9)(var3, var5);
            throw var3;
case 139:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 15;
            var5 = var10[var3];
            var5 = var9.bind(var7)(var5);
            var8 = var5.intl;
            var5 = var8.string;
            var3 = var10[var3];
            var3 = var9.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.LtJgTE;
            var3 = var5.bind(var8)(var3);
            return var3;
case 138:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 15;
            var5 = var10[var3];
            var5 = var9.bind(var7)(var5);
            var8 = var5.intl;
            var5 = var8.string;
            var3 = var10[var3];
            var3 = var9.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.PD6k7+;
            var3 = var5.bind(var8)(var3);
            return var3;
case 136:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 15;
            var5 = var10[var3];
            var5 = var9.bind(var7)(var5);
            var8 = var5.intl;
            var5 = var8.string;
            var3 = var10[var3];
            var3 = var9.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.X2KDOz;
            var3 = var5.bind(var8)(var3);
            return var3;
case 134:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 15;
            var5 = var10[var3];
            var5 = var9.bind(var7)(var5);
            var8 = var5.intl;
            var5 = var8.string;
            var3 = var10[var3];
            var3 = var9.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.EZHHBw;
            var3 = var5.bind(var8)(var3);
            return var3;
case 132:
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 15;
            var8 = var10[var3];
            var8 = var5.bind(var7)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var3 = var10[var3];
            var3 = var5.bind(var7)(var3);
            var5 = var3.t;
            if(var1) { _fun0014_ip = 141; continue _fun0014 }
case 142:
            var3 = var5.ZHkls7;
            var3 = var8.bind(var9)(var3);
            _fun0014_ip = 143; continue _fun0014;
case 141:
            var5 = var5.YDpAzc;
            var3 = var8.bind(var9)(var5);
case 143:
            return var3;
case 113:
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 15;
            var8 = var10[var3];
            var8 = var5.bind(var7)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var3 = var10[var3];
            var3 = var5.bind(var7)(var3);
            var5 = var3.t;
            if(var1) { _fun0014_ip = 144; continue _fun0014 }
case 145:
            var3 = var5.h80cx8;
            var3 = var8.bind(var9)(var3);
            _fun0014_ip = 146; continue _fun0014;
case 144:
            var5 = var5.6ZR3Bw;
            var3 = var8.bind(var9)(var5);
case 146:
            return var3;
case 130:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 15;
            var5 = var10[var3];
            var5 = var9.bind(var7)(var5);
            var8 = var5.intl;
            var5 = var8.string;
            var3 = var10[var3];
            var3 = var9.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.e3/Ara;
            var3 = var5.bind(var8)(var3);
            return var3;
case 128:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 15;
            var5 = var10[var3];
            var5 = var9.bind(var7)(var5);
            var8 = var5.intl;
            var5 = var8.string;
            var3 = var10[var3];
            var3 = var9.bind(var7)(var3);
            var3 = var3.t;
            var3 = var3.wCbINj;
            var3 = var5.bind(var8)(var3);
            return var3;
case 126:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 15;
            var3 = var11[var5];
            var3 = var8.bind(var7)(var3);
            var10 = var3.intl;
            if(var4) { _fun0014_ip = 147; continue _fun0014 }
case 148:
            var12 = var10.string;
            var3 = var11[var5];
            var3 = var8.bind(var7)(var3);
            var9 = var3.t;
            if(var1) { _fun0014_ip = 149; continue _fun0014 }
case 150:
            var3 = var9.cfu/5e;
            var3 = var12.bind(var10)(var3);
            _fun0014_ip = 151; continue _fun0014;
case 149:
            var9 = var9.JIq4Oz;
            var3 = var12.bind(var10)(var9);
case 151:
            _fun0014_ip = 152; continue _fun0014;
case 147:
            var9 = var10.format;
            var5 = var11[var5];
            var5 = var8.bind(var7)(var5);
            var5 = var5.t;
            var8 = var5.1wBcPj;
            var5 = {};
            var5['duration'] = var6;
            var3 = var9.bind(var10)(var8, var5);
case 152:
            return var3;
case 124:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 15;
            var3 = var11[var5];
            var3 = var8.bind(var7)(var3);
            var10 = var3.intl;
            if(var4) { _fun0014_ip = 153; continue _fun0014 }
case 154:
            var12 = var10.string;
            var3 = var11[var5];
            var3 = var8.bind(var7)(var3);
            var9 = var3.t;
            if(var1) { _fun0014_ip = 155; continue _fun0014 }
case 156:
            var3 = var9.FKYNCw;
            var3 = var12.bind(var10)(var3);
            _fun0014_ip = 157; continue _fun0014;
case 155:
            var9 = var9.SmVbHR;
            var3 = var12.bind(var10)(var9);
case 157:
            _fun0014_ip = 158; continue _fun0014;
case 153:
            var9 = var10.format;
            var5 = var11[var5];
            var5 = var8.bind(var7)(var5);
            var5 = var5.t;
            var8 = var5.aI6QX1;
            var5 = {};
            var5['duration'] = var6;
            var3 = var9.bind(var10)(var8, var5);
case 158:
            return var3;
case 123:
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 15;
            var8 = var10[var3];
            var8 = var5.bind(var7)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var3 = var10[var3];
            var3 = var5.bind(var7)(var3);
            var5 = var3.t;
            if(var1) { _fun0014_ip = 159; continue _fun0014 }
case 160:
            var3 = var5.Md5xbm;
            var3 = var8.bind(var9)(var3);
            _fun0014_ip = 161; continue _fun0014;
case 159:
            var5 = var5.pdZJam;
            var3 = var8.bind(var9)(var5);
case 161:
            return var3;
case 121:
            var5 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 15;
            var8 = var10[var3];
            var8 = var5.bind(var7)(var8);
            var9 = var8.intl;
            var8 = var9.string;
            var3 = var10[var3];
            var3 = var5.bind(var7)(var3);
            var5 = var3.t;
            if(var1) { _fun0014_ip = 162; continue _fun0014 }
case 163:
            var3 = var5.7O6qSk;
            var3 = var8.bind(var9)(var3);
            _fun0014_ip = 164; continue _fun0014;
case 162:
            var5 = var5.g/dH5u;
            var3 = var8.bind(var9)(var5);
case 164:
            return var3;
case 119:
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 15;
            var3 = var11[var5];
            var3 = var8.bind(var7)(var3);
            var10 = var3.intl;
            if(var4) { _fun0014_ip = 165; continue _fun0014 }
case 166:
            var12 = var10.string;
            var3 = var11[var5];
            var3 = var8.bind(var7)(var3);
            var9 = var3.t;
            if(var1) { _fun0014_ip = 167; continue _fun0014 }
case 168:
            var3 = var9.eoVuBg;
            var3 = var12.bind(var10)(var3);
            _fun0014_ip = 169; continue _fun0014;
case 167:
            var9 = var9.UvzqY2;
            var3 = var12.bind(var10)(var9);
case 169:
            _fun0014_ip = 170; continue _fun0014;
case 165:
            var9 = var10.format;
            var5 = var11[var5];
            var5 = var8.bind(var7)(var5);
            var5 = var5.t;
            var8 = var5.eqRhCw;
            var5 = {};
            var5['duration'] = var6;
            var3 = var9.bind(var10)(var8, var5);
case 170:
            return var3;
case 118:
            var3 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 15;
            var5 = var8[var2];
            var5 = var3.bind(var7)(var5);
            var5 = var5.intl;
            if(var4) { _fun0014_ip = 171; continue _fun0014 }
case 172:
            var9 = var5.string;
            var4 = var8[var2];
            var4 = var3.bind(var7)(var4);
            var4 = var4.t;
            if(var1) { _fun0014_ip = 173; continue _fun0014 }
case 174:
            var1 = var4.0efVPz;
            var1 = var9.bind(var5)(var1);
            _fun0014_ip = 175; continue _fun0014;
case 173:
            var4 = var4.81iAgo;
            var1 = var9.bind(var5)(var4);
case 175:
            _fun0014_ip = 176; continue _fun0014;
case 171:
            var4 = var5.format;
            var2 = var8[var2];
            var2 = var3.bind(var7)(var2);
            var2 = var2.t;
            var3 = var2.TZXHNj;
            var2 = {};
            var2['duration'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 176:
            return var1;
        }
    };
    var _closure1_slot66 = var54;
    var53 = function getDisplayPremiumType(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var7 = arg1;
            var2 = arguments[1];
            var5 = undefined;
            if(!(var2 === var5)) { _fun0015_ip = 32; continue _fun0015 }
case 71:
            var2 = false;
case 32:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_MONTH_TIER_0;
            if(!(var1 !== var7)) { _fun0015_ip = 177; continue _fun0015 }
case 117:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_YEAR_TIER_0;
            if(!(var1 !== var7)) { _fun0015_ip = 177; continue _fun0015 }
case 178:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_MONTH_TIER_1;
            if(!(var1 !== var7)) { _fun0015_ip = 21; continue _fun0015 }
case 179:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_YEAR_TIER_1;
            if(!(var1 !== var7)) { _fun0015_ip = 21; continue _fun0015 }
case 180:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_MONTH_TIER_2;
            if(!(var1 !== var7)) { _fun0015_ip = 181; continue _fun0015 }
case 182:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_YEAR_TIER_2;
            if(!(var1 !== var7)) { _fun0015_ip = 181; continue _fun0015 }
case 55:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_3_MONTH_TIER_2;
            if(!(var1 !== var7)) { _fun0015_ip = 181; continue _fun0015 }
case 183:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_6_MONTH_TIER_2;
            if(!(var1 !== var7)) { _fun0015_ip = 181; continue _fun0015 }
case 184:
            var1 = global;
            var6 = var1.Error;
            var1 = var6.prototype;
            var4 = Object.create(var1, {constructor: {value: var6}});
            var9 = 'Unsupported plan';
            var10 = var4;
            var1 = new var10[var6](var9, var8);
            var1 = var1 instanceof Object ? var1 : var4;
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 11;
            var3 = var6[var3];
            var5 = var4.bind(var5)(var3);
            var4 = var5.captureBillingException;
            var3 = {};
            var6 = {};
            var6['planId'] = var7;
            var3['tags'] = var6;
            var3 = var4.bind(var5)(var1, var3);
            throw var1;
case 181:
            var1 = 'Nitro';
            return var1;
case 21:
            var1 = 'Nitro Classic';
            if(!var2) { _fun0015_ip = 18; continue _fun0015 }
case 185:
            var1 = 'Classic';
case 18:
            return var1;
case 177:
            var1 = 'Nitro Basic';
            if(!var2) { _fun0015_ip = 140; continue _fun0015 }
case 90:
            var1 = 'Basic';
case 140:
            return var1;
        }
    };
    var73 = function getPlanDescription(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var13 = var1.subscription;
            var17 = var1.planId;
            var7 = var1.price;
            var10 = var1.includePremiumGuilds;
            var16 = var1.hasDiscountApplied;
            var24 = var1.activeDiscountInfo;
            var2 = var1.renewalInvoicePreview;
            var6 = var1.hasFractionalPremiumWithSub;
            var1 = _closure1_slot41;
            var1 = var1[var17];
            var5 = _closure1_slot90;
            var9 = _closure1_slot57;
            var4 = var1.id;
            var8 = undefined;
            var4 = var9.bind(var8)(var4);
            var1 = var1.interval;
            var22 = var5.bind(var8)(var4, var1);
            var1 = _closure1_slot80;
            var9 = var1.bind(var8)(var13);
            if(var9) { _fun0016_ip = 186; continue _fun0016 }
case 187:
            var1 = var13.paymentSourceId;
            var4 = null;
            var1 = var4 == var1;
            if(!var1) { _fun0016_ip = 188; continue _fun0016 }
case 189:
            var5 = var13.isPurchasedExternally;
            var1 = !var5;
case 188:
            if(!var1) { _fun0016_ip = 190; continue _fun0016 }
case 191:
            var11 = _closure1_slot5;
            var5 = var11.getCurrentUser;
            var11 = var5.bind(var11)();
            var4 = var4 != var11;
            if(!var4) { _fun0016_ip = 192; continue _fun0016 }
case 193:
            var5 = var11.hasFreePremium;
            var4 = var5.bind(var11)();
case 192:
            var1 = !var4;
case 190:
            var9 = var1;
case 186:
            var4 = null;
            var1 = var4 != var7;
            if(!var1) { _fun0016_ip = 194; continue _fun0016 }
case 131:
            var5 = var13.paymentGateway;
            var1 = var4 == var5;
case 194:
            var11 = var13.status;
            var5 = _closure1_slot13;
            var5 = var5.UNPAID;
            var5 = var11 === var5;
            if(!var5) { _fun0016_ip = 86; continue _fun0016 }
case 195:
            var11 = var13.latestInvoice;
            var5 = var4 !== var11;
case 86:
            if(!var5) { _fun0016_ip = 196; continue _fun0016 }
case 197:
            var11 = var13.latestInvoice;
            var14 = var4 == var11;
            var12 = undefined;
            if(var14) { _fun0016_ip = 23; continue _fun0016 }
case 198:
            var12 = var11.status;
case 23:
            var11 = _closure1_slot10;
            var11 = var11.OPEN;
            var5 = var12 === var11;
case 196:
            if(var9) { _fun0016_ip = 199; continue _fun0016 }
case 140:
            if(var5) { _fun0016_ip = 200; continue _fun0016 }
case 201:
            var11 = var13.status;
            _fun0016_ip = 202; continue _fun0016;
case 200:
            var5 = _closure1_slot13;
            var11 = var5.UNPAID;
case 202:
            _fun0016_ip = 203; continue _fun0016;
case 199:
            var5 = _closure1_slot13;
            var11 = var5.CANCELED;
case 203:
            var9 = var4 == var2;
            var5 = undefined;
            if(var9) { _fun0016_ip = 204; continue _fun0016 }
case 205:
            var5 = var2.taxInclusive;
case 204:
            if(!(var4 == var5)) { _fun0016_ip = 206; continue _fun0016 }
case 207:
            var9 = var13.latestInvoice;
            var12 = var4 == var9;
            var2 = undefined;
            if(var12) { _fun0016_ip = 208; continue _fun0016 }
case 26:
            var2 = var9.taxInclusive;
case 208:
            var5 = var2;
case 206:
            var2 = var4 == var5;
            if(var2) { _fun0016_ip = 209; continue _fun0016 }
case 139:
            var2 = var5;
case 209:
            var9 = _closure1_slot27;
            var5 = 0;
            if(!var10) { _fun0016_ip = 210; continue _fun0016 }
case 211:
            var12 = _closure1_slot69;
            var10 = var13.additionalPlans;
            var5 = var12.bind(var8)(var10);
case 210:
            var20 = var9 + var5;
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var9 = 15;
            var5 = var10[var9];
            var5 = var12.bind(var8)(var5);
            var19 = var5.intl;
            if(var1) { _fun0016_ip = 212; continue _fun0016 }
case 138:
            var14 = var19.string;
            var5 = var10[var9];
            var5 = var12.bind(var8)(var5);
            var5 = var5.t;
            var5 = var5.zYx3Y2;
            var5 = var14.bind(var19)(var5);
            _fun0016_ip = 213; continue _fun0016;
case 212:
            var18 = var19.format;
            var10 = var10[var9];
            var10 = var12.bind(var8)(var10);
            var12 = var10.t;
            if(var2) { _fun0016_ip = 214; continue _fun0016 }
case 215:
            var14 = var12.NUkcpK;
            var10 = {};
            var10['price'] = var7;
            var10 = var18.bind(var19)(var14, var10);
            _fun0016_ip = 216; continue _fun0016;
case 214:
            var14 = var12.cd+hqK;
            var12 = {};
            var12['price'] = var7;
            var10 = var18.bind(var19)(var14, var12);
case 216:
            var5 = var10;
case 213:
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = var12[var9];
            var10 = var14.bind(var8)(var10);
            var21 = var10.intl;
            if(var1) { _fun0016_ip = 217; continue _fun0016 }
case 218:
            var18 = var21.string;
            var10 = var12[var9];
            var10 = var14.bind(var8)(var10);
            var10 = var10.t;
            var10 = var10.8rSipK;
            var10 = var18.bind(var21)(var10);
            _fun0016_ip = 219; continue _fun0016;
case 217:
            var19 = var21.format;
            var12 = var12[var9];
            var12 = var14.bind(var8)(var12);
            var14 = var12.t;
            if(var2) { _fun0016_ip = 220; continue _fun0016 }
case 221:
            var18 = var14.hJ5xER;
            var12 = {};
            var12['price'] = var7;
            var12 = var19.bind(var21)(var18, var12);
            _fun0016_ip = 222; continue _fun0016;
case 220:
            var18 = var14.VsKcFB;
            var14 = {};
            var14['price'] = var7;
            var12 = var19.bind(var21)(var18, var14);
case 222:
            var10 = var12;
case 219:
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var18 = var12[var9];
            var18 = var14.bind(var8)(var18);
            var23 = var18.intl;
            var21 = var23.format;
            var12 = var12[var9];
            var12 = var14.bind(var8)(var12);
            var18 = var12.t;
            if(var1) { _fun0016_ip = 223; continue _fun0016 }
case 224:
            var14 = var18.U+z/HB;
            var12 = {};
            var12['num'] = var20;
            var12 = var21.bind(var23)(var14, var12);
            _fun0016_ip = 225; continue _fun0016;
case 223:
            if(var2) { _fun0016_ip = 146; continue _fun0016 }
case 145:
            var19 = var18.tTNE8P;
            var14 = {};
            var14['price'] = var7;
            var14['num'] = var20;
            var14 = var21.bind(var23)(var19, var14);
            _fun0016_ip = 226; continue _fun0016;
case 146:
            var19 = var18.jRy6/P;
            var18 = {};
            var18['price'] = var7;
            var18['num'] = var20;
            var14 = var21.bind(var23)(var19, var18);
case 226:
            var12 = var14;
case 225:
            var14 = _closure1_slot42;
            var14 = var14.PREMIUM_MONTH_TIER_0;
            if(!(var14 !== var17)) { _fun0016_ip = 227; continue _fun0016 }
case 228:
            var14 = _closure1_slot42;
            var14 = var14.PREMIUM_YEAR_TIER_0;
            if(!(var14 !== var17)) { _fun0016_ip = 227; continue _fun0016 }
case 229:
            var14 = _closure1_slot42;
            var14 = var14.PREMIUM_MONTH_TIER_1;
            if(!(var14 !== var17)) { _fun0016_ip = 230; continue _fun0016 }
case 231:
            var14 = _closure1_slot42;
            var14 = var14.PREMIUM_YEAR_TIER_1;
            if(!(var14 !== var17)) { _fun0016_ip = 230; continue _fun0016 }
case 232:
            var14 = _closure1_slot42;
            var14 = var14.PREMIUM_MONTH_TIER_2;
            if(!(var14 !== var17)) { _fun0016_ip = 233; continue _fun0016 }
case 234:
            var14 = _closure1_slot42;
            var14 = var14.PREMIUM_YEAR_TIER_2;
            if(!(var14 !== var17)) { _fun0016_ip = 233; continue _fun0016 }
case 235:
            var14 = _closure1_slot42;
            var14 = var14.PREMIUM_3_MONTH_TIER_2;
            if(!(var14 !== var17)) { _fun0016_ip = 233; continue _fun0016 }
case 236:
            var14 = _closure1_slot42;
            var14 = var14.PREMIUM_6_MONTH_TIER_2;
            if(!(var14 !== var17)) { _fun0016_ip = 233; continue _fun0016 }
case 237:
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
case 233:
            var14 = _closure1_slot13;
            var14 = var14.CANCELED;
            if(!(var14 !== var11)) { _fun0016_ip = 238; continue _fun0016 }
case 239:
            var14 = _closure1_slot13;
            var14 = var14.ACCOUNT_HOLD;
            if(!(var14 !== var11)) { _fun0016_ip = 240; continue _fun0016 }
case 152:
            var14 = _closure1_slot13;
            var14 = var14.UNPAID;
            if(!(var14 !== var11)) { _fun0016_ip = 241; continue _fun0016 }
case 242:
            var14 = _closure1_slot13;
            var14 = var14.PAUSE_PENDING;
            if(!(var14 !== var11)) { _fun0016_ip = 243; continue _fun0016 }
case 244:
            var14 = _closure1_slot13;
            var14 = var14.PAUSED;
            if(!(var14 !== var11)) { _fun0016_ip = 245; continue _fun0016 }
case 246:
            var14 = _closure1_slot13;
            var14 = var14.BILLING_RETRY;
            if(!(var14 !== var11)) { _fun0016_ip = 247; continue _fun0016 }
case 248:
            var14 = _closure1_slot13;
            var14 = var14.PAST_DUE;
            if(!(var14 !== var11)) { _fun0016_ip = 249; continue _fun0016 }
case 250:
            var14 = var12;
            if(!var16) { _fun0016_ip = 251; continue _fun0016 }
case 252:
            var16 = _closure1_slot42;
            var16 = var16.PREMIUM_YEAR_TIER_2;
            if(!(var17 !== var16)) { _fun0016_ip = 253; continue _fun0016 }
case 254:
            var17 = _closure1_slot0;
            var16 = _closure1_slot2;
            var18 = var16[var9];
            var18 = var17.bind(var8)(var18);
            var21 = var18.intl;
            var19 = var21.formatToPlainString;
            var16 = var16[var9];
            var16 = var17.bind(var8)(var16);
            var17 = var16.t;
            if(var2) { _fun0016_ip = 255; continue _fun0016 }
case 256:
            var18 = var17.G6+XOT;
            var16 = {};
            var25 = var4 == var24;
            var23 = undefined;
            if(var25) { _fun0016_ip = 257; continue _fun0016 }
case 258:
            var23 = var24.percentage;
case 257:
            if(!(var4 == var23)) { _fun0016_ip = 259; continue _fun0016 }
case 260:
            var23 = _closure1_slot19;
case 259:
            var16['percent'] = var23;
            var16['regularPrice'] = var22;
            var25 = var4 == var24;
            var23 = undefined;
            if(var25) { _fun0016_ip = 261; continue _fun0016 }
case 262:
            var23 = var24.duration;
case 261:
            if(!(var4 == var23)) { _fun0016_ip = 263; continue _fun0016 }
case 264:
            var23 = _closure1_slot18;
case 263:
            var16['numMonths'] = var23;
            var16 = var19.bind(var21)(var18, var16);
            _fun0016_ip = 265; continue _fun0016;
case 255:
            var18 = var17.3Ziutb;
            var17 = {};
            var25 = var4 == var24;
            var23 = undefined;
            if(var25) { _fun0016_ip = 266; continue _fun0016 }
case 267:
            var23 = var24.percentage;
case 266:
            if(!(var4 == var23)) { _fun0016_ip = 268; continue _fun0016 }
case 162:
            var23 = _closure1_slot19;
case 268:
            var17['percent'] = var23;
            var17['regularPrice'] = var22;
            var25 = var4 == var24;
            var23 = undefined;
            if(var25) { _fun0016_ip = 269; continue _fun0016 }
case 270:
            var23 = var24.duration;
case 269:
            if(!(var4 == var23)) { _fun0016_ip = 271; continue _fun0016 }
case 272:
            var23 = _closure1_slot18;
case 271:
            var17['numMonths'] = var23;
            var16 = var19.bind(var21)(var18, var17);
case 265:
            _fun0016_ip = 273; continue _fun0016;
case 253:
            var18 = _closure1_slot0;
            var17 = _closure1_slot2;
            var19 = var17[var9];
            var19 = var18.bind(var8)(var19);
            var21 = var19.intl;
            var19 = var21.format;
            var17 = var17[var9];
            var17 = var18.bind(var8)(var17);
            var17 = var17.t;
            var18 = var17.+qqh6u;
            var17 = {};
            var25 = var4 == var24;
            var23 = undefined;
            if(var25) { _fun0016_ip = 274; continue _fun0016 }
case 275:
            var23 = var24.percentage;
case 274:
            if(!(var4 == var23)) { _fun0016_ip = 276; continue _fun0016 }
case 277:
            var23 = _closure1_slot14;
case 276:
            var17['percent'] = var23;
            var17['regularPrice'] = var22;
            var16 = var19.bind(var21)(var18, var17);
case 273:
            var14 = var16;
case 251:
            return var14;
case 249:
            var21 = _closure1_slot0;
            var22 = _closure1_slot2;
            var14 = var22[var9];
            var14 = var21.bind(var8)(var14);
            var18 = var14.intl;
            var17 = var18.format;
            var14 = var22[var9];
            var14 = var21.bind(var8)(var14);
            var14 = var14.t;
            var16 = var14.d+0vws;
            var14 = {};
            var19 = 17;
            var19 = var22[var19];
            var23 = var21.bind(var8)(var19);
            var22 = var23.dateFormat;
            var19 = _closure1_slot73;
            var19 = var19.bind(var8)(var13);
            var21 = var19.expiresDate;
            var19 = 'LL';
            var19 = var22.bind(var23)(var21, var19);
            var14['endDate'] = var19;
            var19 = function onClick() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 18;
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
case 247:
            var16 = _closure1_slot0;
            var22 = _closure1_slot2;
            var14 = var22[var9];
            var14 = var16.bind(var8)(var14);
            var18 = var14.intl;
            var17 = var18.format;
            var14 = var22[var9];
            var14 = var16.bind(var8)(var14);
            var14 = var14.t;
            var16 = var14.IlJ/HR;
            var14 = {};
            var21 = _closure1_slot1;
            var19 = 16;
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
case 245:
            if(var6) { _fun0016_ip = 278; continue _fun0016 }
case 279:
            var16 = _closure1_slot0;
            var14 = _closure1_slot2;
            var17 = var14[var9];
            var17 = var16.bind(var8)(var17);
            var18 = var17.intl;
            var17 = var18.format;
            var14 = var14[var9];
            var14 = var16.bind(var8)(var14);
            var14 = var14.t;
            var16 = var14.6RTdZG;
            var14 = {};
            var19 = var13.pauseEndsAt;
            var14['resumeDate'] = var19;
            var12 = var17.bind(var18)(var16, var14);
case 278:
            return var12;
case 243:
            var12 = var13.pauseEndsAt;
            var12 = var4 != var12;
            var19 = null;
            if(!var12) { _fun0016_ip = 280; continue _fun0016 }
case 281:
            var14 = _closure1_slot1;
            var16 = _closure1_slot2;
            var12 = 16;
            var12 = var16[var12];
            var14 = var14.bind(var8)(var12);
            var12 = var13.pauseEndsAt;
            var17 = var14.bind(var8)(var12);
            var16 = var17.diff;
            var14 = var13.currentPeriodEnd;
            var12 = 'days';
            var19 = var16.bind(var17)(var14, var12);
case 280:
            if(!(var4 == var19)) { _fun0016_ip = 282; continue _fun0016 }
case 283:
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var16 = var12[var9];
            var16 = var14.bind(var8)(var16);
            var17 = var16.intl;
            var16 = var17.format;
            var12 = var12[var9];
            var12 = var14.bind(var8)(var12);
            var12 = var12.t;
            var14 = var12.VlWufn;
            var12 = {};
            var18 = var13.currentPeriodEnd;
            var12['pauseDate'] = var18;
            var12 = var16.bind(var17)(var14, var12);
            _fun0016_ip = 284; continue _fun0016;
case 282:
            var16 = _closure1_slot0;
            var14 = _closure1_slot2;
            var17 = var14[var9];
            var17 = var16.bind(var8)(var17);
            var18 = var17.intl;
            var17 = var18.format;
            var14 = var14[var9];
            var14 = var16.bind(var8)(var14);
            var14 = var14.t;
            var16 = var14.WUfODw;
            var14 = {};
            var21 = var13.currentPeriodEnd;
            var14['pauseDate'] = var21;
            var14['pauseDuration'] = var19;
            var12 = var17.bind(var18)(var16, var14);
case 284:
            return var12;
case 241:
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var16 = var12[var9];
            var16 = var14.bind(var8)(var16);
            var17 = var16.intl;
            var16 = var17.format;
            var12 = var12[var9];
            var12 = var14.bind(var8)(var12);
            var12 = var12.t;
            var14 = var12.0HopYW;
            var12 = {};
            var12['num'] = var20;
            var12 = var16.bind(var17)(var14, var12);
            return var12;
case 240:
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var16 = var12[var9];
            var16 = var14.bind(var8)(var16);
            var19 = var16.intl;
            var18 = var19.format;
            var12 = var12[var9];
            var12 = var14.bind(var8)(var12);
            var16 = var12.t;
            if(var1) { _fun0016_ip = 285; continue _fun0016 }
case 286:
            var14 = var16.ivjxcn;
            var12 = {};
            var12['num'] = var20;
            var12 = var18.bind(var19)(var14, var12);
            _fun0016_ip = 287; continue _fun0016;
case 285:
            if(var2) { _fun0016_ip = 288; continue _fun0016 }
case 289:
            var17 = var16.xfYkho;
            var14 = {};
            var14['price'] = var7;
            var14['num'] = var20;
            var14 = var18.bind(var19)(var17, var14);
            _fun0016_ip = 290; continue _fun0016;
case 288:
            var17 = var16.5C/0QE;
            var16 = {};
            var16['price'] = var7;
            var16['num'] = var20;
            var14 = var18.bind(var19)(var17, var16);
case 290:
            var12 = var14;
case 287:
            return var12;
case 238:
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var16 = var12[var9];
            var16 = var14.bind(var8)(var16);
            var19 = var16.intl;
            var18 = var19.format;
            var12 = var12[var9];
            var12 = var14.bind(var8)(var12);
            var16 = var12.t;
            if(var1) { _fun0016_ip = 291; continue _fun0016 }
case 292:
            var14 = var16.EcSdRE;
            var12 = {};
            var12['num'] = var20;
            var12 = var18.bind(var19)(var14, var12);
            _fun0016_ip = 293; continue _fun0016;
case 291:
            if(var2) { _fun0016_ip = 294; continue _fun0016 }
case 295:
            var17 = var16.nXdbKi;
            var14 = {};
            var14['price'] = var7;
            var14['num'] = var20;
            var14 = var18.bind(var19)(var17, var14);
            _fun0016_ip = 296; continue _fun0016;
case 294:
            var17 = var16.xoFgRk;
            var16 = {};
            var16['price'] = var7;
            var16['num'] = var20;
            var14 = var18.bind(var19)(var17, var16);
case 296:
            var12 = var14;
case 293:
            return var12;
case 230:
            var12 = _closure1_slot13;
            var12 = var12.CANCELED;
            if(!(var12 !== var11)) { _fun0016_ip = 297; continue _fun0016 }
case 298:
            var12 = _closure1_slot13;
            var12 = var12.ACCOUNT_HOLD;
            if(!(var12 !== var11)) { _fun0016_ip = 299; continue _fun0016 }
case 300:
            var12 = _closure1_slot13;
            var12 = var12.UNPAID;
            if(!(var12 !== var11)) { _fun0016_ip = 301; continue _fun0016 }
case 302:
            var12 = _closure1_slot13;
            var12 = var12.PAUSE_PENDING;
            if(!(var12 !== var11)) { _fun0016_ip = 303; continue _fun0016 }
case 304:
            var12 = _closure1_slot13;
            var12 = var12.PAUSED;
            if(!(var12 !== var11)) { _fun0016_ip = 305; continue _fun0016 }
case 306:
            var12 = _closure1_slot13;
            var12 = var12.PAST_DUE;
            if(!(var12 !== var11)) { _fun0016_ip = 307; continue _fun0016 }
case 308:
            return var10;
case 307:
            var19 = _closure1_slot0;
            var20 = _closure1_slot2;
            var12 = var20[var9];
            var12 = var19.bind(var8)(var12);
            var17 = var12.intl;
            var16 = var17.format;
            var12 = var20[var9];
            var12 = var19.bind(var8)(var12);
            var12 = var12.t;
            var14 = var12.d+0vws;
            var12 = {};
            var18 = 17;
            var18 = var20[var18];
            var21 = var19.bind(var8)(var18);
            var20 = var21.dateFormat;
            var18 = _closure1_slot73;
            var18 = var18.bind(var8)(var13);
            var19 = var18.expiresDate;
            var18 = 'LL';
            var18 = var20.bind(var21)(var19, var18);
            var12['endDate'] = var18;
            var18 = function onClick() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 18;
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
case 305:
            if(var6) { _fun0016_ip = 309; continue _fun0016 }
case 310:
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var16 = var12[var9];
            var16 = var14.bind(var8)(var16);
            var17 = var16.intl;
            var16 = var17.format;
            var12 = var12[var9];
            var12 = var14.bind(var8)(var12);
            var12 = var12.t;
            var14 = var12.6RTdZG;
            var12 = {};
            var18 = var13.pauseEndsAt;
            var12['resumeDate'] = var18;
            var10 = var16.bind(var17)(var14, var12);
case 309:
            return var10;
case 303:
            var10 = var13.pauseEndsAt;
            var10 = var4 != var10;
            var18 = null;
            if(!var10) { _fun0016_ip = 311; continue _fun0016 }
case 312:
            var12 = _closure1_slot1;
            var14 = _closure1_slot2;
            var10 = 16;
            var10 = var14[var10];
            var12 = var12.bind(var8)(var10);
            var10 = var13.pauseEndsAt;
            var16 = var12.bind(var8)(var10);
            var14 = var16.diff;
            var12 = var13.currentPeriodEnd;
            var10 = 'days';
            var18 = var14.bind(var16)(var12, var10);
case 311:
            if(!(var4 == var18)) { _fun0016_ip = 313; continue _fun0016 }
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
            var12 = var10.VlWufn;
            var10 = {};
            var17 = var13.currentPeriodEnd;
            var10['pauseDate'] = var17;
            var10 = var14.bind(var16)(var12, var10);
            _fun0016_ip = 315; continue _fun0016;
case 313:
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var16 = var12[var9];
            var16 = var14.bind(var8)(var16);
            var17 = var16.intl;
            var16 = var17.format;
            var12 = var12[var9];
            var12 = var14.bind(var8)(var12);
            var12 = var12.t;
            var14 = var12.WUfODw;
            var12 = {};
            var19 = var13.currentPeriodEnd;
            var12['pauseDate'] = var19;
            var12['pauseDuration'] = var18;
            var10 = var16.bind(var17)(var14, var12);
case 315:
            return var10;
case 301:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var14 = var10[var9];
            var14 = var12.bind(var8)(var14);
            var16 = var14.intl;
            var14 = var16.format;
            var10 = var10[var9];
            var10 = var12.bind(var8)(var10);
            var10 = var10.t;
            var12 = var10.McIzws;
            var10 = {};
            var10 = var14.bind(var16)(var12, var10);
            return var10;
case 299:
            var12 = _closure1_slot0;
            var10 = _closure1_slot2;
            var14 = var10[var9];
            var14 = var12.bind(var8)(var14);
            var18 = var14.intl;
            var17 = var18.format;
            var10 = var10[var9];
            var10 = var12.bind(var8)(var10);
            var14 = var10.t;
            if(var1) { _fun0016_ip = 316; continue _fun0016 }
case 317:
            var12 = var14.0+/WHx;
            var10 = {};
            var10 = var17.bind(var18)(var12, var10);
            _fun0016_ip = 318; continue _fun0016;
case 316:
            if(var2) { _fun0016_ip = 319; continue _fun0016 }
case 320:
            var16 = var14.ZsO1S0;
            var12 = {};
            var12['price'] = var7;
            var12 = var17.bind(var18)(var16, var12);
            _fun0016_ip = 321; continue _fun0016;
case 319:
            var16 = var14.HBkIBg;
            var14 = {};
            var14['price'] = var7;
            var12 = var17.bind(var18)(var16, var14);
case 321:
            var10 = var12;
case 318:
            return var10;
case 297:
            var14 = _closure1_slot0;
            var12 = _closure1_slot2;
            var10 = var12[var9];
            var10 = var14.bind(var8)(var10);
            var18 = var10.intl;
            if(var1) { _fun0016_ip = 322; continue _fun0016 }
case 323:
            var16 = var18.string;
            var10 = var12[var9];
            var10 = var14.bind(var8)(var10);
            var10 = var10.t;
            var10 = var10.K6tYFR;
            var10 = var16.bind(var18)(var10);
            _fun0016_ip = 324; continue _fun0016;
case 322:
            var17 = var18.format;
            var12 = var12[var9];
            var12 = var14.bind(var8)(var12);
            var14 = var12.t;
            if(var2) { _fun0016_ip = 325; continue _fun0016 }
case 326:
            var16 = var14.C/XsHh;
            var12 = {};
            var12['price'] = var7;
            var12 = var17.bind(var18)(var16, var12);
            _fun0016_ip = 327; continue _fun0016;
case 325:
            var16 = var14.cXy8Bg;
            var14 = {};
            var14['price'] = var7;
            var12 = var17.bind(var18)(var16, var14);
case 327:
            var10 = var12;
case 324:
            return var10;
case 227:
            var10 = _closure1_slot13;
            var10 = var10.CANCELED;
            if(!(var10 !== var11)) { _fun0016_ip = 328; continue _fun0016 }
case 329:
            var10 = _closure1_slot13;
            var10 = var10.ACCOUNT_HOLD;
            if(!(var10 !== var11)) { _fun0016_ip = 330; continue _fun0016 }
case 331:
            var10 = _closure1_slot13;
            var10 = var10.UNPAID;
            if(!(var10 !== var11)) { _fun0016_ip = 332; continue _fun0016 }
case 333:
            var10 = _closure1_slot13;
            var10 = var10.PAUSE_PENDING;
            if(!(var10 !== var11)) { _fun0016_ip = 334; continue _fun0016 }
case 335:
            var10 = _closure1_slot13;
            var10 = var10.PAUSED;
            if(!(var10 !== var11)) { _fun0016_ip = 336; continue _fun0016 }
case 337:
            var10 = _closure1_slot13;
            var10 = var10.PAST_DUE;
            if(!(var10 !== var11)) { _fun0016_ip = 338; continue _fun0016 }
case 339:
            return var5;
case 338:
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var10 = var18[var9];
            var10 = var17.bind(var8)(var10);
            var14 = var10.intl;
            var12 = var14.format;
            var10 = var18[var9];
            var10 = var17.bind(var8)(var10);
            var10 = var10.t;
            var11 = var10.d+0vws;
            var10 = {};
            var16 = 17;
            var16 = var18[var16];
            var19 = var17.bind(var8)(var16);
            var18 = var19.dateFormat;
            var16 = _closure1_slot73;
            var16 = var16.bind(var8)(var13);
            var17 = var16.expiresDate;
            var16 = 'LL';
            var16 = var18.bind(var19)(var17, var16);
            var10['endDate'] = var16;
            var15 = function onClick() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 18;
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
case 336:
            if(var6) { _fun0016_ip = 340; continue _fun0016 }
case 341:
            var10 = _closure1_slot0;
            var6 = _closure1_slot2;
            var11 = var6[var9];
            var11 = var10.bind(var8)(var11);
            var12 = var11.intl;
            var11 = var12.format;
            var6 = var6[var9];
            var6 = var10.bind(var8)(var6);
            var6 = var6.t;
            var10 = var6.6RTdZG;
            var6 = {};
            var14 = var13.pauseEndsAt;
            var6['resumeDate'] = var14;
            var5 = var11.bind(var12)(var10, var6);
case 340:
            return var5;
case 334:
            var5 = var13.pauseEndsAt;
            var5 = var4 != var5;
            var12 = null;
            if(!var5) { _fun0016_ip = 342; continue _fun0016 }
case 343:
            var6 = _closure1_slot1;
            var10 = _closure1_slot2;
            var5 = 16;
            var5 = var10[var5];
            var6 = var6.bind(var8)(var5);
            var5 = var13.pauseEndsAt;
            var11 = var6.bind(var8)(var5);
            var10 = var11.diff;
            var6 = var13.currentPeriodEnd;
            var5 = 'days';
            var12 = var10.bind(var11)(var6, var5);
case 342:
            if(!(var4 == var12)) { _fun0016_ip = 344; continue _fun0016 }
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
            var5 = var4.VlWufn;
            var4 = {};
            var11 = var13.currentPeriodEnd;
            var4['pauseDate'] = var11;
            var4 = var6.bind(var10)(var5, var4);
            _fun0016_ip = 346; continue _fun0016;
case 344:
            var6 = _closure1_slot0;
            var5 = _closure1_slot2;
            var10 = var5[var9];
            var10 = var6.bind(var8)(var10);
            var11 = var10.intl;
            var10 = var11.format;
            var5 = var5[var9];
            var5 = var6.bind(var8)(var5);
            var5 = var5.t;
            var6 = var5.WUfODw;
            var5 = {};
            var13 = var13.currentPeriodEnd;
            var5['pauseDate'] = var13;
            var5['pauseDuration'] = var12;
            var4 = var10.bind(var11)(var6, var5);
case 346:
            return var4;
case 332:
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
case 330:
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var6 = var4[var9];
            var6 = var5.bind(var8)(var6);
            var12 = var6.intl;
            var11 = var12.format;
            var4 = var4[var9];
            var4 = var5.bind(var8)(var4);
            var6 = var4.t;
            if(var1) { _fun0016_ip = 347; continue _fun0016 }
case 348:
            var5 = var6.SsLIXV;
            var4 = {};
            var4 = var11.bind(var12)(var5, var4);
            _fun0016_ip = 349; continue _fun0016;
case 347:
            if(var2) { _fun0016_ip = 350; continue _fun0016 }
case 351:
            var10 = var6.nkAEfX;
            var5 = {};
            var5['price'] = var7;
            var5 = var11.bind(var12)(var10, var5);
            _fun0016_ip = 352; continue _fun0016;
case 350:
            var10 = var6.5mv+2t;
            var6 = {};
            var6['price'] = var7;
            var5 = var11.bind(var12)(var10, var6);
case 352:
            var4 = var5;
case 349:
            return var4;
case 328:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var5 = var3[var9];
            var5 = var4.bind(var8)(var5);
            var6 = var5.intl;
            if(var1) { _fun0016_ip = 353; continue _fun0016 }
case 354:
            var5 = var6.string;
            var1 = var3[var9];
            var1 = var4.bind(var8)(var1);
            var1 = var1.t;
            var1 = var1.JshLzs;
            var1 = var5.bind(var6)(var1);
            _fun0016_ip = 355; continue _fun0016;
case 353:
            var5 = var6.format;
            var3 = var3[var9];
            var3 = var4.bind(var8)(var3);
            var3 = var3.t;
            if(var2) { _fun0016_ip = 356; continue _fun0016 }
case 357:
            var4 = var3.FS//l5;
            var2 = {};
            var2['price'] = var7;
            var2 = var5.bind(var6)(var4, var2);
            _fun0016_ip = 358; continue _fun0016;
case 356:
            var4 = var3.USi/nZ;
            var3 = {};
            var3['price'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 358:
            var1 = var2;
case 355:
            return var1;
        }
    };
    var _closure1_slot67 = var73;
    var52 = function getPremiumPlanOptions(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var2 = arg1;
            var11 = var2.skuId;
            var3 = var2.isPremium;
            var4 = var2.multiMonthPlans;
            var6 = var2.currentSubscription;
            var5 = var2.defaultPlanId;
            var2 = undefined;
            var _closure2_slot0 = var2;
            var7 = null;
            if(!(var7 != var11)) { _fun0017_ip = 359; continue _fun0017 }
case 360:
            if(!var3) { _fun0017_ip = 359; continue _fun0017 }
case 361:
            var3 = undefined;
            if(!(var2 !== var5)) { _fun0017_ip = 362; continue _fun0017 }
case 363:
            var8 = _closure1_slot41;
            var8 = var8[var5];
            var8 = var8.skuId;
            var3 = undefined;
            if(!(var11 === var8)) { _fun0017_ip = 362; continue _fun0017 }
case 364:
            var3 = var5;
case 362:
            var8 = _closure1_slot36;
            var8 = var8.TIER_0;
            if(!(var8 !== var11)) { _fun0017_ip = 365; continue _fun0017 }
case 366:
            var8 = _closure1_slot36;
            var8 = var8.TIER_1;
            if(!(var8 !== var11)) { _fun0017_ip = 206; continue _fun0017 }
case 99:
            var8 = _closure1_slot36;
            var8 = var8.TIER_2;
            if(!(var8 !== var11)) { _fun0017_ip = 20; continue _fun0017 }
case 367:
            var8 = global;
            var10 = var8.Error;
            var8 = var8.HermesInternal;
            var9 = var8.concat;
            var8 = 'Unexpected SKU: ';
            var14 = var9.bind(var8)(var11);
            var9 = var10.prototype;
            var9 = Object.create(var9, {constructor: {value: var10}});
            var15 = var9;
            var8 = new var15[var10](var14, var13);
            var8 = var8 instanceof Object ? var8 : var9;
            throw var8;
case 20:
            if(!(var7 != var6)) { _fun0017_ip = 202; continue _fun0017 }
case 133:
            var6 = var6.items;
            var8 = 0;
            var6 = var6[var8];
            var7 = var6.planId;
            var9 = _closure1_slot26;
            var6 = var9.has;
            var6 = var6.bind(var9)(var7);
            if(var6) { _fun0017_ip = 368; continue _fun0017 }
case 21:
            var4 = new Array(0);
            _fun0017_ip = 202; continue _fun0017;
case 368:
            var6 = _closure1_slot41;
            var6 = var6[var7];
            _closure2_slot0 = var6;
            var13 = _closure1_slot26;
            var7 = new Array(0);
            var14 = var7;
            var12 = 0;
            var6 = arraySpread(var14, var13, var12);
            var6 = var7.filter;
            var1 = function(arg1) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var3 = _closure1_slot41;
                    var1 = arg1;
                    var3 = var3[var1];
                    var5 = var3.interval;
                    var1 = _closure2_slot0;
                    var1 = var1.interval;
                    var1 = var5 === var1;
                    if(!var1) { _fun0018_ip = 361; continue _fun0018 }
case 369:
                    var5 = var3.intervalCount;
                    var4 = _closure2_slot0;
                    var4 = var4.intervalCount;
                    var1 = var5 === var4;
case 361:
                    if(!var1) { _fun0018_ip = 74; continue _fun0018 }
case 120:
                    var3 = var3.skuId;
                    var2 = _closure1_slot36;
                    var2 = var2.TIER_2;
                    var1 = var3 === var2;
case 74:
                    return var1;
                }
            };
            var4 = var6.bind(var7)(var1);
case 202:
            var1 = _closure1_slot42;
            var6 = var1.PREMIUM_YEAR_TIER_2;
            var1 = new Array(2);
            var1[0] = var6;
            var6 = 1;
            var14 = var1;
            var13 = var4;
            var12 = var6;
            var4 = arraySpread(var14, var13, var12);
            var7 = _closure1_slot42;
            var7 = var7.PREMIUM_MONTH_TIER_2;
            var1[var4] = var7;
            var4 = var4 + var6;
            _fun0017_ip = 370; continue _fun0017;
case 206:
            var4 = _closure1_slot42;
            var6 = var4.PREMIUM_MONTH_TIER_1;
            var4 = new Array(1);
            var4[0] = var6;
            var1 = var4;
            _fun0017_ip = 370; continue _fun0017;
case 365:
            var4 = _closure1_slot42;
            var6 = var4.PREMIUM_YEAR_TIER_0;
            var4 = new Array(2);
            var4[0] = var6;
            var5 = _closure1_slot42;
            var5 = var5.PREMIUM_MONTH_TIER_0;
            var4[1] = var5;
            var1 = var4;
case 370:
            if(!(var2 !== var3)) { _fun0017_ip = 371; continue _fun0017 }
case 372:
            var2 = var1.indexOf;
            var5 = var2.bind(var1)(var3);
            var4 = var1.splice;
            var2 = 1;
            var2 = var4.bind(var1)(var5, var2);
            var2 = var1.unshift;
            var2 = var2.bind(var1)(var3);
case 371:
            return var1;
case 359:
            var1 = new Array(0);
            return var1;
        }
    };
    var72 = function getSkuIdForPlan(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
            var6 = arg1;
            var1 = _closure1_slot41;
            var1 = var1[var6];
            var3 = null;
            if(!(var3 != var1)) { _fun0019_ip = 34; continue _fun0019 }
case 29:
            var1 = var1.skuId;
            return var1;
case 34:
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
            var2 = 11;
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
    var _closure1_slot68 = var72;
    var51 = function getNumPremiumGuildSubscriptions(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var4 = arg1;
            var6 = _closure1_slot8;
            var5 = var6.getPlanIdsForSkus;
            var3 = _closure1_slot36;
            var7 = var3.GUILD;
            var3 = new Array(1);
            var3[0] = var7;
            var3 = var5.bind(var6)(var3);
            var _closure2_slot0 = var3;
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 14;
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
            if(!var3) { _fun0020_ip = 373; continue _fun0020 }
case 366:
            var1 = var2.quantity;
case 373:
            return var1;
        }
    };
    var _closure1_slot69 = var51;
    var50 = function subscriptionHasPremiumGuildPlan(arg1) {
        var3 = _closure1_slot69;
        var1 = arg1;
        var2 = var1.additionalPlans;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        var1 = 0;
        var1 = var2 > var1;
        return var1;
    };
    var _closure1_slot70 = var50;
    var49 = function isPremiumBaseSubscriptionPlan(arg1) {
        var3 = _closure1_slot53;
        var2 = var3.has;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot71 = var49;
    var48 = function isPremiumGuildSubscriptionPlan(arg1) {
        var3 = _closure1_slot31;
        var2 = var3.has;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot72 = var48;
    var47 = function getBillingGracePeriodDaysAndExpiresDate(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var3 = arg1;
            var1 = var3.isPurchasedViaApple;
            if(!var1) { _fun0021_ip = 94; continue _fun0021 }
case 71:
            var4 = var3.metadata;
            var2 = null;
            var5 = var2 == var4;
            var6 = undefined;
            var1 = undefined;
            if(var5) { _fun0021_ip = 78; continue _fun0021 }
case 95:
            var1 = var4.apple_grace_period_expires_date;
case 78:
            if(!(var2 == var1)) { _fun0021_ip = 374; continue _fun0021 }
case 94:
            var1 = var3.isPurchasedViaGoogle;
            if(!var1) { _fun0021_ip = 13; continue _fun0021 }
case 97:
            var4 = var3.metadata;
            var2 = null;
            var5 = var2 == var4;
            var7 = undefined;
            var1 = undefined;
            if(var5) { _fun0021_ip = 375; continue _fun0021 }
case 376:
            var1 = var4.google_grace_period_expires_date;
case 375:
            if(!(var2 != var1)) { _fun0021_ip = 13; continue _fun0021 }
case 377:
            var4 = var3.metadata;
            var5 = var2 == var4;
            var1 = undefined;
            if(var5) { _fun0021_ip = 378; continue _fun0021 }
case 75:
            var1 = var4.google_original_expires_date;
case 378:
            if(!(var2 == var1)) { _fun0021_ip = 379; continue _fun0021 }
case 13:
            var1 = var3.isPurchasedExternally;
            if(var1) { _fun0021_ip = 380; continue _fun0021 }
case 381:
            var2 = var3.metadata;
            var4 = null;
            var8 = var4 == var2;
            var5 = undefined;
            var1 = undefined;
            if(var8) { _fun0021_ip = 382; continue _fun0021 }
case 383:
            var1 = var2.grace_period_expires_date;
case 382:
            if(!(var4 == var1)) { _fun0021_ip = 368; continue _fun0021 }
case 384:
            var1 = var3.paymentSourceId;
            if(!(var4 != var1)) { _fun0021_ip = 190; continue _fun0021 }
case 385:
            var10 = _closure1_slot30;
            _fun0021_ip = 386; continue _fun0021;
case 190:
            var10 = _closure1_slot17;
case 386:
            var1 = {};
            var1['days'] = var10;
            var8 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 16;
            var2 = var9[var2];
            var8 = var8.bind(var5)(var2);
            var2 = var3.currentPeriodStart;
            var9 = var8.bind(var5)(var2);
            var8 = var9.add;
            var2 = 'days';
            var2 = var8.bind(var9)(var10, var2);
            var1['expiresDate'] = var2;
            return var1;
case 368:
            var1 = {};
            var10 = _closure1_slot1;
            var9 = _closure1_slot2;
            var8 = 16;
            var9 = var9[var8];
            var9 = var10.bind(var5)(var9);
            var10 = var3.metadata;
            var11 = var4 == var10;
            var4 = undefined;
            if(var11) { _fun0021_ip = 199; continue _fun0021 }
case 61:
            var4 = var10.grace_period_expires_date;
case 199:
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
case 380:
            var1 = var3.isPurchasedViaApple;
            if(var1) { _fun0021_ip = 387; continue _fun0021 }
case 388:
            var8 = _closure1_slot16;
            _fun0021_ip = 389; continue _fun0021;
case 387:
            var8 = _closure1_slot15;
case 389:
            var1 = {};
            var1['days'] = var8;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 16;
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
case 379:
            var5 = _closure1_slot1;
            var9 = _closure1_slot2;
            var4 = 16;
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
case 374:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 16;
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
    var _closure1_slot73 = var47;
    var46 = function getBillingInformationString(arg1, arg2) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var5 = arg1;
            var8 = arg2;
            var1 = arguments[2];
            var3 = arguments[3];
            var11 = arguments[4];
            var6 = undefined;
            if(!(var1 === var6)) { _fun0022_ip = 93; continue _fun0022 }
case 31:
            var1 = null;
case 93:
            if(!(var3 === var6)) { _fun0022_ip = 95; continue _fun0022 }
case 47:
            var3 = false;
case 95:
            if(!(var11 === var6)) { _fun0022_ip = 390; continue _fun0022 }
case 49:
            var2 = {'isFractionalPremiumActive': false, 'fetched': true};
            var9 = _closure1_slot23;
            var9 = var9.NONE;
            var2['fractionalState'] = var9;
            var10 = _closure1_slot1;
            var12 = _closure1_slot2;
            var4 = 16;
            var9 = var12[var4];
            var13 = var10.bind(var6)(var9);
            var9 = 0;
            var13 = var13.bind(var6)(var9);
            var2['startsAt'] = var13;
            var4 = var12[var4];
            var4 = var10.bind(var6)(var4);
            var4 = var4.bind(var6)(var9);
            var2['endsAt'] = var4;
            var4 = '';
            var2['currentEntitlementId'] = var4;
            var4 = new Array(0);
            var2['unactivatedUnits'] = var4;
            var11 = var2;
case 390:
            var4 = null;
            var2 = var8;
            if(!(var4 !== var1)) { _fun0022_ip = 391; continue _fun0022 }
case 129:
            var10 = var5.status;
            var9 = _closure1_slot13;
            var9 = var9.PAST_DUE;
            var2 = var8;
            if(!(var10 === var9)) { _fun0022_ip = 391; continue _fun0022 }
case 186:
            var2 = var1;
case 391:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 19;
            var9 = var12[var9];
            var12 = var10.bind(var6)(var9);
            var9 = var12.formatPrice;
            if(var3) { _fun0022_ip = 392; continue _fun0022 }
case 393:
            var13 = var2.total;
            var10 = var2.currency;
            var10 = var9.bind(var12)(var13, var10);
            _fun0022_ip = 394; continue _fun0022;
case 392:
            var15 = var2.invoiceItems;
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
            var7 = 0;
            var7 = var14.bind(var15)(var13, var7);
            var2 = var2.currency;
            var10 = var9.bind(var12)(var7, var2);
case 394:
            var2 = var5.trialId;
            if(!(var4 != var2)) { _fun0022_ip = 104; continue _fun0022 }
case 205:
            var9 = _closure1_slot39;
            var7 = var9.includes;
            var2 = var5.trialId;
            var2 = var7.bind(var9)(var2);
            if(!var2) { _fun0022_ip = 104; continue _fun0022 }
case 395:
            var2 = var5.paymentSourceId;
            if(!(var4 != var2)) { _fun0022_ip = 396; continue _fun0022 }
case 104:
            var7 = var5.status;
            var2 = _closure1_slot13;
            var2 = var2.CANCELED;
            if(!(var7 !== var2)) { _fun0022_ip = 397; continue _fun0022 }
case 398:
            var7 = var5.status;
            var2 = _closure1_slot13;
            var2 = var2.PAUSE_PENDING;
            if(!(var7 !== var2)) { _fun0022_ip = 399; continue _fun0022 }
case 400:
            var7 = var5.status;
            var2 = _closure1_slot13;
            var2 = var2.PAUSED;
            if(!(var7 !== var2)) { _fun0022_ip = 401; continue _fun0022 }
case 402:
            var7 = var5.status;
            var2 = _closure1_slot13;
            var2 = var2.PAST_DUE;
            if(!(var7 !== var2)) { _fun0022_ip = 403; continue _fun0022 }
case 404:
            var7 = var5.status;
            var2 = _closure1_slot13;
            var2 = var2.BILLING_RETRY;
            if(!(var7 !== var2)) { _fun0022_ip = 275; continue _fun0022 }
case 405:
            var7 = var5.status;
            var2 = _closure1_slot13;
            var2 = var2.ACCOUNT_HOLD;
            if(!(var7 !== var2)) { _fun0022_ip = 406; continue _fun0022 }
case 407:
            var2 = _closure1_slot75;
            var2 = var2.bind(var6)(var5);
            if(var2) { _fun0022_ip = 408; continue _fun0022 }
case 409:
            var7 = var5.status;
            var2 = _closure1_slot13;
            var2 = var2.UNPAID;
            if(!(var7 !== var2)) { _fun0022_ip = 410; continue _fun0022 }
case 411:
            var2 = var5.isPurchasedExternally;
            if(var2) { _fun0022_ip = 146; continue _fun0022 }
case 412:
            var2 = global;
            var9 = var2.Date;
            var21 = var8.subscriptionPeriodStart;
            var7 = var9.prototype;
            var7 = Object.create(var7, {constructor: {value: var9}});
            var22 = var7;
            var2 = new var22[var9](var21, var20);
            var9 = var2 instanceof Object ? var2 : var7;
            var2 = var5.isBoostOnly;
            var14 = var9;
            if(var2) { _fun0022_ip = 413; continue _fun0022 }
case 414:
            var7 = _closure1_slot74;
            var2 = var11.unactivatedUnits;
            var14 = var7.bind(var6)(var9, var2);
case 413:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var15 = 15;
            var2 = var19[var15];
            var2 = var18.bind(var6)(var2);
            var13 = var2.intl;
            var12 = var13.format;
            var2 = var19[var15];
            var2 = var18.bind(var6)(var2);
            var7 = var2.t;
            if(var3) { _fun0022_ip = 143; continue _fun0022 }
case 415:
            var9 = var7.Q18lRE;
            var2 = {};
            var2['renewalDate'] = var14;
            var2['price'] = var10;
            var2 = var12.bind(var13)(var9, var2);
            _fun0022_ip = 416; continue _fun0022;
case 143:
            var9 = var7.Vl3cEB;
            var7 = {};
            var16 = var19[var15];
            var16 = var18.bind(var6)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var15 = var19[var15];
            var15 = var18.bind(var6)(var15);
            var15 = var15.t;
            var15 = var15.Ipxkoq;
            var15 = var16.bind(var17)(var15);
            var7['planName'] = var15;
            var7['renewalDate'] = var14;
            var7['price'] = var10;
            var2 = var12.bind(var13)(var9, var7);
case 416:
            return var2;
case 146:
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 15;
            var9 = var13[var2];
            var9 = var7.bind(var6)(var9);
            var12 = var9.intl;
            var9 = var12.format;
            var2 = var13[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var7 = var2.ZlWXgY;
            var2 = {};
            var13 = var8.subscriptionPeriodStart;
            var2['renewalDate'] = var13;
            var14 = _closure1_slot46;
            var13 = var5.paymentGateway;
            var13 = var14[var13];
            var2['paymentGatewayName'] = var13;
            var15 = _closure1_slot85;
            var14 = var5.paymentGateway;
            var13 = 'SUBSCRIPTION_MANAGEMENT';
            var13 = var15.bind(var6)(var14, var13);
            var2['subscriptionManagementLink'] = var13;
            var2 = var9.bind(var12)(var7, var2);
            return var2;
case 410:
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 15;
            var9 = var13[var2];
            var9 = var7.bind(var6)(var9);
            var12 = var9.intl;
            var9 = var12.format;
            var2 = var13[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var7 = var2.CzTKoq;
            var2 = {};
            var13 = _closure1_slot25;
            var2['maxProcessingTimeInDays'] = var13;
            var2 = var9.bind(var12)(var7, var2);
            return var2;
case 408:
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 15;
            var9 = var13[var2];
            var9 = var7.bind(var6)(var9);
            var12 = var9.intl;
            var9 = var12.format;
            var2 = var13[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var7 = var2.awpB0N;
            var2 = {};
            var13 = var5.currentPeriodEnd;
            var2['prepaidEndDate'] = var13;
            var2 = var9.bind(var12)(var7, var2);
            return var2;
case 406:
            var2 = var5.isPurchasedViaGoogle;
            if(!var2) { _fun0022_ip = 417; continue _fun0022 }
case 418:
            var7 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 20;
            var2 = var9[var2];
            var7 = var7.bind(var6)(var2);
            var2 = var7.isAndroid;
            var2 = var2.bind(var7)();
            if(var2) { _fun0022_ip = 417; continue _fun0022 }
case 419:
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 15;
            var9 = var15[var2];
            var9 = var7.bind(var6)(var9);
            var12 = var9.intl;
            var9 = var12.format;
            var2 = var15[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var7 = var2.dtcxw8;
            var2 = {};
            var14 = _closure1_slot1;
            var13 = 16;
            var13 = var15[var13];
            var14 = var14.bind(var6)(var13);
            var13 = var5.currentPeriodStart;
            var16 = var14.bind(var6)(var13);
            var15 = var16.add;
            var14 = _closure1_slot24;
            var13 = 'days';
            var14 = var15.bind(var16)(var14, var13);
            var13 = var14.toDate;
            var13 = var13.bind(var14)();
            var2['endDate'] = var13;
            var14 = _closure1_slot46;
            var13 = var5.paymentGateway;
            var13 = var14[var13];
            var2['paymentGatewayName'] = var13;
            var15 = _closure1_slot85;
            var14 = var5.paymentGateway;
            var13 = 'PAYMENT_SOURCE_MANAGEMENT';
            var13 = var15.bind(var6)(var14, var13);
            var2['paymentSourceLink'] = var13;
            var2 = var9.bind(var12)(var7, var2);
            _fun0022_ip = 420; continue _fun0022;
case 417:
            var9 = _closure1_slot0;
            var16 = _closure1_slot2;
            var7 = 15;
            var12 = var16[var7];
            var12 = var9.bind(var6)(var12);
            var13 = var12.intl;
            var12 = var13.format;
            var7 = var16[var7];
            var7 = var9.bind(var6)(var7);
            var7 = var7.t;
            var9 = var7.EMTLOT;
            var7 = {};
            var15 = _closure1_slot1;
            var14 = 16;
            var14 = var16[var14];
            var15 = var15.bind(var6)(var14);
            var14 = var5.currentPeriodStart;
            var17 = var15.bind(var6)(var14);
            var16 = var17.add;
            var15 = _closure1_slot24;
            var14 = 'days';
            var15 = var16.bind(var17)(var15, var14);
            var14 = var15.toDate;
            var14 = var14.bind(var15)();
            var7['endDate'] = var14;
            var7['price'] = var10;
            var2 = var12.bind(var13)(var9, var7);
case 420:
            return var2;
case 275:
            var7 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 15;
            var9 = var15[var2];
            var9 = var7.bind(var6)(var9);
            var12 = var9.intl;
            var9 = var12.format;
            var2 = var15[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.t;
            var7 = var2.EMTLOT;
            var2 = {};
            var14 = _closure1_slot1;
            var13 = 16;
            var13 = var15[var13];
            var14 = var14.bind(var6)(var13);
            var13 = var5.currentPeriodStart;
            var16 = var14.bind(var6)(var13);
            var15 = var16.add;
            var14 = _closure1_slot29;
            var13 = 'days';
            var14 = var15.bind(var16)(var14, var13);
            var13 = var14.toDate;
            var13 = var13.bind(var14)();
            var2['endDate'] = var13;
            var2['price'] = var10;
            var2 = var9.bind(var12)(var7, var2);
            return var2;
case 403:
            var2 = _closure1_slot73;
            var2 = var2.bind(var6)(var5);
            var15 = var2.expiresDate;
            var2 = var5.isPurchasedViaGoogle;
            if(!var2) { _fun0022_ip = 421; continue _fun0022 }
case 247:
            var9 = var5.metadata;
            var12 = var4 == var9;
            var7 = undefined;
            if(var12) { _fun0022_ip = 422; continue _fun0022 }
case 423:
            var7 = var9.google_grace_period_expires_date;
case 422:
            var2 = var4 != var7;
case 421:
            if(!var2) { _fun0022_ip = 424; continue _fun0022 }
case 425:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 16;
            var2 = var9[var2];
            var7 = var7.bind(var6)(var2);
            var2 = var5.metadata;
            var2 = var2.google_grace_period_expires_date;
            var15 = var7.bind(var6)(var2);
case 424:
            var2 = var5.isPurchasedViaApple;
            if(!var2) { _fun0022_ip = 426; continue _fun0022 }
case 427:
            var9 = var5.metadata;
            var12 = var4 == var9;
            var7 = undefined;
            if(var12) { _fun0022_ip = 428; continue _fun0022 }
case 429:
            var7 = var9.apple_grace_period_expires_date;
case 428:
            var2 = var4 != var7;
case 426:
            if(!var2) { _fun0022_ip = 430; continue _fun0022 }
case 431:
            var7 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 16;
            var2 = var9[var2];
            var7 = var7.bind(var6)(var2);
            var2 = var5.metadata;
            var2 = var2.apple_grace_period_expires_date;
            var15 = var7.bind(var6)(var2);
case 430:
            var2 = var5.isPurchasedExternally;
            var9 = _closure1_slot0;
            var14 = _closure1_slot2;
            var7 = 15;
            var12 = var14[var7];
            var12 = var9.bind(var6)(var12);
            var13 = var12.intl;
            var12 = var13.format;
            var7 = var14[var7];
            var7 = var9.bind(var6)(var7);
            var7 = var7.t;
            if(var2) { _fun0022_ip = 432; continue _fun0022 }
case 433:
            var9 = var7.qEIzys;
            var2 = {};
            var14 = var15.toDate;
            var14 = var14.bind(var15)();
            var2['endDate'] = var14;
            var2['price'] = var10;
            var2 = var12.bind(var13)(var9, var2);
            _fun0022_ip = 434; continue _fun0022;
case 432:
            var9 = var7.U2hb3d;
            var7 = {};
            var14 = var15.toDate;
            var14 = var14.bind(var15)();
            var7['endDate'] = var14;
            var15 = _closure1_slot46;
            var14 = var5.paymentGateway;
            var14 = var15[var14];
            var7['paymentGatewayName'] = var14;
            var16 = _closure1_slot85;
            var15 = var5.paymentGateway;
            var14 = 'PAYMENT_SOURCE_MANAGEMENT';
            var14 = var16.bind(var6)(var15, var14);
            var7['paymentSourceLink'] = var14;
            var2 = var12.bind(var13)(var9, var7);
case 434:
            return var2;
case 401:
            var7 = var11.fractionalState;
            var2 = _closure1_slot23;
            var2 = var2.NONE;
            if(!(var7 === var2)) { _fun0022_ip = 435; continue _fun0022 }
case 436:
            var2 = var5.pauseEndsAt;
            if(!(var4 != var2)) { _fun0022_ip = 437; continue _fun0022 }
case 438:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 15;
            var2 = var17[var13];
            var2 = var16.bind(var6)(var2);
            var12 = var2.intl;
            var9 = var12.format;
            var2 = var17[var13];
            var2 = var16.bind(var6)(var2);
            var4 = var2.t;
            if(var3) { _fun0022_ip = 439; continue _fun0022 }
case 440:
            var7 = var4.V8+l6u;
            var2 = {};
            var14 = var5.pauseEndsAt;
            var2['resumeDate'] = var14;
            var2 = var9.bind(var12)(var7, var2);
            _fun0022_ip = 441; continue _fun0022;
case 439:
            var7 = var4.zcgtzc;
            var4 = {};
            var14 = var17[var13];
            var14 = var16.bind(var6)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var6)(var13);
            var13 = var13.t;
            var13 = var13.Ipxkoq;
            var13 = var14.bind(var15)(var13);
            var4['planName'] = var13;
            var13 = var5.pauseEndsAt;
            var4['resumeDate'] = var13;
            var4['price'] = var10;
            var2 = var9.bind(var12)(var7, var4);
case 441:
            _fun0022_ip = 442; continue _fun0022;
case 437:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 15;
            var4 = var17[var13];
            var4 = var16.bind(var6)(var4);
            var12 = var4.intl;
            if(var3) { _fun0022_ip = 443; continue _fun0022 }
case 444:
            var4 = var12.string;
            var3 = var17[var13];
            var3 = var16.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.fMz6Li;
            var3 = var4.bind(var12)(var3);
            _fun0022_ip = 445; continue _fun0022;
case 443:
            var9 = var12.format;
            var4 = var17[var13];
            var4 = var16.bind(var6)(var4);
            var4 = var4.t;
            var7 = var4.KTYQCg;
            var4 = {};
            var14 = var17[var13];
            var14 = var16.bind(var6)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var6)(var13);
            var13 = var13.t;
            var13 = var13.Ipxkoq;
            var13 = var14.bind(var15)(var13);
            var4['planName'] = var13;
            var4['price'] = var10;
            var3 = var9.bind(var12)(var7, var4);
case 445:
            var2 = var3;
case 442:
            _fun0022_ip = 446; continue _fun0022;
case 435:
            var4 = _closure1_slot0;
            var12 = _closure1_slot2;
            var3 = 15;
            var7 = var12[var3];
            var7 = var4.bind(var6)(var7);
            var9 = var7.intl;
            var7 = var9.format;
            var3 = var12[var3];
            var3 = var4.bind(var6)(var3);
            var3 = var3.t;
            var4 = var3.Q18lRE;
            var3 = {};
            var12 = var11.endsAt;
            var11 = var12.toDate;
            var11 = var11.bind(var12)();
            var3['renewalDate'] = var11;
            var3['price'] = var10;
            var2 = var7.bind(var9)(var4, var3);
case 446:
            return var2;
case 399:
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 15;
            var4 = var9[var2];
            var4 = var3.bind(var6)(var4);
            var7 = var4.intl;
            var4 = var7.format;
            var2 = var9[var2];
            var2 = var3.bind(var6)(var2);
            var2 = var2.t;
            var3 = var2.uBLUGR;
            var2 = {};
            var9 = var5.currentPeriodEnd;
            var2['pauseDate'] = var9;
            var9 = var5.pauseEndsAt;
            var2['resumeDate'] = var9;
            var2 = var4.bind(var7)(var3, var2);
            return var2;
case 397:
            var3 = _closure1_slot0;
            var9 = _closure1_slot2;
            var2 = 15;
            var4 = var9[var2];
            var4 = var3.bind(var6)(var4);
            var7 = var4.intl;
            var4 = var7.format;
            var2 = var9[var2];
            var2 = var3.bind(var6)(var2);
            var2 = var2.t;
            var3 = var2.Whp/qq;
            var2 = {};
            var8 = var8.subscriptionPeriodStart;
            var2['endDate'] = var8;
            var2 = var4.bind(var7)(var3, var2);
            return var2;
case 396:
            var2 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 15;
            var3 = var7[var1];
            var3 = var2.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.format;
            var1 = var7[var1];
            var1 = var2.bind(var6)(var1);
            var1 = var1.t;
            var2 = var1.7ZS2m5;
            var1 = {};
            var5 = var5.currentPeriodEnd;
            var1['trialEnd'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var45 = function extendDateWithUnconsumedFractionalPremium(arg1, arg2, arg3, arg4) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var5 = arg1;
            var9 = arg2;
            var8 = arg3;
            var6 = arg4;
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var7 = 16;
            var1 = var1[var7];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = undefined;
            if(var6) { _fun0023_ip = 69; continue _fun0023 }
case 447:
            var1 = var5;
case 69:
            var11 = var2.bind(var4)(var1);
            var2 = var9.length;
            var1 = 0;
            var5 = var11;
            if(!(var2 > var1)) { _fun0023_ip = 448; continue _fun0023 }
case 449:
            var2 = _closure1_slot93;
            var10 = var2.bind(var4)(var9);
            var9 = var11.add;
            var2 = 'hours';
            var5 = var9.bind(var11)(var10, var2);
case 448:
            var2 = var5;
            if(var6) { _fun0023_ip = 81; continue _fun0023 }
case 450:
            var2 = var5;
            if(!(var4 !== var8)) { _fun0023_ip = 81; continue _fun0023 }
case 451:
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
            if(!(var3 > var1)) { _fun0023_ip = 81; continue _fun0023 }
case 129:
            var1 = var5.add;
            var2 = var1.bind(var5)(var3, var4);
case 81:
            var1 = var2.toDate;
            var1 = var1.bind(var2)();
            return var1;
        }
    };
    var _closure1_slot74 = var45;
    var44 = function getUnactivatedFractionalPremiumDurationString(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var1 = arg1;
            var4 = _closure1_slot93;
            var2 = var1.unactivatedUnits;
            var5 = undefined;
            var12 = var4.bind(var5)(var2);
            var11 = 0;
            if(!(var12 > var11)) { _fun0024_ip = 5; continue _fun0024 }
case 47:
            var2 = var1.fractionalState;
            var1 = _closure1_slot23;
            var1 = var1.NONE;
            if(!(var2 !== var1)) { _fun0024_ip = 4; continue _fun0024 }
case 5:
            var1 = '';
            return var1;
case 4:
            var4 = {};
            var2 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 15;
            var7 = var6[var1];
            var7 = var2.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.fYmir6;
            var4['days'] = var7;
            var7 = var6[var1];
            var7 = var2.bind(var5)(var7);
            var7 = var7.t;
            var7 = var7.C3RO+v;
            var4['hours'] = var7;
            var1 = var6[var1];
            var1 = var2.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.r77oHR;
            var4['minutes'] = var1;
            var1 = 21;
            var1 = var6[var1];
            var8 = var2.bind(var5)(var1);
            var7 = var8.roundFPCountdownUnits;
            var1 = 17;
            var9 = var6[var1];
            var10 = var2.bind(var5)(var9);
            var9 = var10.diffAsUnits;
            var13 = _closure1_slot1;
            var3 = 22;
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
    var43 = function isSwitchingPlansDisabled(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var2 = arg1;
            var1 = var2.renewalMutations;
            var4 = null;
            var1 = var4 != var1;
            if(var1) { _fun0025_ip = 34; continue _fun0025 }
case 36:
            var3 = var2.trialEndsAt;
            var1 = var4 != var3;
case 34:
            if(var1) { _fun0025_ip = 97; continue _fun0025 }
case 95:
            var3 = var2.status;
            var2 = _closure1_slot13;
            var2 = var2.PAST_DUE;
            var1 = var3 === var2;
case 97:
            return var1;
        }
    };
    var42 = function getSwitchingPlansDisabledMessage(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var2 = arg1;
            var1 = var2.renewalMutations;
            var3 = null;
            var4 = var3 != var1;
            var1 = null;
            if(!var4) { _fun0026_ip = 452; continue _fun0026 }
case 31:
            var4 = var2.renewalMutations;
            var5 = var4.planId;
            var4 = var2.planId;
            if(!(var5 === var4)) { _fun0026_ip = 453; continue _fun0026 }
case 69:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 15;
            var5 = var9[var4];
            var7 = undefined;
            var5 = var8.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var9[var4];
            var4 = var8.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.9dLQ09;
            var4 = var5.bind(var6)(var4);
            _fun0026_ip = 454; continue _fun0026;
case 453:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 15;
            var6 = var10[var5];
            var8 = undefined;
            var6 = var9.bind(var8)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var5 = var10[var5];
            var5 = var9.bind(var8)(var5);
            var5 = var5.t;
            var5 = var5.0rzJ4O;
            var4 = var6.bind(var7)(var5);
case 454:
            var1 = var4;
case 452:
            var2 = var2.trialEndsAt;
            if(!(var3 != var2)) { _fun0026_ip = 455; continue _fun0026 }
case 456:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 15;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.a9Mdb2;
            var1 = var3.bind(var4)(var2);
case 455:
            return var1;
        }
    };
    var41 = function isSubscriptionPrepaidPaymentSource(arg1) {
        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
case 0:
            var2 = arg1;
            var3 = var2.paymentSourceId;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0027_ip = 40; continue _fun0027 }
case 36:
            var4 = _closure1_slot76;
            var3 = var2.paymentSourceId;
            var2 = undefined;
            var1 = var4.bind(var2)(var3);
case 40:
            return var1;
        }
    };
    var _closure1_slot75 = var41;
    var40 = function isPrepaidPaymentSource(arg1) {
        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            if(!(var1 != var5)) { _fun0028_ip = 457; continue _fun0028 }
case 458:
            var4 = _closure1_slot7;
            var2 = var4.getPaymentSource;
            var2 = var2.bind(var4)(var5);
            var1 = var1 != var2;
            if(!var1) { _fun0028_ip = 4; continue _fun0028 }
case 41:
            var4 = _closure1_slot47;
            var3 = var4.has;
            var2 = var2.type;
            var1 = var3.bind(var4)(var2);
case 4:
            return var1;
case 457:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot76 = var40;
    var39 = function getCoercedPremiumGuildSubscriptionStatus(arg1) {
        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
case 0:
            var2 = arg1;
            var1 = var2.renewalMutations;
            var4 = var2.additionalPlans;
            var5 = var2.status;
            var3 = _closure1_slot69;
            var7 = undefined;
            var4 = var3.bind(var7)(var4);
            var6 = null;
            var3 = var6 != var1;
            if(!var3) { _fun0029_ip = 459; continue _fun0029 }
case 460:
            var3 = _closure1_slot69;
            var1 = var1.additionalPlans;
            var6 = var3.bind(var7)(var1);
case 459:
            var3 = 0;
            var1 = var5;
            if(!(var3 === var6)) { _fun0029_ip = 461; continue _fun0029 }
case 30:
            var1 = var5;
            if(!(var3 !== var4)) { _fun0029_ip = 461; continue _fun0029 }
case 462:
            var2 = _closure1_slot13;
            var1 = var2.CANCELED;
case 461:
            return var1;
        }
    };
    var _closure1_slot77 = var39;
    var38 = function isPremiumGuildSubscriptionCanceled(arg1) {
        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
case 0:
            var3 = arg1;
            var1 = var3.isPurchasedExternally;
            if(var1) { _fun0030_ip = 447; continue _fun0030 }
case 463:
            var4 = _closure1_slot77;
            var1 = undefined;
            var4 = var4.bind(var1)(var3);
            var1 = _closure1_slot13;
            var1 = var1.CANCELED;
            var1 = var4 === var1;
            _fun0030_ip = 7; continue _fun0030;
case 447:
            var3 = var3.status;
            var2 = _closure1_slot13;
            var2 = var2.CANCELED;
            var1 = var3 === var2;
case 7:
            return var1;
        }
    };
    var _closure1_slot78 = var38;
    var37 = function getFormattedPriceForPlan(arg1, arg2, arg3) {
        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
case 0:
            var2 = arg1;
            var8 = arg2;
            var7 = arguments[3];
            var6 = undefined;
            if(!(var7 === var6)) { _fun0031_ip = 464; continue _fun0031 }
case 463:
            var7 = false;
case 464:
            var1 = null;
            if(!(var1 == var8)) { _fun0031_ip = 2; continue _fun0031 }
case 31:
            var4 = _closure1_slot57;
            var3 = var2.id;
            var1 = false;
            var3 = var4.bind(var6)(var3, var1, var7);
            _fun0031_ip = 376; continue _fun0031;
case 2:
            var5 = _closure1_slot58;
            var12 = var2.id;
            var11 = false;
            var13 = undefined;
            var10 = var7;
            var9 = var8;
            var3 = var13[var5](var12, var11, var10, var9, var8);
case 376:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 19;
            var4 = var7[var4];
            var6 = var5.bind(var6)(var4);
            var5 = var6.formatPrice;
            var4 = var3.amount;
            var3 = var3.currency;
            var4 = var5.bind(var6)(var4, var3);
            var2 = var2.currency;
            var1 = _closure1_slot45;
            var1 = var1.USD;
            var2 = var2 !== var1;
            if(!var2) { _fun0031_ip = 384; continue _fun0031 }
case 465:
            var3 = true;
            var1 = arg3;
            var2 = var3 === var1;
case 384:
            var1 = var4;
            if(!var2) { _fun0031_ip = 454; continue _fun0031 }
case 466:
            var3 = var4.concat;
            var2 = '*';
            var1 = var3.bind(var4)(var2);
case 454:
            return var1;
        }
    };
    var _closure1_slot79 = var37;
    var36 = function getPlanIdFromInvoice(arg1, arg2) {
        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
case 0:
            var3 = arg1;
            var2 = arg2;
            var1 = var3.planId;
            var6 = var3.status;
            var5 = _closure1_slot13;
            var5 = var5.CANCELED;
            if(!(var6 !== var5)) { _fun0032_ip = 85; continue _fun0032 }
case 78:
            var6 = var3.status;
            var5 = _closure1_slot13;
            var5 = var5.PAUSE_PENDING;
            if(!(var6 !== var5)) { _fun0032_ip = 85; continue _fun0032 }
case 70:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 14;
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
                var2 = _closure1_slot71;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            };
            var2 = var6.bind(var8)(var2);
            if(!(var5 != var2)) { _fun0032_ip = 467; continue _fun0032 }
case 468:
            var6 = _closure1_slot4;
            var4 = var2.subscriptionPlanId;
            var4 = var6.bind(var7)(var4);
            if(var4) { _fun0032_ip = 467; continue _fun0032 }
case 469:
            var4 = var3.renewalMutations;
            if(!(var5 != var4)) { _fun0032_ip = 386; continue _fun0032 }
case 193:
            var4 = var3.renewalMutations;
            var5 = var4.planId;
            var4 = var3.planId;
            if(!(var5 === var4)) { _fun0032_ip = 467; continue _fun0032 }
case 386:
            var2 = var2.subscriptionPlanId;
            _fun0032_ip = 470; continue _fun0032;
case 467:
            var2 = var3.planId;
case 470:
            return var2;
case 85:
            return var1;
        }
    };
    var35 = function getStatusFromInvoice(arg1, arg2) {
        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
case 0:
            var4 = arg1;
            var2 = arg2;
            var1 = var4.status;
            var6 = var4.status;
            var5 = _closure1_slot13;
            var5 = var5.CANCELED;
            if(!(var6 !== var5)) { _fun0033_ip = 81; continue _fun0033 }
case 41:
            var5 = var4.status;
            var4 = _closure1_slot13;
            var4 = var4.PAUSE_PENDING;
            if(!(var5 !== var4)) { _fun0033_ip = 81; continue _fun0033 }
case 4:
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var4 = 14;
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
                var2 = _closure1_slot71;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
                return var1;
            };
            var2 = var5.bind(var7)(var2);
            var4 = var4 == var2;
            if(var4) { _fun0033_ip = 383; continue _fun0033 }
case 471:
            var5 = _closure1_slot4;
            var2 = var2.subscriptionPlanId;
            var4 = var5.bind(var6)(var2);
case 383:
            var2 = var1;
            if(!var4) { _fun0033_ip = 466; continue _fun0033 }
case 382:
            var3 = _closure1_slot13;
            var2 = var3.CANCELED;
case 466:
            return var2;
case 81:
            return var1;
        }
    };
    var34 = function isBaseSubscriptionCanceled(arg1) {
        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
case 0:
            var3 = arg1;
            var2 = var3.status;
            var4 = var3.renewalMutations;
            var1 = _closure1_slot13;
            var1 = var1.CANCELED;
            var1 = var2 === var1;
            if(var1) { _fun0034_ip = 472; continue _fun0034 }
case 117:
            var2 = null;
            var2 = var2 != var4;
            if(!var2) { _fun0034_ip = 361; continue _fun0034 }
case 460:
            var6 = _closure1_slot4;
            var5 = var4.planId;
            var4 = undefined;
            var2 = var6.bind(var4)(var5);
case 361:
            if(!var2) { _fun0034_ip = 376; continue _fun0034 }
case 120:
            var3 = var3.isPurchasedExternally;
            var2 = !var3;
case 376:
            var1 = var2;
case 472:
            return var1;
        }
    };
    var _closure1_slot80 = var34;
    var33 = function isSubscriptionStatusFailedPayment(arg1) {
        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot13;
            var1 = var1.PAST_DUE;
            var1 = var3 === var1;
            if(var1) { _fun0035_ip = 78; continue _fun0035 }
case 31:
            var4 = _closure1_slot13;
            var4 = var4.ACCOUNT_HOLD;
            var1 = var3 === var4;
case 78:
            if(var1) { _fun0035_ip = 360; continue _fun0035 }
case 369:
            var2 = _closure1_slot13;
            var2 = var2.BILLING_RETRY;
            var1 = var3 === var2;
case 360:
            return var1;
        }
    };
    var _closure1_slot81 = var33;
    var32 = function getFormattedPlanPriceFromInvoice(arg1, arg2, arg3) {
        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
case 0:
            var2 = arg1;
            var3 = arg2;
            var1 = arg3;
            var5 = var2.findInvoiceItemByPlanId;
            var4 = var1.id;
            var4 = var5.bind(var2)(var4);
            var5 = null;
            if(!(var5 != var4)) { _fun0036_ip = 50; continue _fun0036 }
case 33:
            var7 = var4.amount;
            _fun0036_ip = 11; continue _fun0036;
case 50:
            var8 = _closure1_slot58;
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
            var3 = 19;
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
    var _closure1_slot82 = var32;
    var31 = function getPremiumGuildIntervalPrice(arg1, arg2, arg3, arg4) {
        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
case 0:
            var6 = arg1;
            var4 = arg2;
            var2 = arg3;
            var3 = null;
            if(!(var3 == var4)) { _fun0037_ip = 94; continue _fun0037 }
case 463:
            var8 = {};
            var1 = _closure1_slot6;
            var1 = var1.ipCountryCodeWithFallback;
            var8['country'] = var1;
            var8['currency'] = var2;
            _fun0037_ip = 70; continue _fun0037;
case 94:
            var1 = {};
            var1['paymentSourceId'] = var4;
            var1['currency'] = var2;
            var8 = var1;
case 70:
            var4 = _closure1_slot8;
            var1 = var4.get;
            var1 = var1.bind(var4)(var6);
            if(!(var3 != var1)) { _fun0037_ip = 473; continue _fun0037 }
case 74:
            var9 = _closure1_slot8;
            var7 = var9.getForSkuAndInterval;
            var4 = _closure1_slot36;
            var5 = var4.GUILD;
            var4 = var1.interval;
            var1 = var1.intervalCount;
            var1 = var7.bind(var9)(var5, var4, var1);
            if(!(var3 != var1)) { _fun0037_ip = 19; continue _fun0037 }
case 471:
            var7 = _closure1_slot58;
            var5 = var1.id;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 13;
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
            var3 = 11;
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
case 473:
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
            var2 = 11;
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
    var _closure1_slot83 = var31;
    var30 = function getBillingReviewSubheader(arg1, arg2, arg3) {
        _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
case 0:
            var8 = arg2;
            var2 = arg3;
            var10 = var8.id;
            var3 = null;
            var1 = arg1;
            if(!(var3 != var1)) { _fun0038_ip = 474; continue _fun0038 }
case 29:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_MONTH_TIER_0;
            if(!(var3 !== var10)) { _fun0038_ip = 273; continue _fun0038 }
case 369:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_YEAR_TIER_0;
            if(!(var3 !== var10)) { _fun0038_ip = 475; continue _fun0038 }
case 457:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_MONTH_TIER_1;
            if(!(var3 !== var10)) { _fun0038_ip = 476; continue _fun0038 }
case 462:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_YEAR_TIER_1;
            if(!(var3 !== var10)) { _fun0038_ip = 477; continue _fun0038 }
case 478:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_MONTH_TIER_2;
            if(!(var3 !== var10)) { _fun0038_ip = 479; continue _fun0038 }
case 187:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_YEAR_TIER_2;
            if(!(var3 !== var10)) { _fun0038_ip = 480; continue _fun0038 }
case 474:
            var4 = _closure1_slot42;
            var4 = var4.PREMIUM_MONTH_TIER_0;
            if(!(var4 !== var10)) { _fun0038_ip = 481; continue _fun0038 }
case 469:
            var4 = _closure1_slot42;
            var4 = var4.PREMIUM_YEAR_TIER_0;
            if(!(var4 !== var10)) { _fun0038_ip = 482; continue _fun0038 }
case 57:
            var4 = _closure1_slot42;
            var4 = var4.PREMIUM_MONTH_TIER_1;
            if(!(var4 !== var10)) { _fun0038_ip = 483; continue _fun0038 }
case 16:
            var4 = _closure1_slot42;
            var4 = var4.PREMIUM_YEAR_TIER_1;
            if(!(var4 !== var10)) { _fun0038_ip = 484; continue _fun0038 }
case 485:
            var4 = _closure1_slot42;
            var4 = var4.PREMIUM_MONTH_TIER_2;
            if(!(var4 !== var10)) { _fun0038_ip = 486; continue _fun0038 }
case 487:
            var4 = _closure1_slot42;
            var4 = var4.PREMIUM_YEAR_TIER_2;
            if(!(var4 !== var10)) { _fun0038_ip = 488; continue _fun0038 }
case 489:
            var4 = _closure1_slot42;
            var4 = var4.PREMIUM_3_MONTH_TIER_2;
            if(!(var4 !== var10)) { _fun0038_ip = 490; continue _fun0038 }
case 23:
            var4 = _closure1_slot42;
            var4 = var4.PREMIUM_6_MONTH_TIER_2;
            if(!(var4 !== var10)) { _fun0038_ip = 490; continue _fun0038 }
case 140:
            var4 = _closure1_slot42;
            var4 = var4.NONE_MONTH;
            if(!(var4 !== var10)) { _fun0038_ip = 491; continue _fun0038 }
case 492:
            var4 = _closure1_slot42;
            var4 = var4.NONE_YEAR;
            if(!(var4 !== var10)) { _fun0038_ip = 491; continue _fun0038 }
case 89:
            var4 = _closure1_slot42;
            var4 = var4.NONE_3_MONTH;
            if(!(var4 !== var10)) { _fun0038_ip = 491; continue _fun0038 }
case 207:
            var4 = _closure1_slot42;
            var4 = var4.NONE_6_MONTH;
            if(!(var4 !== var10)) { _fun0038_ip = 491; continue _fun0038 }
case 493:
            var4 = _closure1_slot42;
            var4 = var4.PREMIUM_MONTH_GUILD;
            if(!(var4 !== var10)) { _fun0038_ip = 491; continue _fun0038 }
case 209:
            var4 = _closure1_slot42;
            var4 = var4.PREMIUM_YEAR_GUILD;
            if(!(var4 !== var10)) { _fun0038_ip = 491; continue _fun0038 }
case 398:
            var4 = _closure1_slot42;
            var4 = var4.PREMIUM_3_MONTH_GUILD;
            if(!(var4 !== var10)) { _fun0038_ip = 491; continue _fun0038 }
case 387:
            var4 = _closure1_slot42;
            var4 = var4.PREMIUM_6_MONTH_GUILD;
            if(!(var4 !== var10)) { _fun0038_ip = 491; continue _fun0038 }
case 105:
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
            var5 = 11;
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
case 491:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 15;
            var5 = var10[var4];
            var7 = undefined;
            var5 = var9.bind(var7)(var5);
            var6 = var5.intl;
            var5 = var6.string;
            var4 = var10[var4];
            var4 = var9.bind(var7)(var4);
            var4 = var4.t;
            var4 = var4.eUEeCg;
            var4 = var5.bind(var6)(var4);
            return var4;
case 490:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 15;
            var6 = var10[var4];
            var5 = undefined;
            var6 = var9.bind(var5)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var4 = var10[var4];
            var4 = var9.bind(var5)(var4);
            var4 = var4.t;
            var5 = var4.BCD4fX;
            var4 = {};
            var8 = var8.intervalCount;
            var4['intervalCount'] = var8;
            var4 = var6.bind(var7)(var5, var4);
            return var4;
case 488:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 15;
            var6 = var9[var4];
            var5 = undefined;
            var6 = var8.bind(var5)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var5 = var4.t;
            if(var2) { _fun0038_ip = 494; continue _fun0038 }
case 495:
            var4 = var5.0nfg19;
            var4 = var6.bind(var7)(var4);
            _fun0038_ip = 496; continue _fun0038;
case 494:
            var5 = var5.cRCCJy;
            var4 = var6.bind(var7)(var5);
case 496:
            return var4;
case 486:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 15;
            var6 = var9[var4];
            var5 = undefined;
            var6 = var8.bind(var5)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var5 = var4.t;
            if(var2) { _fun0038_ip = 497; continue _fun0038 }
case 498:
            var4 = var5.LQVQIi;
            var4 = var6.bind(var7)(var4);
            _fun0038_ip = 499; continue _fun0038;
case 497:
            var5 = var5.cRCCJy;
            var4 = var6.bind(var7)(var5);
case 499:
            return var4;
case 484:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 15;
            var6 = var9[var4];
            var5 = undefined;
            var6 = var8.bind(var5)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var5 = var4.t;
            if(var2) { _fun0038_ip = 500; continue _fun0038 }
case 501:
            var4 = var5.MhH/vb;
            var4 = var6.bind(var7)(var4);
            _fun0038_ip = 502; continue _fun0038;
case 500:
            var5 = var5.cRCCJy;
            var4 = var6.bind(var7)(var5);
case 502:
            return var4;
case 483:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 15;
            var6 = var9[var4];
            var5 = undefined;
            var6 = var8.bind(var5)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var5 = var4.t;
            if(var2) { _fun0038_ip = 503; continue _fun0038 }
case 237:
            var4 = var5.gueLg4;
            var4 = var6.bind(var7)(var4);
            _fun0038_ip = 504; continue _fun0038;
case 503:
            var5 = var5.cRCCJy;
            var4 = var6.bind(var7)(var5);
case 504:
            return var4;
case 482:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 15;
            var6 = var9[var4];
            var5 = undefined;
            var6 = var8.bind(var5)(var6);
            var7 = var6.intl;
            var6 = var7.string;
            var4 = var9[var4];
            var4 = var8.bind(var5)(var4);
            var5 = var4.t;
            if(var2) { _fun0038_ip = 505; continue _fun0038 }
case 506:
            var4 = var5.2eQpsL;
            var4 = var6.bind(var7)(var4);
            _fun0038_ip = 242; continue _fun0038;
case 505:
            var5 = var5.cRCCJy;
            var4 = var6.bind(var7)(var5);
case 242:
            return var4;
case 481:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 15;
            var4 = var8[var3];
            var6 = undefined;
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var3 = var8[var3];
            var3 = var7.bind(var6)(var3);
            var3 = var3.t;
            if(var2) { _fun0038_ip = 507; continue _fun0038 }
case 248:
            var2 = var3./G3aKy;
            var2 = var4.bind(var5)(var2);
            _fun0038_ip = 252; continue _fun0038;
case 507:
            var3 = var3.cRCCJy;
            var2 = var4.bind(var5)(var3);
case 252:
            return var2;
case 480:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 15;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.G0mISU;
            var2 = var3.bind(var4)(var2);
            return var2;
case 479:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 15;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.5l1Mub;
            var2 = var3.bind(var4)(var2);
            return var2;
case 477:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 15;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.D/l7Ym;
            var2 = var3.bind(var4)(var2);
            return var2;
case 476:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 15;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.uph4Jy;
            var2 = var3.bind(var4)(var2);
            return var2;
case 475:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 15;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.jm+ZQ0;
            var2 = var3.bind(var4)(var2);
            return var2;
case 273:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 15;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.0ggVqK;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var29 = function getIntervalForInvoice(arg1) {
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
        var1 = 14;
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
    var28 = function formatTrialCtaIntervalDuration(arg1) {
        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
case 0:
            var2 = arg1;
            var4 = var2.intervalType;
            var9 = undefined;
            if(!(var4 === var9)) { _fun0039_ip = 34; continue _fun0039 }
case 463:
            var5 = _closure1_slot40;
            var4 = var5.MONTH;
case 34:
            var1 = var4;
            var2 = var2.intervalCount;
            if(!(var2 === var9)) { _fun0039_ip = 94; continue _fun0039 }
case 50:
            var2 = 1;
case 94:
            var7 = var2;
            var3 = undefined;
            var6 = undefined;
            var4 = _closure1_slot45;
            var3 = var4.USD;
case 449: // try_start_0
            var8 = _closure1_slot57;
            var4 = _closure1_slot42;
            var15 = var4.PREMIUM_MONTH_TIER_2;
            var16 = undefined;
            var14 = false;
            var13 = false;
            var12 = undefined;
            var11 = false;
            var4 = var16[var8](var15, var14, var13, var12, var11, var10);
            var3 = var4.currency;
case 508: // try_end0
            _fun0039_ip = 182; continue _fun0039;
case 509: // catch_target0
            CatchBlockStart(arg_register=3);
case 182:
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 19;
            var4 = var8[var4];
            var10 = var5.bind(var9)(var4);
            var8 = var10.formatPrice;
            var5 = var3;
            var3 = 0;
            var4 = {'maximumFractionDigits': 0, 'minimumFractionDigits': 0};
            var6 = var8.bind(var10)(var3, var5, var4);
            var4 = var1;
            var1 = _closure1_slot40;
            var1 = var1.DAY;
            if(!(var1 !== var4)) { _fun0039_ip = 370; continue _fun0039 }
case 452:
            var1 = _closure1_slot40;
            var1 = var1.MONTH;
            if(!(var1 !== var4)) { _fun0039_ip = 102; continue _fun0039 }
case 470:
            var1 = _closure1_slot40;
            var1 = var1.YEAR;
            if(!(var1 !== var4)) { _fun0039_ip = 510; continue _fun0039 }
case 22:
            var1 = global;
            var5 = var1.Error;
            var1 = var5.prototype;
            var4 = Object.create(var1, {constructor: {value: var5}});
            var15 = 'Unsupported interval duration.';
            var16 = var4;
            var1 = new var16[var5](var15, var14);
            var1 = var1 instanceof Object ? var1 : var4;
            throw var1;
case 510:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 15;
            var5 = var10[var1];
            var5 = var4.bind(var9)(var5);
            var8 = var5.intl;
            var5 = var8.formatToPlainString;
            var1 = var10[var1];
            var1 = var4.bind(var9)(var1);
            var1 = var1.t;
            var4 = var1.xzAcSU;
            var1 = {};
            var10 = var7;
            var1['years'] = var10;
            var10 = var6;
            var1['price'] = var10;
            var1 = var5.bind(var8)(var4, var1);
            return var1;
case 102:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 15;
            var5 = var10[var1];
            var5 = var4.bind(var9)(var5);
            var8 = var5.intl;
            var5 = var8.formatToPlainString;
            var1 = var10[var1];
            var1 = var4.bind(var9)(var1);
            var1 = var1.t;
            var4 = var1.8FZfNj;
            var1 = {};
            var10 = var7;
            var1['months'] = var10;
            var10 = var6;
            var1['price'] = var10;
            var1 = var5.bind(var8)(var4, var1);
            return var1;
case 370:
            var1 = var7;
            var8 = 7;
            if(!(var1 >= var8)) { _fun0039_ip = 511; continue _fun0039 }
case 402:
            var1 = var7;
            var1 = var1 % var8;
            if(!(var1 !== var3)) { _fun0039_ip = 512; continue _fun0039 }
case 511:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var1 = 15;
            var4 = var10[var1];
            var4 = var3.bind(var9)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var1 = var10[var1];
            var1 = var3.bind(var9)(var1);
            var1 = var1.t;
            var3 = var1.cR9if3;
            var1 = {};
            var10 = var7;
            var1['days'] = var10;
            var10 = var6;
            var1['price'] = var10;
            var1 = var4.bind(var5)(var3, var1);
            _fun0039_ip = 513; continue _fun0039;
case 512:
            var3 = _closure1_slot0;
            var10 = _closure1_slot2;
            var2 = 15;
            var4 = var10[var2];
            var4 = var3.bind(var9)(var4);
            var5 = var4.intl;
            var4 = var5.formatToPlainString;
            var2 = var10[var2];
            var2 = var3.bind(var9)(var2);
            var2 = var2.t;
            var3 = var2.C6i5Ji;
            var2 = {};
            var7 = var7 / var8;
            var2['weeks'] = var7;
            var2['price'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 513:
            return var1;
        }
    };
    var _closure1_slot84 = var28;
    var27 = function getExternalSubscriptionMethodUrl(arg1, arg2) {
        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
case 0:
            var6 = arg1;
            var2 = arg2;
            var3 = _closure1_slot11;
            var3 = var3.APPLE_PARTNER;
            if(!(var3 !== var6)) { _fun0040_ip = 514; continue _fun0040 }
case 31:
            var3 = _closure1_slot11;
            var3 = var3.APPLE;
            if(!(var3 !== var6)) { _fun0040_ip = 514; continue _fun0040 }
case 78:
            var3 = _closure1_slot11;
            var3 = var3.GOOGLE;
            if(!(var3 !== var6)) { _fun0040_ip = 378; continue _fun0040 }
case 178:
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
case 378:
            var3 = _closure1_slot49;
            var3 = var3[var2];
            return var3;
case 514:
            var1 = _closure1_slot48;
            var1 = var1[var2];
            return var1;
        }
    };
    var _closure1_slot85 = var27;
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
case 369:
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
            if(!(var2 != var4)) { _fun0041_ip = 83; continue _fun0041 }
case 363:
            var2 = var3.push;
            var2 = var2.bind(var3)(var4);
case 83:
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
                    var3 = _closure1_slot54;
                    var2 = _closure2_slot0;
                    var2 = var2.items;
                    var6 = undefined;
                    var5 = var3.bind(var6)(var2);
                    var3 = var5.bind(var6)();
                    var2 = var3.done;
                    var4 = var3;
                    if(var2) { _fun0042_ip = 515; continue _fun0042 }
case 69:
                    var3 = var4.value;
                    var7 = var1.planId;
                    var2 = var3.planId;
                    if(!(var7 !== var2)) { _fun0042_ip = 74; continue _fun0042 }
case 363:
                    var7 = var5.bind(var6)();
                    var2 = var7.done;
                    var4 = var7;
                    if(var2) { _fun0042_ip = 515; continue _fun0042 }
case 516:
                    _fun0042_ip = 69; continue _fun0042;
case 74:
                    var2 = {};
                    var9 = var2;
                    var8 = var3;
                    var3 = copyDataProperties(var9, var8);
                    var9 = var2;
                    var8 = var1;
                    var3 = copyDataProperties(var9, var8);
                    return var2;
case 515:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot86 = var26;
    var25 = function getItemsWithoutPremiumPlanItem(arg1) {
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
    var _closure1_slot87 = var25;
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
            var3 = 14;
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
            if(var4) { _fun0043_ip = 509; continue _fun0043 }
case 450:
            var8 = var3.items;
case 509:
            if(!(var5 == var8)) { _fun0043_ip = 13; continue _fun0043 }
case 92:
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
                    if(!var2) { _fun0044_ip = 53; continue _fun0044 }
case 39:
                    var2 = true;
                    _closure2_slot3 = var2;
                    var2 = {};
                    var7 = var2;
                    var6 = var4;
                    var4 = copyDataProperties(var7, var6);
                    var5 = _closure2_slot1;
                    var4 = 'quantity';
                    var2[var4] = var5;
                    var4 = _closure2_slot0;
                    var3 = 'planId';
                    var2[var3] = var4;
                    var1 = var2;
case 53:
                    return var1;
                }
            };
            var3 = var4.bind(var8)(var3);
            var4 = _closure2_slot3;
            if(var4) { _fun0043_ip = 470; continue _fun0043 }
case 188:
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
            if(!(var5 != var2)) { _fun0043_ip = 82; continue _fun0043 }
case 190:
            var2 = var2.id;
            var4['id'] = var2;
case 82:
            var2 = var3.push;
            var2 = var2.bind(var3)(var4);
case 470:
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
    var _closure1_slot88 = var24;
    var23 = function getGuildBoostPlanItem(arg1) {
        _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var3 = var1 == var2;
            if(var3) { _fun0045_ip = 41; continue _fun0045 }
case 71:
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
    var _closure1_slot89 = var23;
    var22 = function isBoostOnlySubscription(arg1) {
        _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
case 0:
            var5 = arg1;
            var3 = null;
            var1 = var3 != var5;
            if(!var1) { _fun0046_ip = 3; continue _fun0046 }
case 71:
            var4 = _closure1_slot56;
            var2 = undefined;
            var2 = var4.bind(var2)(var5);
            var1 = var3 == var2;
case 3:
            if(!var1) { _fun0046_ip = 178; continue _fun0046 }
case 33:
            var4 = _closure1_slot89;
            var2 = undefined;
            var2 = var4.bind(var2)(var5);
            var1 = var3 != var2;
case 178:
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
            var4 = _closure1_slot56;
            var3 = undefined;
            var2 = var4.bind(var3)(var5);
case 34:
            var3 = var1 != var2;
            var1 = null;
            if(!var3) { _fun0047_ip = 457; continue _fun0047 }
case 78:
            var4 = _closure1_slot68;
            var3 = var2.planId;
            var2 = undefined;
            var1 = var4.bind(var2)(var3);
case 457:
            return var1;
        }
    };
    var20 = function getPremiumTypeFromSubscription(arg1) {
        _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
case 0:
            var5 = arg1;
            var4 = null;
            if(!(var4 != var5)) { _fun0048_ip = 48; continue _fun0048 }
case 458:
            var1 = _closure1_slot56;
            var3 = undefined;
            var1 = var1.bind(var3)(var5);
            if(!(var4 == var1)) { _fun0048_ip = 95; continue _fun0048 }
case 48:
            var4 = undefined;
            return var4;
case 95:
            var2 = _closure1_slot65;
            var1 = var1.planId;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var19 = function getPremiumTypeFromSubscriptionRenewalMutations(arg1) {
        _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
case 0:
            var1 = arg1;
            var4 = null;
            if(!(var4 != var1)) { _fun0049_ip = 460; continue _fun0049 }
case 458:
            var2 = var1.renewalMutations;
            if(!(var4 != var2)) { _fun0049_ip = 460; continue _fun0049 }
case 517:
            var5 = _closure1_slot56;
            var1 = var1.renewalMutations;
            var3 = undefined;
            var1 = var5.bind(var3)(var1);
            if(!(var4 == var1)) { _fun0049_ip = 518; continue _fun0049 }
case 460:
            var4 = undefined;
            return var4;
case 518:
            var2 = _closure1_slot65;
            var1 = var1.planId;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var18 = function getPremiumGradientColor(arg1) {
        _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot37;
            var2 = var2.TIER_0;
            if(!(var2 !== var3)) { _fun0050_ip = 519; continue _fun0050 }
case 29:
            var2 = _closure1_slot37;
            var2 = var2.TIER_1;
            if(!(var2 !== var3)) { _fun0050_ip = 448; continue _fun0050 }
case 117:
            var2 = _closure1_slot37;
            var2 = var2.TIER_2;
            if(!(var2 !== var3)) { _fun0050_ip = 520; continue _fun0050 }
case 521:
            var2 = undefined;
            return var2;
case 520:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 25;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.Gradients;
            var2 = var2.PREMIUM_TIER_2;
            return var2;
case 448:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 25;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.Gradients;
            var2 = var2.PREMIUM_TIER_1;
            return var2;
case 519:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 25;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var1 = var1.Gradients;
            var1 = var1.PREMIUM_TIER_0;
            return var1;
        }
    };
    var16 = function formatPriceString(arg1, arg2) {
        var2 = arg1;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 19;
        var4 = var4[var3];
        var3 = undefined;
        var6 = var5.bind(var3)(var4);
        var5 = var6.formatPrice;
        var4 = var2.amount;
        var2 = var2.currency;
        var5 = var5.bind(var6)(var4, var2);
        var2 = _closure1_slot64;
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
    var _closure1_slot90 = var16;
    var15 = function castPremiumSubscriptionAsSkuId(arg1) {
        var1 = arg1;
        return var1;
    };
    var11 = function getReverseTrialWeeks(arg1) {
        _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
case 0:
            var5 = arg1;
            var1 = null;
            var2 = var1 != var5;
            var3 = 2;
            var1 = var3;
            if(!var2) { _fun0051_ip = 94; continue _fun0051 }
case 36:
            var4 = _closure1_slot28;
            var2 = var4.includes;
            var2 = var2.bind(var4)(var5);
            var1 = var3;
            if(!var2) { _fun0051_ip = 94; continue _fun0051 }
case 50:
            var1 = 1;
case 94:
            return var1;
        }
    };
    var10 = function isTrialOffer(arg1) {
        _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0052_ip = 29; continue _fun0052 }
case 71:
            var2 = 'trial_id';
            var1 = var2 in var3;
case 29:
            return var1;
        }
    };
    var _closure1_slot91 = var10;
    var9 = function isDiscountOffer(arg1) {
        _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var1 = var1 != var3;
            if(!var1) { _fun0053_ip = 29; continue _fun0053 }
case 71:
            var2 = 'discount_id';
            var1 = var2 in var3;
case 29:
            return var1;
        }
    };
    var _closure1_slot92 = var9;
    var8 = function formatInterval(arg1) {
        _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
case 0:
            var5 = arg1;
            var2 = _closure1_slot40;
            var2 = var2.YEAR;
            if(!(var5 !== var2)) { _fun0054_ip = 129; continue _fun0054 }
case 31:
            var2 = _closure1_slot40;
            var2 = var2.MONTH;
            if(!(var5 !== var2)) { _fun0054_ip = 364; continue _fun0054 }
case 78:
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
case 364:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 15;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.FPybU1;
            var2 = var3.bind(var4)(var2);
            return var2;
case 129:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 15;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.tfqrho;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var7 = function isPremiumEligible(arg1) {
        _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0055_ip = 46; continue _fun0055 }
case 71:
            var3 = var2.isProvisional;
            var1 = !var3;
case 46:
            if(!var1) { _fun0055_ip = 33; continue _fun0055 }
case 38:
            var2 = var2.bot;
            var1 = !var2;
case 33:
            return var1;
        }
    };
    var6 = function getFractionalPremiumUnitsHours(arg1) {
        var4 = arg1;
        var3 = _closure1_slot94;
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
    var _closure1_slot93 = var6;
    var5 = function getFractionalPremiumUnitsHoursFromSkuIds(arg1) {
        var4 = arg1;
        var3 = var4.reduce;
        var2 = function(arg1, arg2) {
            _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
case 0:
                var5 = _closure1_slot3;
                var2 = _closure1_slot21;
                var1 = arg2;
                var4 = var2[var1];
                var2 = undefined;
                var1 = 2;
                var1 = var5.bind(var2)(var4, var1);
                var2 = 0;
                var4 = var1[var2];
                var5 = 1;
                var2 = var1[var5];
                var1 = _closure1_slot22;
                var6 = var1.HOUR;
                var1 = var5;
                if(!(var6 !== var4)) { _fun0056_ip = 53; continue _fun0056 }
case 70:
                var3 = _closure1_slot22;
                var3 = var3.DAY;
                var1 = var5;
                if(!(var3 === var4)) { _fun0056_ip = 53; continue _fun0056 }
case 83:
                var1 = 24;
case 53:
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
    var _closure1_slot94 = var5;
    var4 = function calculateDiscountPercentageForYearlyPlan(arg1) {
        _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
case 0:
            var2 = arg1;
            var7 = arguments[1];
            var6 = arguments[2];
            var3 = undefined;
            if(!(var7 === var3)) { _fun0057_ip = 464; continue _fun0057 }
case 463:
            var7 = false;
case 464:
            if(!(var6 === var3)) { _fun0057_ip = 31; continue _fun0057 }
case 46:
            var6 = {};
case 31:
            var5 = var2.interval;
            var1 = _closure1_slot40;
            var1 = var1.YEAR;
            if(!(var5 === var1)) { _fun0057_ip = 125; continue _fun0057 }
case 2:
            var5 = _closure1_slot33;
            var1 = var2.skuId;
            var1 = var5[var1];
            var5 = null;
            if(!(var5 != var1)) { _fun0057_ip = 125; continue _fun0057 }
case 363:
            var5 = _closure1_slot58;
            var12 = undefined;
            var11 = var1;
            var10 = false;
            var9 = var7;
            var8 = var6;
            var1 = var12[var5](var11, var10, var9, var8, var7);
            var11 = var2.id;
            var9 = var7;
            var8 = var6;
            var2 = var12[var5](var11, var10, var9, var8, var7);
            var5 = var1.amount;
            var4 = 0;
            if(!(var4 === var5)) { _fun0057_ip = 55; continue _fun0057 }
case 125:
            return var3;
case 55:
            var2 = var2.amount;
            var3 = var1.amount;
            var1 = 12;
            var1 = var1 * var3;
            var5 = var2 / var1;
            var1 = global;
            var3 = var1.Math;
            var2 = var3.floor;
            var4 = 100;
            var1 = 1;
            var1 = var1 - var5;
            var1 = var4 * var1;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var12 = global;
    var68 = var12.Object;
    var67 = var68.defineProperty;
    var17 = {};
    var1 = true;
    var17['value'] = var1;
    var1 = '__esModule';
    var1 = var67.bind(var68)(var3, var1, var17);
    var1 = 0;
    var17 = var14[var1];
    var1 = undefined;
    var17 = var66.bind(var1)(var17);
    var _closure1_slot3 = var17;
    var17 = 1;
    var17 = var14[var17];
    var17 = var13.bind(var1)(var17);
    var71 = var17.isNoneSubscription;
    var _closure1_slot4 = var71;
    var17 = 2;
    var17 = var14[var17];
    var17 = var66.bind(var1)(var17);
    var _closure1_slot5 = var17;
    var17 = 3;
    var17 = var14[var17];
    var17 = var66.bind(var1)(var17);
    var _closure1_slot6 = var17;
    var17 = 4;
    var17 = var14[var17];
    var17 = var66.bind(var1)(var17);
    var _closure1_slot7 = var17;
    var17 = 5;
    var17 = var14[var17];
    var17 = var66.bind(var1)(var17);
    var _closure1_slot8 = var17;
    var17 = 6;
    var17 = var14[var17];
    var17 = var66.bind(var1)(var17);
    var _closure1_slot9 = var17;
    var17 = 7;
    var17 = var14[var17];
    var17 = var13.bind(var1)(var17);
    var67 = var17.InvoiceStatusTypes;
    var _closure1_slot10 = var67;
    var67 = var17.PaymentGateways;
    var _closure1_slot11 = var67;
    var67 = var17.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot12 = var67;
    var17 = var17.SubscriptionStatusTypes;
    var _closure1_slot13 = var17;
    var17 = 8;
    var17 = var14[var17];
    var17 = var13.bind(var1)(var17);
    var67 = var17.ANNUAL_DISCOUNT_PERCENTAGE_FALLBACK;
    var _closure1_slot14 = var67;
    var67 = var17.DEFAULT_APPLE_GRACE_PERIOD_DAYS;
    var _closure1_slot15 = var67;
    var67 = var17.DEFAULT_GOOGLE_GRACE_PERIOD_DAYS;
    var _closure1_slot16 = var67;
    var67 = var17.DEFAULT_MAX_GRACE_PERIOD_DAYS;
    var _closure1_slot17 = var67;
    var67 = var17.DISCOUNT_DURATION_FALLBACK;
    var _closure1_slot18 = var67;
    var67 = var17.DISCOUNT_PERCENTAGE_FALLBACK;
    var _closure1_slot19 = var67;
    var67 = var17.DiscountUserUsageLimitIntervalTypes;
    var _closure1_slot20 = var67;
    var67 = var17.FRACTIONAL_PREMIUM_SKU_INTERVAL_COUNTS;
    var _closure1_slot21 = var67;
    var67 = var17.FractionalPremiumIntervalTypes;
    var _closure1_slot22 = var67;
    var67 = var17.FractionalPremiumStates;
    var _closure1_slot23 = var67;
    var67 = var17.MAX_ACCOUNT_HOLD_DAYS;
    var _closure1_slot24 = var67;
    var67 = var17.MAX_PAYMENT_PROCESSING_TIME_DAYS;
    var _closure1_slot25 = var67;
    var67 = var17.MULTI_MONTH_PLANS;
    var _closure1_slot26 = var67;
    var67 = var17.NUM_FREE_GUILD_BOOSTS_WITH_PREMIUM;
    var _closure1_slot27 = var67;
    var67 = var17.ONE_WEEK_REVERSE_TRIAL_IDS;
    var _closure1_slot28 = var67;
    var67 = var17.PAID_SUBSCRIPTION_MAX_BILLING_RETRY_DAYS;
    var _closure1_slot29 = var67;
    var67 = var17.PAID_SUBSCRIPTION_MAX_GRACE_PERIOD_DAYS;
    var _closure1_slot30 = var67;
    var67 = var17.PREMIUM_GUILD_SUBSCRIPTION_PLANS;
    var _closure1_slot31 = var67;
    var67 = var17.PREMIUM_PLANS;
    var _closure1_slot32 = var67;
    var67 = var17.PREMIUM_SKU_TO_MONTHLY_PLAN;
    var _closure1_slot33 = var67;
    var67 = var17.PREMIUM_TIER_2_PLANS;
    var _closure1_slot34 = var67;
    var67 = var17.PREMIUM_TIER_2_REVERSE_FOLLOWUP_TRIAL_ID;
    var _closure1_slot35 = var67;
    var67 = var17.PremiumSubscriptionSKUs;
    var _closure1_slot36 = var67;
    var67 = var17.PremiumTypes;
    var _closure1_slot37 = var67;
    var67 = var17.PremiumUserLimits;
    var _closure1_slot38 = var67;
    var67 = var17.REVERSE_TRIAL_IDS;
    var _closure1_slot39 = var67;
    var67 = var17.SubscriptionIntervalTypes;
    var _closure1_slot40 = var67;
    var67 = var17.SubscriptionPlanInfo;
    var _closure1_slot41 = var67;
    var68 = var17.SubscriptionPlans;
    var _closure1_slot42 = var68;
    var67 = var17.USER_PREMIUM_OFFER_EXPIRES_APPROACHING_4_DAY_THRESHOLD;
    var _closure1_slot43 = var67;
    var17 = var17.USER_PREMIUM_OFFER_EXPIRES_APPROACHING_5_DAY_THRESHOLD;
    var _closure1_slot44 = var17;
    var17 = 9;
    var17 = var14[var17];
    var17 = var13.bind(var1)(var17);
    var67 = var17.CurrencyCodes;
    var _closure1_slot45 = var67;
    var67 = var17.PaymentGatewayToFriendlyName;
    var _closure1_slot46 = var67;
    var17 = var17.PREPAID_PAYMENT_SOURCES;
    var _closure1_slot47 = var17;
    var17 = {'PAYMENT_SOURCE_MANAGEMENT': 'https://support.apple.com/HT201266', 'BILLING_HISTORY': 'https://support.apple.com/HT201266', 'SUBSCRIPTION_MANAGEMENT': 'https://support.apple.com/HT202039'};
    var _closure1_slot48 = var17;
    var17 = {'SUBSCRIPTION_MANAGEMENT': 'https://play.google.com/store/account/subscriptions', 'PAYMENT_SOURCE_MANAGEMENT': 'https://play.google.com/store/paymentmethods', 'BILLING_HISTORY': 'https://play.google.com/store/account/orderhistory'};
    var _closure1_slot49 = var17;
    var17 = 10;
    var17 = var14[var17];
    var67 = var66.bind(var1)(var17);
    var17 = var67.prototype;
    var66 = Object.create(var17, {constructor: {value: var67}});
    var77 = 'PremiumUtils.tsx';
    var78 = var66;
    var17 = new var78[var67](var77, var76);
    var17 = var17 instanceof Object ? var17 : var66;
    var _closure1_slot50 = var17;
    var67 = {};
    var17 = 'bundle';
    var67['BUNDLE'] = var17;
    var17 = 'tier_0';
    var67['TIER_0'] = var17;
    var17 = 'tier_1';
    var67['TIER_1'] = var17;
    var17 = 'tier_2';
    var67['TIER_2'] = var17;
    var17 = 'premium_guild';
    var67['PREMIUM_GUILD'] = var17;
    var _closure1_slot51 = var67;
    var66 = {};
    var17 = 'mid';
    var66['MID'] = var17;
    var17 = 'high';
    var66['HIGH'] = var17;
    var _closure1_slot52 = var66;
    var69 = var12.Set;
    var70 = var68.NONE_MONTH;
    var17 = new Array(12);
    var17[0] = var70;
    var70 = var68.NONE_3_MONTH;
    var17[1] = var70;
    var70 = var68.NONE_6_MONTH;
    var17[2] = var70;
    var70 = var68.NONE_YEAR;
    var17[3] = var70;
    var70 = var68.PREMIUM_MONTH_TIER_0;
    var17[4] = var70;
    var70 = var68.PREMIUM_MONTH_TIER_1;
    var17[5] = var70;
    var70 = var68.PREMIUM_MONTH_TIER_2;
    var17[6] = var70;
    var70 = var68.PREMIUM_YEAR_TIER_0;
    var17[7] = var70;
    var70 = var68.PREMIUM_YEAR_TIER_1;
    var17[8] = var70;
    var70 = var68.PREMIUM_YEAR_TIER_2;
    var17[9] = var70;
    var70 = var68.PREMIUM_3_MONTH_TIER_2;
    var17[10] = var70;
    var68 = var68.PREMIUM_6_MONTH_TIER_2;
    var17[11] = var68;
    var68 = var69.prototype;
    var68 = Object.create(var68, {constructor: {value: var69}});
    var78 = var68;
    var77 = var17;
    var17 = new var78[var69](var77, var76);
    var17 = var17 instanceof Object ? var17 : var68;
    var _closure1_slot53 = var17;
    var17 = function isNewUser(arg1) {
        _fun0058: for(var _fun0058_ip = 0; ; ) switch(_fun0058_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0058_ip = 120; continue _fun0058 }
case 71:
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
case 120:
            return var1;
        }
    };
    var70 = var12.Object;
    var69 = var70.freeze;
    var68 = {};
    var68['isNewUser'] = var17;
    var12 = 13;
    var74 = var14[var12];
    var74 = var13.bind(var1)(var74);
    var74 = var74.isPremiumAtLeast;
    var68['isPremiumAtLeast'] = var74;
    var74 = var14[var12];
    var74 = var13.bind(var1)(var74);
    var74 = var74.isPremium;
    var68['isPremium'] = var74;
    var74 = var14[var12];
    var74 = var13.bind(var1)(var74);
    var74 = var74.isPremiumExactly;
    var68['isPremiumExactly'] = var74;
    var68['isPremiumEligible'] = var7;
    var68['getPrice'] = var63;
    var68['getDefaultPrice'] = var64;
    var68['getInterval'] = var58;
    var68['getIntervalString'] = var57;
    var68['getIntervalStringAsNoun'] = var56;
    var68['getPremiumType'] = var55;
    var68['getDisplayName'] = var54;
    var68['getDisplayPremiumType'] = var53;
    var68['getPremiumPlanOptions'] = var52;
    var68['getReverseTrialWeeks'] = var11;
    var68['formatInterval'] = var8;
    var68['getPlanDescription'] = var73;
    var73 = function isPremiumSku(arg1) {
        _fun0059: for(var _fun0059_ip = 0; ; ) switch(_fun0059_ip) {
case 0:
            var3 = arg1;
            var1 = _closure1_slot36;
            var1 = var1.TIER_0;
            var1 = var3 === var1;
            if(var1) { _fun0059_ip = 78; continue _fun0059 }
case 31:
            var4 = _closure1_slot36;
            var4 = var4.TIER_1;
            var1 = var3 === var4;
case 78:
            if(var1) { _fun0059_ip = 360; continue _fun0059 }
case 369:
            var2 = _closure1_slot36;
            var2 = var2.TIER_2;
            var1 = var3 === var2;
case 360:
            return var1;
        }
    };
    var68['isPremiumSku'] = var73;
    var73 = function getIntervalMonths(arg1, arg2) {
        _fun0060: for(var _fun0060_ip = 0; ; ) switch(_fun0060_ip) {
case 0:
            var6 = arg1;
            var1 = arg2;
            var3 = _closure1_slot40;
            var3 = var3.MONTH;
            if(!(var6 !== var3)) { _fun0060_ip = 378; continue _fun0060 }
case 31:
            var2 = _closure1_slot40;
            var2 = var2.YEAR;
            if(!(var6 !== var2)) { _fun0060_ip = 450; continue _fun0060 }
case 78:
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
case 450:
            var2 = 12;
            var2 = var2 * var1;
            return var2;
case 378:
            return var1;
        }
    };
    var68['getIntervalMonths'] = var73;
    var73 = 27;
    var73 = var14[var73];
    var73 = var13.bind(var1)(var73);
    var73 = var73.getUserMaxFileSize;
    var68['getUserMaxFileSize'] = var73;
    var68['getSkuIdForPlan'] = var72;
    var72 = function getSkuIdForPremiumType(arg1) {
        _fun0061: for(var _fun0061_ip = 0; ; ) switch(_fun0061_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot37;
            var2 = var2.TIER_0;
            if(!(var2 !== var3)) { _fun0061_ip = 83; continue _fun0061 }
case 29:
            var2 = _closure1_slot37;
            var2 = var2.TIER_1;
            if(!(var2 !== var3)) { _fun0061_ip = 449; continue _fun0061 }
case 117:
            var2 = _closure1_slot37;
            var2 = var2.TIER_2;
            if(!(var2 !== var3)) { _fun0061_ip = 520; continue _fun0061 }
case 521:
            var2 = undefined;
            return var2;
case 520:
            var2 = _closure1_slot36;
            var2 = var2.TIER_2;
            return var2;
case 449:
            var2 = _closure1_slot36;
            var2 = var2.TIER_1;
            return var2;
case 83:
            var1 = _closure1_slot36;
            var1 = var1.TIER_0;
            return var1;
        }
    };
    var68['getSkuIdForPremiumType'] = var72;
    var72 = function getNumIncludedPremiumGuildSubscriptionSlots(arg1) {
        _fun0062: for(var _fun0062_ip = 0; ; ) switch(_fun0062_ip) {
case 0:
            var4 = _closure1_slot65;
            var3 = undefined;
            var1 = arg1;
            var4 = var4.bind(var3)(var1);
            var1 = _closure1_slot37;
            var3 = var1.TIER_2;
            var1 = 0;
            if(!(var4 === var3)) { _fun0062_ip = 78; continue _fun0062 }
case 33:
            var1 = _closure1_slot27;
case 78:
            return var1;
        }
    };
    var68['getNumIncludedPremiumGuildSubscriptionSlots'] = var72;
    var68['getBillingInformationString'] = var46;
    var68['extendDateWithUnconsumedFractionalPremium'] = var45;
    var68['getUnactivatedFractionalPremiumDurationString'] = var44;
    var68['isSwitchingPlansDisabled'] = var43;
    var68['getSwitchingPlansDisabledMessage'] = var42;
    var68['isNoneSubscription'] = var71;
    var68['getPlanIdFromInvoice'] = var36;
    var68['getStatusFromInvoice'] = var35;
    var68['isBaseSubscriptionCanceled'] = var34;
    var68['getPremiumGuildIntervalPrice'] = var31;
    var71 = function hasAccountCredit(arg1) {
        _fun0063: for(var _fun0063_ip = 0; ; ) switch(_fun0063_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0063_ip = 31; continue _fun0063 }
case 71:
            var3 = var4.size;
            var2 = 0;
            var1 = var2 !== var3;
case 31:
            if(!var1) { _fun0063_ip = 43; continue _fun0063 }
case 37:
            var2 = global;
            var3 = var2.Array;
            var2 = var3.from;
            var4 = var2.bind(var3)(var4);
            var3 = var4.some;
            var2 = function(arg1) {
                _fun0064: for(var _fun0064_ip = 0; ; ) switch(_fun0064_ip) {
case 0:
                    var2 = arg1;
                    var1 = var2.subscriptionPlanId;
                    var4 = var2.parentId;
                    var2 = var2.consumed;
                    var3 = null;
                    var1 = var3 != var1;
                    if(!var1) { _fun0064_ip = 117; continue _fun0064 }
case 3:
                    var1 = var3 != var4;
case 117:
                    if(!var1) { _fun0064_ip = 369; continue _fun0064 }
case 78:
                    var1 = !var2;
case 369:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
case 43:
            return var1;
        }
    };
    var68['hasAccountCredit'] = var71;
    var68['getBillingReviewSubheader'] = var30;
    var68['getIntervalForInvoice'] = var29;
    var68['getPremiumPlanItem'] = var65;
    var68['getGuildBoostPlanItem'] = var23;
    var68['isBoostOnlySubscription'] = var22;
    var68['getPremiumSkuIdForSubscription'] = var21;
    var68['getPremiumTypeFromSubscription'] = var20;
    var68['getPremiumTypeFromSubscriptionRenewalMutations'] = var19;
    var68['getPremiumGradientColor'] = var18;
    var68['getUnactivatedFractionalPremiumHours'] = var6;
    var68['castPremiumSubscriptionAsSkuId'] = var15;
    var68['calculateDiscountPercentageForYearlyPlan'] = var4;
    var71 = function canUseAnimatedEmojis(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 26;
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
    var68['canUseAnimatedEmojis'] = var71;
    var71 = function canUseEmojisEverywhere(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 26;
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
    var68['canUseEmojisEverywhere'] = var71;
    var71 = function canUseSoundboardEverywhere(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 26;
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
    var68['canUseSoundboardEverywhere'] = var71;
    var71 = function canUseCustomCallSounds(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 26;
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
    var68['canUseCustomCallSounds'] = var71;
    var71 = function canUploadLargeFiles(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 26;
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
    var68['canUploadLargeFiles'] = var71;
    var71 = function canUseBadges(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 26;
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
    var68['canUseBadges'] = var71;
    var71 = function canUseHighVideoUploadQuality(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 26;
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
    var68['canUseHighVideoUploadQuality'] = var71;
    var71 = function canEditDiscriminator(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 26;
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
    var68['canEditDiscriminator'] = var71;
    var71 = function hasBoostDiscount(arg1, arg2) {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 26;
        var4 = var6[var1];
        var2 = undefined;
        var5 = var3.bind(var2)(var4);
        var4 = var5.canUserUse;
        var1 = var6[var1];
        var1 = var3.bind(var2)(var1);
        var3 = var1.BOOST_DISCOUNT;
        var2 = arg1;
        var1 = arg2;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var1;
    };
    var68['hasBoostDiscount'] = var71;
    var71 = function canUseAnimatedAvatar(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 26;
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
    var68['canUseAnimatedAvatar'] = var71;
    var71 = function canUseFancyVoiceChannelReactions(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 26;
        var3 = var6[var1];
        var2 = undefined;
        var4 = var5.bind(var2)(var3);
        var3 = var4.canUserUse;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var2 = var1.FANCY_VOICE_CHANNEL_REACTIONS;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var68['canUseFancyVoiceChannelReactions'] = var71;
    var71 = function canInstallPremiumApplications(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 26;
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
    var68['canInstallPremiumApplications'] = var71;
    var71 = function canUseIncreasedMessageLength(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 26;
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
    var68['canUseIncreasedMessageLength'] = var71;
    var71 = function canUseIncreasedGuildCap(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 26;
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
    var68['canUseIncreasedGuildCap'] = var71;
    var71 = function canRedeemPremiumPerks(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 26;
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
    var68['canRedeemPremiumPerks'] = var71;
    var71 = function canUsePremiumProfileCustomization(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 26;
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
    var68['canUsePremiumProfileCustomization'] = var71;
    var71 = function canUsePremiumAppIcons(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 26;
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
    var68['canUsePremiumAppIcons'] = var71;
    var71 = function canUsePremiumGuildMemberProfile(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 26;
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
    var68['canUsePremiumGuildMemberProfile'] = var71;
    var71 = function canUseClientThemes(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 26;
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
    var68['canUseClientThemes'] = var71;
    var71 = function canStreamQuality(arg1, arg2) {
        _fun0065: for(var _fun0065_ip = 0; ; ) switch(_fun0065_ip) {
case 0:
            var3 = arg1;
            var5 = arg2;
            var1 = _closure1_slot52;
            var1 = var1.HIGH;
            if(!(var3 !== var1)) { _fun0065_ip = 478; continue _fun0065 }
case 31:
            var1 = _closure1_slot52;
            var1 = var1.MID;
            var1 = var3 === var1;
            if(!var1) { _fun0065_ip = 364; continue _fun0065 }
case 369:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 26;
            var4 = var9[var3];
            var7 = undefined;
            var6 = var8.bind(var7)(var4);
            var4 = var6.canUserUse;
            var3 = var9[var3];
            var3 = var8.bind(var7)(var3);
            var3 = var3.STREAM_MID_QUALITY;
            var1 = var4.bind(var6)(var3, var5);
case 364:
            _fun0065_ip = 522; continue _fun0065;
case 478:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 26;
            var3 = var8[var2];
            var6 = undefined;
            var4 = var7.bind(var6)(var3);
            var3 = var4.canUserUse;
            var2 = var8[var2];
            var2 = var7.bind(var6)(var2);
            var2 = var2.STREAM_HIGH_QUALITY;
            var1 = var3.bind(var4)(var2, var5);
case 522:
            return var1;
        }
    };
    var68['canStreamQuality'] = var71;
    var71 = function hasFreeBoosts(arg1, arg2) {
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 26;
        var4 = var6[var1];
        var2 = undefined;
        var5 = var3.bind(var2)(var4);
        var4 = var5.canUserUse;
        var1 = var6[var1];
        var1 = var3.bind(var2)(var1);
        var3 = var1.FREE_BOOSTS;
        var2 = arg1;
        var1 = arg2;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var1;
    };
    var68['hasFreeBoosts'] = var71;
    var71 = function canUseCustomStickersEverywhere(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 26;
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
    var68['canUseCustomStickersEverywhere'] = var71;
    var71 = function canUseCustomBackgrounds(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 26;
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
    var68['canUseCustomBackgrounds'] = var71;
    var71 = function canUseCollectibles(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 26;
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
    var68['canUseCollectibles'] = var71;
    var71 = function canUsePremiumVoiceFilters(arg1) {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var1 = 26;
        var3 = var6[var1];
        var2 = undefined;
        var4 = var5.bind(var2)(var3);
        var3 = var4.canUserUse;
        var1 = var6[var1];
        var1 = var5.bind(var2)(var1);
        var2 = var1.PREMIUM_VOICE_FILTERS;
        var1 = arg1;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var68['canUsePremiumVoiceFilters'] = var71;
    var68['formatPriceString'] = var16;
    var68['StreamQuality'] = var66;
    var68 = var69.bind(var70)(var68);
    var69 = 28;
    var69 = var14[var69];
    var71 = var13.bind(var1)(var69);
    var70 = var71.fileFinishedImporting;
    var69 = 'utils/PremiumUtils.tsx';
    var69 = var70.bind(var71)(var69);
    var3['default'] = var68;
    var3['Branding'] = var67;
    var3['StreamQuality'] = var66;
    var66 = function getPremiumBranding(arg1) {
        _fun0066: for(var _fun0066_ip = 0; ; ) switch(_fun0066_ip) {
case 0:
            var5 = arg1;
            var3 = var5.planId;
            var4 = _closure1_slot32;
            var1 = var4.has;
            var1 = var1.bind(var4)(var3);
            if(!var1) { _fun0066_ip = 2; continue _fun0066 }
case 47:
            var4 = _closure1_slot70;
            var1 = undefined;
            var1 = var4.bind(var1)(var5);
            if(var1) { _fun0066_ip = 52; continue _fun0066 }
case 2:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_MONTH_TIER_0;
            if(!(var3 !== var1)) { _fun0066_ip = 68; continue _fun0066 }
case 120:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_YEAR_TIER_0;
            if(!(var3 !== var1)) { _fun0066_ip = 68; continue _fun0066 }
case 523:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_MONTH_TIER_1;
            if(!(var3 !== var1)) { _fun0066_ip = 467; continue _fun0066 }
case 478:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_YEAR_TIER_1;
            if(!(var3 !== var1)) { _fun0066_ip = 467; continue _fun0066 }
case 44:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_MONTH_TIER_2;
            if(!(var3 !== var1)) { _fun0066_ip = 186; continue _fun0066 }
case 524:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_YEAR_TIER_2;
            if(!(var3 !== var1)) { _fun0066_ip = 186; continue _fun0066 }
case 525:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_3_MONTH_TIER_2;
            if(!(var3 !== var1)) { _fun0066_ip = 186; continue _fun0066 }
case 382:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_6_MONTH_TIER_2;
            if(!(var3 !== var1)) { _fun0066_ip = 186; continue _fun0066 }
case 385:
            var1 = _closure1_slot51;
            var1 = var1.PREMIUM_GUILD;
            _fun0066_ip = 526; continue _fun0066;
case 186:
            var3 = _closure1_slot51;
            var1 = var3.TIER_2;
case 526:
            _fun0066_ip = 20; continue _fun0066;
case 467:
            var3 = _closure1_slot51;
            var1 = var3.TIER_1;
case 20:
            _fun0066_ip = 54; continue _fun0066;
case 68:
            var3 = _closure1_slot51;
            var1 = var3.TIER_0;
case 54:
            _fun0066_ip = 527; continue _fun0066;
case 52:
            var2 = _closure1_slot51;
            var1 = var2.BUNDLE;
case 527:
            return var1;
        }
    };
    var3['getPremiumBranding'] = var66;
    var3['getPremiumPlanItem'] = var65;
    var3['getDefaultPrice'] = var64;
    var3['getPrice'] = var63;
    var63 = function getCountryPrices(arg1) {
        _fun0067: for(var _fun0067_ip = 0; ; ) switch(_fun0067_ip) {
case 0:
            var4 = arguments[1];
            var3 = undefined;
            if(!(var4 === var3)) { _fun0067_ip = 528; continue _fun0067 }
case 458:
            var1 = _closure1_slot12;
            var4 = var1.DEFAULT;
case 528:
            var2 = _closure1_slot59;
            var1 = arg1;
            var1 = var2.bind(var3)(var1, var4);
            var1 = var1.countryPrices;
            return var1;
        }
    };
    var3['getCountryPrices'] = var63;
    var3['experimentalGetPrices'] = var62;
    var3['experimentalGetPrice'] = var61;
    var3['getServerPriceFromClientPrice'] = var60;
    var3['getItemPlansTotalServerPrice'] = var59;
    var59 = function getSubscriptionWithNewPlansTotalServerPrice(arg1, arg2, arg3, arg4) {
        _fun0068: for(var _fun0068_ip = 0; ; ) switch(_fun0068_ip) {
case 0:
            var6 = arg1;
            var3 = arg2;
            var2 = null;
            if(!(var2 === var3)) { _fun0068_ip = 457; continue _fun0068 }
case 71:
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 14;
            var1 = var5[var1];
            var7 = undefined;
            var5 = var4.bind(var7)(var1);
            var4 = var2 !== var6;
            var1 = "Subscription can't be null";
            var1 = var5.bind(var7)(var4, var1);
            var3 = new Array(0);
case 457:
            var5 = _closure1_slot63;
            if(!(var2 === var6)) { _fun0068_ip = 516; continue _fun0068 }
case 179:
            var4 = _closure1_slot87;
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            _fun0068_ip = 100; continue _fun0068;
case 516:
            var2 = _closure1_slot86;
            var1 = undefined;
            var4 = var2.bind(var1)(var6, var3);
case 100:
            var3 = undefined;
            var2 = arg3;
            var1 = arg4;
            var1 = var5.bind(var3)(var4, var2, var1);
            return var1;
        }
    };
    var3['getSubscriptionWithNewPlansTotalServerPrice'] = var59;
    var3['getInterval'] = var58;
    var58 = function getDiscountIntervalString(arg1) {
        _fun0069: for(var _fun0069_ip = 0; ; ) switch(_fun0069_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot20;
            var2 = var2.MONTH;
            if(!(var2 !== var3)) { _fun0069_ip = 529; continue _fun0069 }
case 31:
            var2 = _closure1_slot20;
            var2 = var2.YEAR;
            if(!(var2 !== var3)) { _fun0069_ip = 75; continue _fun0069 }
case 78:
            var2 = _closure1_slot20;
            var2 = var2.DAY;
            if(!(var2 !== var3)) { _fun0069_ip = 7; continue _fun0069 }
case 178:
            var2 = _closure1_slot20;
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
case 75:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 15;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.tfqrho;
            var2 = var3.bind(var4)(var2);
            return var2;
case 529:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 15;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.FPybU1;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getDiscountIntervalString'] = var58;
    var3['getIntervalString'] = var57;
    var3['getIntervalStringAsNoun'] = var56;
    var3['getPremiumType'] = var55;
    var3['getDisplayName'] = var54;
    var54 = function getDisplayNameFromSku(arg1) {
        _fun0070: for(var _fun0070_ip = 0; ; ) switch(_fun0070_ip) {
case 0:
            var7 = arg1;
            var2 = _closure1_slot36;
            var2 = var2.TIER_0;
            if(!(var2 !== var7)) { _fun0070_ip = 67; continue _fun0070 }
case 31:
            var2 = _closure1_slot36;
            var2 = var2.TIER_1;
            if(!(var2 !== var7)) { _fun0070_ip = 68; continue _fun0070 }
case 369:
            var2 = _closure1_slot36;
            var2 = var2.TIER_2;
            if(!(var2 !== var7)) { _fun0070_ip = 530; continue _fun0070 }
case 360:
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
            var3 = 11;
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
case 530:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 15;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.lG6a5+;
            var2 = var3.bind(var4)(var2);
            return var2;
case 68:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 15;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.FSOz7+;
            var2 = var3.bind(var4)(var2);
            return var2;
case 67:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 15;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.t9uG/v;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getDisplayNameFromSku'] = var54;
    var54 = function getTierDisplayName(arg1) {
        _fun0071: for(var _fun0071_ip = 0; ; ) switch(_fun0071_ip) {
case 0:
            var7 = arg1;
            var2 = _closure1_slot42;
            var2 = var2.PREMIUM_MONTH_TIER_0;
            if(!(var2 !== var7)) { _fun0071_ip = 531; continue _fun0071 }
case 31:
            var2 = _closure1_slot42;
            var2 = var2.PREMIUM_YEAR_TIER_0;
            if(!(var2 !== var7)) { _fun0071_ip = 531; continue _fun0071 }
case 369:
            var2 = _closure1_slot42;
            var2 = var2.PREMIUM_MONTH_TIER_1;
            if(!(var2 !== var7)) { _fun0071_ip = 532; continue _fun0071 }
case 457:
            var2 = _closure1_slot42;
            var2 = var2.PREMIUM_YEAR_TIER_1;
            if(!(var2 !== var7)) { _fun0071_ip = 532; continue _fun0071 }
case 462:
            var2 = _closure1_slot42;
            var2 = var2.PREMIUM_MONTH_TIER_2;
            if(!(var2 !== var7)) { _fun0071_ip = 533; continue _fun0071 }
case 478:
            var2 = _closure1_slot42;
            var2 = var2.PREMIUM_3_MONTH_TIER_2;
            if(!(var2 !== var7)) { _fun0071_ip = 533; continue _fun0071 }
case 44:
            var2 = _closure1_slot42;
            var2 = var2.PREMIUM_6_MONTH_TIER_2;
            if(!(var2 !== var7)) { _fun0071_ip = 533; continue _fun0071 }
case 524:
            var2 = _closure1_slot42;
            var2 = var2.PREMIUM_YEAR_TIER_2;
            if(!(var2 !== var7)) { _fun0071_ip = 533; continue _fun0071 }
case 525:
            var2 = global;
            var4 = var2.Error;
            var2 = var4.prototype;
            var3 = Object.create(var2, {constructor: {value: var4}});
            var9 = 'Unsupported plan';
            var10 = var3;
            var2 = new var10[var4](var9, var8);
            var2 = var2 instanceof Object ? var2 : var3;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var3 = 11;
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
case 533:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 15;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.lG6a5+;
            var2 = var3.bind(var4)(var2);
            return var2;
case 532:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 15;
            var3 = var7[var2];
            var5 = undefined;
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.FSOz7+;
            var2 = var3.bind(var4)(var2);
            return var2;
case 531:
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 15;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.t9uG/v;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getTierDisplayName'] = var54;
    var3['getDisplayPremiumType'] = var53;
    var53 = function getPremiumTypeDisplayName(arg1) {
        _fun0072: for(var _fun0072_ip = 0; ; ) switch(_fun0072_ip) {
case 0:
            var4 = arg1;
            var3 = arguments[1];
            var6 = undefined;
            if(!(var3 === var6)) { _fun0072_ip = 32; continue _fun0072 }
case 71:
            var3 = false;
case 32:
            var1 = _closure1_slot37;
            var1 = var1.TIER_0;
            if(!(var1 !== var4)) { _fun0072_ip = 19; continue _fun0072 }
case 117:
            var1 = _closure1_slot37;
            var1 = var1.TIER_1;
            if(!(var1 !== var4)) { _fun0072_ip = 534; continue _fun0072 }
case 521:
            var1 = _closure1_slot37;
            var1 = var1.TIER_2;
            if(!(var1 !== var4)) { _fun0072_ip = 449; continue _fun0072 }
case 43:
            return var6;
case 449:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 15;
            var4 = var8[var1];
            var4 = var7.bind(var6)(var4);
            var5 = var4.intl;
            var4 = var5.string;
            var1 = var8[var1];
            var1 = var7.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.lG6a5+;
            var1 = var4.bind(var5)(var1);
            return var1;
case 534:
            var1 = 'Classic';
            if(var3) { _fun0072_ip = 467; continue _fun0072 }
case 183:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var4 = 15;
            var5 = var9[var4];
            var5 = var8.bind(var6)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var4 = var9[var4];
            var4 = var8.bind(var6)(var4);
            var4 = var4.t;
            var4 = var4.FSOz7+;
            var1 = var5.bind(var7)(var4);
case 467:
            return var1;
case 19:
            var1 = 'Basic';
            if(var3) { _fun0072_ip = 18; continue _fun0072 }
case 535:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 15;
            var3 = var7[var2];
            var3 = var5.bind(var6)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var5.bind(var6)(var2);
            var2 = var2.t;
            var2 = var2.t9uG/v;
            var1 = var3.bind(var4)(var2);
case 18:
            return var1;
        }
    };
    var3['getPremiumTypeDisplayName'] = var53;
    var53 = function getPlanDescriptionFromInvoice(arg1) {
        _fun0073: for(var _fun0073_ip = 0; ; ) switch(_fun0073_ip) {
case 0:
            var1 = arg1;
            var5 = var1.renewalInvoicePreview;
            var11 = var1.subscription;
            var10 = var1.planId;
            var8 = var1.includePremiumGuilds;
            var3 = undefined;
            if(!(var8 === var3)) { _fun0073_ip = 49; continue _fun0073 }
case 33:
            var8 = false;
case 49:
            var7 = var1.hasDiscountApplied;
            if(!(var7 === var3)) { _fun0073_ip = 518; continue _fun0073 }
case 69:
            var7 = false;
case 518:
            var6 = var1.activeDiscountInfo;
            var4 = var1.hasFractionalPremiumWithSub;
            if(!(var4 === var3)) { _fun0073_ip = 42; continue _fun0073 }
case 120:
            var4 = false;
case 42:
            var2 = _closure1_slot8;
            var1 = var2.get;
            var10 = var1.bind(var2)(var10);
            var2 = _closure1_slot1;
            var12 = _closure1_slot2;
            var1 = 14;
            var1 = var12[var1];
            var12 = var2.bind(var3)(var1);
            var1 = null;
            var2 = var1 != var10;
            var1 = 'Missing plan';
            var1 = var12.bind(var3)(var2, var1);
            var2 = _closure1_slot67;
            var1 = {};
            var1['subscription'] = var11;
            var12 = var10.id;
            var1['planId'] = var12;
            var9 = _closure1_slot82;
            var9 = var9.bind(var3)(var5, var11, var10);
            var1['price'] = var9;
            var1['includePremiumGuilds'] = var8;
            var1['hasDiscountApplied'] = var7;
            var1['activeDiscountInfo'] = var6;
            var1['renewalInvoicePreview'] = var5;
            var1['hasFractionalPremiumWithSub'] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getPlanDescriptionFromInvoice'] = var53;
    var53 = function getExternalPlanDisplayName(arg1) {
        _fun0074: for(var _fun0074_ip = 0; ; ) switch(_fun0074_ip) {
case 0:
            var1 = arg1;
            var4 = var1.planId;
            var5 = var1.additionalPlans;
            var2 = _closure1_slot4;
            var7 = undefined;
            var3 = var2.bind(var7)(var4);
            var2 = null;
            var6 = null;
            if(var3) { _fun0074_ip = 69; continue _fun0074 }
case 41:
            var3 = _closure1_slot66;
            var6 = var3.bind(var7)(var4);
case 69:
            var3 = var2 == var5;
            var11 = undefined;
            if(var3) { _fun0074_ip = 376; continue _fun0074 }
case 360:
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
case 376:
            var3 = var2 == var11;
            var4 = undefined;
            if(var3) { _fun0074_ip = 536; continue _fun0074 }
case 516:
            var4 = var11.planId;
case 536:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_MONTH_GUILD;
            if(!(var4 !== var3)) { _fun0074_ip = 188; continue _fun0074 }
case 451:
            var3 = var2 == var11;
            var4 = undefined;
            if(var3) { _fun0074_ip = 55; continue _fun0074 }
case 13:
            var4 = var11.planId;
case 55:
            var3 = _closure1_slot42;
            var3 = var3.PREMIUM_YEAR_GUILD;
            var9 = null;
            if(!(var4 === var3)) { _fun0074_ip = 56; continue _fun0074 }
case 188:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 15;
            var3 = var5[var3];
            var3 = var4.bind(var7)(var3);
            var3 = var3.t;
            var9 = var3.Pi5yMD;
case 56:
            var3 = var2 != var9;
            var5 = undefined;
            if(!var3) { _fun0074_ip = 537; continue _fun0074 }
case 452:
            var4 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 15;
            var3 = var8[var3];
            var3 = var4.bind(var7)(var3);
            var8 = var3.intl;
            var4 = var8.formatToPlainString;
            var3 = {};
            var12 = var2 == var11;
            var10 = undefined;
            if(var12) { _fun0074_ip = 538; continue _fun0074 }
case 539:
            var10 = var11.quantity;
case 538:
            var3['num'] = var10;
            var5 = var4.bind(var8)(var9, var3);
case 537:
            if(!(var2 != var6)) { _fun0074_ip = 368; continue _fun0074 }
case 540:
            if(!(var2 == var5)) { _fun0074_ip = 541; continue _fun0074 }
case 368:
            if(!(var2 == var6)) { _fun0074_ip = 199; continue _fun0074 }
case 542:
            if(!(var2 == var5)) { _fun0074_ip = 202; continue _fun0074 }
case 543:
            var2 = global;
            var4 = var2.Error;
            var2 = var4.prototype;
            var3 = Object.create(var2, {constructor: {value: var4}});
            var14 = 'Subscription without premium or premium guild subscription';
            var15 = var3;
            var2 = new var15[var4](var14, var13);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 202:
            return var5;
case 199:
            return var6;
case 541:
            var2 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 15;
            var3 = var8[var1];
            var3 = var2.bind(var7)(var3);
            var4 = var3.intl;
            var3 = var4.formatToPlainString;
            var1 = var8[var1];
            var1 = var2.bind(var7)(var1);
            var1 = var1.t;
            var2 = var1.FN5T9v;
            var1 = {};
            var1['premiumDescription'] = var6;
            var1['premiumGuildDescription'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['getExternalPlanDisplayName'] = var53;
    var3['getPremiumPlanOptions'] = var52;
    var52 = function getPlanIdForPremiumType(arg1, arg2) {
        _fun0075: for(var _fun0075_ip = 0; ; ) switch(_fun0075_ip) {
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
            if(var4) { _fun0075_ip = 191; continue _fun0075 }
case 180:
            var7 = var1.Error;
            var4 = var1.HermesInternal;
            var5 = var4.concat;
            var4 = 'Unsupported plan interval for gifting premium type: ';
            var8 = var5.bind(var4)(var3);
            var5 = var7.prototype;
            var5 = Object.create(var5, {constructor: {value: var7}});
            var9 = var5;
            var4 = new var9[var7](var8, var7);
            var4 = var4 instanceof Object ? var4 : var5;
            throw var4;
case 191:
            var4 = _closure1_slot37;
            var4 = var4.TIER_0;
            if(!(var6 !== var4)) { _fun0075_ip = 177; continue _fun0075 }
case 544:
            var4 = _closure1_slot37;
            var4 = var4.TIER_2;
            if(!(var6 !== var4)) { _fun0075_ip = 487; continue _fun0075 }
case 14:
            var5 = var1.Error;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var1 = 'Unsupported gifting premium type: ';
            var8 = var4.bind(var1)(var6);
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var9 = var4;
            var1 = new var9[var5](var8, var7);
            var1 = var1 instanceof Object ? var1 : var4;
            throw var1;
case 487:
            var1 = _closure1_slot40;
            var1 = var1.MONTH;
            if(!(var3 !== var1)) { _fun0075_ip = 545; continue _fun0075 }
case 197:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_YEAR_TIER_2;
            _fun0075_ip = 18; continue _fun0075;
case 545:
            var4 = _closure1_slot42;
            var1 = var4.PREMIUM_MONTH_TIER_2;
case 18:
            return var1;
case 177:
            var1 = _closure1_slot40;
            var1 = var1.MONTH;
            if(!(var3 !== var1)) { _fun0075_ip = 546; continue _fun0075 }
case 24:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_YEAR_TIER_0;
            _fun0075_ip = 547; continue _fun0075;
case 546:
            var2 = _closure1_slot42;
            var1 = var2.PREMIUM_MONTH_TIER_0;
case 547:
            return var1;
        }
    };
    var3['getPlanIdForPremiumType'] = var52;
    var3['getNumPremiumGuildSubscriptions'] = var51;
    var3['subscriptionHasPremiumGuildPlan'] = var50;
    var3['isPremiumBaseSubscriptionPlan'] = var49;
    var3['isPremiumGuildSubscriptionPlan'] = var48;
    var48 = function isPremiumSubscriptionPlan(arg1) {
        _fun0076: for(var _fun0076_ip = 0; ; ) switch(_fun0076_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot71;
            var3 = undefined;
            var1 = var1.bind(var3)(var4);
            if(var1) { _fun0076_ip = 47; continue _fun0076 }
case 29:
            var2 = _closure1_slot72;
            var1 = var2.bind(var3)(var4);
case 47:
            return var1;
        }
    };
    var3['isPremiumSubscriptionPlan'] = var48;
    var3['getBillingGracePeriodDaysAndExpiresDate'] = var47;
    var3['getBillingInformationString'] = var46;
    var3['extendDateWithUnconsumedFractionalPremium'] = var45;
    var3['getUnactivatedFractionalPremiumDurationString'] = var44;
    var3['isSwitchingPlansDisabled'] = var43;
    var3['getSwitchingPlansDisabledMessage'] = var42;
    var3['isSubscriptionPrepaidPaymentSource'] = var41;
    var3['isPrepaidPaymentSource'] = var40;
    var3['getCoercedPremiumGuildSubscriptionStatus'] = var39;
    var3['isPremiumGuildSubscriptionCanceled'] = var38;
    var38 = function getPremiumGuildHeaderDescription(arg1) {
        _fun0077: for(var _fun0077_ip = 0; ; ) switch(_fun0077_ip) {
case 0:
            var2 = arg1;
            var3 = var2.subscription;
            var21 = var2.user;
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
            var5 = 14;
            var5 = var9[var5];
            var11 = undefined;
            var10 = var6.bind(var11)(var5);
            var5 = null;
            var9 = var5 != var8;
            var6 = 'Missing plan';
            var6 = var10.bind(var11)(var9, var6);
            var6 = _closure1_slot69;
            var6 = var6.bind(var11)(var7);
            var13 = _closure1_slot83;
            var24 = var3.planId;
            var23 = var3.paymentSourceId;
            var22 = var3.currency;
            var25 = undefined;
            var7 = var25[var13](var24, var23, var22, var21, var20);
            var7 = var7.amount;
            var9 = var7 * var6;
            var13 = var9;
            if(!(var5 != var1)) { _fun0077_ip = 194; continue _fun0077 }
case 193:
            var14 = var1.invoiceItems;
            var10 = var14.find;
            var7 = function(arg1) {
                var3 = _closure1_slot31;
                var2 = var3.has;
                var1 = arg1;
                var1 = var1.subscriptionPlanId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var7 = var10.bind(var14)(var7);
            var13 = var9;
            if(!(var5 != var7)) { _fun0077_ip = 194; continue _fun0077 }
case 548:
            var13 = var7.amount;
case 194:
            if(!(var5 == var12)) { _fun0077_ip = 21; continue _fun0077 }
case 485:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 19;
            var7 = var10[var7];
            var10 = var9.bind(var11)(var7);
            var9 = var10.formatPrice;
            var7 = var3.currency;
            var12 = var9.bind(var10)(var13, var7);
case 21:
            var9 = var5 == var1;
            var7 = undefined;
            if(var9) { _fun0077_ip = 18; continue _fun0077 }
case 185:
            var7 = var1.taxInclusive;
case 18:
            if(!(var5 == var7)) { _fun0077_ip = 546; continue _fun0077 }
case 87:
            var9 = var3.latestInvoice;
            var10 = var5 == var9;
            var1 = undefined;
            if(var10) { _fun0077_ip = 200; continue _fun0077 }
case 549:
            var1 = var9.taxInclusive;
case 200:
            var7 = var1;
case 546:
            var1 = var5 == var7;
            if(var1) { _fun0077_ip = 547; continue _fun0077 }
case 202:
            var1 = var7;
case 547:
            var7 = _closure1_slot78;
            var7 = var7.bind(var11)(var3);
            if(var7) { _fun0077_ip = 151; continue _fun0077 }
case 550:
            var9 = var3.status;
            var7 = _closure1_slot13;
            var7 = var7.ACCOUNT_HOLD;
            if(!(var7 !== var9)) { _fun0077_ip = 551; continue _fun0077 }
case 552:
            var7 = _closure1_slot13;
            var7 = var7.PAUSE_PENDING;
            if(!(var7 !== var9)) { _fun0077_ip = 414; continue _fun0077 }
case 104:
            var7 = _closure1_slot13;
            var7 = var7.PAUSED;
            if(!(var7 !== var9)) { _fun0077_ip = 414; continue _fun0077 }
case 211:
            var7 = var3.isPurchasedViaGoogle;
            var17 = _closure1_slot0;
            var18 = _closure1_slot2;
            var9 = 15;
            var10 = var18[var9];
            var10 = var17.bind(var11)(var10);
            var14 = var10.intl;
            var13 = var14.format;
            var9 = var18[var9];
            var9 = var17.bind(var11)(var9);
            var9 = var9.t;
            if(var7) { _fun0077_ip = 553; continue _fun0077 }
case 554:
            if(var1) { _fun0077_ip = 555; continue _fun0077 }
case 556:
            var10 = var9.ijSDcH;
            var7 = {};
            var7['quantity'] = var6;
            var15 = 19;
            var15 = var18[var15];
            var20 = var17.bind(var11)(var15);
            var19 = var20.formatRate;
            var16 = var8.interval;
            var15 = var8.intervalCount;
            var15 = var19.bind(var20)(var12, var16, var15);
            var7['rate'] = var15;
            var7 = var13.bind(var14)(var10, var7);
            _fun0077_ip = 557; continue _fun0077;
case 555:
            var15 = var9.eDwrLC;
            var10 = {};
            var10['quantity'] = var6;
            var16 = 19;
            var16 = var18[var16];
            var19 = var17.bind(var11)(var16);
            var18 = var19.formatRate;
            var17 = var8.interval;
            var16 = var8.intervalCount;
            var16 = var18.bind(var19)(var12, var17, var16);
            var10['rate'] = var16;
            var7 = var13.bind(var14)(var15, var10);
case 557:
            _fun0077_ip = 558; continue _fun0077;
case 553:
            var10 = var9.5iud9v;
            var9 = {};
            var9['quantity'] = var6;
            var7 = var13.bind(var14)(var10, var9);
case 558:
            return var7;
case 414:
            if(!(var5 != var4)) { _fun0077_ip = 559; continue _fun0077 }
case 560:
            var4 = var4.isFractionalPremiumActive;
            if(var4) { _fun0077_ip = 559; continue _fun0077 }
case 561:
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 15;
            var5 = var10[var4];
            var5 = var9.bind(var11)(var5);
            var7 = var5.intl;
            var5 = var7.string;
            var4 = var10[var4];
            var4 = var9.bind(var11)(var4);
            var4 = var4.t;
            var4 = var4.CduWAg;
            var4 = var5.bind(var7)(var4);
            _fun0077_ip = 223; continue _fun0077;
case 559:
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var5 = 15;
            var9 = var13[var5];
            var9 = var7.bind(var11)(var9);
            var10 = var9.intl;
            var9 = var10.format;
            var5 = var13[var5];
            var5 = var7.bind(var11)(var5);
            var5 = var5.t;
            var7 = var5.5iud9v;
            var5 = {};
            var5['quantity'] = var6;
            var4 = var9.bind(var10)(var7, var5);
case 223:
            return var4;
case 551:
            var4 = var3.isPurchasedViaGoogle;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var5 = 15;
            var7 = var16[var5];
            var7 = var15.bind(var11)(var7);
            var10 = var7.intl;
            var9 = var10.format;
            var5 = var16[var5];
            var5 = var15.bind(var11)(var5);
            var5 = var5.t;
            if(var4) { _fun0077_ip = 150; continue _fun0077 }
case 484:
            if(var1) { _fun0077_ip = 562; continue _fun0077 }
case 563:
            var7 = var5.0QxOAg;
            var4 = {};
            var4['quantity'] = var6;
            var4['boostQuantity'] = var6;
            var13 = 19;
            var13 = var16[var13];
            var18 = var15.bind(var11)(var13);
            var17 = var18.formatRate;
            var14 = var8.interval;
            var13 = var8.intervalCount;
            var13 = var17.bind(var18)(var12, var14, var13);
            var4['rate'] = var13;
            var4 = var9.bind(var10)(var7, var4);
            _fun0077_ip = 503; continue _fun0077;
case 562:
            var13 = var5.oiRy7u;
            var7 = {};
            var7['quantity'] = var6;
            var7['boostQuantity'] = var6;
            var14 = 19;
            var14 = var16[var14];
            var17 = var15.bind(var11)(var14);
            var16 = var17.formatRate;
            var15 = var8.interval;
            var14 = var8.intervalCount;
            var14 = var16.bind(var17)(var12, var15, var14);
            var7['rate'] = var14;
            var4 = var9.bind(var10)(var13, var7);
case 503:
            _fun0077_ip = 564; continue _fun0077;
case 150:
            var7 = var5.Nlf3nZ;
            var5 = {};
            var5['quantity'] = var6;
            var5['boostQuantity'] = var6;
            var4 = var9.bind(var10)(var7, var5);
case 564:
            return var4;
case 151:
            var3 = var3.isPurchasedViaGoogle;
            var10 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 15;
            var4 = var13[var2];
            var4 = var10.bind(var11)(var4);
            var5 = var4.intl;
            var4 = var5.format;
            var2 = var13[var2];
            var2 = var10.bind(var11)(var2);
            var2 = var2.t;
            if(var3) { _fun0077_ip = 565; continue _fun0077 }
case 566:
            if(var1) { _fun0077_ip = 507; continue _fun0077 }
case 567:
            var3 = var2.yjsv/v;
            var1 = {};
            var1['quantity'] = var6;
            var7 = 19;
            var7 = var13[var7];
            var15 = var10.bind(var11)(var7);
            var14 = var15.formatRate;
            var9 = var8.interval;
            var7 = var8.intervalCount;
            var7 = var14.bind(var15)(var12, var9, var7);
            var1['rate'] = var7;
            var1 = var4.bind(var5)(var3, var1);
            _fun0077_ip = 568; continue _fun0077;
case 507:
            var7 = var2.0ozBSE;
            var3 = {};
            var3['quantity'] = var6;
            var9 = 19;
            var9 = var13[var9];
            var11 = var10.bind(var11)(var9);
            var10 = var11.formatRate;
            var9 = var8.interval;
            var8 = var8.intervalCount;
            var8 = var10.bind(var11)(var12, var9, var8);
            var3['rate'] = var8;
            var1 = var4.bind(var5)(var7, var3);
case 568:
            _fun0077_ip = 569; continue _fun0077;
case 565:
            var3 = var2.3/WTrK;
            var2 = {};
            var2['quantity'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 569:
            return var1;
        }
    };
    var3['getPremiumGuildHeaderDescription'] = var38;
    var3['getFormattedPriceForPlan'] = var37;
    var37 = function getFormattedRateForPlan(arg1, arg2, arg3) {
        var1 = arg1;
        var6 = _closure1_slot79;
        var4 = undefined;
        var5 = arg2;
        var3 = arg3;
        var5 = var6.bind(var4)(var1, var5, var3);
        var3 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 19;
        var2 = var6[var2];
        var4 = var3.bind(var4)(var2);
        var3 = var4.formatRate;
        var2 = var1.interval;
        var1 = var1.intervalCount;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var3['getFormattedRateForPlan'] = var37;
    var3['getPlanIdFromInvoice'] = var36;
    var3['getStatusFromInvoice'] = var35;
    var3['isBaseSubscriptionCanceled'] = var34;
    var3['isSubscriptionStatusFailedPayment'] = var33;
    var3['getFormattedPlanPriceFromInvoice'] = var32;
    var3['getPremiumGuildIntervalPrice'] = var31;
    var3['getBillingReviewSubheader'] = var30;
    var3['getIntervalForInvoice'] = var29;
    var29 = function formatTrialOfferIntervalDuration(arg1) {
        _fun0078: for(var _fun0078_ip = 0; ; ) switch(_fun0078_ip) {
case 0:
            var1 = arg1;
            var4 = var1.intervalType;
            var9 = undefined;
            if(!(var4 === var9)) { _fun0078_ip = 34; continue _fun0078 }
case 463:
            var2 = _closure1_slot40;
            var4 = var2.MONTH;
case 34:
            var8 = var1.intervalCount;
            if(!(var8 === var9)) { _fun0078_ip = 50; continue _fun0078 }
case 40:
            var8 = 1;
case 50:
            var2 = var1.capitalize;
            if(!(var2 === var9)) { _fun0078_ip = 97; continue _fun0078 }
case 178:
            var2 = false;
case 97:
            var1 = _closure1_slot40;
            var1 = var1.DAY;
            if(!(var1 !== var4)) { _fun0078_ip = 27; continue _fun0078 }
case 570:
            var1 = _closure1_slot40;
            var1 = var1.MONTH;
            if(!(var1 !== var4)) { _fun0078_ip = 137; continue _fun0078 }
case 571:
            var1 = _closure1_slot40;
            var1 = var1.YEAR;
            if(!(var1 !== var4)) { _fun0078_ip = 522; continue _fun0078 }
case 92:
            var1 = global;
            var5 = var1.Error;
            var1 = var5.prototype;
            var4 = Object.create(var1, {constructor: {value: var5}});
            var13 = 'Unsupported interval duration.';
            var14 = var4;
            var1 = new var14[var5](var13, var12);
            var1 = var1 instanceof Object ? var1 : var4;
            throw var1;
case 522:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 15;
            var6 = var5[var1];
            var6 = var4.bind(var9)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var1 = var5[var1];
            var1 = var4.bind(var9)(var1);
            var4 = var1.t;
            if(var2) { _fun0078_ip = 572; continue _fun0078 }
case 19:
            var5 = var4.9DFiHh;
            var1 = {};
            var1['years'] = var8;
            var1 = var6.bind(var7)(var5, var1);
            _fun0078_ip = 573; continue _fun0078;
case 572:
            var5 = var4.h+63ys;
            var4 = {};
            var4['years'] = var8;
            var1 = var6.bind(var7)(var5, var4);
case 573:
            return var1;
case 137:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 15;
            var6 = var5[var1];
            var6 = var4.bind(var9)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var1 = var5[var1];
            var1 = var4.bind(var9)(var1);
            var4 = var1.t;
            if(var2) { _fun0078_ip = 574; continue _fun0078 }
case 61:
            var5 = var4.4SEnCQ;
            var1 = {};
            var1['months'] = var8;
            var1 = var6.bind(var7)(var5, var1);
            _fun0078_ip = 552; continue _fun0078;
case 574:
            var5 = var4.x5Mgxc;
            var4 = {};
            var4['months'] = var8;
            var1 = var6.bind(var7)(var5, var4);
case 552:
            return var1;
case 27:
            var7 = 7;
            if(!(var8 >= var7)) { _fun0078_ip = 6; continue _fun0078 }
case 575:
            var4 = var8 % var7;
            var1 = 0;
            if(!(var4 !== var1)) { _fun0078_ip = 576; continue _fun0078 }
case 6:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 15;
            var6 = var5[var1];
            var6 = var4.bind(var9)(var6);
            var10 = var6.intl;
            var6 = var10.formatToPlainString;
            var1 = var5[var1];
            var1 = var4.bind(var9)(var1);
            var4 = var1.t;
            if(var2) { _fun0078_ip = 577; continue _fun0078 }
case 578:
            var5 = var4.kbBj/v;
            var1 = {};
            var1['days'] = var8;
            var1 = var6.bind(var10)(var5, var1);
            _fun0078_ip = 579; continue _fun0078;
case 577:
            var5 = var4.6Cdzo6;
            var4 = {};
            var4['days'] = var8;
            var1 = var6.bind(var10)(var5, var4);
case 579:
            _fun0078_ip = 580; continue _fun0078;
case 576:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 15;
            var5 = var10[var3];
            var5 = var4.bind(var9)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var3 = var10[var3];
            var3 = var4.bind(var9)(var3);
            var3 = var3.t;
            if(var2) { _fun0078_ip = 411; continue _fun0078 }
case 581:
            var4 = var3.EIpHEh;
            var2 = {};
            var9 = var8 / var7;
            var2['weeks'] = var9;
            var2 = var5.bind(var6)(var4, var2);
            _fun0078_ip = 582; continue _fun0078;
case 411:
            var4 = var3.fRNBRU;
            var3 = {};
            var7 = var8 / var7;
            var3['weeks'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 582:
            var1 = var2;
case 580:
            return var1;
        }
    };
    var3['formatTrialOfferIntervalDuration'] = var29;
    var3['formatTrialCtaIntervalDuration'] = var28;
    var28 = function formatTrialCtaIntervalDurationFromTrialOffer(arg1, arg2) {
        _fun0079: for(var _fun0079_ip = 0; ; ) switch(_fun0079_ip) {
case 0:
            var1 = arg1;
            var2 = null;
            if(!(var2 != var1)) { _fun0079_ip = 40; continue _fun0079 }
case 458:
            var3 = var1.subscription_trial;
            if(!(var2 != var3)) { _fun0079_ip = 40; continue _fun0079 }
case 517:
            var3 = var1.subscription_trial;
            var4 = var3.sku_id;
            var3 = arg2;
            if(!(var4 !== var3)) { _fun0079_ip = 369; continue _fun0079 }
case 40:
            return var2;
case 369:
            var1 = var1.subscription_trial;
            var3 = _closure1_slot84;
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
        _fun0080: for(var _fun0080_ip = 0; ; ) switch(_fun0080_ip) {
case 0:
            var1 = arg1;
            var4 = var1.intervalType;
            var9 = undefined;
            if(!(var4 === var9)) { _fun0080_ip = 34; continue _fun0080 }
case 463:
            var2 = _closure1_slot40;
            var4 = var2.MONTH;
case 34:
            var8 = var1.intervalCount;
            if(!(var8 === var9)) { _fun0080_ip = 50; continue _fun0080 }
case 40:
            var8 = 1;
case 50:
            var2 = var1.capitalize;
            if(!(var2 === var9)) { _fun0080_ip = 97; continue _fun0080 }
case 178:
            var2 = false;
case 97:
            var1 = _closure1_slot40;
            var1 = var1.DAY;
            if(!(var1 !== var4)) { _fun0080_ip = 72; continue _fun0080 }
case 570:
            var1 = _closure1_slot40;
            var1 = var1.MONTH;
            if(!(var1 !== var4)) { _fun0080_ip = 583; continue _fun0080 }
case 571:
            var1 = _closure1_slot40;
            var1 = var1.YEAR;
            if(!(var1 !== var4)) { _fun0080_ip = 522; continue _fun0080 }
case 92:
            var1 = global;
            var5 = var1.Error;
            var1 = var5.prototype;
            var4 = Object.create(var1, {constructor: {value: var5}});
            var13 = 'Unsupported interval duration.';
            var14 = var4;
            var1 = new var14[var5](var13, var12);
            var1 = var1 instanceof Object ? var1 : var4;
            throw var1;
case 522:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 15;
            var6 = var5[var1];
            var6 = var4.bind(var9)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var1 = var5[var1];
            var1 = var4.bind(var9)(var1);
            var4 = var1.t;
            if(var2) { _fun0080_ip = 393; continue _fun0080 }
case 19:
            var5 = var4.PClsr6;
            var1 = {};
            var1['years'] = var8;
            var1 = var6.bind(var7)(var5, var1);
            _fun0080_ip = 197; continue _fun0080;
case 393:
            var5 = var4.IfYQVF;
            var4 = {};
            var4['years'] = var8;
            var1 = var6.bind(var7)(var5, var4);
case 197:
            return var1;
case 583:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 15;
            var6 = var5[var1];
            var6 = var4.bind(var9)(var6);
            var7 = var6.intl;
            var6 = var7.formatToPlainString;
            var1 = var5[var1];
            var1 = var4.bind(var9)(var1);
            var4 = var1.t;
            if(var2) { _fun0080_ip = 584; continue _fun0080 }
case 532:
            var5 = var4.kridzM;
            var1 = {};
            var1['months'] = var8;
            var1 = var6.bind(var7)(var5, var1);
            _fun0080_ip = 585; continue _fun0080;
case 584:
            var5 = var4.erUSmJ;
            var4 = {};
            var4['months'] = var8;
            var1 = var6.bind(var7)(var5, var4);
case 585:
            return var1;
case 72:
            var7 = 7;
            if(!(var8 >= var7)) { _fun0080_ip = 531; continue _fun0080 }
case 586:
            var4 = var8 % var7;
            var1 = 0;
            if(!(var4 !== var1)) { _fun0080_ip = 587; continue _fun0080 }
case 531:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 15;
            var6 = var5[var1];
            var6 = var4.bind(var9)(var6);
            var10 = var6.intl;
            var6 = var10.formatToPlainString;
            var1 = var5[var1];
            var1 = var4.bind(var9)(var1);
            var4 = var1.t;
            if(var2) { _fun0080_ip = 588; continue _fun0080 }
case 589:
            var5 = var4.k2UNz8;
            var1 = {};
            var1['days'] = var8;
            var1 = var6.bind(var10)(var5, var1);
            _fun0080_ip = 590; continue _fun0080;
case 588:
            var5 = var4.jzH70d;
            var4 = {};
            var4['days'] = var8;
            var1 = var6.bind(var10)(var5, var4);
case 590:
            _fun0080_ip = 412; continue _fun0080;
case 587:
            var4 = _closure1_slot0;
            var10 = _closure1_slot2;
            var3 = 15;
            var5 = var10[var3];
            var5 = var4.bind(var9)(var5);
            var6 = var5.intl;
            var5 = var6.formatToPlainString;
            var3 = var10[var3];
            var3 = var4.bind(var9)(var3);
            var3 = var3.t;
            if(var2) { _fun0080_ip = 512; continue _fun0080 }
case 591:
            var4 = var3.EmoBDw;
            var2 = {};
            var9 = var8 / var7;
            var2['weeks'] = var9;
            var2 = var5.bind(var6)(var4, var2);
            _fun0080_ip = 592; continue _fun0080;
case 512:
            var4 = var3.iVZYys;
            var3 = {};
            var7 = var8 / var7;
            var3['weeks'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 592:
            var1 = var2;
case 412:
            return var1;
        }
    };
    var3['formatIntervalDuration'] = var28;
    var3['getExternalSubscriptionMethodUrl'] = var27;
    var27 = function hasPremiumSubscriptionToDisplay(arg1, arg2) {
        _fun0081: for(var _fun0081_ip = 0; ; ) switch(_fun0081_ip) {
case 0:
            var5 = arg2;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 13;
            var1 = var4[var1];
            var4 = undefined;
            var6 = var3.bind(var4)(var1);
            var3 = var6.isPremium;
            var1 = arg1;
            var1 = var3.bind(var6)(var1);
            if(var1) { _fun0081_ip = 35; continue _fun0081 }
case 69:
            var3 = _closure1_slot81;
            var2 = null;
            var6 = var2 == var5;
            var2 = undefined;
            if(var6) { _fun0081_ip = 42; continue _fun0081 }
case 361:
            var2 = var5.status;
case 42:
            var1 = var3.bind(var4)(var2);
case 35:
            return var1;
        }
    };
    var3['hasPremiumSubscriptionToDisplay'] = var27;
    var27 = function useHasPremiumSubscriptionToDisplay() {
        _fun0082: for(var _fun0082_ip = 0; ; ) switch(_fun0082_ip) {
case 0:
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var6 = 23;
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
            var1 = 13;
            var1 = var7[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.isPremium;
            var1 = var1.bind(var3)(var6);
            if(var1) { _fun0082_ip = 367; continue _fun0082 }
case 373:
            var3 = _closure1_slot81;
            var2 = null;
            var6 = var2 == var5;
            var2 = undefined;
            if(var6) { _fun0082_ip = 530; continue _fun0082 }
case 525:
            var2 = var5.status;
case 530:
            var1 = var3.bind(var4)(var2);
case 367:
            return var1;
        }
    };
    var3['useHasPremiumSubscriptionToDisplay'] = var27;
    var3['getItemsFromNewAdditionalPlans'] = var26;
    var3['getItemsWithoutPremiumPlanItem'] = var25;
    var3['getItemsWithUpsertedPlanIdForGroup'] = var24;
    var24 = function getItemsWithUpsertedPremiumPlanId(arg1, arg2) {
        var6 = _closure1_slot88;
        var7 = _closure1_slot32;
        var11 = undefined;
        var10 = arg1;
        var9 = arg2;
        var8 = 1;
        var1 = var11[var6](var10, var9, var8, var7, var6);
        return var1;
    };
    var3['getItemsWithUpsertedPremiumPlanId'] = var24;
    var24 = function getItemsWithUpsertedPremiumGuildPlan(arg1, arg2, arg3) {
        var6 = _closure1_slot88;
        var7 = _closure1_slot31;
        var11 = undefined;
        var10 = arg1;
        var9 = arg3;
        var8 = arg2;
        var1 = var11[var6](var10, var9, var8, var7, var6);
        return var1;
    };
    var3['getItemsWithUpsertedPremiumGuildPlan'] = var24;
    var24 = function coerceExistingItemsToNewItemInterval(arg1) {
        _fun0083: for(var _fun0083_ip = 0; ; ) switch(_fun0083_ip) {
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
            if(!(var5 == var3)) { _fun0083_ip = 460; continue _fun0083 }
case 48:
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
case 460:
            var _closure2_slot0 = var3;
            var1 = var4;
            if(!(var5 != var3)) { _fun0083_ip = 593; continue _fun0083 }
case 360:
            var8 = _closure1_slot8;
            var7 = var8.get;
            var3 = var3.planId;
            var3 = var7.bind(var8)(var3);
            var _closure2_slot1 = var3;
            var8 = _closure1_slot1;
            var7 = _closure1_slot2;
            var6 = 14;
            var6 = var7[var6];
            var7 = undefined;
            var6 = var8.bind(var7)(var6);
            var5 = var5 != var3;
            var3 = 'Missing plan';
            var3 = var6.bind(var7)(var5, var3);
            var3 = var4.map;
            var2 = function(arg1) {
                _fun0084: for(var _fun0084_ip = 0; ; ) switch(_fun0084_ip) {
case 0:
                    var1 = arg1;
                    var2 = _closure2_slot0;
                    if(!(var1 !== var2)) { _fun0084_ip = 391; continue _fun0084 }
case 464:
                    var5 = _closure1_slot8;
                    var4 = var5.get;
                    var2 = var1.planId;
                    var8 = var4.bind(var5)(var2);
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 14;
                    var2 = var7[var4];
                    var6 = undefined;
                    var12 = var5.bind(var6)(var2);
                    var2 = null;
                    var11 = var2 != var8;
                    var10 = 'Missing plan';
                    var10 = var12.bind(var6)(var11, var10);
                    var11 = _closure1_slot8;
                    var10 = var11.getForSkuAndInterval;
                    var9 = var8.skuId;
                    var8 = _closure2_slot1;
                    var8 = var8.interval;
                    var3 = _closure2_slot1;
                    var3 = var3.intervalCount;
                    var3 = var10.bind(var11)(var9, var8, var3);
                    var4 = var7[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = var2 != var3;
                    var2 = 'Missing planForInterval';
                    var2 = var5.bind(var6)(var4, var2);
                    var2 = {};
                    var15 = var2;
                    var14 = var1;
                    var4 = copyDataProperties(var15, var14);
                    var4 = var3.id;
                    var3 = 'planId';
                    var2[var3] = var4;
                    return var2;
case 391:
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2);
case 593:
            return var1;
        }
    };
    var3['coerceExistingItemsToNewItemInterval'] = var24;
    var24 = function getMaxFileSizeForPremiumType(arg1) {
        _fun0085: for(var _fun0085_ip = 0; ; ) switch(_fun0085_ip) {
case 0:
            var5 = arguments[1];
            var4 = undefined;
            if(!(var5 === var4)) { _fun0085_ip = 46; continue _fun0085 }
case 458:
            var1 = {};
            var2 = true;
            var1['useSpace'] = var2;
            var5 = var1;
case 46:
            var3 = _closure1_slot38;
            var2 = arg1;
            var2 = var3[var2];
            var2 = var2.fileSize;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 24;
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
    var3['getPremiumTypeFromSubscriptionRenewalMutations'] = var19;
    var3['getPremiumGradientColor'] = var18;
    var3['isNewUser'] = var17;
    var3['formatPriceString'] = var16;
    var3['castPremiumSubscriptionAsSkuId'] = var15;
    var15 = function getPremiumTypeFromPlanId(arg1) {
        _fun0086: for(var _fun0086_ip = 0; ; ) switch(_fun0086_ip) {
case 0:
            var5 = arg1;
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_MONTH_TIER_0;
            if(!(var1 !== var5)) { _fun0086_ip = 59; continue _fun0086 }
case 31:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_YEAR_TIER_0;
            if(!(var1 !== var5)) { _fun0086_ip = 98; continue _fun0086 }
case 369:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_MONTH_TIER_2;
            if(!(var1 !== var5)) { _fun0086_ip = 594; continue _fun0086 }
case 360:
            var1 = _closure1_slot42;
            var1 = var1.PREMIUM_YEAR_TIER_2;
            if(!(var1 !== var5)) { _fun0086_ip = 595; continue _fun0086 }
case 179:
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
case 595:
            var1 = {};
            var3 = _closure1_slot37;
            var3 = var3.TIER_2;
            var1['premiumType'] = var3;
            var3 = _closure1_slot40;
            var3 = var3.YEAR;
            var1['planInterval'] = var3;
            return var1;
case 594:
            var1 = {};
            var3 = _closure1_slot37;
            var3 = var3.TIER_2;
            var1['premiumType'] = var3;
            var3 = _closure1_slot40;
            var3 = var3.MONTH;
            var1['planInterval'] = var3;
            return var1;
case 98:
            var1 = {};
            var3 = _closure1_slot37;
            var3 = var3.TIER_0;
            var1['premiumType'] = var3;
            var3 = _closure1_slot40;
            var3 = var3.YEAR;
            var1['planInterval'] = var3;
            return var1;
case 59:
            var1 = {};
            var3 = _closure1_slot37;
            var3 = var3.TIER_0;
            var1['premiumType'] = var3;
            var2 = _closure1_slot40;
            var2 = var2.MONTH;
            var1['planInterval'] = var2;
            return var1;
        }
    };
    var3['getPremiumTypeFromPlanId'] = var15;
    var15 = function isNitroLockedState(arg1) {
        var2 = 'isNitroLocked';
        var1 = arg1;
        var1 = var2 in var1;
        return var1;
    };
    var3['isNitroLockedState'] = var15;
    var15 = var14[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.isPremiumAtLeast;
    var3['isPremiumAtLeast'] = var15;
    var15 = var14[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.isPremiumAtMost;
    var3['isPremiumAtMost'] = var15;
    var15 = var14[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.isPremium;
    var3['isPremium'] = var15;
    var12 = var14[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.isPremiumExactly;
    var3['isPremiumExactly'] = var12;
    var12 = function useHasTier2Premium() {
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var2 = 23;
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
        var2 = 13;
        var2 = var6[var2];
        var3 = var5.bind(var3)(var2);
        var2 = var3.isPremiumExactly;
        var1 = _closure1_slot37;
        var1 = var1.TIER_2;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var3['useHasTier2Premium'] = var12;
    var3['getReverseTrialWeeks'] = var11;
    var11 = function getOfferNoticeThreshold(arg1) {
        _fun0087: for(var _fun0087_ip = 0; ; ) switch(_fun0087_ip) {
case 0:
            var2 = arg1;
            var1 = _closure1_slot91;
            var4 = undefined;
            var1 = var1.bind(var4)(var2);
            if(var1) { _fun0087_ip = 2; continue _fun0087 }
case 29:
            var1 = _closure1_slot92;
            var1 = var1.bind(var4)(var2);
            var4 = _closure1_slot44;
            if(var1) { _fun0087_ip = 50; continue _fun0087 }
case 41:
            var1 = var4;
            _fun0087_ip = 94; continue _fun0087;
case 50:
            var1 = var4;
case 94:
            _fun0087_ip = 570; continue _fun0087;
case 2:
            var4 = var2.trial_id;
            var2 = _closure1_slot35;
            if(!(var4 !== var2)) { _fun0087_ip = 363; continue _fun0087 }
case 361:
            var2 = _closure1_slot44;
            _fun0087_ip = 35; continue _fun0087;
case 363:
            var2 = _closure1_slot43;
case 35:
            var1 = var2;
case 570:
            return var1;
        }
    };
    var3['getOfferNoticeThreshold'] = var11;
    var3['isTrialOffer'] = var10;
    var3['isDiscountOffer'] = var9;
    var3['formatInterval'] = var8;
    var3['isPremiumEligible'] = var7;
    var3['getFractionalPremiumUnitsHours'] = var6;
    var3['getFractionalPremiumUnitsHoursFromSkuIds'] = var5;
    var3['calculateDiscountPercentageForYearlyPlan'] = var4;
    var2 = function getDaysSincePremium(arg1) {
        _fun0088: for(var _fun0088_ip = 0; ; ) switch(_fun0088_ip) {
case 0:
            var10 = arg1;
            var1 = null;
            var2 = var1 == var10;
            var5 = 0;
            var1 = 0;
            if(var2) { _fun0088_ip = 468; continue _fun0088 }
case 596:
            var2 = global;
            var4 = var2.Math;
            var3 = var4.max;
            var8 = _closure1_slot0;
            var7 = _closure1_slot2;
            var6 = 17;
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
case 468:
            return var1;
        }
    };
    var3['getDaysSincePremium'] = var2;
    return var1;
})();
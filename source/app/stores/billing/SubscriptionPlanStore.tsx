// app/stores/billing/SubscriptionPlanStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
case 2: // try_start_0
            var2 = global;
            var3 = var2.Boolean;
            var3 = var3.prototype;
            var4 = var3.valueOf;
            var3 = var4.call;
            var8 = var2.Reflect;
            var7 = var8.construct;
            var6 = var2.Boolean;
            var5 = new Array(0);
            var2 = function() {
                var1 = undefined;
                return var1;
            };
            var2 = var7.bind(var8)(var6, var5, var2);
            var2 = var3.bind(var4)(var2);
            var2 = !var2;
            var _closure2_slot0 = var2;
case 3: // try_end0
            _fun0001_ip = 4; continue _fun0001;
case 5: // catch_target0
            CatchBlockStart(arg_register=1);
case 4:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot22 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 6:
            if(var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var2 = var3.@@iterator;
case 8:
            if(var2) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
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
            if(!var7) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var7 = var3.constructor;
case 18:
            var10 = var9;
            if(!var7) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var7 = var3.constructor;
            var10 = var7.name;
case 20:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 23:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 22; continue _fun0002 }
case 24:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 25; continue _fun0002 }
case 26:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 27; continue _fun0002 }
case 25:
            var9 = _closure1_slot24;
            var7 = var9.bind(var8)(var3, var8);
case 27:
            _fun0002_ip = 28; continue _fun0002;
case 22:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 28:
            var6 = var7;
            _fun0002_ip = 14; continue _fun0002;
case 16:
            var7 = _closure1_slot24;
            var6 = var7.bind(var8)(var3, var8);
case 14:
            var4 = var6;
            if(var4) { _fun0002_ip = 12; continue _fun0002 }
case 29:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 12:
            if(!var4) { _fun0002_ip = 30; continue _fun0002 }
case 31:
            _closure2_slot0 = var4;
case 30:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 32; continue _fun0003 }
case 33:
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
                    _fun0003_ip = 34; continue _fun0003;
case 32:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 34:
                    return var1;
                }
            };
            return var1;
case 10:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            var2 = var4.length;
            var1 = var3 > var2;
case 35:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 37; continue _fun0004 }
case 38:
            var2 = var4.length;
case 37:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 3; continue _fun0004 }
case 8:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 8; continue _fun0004 }
case 3:
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function addSubscriptionPlan(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var5 = var1.skuId;
            var4 = _closure1_slot15;
            var3 = var1.id;
            var4[var3] = var1;
            var4 = var1.prices;
            var3 = _closure1_slot10;
            var3 = var3.DEFAULT;
            var3 = var4[var3];
            var4 = null;
            if(!(var4 != var3)) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var8 = global;
            var7 = var8.Set;
            var9 = var8.Object;
            var6 = var9.keys;
            var3 = var3.paymentSourcePrices;
            var15 = var6.bind(var9)(var3);
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var16 = var6;
            var3 = new var16[var7](var15, var14);
            var12 = var3 instanceof Object ? var3 : var6;
            var6 = _closure1_slot19;
            var3 = var1.id;
            var6[var3] = var12;
            var7 = var8.Array;
            var6 = var7.from;
            var9 = _closure1_slot20;
            var3 = var1.skuId;
            var3 = var9[var3];
            if(!(var4 == var3)) { _fun0005_ip = 41; continue _fun0005 }
case 42:
            var9 = var8.Set;
            var10 = var9.prototype;
            var10 = Object.create(var10, {constructor: {value: var9}});
            var16 = var10;
            var9 = new var16[var9](var15);
            var3 = var9 instanceof Object ? var9 : var10;
case 41:
            var14 = var6.bind(var7)(var3);
            var7 = _closure1_slot20;
            var6 = var1.skuId;
            var9 = var8.Set;
            var3 = new Array(0);
            var13 = 0;
            var15 = var3;
            var13 = arraySpread(var15, var14, var13);
            var11 = var8.Array;
            var8 = var11.from;
            var14 = var8.bind(var11)(var12);
            var15 = var3;
            var8 = arraySpread(var15, var14, var13);
            var8 = var9.prototype;
            var8 = Object.create(var8, {constructor: {value: var9}});
            var16 = var8;
            var15 = var3;
            var3 = new var16[var9](var15, var14);
            var3 = var3 instanceof Object ? var3 : var8;
            var7[var6] = var3;
case 39:
            var3 = _closure1_slot16;
            var3 = var3[var5];
            if(!(var4 == var3)) { _fun0005_ip = 43; continue _fun0005 }
case 44:
            var4 = _closure1_slot16;
            var2 = global;
            var7 = var2.Set;
            var6 = var1.id;
            var2 = new Array(1);
            var2[0] = var6;
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var16 = var6;
            var15 = var2;
            var2 = new var16[var7](var15, var14);
            var2 = var2 instanceof Object ? var2 : var6;
            var4[var5] = var2;
            _fun0005_ip = 45; continue _fun0005;
case 43:
            var2 = var3.add;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
case 45:
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var4 = function initializeNonePlans() {
        var3 = _closure1_slot11;
        var2 = _closure1_slot12;
        var2 = var2.NONE_MONTH;
        var2 = var3[var2];
        var3 = new Array(4);
        var3[0] = var2;
        var4 = _closure1_slot11;
        var2 = _closure1_slot12;
        var2 = var2.NONE_YEAR;
        var2 = var4[var2];
        var3[1] = var2;
        var4 = _closure1_slot11;
        var2 = _closure1_slot12;
        var2 = var2.NONE_3_MONTH;
        var2 = var4[var2];
        var3[2] = var2;
        var2 = _closure1_slot11;
        var1 = _closure1_slot12;
        var1 = var1.NONE_6_MONTH;
        var1 = var2[var1];
        var3[3] = var1;
        var2 = var3.forEach;
        var1 = function(arg1) {
            var6 = arg1;
            var3 = _closure1_slot25;
            var4 = _closure1_slot8;
            var2 = var4.createFromServer;
            var1 = {};
            var7 = var6.id;
            var1['id'] = var7;
            var7 = var6.name;
            var1['name'] = var7;
            var7 = var6.interval;
            var1['interval'] = var7;
            var7 = var6.intervalCount;
            var1['interval_count'] = var7;
            var7 = true;
            var1['tax_inclusive'] = var7;
            var6 = var6.skuId;
            var1['sku_id'] = var6;
            var5 = _closure1_slot9;
            var5 = var5.USD;
            var1['currency'] = var5;
            var5 = 0;
            var1['price'] = var5;
            var1['price_tier'] = var5;
            var2 = var2.bind(var4)(var1);
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot26 = var4;
    var1 = function addSubscriptionPlanFromServer(arg1) {
        var3 = _closure1_slot25;
        var4 = _closure1_slot8;
        var2 = var4.createFromServer;
        var1 = arg1;
        var2 = var2.bind(var4)(var1);
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot27 = var1;
    var5 = function reset() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var3 = 8;
        var6 = var5[var3];
        var1 = undefined;
        var8 = var4.bind(var1)(var6);
        var7 = var8.clearObject;
        var6 = _closure1_slot15;
        var6 = var7.bind(var8)(var6);
        var6 = var5[var3];
        var8 = var4.bind(var1)(var6);
        var7 = var8.clearObject;
        var6 = _closure1_slot16;
        var6 = var7.bind(var8)(var6);
        var7 = _closure1_slot17;
        var6 = var7.clear;
        var6 = var6.bind(var7)();
        var7 = _closure1_slot18;
        var6 = var7.clear;
        var6 = var6.bind(var7)();
        var6 = var5[var3];
        var8 = var4.bind(var1)(var6);
        var7 = var8.clearObject;
        var6 = _closure1_slot19;
        var6 = var7.bind(var8)(var6);
        var3 = var5[var3];
        var5 = var4.bind(var1)(var3);
        var4 = var5.clearObject;
        var3 = _closure1_slot20;
        var3 = var4.bind(var5)(var3);
        var2 = _closure1_slot26;
        var2 = var2.bind(var1)();
        return var1;
    };
    var11 = global;
    var12 = var11.Object;
    var9 = var12.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var12)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var8.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var8.bind(var1)(var2);
    var _closure1_slot8 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var9 = var2.CurrencyCodes;
    var _closure1_slot9 = var9;
    var2 = var2.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var9 = var2.SubscriptionIntervalTypes;
    var12 = var2.SubscriptionPlanInfo;
    var _closure1_slot11 = var12;
    var12 = var2.SubscriptionPlans;
    var _closure1_slot12 = var12;
    var12 = var2.PremiumSubscriptionSKUs;
    var _closure1_slot13 = var12;
    var2 = var2.ACTIVE_PREMIUM_SKUS;
    var _closure1_slot14 = var2;
    var2 = {};
    var _closure1_slot15 = var2;
    var2 = {};
    var _closure1_slot16 = var2;
    var2 = var11.Set;
    var12 = var2.prototype;
    var12 = Object.create(var12, {constructor: {value: var2}});
    var16 = var12;
    var2 = new var16[var2](var15);
    var2 = var2 instanceof Object ? var2 : var12;
    var _closure1_slot17 = var2;
    var11 = var11.Set;
    var12 = var11.prototype;
    var12 = Object.create(var12, {constructor: {value: var11}});
    var16 = var12;
    var11 = new var16[var11](var15);
    var11 = var11 instanceof Object ? var11 : var12;
    var _closure1_slot18 = var11;
    var11 = {};
    var _closure1_slot19 = var11;
    var11 = {};
    var _closure1_slot20 = var11;
    var4 = var4.bind(var1)();
    var11 = var9.DAY;
    var4 = new Array(3);
    var4[0] = var11;
    var11 = var9.MONTH;
    var4[1] = var11;
    var9 = var9.YEAR;
    var4[2] = var9;
    var _closure1_slot21 = var4;
    var4 = 10;
    var4 = var7[var4];
    var4 = var8.bind(var1)(var4);
    var9 = var4.Store;
    var4 = function(arg1) {
        var4 = function SubscriptionPlanStore() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot3;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot6;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot22;
                var1 = var1.bind(var3)();
                if(var1) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0006_ip = 48; continue _fun0006;
case 46:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 48:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'getPlanIdsForSkus';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = new Array(0);
                var3 = _closure1_slot23;
                var8 = undefined;
                var2 = arg1;
                var7 = var3.bind(var8)(var2);
                var3 = var7.bind(var8)();
                var2 = var3.done;
                var5 = global;
                var4 = null;
                if(var2) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                var13 = var3.value;
                var12 = var5.Array;
                var11 = var12.from;
                var2 = _closure1_slot16;
                var2 = var2[var13];
                if(!(var4 == var2)) { _fun0007_ip = 15; continue _fun0007 }
case 3:
                var13 = var5.Set;
                var14 = var13.prototype;
                var14 = Object.create(var14, {constructor: {value: var13}});
                var18 = var14;
                var13 = new var18[var13](var17);
                var2 = var13 instanceof Object ? var13 : var14;
case 15:
                var12 = var11.bind(var12)(var2);
                var11 = var12.sort;
                var2 = function(arg1, arg2) {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                        var3 = _closure1_slot15;
                        var2 = arg1;
                        var3 = var3[var2];
                        var4 = _closure1_slot15;
                        var2 = arg2;
                        var2 = var4[var2];
                        var6 = _closure1_slot21;
                        var4 = var6.indexOf;
                        var1 = var3.interval;
                        var4 = var4.bind(var6)(var1);
                        var5 = var6.indexOf;
                        var1 = var2.interval;
                        var1 = var5.bind(var6)(var1);
                        var1 = var4 - var1;
                        if(var1) { _fun0008_ip = 13; continue _fun0008 }
case 3:
                        var3 = var3.intervalCount;
                        var2 = var2.intervalCount;
                        var1 = var3 - var2;
case 13:
                        return var1;
                    }
                };
                var2 = var11.bind(var12)(var2);
                var11 = var1.push;
                var2 = new Array(0);
                var17 = var2;
                var16 = var12;
                var15 = 0;
                var12 = arraySpread(var17, var16, var15);
                var17 = var11;
                var16 = var2;
                var15 = var1;
                var2 = apply(var17, var16, var15);
                var11 = var7.bind(var8)();
                var2 = var11.done;
                var3 = var11;
                if(!var2) { _fun0007_ip = 50; continue _fun0007 }
case 49:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(16);
        var1[0] = var5;
        var5 = {};
        var7 = 'getFetchedSKUIDs';
        var5['key'] = var7;
        var7 = function value() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 9;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.keys;
            var1 = _closure1_slot16;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getForSKU';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = global;
                var3 = var1.Array;
                var2 = var3.from;
                var4 = _closure1_slot16;
                var1 = arg1;
                var1 = var4[var1];
                var4 = null;
                if(!(var4 == var1)) { _fun0009_ip = 51; continue _fun0009 }
case 37:
                var1 = new Array(0);
case 51:
                var3 = var2.bind(var3)(var1);
                var2 = var3.map;
                var1 = function(arg1) {
                    var2 = _closure1_slot15;
                    var1 = arg1;
                    var1 = var2[var1];
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getForSkuAndInterval';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = arguments[2];
                var4 = this;
                var3 = arg2;
                var _closure3_slot0 = var3;
                var3 = undefined;
                if(!(var2 === var3)) { _fun0010_ip = 52; continue _fun0010 }
case 53:
                var2 = 1;
case 52:
                var _closure3_slot1 = var2;
                var3 = var4.getForSKU;
                var2 = arg1;
                var3 = var3.bind(var4)(var2);
                var2 = var3.find;
                var1 = function(arg1) {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                        var3 = arg1;
                        var4 = var3.interval;
                        var1 = _closure3_slot0;
                        var1 = var4 === var1;
                        if(!var1) { _fun0011_ip = 51; continue _fun0011 }
case 35:
                        var3 = var3.intervalCount;
                        var2 = _closure3_slot1;
                        var1 = var3 === var2;
case 51:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'get';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot15;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'isFetchingForSKU';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot17;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'isFetchingForSKUs';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = arg1;
            var2 = this;
            var _closure3_slot0 = var2;
            var2 = var3.some;
            var1 = function(arg1) {
                var3 = _closure3_slot0;
                var2 = var3.isFetchingForSKU;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'isLoadedForSKU';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var4 = arg1;
                var2 = _closure1_slot18;
                var1 = var2.has;
                var1 = var1.bind(var2)(var4);
                var2 = !var1;
                var1 = !var2;
                if(!var2) { _fun0012_ip = 54; continue _fun0012 }
case 55:
                var5 = _closure1_slot17;
                var2 = var5.has;
                var2 = var2.bind(var5)(var4);
                var2 = !var2;
                if(!var2) { _fun0012_ip = 56; continue _fun0012 }
case 9:
                var3 = _closure1_slot16;
                var4 = var3[var4];
                var3 = null;
                var2 = var3 != var4;
case 56:
                var1 = var2;
case 54:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'isLoadedForSKUs';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = arg1;
            var2 = this;
            var _closure3_slot0 = var2;
            var2 = var3.every;
            var1 = function(arg1) {
                var3 = _closure3_slot0;
                var2 = var3.isLoadedForSKU;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'isFetchingForPremiumSKUs';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var _closure3_slot0 = var2;
            var3 = _closure1_slot14;
            var2 = var3.some;
            var1 = function(arg1) {
                var3 = _closure3_slot0;
                var2 = var3.isFetchingForSKU;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'isLoadedForPremiumSKUs';
        var5['key'] = var7;
        var7 = function value() {
            var2 = this;
            var _closure3_slot0 = var2;
            var3 = _closure1_slot14;
            var2 = var3.every;
            var1 = function(arg1) {
                var3 = _closure3_slot0;
                var2 = var3.isLoadedForSKU;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'ignoreSKUFetch';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot18;
            var2 = var3.add;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getPaymentSourcesForPlanId';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var3 = arg1;
                var4 = _closure1_slot19;
                var1 = var4.hasOwnProperty;
                var4 = var1.bind(var4)(var3);
                var1 = null;
                if(!var4) { _fun0013_ip = 57; continue _fun0013 }
case 58:
                var2 = _closure1_slot19;
                var1 = var2[var3];
case 57:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'getPaymentSourceIds';
        var5['key'] = var7;
        var7 = function value() {
            var3 = global;
            var1 = var3.Set;
            var4 = var1.prototype;
            var4 = Object.create(var4, {constructor: {value: var1}});
            var7 = var4;
            var1 = new var7[var1](var6);
            var1 = var1 instanceof Object ? var1 : var4;
            var _closure3_slot0 = var1;
            var5 = var3.Object;
            var4 = var5.values;
            var3 = _closure1_slot19;
            var4 = var4.bind(var5)(var3);
            var3 = var4.forEach;
            var2 = function(arg1) {
                var3 = arg1;
                var2 = var3.forEach;
                var1 = function(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.add;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'hasPaymentSourceForSKUId';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var4 = arg2;
                var1 = _closure1_slot13;
                var1 = var1.NONE;
                var1 = var1 === var4;
                if(var1) { _fun0014_ip = 59; continue _fun0014 }
case 35:
                var2 = _closure1_slot20;
                var5 = var2[var4];
                var2 = null;
                var2 = var2 != var5;
                if(!var2) { _fun0014_ip = 11; continue _fun0014 }
case 60:
                var3 = _closure1_slot20;
                var5 = var3[var4];
                var4 = var5.has;
                var3 = arg1;
                var2 = var4.bind(var5)(var3);
case 11:
                var1 = var2;
case 59:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'hasPaymentSourceForSKUIds';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            var3 = arg2;
            var2 = this;
            var _closure3_slot0 = var2;
            var2 = arg1;
            var _closure3_slot1 = var2;
            var2 = var3.every;
            var1 = function(arg1) {
                var4 = _closure3_slot0;
                var3 = var4.hasPaymentSourceForSKUId;
                var2 = _closure3_slot1;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[15] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var4.bind(var1)(var9);
    var4 = 'SubscriptionPlanStore';
    var9['displayName'] = var4;
    var4 = 11;
    var4 = var7[var4];
    var15 = var8.bind(var1)(var4);
    var4 = {};
    var11 = function handleSubscriptionPlansFetch(arg1) {
        var1 = arg1;
        var3 = var1.skuId;
        var2 = _closure1_slot17;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var4['SUBSCRIPTION_PLANS_FETCH'] = var11;
    var11 = function handleSubscriptionPlansFetchSuccess(arg1) {
        var1 = arg1;
        var3 = var1.skuId;
        var5 = var1.subscriptionPlans;
        var6 = _closure1_slot16;
        var2 = global;
        var4 = var2.Set;
        var7 = var4.prototype;
        var7 = Object.create(var7, {constructor: {value: var4}});
        var9 = var7;
        var4 = new var9[var4](var8);
        var4 = var4 instanceof Object ? var4 : var7;
        var6[var3] = var4;
        var4 = _closure1_slot20;
        var2 = var2.Set;
        var6 = var2.prototype;
        var6 = Object.create(var6, {constructor: {value: var2}});
        var9 = var6;
        var2 = new var9[var2](var8);
        var2 = var2 instanceof Object ? var2 : var6;
        var4[var3] = var2;
        var4 = var5.forEach;
        var2 = _closure1_slot27;
        var2 = var4.bind(var5)(var2);
        var4 = _closure1_slot17;
        var2 = var4.delete;
        var2 = var2.bind(var4)(var3);
        var2 = _closure1_slot18;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var4['SUBSCRIPTION_PLANS_FETCH_SUCCESS'] = var11;
    var11 = function handleSubscriptionPlansFetchFailure(arg1) {
        var1 = arg1;
        var3 = var1.skuId;
        var4 = _closure1_slot17;
        var2 = var4.delete;
        var2 = var2.bind(var4)(var3);
        var2 = _closure1_slot18;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var4['SUBSCRIPTION_PLANS_FETCH_FAILURE'] = var11;
    var4['SUBSCRIPTION_PLANS_RESET'] = var5;
    var11 = function handleGiftCodeResolveSuccess(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
            var1 = arg1;
            var1 = var1.giftCode;
            var3 = var1.subscription_plan;
            var2 = null;
            if(!(var2 != var3)) { _fun0015_ip = 61; continue _fun0015 }
case 53:
            var3 = _closure1_slot27;
            var2 = var1.subscription_plan;
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
case 61:
            var1 = undefined;
            return var1;
        }
    };
    var4['GIFT_CODE_RESOLVE_SUCCESS'] = var11;
    var10 = function handleEntitlementGiftsFetchSuccess(arg1) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
            var1 = arg1;
            var3 = var1.entitlements;
            var2 = _closure1_slot23;
            var1 = undefined;
            var5 = var2.bind(var1)(var3);
            var3 = var5.bind(var1)();
            var2 = var3.done;
            var4 = null;
            if(var2) { _fun0016_ip = 62; continue _fun0016 }
case 51:
            var2 = var3.value;
            var7 = var2.subscription_plan;
            if(!(var4 != var7)) { _fun0016_ip = 34; continue _fun0016 }
case 63:
            var7 = _closure1_slot27;
            var2 = var2.subscription_plan;
            var2 = var7.bind(var1)(var2);
case 34:
            var7 = var5.bind(var1)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0016_ip = 51; continue _fun0016 }
case 62:
            return var1;
        }
    };
    var4['ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS'] = var10;
    var4['LOGOUT'] = var5;
    var5 = var9.prototype;
    var5 = Object.create(var5, {constructor: {value: var9}});
    var16 = var5;
    var14 = var4;
    var4 = new var16[var9](var15, var14, var13);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'stores/billing/SubscriptionPlanStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['subscriptionPlansFetchingForSKU'] = var2;
    return var1;
})();
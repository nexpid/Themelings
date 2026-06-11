// app/modules/payments/records/CheckoutContextRecord.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function _callSuper(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var2 = _closure1_slot5;
            var3 = undefined;
            var1 = arg2;
            var9 = var2.bind(var3)(var1);
            var2 = _closure1_slot4;
            var1 = _closure1_slot10;
            var1 = var1.bind(var3)();
            if(var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = var9.apply;
            var1 = var1.bind(var9)(var4, var3);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var6 = global;
            var8 = var6.Reflect;
            var7 = var8.construct;
            var6 = new Array(0);
            var5 = _closure1_slot5;
            var5 = var5.bind(var3)(var4);
            var5 = var5.constructor;
            var1 = var7.bind(var8)(var9, var6, var5);
case 4:
            var1 = var2.bind(var3)(var4, var1);
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
case 5: // try_start_0
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
case 6: // try_end0
            _fun0002_ip = 7; continue _fun0002;
case 8: // catch_target0
            CatchBlockStart(arg_register=1);
case 7:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 9:
            if(var2) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var2 = var3["@@iterator"];
case 11:
            if(var2) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0003_ip = 15; continue _fun0003 }
case 4:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0003_ip = 16; continue _fun0003 }
case 17:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0003_ip = 18; continue _fun0003 }
case 19:
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
            if(!var7) { _fun0003_ip = 20; continue _fun0003 }
case 21:
            var7 = var3.constructor;
case 20:
            var10 = var9;
            if(!var7) { _fun0003_ip = 22; continue _fun0003 }
case 23:
            var7 = var3.constructor;
            var10 = var7.name;
case 22:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0003_ip = 24; continue _fun0003 }
case 25:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0003_ip = 24; continue _fun0003 }
case 26:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0003_ip = 27; continue _fun0003 }
case 28:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0003_ip = 29; continue _fun0003 }
case 27:
            var9 = _closure1_slot12;
            var7 = var9.bind(var8)(var3, var8);
case 29:
            _fun0003_ip = 30; continue _fun0003;
case 24:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 30:
            var6 = var7;
            _fun0003_ip = 16; continue _fun0003;
case 18:
            var7 = _closure1_slot12;
            var6 = var7.bind(var8)(var3, var8);
case 16:
            var4 = var6;
            if(var4) { _fun0003_ip = 15; continue _fun0003 }
case 31:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 15:
            if(!var4) { _fun0003_ip = 32; continue _fun0003 }
case 33:
            _closure2_slot0 = var4;
case 32:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0004_ip = 34; continue _fun0004 }
case 35:
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
                    _fun0004_ip = 36; continue _fun0004;
case 34:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 36:
                    return var1;
                }
            };
            return var1;
case 13:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0005_ip = 37; continue _fun0005 }
case 38:
            var2 = var4.length;
            var1 = var3 > var2;
case 37:
            var2 = undefined;
            if(!var1) { _fun0005_ip = 39; continue _fun0005 }
case 40:
            var2 = var4.length;
case 39:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0005_ip = 6; continue _fun0005 }
case 11:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0005_ip = 11; continue _fun0005 }
case 6:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var5.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var5.bind(var1)(var2);
    var _closure1_slot7 = var2;
    var2 = 6;
    var2 = var7[var2];
    var5 = var5.bind(var1)(var2);
    var2 = function(arg1) {
        var5 = function AvailablePlanRecord(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = arg1;
                var5 = this;
                var6 = _closure1_slot2;
                var4 = _closure2_slot0;
                var3 = undefined;
                var6 = var6.bind(var3)(var5, var4);
                var1 = _closure1_slot9;
                var1 = var1.bind(var3)(var5, var4);
                var3 = var2.id;
                var1['id'] = var3;
                var3 = var2.quantity;
                var1['quantity'] = var3;
                var3 = var2.price;
                var1['price'] = var3;
                var3 = var2.total;
                var1['total'] = var3;
                var2 = var2.addOnPlans;
                var3 = null;
                if(!(var3 == var2)) { _fun0006_ip = 41; continue _fun0006 }
case 42:
                var2 = new Array(0);
case 41:
                var1['addOnPlans'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot6;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot3;
        var6 = {};
        var2 = 'getPlanQuantities';
        var6['key'] = var2;
        var2 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var2 = this;
                var1 = global;
                var4 = var1.Map;
                var1 = var2.id;
                var3 = new Array(2);
                var3[0] = var1;
                var1 = var2.quantity;
                var3[1] = var1;
                var1 = new Array(1);
                var1[0] = var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var15 = var3;
                var14 = var1;
                var1 = new var15[var4](var14, var13);
                var1 = var1 instanceof Object ? var1 : var3;
                var3 = _closure1_slot11;
                var2 = var2.addOnPlans;
                var7 = undefined;
                var6 = var3.bind(var7)(var2);
                var3 = var6.bind(var7)();
                var2 = var3.done;
                var5 = null;
                if(var2) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                var2 = var3.value;
                var9 = var1.set;
                var8 = var2.id;
                var11 = var1.get;
                var10 = var2.id;
                var11 = var11.bind(var1)(var10);
                var12 = var5 != var11;
                var10 = 0;
                if(!var12) { _fun0007_ip = 45; continue _fun0007 }
case 46:
                var10 = var11;
case 45:
                var2 = var2.quantity;
                var2 = var10 + var2;
                var2 = var9.bind(var1)(var8, var2);
                var8 = var6.bind(var7)();
                var2 = var8.done;
                var3 = var8;
                if(!var2) { _fun0007_ip = 44; continue _fun0007 }
case 43:
                return var1;
            }
        };
        var6['value'] = var2;
        var2 = new Array(3);
        var2[0] = var6;
        var6 = {};
        var7 = 'matchesItems';
        var6['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = this;
                var1 = var2.getPlanQuantities;
                var3 = var1.bind(var2)();
                var1 = global;
                var1 = var1.Map;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var17 = var2;
                var1 = new var17[var1](var16);
                var12 = var1 instanceof Object ? var1 : var2;
                var2 = _closure1_slot11;
                var10 = undefined;
                var1 = arg1;
                var5 = var2.bind(var10)(var1);
                var2 = var5.bind(var10)();
                var1 = var2.done;
                var4 = null;
                var9 = 0;
                if(var1) { _fun0008_ip = 47; continue _fun0008 }
case 48:
                var1 = var2.value;
                var7 = var1.planId;
                var8 = var1.quantity;
                var6 = var12.set;
                var1 = var12.get;
                var13 = var1.bind(var12)(var7);
                var14 = var4 != var13;
                var1 = 0;
                if(!var14) { _fun0008_ip = 49; continue _fun0008 }
case 50:
                var1 = var13;
case 49:
                var1 = var1 + var8;
                var1 = var6.bind(var12)(var7, var1);
                var6 = var5.bind(var10)();
                var1 = var6.done;
                var2 = var6;
                if(!var1) { _fun0008_ip = 48; continue _fun0008 }
case 47:
                var4 = var3.size;
                var2 = var12.size;
                var1 = false;
                if(!(var4 === var2)) { _fun0008_ip = 51; continue _fun0008 }
case 52:
                var2 = _closure1_slot11;
                var7 = var2.bind(var10)(var3);
                var3 = var7.bind(var10)();
                var2 = var3.done;
                var5 = 2;
                var4 = 1;
                var1 = true;
                if(var2) { _fun0008_ip = 51; continue _fun0008 }
case 53:
                var13 = var3.value;
                var2 = _closure1_slot7;
                var2 = var2.bind(var10)(var13, var5);
                var14 = var2[var9];
                var13 = var2[var4];
                var2 = var12.get;
                var2 = var2.bind(var12)(var14);
                var1 = false;
                if(!(var2 === var13)) { _fun0008_ip = 51; continue _fun0008 }
case 54:
                var13 = var7.bind(var10)();
                var2 = var13.done;
                var3 = var13;
                var1 = true;
                if(!var2) { _fun0008_ip = 53; continue _fun0008 }
case 51:
                return var1;
            }
        };
        var6['value'] = var7;
        var2[1] = var6;
        var6 = {};
        var7 = 'getPriceString';
        var6['key'] = var7;
        var7 = function value() {
            var1 = this;
            var1 = var1.total;
            var3 = var1.amount;
            var2 = global;
            var6 = var2.Math;
            var5 = var6.pow;
            var4 = var1.exponent;
            var2 = 10;
            var2 = var5.bind(var6)(var2, var4);
            var5 = var3 / var2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 7;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var3 = var4.formatPrice;
            var2 = var1.currency;
            var1 = {};
            var6 = false;
            var1['convertToMajorUnits'] = var6;
            var1 = var3.bind(var4)(var5, var2, var1);
            return var1;
        };
        var6['value'] = var7;
        var2[2] = var6;
        var6 = {};
        var7 = 'createFromServer';
        var6['key'] = var7;
        var1 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = arg1;
                var3 = _closure2_slot0;
                var1 = {};
                var4 = var2.id;
                var1['id'] = var4;
                var4 = var2.quantity;
                var1['quantity'] = var4;
                var4 = var2.price;
                var1['price'] = var4;
                var4 = var2.total;
                var1['total'] = var4;
                var2 = var2.add_on_plans;
                var4 = null;
                if(!(var4 == var2)) { _fun0009_ip = 8; continue _fun0009 }
case 55:
                var2 = new Array(0);
case 8:
                var1['addOnPlans'] = var2;
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var6 = var2;
                var5 = var1;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(1);
        var1[0] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var5);
    var _closure1_slot8 = var2;
    var4 = function(arg1) {
        var5 = function CheckoutContextRecord(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var2 = arg1;
                var5 = this;
                var6 = _closure1_slot2;
                var4 = _closure2_slot0;
                var3 = undefined;
                var6 = var6.bind(var3)(var5, var4);
                var1 = _closure1_slot9;
                var1 = var1.bind(var3)(var5, var4);
                var4 = var2.paymentSources;
                var3 = null;
                if(!(var3 == var4)) { _fun0010_ip = 56; continue _fun0010 }
case 57:
                var4 = new Array(0);
case 56:
                var1['paymentSources'] = var4;
                var5 = var2.storeCountry;
                var6 = var3 != var5;
                var4 = null;
                if(!var6) { _fun0010_ip = 58; continue _fun0010 }
case 59:
                var4 = var5;
case 58:
                var1['storeCountry'] = var4;
                var4 = var2.allowedCurrencies;
                if(!(var3 == var4)) { _fun0010_ip = 60; continue _fun0010 }
case 61:
                var4 = new Array(0);
case 60:
                var1['allowedCurrencies'] = var4;
                var2 = var2.availablePlans;
                if(!(var3 == var2)) { _fun0010_ip = 62; continue _fun0010 }
case 63:
                var2 = new Array(0);
case 62:
                var1['availablePlans'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var6 = _closure1_slot6;
        var4 = undefined;
        var3 = arg1;
        var3 = var6.bind(var4)(var5, var3);
        var3 = _closure1_slot3;
        var6 = {};
        var2 = 'getAvailablePlanForItems';
        var6['key'] = var2;
        var2 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var2 = arg1;
                var _closure3_slot0 = var2;
                var2 = this;
                var3 = var2.availablePlans;
                var2 = var3.find;
                var1 = function(arg1) {
                    var3 = arg1;
                    var2 = var3.matchesItems;
                    var1 = _closure3_slot0;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var3 = var1 != var2;
                if(!var3) { _fun0011_ip = 9; continue _fun0011 }
case 64:
                var1 = var2;
case 9:
                return var1;
            }
        };
        var6['value'] = var2;
        var2 = new Array(1);
        var2[0] = var6;
        var6 = {};
        var7 = 'createFromOrder';
        var6['key'] = var7;
        var1 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var1 = arg1;
                var3 = null;
                var2 = var3 == var1;
                var5 = undefined;
                if(var2) { _fun0012_ip = 35; continue _fun0012 }
case 38:
                var5 = var1.checkout_context;
case 35:
                var2 = var3 == var5;
                var1 = null;
                if(var2) { _fun0012_ip = 65; continue _fun0012 }
case 66:
                var4 = _closure2_slot0;
                var2 = {};
                var6 = var5.payment_sources;
                if(!(var3 == var6)) { _fun0012_ip = 11; continue _fun0012 }
case 67:
                var6 = new Array(0);
case 11:
                var2['paymentSources'] = var6;
                var6 = var5.store_country;
                var7 = var3 != var6;
                var6 = null;
                if(!var7) { _fun0012_ip = 68; continue _fun0012 }
case 59:
                var7 = var5.store_country;
                var6 = var7.country;
case 68:
                var2['storeCountry'] = var6;
                var6 = var5.allowed_currencies;
                if(!(var3 == var6)) { _fun0012_ip = 69; continue _fun0012 }
case 70:
                var6 = new Array(0);
case 69:
                var2['allowedCurrencies'] = var6;
                var6 = var5.available_plans;
                if(!(var3 == var6)) { _fun0012_ip = 71; continue _fun0012 }
case 72:
                var6 = new Array(0);
case 71:
                var5 = var6.map;
                var3 = _closure1_slot8;
                var3 = var3.createFromServer;
                var3 = var5.bind(var6)(var3);
                var2['availablePlans'] = var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var9 = var3;
                var8 = var2;
                var2 = new var9[var4](var8, var7);
                var1 = var2 instanceof Object ? var2 : var3;
case 65:
                return var1;
            }
        };
        var6['value'] = var1;
        var1 = new Array(1);
        var1[0] = var6;
        var1 = var3.bind(var4)(var5, var2, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var5);
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/payments/records/CheckoutContextRecord.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['AvailablePlanRecord'] = var2;
    return var1;
})();
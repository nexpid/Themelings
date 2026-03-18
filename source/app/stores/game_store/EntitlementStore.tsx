// app/stores/game_store/EntitlementStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
            _closure1_slot24 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot24 = var1;
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
            var9 = _closure1_slot26;
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
            var7 = _closure1_slot26;
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
    var _closure1_slot25 = var1;
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
    var _closure1_slot26 = var1;
    var1 = function addEntitlement(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var1 = arg1;
            var5 = _closure1_slot14;
            var4 = var1.id;
            var6 = _closure1_slot8;
            var3 = var6.createFromServer;
            var3 = var3.bind(var6)(var1);
            var5[var4] = var3;
            var4 = _closure1_slot16;
            var3 = var1.sku_id;
            var3 = var4[var3];
            var4 = null;
            if(!(var4 == var3)) { _fun0005_ip = 15; continue _fun0005 }
case 39:
            var6 = _closure1_slot16;
            var5 = var1.sku_id;
            var3 = global;
            var3 = var3.Set;
            var7 = var3.prototype;
            var7 = Object.create(var7, {constructor: {value: var3}});
            var9 = var7;
            var3 = new var9[var3](var8);
            var3 = var3 instanceof Object ? var3 : var7;
            var6[var5] = var3;
case 15:
            var5 = _closure1_slot17;
            var3 = var1.application_id;
            var3 = var5[var3];
            if(!(var4 == var3)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
            var6 = _closure1_slot17;
            var5 = var1.application_id;
            var3 = global;
            var3 = var3.Set;
            var7 = var3.prototype;
            var7 = Object.create(var7, {constructor: {value: var3}});
            var9 = var7;
            var3 = new var9[var3](var8);
            var3 = var3 instanceof Object ? var3 : var7;
            var6[var5] = var3;
case 40:
            var3 = var1.subscription_id;
            if(!(var4 != var3)) { _fun0005_ip = 42; continue _fun0005 }
case 43:
            var5 = _closure1_slot23;
            var3 = var1.subscription_id;
            var3 = var5[var3];
            if(!(var4 == var3)) { _fun0005_ip = 44; continue _fun0005 }
case 45:
            var5 = _closure1_slot23;
            var4 = var1.subscription_id;
            var3 = global;
            var3 = var3.Set;
            var6 = var3.prototype;
            var6 = Object.create(var6, {constructor: {value: var3}});
            var9 = var6;
            var3 = new var9[var3](var8);
            var3 = var3 instanceof Object ? var3 : var6;
            var5[var4] = var3;
case 44:
            var4 = _closure1_slot23;
            var3 = var1.subscription_id;
            var5 = var4[var3];
            var4 = var5.add;
            var3 = var1.id;
            var3 = var4.bind(var5)(var3);
case 42:
            var4 = _closure1_slot17;
            var3 = var1.application_id;
            var5 = var4[var3];
            var4 = var5.add;
            var3 = var1.id;
            var3 = var4.bind(var5)(var3);
            var3 = _closure1_slot16;
            var2 = var1.sku_id;
            var3 = var3[var2];
            var2 = var3.add;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var1 = function addGiftEntitlement(arg1) {
        var5 = arg1;
        var3 = _closure1_slot15;
        var2 = var5.id;
        var4 = _closure1_slot8;
        var1 = var4.createFromServer;
        var1 = var1.bind(var4)(var5);
        var3[var2] = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot28 = var1;
    var10 = function handlePurchaseSuccess(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var1 = arg1;
            var3 = var1.entitlements;
            var2 = _closure1_slot25;
            var1 = undefined;
            var4 = var2.bind(var1)(var3);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0006_ip = 46; continue _fun0006 }
case 47:
            var6 = _closure1_slot27;
            var2 = var3.value;
            var2 = var6.bind(var1)(var2);
            var6 = var4.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0006_ip = 47; continue _fun0006 }
case 46:
            return var1;
        }
    };
    var9 = function handleEntitlementUpdate(arg1) {
        var3 = _closure1_slot27;
        var1 = arg1;
        var2 = var1.entitlement;
        var1 = undefined;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var2 = global;
    var12 = var2.Object;
    var11 = var12.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var11.bind(var12)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot8 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot9 = var8;
    var8 = 7;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot10 = var8;
    var8 = 8;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var11 = var8.EntitlementSourceTypes;
    var _closure1_slot11 = var11;
    var8 = var8.EntitlementTypes;
    var _closure1_slot12 = var8;
    var8 = 9;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.PREMIUM_SUBSCRIPTION_APPLICATION;
    var _closure1_slot13 = var8;
    var8 = {};
    var _closure1_slot14 = var8;
    var8 = {};
    var _closure1_slot15 = var8;
    var8 = {};
    var _closure1_slot16 = var8;
    var8 = {};
    var _closure1_slot17 = var8;
    var8 = false;
    var _closure1_slot18 = var8;
    var _closure1_slot19 = var8;
    var _closure1_slot20 = var8;
    var8 = var2.Set;
    var11 = var8.prototype;
    var11 = Object.create(var11, {constructor: {value: var8}});
    var16 = var11;
    var8 = new var16[var8](var15);
    var8 = var8 instanceof Object ? var8 : var11;
    var _closure1_slot21 = var8;
    var2 = var2.Set;
    var8 = var2.prototype;
    var8 = Object.create(var8, {constructor: {value: var2}});
    var16 = var8;
    var2 = new var16[var2](var15);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot22 = var2;
    var2 = {};
    var _closure1_slot23 = var2;
    var2 = 13;
    var8 = var6[var2];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var8);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function EntitlementStore() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
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
                var1 = _closure1_slot24;
                var1 = var1.bind(var3)();
                if(var1) { _fun0007_ip = 48; continue _fun0007 }
case 49:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0007_ip = 50; continue _fun0007;
case 48:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 50:
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
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var4 = this;
            var3 = var4.syncWith;
            var1 = _closure1_slot9;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var1 = true;
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(19);
        var1[0] = var5;
        var5 = {};
        var7 = 'get';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var2 = _closure1_slot14;
            var1 = arg1;
            var1 = var2[var1];
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getGiftable';
        var5['key'] = var7;
        var7 = function value() {
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 10;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.values;
            var1 = _closure1_slot15;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getForApplication';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var2 = _closure1_slot17;
                var1 = arg1;
                var4 = var2[var1];
                var1 = null;
                if(!(var1 != var4)) { _fun0008_ip = 51; continue _fun0008 }
case 33:
                var2 = global;
                var2 = var2.Set;
                var3 = var2.prototype;
                var3 = Object.create(var3, {constructor: {value: var2}});
                var11 = var3;
                var2 = new var11[var2](var10);
                var2 = var2 instanceof Object ? var2 : var3;
                var3 = _closure1_slot25;
                var6 = undefined;
                var5 = var3.bind(var6)(var4);
                var4 = var5.bind(var6)();
                var3 = var4.done;
                if(var3) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                var9 = var4.value;
                var8 = var2.add;
                var3 = _closure1_slot14;
                var3 = var3[var9];
                var3 = var8.bind(var2)(var3);
                var8 = var5.bind(var6)();
                var3 = var8.done;
                var4 = var8;
                if(!var3) { _fun0008_ip = 53; continue _fun0008 }
case 52:
                return var2;
case 51:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getForSku';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var2 = _closure1_slot16;
                var1 = arg1;
                var4 = var2[var1];
                var1 = null;
                if(!(var1 != var4)) { _fun0009_ip = 51; continue _fun0009 }
case 33:
                var2 = global;
                var2 = var2.Set;
                var3 = var2.prototype;
                var3 = Object.create(var3, {constructor: {value: var2}});
                var11 = var3;
                var2 = new var11[var2](var10);
                var2 = var2 instanceof Object ? var2 : var3;
                var3 = _closure1_slot25;
                var6 = undefined;
                var5 = var3.bind(var6)(var4);
                var4 = var5.bind(var6)();
                var3 = var4.done;
                if(var3) { _fun0009_ip = 52; continue _fun0009 }
case 53:
                var9 = var4.value;
                var8 = var2.add;
                var3 = _closure1_slot14;
                var3 = var3[var9];
                var3 = var8.bind(var2)(var3);
                var8 = var5.bind(var6)();
                var3 = var8.done;
                var4 = var8;
                if(!var3) { _fun0009_ip = 53; continue _fun0009 }
case 52:
                return var2;
case 51:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'fetchingAllEntitlements';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot18;
            return var1;
        };
        var5['get'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'fetchedAllEntitlements';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot19;
            return var1;
        };
        var5['get'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'fetchedEndedEntitlements';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot20;
            return var1;
        };
        var5['get'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'applicationIdsFetching';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot21;
            return var1;
        };
        var5['get'] = var7;
        var1[8] = var5;
        var5 = {};
        var7 = 'applicationIdsFetched';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot22;
            return var1;
        };
        var5['get'] = var7;
        var1[9] = var5;
        var5 = {};
        var7 = 'isFetchingForApplication';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var5 = arg1;
                var3 = this;
                var1 = var3.fetchingAllEntitlements;
                if(var1) { _fun0010_ip = 54; continue _fun0010 }
case 55:
                var2 = null;
                var2 = var2 != var5;
                if(!var2) { _fun0010_ip = 56; continue _fun0010 }
case 57:
                var4 = var3.applicationIdsFetching;
                var3 = var4.has;
                var2 = var3.bind(var4)(var5);
case 56:
                var1 = var2;
case 54:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[10] = var5;
        var5 = {};
        var7 = 'isFetchedForApplication';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var5 = arg1;
                var3 = this;
                var1 = var3.fetchedAllEntitlements;
                if(var1) { _fun0011_ip = 58; continue _fun0011 }
case 55:
                var2 = null;
                var2 = var2 != var5;
                if(!var2) { _fun0011_ip = 59; continue _fun0011 }
case 57:
                var4 = var3.applicationIdsFetched;
                var3 = var4.has;
                var2 = var3.bind(var4)(var5);
case 59:
                var1 = var2;
case 58:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[11] = var5;
        var5 = {};
        var7 = 'getForSubscription';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var2 = _closure1_slot23;
                var1 = arg1;
                var4 = var2[var1];
                var1 = null;
                if(!(var1 != var4)) { _fun0012_ip = 51; continue _fun0012 }
case 33:
                var2 = global;
                var2 = var2.Set;
                var3 = var2.prototype;
                var3 = Object.create(var3, {constructor: {value: var2}});
                var11 = var3;
                var2 = new var11[var2](var10);
                var2 = var2 instanceof Object ? var2 : var3;
                var3 = _closure1_slot25;
                var6 = undefined;
                var5 = var3.bind(var6)(var4);
                var4 = var5.bind(var6)();
                var3 = var4.done;
                if(var3) { _fun0012_ip = 52; continue _fun0012 }
case 53:
                var9 = var4.value;
                var8 = var2.add;
                var3 = _closure1_slot14;
                var3 = var3[var9];
                var3 = var8.bind(var2)(var3);
                var8 = var5.bind(var6)();
                var3 = var8.done;
                var4 = var8;
                if(!var3) { _fun0012_ip = 53; continue _fun0012 }
case 52:
                return var2;
case 51:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[12] = var5;
        var5 = {};
        var7 = 'isEntitledToSku';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var10 = arg1;
                var7 = arg2;
                var9 = arg3;
                var8 = arguments[3];
                var6 = undefined;
                if(!(var8 === var6)) { _fun0013_ip = 33; continue _fun0013 }
case 60:
                var8 = null;
case 33:
                var2 = _closure1_slot16;
                var4 = var2[var7];
                var2 = null;
                if(!(var2 != var4)) { _fun0013_ip = 61; continue _fun0013 }
case 62:
                var3 = _closure1_slot25;
                var5 = var3.bind(var6)(var4);
                var4 = var5.bind(var6)();
                var3 = var4.done;
                if(var3) { _fun0013_ip = 61; continue _fun0013 }
case 63:
                var11 = var4.value;
                var3 = _closure1_slot14;
                var12 = var3[var11];
                if(!(var2 != var12)) { _fun0013_ip = 64; continue _fun0013 }
case 65:
                var11 = var12.isValid;
                var3 = _closure1_slot10;
                var3 = var11.bind(var12)(var10, var3, var8);
                if(var3) { _fun0013_ip = 66; continue _fun0013 }
case 64:
                var11 = var5.bind(var6)();
                var3 = var11.done;
                var4 = var11;
                if(var3) { _fun0013_ip = 61; continue _fun0013 }
case 17:
                _fun0013_ip = 63; continue _fun0013;
case 66:
                var3 = true;
                return var3;
case 61:
                var4 = _closure1_slot22;
                var3 = var4.has;
                var3 = var3.bind(var4)(var9);
                if(var3) { _fun0013_ip = 67; continue _fun0013 }
case 68:
                if(!(var2 == var8)) { _fun0013_ip = 69; continue _fun0013 }
case 70:
                var4 = _closure1_slot9;
                var3 = var4.getActiveLibraryApplication;
                var5 = var3.bind(var4)(var9);
                _fun0013_ip = 71; continue _fun0013;
case 69:
                var4 = _closure1_slot9;
                var3 = var4.getLibraryApplication;
                var5 = var3.bind(var4)(var9, var8);
case 71:
                var3 = var2 == var5;
                if(var3) { _fun0013_ip = 72; continue _fun0013 }
case 73:
                var4 = var5.sku;
                var4 = var4.id;
                var3 = var4 !== var7;
case 72:
                if(var3) { _fun0013_ip = 74; continue _fun0013 }
case 24:
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 11;
                var1 = var7[var1];
                var4 = var4.bind(var6)(var1);
                var1 = var4.isUserEntitledToLibraryApplication;
                var1 = var1.bind(var4)(var5);
                var3 = !var1;
case 74:
                var1 = !var3;
                if(!var3) { _fun0013_ip = 75; continue _fun0013 }
case 76:
                var1 = null;
case 75:
                return var1;
case 67:
                var1 = false;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[13] = var5;
        var5 = {};
        var7 = 'hasFetchedForApplicationIds';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = arg1;
            var2 = var3.every;
            var1 = function(arg1) {
                var3 = _closure1_slot22;
                var2 = var3.has;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[14] = var5;
        var5 = {};
        var7 = 'getReverseTrialEntitlement';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var9 = arg1;
                var3 = this;
                var1 = global;
                var1 = var1.Date;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var14 = var2;
                var1 = new var14[var1](var13);
                var8 = var1 instanceof Object ? var1 : var2;
                var2 = var3.getForApplication;
                var1 = _closure1_slot13;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                if(!(var1 != var3)) { _fun0014_ip = 72; continue _fun0014 }
case 11:
                var2 = _closure1_slot25;
                var6 = undefined;
                var5 = var2.bind(var6)(var3);
                var3 = var5.bind(var6)();
                var2 = var3.done;
                var4 = var3;
                if(var2) { _fun0014_ip = 72; continue _fun0014 }
case 77:
                var2 = var4.value;
                var3 = var2.endsAt;
                var10 = var1 != var3;
                if(!var10) { _fun0014_ip = 78; continue _fun0014 }
case 50:
                var3 = var2.endsAt;
                var10 = var3 < var8;
case 78:
                var3 = var2.startsAt;
                var3 = var1 != var3;
                var12 = var2.type;
                var11 = _closure1_slot12;
                var11 = var11.FRACTIONAL_REDEMPTION;
                if(!(var12 === var11)) { _fun0014_ip = 79; continue _fun0014 }
case 80:
                var12 = var2.sourceType;
                var11 = _closure1_slot11;
                var11 = var11.REVERSE_TRIAL;
                if(!(var12 === var11)) { _fun0014_ip = 79; continue _fun0014 }
case 81:
                if(!var10) { _fun0014_ip = 71; continue _fun0014 }
case 82:
                if(!var9) { _fun0014_ip = 79; continue _fun0014 }
case 71:
                if(var3) { _fun0014_ip = 83; continue _fun0014 }
case 79:
                var10 = var5.bind(var6)();
                var3 = var10.done;
                var4 = var10;
                if(var3) { _fun0014_ip = 72; continue _fun0014 }
case 84:
                _fun0014_ip = 77; continue _fun0014;
case 83:
                return var2;
case 72:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[15] = var5;
        var5 = {};
        var7 = 'getFractionalPremium';
        var5['key'] = var7;
        var7 = function value() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var3 = arguments[0];
                var5 = this;
                var1 = undefined;
                if(!(var3 === var1)) { _fun0015_ip = 85; continue _fun0015 }
case 36:
                var3 = {};
case 85:
                var4 = var3.includeEnded;
                if(!(var4 === var1)) { _fun0015_ip = 38; continue _fun0015 }
case 86:
                var4 = false;
case 38:
                var _closure3_slot0 = var4;
                var3 = var3.excludeReverseTrial;
                if(!(var3 === var1)) { _fun0015_ip = 87; continue _fun0015 }
case 56:
                var3 = false;
case 87:
                var _closure3_slot1 = var3;
                var _closure3_slot3 = var1;
                var1 = new Array(0);
                var _closure3_slot2 = var1;
                var3 = global;
                var3 = var3.Date;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var8 = var4;
                var3 = new var8[var3](var7);
                var3 = var3 instanceof Object ? var3 : var4;
                _closure3_slot3 = var3;
                var4 = var5.getForApplication;
                var3 = _closure1_slot13;
                var4 = var4.bind(var5)(var3);
                var3 = null;
                if(!(var3 != var4)) { _fun0015_ip = 88; continue _fun0015 }
case 61:
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                        var3 = arg1;
                        var2 = var3.endsAt;
                        var1 = null;
                        var4 = var1 != var2;
                        if(!var4) { _fun0016_ip = 47; continue _fun0016 }
case 60:
                        var2 = var3.endsAt;
                        var1 = _closure3_slot3;
                        var4 = var2 < var1;
case 47:
                        var5 = var3.sourceType;
                        var2 = _closure1_slot11;
                        var2 = var2.REVERSE_TRIAL;
                        var2 = var5 === var2;
                        if(!var2) { _fun0016_ip = 89; continue _fun0016 }
case 11:
                        var2 = _closure3_slot1;
case 89:
                        var5 = var3.type;
                        var1 = _closure1_slot12;
                        var1 = var1.FRACTIONAL_REDEMPTION;
                        var1 = var5 !== var1;
                        if(var1) { _fun0016_ip = 90; continue _fun0016 }
case 91:
                        if(!var4) { _fun0016_ip = 92; continue _fun0016 }
case 93:
                        var5 = _closure3_slot0;
                        var4 = !var5;
case 92:
                        var1 = var4;
case 90:
                        if(var1) { _fun0016_ip = 66; continue _fun0016 }
case 52:
                        var1 = var2;
case 66:
                        if(var1) { _fun0016_ip = 94; continue _fun0016 }
case 78:
                        var2 = _closure3_slot2;
                        var1 = var2.push;
                        var1 = var1.bind(var2)(var3);
case 94:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
case 88:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[16] = var5;
        var5 = {};
        var7 = 'isFractionalPremiumActive';
        var5['key'] = var7;
        var7 = function value() {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                var2 = arguments[0];
                var3 = this;
                var1 = undefined;
                if(!(var2 === var1)) { _fun0017_ip = 36; continue _fun0017 }
case 95:
                var2 = {};
case 36:
                var4 = var2.excludeReverseTrial;
                if(!(var4 === var1)) { _fun0017_ip = 86; continue _fun0017 }
case 57:
                var4 = false;
case 86:
                var2 = var3.getFractionalPremium;
                var1 = {};
                var5 = false;
                var1['includeEnded'] = var5;
                var1['excludeReverseTrial'] = var4;
                var1 = var2.bind(var3)(var1);
                var2 = var1.length;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[17] = var5;
        var5 = {};
        var7 = 'getUnactivatedFractionalPremiumUnits';
        var5['key'] = var7;
        var6 = function value() {
            _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                var5 = this;
                var1 = new Array(0);
                var _closure3_slot0 = var1;
                var4 = var5.getForApplication;
                var3 = _closure1_slot13;
                var4 = var4.bind(var5)(var3);
                var3 = null;
                if(!(var3 != var4)) { _fun0018_ip = 96; continue _fun0018 }
case 62:
                var3 = var4.forEach;
                var2 = function(arg1) {
                    _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                        var4 = arg1;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var2 = var2.FractionalPremiumSKUsSets;
                        var5 = var2.ACTIVE_FRACTIONAL_PREMIUM_SKUS;
                        var3 = var5.has;
                        var2 = var4.skuId;
                        var2 = var3.bind(var5)(var2);
                        if(!var2) { _fun0019_ip = 89; continue _fun0019 }
case 97:
                        var3 = var4.consumed;
                        var2 = !var3;
case 89:
                        if(!var2) { _fun0019_ip = 98; continue _fun0019 }
case 53:
                        var3 = _closure3_slot0;
                        var2 = var3.push;
                        var2 = var2.bind(var3)(var4);
case 98:
                        return var1;
                    }
                };
                var2 = var3.bind(var4)(var2);
case 96:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[18] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'EntitlementStore';
    var8['displayName'] = var2;
    var2 = 14;
    var2 = var6[var2];
    var15 = var7.bind(var1)(var2);
    var2 = {};
    var11 = function handleEntitlementApplicationStart(arg1) {
        var1 = arg1;
        var3 = var1.applicationId;
        var2 = _closure1_slot21;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['ENTITLEMENT_FETCH_APPLICATION_START'] = var11;
    var11 = function handleEntitlementApplicationFetch(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var1 = arg1;
            var4 = var1.applicationId;
            var3 = var1.entitlements;
            var2 = _closure1_slot21;
            var1 = var2.delete;
            var1 = var1.bind(var2)(var4);
            var2 = _closure1_slot22;
            var1 = var2.add;
            var1 = var1.bind(var2)(var4);
            var2 = _closure1_slot25;
            var1 = undefined;
            var5 = var2.bind(var1)(var3);
            var3 = var5.bind(var1)();
            var2 = var3.done;
            var4 = true;
            if(var2) { _fun0020_ip = 52; continue _fun0020 }
case 3:
            var7 = var3.value;
            var2 = var7.consumed;
            if(!(var4 !== var2)) { _fun0020_ip = 99; continue _fun0020 }
case 100:
            var2 = _closure1_slot27;
            var2 = var2.bind(var1)(var7);
case 99:
            var7 = var5.bind(var1)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0020_ip = 3; continue _fun0020 }
case 52:
            return var1;
        }
    };
    var2['ENTITLEMENT_FETCH_APPLICATION_SUCCESS'] = var11;
    var11 = function handleEntitlementApplicationFail() {
        var1 = undefined;
        return var1;
    };
    var2['ENTITLEMENT_FETCH_APPLICATION_FAIL'] = var11;
    var11 = function handleEntitlementsGiftableFetchSuccess(arg1) {
        var1 = arg1;
        var3 = var1.entitlements;
        var2 = {};
        _closure1_slot15 = var2;
        var2 = var3.forEach;
        var1 = _closure1_slot28;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var2['ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS'] = var11;
    var2['SKU_PURCHASE_SUCCESS'] = var10;
    var2['VIRTUAL_CURRENCY_REDEEM_SUCCESS'] = var10;
    var10 = function handleLibraryFetchSuccess(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var1 = arg1;
            var3 = var1.libraryApplications;
            var2 = _closure1_slot25;
            var1 = undefined;
            var7 = var2.bind(var1)(var3);
            var3 = var7.bind(var1)();
            var2 = var3.done;
            var6 = null;
            var5 = var3;
            var4 = undefined;
            var3 = undefined;
            if(var2) { _fun0021_ip = 101; continue _fun0021 }
case 87:
            var2 = var5.value;
            var9 = var2.entitlements;
            if(!(var6 != var9)) { _fun0021_ip = 102; continue _fun0021 }
case 97:
            var9 = _closure1_slot25;
            var2 = var2.entitlements;
            var10 = var9.bind(var1)(var2);
            var11 = var10.bind(var1)();
            var2 = var11.done;
            var9 = var11;
            var4 = var9;
            var3 = var10;
            if(var2) { _fun0021_ip = 102; continue _fun0021 }
case 64:
            var11 = _closure1_slot27;
            var2 = var9.value;
            var2 = var11.bind(var1)(var2);
            var11 = var10.bind(var1)();
            var2 = var11.done;
            var9 = var11;
            var4 = var9;
            var3 = var10;
            if(!var2) { _fun0021_ip = 64; continue _fun0021 }
case 102:
            var9 = var7.bind(var1)();
            var2 = var9.done;
            var5 = var9;
            if(!var2) { _fun0021_ip = 87; continue _fun0021 }
case 101:
            return var1;
        }
    };
    var2['LIBRARY_FETCH_SUCCESS'] = var10;
    var2['ENTITLEMENT_CREATE'] = var9;
    var2['ENTITLEMENT_UPDATE'] = var9;
    var9 = function handleEntitlementDelete(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var1 = arg1;
            var1 = var1.entitlement;
            var4 = _closure1_slot14;
            var2 = var1.id;
            var2 = delete var4[var2];
            var4 = _closure1_slot17;
            var2 = var1.application_id;
            var6 = var4[var2];
            var2 = null;
            if(!(var2 != var6)) { _fun0022_ip = 103; continue _fun0022 }
case 54:
            var5 = var6.delete;
            var4 = var1.id;
            var4 = var5.bind(var6)(var4);
case 103:
            var5 = _closure1_slot16;
            var4 = var1.sku_id;
            var6 = var5[var4];
            if(!(var2 != var6)) { _fun0022_ip = 93; continue _fun0022 }
case 104:
            var5 = var6.delete;
            var4 = var1.id;
            var4 = var5.bind(var6)(var4);
case 93:
            var4 = var1.subscription_id;
            if(!(var2 != var4)) { _fun0022_ip = 105; continue _fun0022 }
case 92:
            var4 = _closure1_slot23;
            var3 = var1.subscription_id;
            var3 = var4[var3];
            if(!(var2 != var3)) { _fun0022_ip = 105; continue _fun0022 }
case 106:
            var2 = var3.delete;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
case 105:
            var1 = undefined;
            return var1;
        }
    };
    var2['ENTITLEMENT_DELETE'] = var9;
    var9 = function handleLogout() {
        var1 = {};
        _closure1_slot14 = var1;
        var1 = {};
        _closure1_slot16 = var1;
        var1 = {};
        _closure1_slot17 = var1;
        var1 = false;
        _closure1_slot18 = var1;
        _closure1_slot19 = var1;
        _closure1_slot20 = var1;
        var1 = global;
        var3 = var1.Set;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        _closure1_slot21 = var3;
        var1 = var1.Set;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var5 = var3;
        var1 = new var5[var1](var4);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot22 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var9;
    var9 = function handleUserEntitlementsStart() {
        var1 = true;
        _closure1_slot18 = var1;
        var1 = undefined;
        return var1;
    };
    var2['ENTITLEMENTS_FETCH_FOR_USER_START'] = var9;
    var9 = function handleUserEntitlementsSuccess(arg1) {
        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
            var1 = arg1;
            var3 = var1.entitlements;
            var1 = var1.excludeEnded;
            var2 = true;
            _closure1_slot19 = var2;
            var2 = false;
            _closure1_slot18 = var2;
            var1 = !var1;
            _closure1_slot20 = var1;
            var2 = _closure1_slot25;
            var1 = undefined;
            var4 = var2.bind(var1)(var3);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0023_ip = 107; continue _fun0023 }
case 103:
            var6 = _closure1_slot27;
            var2 = var3.value;
            var2 = var6.bind(var1)(var2);
            var6 = var4.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0023_ip = 103; continue _fun0023 }
case 107:
            return var1;
        }
    };
    var2['ENTITLEMENTS_FETCH_FOR_USER_SUCCESS'] = var9;
    var4 = function handleUserEntitlementsFail() {
        var1 = false;
        _closure1_slot19 = var1;
        _closure1_slot18 = var1;
        _closure1_slot20 = var1;
        var1 = undefined;
        return var1;
    };
    var2['ENTITLEMENTS_FETCH_FOR_USER_FAIL'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var16 = var4;
    var14 = var2;
    var2 = new var16[var8](var15, var14, var13);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 15;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/game_store/EntitlementStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
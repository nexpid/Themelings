// app/stores/game_store/SKUStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot15 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot15 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 45; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0002_ip = 54; continue _fun0002 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0002_ip = 342; continue _fun0002 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 322; continue _fun0002 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 282; continue _fun0002 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 269; continue _fun0002 }
 109:
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
            if(!var7) { _fun0002_ip = 162; continue _fun0002 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0002_ip = 178; continue _fun0002 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 233; continue _fun0002 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 246; continue _fun0002 }
 233:
            var9 = _closure1_slot17;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0002_ip = 264; continue _fun0002;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0002_ip = 282; continue _fun0002;
 269:
            var7 = _closure1_slot17;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0002_ip = 322; continue _fun0002 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0002_ip = 329; continue _fun0002 }
 325:
            _closure2_slot0 = var4;
 329:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
 20:
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
                    _fun0003_ip = 67; continue _fun0003;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 342:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function addSku(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var7 = _closure1_slot12;
            var6 = var7.set;
            var5 = var1.id;
            var8 = _closure1_slot6;
            var4 = var8.createFromServer;
            var4 = var4.bind(var8)(var1);
            var4 = var6.bind(var7)(var5, var4);
            var6 = _closure1_slot10;
            var5 = var6.delete;
            var4 = var1.id;
            var4 = var5.bind(var6)(var4);
            var6 = _closure1_slot11;
            var5 = var6.delete;
            var4 = var1.id;
            var4 = var5.bind(var6)(var4);
            var5 = var1.bundled_sku_ids;
            var4 = null;
            if(!(var4 != var5)) { _fun0005_ip = 112; continue _fun0005 }
 97:
            var4 = var5.forEach;
            var3 = function(arg1) {
                var4 = _closure1_slot9;
                var3 = var4.set;
                var1 = _closure2_slot0;
                var2 = var1.id;
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
                var1 = undefined;
                return var1;
            };
            var3 = var4.bind(var5)(var3);
 112:
            var5 = _closure1_slot13;
            var4 = var5.has;
            var3 = var1.application_id;
            var3 = var4.bind(var5)(var3);
            if(var3) { _fun0005_ip = 184; continue _fun0005 }
 135:
            var6 = _closure1_slot13;
            var5 = var6.set;
            var4 = var1.application_id;
            var3 = global;
            var3 = var3.Set;
            var7 = var3.prototype;
            var7 = Object.create(var7, {constructor: {value: var3}});
            var11 = var7;
            var3 = new var11[var3](var10);
            var3 = var3 instanceof Object ? var3 : var7;
            var3 = var5.bind(var6)(var4, var3);
 184:
            var4 = _closure1_slot13;
            var3 = var4.get;
            var2 = var1.application_id;
            var3 = var3.bind(var4)(var2);
            var2 = var3.add;
            var1 = var1.id;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function skuFetchSuccess(arg1) {
        var3 = _closure1_slot18;
        var1 = undefined;
        var2 = arg1;
        var2 = var3.bind(var1)(var2);
        return var1;
    };
    var _closure1_slot19 = var1;
    var1 = function handleStoreListing(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = arg1;
            var5 = _closure1_slot18;
            var4 = var3.sku;
            var1 = undefined;
            var4 = var5.bind(var1)(var4);
            var4 = var3.child_skus;
            var5 = null;
            if(!(var5 != var4)) { _fun0006_ip = 58; continue _fun0006 }
 37:
            var7 = var3.child_skus;
            var6 = var7.forEach;
            var4 = function(arg1) {
                var3 = _closure1_slot18;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var4 = var6.bind(var7)(var4);
 58:
            var4 = var3.alternative_skus;
            if(!(var5 != var4)) { _fun0006_ip = 89; continue _fun0006 }
 68:
            var4 = var3.alternative_skus;
            var3 = var4.forEach;
            var2 = function(arg1) {
                var3 = _closure1_slot18;
                var1 = undefined;
                var2 = arg1;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var2 = var3.bind(var4)(var2);
 89:
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var4 = function handleEntitlementsFetch(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var1 = arg1;
            var3 = var1.entitlements;
            var2 = _closure1_slot16;
            var1 = undefined;
            var5 = var2.bind(var1)(var3);
            var3 = var5.bind(var1)();
            var2 = var3.done;
            var4 = null;
            if(var2) { _fun0007_ip = 82; continue _fun0007 }
 37:
            var2 = var3.value;
            var7 = var2.sku;
            if(!(var4 != var7)) { _fun0007_ip = 67; continue _fun0007 }
 52:
            var7 = _closure1_slot18;
            var2 = var2.sku;
            var2 = var7.bind(var1)(var2);
 67:
            var7 = var5.bind(var1)();
            var2 = var7.done;
            var3 = var7;
            if(!var2) { _fun0007_ip = 37; continue _fun0007 }
 82:
            return var1;
        }
    };
    var8 = function handleClearData() {
        var1 = global;
        var2 = var1.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var5 = var3;
        var2 = new var5[var2](var4);
        var3 = var2 instanceof Object ? var2 : var3;
        _closure1_slot9 = var3;
        var3 = var1.Set;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        _closure1_slot10 = var3;
        var3 = var1.Set;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        _closure1_slot11 = var3;
        var3 = var1.Map;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        _closure1_slot12 = var3;
        var3 = var1.Map;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        _closure1_slot13 = var3;
        var1 = var1.Map;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var5 = var3;
        var1 = new var5[var1](var4);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot14 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot21 = var8;
    var1 = function handleUserSettingsStoreUpdate() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var2 = var2.locale;
            if(!(var3 !== var2)) { _fun0008_ip = 47; continue _fun0008 }
 21:
            var2 = _closure1_slot5;
            var2 = var2.locale;
            var _closure1_slot8 = var2;
            var2 = _closure1_slot21;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
 47:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot22 = var1;
    var2 = global;
    var11 = var2.Object;
    var10 = var11.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var7);
    var1 = 0;
    var7 = var5[var1];
    var1 = undefined;
    var7 = var6.bind(var1)(var7);
    var _closure1_slot0 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot1 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var6.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var7 = var2.Map;
    var10 = var7.prototype;
    var10 = Object.create(var10, {constructor: {value: var7}});
    var15 = var10;
    var7 = new var15[var7](var14);
    var7 = var7 instanceof Object ? var7 : var10;
    var _closure1_slot9 = var7;
    var7 = var2.Set;
    var10 = var7.prototype;
    var10 = Object.create(var10, {constructor: {value: var7}});
    var15 = var10;
    var7 = new var15[var7](var14);
    var7 = var7 instanceof Object ? var7 : var10;
    var _closure1_slot10 = var7;
    var7 = var2.Set;
    var10 = var7.prototype;
    var10 = Object.create(var10, {constructor: {value: var7}});
    var15 = var10;
    var7 = new var15[var7](var14);
    var7 = var7 instanceof Object ? var7 : var10;
    var _closure1_slot11 = var7;
    var7 = var2.Map;
    var10 = var7.prototype;
    var10 = Object.create(var10, {constructor: {value: var7}});
    var15 = var10;
    var7 = new var15[var7](var14);
    var7 = var7 instanceof Object ? var7 : var10;
    var _closure1_slot12 = var7;
    var7 = var2.Map;
    var10 = var7.prototype;
    var10 = Object.create(var10, {constructor: {value: var7}});
    var15 = var10;
    var7 = new var15[var7](var14);
    var7 = var7 instanceof Object ? var7 : var10;
    var _closure1_slot13 = var7;
    var2 = var2.Map;
    var7 = var2.prototype;
    var7 = Object.create(var7, {constructor: {value: var2}});
    var15 = var7;
    var2 = new var15[var2](var14);
    var2 = var2 instanceof Object ? var2 : var7;
    var _closure1_slot14 = var2;
    var2 = 8;
    var7 = var5[var2];
    var2 = metroImportAll;
    var2 = var2.bind(var1)(var7);
    var7 = var2.Store;
    var2 = function(arg1) {
        var4 = function SKUStore() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot15;
                var1 = var1.bind(var3)();
                if(var1) { _fun0009_ip = 69; continue _fun0009 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0009_ip = 105; continue _fun0009;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
 105:
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var5 = this;
            var4 = var5.waitFor;
            var3 = _closure1_slot5;
            var1 = _closure1_slot7;
            var1 = var4.bind(var5)(var3, var1);
            var4 = var5.syncWith;
            var1 = _closure1_slot5;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = _closure1_slot22;
            var1 = var4.bind(var5)(var3, var1);
            var1 = _closure1_slot5;
            var1 = var1.locale;
            _closure1_slot8 = var1;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'get';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot12;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getForApplication';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var3 = _closure1_slot13;
                var2 = var3.get;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var1 = null;
                if(!(var1 != var3)) { _fun0010_ip = 63; continue _fun0010 }
 26:
                var1 = global;
                var2 = var1.Array;
                var1 = var2.from;
                var3 = var1.bind(var2)(var3);
                var2 = var3.map;
                var1 = function(arg1) {
                    var3 = _closure1_slot12;
                    var2 = var3.get;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                _fun0010_ip = 67; continue _fun0010;
 63:
                var1 = new Array(0);
 67:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'isFetching';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot10;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getSKUs';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var3 = var1.Object;
            var2 = var3.fromEntries;
            var1 = _closure1_slot12;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getParentSKU';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var3 = this;
                var4 = _closure1_slot9;
                var2 = var4.get;
                var1 = arg1;
                var2 = var2.bind(var4)(var1);
                var1 = null;
                if(!(var1 == var2)) { _fun0011_ip = 33; continue _fun0011 }
 29:
                var1 = undefined;
                return var1;
 33:
                var1 = var3.get;
                var1 = var1.bind(var3)(var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'didFetchingSkuFail';
        var5['key'] = var7;
        var6 = function value(arg1) {
            var3 = _closure1_slot11;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'SKUStore';
    var7['displayName'] = var2;
    var2 = 9;
    var2 = var5[var2];
    var14 = var6.bind(var1)(var2);
    var2 = {};
    var10 = function handleStoreListingsFetchStart(arg1) {
        var1 = arg1;
        var3 = var1.skuId;
        var2 = _closure1_slot10;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['STORE_LISTINGS_FETCH_START'] = var10;
    var10 = function handleStoreListingsFetchFail(arg1) {
        var1 = arg1;
        var3 = var1.skuId;
        var4 = _closure1_slot10;
        var2 = var4.delete;
        var2 = var2.bind(var4)(var3);
        var2 = _closure1_slot11;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['STORE_LISTINGS_FETCH_FAIL'] = var10;
    var10 = function handleStoreListingsFetchSuccess(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var1 = arg1;
            var3 = var1.storeListings;
            var2 = _closure1_slot16;
            var1 = undefined;
            var4 = var2.bind(var1)(var3);
            var3 = var4.bind(var1)();
            var2 = var3.done;
            if(var2) { _fun0012_ip = 64; continue _fun0012 }
 35:
            var6 = _closure1_slot20;
            var2 = var3.value;
            var2 = var6.bind(var1)(var2);
            var6 = var4.bind(var1)();
            var2 = var6.done;
            var3 = var6;
            if(!var2) { _fun0012_ip = 35; continue _fun0012 }
 64:
            return var1;
        }
    };
    var2['STORE_LISTINGS_FETCH_SUCCESS'] = var10;
    var10 = function handleStoreListingFetchSuccess(arg1) {
        var1 = arg1;
        var3 = var1.storeListing;
        var2 = _closure1_slot20;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['STORE_LISTING_FETCH_SUCCESS'] = var10;
    var10 = function handleGiftCodeResolveSuccess(arg1) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
            var1 = arg1;
            var1 = var1.giftCode;
            var3 = var1.store_listing;
            var2 = null;
            if(!(var2 != var3)) { _fun0013_ip = 49; continue _fun0013 }
 21:
            var3 = _closure1_slot18;
            var1 = var1.store_listing;
            var2 = var1.sku;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
 49:
            var1 = false;
            return var1;
        }
    };
    var2['GIFT_CODE_RESOLVE_SUCCESS'] = var10;
    var10 = function handleSkuFetchStart(arg1) {
        var1 = arg1;
        var3 = var1.skuId;
        var2 = _closure1_slot10;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['SKU_FETCH_START'] = var10;
    var10 = function handleSkuFetchSuccess(arg1) {
        var1 = arg1;
        var3 = var1.sku;
        var2 = _closure1_slot19;
        var1 = undefined;
        var2 = var2.bind(var1)(var3);
        return var1;
    };
    var2['SKU_FETCH_SUCCESS'] = var10;
    var10 = function handleSkuFetchFail(arg1) {
        var1 = arg1;
        var3 = var1.skuId;
        var4 = _closure1_slot10;
        var2 = var4.delete;
        var2 = var2.bind(var4)(var3);
        var2 = _closure1_slot11;
        var1 = var2.add;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var2['SKU_FETCH_FAIL'] = var10;
    var9 = function handleSkusFetchSuccess(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = arg1;
            var5 = var1.guildId;
            var8 = var1.skus;
            var3 = _closure1_slot16;
            var1 = undefined;
            var6 = var3.bind(var1)(var8);
            var4 = var6.bind(var1)();
            var3 = var4.done;
            if(var3) { _fun0014_ip = 69; continue _fun0014 }
 40:
            var7 = _closure1_slot19;
            var3 = var4.value;
            var3 = var7.bind(var1)(var3);
            var7 = var6.bind(var1)();
            var3 = var7.done;
            var4 = var7;
            if(!var3) { _fun0014_ip = 40; continue _fun0014 }
 69:
            var3 = null;
            if(!(var3 != var5)) { _fun0014_ip = 135; continue _fun0014 }
 75:
            var4 = _closure1_slot14;
            var3 = var4.set;
            var2 = global;
            var7 = var2.Set;
            var6 = var8.map;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.id;
                return var1;
            };
            var10 = var6.bind(var8)(var2);
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var11 = var6;
            var2 = new var11[var7](var10, var9);
            var2 = var2 instanceof Object ? var2 : var6;
            var2 = var3.bind(var4)(var5, var2);
 135:
            return var1;
        }
    };
    var2['SKUS_FETCH_SUCCESS'] = var9;
    var2['ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS'] = var4;
    var2['APPLICATION_STORE_CLEAR_DATA'] = var8;
    var2['APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS'] = var4;
    var2['ENTITLEMENTS_FETCH_FOR_USER_SUCCESS'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var7](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 10;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/game_store/SKUStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
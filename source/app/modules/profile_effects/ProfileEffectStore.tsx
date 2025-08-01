// app/modules/profile_effects/ProfileEffectStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            _closure1_slot18 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var2 = 0;
    var8 = var6[var2];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var9 = new Array(0);
    var _closure1_slot7 = var9;
    var8 = {};
    var _closure1_slot8 = var8;
    var _closure1_slot9 = var9;
    var _closure1_slot10 = var8;
    var8 = null;
    var _closure1_slot11 = var8;
    var8 = 5;
    var9 = var6[var8];
    var9 = var7.bind(var1)(var9);
    var9 = var9.Millis;
    var9 = var9.MINUTE;
    var _closure1_slot12 = var9;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var8 = var8.Millis;
    var8 = var8.HOUR;
    var _closure1_slot13 = var8;
    var8 = false;
    var _closure1_slot14 = var8;
    var _closure1_slot15 = var1;
    var _closure1_slot16 = var2;
    var _closure1_slot17 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.Store;
    var2 = function(arg1) {
        var4 = function ProfileEffectStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot18;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 69; continue _fun0002 }
 51:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 105; continue _fun0002;
 69:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
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
        var5 = _closure1_slot6;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot3;
        var5 = {};
        var1 = 'isFetchingAll';
        var5['key'] = var1;
        var1 = function get() {
            var1 = _closure1_slot14;
            return var1;
        };
        var5['get'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'fetchError';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot15;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'profileEffects';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'tryItOutId';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot11;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'canFetch';
        var5['key'] = var7;
        var7 = function value() {
            var1 = global;
            var2 = var1.Date;
            var1 = var2.now;
            var2 = var1.bind(var2)();
            var1 = _closure1_slot16;
            var1 = var2 >= var1;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getProfileEffectById';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = arg1;
                var1 = null;
                var2 = var1 != var3;
                var1 = undefined;
                if(!var2) { _fun0003_ip = 25; continue _fun0003 }
 14:
                var2 = _closure1_slot10;
                var1 = var2[var3];
 25:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ProfileEffectStore';
    var8['displayName'] = var2;
    var2 = 8;
    var2 = var6[var2];
    var13 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function PROFILE_EFFECTS_FETCH_ALL() {
        var1 = true;
        _closure1_slot14 = var1;
        var1 = undefined;
        return var1;
    };
    var2['PROFILE_EFFECTS_FETCH_ALL'] = var9;
    var9 = function PROFILE_EFFECTS_FETCH_ALL_SUCCESS(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var9 = var1.presets;
            var2 = var9.length;
            var1 = 0;
            if(!(var1 !== var2)) { _fun0004_ip = 95; continue _fun0004 }
 20:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 6;
            var7 = var6[var2];
            var4 = undefined;
            var8 = var5.bind(var4)(var7);
            var7 = var8.cloneDeep;
            var7 = var7.bind(var8)(var9);
            _closure1_slot9 = var7;
            var2 = var6[var2];
            var6 = var5.bind(var4)(var2);
            var5 = var6.keyBy;
            var4 = _closure1_slot9;
            var2 = 'id';
            var2 = var5.bind(var6)(var4, var2);
            _closure1_slot10 = var2;
            _fun0004_ip = 114; continue _fun0004;
 95:
            var2 = _closure1_slot7;
            _closure1_slot9 = var2;
            var2 = _closure1_slot8;
            _closure1_slot10 = var2;
 114:
            var2 = global;
            var2 = var2.Number;
            var2 = var2.POSITIVE_INFINITY;
            _closure1_slot16 = var2;
            _closure1_slot17 = var1;
            var1 = undefined;
            _closure1_slot15 = var1;
            var2 = false;
            _closure1_slot14 = var2;
            return var1;
        }
    };
    var2['PROFILE_EFFECTS_FETCH_ALL_SUCCESS'] = var9;
    var9 = function PROFILE_EFFECTS_FETCH_ALL_FAILURE(arg1) {
        var1 = arg1;
        var1 = var1.error;
        var3 = _closure1_slot7;
        _closure1_slot9 = var3;
        var3 = _closure1_slot8;
        _closure1_slot10 = var3;
        var3 = global;
        var5 = var3.Date;
        var4 = var5.now;
        var4 = var4.bind(var5)();
        var7 = var3.Math;
        var6 = var7.min;
        var5 = _closure1_slot12;
        var9 = _closure1_slot17;
        var10 = 2;
        var3 = exponentiationOperator(var10, var9);
        var5 = var5 * var3;
        var3 = _closure1_slot13;
        var3 = var6.bind(var7)(var5, var3);
        var3 = var4 + var3;
        _closure1_slot16 = var3;
        var4 = _closure1_slot17;
        var3 = 1;
        var3 = var4 + var3;
        _closure1_slot17 = var3;
        _closure1_slot15 = var1;
        var1 = false;
        _closure1_slot14 = var1;
        var1 = undefined;
        return var1;
    };
    var2['PROFILE_EFFECTS_FETCH_ALL_FAILURE'] = var9;
    var9 = function PROFILE_EFFECTS_SET_TRY_IT_OUT(arg1) {
        var1 = arg1;
        var2 = var1.id;
        _closure1_slot11 = var2;
        var1 = undefined;
        return var1;
    };
    var2['PROFILE_EFFECTS_SET_TRY_IT_OUT'] = var9;
    var4 = function LOGOUT() {
        var1 = _closure1_slot7;
        _closure1_slot9 = var1;
        var1 = _closure1_slot8;
        _closure1_slot10 = var1;
        var1 = null;
        _closure1_slot11 = var1;
        var1 = false;
        _closure1_slot14 = var1;
        var1 = undefined;
        _closure1_slot15 = var1;
        var2 = 0;
        _closure1_slot16 = var2;
        _closure1_slot17 = var2;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var14 = var4;
    var12 = var2;
    var2 = new var14[var8](var13, var12, var11);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/profile_effects/ProfileEffectStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
// app/modules/profile_effects/ProfileEffectStore.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
            _closure1_slot16 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot16 = var1;
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
    var8 = new Array(0);
    var _closure1_slot7 = var8;
    var9 = false;
    var _closure1_slot8 = var9;
    var _closure1_slot9 = var1;
    var _closure1_slot10 = var8;
    var8 = {};
    var _closure1_slot11 = var8;
    var8 = null;
    var _closure1_slot12 = var8;
    var _closure1_slot13 = var1;
    var _closure1_slot14 = var2;
    var2 = function _updatePresets(arg1) {
        var5 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var6 = var5.bind(var1)(var2);
        var5 = var6.cloneDeep;
        var2 = arg1;
        var6 = var5.bind(var6)(var2);
        _closure1_slot10 = var6;
        var2 = {};
        var _closure2_slot0 = var2;
        var5 = var6.forEach;
        var4 = function(arg1) {
            var3 = arg1;
            var2 = _closure2_slot0;
            var1 = var3.id;
            var2[var1] = var3;
            var1 = undefined;
            return var1;
        };
        var4 = var5.bind(var6)(var4);
        _closure1_slot11 = var2;
        return var1;
    };
    var _closure1_slot15 = var2;
    var2 = 6;
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
                var1 = _closure1_slot16;
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
            var1 = _closure1_slot8;
            return var1;
        };
        var5['get'] = var1;
        var1 = new Array(7);
        var1[0] = var5;
        var5 = {};
        var7 = 'fetchError';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['get'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'profileEffects';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['get'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'tryItOutId';
        var5['key'] = var7;
        var7 = function get() {
            var1 = _closure1_slot12;
            return var1;
        };
        var5['get'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'canFetch';
        var5['key'] = var7;
        var7 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var3 = _closure1_slot13;
                var1 = null;
                var1 = var1 == var3;
                if(var1) { _fun0003_ip = 41; continue _fun0003 }
 16:
                var3 = global;
                var4 = var3.Date;
                var3 = var4.now;
                var3 = var3.bind(var4)();
                var2 = _closure1_slot13;
                var1 = var3 >= var2;
 41:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'hasFetched';
        var5['key'] = var7;
        var7 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = _closure1_slot13;
                var3 = null;
                var1 = var3 != var1;
                if(!var1) { _fun0004_ip = 24; continue _fun0004 }
 16:
                var2 = _closure1_slot9;
                var1 = var3 == var2;
 24:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getProfileEffectById';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = arg1;
                var1 = null;
                var2 = var1 != var3;
                var1 = undefined;
                if(!var2) { _fun0005_ip = 25; continue _fun0005 }
 14:
                var2 = _closure1_slot11;
                var1 = var2[var3];
 25:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[6] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'ProfileEffectStore';
    var8['displayName'] = var2;
    var2 = 7;
    var2 = var6[var2];
    var12 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function PROFILE_EFFECTS_FETCH_ALL() {
        var1 = true;
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var2['PROFILE_EFFECTS_FETCH_ALL'] = var9;
    var9 = function PROFILE_EFFECTS_FETCH_ALL_SUCCESS(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var1 = arg1;
            var4 = var1.presets;
            var1 = undefined;
            _closure1_slot9 = var1;
            var2 = global;
            var5 = var2.Date;
            var2 = var5.now;
            var5 = var2.bind(var5)();
            var2 = 300000;
            var2 = var5 + var2;
            _closure1_slot13 = var2;
            var6 = 0;
            _closure1_slot14 = var6;
            var2 = _closure1_slot15;
            var5 = var4.length;
            if(!(var6 === var5)) { _fun0006_ip = 72; continue _fun0006 }
 68:
            var4 = _closure1_slot7;
 72:
            var2 = var2.bind(var1)(var4);
            var2 = false;
            _closure1_slot8 = var2;
            return var1;
        }
    };
    var2['PROFILE_EFFECTS_FETCH_ALL_SUCCESS'] = var9;
    var9 = function PROFILE_EFFECTS_FETCH_ALL_FAILURE(arg1) {
        var1 = arg1;
        var1 = var1.error;
        _closure1_slot9 = var1;
        var1 = global;
        var4 = var1.Date;
        var2 = var4.now;
        var2 = var2.bind(var4)();
        var6 = var1.Math;
        var5 = var6.min;
        var7 = _closure1_slot14;
        var8 = 2;
        var4 = exponentiationOperator(var8, var7);
        var1 = 60000;
        var4 = var1 * var4;
        var1 = 3600000;
        var1 = var5.bind(var6)(var4, var1);
        var1 = var2 + var1;
        _closure1_slot13 = var1;
        var1 = _closure1_slot14;
        var1 = var1 + 1;
        _closure1_slot14 = var1;
        var4 = _closure1_slot15;
        var2 = _closure1_slot7;
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var2 = false;
        _closure1_slot8 = var2;
        return var1;
    };
    var2['PROFILE_EFFECTS_FETCH_ALL_FAILURE'] = var9;
    var9 = function PROFILE_EFFECTS_SET_TRY_IT_OUT(arg1) {
        var1 = arg1;
        var2 = var1.id;
        _closure1_slot12 = var2;
        var1 = undefined;
        return var1;
    };
    var2['PROFILE_EFFECTS_SET_TRY_IT_OUT'] = var9;
    var4 = function LOGOUT() {
        var4 = _closure1_slot15;
        var2 = _closure1_slot7;
        var1 = undefined;
        var2 = var4.bind(var1)(var2);
        var2 = null;
        _closure1_slot12 = var2;
        _closure1_slot13 = var1;
        var2 = false;
        _closure1_slot8 = var2;
        return var1;
    };
    var2['LOGOUT'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var13 = var4;
    var11 = var2;
    var2 = new var13[var8](var12, var11, var10);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/profile_effects/ProfileEffectStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
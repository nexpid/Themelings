// app/modules/premium/OverridePremiumTypeStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            _closure1_slot10 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var4 = function setPremiumTypeActual(arg1) {
        var1 = arg1;
        var2 = var1.user;
        var3 = _closure1_slot9;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 6;
        var4 = var4[var1];
        var1 = undefined;
        var5 = var5.bind(var1)(var4);
        var4 = var5.getPremiumTypeFromRawValue;
        var2 = var2.premium_type;
        var2 = var4.bind(var5)(var2);
        var3['premiumTypeActual'] = var2;
        return var1;
    };
    var1 = global;
    var10 = var1.Object;
    var8 = var10.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 4;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot6 = var2;
    var2 = 5;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var8 = var2.UNSELECTED_CREATED_AT_DATE;
    var _closure1_slot7 = var8;
    var10 = var2.UNSELECTED_PREMIUM_TYPE_OVERRIDE;
    var _closure1_slot8 = var10;
    var2 = {};
    var2['premiumTypeOverride'] = var10;
    var2['premiumTypeActual'] = var10;
    var2['createdAtOverride'] = var8;
    var _closure1_slot9 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function OverridePremiumTypeStore() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot2;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot5;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot10;
                var1 = var1.bind(var3)();
                if(var1) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0002_ip = 8; continue _fun0002;
case 6:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot5;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 8:
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
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = arg1;
                var4 = null;
                if(!(var4 == var2)) { _fun0003_ip = 9; continue _fun0003 }
case 10:
                var5 = _closure1_slot9;
                var3 = _closure1_slot8;
                var5['premiumTypeOverride'] = var3;
                var3 = _closure1_slot9;
                var1 = _closure1_slot7;
                var3['createdAtOverride'] = var1;
                var1 = undefined;
                return var1;
case 9:
                var6 = _closure1_slot9;
                var7 = var4 == var2;
                var1 = undefined;
                if(var7) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var1 = var2.premiumTypeActual;
case 11:
                var6['premiumTypeActual'] = var1;
                var1 = _closure1_slot9;
                var6 = var4 == var2;
                var5 = undefined;
                if(var6) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                var5 = var2.premiumTypeOverride;
case 13:
                var1['premiumTypeOverride'] = var5;
                var1 = var2.createdAtOverride;
                if(!(var4 == var1)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
                var4 = _closure1_slot9;
                var1 = _closure1_slot7;
                var4['createdAtOverride'] = var1;
                _fun0003_ip = 17; continue _fun0003;
case 15:
                var3 = _closure1_slot9;
                var4 = global;
                var5 = var4.Date;
                var8 = var2.createdAtOverride;
                var4 = var5.prototype;
                var4 = Object.create(var4, {constructor: {value: var5}});
                var9 = var4;
                var2 = new var9[var5](var8, var7);
                var2 = var2 instanceof Object ? var2 : var4;
                var3['createdAtOverride'] = var2;
                var1 = var2;
case 17:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'getPremiumTypeOverride';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot9;
            var1 = var1.premiumTypeOverride;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getPremiumTypeActual';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot9;
            var1 = var1.premiumTypeActual;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getCreatedAtOverride';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot9;
            var1 = var1.createdAtOverride;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot9;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'premiumType';
        var5['key'] = var7;
        var6 = function get() {
            var1 = _closure1_slot9;
            var1 = var1.premiumTypeOverride;
            return var1;
        };
        var5['get'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'OverridePremiumTypeStore';
    var8['displayName'] = var2;
    var8['persistKey'] = var2;
    var2 = new Array(1);
    var10 = function(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var4 = null;
            var5 = var4 == var2;
            var1 = undefined;
            var3 = undefined;
            if(var5) { _fun0004_ip = 18; continue _fun0004 }
case 19:
            var3 = var2.createdAtOverride;
case 18:
            if(!(var4 != var3)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            return var1;
case 20:
            var1 = {};
            var7 = var1;
            var6 = var2;
            var2 = copyDataProperties(var7, var6);
            var3 = _closure1_slot7;
            var2 = 'createdAtOverride';
            var1[var2] = var3;
            return var1;
        }
    };
    var2[0] = var10;
    var8['migrations'] = var2;
    var2 = 8;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var10 = function setPremiumTypeOverride(arg1) {
        var1 = arg1;
        var2 = var1.premiumType;
        var1 = _closure1_slot9;
        var1['premiumTypeOverride'] = var2;
        var1 = undefined;
        return var1;
    };
    var2['SET_PREMIUM_TYPE_OVERRIDE'] = var10;
    var9 = function setCreatedAtOverride(arg1) {
        var1 = arg1;
        var2 = var1.createdAt;
        var1 = _closure1_slot9;
        var1['createdAtOverride'] = var2;
        var1 = undefined;
        return var1;
    };
    var2['SET_CREATED_AT_OVERRIDE'] = var9;
    var2['CURRENT_USER_UPDATE'] = var4;
    var2['CONNECTION_OPEN'] = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {constructor: {value: var8}});
    var15 = var4;
    var13 = var2;
    var2 = new var15[var8](var14, var13, var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/OverridePremiumTypeStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
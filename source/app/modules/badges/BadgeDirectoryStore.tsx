// app/modules/badges/BadgeDirectoryStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
            _closure1_slot6 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var2 = function getSingleRequirementThreshold(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var3 = arg1;
            var1 = null;
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var4 = var3.requirements;
            var3 = 0;
            var3 = var4[var3];
            var4 = var1 == var3;
            var2 = undefined;
            if(var4) { _fun0002_ip = 6; continue _fun0002 }
case 8:
            var2 = var3.threshold;
case 6:
            var3 = var1 != var2;
            var1 = 0;
            if(!var3) { _fun0002_ip = 9; continue _fun0002 }
case 10:
            var1 = var2;
case 9:
            return var1;
        }
    };
    var _closure1_slot7 = var2;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var1 = 0;
    var8 = var6[var1];
    var1 = undefined;
    var8 = var7.bind(var1)(var8);
    var _closure1_slot0 = var8;
    var8 = 1;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot1 = var8;
    var8 = 2;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot2 = var8;
    var8 = 3;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot3 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot4 = var8;
    var4 = var4.Map;
    var8 = var4.prototype;
    var8 = Object.create(var8, {constructor: {value: var4}});
    var14 = var8;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot5 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var8 = var4.Store;
    var4 = function(arg1) {
        var4 = function BadgeDirectoryStore() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = this;
                var3 = undefined;
                var5 = undefined;
                var1 = _closure1_slot0;
                var2 = _closure2_slot0;
                var1 = var1.bind(var3)(var4, var2);
                var1 = _closure1_slot3;
                var9 = var1.bind(var3)(var2);
                var2 = _closure1_slot2;
                var1 = _closure1_slot6;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 11; continue _fun0003 }
case 12:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 13; continue _fun0003;
case 11:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 13:
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
        var1 = 'getBadges';
        var5['key'] = var1;
        var1 = function value() {
            var1 = global;
            var3 = var1.Array;
            var2 = var3.from;
            var4 = _closure1_slot5;
            var1 = var4.values;
            var1 = var1.bind(var4)();
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'getBadgeById';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot5;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getSingleRequirementProgress';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var3 = _closure1_slot5;
                var2 = var3.get;
                var1 = arg1;
                var4 = var2.bind(var3)(var1);
                var1 = null;
                var5 = var1 == var4;
                var3 = undefined;
                var2 = undefined;
                if(var5) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var2 = var4.progress;
case 14:
                if(!(var1 != var2)) { _fun0004_ip = 16; continue _fun0004 }
case 6:
                var4 = var2.length;
                var1 = 0;
                if(!(var1 === var4)) { _fun0004_ip = 17; continue _fun0004 }
case 16:
                return var3;
case 17:
                var1 = var2[var1];
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getCurrentTier';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = _closure1_slot5;
                var3 = var4.get;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
                var _closure3_slot0 = var2;
                var5 = null;
                var6 = var5 == var2;
                var3 = undefined;
                var4 = undefined;
                if(var6) { _fun0005_ip = 18; continue _fun0005 }
case 14:
                var4 = var2.current_tier;
case 18:
                if(!(var5 == var4)) { _fun0005_ip = 12; continue _fun0005 }
case 19:
                return var3;
case 12:
                var3 = var2.tiers;
                var2 = var3.find;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.key;
                    var1 = _closure3_slot0;
                    var1 = var1.current_tier;
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getNextTier';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = _closure1_slot5;
                var3 = var4.get;
                var2 = arg1;
                var2 = var3.bind(var4)(var2);
                var _closure3_slot0 = var2;
                var5 = null;
                var6 = var5 == var2;
                var3 = undefined;
                var4 = undefined;
                if(var6) { _fun0006_ip = 18; continue _fun0006 }
case 14:
                var4 = var2.next_tier;
case 18:
                if(!(var5 == var4)) { _fun0006_ip = 12; continue _fun0006 }
case 19:
                return var3;
case 12:
                var3 = var2.tiers;
                var2 = var3.find;
                var1 = function(arg1) {
                    var1 = arg1;
                    var2 = var1.key;
                    var1 = _closure3_slot0;
                    var1 = var1.next_tier;
                    var1 = var2 === var1;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getRemainingToNextTier';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var3 = arg1;
                var2 = this;
                var1 = var2.getNextTier;
                var8 = var1.bind(var2)(var3);
                var1 = var2.getSingleRequirementProgress;
                var2 = var1.bind(var2)(var3);
                var3 = null;
                var4 = var3 == var8;
                var5 = 0;
                var1 = 0;
                if(var4) { _fun0007_ip = 20; continue _fun0007 }
case 21:
                var3 = var3 == var2;
                var1 = 0;
                if(var3) { _fun0007_ip = 20; continue _fun0007 }
case 22:
                var3 = global;
                var4 = var3.Math;
                var3 = var4.max;
                var7 = _closure1_slot7;
                var6 = undefined;
                var6 = var7.bind(var6)(var8);
                var2 = var2.current;
                var2 = var6 - var2;
                var1 = var3.bind(var4)(var5, var2);
case 20:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var4.bind(var1)(var8);
    var4 = 'BadgeDirectoryStore';
    var8['displayName'] = var4;
    var4 = 6;
    var4 = var6[var4];
    var13 = var7.bind(var1)(var4);
    var4 = {};
    var9 = function handleFetchSuccess(arg1) {
        var1 = arg1;
        var4 = var1.badges;
        var1 = global;
        var3 = var1.Map;
        var2 = var4.map;
        var1 = function(arg1) {
            var2 = arg1;
            var3 = var2.badge_id;
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        };
        var5 = var2.bind(var4)(var1);
        var2 = var3.prototype;
        var2 = Object.create(var2, {constructor: {value: var3}});
        var6 = var2;
        var1 = new var6[var3](var5, var4);
        var2 = var1 instanceof Object ? var1 : var2;
        _closure1_slot5 = var2;
        var1 = undefined;
        return var1;
    };
    var4['BADGE_DIRECTORY_FETCH_SUCCESS'] = var9;
    var9 = function handleBadgeFetchSuccess(arg1) {
        var1 = arg1;
        var5 = var1.badge;
        var1 = global;
        var4 = var1.Map;
        var7 = _closure1_slot5;
        var3 = var4.prototype;
        var3 = Object.create(var3, {constructor: {value: var4}});
        var8 = var3;
        var1 = new var8[var4](var7, var6);
        var1 = var1 instanceof Object ? var1 : var3;
        var4 = var1.set;
        var3 = var5.badge_id;
        var3 = var4.bind(var1)(var3, var5);
        _closure1_slot5 = var1;
        var1 = undefined;
        return var1;
    };
    var4['BADGE_FETCH_SUCCESS'] = var9;
    var5 = function handleReset() {
        var1 = global;
        var1 = var1.Map;
        var2 = var1.prototype;
        var2 = Object.create(var2, {constructor: {value: var1}});
        var3 = var2;
        var1 = new var3[var1](var2);
        var2 = var1 instanceof Object ? var1 : var2;
        _closure1_slot5 = var2;
        var1 = undefined;
        return var1;
    };
    var4['LOGOUT'] = var5;
    var5 = var8.prototype;
    var5 = Object.create(var5, {constructor: {value: var8}});
    var14 = var5;
    var12 = var4;
    var4 = new var14[var8](var13, var12, var11);
    var4 = var4 instanceof Object ? var4 : var5;
    var5 = 7;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/badges/BadgeDirectoryStore.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['getSingleRequirementThreshold'] = var2;
    return var1;
})();
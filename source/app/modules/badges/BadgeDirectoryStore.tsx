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
            _closure1_slot8 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
    var _closure1_slot9 = var2;
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
    var8 = 5;
    var8 = var6[var8];
    var8 = var7.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = var4.Map;
    var9 = var8.prototype;
    var9 = Object.create(var9, {constructor: {value: var8}});
    var14 = var9;
    var8 = new var14[var8](var13);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot6 = var8;
    var4 = var4.Set;
    var8 = var4.prototype;
    var8 = Object.create(var8, {constructor: {value: var4}});
    var14 = var8;
    var4 = new var14[var4](var13);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot7 = var4;
    var4 = 6;
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
                var1 = _closure1_slot8;
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
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var3 = this;
            var2 = var3.waitFor;
            var1 = _closure1_slot5;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(9);
        var1[0] = var5;
        var5 = {};
        var7 = 'getBadges';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                if(!(var1 == var4)) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                var3 = _closure1_slot5;
                var2 = var3.getCurrentUser;
                var3 = var2.bind(var3)();
                var5 = var1 == var3;
                var2 = undefined;
                if(var5) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                var2 = var3.id;
case 16:
                var4 = var2;
case 14:
                if(!(var1 != var4)) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                var3 = _closure1_slot6;
                var2 = var3.get;
                var5 = var2.bind(var3)(var4);
                if(!(var1 == var5)) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                var1 = new Array(0);
                _fun0004_ip = 22; continue _fun0004;
case 20:
                var2 = global;
                var4 = var2.Array;
                var3 = var4.from;
                var2 = var5.values;
                var2 = var2.bind(var5)();
                var1 = var3.bind(var4)(var2);
case 22:
                return var1;
case 18:
                var1 = new Array(0);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'hasCatalogFor';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot7;
            var2 = var3.has;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getBadgeById';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var6 = arg2;
                var3 = null;
                if(!(var3 == var6)) { _fun0005_ip = 14; continue _fun0005 }
case 15:
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var2 = var1.bind(var2)();
                var4 = var3 == var2;
                var1 = undefined;
                if(var4) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                var1 = var2.id;
case 16:
                var6 = var1;
case 14:
                var4 = var3 != var6;
                var1 = undefined;
                if(!var4) { _fun0005_ip = 23; continue _fun0005 }
case 12:
                var5 = _closure1_slot6;
                var4 = var5.get;
                var5 = var4.bind(var5)(var6);
                var3 = var3 == var5;
                var2 = undefined;
                if(var3) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                var4 = var5.get;
                var3 = arg1;
                var2 = var4.bind(var5)(var3);
case 24:
                var1 = var2;
case 23:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getSingleRequirementProgress';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = this;
                var3 = var4.getBadgeById;
                var2 = arg1;
                var1 = arg2;
                var4 = var3.bind(var4)(var2, var1);
                var1 = null;
                var5 = var1 == var4;
                var3 = undefined;
                var2 = undefined;
                if(var5) { _fun0006_ip = 26; continue _fun0006 }
case 17:
                var2 = var4.progress;
case 26:
                if(!(var1 != var2)) { _fun0006_ip = 9; continue _fun0006 }
case 27:
                var4 = var2.length;
                var1 = 0;
                if(!(var1 === var4)) { _fun0006_ip = 28; continue _fun0006 }
case 9:
                return var3;
case 28:
                var1 = var2[var1];
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getCurrentTier';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var5 = this;
                var4 = var5.getBadgeById;
                var3 = arg1;
                var2 = arg2;
                var2 = var4.bind(var5)(var3, var2);
                var _closure3_slot0 = var2;
                var5 = null;
                var6 = var5 == var2;
                var3 = undefined;
                var4 = undefined;
                if(var6) { _fun0007_ip = 19; continue _fun0007 }
case 26:
                var4 = var2.current_tier;
case 19:
                if(!(var5 == var4)) { _fun0007_ip = 10; continue _fun0007 }
case 29:
                return var3;
case 10:
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
        var1[5] = var5;
        var5 = {};
        var7 = 'getObtainedAt';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var7 = arg1;
                var6 = arg2;
                var5 = this;
                var1 = var5.getCurrentTier;
                var3 = var1.bind(var5)(var7, var6);
                var4 = null;
                var8 = var4 == var3;
                var1 = undefined;
                if(var8) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                var1 = var3.obtained_at;
case 30:
                if(!(var4 == var1)) { _fun0008_ip = 3; continue _fun0008 }
case 14:
                var3 = var5.getBadgeById;
                var3 = var3.bind(var5)(var7, var6);
                var4 = var4 == var3;
                var2 = undefined;
                if(var4) { _fun0008_ip = 11; continue _fun0008 }
case 32:
                var2 = var3.obtained_at;
case 11:
                var1 = var2;
case 3:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getNextTier';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var5 = this;
                var4 = var5.getBadgeById;
                var3 = arg1;
                var2 = arg2;
                var2 = var4.bind(var5)(var3, var2);
                var _closure3_slot0 = var2;
                var5 = null;
                var6 = var5 == var2;
                var3 = undefined;
                var4 = undefined;
                if(var6) { _fun0009_ip = 19; continue _fun0009 }
case 26:
                var4 = var2.next_tier;
case 19:
                if(!(var5 == var4)) { _fun0009_ip = 10; continue _fun0009 }
case 29:
                return var3;
case 10:
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
        var1[7] = var5;
        var5 = {};
        var7 = 'getRemainingToNextTier';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var4 = arg1;
                var3 = arg2;
                var2 = this;
                var1 = var2.getNextTier;
                var8 = var1.bind(var2)(var4, var3);
                var1 = var2.getSingleRequirementProgress;
                var2 = var1.bind(var2)(var4, var3);
                var3 = null;
                var4 = var3 == var8;
                var5 = 0;
                var1 = 0;
                if(var4) { _fun0010_ip = 33; continue _fun0010 }
case 19:
                var3 = var3 == var2;
                var1 = 0;
                if(var3) { _fun0010_ip = 33; continue _fun0010 }
case 9:
                var3 = global;
                var4 = var3.Math;
                var3 = var4.max;
                var7 = _closure1_slot9;
                var6 = undefined;
                var6 = var7.bind(var6)(var8);
                var2 = var2.current;
                var2 = var6 - var2;
                var1 = var3.bind(var4)(var5, var2);
case 33:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[8] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var4.bind(var1)(var8);
    var4 = 'BadgeDirectoryStore';
    var8['displayName'] = var4;
    var4 = 7;
    var4 = var6[var4];
    var13 = var7.bind(var1)(var4);
    var4 = {};
    var9 = function handleFetchSuccess(arg1) {
        var1 = arg1;
        var4 = var1.userId;
        var9 = var1.badges;
        var1 = global;
        var6 = var1.Map;
        var11 = _closure1_slot6;
        var5 = var6.prototype;
        var5 = Object.create(var5, {constructor: {value: var6}});
        var12 = var5;
        var3 = new var12[var6](var11, var10);
        var3 = var3 instanceof Object ? var3 : var5;
        var6 = var3.set;
        var8 = var1.Map;
        var7 = var9.map;
        var5 = function(arg1) {
            var2 = arg1;
            var3 = var2.badge_id;
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        };
        var11 = var7.bind(var9)(var5);
        var7 = var8.prototype;
        var7 = Object.create(var7, {constructor: {value: var8}});
        var12 = var7;
        var5 = new var12[var8](var11, var10);
        var5 = var5 instanceof Object ? var5 : var7;
        var5 = var6.bind(var3)(var4, var5);
        _closure1_slot6 = var3;
        var5 = var1.Set;
        var11 = _closure1_slot7;
        var3 = var5.prototype;
        var3 = Object.create(var3, {constructor: {value: var5}});
        var12 = var3;
        var1 = new var12[var5](var11, var10);
        var3 = var1 instanceof Object ? var1 : var3;
        var1 = var3.add;
        var1 = var1.bind(var3)(var4);
        _closure1_slot7 = var1;
        var1 = undefined;
        return var1;
    };
    var4['BADGE_DIRECTORY_FETCH_SUCCESS'] = var9;
    var9 = function handleBadgeFetchSuccess(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var5 = var1.userId;
            var7 = var1.badge;
            var3 = global;
            var6 = var3.Map;
            var10 = _closure1_slot6;
            var4 = var6.prototype;
            var4 = Object.create(var4, {constructor: {value: var6}});
            var11 = var4;
            var1 = new var11[var6](var10, var9);
            var1 = var1 instanceof Object ? var1 : var4;
            var4 = var1.get;
            var6 = var4.bind(var1)(var5);
            var4 = null;
            if(!(var4 == var6)) { _fun0011_ip = 34; continue _fun0011 }
case 35:
            var4 = var3.Map;
            var8 = var4.prototype;
            var8 = Object.create(var8, {constructor: {value: var4}});
            var11 = var8;
            var4 = new var11[var4](var10);
            var6 = var4 instanceof Object ? var4 : var8;
case 34:
            var3 = var3.Map;
            var4 = var3.prototype;
            var4 = Object.create(var4, {constructor: {value: var3}});
            var11 = var4;
            var10 = var6;
            var3 = new var11[var3](var10, var9);
            var4 = var3 instanceof Object ? var3 : var4;
            var6 = var4.set;
            var3 = var7.badge_id;
            var3 = var6.bind(var4)(var3, var7);
            var3 = var1.set;
            var3 = var3.bind(var1)(var5, var4);
            _closure1_slot6 = var1;
            var1 = undefined;
            return var1;
        }
    };
    var4['BADGE_FETCH_SUCCESS'] = var9;
    var5 = function handleReset() {
        var1 = global;
        var2 = var1.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var4 = var3;
        var2 = new var4[var2](var3);
        var3 = var2 instanceof Object ? var2 : var3;
        _closure1_slot6 = var3;
        var1 = var1.Set;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var4 = var3;
        var1 = new var4[var1](var3);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot7 = var1;
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
    var5 = 8;
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
// app/modules/badges/BadgeDirectoryStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
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
            _closure1_slot9 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot9 = var1;
    var4 = function getSingleRequirementThreshold(arg1) {
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
    var _closure1_slot10 = var4;
    var2 = function getObtainedAtFromBadge(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arg1;
            var3 = null;
            if(!(var3 == var2)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var1 = undefined;
            return var1;
case 11:
            var1 = var2.current_tier;
            var5 = var3 != var1;
            var1 = undefined;
            if(!var5) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var6 = var2.tier_obtained_at;
            var5 = var3 == var6;
            var4 = undefined;
            if(var5) { _fun0003_ip = 9; continue _fun0003 }
case 15:
            var5 = var2.current_tier;
            var4 = var6[var5];
case 9:
            var1 = var4;
case 13:
            if(!(var3 == var1)) { _fun0003_ip = 3; continue _fun0003 }
case 16:
            var1 = var2.obtained_at;
case 3:
            return var1;
        }
    };
    var _closure1_slot11 = var2;
    var5 = global;
    var11 = var5.Object;
    var10 = var11.defineProperty;
    var9 = {};
    var1 = true;
    var9['value'] = var1;
    var1 = '__esModule';
    var1 = var10.bind(var11)(var3, var1, var9);
    var1 = 0;
    var9 = var7[var1];
    var1 = undefined;
    var9 = var8.bind(var1)(var9);
    var _closure1_slot0 = var9;
    var9 = 1;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot1 = var9;
    var9 = 2;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot2 = var9;
    var9 = 3;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot3 = var9;
    var9 = 4;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var9 = 5;
    var9 = var7[var9];
    var9 = var8.bind(var1)(var9);
    var _closure1_slot5 = var9;
    var9 = var5.Map;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var15 = var10;
    var9 = new var15[var9](var14);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot6 = var9;
    var9 = var5.Set;
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var15 = var10;
    var9 = new var15[var9](var14);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot7 = var9;
    var5 = var5.Set;
    var9 = var5.prototype;
    var9 = Object.create(var9, {constructor: {value: var5}});
    var15 = var9;
    var5 = new var15[var5](var14);
    var5 = var5 instanceof Object ? var5 : var9;
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var9 = var5.Store;
    var5 = function(arg1) {
        var4 = function BadgeDirectoryStore() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
                var1 = _closure1_slot9;
                var1 = var1.bind(var3)();
                if(var1) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0004_ip = 19; continue _fun0004;
case 17:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 19:
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
        var1 = new Array(10);
        var1[0] = var5;
        var5 = {};
        var7 = 'getBadges';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                if(!(var1 == var4)) { _fun0005_ip = 20; continue _fun0005 }
case 12:
                var3 = _closure1_slot5;
                var2 = var3.getCurrentUser;
                var3 = var2.bind(var3)();
                var5 = var1 == var3;
                var2 = undefined;
                if(var5) { _fun0005_ip = 21; continue _fun0005 }
case 22:
                var2 = var3.id;
case 21:
                var4 = var2;
case 20:
                if(!(var1 != var4)) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                var3 = _closure1_slot6;
                var2 = var3.get;
                var5 = var2.bind(var3)(var4);
                if(!(var1 == var5)) { _fun0005_ip = 25; continue _fun0005 }
case 26:
                var1 = new Array(0);
                _fun0005_ip = 27; continue _fun0005;
case 25:
                var2 = global;
                var4 = var2.Array;
                var3 = var4.from;
                var2 = var5.values;
                var2 = var2.bind(var5)();
                var1 = var3.bind(var4)(var2);
case 27:
                return var1;
case 23:
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
        var7 = 'hasCatalogFetchErrorFor';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                if(!(var1 == var4)) { _fun0006_ip = 20; continue _fun0006 }
case 12:
                var3 = _closure1_slot5;
                var2 = var3.getCurrentUser;
                var3 = var2.bind(var3)();
                var5 = var1 == var3;
                var2 = undefined;
                if(var5) { _fun0006_ip = 21; continue _fun0006 }
case 22:
                var2 = var3.id;
case 21:
                var4 = var2;
case 20:
                var1 = var1 != var4;
                if(!var1) { _fun0006_ip = 28; continue _fun0006 }
case 29:
                var3 = _closure1_slot8;
                var2 = var3.has;
                var1 = var2.bind(var3)(var4);
case 28:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getBadgeById';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var6 = arg2;
                var3 = null;
                if(!(var3 == var6)) { _fun0007_ip = 20; continue _fun0007 }
case 12:
                var2 = _closure1_slot5;
                var1 = var2.getCurrentUser;
                var2 = var1.bind(var2)();
                var4 = var3 == var2;
                var1 = undefined;
                if(var4) { _fun0007_ip = 21; continue _fun0007 }
case 22:
                var1 = var2.id;
case 21:
                var6 = var1;
case 20:
                var4 = var3 != var6;
                var1 = undefined;
                if(!var4) { _fun0007_ip = 30; continue _fun0007 }
case 18:
                var5 = _closure1_slot6;
                var4 = var5.get;
                var5 = var4.bind(var5)(var6);
                var3 = var3 == var5;
                var2 = undefined;
                if(var3) { _fun0007_ip = 31; continue _fun0007 }
case 32:
                var4 = var5.get;
                var3 = arg1;
                var2 = var4.bind(var5)(var3);
case 31:
                var1 = var2;
case 30:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getSingleRequirementProgress';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
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
                if(var5) { _fun0008_ip = 33; continue _fun0008 }
case 22:
                var2 = var4.progress;
case 33:
                if(!(var1 != var2)) { _fun0008_ip = 9; continue _fun0008 }
case 34:
                var4 = var2.length;
                var1 = 0;
                if(!(var1 === var4)) { _fun0008_ip = 35; continue _fun0008 }
case 9:
                return var3;
case 35:
                var1 = var2[var1];
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getCurrentTier';
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
                if(var6) { _fun0009_ip = 24; continue _fun0009 }
case 33:
                var4 = var2.current_tier;
case 24:
                if(!(var5 == var4)) { _fun0009_ip = 10; continue _fun0009 }
case 36:
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
        var1[6] = var5;
        var5 = {};
        var7 = 'getObtainedAt';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var5 = this;
            var3 = _closure1_slot11;
            var4 = var5.getBadgeById;
            var2 = arg1;
            var1 = arg2;
            var2 = var4.bind(var5)(var2, var1);
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'getNextTier';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
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
                if(var6) { _fun0010_ip = 24; continue _fun0010 }
case 33:
                var4 = var2.next_tier;
case 24:
                if(!(var5 == var4)) { _fun0010_ip = 10; continue _fun0010 }
case 36:
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
        var1[8] = var5;
        var5 = {};
        var7 = 'getRemainingToNextTier';
        var5['key'] = var7;
        var6 = function value(arg1, arg2) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
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
                if(var4) { _fun0011_ip = 37; continue _fun0011 }
case 24:
                var3 = var3 == var2;
                var1 = 0;
                if(var3) { _fun0011_ip = 37; continue _fun0011 }
case 9:
                var3 = global;
                var4 = var3.Math;
                var3 = var4.max;
                var7 = _closure1_slot10;
                var6 = undefined;
                var6 = var7.bind(var6)(var8);
                var2 = var2.current;
                var2 = var6 - var2;
                var1 = var3.bind(var4)(var5, var2);
case 37:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[9] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var9 = var5.bind(var1)(var9);
    var5 = 'BadgeDirectoryStore';
    var9['displayName'] = var5;
    var5 = 7;
    var5 = var7[var5];
    var14 = var8.bind(var1)(var5);
    var5 = {};
    var10 = function handleFetchStart(arg1) {
        var1 = arg1;
        var3 = var1.userId;
        var1 = global;
        var5 = var1.Set;
        var6 = _closure1_slot8;
        var4 = var5.prototype;
        var4 = Object.create(var4, {constructor: {value: var5}});
        var7 = var4;
        var2 = new var7[var5](var6, var5);
        var2 = var2 instanceof Object ? var2 : var4;
        _closure1_slot8 = var2;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var5['BADGE_DIRECTORY_FETCH_START'] = var10;
    var10 = function handleFetchSuccess(arg1) {
        var1 = arg1;
        var3 = var1.userId;
        var9 = var1.badges;
        var2 = global;
        var6 = var2.Map;
        var11 = _closure1_slot6;
        var5 = var6.prototype;
        var5 = Object.create(var5, {constructor: {value: var6}});
        var12 = var5;
        var4 = new var12[var6](var11, var10);
        var4 = var4 instanceof Object ? var4 : var5;
        var6 = var4.set;
        var8 = var2.Map;
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
        var5 = var6.bind(var4)(var3, var5);
        _closure1_slot6 = var4;
        var6 = var2.Set;
        var11 = _closure1_slot7;
        var5 = var6.prototype;
        var5 = Object.create(var5, {constructor: {value: var6}});
        var12 = var5;
        var4 = new var12[var6](var11, var10);
        var5 = var4 instanceof Object ? var4 : var5;
        var4 = var5.add;
        var4 = var4.bind(var5)(var3);
        _closure1_slot7 = var4;
        var5 = var2.Set;
        var11 = _closure1_slot8;
        var4 = var5.prototype;
        var4 = Object.create(var4, {constructor: {value: var5}});
        var12 = var4;
        var2 = new var12[var5](var11, var10);
        var2 = var2 instanceof Object ? var2 : var4;
        _closure1_slot8 = var2;
        var1 = var2.delete;
        var1 = var1.bind(var2)(var3);
        var1 = undefined;
        return var1;
    };
    var5['BADGE_DIRECTORY_FETCH_SUCCESS'] = var10;
    var10 = function handleFetchFailure(arg1) {
        var1 = arg1;
        var4 = var1.userId;
        var1 = global;
        var5 = var1.Set;
        var6 = _closure1_slot8;
        var3 = var5.prototype;
        var3 = Object.create(var3, {constructor: {value: var5}});
        var7 = var3;
        var1 = new var7[var5](var6, var5);
        var3 = var1 instanceof Object ? var1 : var3;
        var1 = var3.add;
        var1 = var1.bind(var3)(var4);
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var5['BADGE_DIRECTORY_FETCH_FAILURE'] = var10;
    var10 = function handleBadgeFetchSuccess(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
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
            if(!(var4 == var6)) { _fun0012_ip = 38; continue _fun0012 }
case 39:
            var4 = var3.Map;
            var8 = var4.prototype;
            var8 = Object.create(var8, {constructor: {value: var4}});
            var11 = var8;
            var4 = new var11[var4](var10);
            var6 = var4 instanceof Object ? var4 : var8;
case 38:
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
    var5['BADGE_FETCH_SUCCESS'] = var10;
    var6 = function handleReset() {
        var1 = global;
        var2 = var1.Map;
        var3 = var2.prototype;
        var3 = Object.create(var3, {constructor: {value: var2}});
        var5 = var3;
        var2 = new var5[var2](var4);
        var3 = var2 instanceof Object ? var2 : var3;
        _closure1_slot6 = var3;
        var3 = var1.Set;
        var4 = var3.prototype;
        var4 = Object.create(var4, {constructor: {value: var3}});
        var5 = var4;
        var3 = new var5[var3](var4);
        var3 = var3 instanceof Object ? var3 : var4;
        _closure1_slot7 = var3;
        var1 = var1.Set;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var5 = var3;
        var1 = new var5[var1](var4);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var5['LOGOUT'] = var6;
    var6 = var9.prototype;
    var6 = Object.create(var6, {constructor: {value: var9}});
    var15 = var6;
    var13 = var5;
    var5 = new var15[var9](var14, var13, var12);
    var5 = var5 instanceof Object ? var5 : var6;
    var6 = 8;
    var7 = var7[var6];
    var6 = require;
    var8 = var6.bind(var1)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/badges/BadgeDirectoryStore.tsx';
    var6 = var7.bind(var8)(var6);
    var3['default'] = var5;
    var3['getSingleRequirementThreshold'] = var4;
    var3['getObtainedAtFromBadge'] = var2;
    return var1;
})();
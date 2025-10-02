// app/modules/user_affinities/UserAffinitiesV2Store.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
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
            _closure1_slot11 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = function recomputeAffinities() {
        var2 = global;
        var4 = var2.Map;
        var3 = _closure1_slot10;
        var6 = var3.userAffinities;
        var5 = var6.filter;
        var3 = function(arg1) {
            var3 = _closure1_slot5;
            var2 = var3.isBlockedOrIgnored;
            var1 = arg1;
            var1 = var1.otherUserId;
            var1 = var2.bind(var3)(var1);
            var1 = !var1;
            return var1;
        };
        var5 = var5.bind(var6)(var3);
        var3 = var5.map;
        var1 = function(arg1) {
            var2 = arg1;
            var3 = var2.otherUserId;
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            return var1;
        };
        var7 = var3.bind(var5)(var1);
        var3 = var4.prototype;
        var3 = Object.create(var3, {constructor: {value: var4}});
        var8 = var3;
        var1 = new var8[var4](var7, var6);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot7 = var1;
        var1 = undefined;
        return var1;
    };
    var _closure1_slot12 = var1;
    var2 = global;
    var10 = var2.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var1 = true;
    var8['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var8);
    var10 = 0;
    var8 = var6[var10];
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
    var8 = 6;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var8 = var8.USER_AFFINITY_TTL;
    var _closure1_slot6 = var8;
    var8 = var2.Map;
    var9 = var8.prototype;
    var9 = Object.create(var9, {constructor: {value: var8}});
    var15 = var9;
    var8 = new var15[var8](var14);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot7 = var8;
    var8 = false;
    var _closure1_slot8 = var8;
    var9 = var2.Object;
    var8 = var9.freeze;
    var2 = {};
    var11 = new Array(0);
    var2['userAffinities'] = var11;
    var2['lastFetched'] = var10;
    var8 = var8.bind(var9)(var2);
    var _closure1_slot9 = var8;
    var2 = {};
    var14 = var2;
    var13 = var8;
    var8 = copyDataProperties(var14, var13);
    var _closure1_slot10 = var2;
    var2 = 7;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var8 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function UserAffinitiesV2Store() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
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
                var1 = _closure1_slot11;
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
                var6 = _closure1_slot3;
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
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = arg1;
                var4 = this;
                var5 = var4.waitFor;
                var3 = _closure1_slot5;
                var3 = var5.bind(var4)(var3);
                var3 = null;
                if(!(var3 != var2)) { _fun0003_ip = 5; continue _fun0003 }
case 9:
                var5 = _closure1_slot10;
                var3 = var2.userAffinities;
                var5['userAffinities'] = var3;
                var3 = _closure1_slot10;
                var2 = var2.lastFetched;
                var3['lastFetched'] = var2;
                var3 = _closure1_slot12;
                var2 = undefined;
                var2 = var3.bind(var2)();
case 5:
                var3 = var4.syncWith;
                var5 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var5;
                var1 = _closure1_slot12;
                var1 = var3.bind(var4)(var2, var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(9);
        var1[0] = var5;
        var5 = {};
        var7 = 'shouldFetch';
        var5['key'] = var7;
        var7 = function value() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var2 = _closure1_slot8;
                if(var2) { _fun0004_ip = 7; continue _fun0004 }
case 10:
                var2 = global;
                var3 = var2.Date;
                var2 = var3.now;
                var3 = var2.bind(var3)();
                var2 = _closure1_slot10;
                var2 = var2.lastFetched;
                var2 = var3 - var2;
                var1 = _closure1_slot6;
                var1 = var2 > var1;
                return var1;
case 7:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'isFetching';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot8;
            return var1;
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getUserAffinities';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot10;
            var1 = var1.userAffinities;
            return var1;
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getUserAffinitiesMap';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot7;
            return var1;
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'compare';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var3 = _closure1_slot7;
                var2 = var3.get;
                var1 = arg2;
                var1 = var2.bind(var3)(var1);
                var4 = null;
                var2 = var4 == var1;
                var6 = undefined;
                if(var2) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                var6 = var1.communicationProbability;
case 11:
                var7 = var4 != var6;
                var1 = 0;
                if(!var7) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                var1 = var6;
case 13:
                var7 = _closure1_slot7;
                var6 = var7.get;
                var5 = arg1;
                var5 = var6.bind(var7)(var5);
                var6 = var4 == var5;
                var3 = undefined;
                if(var6) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                var3 = var5.communicationProbability;
case 15:
                var4 = var4 != var3;
                var2 = 0;
                if(!var4) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                var2 = var3;
case 17:
                var1 = var1 - var2;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[5] = var5;
        var5 = {};
        var7 = 'getUserAffinity';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var3 = _closure1_slot7;
            var2 = var3.get;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var5['value'] = var7;
        var1[6] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            var1 = _closure1_slot10;
            return var1;
        };
        var5['value'] = var7;
        var1[7] = var5;
        var5 = {};
        var7 = 'isHighlyAffinedVCUser';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var3 = _closure1_slot7;
                var2 = var3.get;
                var1 = arg1;
                var3 = var2.bind(var3)(var1);
                var2 = null;
                var4 = var2 == var3;
                var1 = undefined;
                if(var4) { _fun0006_ip = 11; continue _fun0006 }
case 12:
                var1 = var3.vcProbability;
case 11:
                var3 = var2 != var1;
                var2 = 0;
                if(!var3) { _fun0006_ip = 13; continue _fun0006 }
case 14:
                var2 = var1;
case 13:
                var1 = 0.5;
                var1 = var2 > var1;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[8] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var8 = var2.bind(var1)(var8);
    var2 = 'UserAffinitiesV2Store';
    var8['displayName'] = var2;
    var2 = 'UserAffinitiesStoreV2';
    var8['persistKey'] = var2;
    var2 = 8;
    var2 = var6[var2];
    var14 = var7.bind(var1)(var2);
    var2 = {};
    var9 = function handleLoadUserAffinities() {
        var1 = true;
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOAD_USER_AFFINITIES_V2'] = var9;
    var9 = function handleLoadUserAffinitiesSuccess(arg1) {
        var1 = arg1;
        var3 = var1.affineUsers;
        var4 = _closure1_slot10;
        var2 = global;
        var5 = var2.Date;
        var2 = var5.now;
        var2 = var2.bind(var5)();
        var4['lastFetched'] = var2;
        var2 = false;
        _closure1_slot8 = var2;
        var2 = _closure1_slot10;
        var2['userAffinities'] = var3;
        var2 = _closure1_slot12;
        var1 = undefined;
        var2 = var2.bind(var1)();
        return var1;
    };
    var2['LOAD_USER_AFFINITIES_V2_SUCCESS'] = var9;
    var9 = function handleLoadUserAffinitiesFailure() {
        var1 = false;
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOAD_USER_AFFINITIES_V2_FAILURE'] = var9;
    var4 = function handleLogout() {
        var1 = {};
        var4 = _closure1_slot9;
        var5 = var1;
        var3 = copyDataProperties(var5, var4);
        _closure1_slot10 = var1;
        var1 = global;
        var1 = var1.Map;
        var3 = var1.prototype;
        var3 = Object.create(var3, {constructor: {value: var1}});
        var6 = var3;
        var1 = new var6[var1](var5);
        var1 = var1 instanceof Object ? var1 : var3;
        _closure1_slot7 = var1;
        var1 = false;
        _closure1_slot8 = var1;
        var1 = undefined;
        return var1;
    };
    var2['LOGOUT'] = var4;
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
    var4 = 'modules/user_affinities/UserAffinitiesV2Store.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
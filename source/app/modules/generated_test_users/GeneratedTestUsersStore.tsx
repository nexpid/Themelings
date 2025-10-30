// app/modules/generated_test_users/GeneratedTestUsersStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
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
            _closure1_slot7 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function handleAddUser(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var6 = arg1;
            var2 = _closure1_slot6;
            var3 = var2.users;
            var2 = null;
            if(!(var2 == var3)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = _closure1_slot6;
            var2 = global;
            var2 = var2.Map;
            var4 = var2.prototype;
            var4 = Object.create(var4, {constructor: {value: var2}});
            var9 = var4;
            var2 = new var9[var2](var8);
            var2 = var2 instanceof Object ? var2 : var4;
            var3['users'] = var2;
case 6:
            var2 = _closure1_slot6;
            var4 = var2.users;
            var3 = var4.set;
            var2 = var6.id;
            var1 = _closure1_slot5;
            var5 = var1.prototype;
            var5 = Object.create(var5, {constructor: {value: var1}});
            var9 = var5;
            var8 = var6;
            var1 = new var9[var1](var8, var7);
            var1 = var1 instanceof Object ? var1 : var5;
            var1 = var3.bind(var4)(var2, var1);
            var1 = undefined;
            return var1;
        }
    };
    var _closure1_slot8 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var5[var1];
    var1 = undefined;
    var2 = var6.bind(var1)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot1 = var2;
    var2 = 2;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 4;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 5;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = {'pools': null, 'users': null};
    var _closure1_slot6 = var2;
    var2 = 6;
    var2 = var5[var2];
    var2 = var6.bind(var1)(var2);
    var7 = var2.PersistedStore;
    var2 = function(arg1) {
        var4 = function GeneratedTestUsersStore() {
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
                var1 = _closure1_slot7;
                var1 = var1.bind(var3)();
                if(var1) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                var7 = var9.apply;
                var5 = arguments;
                var1 = var5;
                var1 = var7.bind(var9)(var4, var1);
                _fun0003_ip = 10; continue _fun0003;
case 8:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
                var6 = var6.bind(var3)(var4);
                var6 = var6.constructor;
                var5 = arguments;
                var1 = var7.bind(var8)(var9, var5, var6);
case 10:
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
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var1 = arg1;
                var3 = null;
                if(!(var3 != var1)) { _fun0004_ip = 11; continue _fun0004 }
case 12:
                var2 = var1.pools;
                if(!(var3 != var2)) { _fun0004_ip = 13; continue _fun0004 }
case 7:
                var4 = _closure1_slot6;
                var2 = global;
                var6 = var2.Map;
                var7 = var2.Object;
                var5 = var7.entries;
                var2 = var1.pools;
                var8 = var5.bind(var7)(var2);
                var5 = var6.prototype;
                var5 = Object.create(var5, {constructor: {value: var6}});
                var9 = var5;
                var2 = new var9[var6](var8, var7);
                var2 = var2 instanceof Object ? var2 : var5;
                var4['pools'] = var2;
case 13:
                var2 = var1.users;
                if(!(var3 != var2)) { _fun0004_ip = 11; continue _fun0004 }
case 14:
                var2 = _closure1_slot6;
                var3 = global;
                var4 = var3.Map;
                var5 = var3.Object;
                var3 = var5.entries;
                var1 = var1.users;
                var8 = var3.bind(var5)(var1);
                var3 = var4.prototype;
                var3 = Object.create(var3, {constructor: {value: var4}});
                var9 = var3;
                var1 = new var9[var4](var8, var7);
                var1 = var1 instanceof Object ? var1 : var3;
                var2['users'] = var1;
case 11:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(6);
        var1[0] = var5;
        var5 = {};
        var7 = 'getState';
        var5['key'] = var7;
        var7 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = {};
                var2 = _closure1_slot6;
                var4 = var2.pools;
                var2 = null;
                var5 = var2 != var4;
                var4 = null;
                if(!var5) { _fun0005_ip = 15; continue _fun0005 }
case 16:
                var5 = global;
                var7 = var5.Object;
                var6 = var7.fromEntries;
                var5 = _closure1_slot6;
                var5 = var5.pools;
                var4 = var6.bind(var7)(var5);
case 15:
                var1['pools'] = var4;
                var4 = _closure1_slot6;
                var4 = var4.users;
                var4 = var2 != var4;
                var2 = null;
                if(!var4) { _fun0005_ip = 17; continue _fun0005 }
case 18:
                var4 = global;
                var5 = var4.Object;
                var4 = var5.fromEntries;
                var3 = _closure1_slot6;
                var3 = var3.users;
                var2 = var4.bind(var5)(var3);
case 17:
                var1['users'] = var2;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = 'getUsersForPool';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = arg1;
                var _closure3_slot0 = var2;
                var2 = global;
                var4 = var2.Array;
                var3 = var4.from;
                var2 = _closure1_slot6;
                var7 = var2.users;
                var5 = null;
                var6 = var5 == var7;
                var2 = undefined;
                if(var6) { _fun0006_ip = 15; continue _fun0006 }
case 19:
                var6 = var7.values;
                var2 = var6.bind(var7)();
case 15:
                if(!(var5 == var2)) { _fun0006_ip = 20; continue _fun0006 }
case 21:
                var2 = new Array(0);
case 20:
                var3 = var3.bind(var4)(var2);
                var2 = var3.filter;
                var1 = function(arg1) {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                        var1 = _closure1_slot6;
                        var6 = var1.pools;
                        var3 = null;
                        var2 = var3 == var6;
                        var1 = undefined;
                        if(var2) { _fun0007_ip = 5; continue _fun0007 }
case 22:
                        var5 = var6.get;
                        var2 = _closure3_slot0;
                        var2 = var5.bind(var6)(var2);
                        var3 = var3 == var2;
                        var1 = undefined;
                        if(var3) { _fun0007_ip = 5; continue _fun0007 }
case 23:
                        var4 = var2.userIds;
                        var3 = var4.includes;
                        var2 = arg1;
                        var2 = var2.id;
                        var1 = var3.bind(var4)(var2);
case 5:
                        return var1;
                    }
                };
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'getPool';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = _closure1_slot6;
                var5 = var1.pools;
                var1 = null;
                var3 = var1 == var5;
                var2 = undefined;
                if(var3) { _fun0008_ip = 24; continue _fun0008 }
case 22:
                var4 = var5.get;
                var3 = arg1;
                var2 = var4.bind(var5)(var3);
case 24:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0008_ip = 25; continue _fun0008 }
case 19:
                var1 = var2;
case 25:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'getUser';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = _closure1_slot6;
                var5 = var1.users;
                var1 = null;
                var3 = var1 == var5;
                var2 = undefined;
                if(var3) { _fun0009_ip = 24; continue _fun0009 }
case 22:
                var4 = var5.get;
                var3 = arg1;
                var2 = var4.bind(var5)(var3);
case 24:
                var3 = var1 != var2;
                var1 = null;
                if(!var3) { _fun0009_ip = 25; continue _fun0009 }
case 19:
                var1 = var2;
case 25:
                return var1;
            }
        };
        var5['value'] = var7;
        var1[4] = var5;
        var5 = {};
        var7 = 'getPools';
        var5['key'] = var7;
        var6 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var1 = _closure1_slot6;
                var3 = var1.pools;
                var1 = null;
                if(!(var1 !== var3)) { _fun0010_ip = 26; continue _fun0010 }
case 27:
                var3 = global;
                var4 = var3.Array;
                var3 = var4.from;
                var2 = _closure1_slot6;
                var5 = var2.pools;
                var2 = var5.values;
                var2 = var2.bind(var5)();
                var1 = var3.bind(var4)(var2);
case 26:
                return var1;
            }
        };
        var5['value'] = var6;
        var1[5] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var7 = var2.bind(var1)(var7);
    var2 = 'GeneratedTestUsersStore';
    var7['displayName'] = var2;
    var7['persistKey'] = var2;
    var2 = 7;
    var2 = var5[var2];
    var11 = var6.bind(var1)(var2);
    var2 = {};
    var8 = function handleFetchPoolByIdSuccess(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var1 = arg1;
            var6 = var1.pool;
            var3 = var1.users;
            var2 = _closure1_slot6;
            var4 = var2.pools;
            var2 = null;
            if(!(var2 == var4)) { _fun0011_ip = 3; continue _fun0011 }
case 28:
            var4 = _closure1_slot6;
            var2 = global;
            var2 = var2.Map;
            var5 = var2.prototype;
            var5 = Object.create(var5, {constructor: {value: var2}});
            var9 = var5;
            var2 = new var9[var2](var8);
            var2 = var2 instanceof Object ? var2 : var5;
            var4['pools'] = var2;
case 3:
            var2 = _closure1_slot6;
            var5 = var2.pools;
            var4 = var5.set;
            var2 = var6.id;
            var2 = var4.bind(var5)(var2, var6);
            var2 = var3.forEach;
            var1 = _closure1_slot8;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        }
    };
    var2['GENERATED_POOL_BY_ID_FETCH_SUCCESS'] = var8;
    var4 = function handleRemovePool(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var1 = arg1;
            var4 = var1.poolId;
            var1 = _closure1_slot6;
            var7 = var1.pools;
            var2 = null;
            var6 = var2 == var7;
            var1 = undefined;
            var5 = undefined;
            if(var6) { _fun0012_ip = 29; continue _fun0012 }
case 30:
            var6 = var7.get;
            var5 = var6.bind(var7)(var4);
case 29:
            if(!(var2 != var5)) { _fun0012_ip = 31; continue _fun0012 }
case 25:
            var6 = var5.userIds;
            var7 = var6.length;
            var6 = 0;
            if(!(var7 > var6)) { _fun0012_ip = 32; continue _fun0012 }
case 33:
            var7 = var5.userIds;
            var6 = var7.forEach;
            var5 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                    var1 = _closure1_slot6;
                    var3 = var1.users;
                    var1 = null;
                    if(!(var1 != var3)) { _fun0013_ip = 34; continue _fun0013 }
case 27:
                    var2 = var3.delete;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
case 34:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var6.bind(var7)(var5);
case 32:
            var3 = _closure1_slot6;
            var3 = var3.pools;
            if(!(var2 != var3)) { _fun0012_ip = 35; continue _fun0012 }
case 10:
            var2 = var3.delete;
            var2 = var2.bind(var3)(var4);
case 35:
            return var1;
case 31:
            var1 = false;
            return var1;
        }
    };
    var2['GENERATED_POOL_REMOVE_FROM_LIST'] = var4;
    var4 = var7.prototype;
    var4 = Object.create(var4, {constructor: {value: var7}});
    var12 = var4;
    var10 = var2;
    var2 = new var12[var7](var11, var10, var9);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 8;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/generated_test_users/GeneratedTestUsersStore.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
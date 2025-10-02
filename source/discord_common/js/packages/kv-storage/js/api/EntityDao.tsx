// discord_common/js/packages/kv-storage/js/api/EntityDao.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var4.bind(var1)(var2);
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = function() {
        var5 = function EntityDao(arg1, arg2, arg3) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var2 = arg1;
                var8 = arguments[3];
                var3 = this;
                var1 = undefined;
                if(!(var8 === var1)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var8 = true;
case 2:
                var6 = _closure1_slot2;
                var5 = _closure2_slot0;
                var5 = var6.bind(var1)(var3, var5);
                var3['originalPrefix'] = var2;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 2;
                var4 = var6[var4];
                var4 = var5.bind(var1)(var4);
                var7 = var4.Table;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = var7.prototype;
                var4 = Object.create(var2, {constructor: {value: var7}});
                var11 = arg2;
                var10 = arg3;
                var13 = var4;
                var12 = var6;
                var9 = var8;
                var2 = new var13[var7](var12, var11, var10, var9, var8);
                var2 = var2 instanceof Object ? var2 : var4;
                var3['table'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var1 = {};
        var3 = 'prefix';
        var1['key'] = var3;
        var3 = function get() {
            var1 = this;
            var1 = var1.table;
            var1 = var1.prefix;
            return var1;
        };
        var1['get'] = var3;
        var3 = new Array(17);
        var3[0] = var1;
        var1 = {};
        var6 = 'withoutLogging';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var6 = _closure2_slot0;
            var10 = var1.originalPrefix;
            var2 = var1.table;
            var9 = var2.tableId;
            var1 = var1.table;
            var8 = var1.database;
            var1 = var6.prototype;
            var2 = Object.create(var1, {constructor: {value: var6}});
            var7 = false;
            var11 = var2;
            var1 = new var11[var6](var10, var9, var8, var7, var6);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1['value'] = var6;
        var3[1] = var1;
        var1 = {};
        var6 = 'get';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1.table;
            var2 = var3.get;
            var1 = new Array(1);
            var4 = arg1;
            var1[0] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var3[2] = var1;
        var1 = {};
        var6 = 'getMany';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var4 = var1.table;
            var3 = var4.getMany;
            var2 = new Array(0);
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var6;
        var3[3] = var1;
        var1 = {};
        var6 = 'getRange';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            var1 = this;
            var5 = var1.table;
            var4 = var5.getRange;
            var3 = new Array(1);
            var1 = arg1;
            var3[0] = var1;
            var2 = new Array(1);
            var1 = arg2;
            var2[0] = var1;
            var1 = arg3;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        };
        var1['value'] = var6;
        var3[4] = var1;
        var1 = {};
        var6 = 'getKvEntries';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.table;
            var1 = var2.getKvEntries;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var6;
        var3[5] = var1;
        var1 = {};
        var6 = 'getMapEntries';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.table;
            var1 = var2.getMapEntries;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var6;
        var3[6] = var1;
        var1 = {};
        var6 = 'getIds';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var3 = var1.table;
            var2 = var3.getChildIds;
            var1 = new Array(0);
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var3[7] = var1;
        var1 = {};
        var6 = 'getParentId';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1.table;
            var2 = var3.getParentId;
            var1 = [null];
            var4 = arg1;
            var1[1] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var3[8] = var1;
        var1 = {};
        var6 = 'put';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arguments[1];
                var4 = this;
                var3 = arg1;
                var _closure3_slot0 = var3;
                var6 = undefined;
                if(!(var2 === var6)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 3;
                var3 = var7[var3];
                var3 = var5.bind(var6)(var3);
                var3 = var3.ConflictOptions;
                var2 = var3.Replace;
case 4:
                var _closure3_slot1 = var2;
                var3 = var4.transaction;
                var7 = var4.prefix;
                var2 = global;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var5 = '';
                var2 = ' put';
                var2 = var6.bind(var5)(var7, var2);
                var1 = function(arg1) {
                    var4 = arg1;
                    var3 = var4.put;
                    var2 = _closure3_slot0;
                    var1 = _closure3_slot1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            }
        };
        var1['value'] = var6;
        var3[9] = var1;
        var1 = {};
        var6 = 'putAll';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = arguments[1];
                var4 = this;
                var3 = arg1;
                var _closure3_slot0 = var3;
                var6 = undefined;
                if(!(var2 === var6)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var3 = 3;
                var3 = var7[var3];
                var3 = var5.bind(var6)(var3);
                var3 = var3.ConflictOptions;
                var2 = var3.Replace;
case 4:
                var _closure3_slot1 = var2;
                var3 = var4.transaction;
                var7 = var4.prefix;
                var2 = global;
                var2 = var2.HermesInternal;
                var6 = var2.concat;
                var5 = '';
                var2 = ' putAll';
                var2 = var6.bind(var5)(var7, var2);
                var1 = function(arg1) {
                    var4 = arg1;
                    var3 = var4.putAll;
                    var2 = _closure3_slot0;
                    var1 = _closure3_slot1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1 = var3.bind(var4)(var1, var2);
                return var1;
            }
        };
        var1['value'] = var6;
        var3[10] = var1;
        var1 = {};
        var6 = 'replaceAll';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var4 = this;
            var2 = arg1;
            var _closure3_slot0 = var2;
            var3 = var4.transaction;
            var7 = var4.prefix;
            var2 = global;
            var2 = var2.HermesInternal;
            var6 = var2.concat;
            var5 = '';
            var2 = ' replaceAll';
            var2 = var6.bind(var5)(var7, var2);
            var1 = function(arg1) {
                var3 = arg1;
                var2 = var3.replaceAll;
                var1 = _closure3_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1['value'] = var6;
        var3[11] = var1;
        var1 = {};
        var6 = 'delete';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var4 = this;
            var2 = arg1;
            var _closure3_slot0 = var2;
            var3 = var4.transaction;
            var7 = var4.prefix;
            var2 = global;
            var2 = var2.HermesInternal;
            var6 = var2.concat;
            var5 = '';
            var2 = ' delete';
            var2 = var6.bind(var5)(var7, var2);
            var1 = function(arg1) {
                var3 = arg1;
                var2 = var3.delete;
                var1 = _closure3_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1['value'] = var6;
        var3[12] = var1;
        var1 = {};
        var6 = 'transaction';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = this;
            var4 = var2.table;
            var3 = var4.transaction;
            var2 = function(arg1) {
                var3 = _closure3_slot0;
                var4 = _closure1_slot5;
                var1 = var4.prototype;
                var2 = Object.create(var1, {constructor: {value: var4}});
                var5 = arg1;
                var6 = var2;
                var1 = new var6[var4](var5, var4);
                var2 = var1 instanceof Object ? var1 : var2;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var6;
        var3[13] = var1;
        var1 = {};
        var6 = 'upgradeTransaction';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var3 = _closure1_slot5;
            var1 = this;
            var4 = var1.table;
            var2 = var4.upgradeTransaction;
            var1 = arg1;
            var5 = var2.bind(var4)(var1);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var6 = var2;
            var1 = new var6[var3](var5, var4);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1['value'] = var6;
        var3[14] = var1;
        var1 = {};
        var6 = 'getManySyncUnsafe';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var4 = var1.table;
            var3 = var4.getManySyncUnsafe;
            var2 = new Array(0);
            var1 = arg1;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var6;
        var3[15] = var1;
        var1 = {};
        var6 = 'getMapEntriesSyncUnsafe';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var2 = var1.table;
            var1 = var2.getMapEntriesSyncUnsafe;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var6;
        var3[16] = var1;
        var1 = {};
        var6 = 'cell';
        var1['key'] = var6;
        var2 = function value(arg1, arg2) {
            var2 = arg1;
            var1 = {};
            var4 = var2.id;
            var3 = new Array(1);
            var3[0] = var4;
            var1['key'] = var3;
            var1['data'] = var2;
            var2 = arg2;
            var1['generation'] = var2;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var5, var3, var2);
        return var1;
    };
    var4 = var2.bind(var1)();
    var _closure1_slot4 = var4;
    var2 = function() {
        var5 = function EntityDaoTransaction(arg1) {
            var3 = this;
            var4 = _closure1_slot2;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = arg1;
            var3['transaction'] = var2;
            return var1;
        };
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var1 = {};
        var3 = 'put';
        var1['key'] = var3;
        var3 = function value(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = arguments[1];
                var3 = undefined;
                if(!(var4 === var3)) { _fun0004_ip = 6; continue _fun0004 }
case 7:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 3;
                var1 = var5[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.ConflictOptions;
                var4 = var1.Replace;
case 6:
                var1 = this;
                var3 = var1.transaction;
                var2 = var3.put;
                var7 = _closure1_slot4;
                var6 = var7.cell;
                var5 = arg1;
                var1 = null;
                var1 = var6.bind(var7)(var5, var1);
                var1 = var2.bind(var3)(var1, var4);
                return var1;
            }
        };
        var1['value'] = var3;
        var3 = new Array(4);
        var3[0] = var1;
        var1 = {};
        var6 = 'putAll';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var6 = arg1;
                var4 = arguments[1];
                var3 = undefined;
                if(!(var4 === var3)) { _fun0005_ip = 8; continue _fun0005 }
case 9:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 3;
                var1 = var5[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.ConflictOptions;
                var4 = var1.Replace;
case 8:
                var1 = this;
                var3 = var1.transaction;
                var2 = var3.putAll;
                var5 = var6.map;
                var1 = function(arg1) {
                    var4 = _closure1_slot4;
                    var3 = var4.cell;
                    var2 = arg1;
                    var1 = null;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var1 = var5.bind(var6)(var1);
                var1 = var2.bind(var3)(var1, var4);
                return var1;
            }
        };
        var1['value'] = var6;
        var3[1] = var1;
        var1 = {};
        var6 = 'replaceAll';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var3 = this;
            var1 = var3.delete;
            var1 = var1.bind(var3)();
            var2 = var3.putAll;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var3[2] = var1;
        var1 = {};
        var6 = 'delete';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var2 = this;
                var1 = undefined;
                var3 = arguments.length;
                var1 = 0;
                if(!(var1 !== var3)) { _fun0006_ip = 10; continue _fun0006 }
case 11:
                var4 = var2.transaction;
                var3 = var4.delete;
                var1 = new Array(1);
                var5 = arg1;
                var1[0] = var5;
                var1 = var3.bind(var4)(var1);
                _fun0006_ip = 12; continue _fun0006;
case 10:
                var4 = var2.transaction;
                var3 = var4.delete;
                var2 = new Array(0);
                var1 = var3.bind(var4)(var2);
case 12:
                return var1;
            }
        };
        var1['value'] = var6;
        var3[3] = var1;
        var1 = {};
        var6 = 'fromDatabaseTransaction';
        var1['key'] = var6;
        var2 = function value(arg1, arg2, arg3) {
            var3 = _closure2_slot0;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var2);
            var6 = var1.TableTransaction;
            var1 = var6.prototype;
            var2 = Object.create(var1, {constructor: {value: var6}});
            var9 = arg1;
            var8 = arg2;
            var7 = arg3;
            var10 = var2;
            var1 = new var10[var6](var9, var8, var7, var6);
            var9 = var1 instanceof Object ? var1 : var2;
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var10 = var2;
            var1 = new var10[var3](var9, var8);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var5, var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var _closure1_slot5 = var2;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/kv-storage/js/api/EntityDao.tsx';
    var5 = var6.bind(var7)(var5);
    var3['EntityDao'] = var4;
    var3['EntityDaoTransaction'] = var2;
    return var1;
})();
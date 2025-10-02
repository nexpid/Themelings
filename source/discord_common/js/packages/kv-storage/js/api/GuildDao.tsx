// discord_common/js/packages/kv-storage/js/api/GuildDao.tsx
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
        var4 = function GuildDao(arg1, arg2, arg3) {
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
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var1 = {};
        var2 = 'prefix';
        var1['key'] = var2;
        var2 = function get() {
            var1 = this;
            var1 = var1.table;
            var1 = var1.prefix;
            return var1;
        };
        var1['get'] = var2;
        var2 = new Array(18);
        var2[0] = var1;
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
        var2[1] = var1;
        var1 = {};
        var6 = 'get';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var1 = this;
            var3 = var1.table;
            var2 = var3.get;
            var1 = new Array(2);
            var4 = arg1;
            var1[0] = var4;
            var4 = arg2;
            var1[1] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'getMany';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var1 = this;
            var4 = var1.table;
            var3 = var4.getMany;
            var2 = new Array(1);
            var1 = arg1;
            var2[0] = var1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'getRange';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3, arg4) {
            var1 = arg1;
            var2 = this;
            var5 = var2.table;
            var4 = var5.getRange;
            var3 = new Array(2);
            var3[0] = var1;
            var2 = arg2;
            var3[1] = var2;
            var2 = new Array(2);
            var2[0] = var1;
            var1 = arg3;
            var2[1] = var1;
            var1 = arg4;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
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
        var2[5] = var1;
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
        var2[6] = var1;
        var1 = {};
        var6 = 'getIds';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var1 = this;
            var3 = var1.table;
            var2 = var3.getChildIds;
            var1 = new Array(1);
            var4 = arg1;
            var1[0] = var4;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var2[7] = var1;
        var1 = {};
        var6 = 'getGuildIds';
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
        var2[8] = var1;
        var1 = {};
        var6 = 'getGuildId';
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
        var2[9] = var1;
        var1 = {};
        var6 = 'put';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var7 = arguments[3];
                var6 = this;
                var3 = undefined;
                if(!(var7 === var3)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 3;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.ConflictOptions;
                var7 = var1.Replace;
case 4:
                var5 = var6.putWithGeneration;
                var12 = arg1;
                var11 = arg2;
                var10 = arg3;
                var9 = null;
                var13 = var6;
                var8 = var7;
                var1 = var13[var5](var12, var11, var10, var9, var8, var7);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[10] = var1;
        var1 = {};
        var6 = 'putWithGeneration';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3, arg4) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var4 = arguments[4];
                var3 = undefined;
                if(!(var4 === var3)) { _fun0003_ip = 6; continue _fun0003 }
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
                var3 = var1.table;
                var2 = var3.put;
                var1 = {};
                var5 = new Array(2);
                var6 = arg1;
                var5[0] = var6;
                var6 = arg2;
                var5[1] = var6;
                var1['key'] = var5;
                var5 = arg3;
                var1['data'] = var5;
                var5 = arg4;
                var1['generation'] = var5;
                var1 = var2.bind(var3)(var1, var4);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[11] = var1;
        var1 = {};
        var6 = 'delete';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var5 = arg1;
                var1 = this;
                var2 = undefined;
                var3 = arguments.length;
                var2 = 0;
                if(!(var2 !== var3)) { _fun0004_ip = 8; continue _fun0004 }
case 2:
                var2 = 1;
                if(!(var2 !== var3)) { _fun0004_ip = 9; continue _fun0004 }
case 10:
                var4 = var1.table;
                var3 = var4.delete;
                var2 = new Array(2);
                var2[0] = var5;
                var6 = arg2;
                var2[1] = var6;
                var2 = var3.bind(var4)(var2);
                return var2;
case 9:
                var4 = var1.table;
                var3 = var4.delete;
                var2 = new Array(1);
                var2[0] = var5;
                var2 = var3.bind(var4)(var2);
                return var2;
case 8:
                var3 = var1.table;
                var2 = var3.delete;
                var1 = new Array(0);
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var1['value'] = var6;
        var2[12] = var1;
        var1 = {};
        var6 = 'deleteGeneration';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var1 = this;
            var5 = var1.table;
            var4 = var5.deleteGeneration;
            var3 = new Array(0);
            var2 = arg1;
            var1 = arg2;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
        };
        var1['value'] = var6;
        var2[13] = var1;
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
                var4 = _closure1_slot4;
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
        var2[14] = var1;
        var1 = {};
        var6 = 'upgradeTransaction';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var3 = _closure1_slot4;
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
        var2[15] = var1;
        var1 = {};
        var6 = 'getManySyncUnsafe';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var1 = this;
            var4 = var1.table;
            var3 = var4.getManySyncUnsafe;
            var2 = new Array(1);
            var1 = arg1;
            var2[0] = var1;
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var1['value'] = var6;
        var2[16] = var1;
        var1 = {};
        var6 = 'getMapEntriesSyncUnsafe';
        var1['key'] = var6;
        var5 = function value() {
            var1 = this;
            var2 = var1.table;
            var1 = var2.getMapEntriesSyncUnsafe;
            var1 = var1.bind(var2)();
            return var1;
        };
        var1['value'] = var5;
        var2[17] = var1;
        var1 = undefined;
        var1 = var3.bind(var1)(var4, var2);
        return var1;
    };
    var4 = var2.bind(var1)();
    var2 = function() {
        var5 = function GuildDaoTransaction(arg1) {
            var3 = this;
            var4 = _closure1_slot2;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = arg1;
            var3['state'] = var2;
            return var1;
        };
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var1 = {};
        var3 = 'put';
        var1['key'] = var3;
        var3 = function value(arg1, arg2, arg3) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var8 = arguments[3];
                var7 = this;
                var1 = undefined;
                if(!(var8 === var1)) { _fun0005_ip = 4; continue _fun0005 }
case 5:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 3;
                var2 = var4[var2];
                var2 = var3.bind(var1)(var2);
                var2 = var2.ConflictOptions;
                var8 = var2.Replace;
case 4:
                var6 = var7.putWithGeneration;
                var13 = arg1;
                var12 = arg2;
                var11 = arg3;
                var10 = null;
                var14 = var7;
                var9 = var8;
                var2 = var14[var6](var13, var12, var11, var10, var9, var8);
                return var1;
            }
        };
        var1['value'] = var3;
        var3 = new Array(4);
        var3[0] = var1;
        var1 = {};
        var6 = 'putWithGeneration';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3, arg4) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var4 = arguments[4];
                var3 = undefined;
                if(!(var4 === var3)) { _fun0006_ip = 6; continue _fun0006 }
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
                var3 = var1.state;
                var2 = var3.put;
                var1 = {};
                var5 = new Array(2);
                var6 = arg1;
                var5[0] = var6;
                var6 = arg2;
                var5[1] = var6;
                var1['key'] = var5;
                var5 = arg3;
                var1['data'] = var5;
                var5 = arg4;
                var1['generation'] = var5;
                var1 = var2.bind(var3)(var1, var4);
                return var1;
            }
        };
        var1['value'] = var6;
        var3[1] = var1;
        var1 = {};
        var6 = 'delete';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var6 = arg1;
                var2 = this;
                var1 = undefined;
                var3 = undefined;
                var4 = arguments.length;
                var3 = 0;
                if(!(var3 !== var4)) { _fun0007_ip = 8; continue _fun0007 }
case 11:
                var3 = 1;
                if(!(var3 !== var4)) { _fun0007_ip = 12; continue _fun0007 }
case 13:
                var5 = var2.state;
                var4 = var5.delete;
                var3 = new Array(2);
                var3[0] = var6;
                var7 = arg2;
                var3[1] = var7;
                var3 = var4.bind(var5)(var3);
                _fun0007_ip = 14; continue _fun0007;
case 12:
                var5 = var2.state;
                var4 = var5.delete;
                var3 = new Array(1);
                var3[0] = var6;
                var3 = var4.bind(var5)(var3);
                _fun0007_ip = 14; continue _fun0007;
case 8:
                var4 = var2.state;
                var3 = var4.delete;
                var2 = new Array(0);
                var2 = var3.bind(var4)(var2);
case 14:
                return var1;
            }
        };
        var1['value'] = var6;
        var3[2] = var1;
        var1 = {};
        var6 = 'deleteGeneration';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var1 = this;
            var5 = var1.state;
            var4 = var5.deleteGeneration;
            var3 = new Array(0);
            var2 = arg1;
            var1 = arg2;
            var1 = var4.bind(var5)(var3, var2, var1);
            return var1;
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
    var _closure1_slot4 = var2;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/kv-storage/js/api/GuildDao.tsx';
    var5 = var6.bind(var7)(var5);
    var3['GuildDao'] = var4;
    var3['GuildDaoTransaction'] = var2;
    return var1;
})();
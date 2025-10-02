// discord_common/js/packages/kv-storage/js/api/Table.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var1 = function prefixCell(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var7 = arg2;
            var4 = var7.length;
            var2 = 0;
            var1 = var3;
            if(!(var2 !== var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = {};
            var6 = _closure1_slot0;
            var5 = _closure1_slot1;
            var4 = 3;
            var5 = var5[var4];
            var4 = undefined;
            var6 = var6.bind(var4)(var5);
            var5 = var6.combineKey;
            var4 = var3.key;
            var4 = var5.bind(var6)(var7, var4);
            var2['key'] = var4;
            var4 = var3.data;
            var2['data'] = var4;
            var3 = var3.generation;
            var2['generation'] = var3;
            var1 = var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function prefixCells(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var1 = arg2;
            var _closure2_slot0 = var1;
            var5 = var1.length;
            var3 = 0;
            var1 = var4;
            if(!(var3 !== var5)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
            var3 = var4.map;
            var2 = function(arg1) {
                var4 = _closure1_slot6;
                var3 = _closure2_slot0;
                var2 = undefined;
                var1 = arg1;
                var1 = var4.bind(var2)(var1, var3);
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 4:
            return var1;
        }
    };
    var _closure1_slot7 = var1;
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
    var2 = 2;
    var2 = var7[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = function() {
        var4 = _closure1_slot4;
        var3 = function Table(arg1, arg2, arg3, arg4) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var3 = this;
                var _closure3_slot0 = var3;
                var5 = _closure1_slot3;
                var2 = _closure2_slot1;
                var1 = undefined;
                var2 = var5.bind(var1)(var3, var2);
                var2 = {};
                var4 = function getLatest(arg1) {
                    var1 = _closure3_slot0;
                    var4 = var1.database;
                    var3 = var4.execute;
                    var2 = {};
                    var5 = 'messages.get_latest';
                    var2['type'] = var5;
                    var5 = var1.tableId;
                    var2['table'] = var5;
                    var5 = arg1;
                    var2['guildId'] = var5;
                    var1 = var1.defaultDebugTag;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var2['getLatest'] = var4;
                var3['messages'] = var2;
                var2 = arg1;
                var3['prefix'] = var2;
                var2 = arg2;
                var3['tableId'] = var2;
                var2 = arg3;
                var3['database'] = var2;
                var4 = arg4;
                var2 = null;
                if(!var4) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                var2 = undefined;
case 6:
                var3['defaultDebugTag'] = var2;
                return var1;
            }
        };
        var _closure2_slot1 = var3;
        var5 = {};
        var2 = 'close';
        var5['key'] = var2;
        var2 = function value() {
            var1 = this;
            var2 = var1.database;
            var1 = var2.close;
            var1 = var1.bind(var2)();
            var1 = undefined;
            return var1;
        };
        var5['value'] = var2;
        var2 = new Array(18);
        var2[0] = var5;
        var5 = {};
        var7 = 'get';
        var5['key'] = var7;
        var8 = _closure1_slot2;
        var1 = undefined;
        var7 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var5 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 8; continue _fun0004 }
case 9:
                    var4 = var5.getMany;
                    var3 = {};
                    var2 = 1;
                    var3['limit'] = var2;
                    var2 = arg1;
                    var2 = var4.bind(var5)(var2, var3);
                    SaveGenerator(address=38);
case 10:
                    return var2;
case 11:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var3 = 0;
                    var4 = var2[var3];
                    var3 = null;
                    var5 = var3 != var4;
                    if(!var5) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var3 = var4;
case 14:
                    return var3;
case 12:
                    return var2;
case 8:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var1)(var7);
        var _closure2_slot0 = var7;
        var7 = function get() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var2[1] = var5;
        var5 = {};
        var7 = 'getMany';
        var5['key'] = var7;
        var7 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var10 = arguments[0];
                var6 = arguments[1];
                var1 = this;
                var5 = undefined;
                if(!(var10 === var5)) { _fun0005_ip = 16; continue _fun0005 }
case 17:
                var10 = new Array(0);
case 16:
                var4 = var1.database;
                var3 = var4.execute;
                var2 = {};
                var7 = 'kv.get_many';
                var2['type'] = var7;
                var7 = var1.tableId;
                var2['table'] = var7;
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var7 = 3;
                var7 = var9[var7];
                var9 = var8.bind(var5)(var7);
                var8 = var9.combineKeyPrefix;
                var7 = var1.prefix;
                var7 = var8.bind(var9)(var7, var10);
                var2['key'] = var7;
                var7 = null;
                var9 = var7 == var6;
                var8 = undefined;
                if(var9) { _fun0005_ip = 18; continue _fun0005 }
case 19:
                var8 = var6.ordering;
case 18:
                var2['ordering'] = var8;
                var7 = var7 == var6;
                var5 = undefined;
                if(var7) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                var5 = var6.limit;
case 20:
                var2['limit'] = var5;
                var1 = var1.defaultDebugTag;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var2[2] = var5;
        var5 = {};
        var7 = 'getRange';
        var5['key'] = var7;
        var7 = function value(arg1, arg2, arg3) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var6 = arg3;
                var1 = this;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 3;
                var7 = var4[var2];
                var5 = undefined;
                var10 = var3.bind(var5)(var7);
                var9 = var10.combineKey;
                var8 = var1.prefix;
                var7 = arg1;
                var9 = var9.bind(var10)(var8, var7);
                var2 = var4[var2];
                var7 = var3.bind(var5)(var2);
                var4 = var7.combineKey;
                var3 = var1.prefix;
                var2 = arg2;
                var8 = var4.bind(var7)(var3, var2);
                var4 = var1.database;
                var3 = var4.execute;
                var2 = {};
                var7 = 'kv.get_range';
                var2['type'] = var7;
                var7 = var1.tableId;
                var2['table'] = var7;
                var7 = new Array(2);
                var7[0] = var9;
                var7[1] = var8;
                var2['range'] = var7;
                var7 = null;
                var9 = var7 == var6;
                var8 = undefined;
                if(var9) { _fun0006_ip = 22; continue _fun0006 }
case 23:
                var8 = var6.ordering;
case 22:
                var2['ordering'] = var8;
                var7 = var7 == var6;
                var5 = undefined;
                if(var7) { _fun0006_ip = 24; continue _fun0006 }
case 25:
                var5 = var6.limit;
case 24:
                var2['limit'] = var5;
                var1 = var1.defaultDebugTag;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var2[3] = var5;
        var5 = {};
        var7 = 'getKvEntries';
        var5['key'] = var7;
        var7 = function value() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var8 = arguments[0];
                var1 = this;
                var7 = undefined;
                if(!(var8 === var7)) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                var8 = new Array(0);
case 26:
                var4 = var1.database;
                var3 = var4.execute;
                var2 = {};
                var5 = 'kv.get_kv_entries';
                var2['type'] = var5;
                var5 = var1.tableId;
                var2['table'] = var5;
                var6 = _closure1_slot0;
                var9 = _closure1_slot1;
                var5 = 3;
                var5 = var9[var5];
                var7 = var6.bind(var7)(var5);
                var6 = var7.combineKeyPrefix;
                var5 = var1.prefix;
                var5 = var6.bind(var7)(var5, var8);
                var2['key'] = var5;
                var1 = var1.defaultDebugTag;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var2[4] = var5;
        var5 = {};
        var7 = 'getMapEntries';
        var5['key'] = var7;
        var7 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var8 = arguments[0];
                var1 = this;
                var7 = undefined;
                if(!(var8 === var7)) { _fun0008_ip = 26; continue _fun0008 }
case 27:
                var8 = new Array(0);
case 26:
                var4 = var1.database;
                var3 = var4.execute;
                var2 = {};
                var5 = 'kv.get_map_entries';
                var2['type'] = var5;
                var5 = var1.tableId;
                var2['table'] = var5;
                var6 = _closure1_slot0;
                var9 = _closure1_slot1;
                var5 = 3;
                var5 = var9[var5];
                var7 = var6.bind(var7)(var5);
                var6 = var7.combineKeyPrefix;
                var5 = var1.prefix;
                var5 = var6.bind(var7)(var5, var8);
                var2['key'] = var5;
                var1 = var1.defaultDebugTag;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var2[5] = var5;
        var5 = {};
        var7 = 'getChildIds';
        var5['key'] = var7;
        var7 = function value() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var8 = arguments[0];
                var1 = this;
                var7 = undefined;
                if(!(var8 === var7)) { _fun0009_ip = 26; continue _fun0009 }
case 27:
                var8 = new Array(0);
case 26:
                var4 = var1.database;
                var3 = var4.execute;
                var2 = {};
                var5 = 'kv.get_child_ids';
                var2['type'] = var5;
                var5 = var1.tableId;
                var2['table'] = var5;
                var6 = _closure1_slot0;
                var9 = _closure1_slot1;
                var5 = 3;
                var5 = var9[var5];
                var7 = var6.bind(var7)(var5);
                var6 = var7.combineKeyPrefix;
                var5 = var1.prefix;
                var5 = var6.bind(var7)(var5, var8);
                var2['key'] = var5;
                var1 = var1.defaultDebugTag;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var2[6] = var5;
        var5 = {};
        var7 = 'getParentId';
        var5['key'] = var7;
        var7 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var8 = arguments[0];
                var1 = this;
                var7 = undefined;
                if(!(var8 === var7)) { _fun0010_ip = 26; continue _fun0010 }
case 27:
                var8 = new Array(0);
case 26:
                var4 = var1.database;
                var3 = var4.execute;
                var2 = {};
                var5 = 'kv.get_parent_id';
                var2['type'] = var5;
                var5 = var1.tableId;
                var2['table'] = var5;
                var6 = _closure1_slot0;
                var9 = _closure1_slot1;
                var5 = 3;
                var5 = var9[var5];
                var7 = var6.bind(var7)(var5);
                var6 = var7.combineKey;
                var5 = var1.prefix;
                var5 = var6.bind(var7)(var5, var8);
                var2['key'] = var5;
                var1 = var1.defaultDebugTag;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var2[7] = var5;
        var5 = {};
        var7 = 'put';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var6 = arguments[1];
                var1 = this;
                var8 = undefined;
                if(!(var6 === var8)) { _fun0011_ip = 28; continue _fun0011 }
case 27:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 4;
                var2 = var4[var2];
                var2 = var3.bind(var8)(var2);
                var2 = var2.ConflictOptions;
                var6 = var2.Replace;
case 28:
                var4 = var1.database;
                var3 = var4.execute;
                var2 = {};
                var5 = 'kv.put_one';
                var2['type'] = var5;
                var5 = var1.tableId;
                var2['table'] = var5;
                var10 = _closure1_slot6;
                var9 = var1.prefix;
                var7 = arg1;
                var7 = var10.bind(var8)(var7, var9);
                var2['cell'] = var7;
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var5 = 4;
                var5 = var9[var5];
                var5 = var7.bind(var8)(var5);
                var5 = var5.ConflictOptions;
                var5 = var5.Replace;
                var5 = var6 === var5;
                var2['overwrite'] = var5;
                var1 = var1.defaultDebugTag;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var2[8] = var5;
        var5 = {};
        var7 = 'putAll';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var6 = arguments[1];
                var1 = this;
                var8 = undefined;
                if(!(var6 === var8)) { _fun0012_ip = 28; continue _fun0012 }
case 27:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 4;
                var2 = var4[var2];
                var2 = var3.bind(var8)(var2);
                var2 = var2.ConflictOptions;
                var6 = var2.Replace;
case 28:
                var4 = var1.database;
                var3 = var4.execute;
                var2 = {};
                var5 = 'kv.put_many';
                var2['type'] = var5;
                var5 = var1.tableId;
                var2['table'] = var5;
                var10 = _closure1_slot7;
                var9 = var1.prefix;
                var7 = arg1;
                var7 = var10.bind(var8)(var7, var9);
                var2['cells'] = var7;
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var5 = 4;
                var5 = var9[var5];
                var5 = var7.bind(var8)(var5);
                var5 = var5.ConflictOptions;
                var5 = var5.Replace;
                var5 = var6 === var5;
                var2['overwrite'] = var5;
                var1 = var1.defaultDebugTag;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var2[9] = var5;
        var5 = {};
        var7 = 'replaceAll';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var4 = this;
            var2 = arg1;
            var _closure3_slot0 = var2;
            var3 = var4.transaction;
            var2 = var4.defaultDebugTag;
            var1 = function(arg1) {
                var3 = arg1;
                var1 = var3.delete;
                var1 = var1.bind(var3)();
                var2 = var3.putAll;
                var1 = _closure3_slot0;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var7;
        var2[10] = var5;
        var5 = {};
        var7 = 'delete';
        var5['key'] = var7;
        var7 = function value() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var8 = arguments[0];
                var1 = this;
                var7 = undefined;
                if(!(var8 === var7)) { _fun0013_ip = 26; continue _fun0013 }
case 27:
                var8 = new Array(0);
case 26:
                var4 = var1.database;
                var3 = var4.execute;
                var2 = {};
                var5 = 'kv.delete_many';
                var2['type'] = var5;
                var5 = var1.tableId;
                var2['table'] = var5;
                var6 = _closure1_slot0;
                var9 = _closure1_slot1;
                var5 = 3;
                var5 = var9[var5];
                var7 = var6.bind(var7)(var5);
                var6 = var7.combineKeyPrefix;
                var5 = var1.prefix;
                var5 = var6.bind(var7)(var5, var8);
                var2['key'] = var5;
                var1 = var1.defaultDebugTag;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var2[11] = var5;
        var5 = {};
        var7 = 'deleteRange';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var1 = this;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 3;
            var6 = var5[var2];
            var3 = undefined;
            var9 = var4.bind(var3)(var6);
            var8 = var9.combineKey;
            var7 = var1.prefix;
            var6 = arg1;
            var7 = var8.bind(var9)(var7, var6);
            var2 = var5[var2];
            var5 = var4.bind(var3)(var2);
            var4 = var5.combineKey;
            var3 = var1.prefix;
            var2 = arg2;
            var6 = var4.bind(var5)(var3, var2);
            var4 = var1.database;
            var3 = var4.execute;
            var2 = {};
            var5 = 'kv.delete_range';
            var2['type'] = var5;
            var5 = var1.tableId;
            var2['table'] = var5;
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var2['range'] = var5;
            var1 = var1.defaultDebugTag;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var2[12] = var5;
        var5 = {};
        var7 = 'deleteGeneration';
        var5['key'] = var7;
        var7 = function value() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var8 = arguments[0];
                var1 = this;
                var7 = undefined;
                if(!(var8 === var7)) { _fun0014_ip = 26; continue _fun0014 }
case 27:
                var8 = new Array(0);
case 26:
                var4 = var1.database;
                var3 = var4.execute;
                var2 = {};
                var5 = 'kv.delete_generation';
                var2['type'] = var5;
                var5 = var1.tableId;
                var2['table'] = var5;
                var6 = _closure1_slot0;
                var9 = _closure1_slot1;
                var5 = 3;
                var5 = var9[var5];
                var7 = var6.bind(var7)(var5);
                var6 = var7.combineKeyPrefix;
                var5 = var1.prefix;
                var5 = var6.bind(var7)(var5, var8);
                var2['key'] = var5;
                var5 = arguments[2];
                var2['generation'] = var5;
                var5 = arguments[1];
                var2['comparer'] = var5;
                var1 = var1.defaultDebugTag;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var2[13] = var5;
        var5 = {};
        var7 = 'transaction';
        var5['key'] = var7;
        var7 = function value(arg1, arg2) {
            var2 = this;
            var _closure3_slot0 = var2;
            var3 = arg1;
            var _closure3_slot1 = var3;
            var4 = var2.database;
            var3 = var4.transaction;
            var2 = function(arg1) {
                var3 = _closure3_slot1;
                var6 = _closure1_slot5;
                var1 = _closure3_slot0;
                var9 = var1.prefix;
                var8 = var1.tableId;
                var1 = var6.prototype;
                var2 = Object.create(var1, {constructor: {value: var6}});
                var7 = arg1;
                var10 = var2;
                var1 = new var10[var6](var9, var8, var7, var6);
                var2 = var1 instanceof Object ? var1 : var2;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = arg2;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        };
        var5['value'] = var7;
        var2[14] = var5;
        var5 = {};
        var7 = 'upgradeTransaction';
        var5['key'] = var7;
        var7 = function value(arg1) {
            var1 = this;
            var5 = _closure1_slot5;
            var8 = var1.prefix;
            var7 = var1.tableId;
            var1 = var5.prototype;
            var2 = Object.create(var1, {constructor: {value: var5}});
            var6 = arg1;
            var9 = var2;
            var1 = new var9[var5](var8, var7, var6, var5);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var5['value'] = var7;
        var2[15] = var5;
        var5 = {};
        var7 = 'getManySyncUnsafe';
        var5['key'] = var7;
        var7 = function value() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var9 = arguments[0];
                var5 = arguments[1];
                var6 = this;
                var4 = undefined;
                if(!(var9 === var4)) { _fun0015_ip = 16; continue _fun0015 }
case 17:
                var9 = new Array(0);
case 16:
                var3 = var6.database;
                var2 = var3.executeSync;
                var1 = {};
                var7 = 'kv.get_many';
                var1['type'] = var7;
                var7 = var6.tableId;
                var1['table'] = var7;
                var8 = _closure1_slot0;
                var10 = _closure1_slot1;
                var7 = 3;
                var7 = var10[var7];
                var8 = var8.bind(var4)(var7);
                var7 = var8.combineKeyPrefix;
                var6 = var6.prefix;
                var6 = var7.bind(var8)(var6, var9);
                var1['key'] = var6;
                var6 = null;
                var8 = var6 == var5;
                var7 = undefined;
                if(var8) { _fun0015_ip = 18; continue _fun0015 }
case 19:
                var7 = var5.ordering;
case 18:
                var1['ordering'] = var7;
                var6 = var6 == var5;
                var4 = undefined;
                if(var6) { _fun0015_ip = 20; continue _fun0015 }
case 21:
                var4 = var5.limit;
case 20:
                var1['limit'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var7;
        var2[16] = var5;
        var5 = {};
        var7 = 'getMapEntriesSyncUnsafe';
        var5['key'] = var7;
        var6 = function value() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var7 = arguments[0];
                var4 = this;
                var8 = undefined;
                if(!(var7 === var8)) { _fun0016_ip = 26; continue _fun0016 }
case 27:
                var7 = new Array(0);
case 26:
                var3 = var4.database;
                var2 = var3.executeSync;
                var1 = {};
                var5 = 'kv.get_map_entries';
                var1['type'] = var5;
                var5 = var4.tableId;
                var1['table'] = var5;
                var6 = _closure1_slot0;
                var9 = _closure1_slot1;
                var5 = 3;
                var5 = var9[var5];
                var6 = var6.bind(var8)(var5);
                var5 = var6.combineKeyPrefix;
                var4 = var4.prefix;
                var4 = var5.bind(var6)(var4, var7);
                var1['key'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var5['value'] = var6;
        var2[17] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var2.bind(var1)();
    var2 = function() {
        var5 = function TableTransaction(arg1, arg2, arg3) {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot3;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var5.bind(var1)(var3, var2);
            var2 = {};
            var5 = function trimOrphans(arg1) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                    var6 = arg1;
                    var2 = _closure3_slot0;
                    var2 = var2.prefix;
                    var2 = var2.length;
                    var3 = 1;
                    if(!(var3 === var2)) { _fun0017_ip = 19; continue _fun0017 }
case 29:
                    var2 = var6.length;
                    if(!(var3 === var2)) { _fun0017_ip = 19; continue _fun0017 }
case 30:
                    var4 = _closure3_slot0;
                    var3 = var4.transaction;
                    var2 = var3.add;
                    var1 = {};
                    var5 = 'messages.trim_orphans';
                    var1['type'] = var5;
                    var5 = var4.tableId;
                    var1['table'] = var5;
                    var5 = 0;
                    var6 = var6[var5];
                    var1['channelKey'] = var6;
                    var4 = var4.prefix;
                    var4 = var4[var5];
                    var1['messageKey'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
case 19:
                    var1 = global;
                    var3 = var1.Error;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {constructor: {value: var3}});
                    var7 = 'trimOrphans: only one prefix component is supported at this time';
                    var8 = var2;
                    var1 = new var8[var3](var7, var6);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                }
            };
            var2['trimOrphans'] = var5;
            var5 = function trimChannel(arg1, arg2) {
                var5 = _closure3_slot0;
                var4 = var5.transaction;
                var3 = var4.add;
                var2 = {};
                var1 = 'messages.trim_channel';
                var2['type'] = var1;
                var1 = var5.tableId;
                var2['table'] = var1;
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 3;
                var6 = var6[var1];
                var1 = undefined;
                var8 = var7.bind(var1)(var6);
                var7 = var8.combineKey;
                var6 = var5.prefix;
                var5 = arg1;
                var5 = var7.bind(var8)(var6, var5);
                var2['key'] = var5;
                var5 = arg2;
                var2['limit'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var2['trimChannel'] = var5;
            var5 = function trimChannelsIn(arg1, arg2) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
                    var6 = arg1;
                    var2 = _closure3_slot0;
                    var2 = var2.prefix;
                    var2 = var2.length;
                    var3 = 1;
                    if(!(var3 === var2)) { _fun0018_ip = 31; continue _fun0018 }
case 29:
                    var2 = var6.length;
                    if(!(var3 === var2)) { _fun0018_ip = 31; continue _fun0018 }
case 30:
                    var4 = _closure3_slot0;
                    var3 = var4.transaction;
                    var2 = var3.add;
                    var1 = {};
                    var5 = 'messages.trim_channels_in';
                    var1['type'] = var5;
                    var5 = var4.tableId;
                    var1['table'] = var5;
                    var5 = 0;
                    var6 = var6[var5];
                    var1['channelKey'] = var6;
                    var4 = var4.prefix;
                    var4 = var4[var5];
                    var1['messageKey'] = var4;
                    var4 = arg2;
                    var1['limit'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
case 31:
                    var1 = global;
                    var3 = var1.Error;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {constructor: {value: var3}});
                    var7 = 'trimChannelsIn: only one prefix component is supported at this time';
                    var8 = var2;
                    var1 = new var8[var3](var7, var6);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                }
            };
            var2['trimChannelsIn'] = var5;
            var4 = function trimChannelsNotIn(arg1, arg2) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var6 = arg1;
                    var2 = _closure3_slot0;
                    var2 = var2.prefix;
                    var2 = var2.length;
                    var3 = 1;
                    if(!(var3 === var2)) { _fun0019_ip = 31; continue _fun0019 }
case 29:
                    var2 = var6.length;
                    if(!(var3 === var2)) { _fun0019_ip = 31; continue _fun0019 }
case 30:
                    var4 = _closure3_slot0;
                    var3 = var4.transaction;
                    var2 = var3.add;
                    var1 = {};
                    var5 = 'messages.trim_channels_not_in';
                    var1['type'] = var5;
                    var5 = var4.tableId;
                    var1['table'] = var5;
                    var5 = 0;
                    var6 = var6[var5];
                    var1['channelKey'] = var6;
                    var4 = var4.prefix;
                    var4 = var4[var5];
                    var1['messageKey'] = var4;
                    var4 = arg2;
                    var1['limit'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = undefined;
                    return var1;
case 31:
                    var1 = global;
                    var3 = var1.Error;
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {constructor: {value: var3}});
                    var7 = 'trimChannelsNotIn: only one prefix component is supported at this time';
                    var8 = var2;
                    var1 = new var8[var3](var7, var6);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                }
            };
            var2['trimChannelsNotIn'] = var4;
            var3['messages'] = var2;
            var2 = arg1;
            var3['prefix'] = var2;
            var2 = arg2;
            var3['tableId'] = var2;
            var2 = arg3;
            var3['transaction'] = var2;
            return var1;
        };
        var _closure2_slot0 = var5;
        var4 = _closure1_slot4;
        var1 = {};
        var3 = 'put';
        var1['key'] = var3;
        var3 = function value(arg1) {
            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                var6 = arguments[1];
                var7 = this;
                var1 = undefined;
                if(!(var6 === var1)) { _fun0020_ip = 28; continue _fun0020 }
case 27:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 4;
                var2 = var4[var2];
                var2 = var3.bind(var1)(var2);
                var2 = var2.ConflictOptions;
                var6 = var2.Replace;
case 28:
                var4 = var7.transaction;
                var3 = var4.add;
                var2 = {};
                var5 = 'kv.put_one';
                var2['type'] = var5;
                var5 = var7.tableId;
                var2['table'] = var5;
                var9 = _closure1_slot6;
                var8 = var7.prefix;
                var7 = arg1;
                var7 = var9.bind(var1)(var7, var8);
                var2['cell'] = var7;
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var5 = 4;
                var5 = var8[var5];
                var5 = var7.bind(var1)(var5);
                var5 = var5.ConflictOptions;
                var5 = var5.Replace;
                var5 = var6 === var5;
                var2['overwrite'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1['value'] = var3;
        var3 = new Array(6);
        var3[0] = var1;
        var1 = {};
        var6 = 'putAll';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
                var6 = arguments[1];
                var7 = this;
                var1 = undefined;
                if(!(var6 === var1)) { _fun0021_ip = 28; continue _fun0021 }
case 27:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 4;
                var2 = var4[var2];
                var2 = var3.bind(var1)(var2);
                var2 = var2.ConflictOptions;
                var6 = var2.Replace;
case 28:
                var4 = var7.transaction;
                var3 = var4.add;
                var2 = {};
                var5 = 'kv.put_many';
                var2['type'] = var5;
                var5 = var7.tableId;
                var2['table'] = var5;
                var9 = _closure1_slot7;
                var8 = var7.prefix;
                var7 = arg1;
                var7 = var9.bind(var1)(var7, var8);
                var2['cells'] = var7;
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var5 = 4;
                var5 = var8[var5];
                var5 = var7.bind(var1)(var5);
                var5 = var5.ConflictOptions;
                var5 = var5.Replace;
                var5 = var6 === var5;
                var2['overwrite'] = var5;
                var2 = var3.bind(var4)(var2);
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
        var6 = function value() {
            _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
                var8 = arguments[0];
                var5 = this;
                var1 = undefined;
                if(!(var8 === var1)) { _fun0022_ip = 26; continue _fun0022 }
case 27:
                var8 = new Array(0);
case 26:
                var4 = var5.transaction;
                var3 = var4.add;
                var2 = {};
                var6 = 'kv.delete_many';
                var2['type'] = var6;
                var6 = var5.tableId;
                var2['table'] = var6;
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var6 = 3;
                var6 = var9[var6];
                var7 = var7.bind(var1)(var6);
                var6 = var7.combineKeyPrefix;
                var5 = var5.prefix;
                var5 = var6.bind(var7)(var5, var8);
                var2['key'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1['value'] = var6;
        var3[3] = var1;
        var1 = {};
        var6 = 'deleteRange';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var5 = this;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 3;
            var6 = var4[var2];
            var1 = undefined;
            var9 = var3.bind(var1)(var6);
            var8 = var9.combineKey;
            var7 = var5.prefix;
            var6 = arg1;
            var7 = var8.bind(var9)(var7, var6);
            var2 = var4[var2];
            var6 = var3.bind(var1)(var2);
            var4 = var6.combineKey;
            var3 = var5.prefix;
            var2 = arg2;
            var6 = var4.bind(var6)(var3, var2);
            var4 = var5.transaction;
            var3 = var4.add;
            var2 = {};
            var8 = 'kv.delete_range';
            var2['type'] = var8;
            var5 = var5.tableId;
            var2['table'] = var5;
            var5 = new Array(2);
            var5[0] = var7;
            var5[1] = var6;
            var2['range'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['value'] = var6;
        var3[4] = var1;
        var1 = {};
        var6 = 'deleteGeneration';
        var1['key'] = var6;
        var6 = function value() {
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var8 = arguments[0];
                var5 = this;
                var1 = undefined;
                if(!(var8 === var1)) { _fun0023_ip = 26; continue _fun0023 }
case 27:
                var8 = new Array(0);
case 26:
                var4 = var5.transaction;
                var3 = var4.add;
                var2 = {};
                var6 = 'kv.delete_generation';
                var2['type'] = var6;
                var6 = var5.tableId;
                var2['table'] = var6;
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var6 = 3;
                var6 = var9[var6];
                var7 = var7.bind(var1)(var6);
                var6 = var7.combineKeyPrefix;
                var5 = var5.prefix;
                var5 = var6.bind(var7)(var5, var8);
                var2['key'] = var5;
                var5 = arguments[2];
                var2['generation'] = var5;
                var5 = arguments[1];
                var2['comparer'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1['value'] = var6;
        var3[5] = var1;
        var1 = {};
        var6 = 'fromDatabaseTransaction';
        var1['key'] = var6;
        var2 = function value(arg1, arg2, arg3) {
            var5 = _closure2_slot0;
            var1 = var5.prototype;
            var2 = Object.create(var1, {constructor: {value: var5}});
            var8 = arg1;
            var7 = arg2;
            var6 = arg3;
            var9 = var2;
            var1 = new var9[var5](var8, var7, var6, var5);
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
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/kv-storage/js/api/Table.tsx';
    var5 = var6.bind(var7)(var5);
    var3['Table'] = var4;
    var3['TableTransaction'] = var2;
    return var1;
})();
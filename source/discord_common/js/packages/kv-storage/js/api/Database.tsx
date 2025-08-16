// discord_common/js/packages/kv-storage/js/api/Database.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var4 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var7;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 46; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0001_ip = 343; continue _fun0001 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 323; continue _fun0001 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 283; continue _fun0001 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 270; continue _fun0001 }
 110:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 163; continue _fun0001 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0001_ip = 179; continue _fun0001 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 249; continue _fun0001 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 234; continue _fun0001 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 247; continue _fun0001 }
 234:
            var9 = _closure1_slot8;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0001_ip = 265; continue _fun0001;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0001_ip = 283; continue _fun0001;
 270:
            var7 = _closure1_slot8;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0001_ip = 323; continue _fun0001 }
 289:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 323:
            if(!var4) { _fun0001_ip = 330; continue _fun0001 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 56; continue _fun0002 }
 20:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 67; continue _fun0002;
 56:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
 67:
                    return var1;
                }
            };
            return var1;
 343:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 23; continue _fun0003 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 70; continue _fun0003 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 55; continue _fun0003 }
 70:
            return var1;
        }
    };
    var _closure1_slot8 = var1;
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
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var7[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var7[var2];
    var2 = var4.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = function() {
        var5 = function Database(arg1) {
            var4 = arg1;
            var3 = this;
            var _closure3_slot0 = var3;
            var7 = _closure1_slot4;
            var5 = _closure2_slot2;
            var1 = undefined;
            var5 = var7.bind(var1)(var3, var5);
            var3['raw'] = var4;
            var5 = var4.name;
            var3['name'] = var5;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var7 = 3;
            var7 = var6[var7];
            var7 = var5.bind(var1)(var7);
            var7 = var7.DatabaseState;
            var7 = var7.Open;
            var3['lastState'] = var7;
            var4 = var4.handle;
            var3['handle'] = var4;
            var4 = 4;
            var4 = var6[var4];
            var4 = var5.bind(var1)(var4);
            var5 = var4.Runtime;
            var4 = var5.addDatabaseStateCallback;
            var2 = function(arg1, arg2) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = _closure3_slot0;
                    var3 = var2.handle;
                    var2 = arg1;
                    if(!(var3 === var2)) { _fun0004_ip = 33; continue _fun0004 }
 20:
                    var2 = _closure3_slot0;
                    var1 = arg2;
                    var2['lastState'] = var1;
 33:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var4.bind(var5)(var2);
            var3['databaseStateCallback'] = var2;
            return var1;
        };
        var _closure2_slot2 = var5;
        var4 = _closure1_slot5;
        var1 = {};
        var3 = 'close';
        var1['key'] = var3;
        var3 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = this;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var1 = 3;
                var4 = var4[var1];
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var4 = var4.DatabaseState;
                var4 = var4.Closed;
                var2['lastState'] = var4;
                var6 = var2.raw;
                var4 = null;
                if(!(var4 != var6)) { _fun0005_ip = 67; continue _fun0005 }
 57:
                var5 = var6.close;
                var5 = var5.bind(var6)();
 67:
                var2['raw'] = var4;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 4;
                var3 = var5[var3];
                var3 = var4.bind(var1)(var3);
                var4 = var3.Runtime;
                var3 = var4.removeCompletionCallback;
                var2 = var2.databaseStateCallback;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1['value'] = var3;
        var3 = new Array(11);
        var3[0] = var1;
        var1 = {};
        var6 = 'disable';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var3 = this;
                var2 = var3.raw;
                var1 = null;
                if(!(var1 != var2)) { _fun0006_ip = 92; continue _fun0006 }
 14:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var2);
                var1 = var1.DatabaseState;
                var1 = var1.Disabled;
                var3['lastState'] = var1;
                var2 = var3.execute;
                var1 = {'type': 'db.disable', 'handle': 0};
                var4 = arg1;
                var1['reason'] = var4;
                var1 = var2.bind(var3)(var1);
                _fun0006_ip = 110; continue _fun0006;
 92:
                var2 = global;
                var3 = var2.Promise;
                var2 = var3.resolve;
                var1 = var2.bind(var3)();
 110:
                return var1;
            }
        };
        var1['value'] = var6;
        var3[1] = var1;
        var1 = {};
        var6 = 'execute';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var7 = arg1;
                var9 = arg2;
                var4 = this;
                var _closure3_slot0 = var4;
                var _closure3_slot1 = var7;
                var _closure3_slot2 = var9;
                var1 = var4.raw;
                var2 = null;
                if(!(var2 != var1)) { _fun0007_ip = 178; continue _fun0007 }
 37:
                var1 = 'key';
                var1 = var1 in var7;
                if(var1) { _fun0007_ip = 56; continue _fun0007 }
 48:
                var1 = var7.table;
                _fun0007_ip = 67; continue _fun0007;
 56:
                var6 = var7.key;
                var5 = 0;
                var1 = var6[var5];
 67:
                var3 = function callback() {
                    _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var4 = var1.Runtime;
                        var3 = var4.executeAsync;
                        var5 = _closure3_slot2;
                        var2 = null;
                        if(!(var2 == var5)) { _fun0008_ip = 61; continue _fun0008 }
 50:
                        var2 = _closure3_slot1;
                        var2 = var2.type;
                        _fun0008_ip = 65; continue _fun0008;
 61:
                        var2 = _closure3_slot2;
 65:
                        var1 = function(arg1) {
                            var2 = _closure3_slot0;
                            var4 = var2.raw;
                            var3 = var4.execute;
                            var2 = {};
                            var6 = _closure3_slot1;
                            var7 = var2;
                            var1 = copyDataProperties(var7, var6);
                            var5 = 0;
                            var1 = 'handle';
                            var2[var1] = var5;
                            var1 = arg1;
                            var1 = var3.bind(var4)(var1, var2);
                            var1 = undefined;
                            return var1;
                        };
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    }
                };
                if(!(var2 !== var9)) { _fun0007_ip = 170; continue _fun0007 }
 76:
                var8 = _closure1_slot1;
                var6 = _closure1_slot2;
                var5 = 5;
                var6 = var6[var5];
                var5 = undefined;
                var6 = var8.bind(var5)(var6);
                var5 = var6.timeAsync;
                if(!(var2 == var9)) { _fun0007_ip = 116; continue _fun0007 }
 111:
                var9 = var7.type;
 116:
                var2 = var2 != var1;
                var8 = '';
                var7 = var8;
                if(!var2) { _fun0007_ip = 133; continue _fun0007 }
 130:
                var7 = var1;
 133:
                var1 = global;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = ' ';
                var2 = var2.bind(var8)(var9, var1, var7);
                var1 = '💾';
                var1 = var5.bind(var6)(var1, var2, var3);
                _fun0007_ip = 176; continue _fun0007;
 170:
                var2 = undefined;
                var1 = var3.bind(var2)();
 176:
                return var1;
 178:
                var1 = global;
                var3 = var1.Error;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'database is no longer open (database: ';
                var12 = var2.bind(var1)(var4);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var13 = var2;
                var1 = new var13[var3](var12, var11);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var1['value'] = var6;
        var3[2] = var1;
        var1 = {};
        var6 = 'executeSync';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var7 = arg1;
                var4 = this;
                var _closure3_slot0 = var4;
                var _closure3_slot1 = var7;
                var2 = var4.raw;
                var3 = null;
                if(!(var3 != var2)) { _fun0009_ip = 158; continue _fun0009 }
 30:
                var2 = 'key';
                var2 = var2 in var7;
                if(var2) { _fun0009_ip = 49; continue _fun0009 }
 41:
                var2 = var7.table;
                _fun0009_ip = 60; continue _fun0009;
 49:
                var6 = var7.key;
                var5 = 0;
                var2 = var6[var5];
 60:
                var8 = _closure1_slot1;
                var6 = _closure1_slot2;
                var5 = 5;
                var6 = var6[var5];
                var5 = undefined;
                var6 = var8.bind(var5)(var6);
                var5 = var6.time;
                var9 = var7.type;
                var3 = var3 != var2;
                var8 = '';
                if(!var3) { _fun0009_ip = 110; continue _fun0009 }
 107:
                var8 = var2;
 110:
                var2 = global;
                var2 = var2.HermesInternal;
                var7 = var2.concat;
                var3 = 'SYNC: ';
                var2 = ' ';
                var3 = var7.bind(var3)(var9, var2, var8);
                var2 = '💾';
                var1 = function() {
                    var2 = _closure3_slot0;
                    var5 = var2.raw;
                    var4 = var5.execute;
                    var3 = {};
                    var7 = _closure3_slot1;
                    var8 = var3;
                    var1 = copyDataProperties(var8, var7);
                    var2 = 0;
                    var1 = 'handle';
                    var3[var1] = var2;
                    var2 = {};
                    var1 = true;
                    var2['synchronous'] = var1;
                    var1 = null;
                    var1 = var4.bind(var5)(var1, var3, var2);
                    return var1;
                };
                var1 = var5.bind(var6)(var2, var3, var1);
                return var1;
 158:
                var1 = global;
                var3 = var1.Error;
                var1 = var1.HermesInternal;
                var2 = var1.concat;
                var1 = 'database is no longer open (database: ';
                var12 = var2.bind(var1)(var4);
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var13 = var2;
                var1 = new var13[var3](var12, var11);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            }
        };
        var1['value'] = var6;
        var3[3] = var1;
        var1 = {};
        var6 = 'fullVacuum';
        var1['key'] = var6;
        var6 = function value() {
            var3 = this;
            var2 = var3.execute;
            var1 = {'type': 'db.vacuum', 'handle': 0, 'complete': true};
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var3[4] = var1;
        var1 = {};
        var6 = 'fsInfo';
        var1['key'] = var6;
        var6 = function value() {
            var3 = this;
            var2 = var3.execute;
            var1 = {'type': 'db.fs_info', 'handle': 0};
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var3[5] = var1;
        var1 = {};
        var6 = 'incrementalVacuum';
        var1['key'] = var6;
        var6 = function value() {
            var3 = this;
            var2 = var3.execute;
            var1 = {'type': 'db.vacuum', 'handle': 0, 'complete': false};
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var3[6] = var1;
        var1 = {};
        var6 = 'instantaneousState';
        var1['key'] = var6;
        var6 = function value() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var2 = this;
                var3 = var2.raw;
                var1 = null;
                if(!(var1 != var3)) { _fun0010_ip = 45; continue _fun0010 }
 14:
                var3 = var2.executeSync;
                var1 = {};
                var4 = 'db.state';
                var1['type'] = var4;
                var1 = var3.bind(var2)(var1);
                var2['lastState'] = var1;
                _fun0010_ip = 82; continue _fun0010;
 45:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var2 = var2.DatabaseState;
                var1 = var2.Closed;
 82:
                return var1;
            }
        };
        var1['value'] = var6;
        var3[7] = var1;
        var1 = {};
        var6 = 'instantaneousStateAsync';
        var1['key'] = var6;
        var8 = _closure1_slot3;
        var2 = undefined;
        var6 = function* () {
            var1 = function* anon_0_() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    StartGenerator();
                    var2 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=2);
                    if(var3) { _fun0011_ip = 108; continue _fun0011 }
 10:
                    var4 = var2.raw;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0011_ip = 68; continue _fun0011 }
 21:
                    var4 = var2.execute;
                    var3 = {};
                    var5 = 'db.state';
                    var3['type'] = var5;
                    var3 = var4.bind(var2)(var3);
                    SaveGenerator(address=48);
 46:
                    return var3;
 48:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0011_ip = 65; continue _fun0011 }
 54:
                    var2['lastState'] = var3;
                    var2 = var3;
                    _fun0011_ip = 105; continue _fun0011;
 65:
                    return var3;
 68:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 3;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var3 = var3.DatabaseState;
                    var2 = var3.Closed;
 105:
                    return var2;
 108:
                    return var1;
                }
            };
            return var1;
        };
        var6 = var8.bind(var2)(var6);
        var _closure2_slot1 = var6;
        var6 = function instantaneousStateAsync() {
            var1 = undefined;
            var4 = _closure2_slot1;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1['value'] = var6;
        var3[8] = var1;
        var1 = {};
        var6 = 'state';
        var1['key'] = var6;
        var6 = function value() {
            var1 = this;
            var1 = var1.lastState;
            return var1;
        };
        var1['value'] = var6;
        var3[9] = var1;
        var1 = {};
        var6 = 'transaction';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var4 = this;
            var _closure3_slot0 = var4;
            var2 = arg2;
            var _closure3_slot1 = var2;
            var2 = _closure1_slot6;
            var3 = var2.prototype;
            var3 = Object.create(var3, {constructor: {value: var2}});
            var6 = var3;
            var5 = var4;
            var2 = new var6[var2](var5, var4);
            var4 = var2 instanceof Object ? var2 : var3;
            var _closure3_slot2 = var4;
            var3 = arg1;
            var2 = undefined;
            var4 = var3.bind(var2)(var4);
            var2 = global;
            var3 = var2.Promise;
            var2 = var3.resolve;
            var3 = var2.bind(var3)(var4);
            var2 = var3.then;
            var1 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var1 = _closure3_slot2;
                    var1 = var1.operations;
                    var3 = var1.length;
                    var1 = 0;
                    if(!(!(var3 > var1))) { _fun0012_ip = 44; continue _fun0012 }
 24:
                    var1 = global;
                    var3 = var1.Promise;
                    var1 = var3.resolve;
                    var1 = var1.bind(var3)();
                    _fun0012_ip = 95; continue _fun0012;
 44:
                    var5 = _closure3_slot0;
                    var4 = var5.execute;
                    var3 = {};
                    var6 = 'db.transaction';
                    var3['type'] = var6;
                    var7 = _closure3_slot2;
                    var6 = var7.complete;
                    var6 = var6.bind(var7)();
                    var3['operations'] = var6;
                    var2 = _closure3_slot1;
                    var1 = var4.bind(var5)(var3, var2);
 95:
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var1['value'] = var6;
        var3[10] = var1;
        var6 = {};
        var1 = 'open';
        var6['key'] = var1;
        var1 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0013_ip = 102; continue _fun0013 }
 7:
                    var3 = _closure2_slot2;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 6;
                    var4 = var4[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4);
                    var6 = var2.Host;
                    var5 = var6.open;
                    var4 = arg1;
                    var2 = arg2;
                    var2 = var5.bind(var6)(var4, var2);
                    SaveGenerator(address=67);
 65:
                    return var2;
 67:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0013_ip = 99; continue _fun0013 }
 73:
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {constructor: {value: var3}});
                    var9 = var4;
                    var8 = var2;
                    var3 = new var9[var3](var8, var7);
                    var3 = var3 instanceof Object ? var3 : var4;
                    return var3;
 99:
                    return var2;
 102:
                    return var1;
                }
            };
            return var1;
        };
        var1 = var8.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var1 = function open() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var6['value'] = var1;
        var1 = new Array(3);
        var1[0] = var6;
        var6 = {};
        var8 = 'openSyncUnsafe';
        var6['key'] = var8;
        var8 = function value(arg1, arg2) {
            var3 = _closure2_slot2;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var2);
            var5 = var1.Host;
            var4 = var5.openSyncUnsafe;
            var2 = arg1;
            var1 = arg2;
            var7 = var4.bind(var5)(var2, var1);
            var2 = var3.prototype;
            var2 = Object.create(var2, {constructor: {value: var3}});
            var8 = var2;
            var1 = new var8[var3](var7, var6);
            var1 = var1 instanceof Object ? var1 : var2;
            return var1;
        };
        var6['value'] = var8;
        var1[1] = var6;
        var6 = {};
        var8 = 'delete';
        var6['key'] = var8;
        var7 = function value(arg1) {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var3 = var1.Host;
            var2 = var3.delete;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var1;
        };
        var6['value'] = var7;
        var1[2] = var6;
        var1 = var4.bind(var2)(var5, var3, var1);
        return var1;
    };
    var4 = var2.bind(var1)();
    var2 = function() {
        var4 = _closure1_slot5;
        var3 = function DatabaseTransaction(arg1) {
            var3 = this;
            var4 = _closure1_slot4;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var4.bind(var1)(var3, var2);
            var2 = arg1;
            var3['database'] = var2;
            var2 = new Array(0);
            var3['operations'] = var2;
            return var1;
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'add';
        var1['key'] = var2;
        var2 = function value(arg1) {
            var1 = this;
            var3 = var1.operations;
            var2 = var3.push;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var6 = 'complete';
        var1['key'] = var6;
        var6 = function value() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var1 = this;
                var3 = _closure1_slot7;
                var2 = var1.operations;
                var6 = undefined;
                var5 = var3.bind(var6)(var2);
                var3 = var5.bind(var6)();
                var2 = var3.done;
                var4 = 0;
                if(var2) { _fun0014_ip = 63; continue _fun0014 }
 37:
                var2 = var3.value;
                var2['handle'] = var4;
                var7 = var5.bind(var6)();
                var2 = var7.done;
                var3 = var7;
                if(!var2) { _fun0014_ip = 37; continue _fun0014 }
 63:
                var1 = var1.operations;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'toString';
        var1['key'] = var6;
        var5 = function value() {
            var1 = this;
            var2 = var1.database;
            var10 = var2.handle;
            var1 = var1.operations;
            var8 = var1.length;
            var1 = global;
            var1 = var1.HermesInternal;
            var4 = var1.concat;
            var11 = '[DatabaseTransaction ';
            var9 = ': ';
            var7 = ' ops]';
            var1 = var11[var4](var10, var9, var8, var7, var6);
            return var1;
        };
        var1['value'] = var5;
        var2[2] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var _closure1_slot6 = var2;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = '../discord_common/js/packages/kv-storage/js/api/Database.tsx';
    var5 = var6.bind(var7)(var5);
    var3['Database'] = var4;
    var3['DatabaseTransaction'] = var2;
    return var1;
})();
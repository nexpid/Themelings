// app/modules/app_database/system/DatabaseManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
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
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot13;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot13;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
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
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot13 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
case 36: // try_start_0
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
case 35: // try_end0
            _fun0004_ip = 37; continue _fun0004;
case 38: // catch_target0
            CatchBlockStart(arg_register=1);
case 37:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot14 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function _databaseName(arg1) {
        var1 = global;
        var1 = var1.HermesInternal;
        var3 = var1.concat;
        var2 = '@account.';
        var1 = arg1;
        var1 = var3.bind(var2)(var1);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function _trySpeculativelyOpenDatabaseAsync() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot4;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 39; continue _fun0005 }
case 40:
                    var6 = undefined;
                    var3 = undefined;
                    var5 = _closure1_slot15;
                    var4 = arg1;
                    var9 = var5.bind(var6)(var4);
                    var3 = var9;
                    var7 = _closure1_slot11;
                    var5 = var7.verbose;
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var8 = var4.concat;
                    var4 = 'speculatively opening ';
                    var4 = var8.bind(var4)(var9);
                    var4 = var5.bind(var7)(var4);
case 41: // try_start_0
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var4 = 10;
                    var4 = var7[var4];
                    var4 = var5.bind(var6)(var4);
                    var5 = var4.Database;
                    var4 = var5.open;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=112);
case 13:
                    return var3;
case 42:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 43; continue _fun0005 }
case 44: // try_end0
                    return var3;
case 43:
                    return var3;
case 45: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot11;
                    var3 = var4.warn;
                    var2 = "couldn't speculatively open database.";
                    var2 = var3.bind(var4)(var2, var5);
                    var2 = null;
                    return var2;
case 39:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot16 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var9 = var7.bind(var1)(var4);
    var4 = var9.prototype;
    var8 = Object.create(var4, {constructor: {value: var9}});
    var12 = 'DatabaseManager';
    var13 = var8;
    var4 = new var13[var9](var12, var11);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot11 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var4 = var4.Store;
    var2 = function(arg1) {
        var4 = function DatabaseManager() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var5 = this;
                var1 = _closure1_slot5;
                var3 = _closure2_slot1;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var3);
                var9 = _closure1_slot1;
                var8 = _closure1_slot3;
                var1 = 8;
                var7 = var8[var1];
                var7 = var9.bind(var4)(var7);
                var10 = new Array(3);
                var10[0] = var7;
                var7 = {};
                var9 = function CLEAR_CACHES(arg1) {
                    var3 = _closure3_slot0;
                    var2 = var3.handleClearCaches;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var7['CLEAR_CACHES'] = var9;
                var9 = function CONNECTION_CLOSED() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleAuthenticationStoreChanged;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var7['CONNECTION_CLOSED'] = var9;
                var9 = function CONNECTION_OPEN() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleConnectionOpen;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var7['CONNECTION_OPEN'] = var9;
                var9 = function LOGOUT() {
                    var2 = _closure3_slot0;
                    var1 = var2.handleAuthenticationStoreChanged;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var7['LOGOUT'] = var9;
                var10[1] = var7;
                var7 = _closure1_slot0;
                var1 = var8[var1];
                var1 = var7.bind(var4)(var1);
                var1 = var1.DispatchBand;
                var1 = var1.Early;
                var10[2] = var1;
                var1 = _closure1_slot8;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot7;
                var1 = _closure1_slot14;
                var1 = var1.bind(var4)();
                if(var1) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0006_ip = 48; continue _fun0006;
case 46:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot8;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
case 48:
                var1 = var3.bind(var4)(var5, var1);
                var _closure3_slot0 = var1;
                var2 = global;
                var2 = var2.Map;
                var3 = var2.prototype;
                var3 = Object.create(var3, {constructor: {value: var2}});
                var14 = var3;
                var2 = new var14[var2](var13);
                var2 = var2 instanceof Object ? var2 : var3;
                var1['databases'] = var2;
                var2 = null;
                var1['activeUserId'] = var2;
                var2 = false;
                var1['preventWritingCachesAgainThisSession'] = var2;
                return var1;
            }
        };
        var _closure2_slot1 = var4;
        var2 = _closure1_slot9;
        var3 = undefined;
        var1 = arg1;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot6;
        var5 = {};
        var1 = 'initialize';
        var5['key'] = var1;
        var1 = function value() {
            var5 = this;
            var _closure3_slot0 = var5;
            var3 = var5.waitFor;
            var4 = _closure1_slot10;
            var3 = var3.bind(var5)(var4);
            var6 = var5.carefullySpeculativelyOpen;
            var7 = _closure1_slot2;
            var3 = _closure1_slot3;
            var1 = 9;
            var3 = var3[var1];
            var1 = undefined;
            var7 = var7.bind(var1)(var3);
            var3 = var7.getUserId;
            var3 = var3.bind(var7)();
            var3 = var6.bind(var5)(var3);
            var3 = var5.handleAuthenticationStoreChanged;
            var3 = var3.bind(var5)();
            var3 = var4.addChangeListener;
            var2 = function() {
                var2 = _closure3_slot0;
                var1 = var2.handleAuthenticationStoreChanged;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(10);
        var1[0] = var5;
        var5 = {};
        var8 = 'databaseName';
        var5['key'] = var8;
        var8 = function value(arg1) {
            var3 = _closure1_slot15;
            var2 = undefined;
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var5['value'] = var8;
        var1[1] = var5;
        var5 = {};
        var8 = 'database';
        var5['key'] = var8;
        var8 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var5 = arg1;
                var4 = null;
                var2 = var4 != var5;
                var1 = null;
                if(!var2) { _fun0007_ip = 49; continue _fun0007 }
case 32:
                var2 = this;
                var3 = var2.databases;
                var2 = var3.get;
                var2 = var2.bind(var3)(var5);
                var3 = var4 != var2;
                var1 = null;
                if(!var3) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                var1 = var2;
case 49:
                return var1;
            }
        };
        var5['value'] = var8;
        var1[2] = var5;
        var5 = {};
        var8 = 'carefullyOpenDatabase';
        var5['key'] = var8;
        var8 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var3 = arg1;
                var2 = this;
                var1 = var2.preventWritingCachesAgainThisSession;
                if(var1) { _fun0008_ip = 47; continue _fun0008 }
case 51:
                var1 = null;
                if(!(var1 != var3)) { _fun0008_ip = 52; continue _fun0008 }
case 53:
                var4 = var2.databases;
                var1 = var4.has;
                var1 = var1.bind(var4)(var3);
                if(var1) { _fun0008_ip = 52; continue _fun0008 }
case 54:
                var4 = function tryOpenDatabase(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var3 = _closure1_slot15;
                        var10 = undefined;
                        var2 = arg1;
                        var6 = var3.bind(var10)(var2);
                        var _closure4_slot0 = var6;
                        var4 = _closure1_slot11;
                        var3 = var4.verbose;
                        var9 = global;
                        var2 = var9.HermesInternal;
                        var5 = var2.concat;
                        var2 = 'synchronously opening ';
                        var2 = var5.bind(var2)(var6);
                        var2 = var3.bind(var4)(var2);
                        var6 = 50;
                        var7 = function() {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 10;
                            var2 = var2[var1];
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            var4 = var1.Database;
                            var3 = var4.openSyncUnsafe;
                            var2 = _closure4_slot0;
                            var1 = {};
                            var5 = true;
                            var1['invalidateDisabledHandles'] = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        };
                        var8 = 0;
                        var5 = 'tryUntil ';
case 55: // try_start_0
                        var1 = var7;
                        var1 = var1.bind(var10)();
case 56: // try_end0
                        _fun0009_ip = 57; continue _fun0009;
case 58: // catch_target0
                        CatchBlockStart(arg_register=13);
                        var13 = _closure1_slot11;
                        var12 = var13.error;
                        var2 = var8;
                        var3 = var9.HermesInternal;
                        var3 = var3.concat;
                        var3 = var3.bind(var5)(var2);
                        var3 = var12.bind(var13)(var3, var14);
                        var3 = var2 + 1;
                        var8 = var3;
                        var2 = var6;
                        var1 = null;
                        if(var3 < var2) { _fun0009_ip = 55; continue _fun0009 }
case 57:
                        return var1;
                    }
                };
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var6 = _closure1_slot11;
                var4 = var6.verbose;
                var1 = global;
                var1 = var1.HermesInternal;
                var9 = var1.concat;
                var14 = 'added database (';
                var12 = ' → ';
                var10 = ')';
                var13 = var3;
                var11 = var5;
                var1 = var14[var9](var13, var12, var11, var10, var9);
                var1 = var4.bind(var6)(var1);
                var4 = var2.databases;
                var1 = var4.set;
                var1 = var1.bind(var4)(var3, var5);
                var1 = var2.emitChange;
                var1 = var1.bind(var2)();
case 52:
                var1 = var2.database;
                var1 = var1.bind(var2)(var3);
                return var1;
case 47:
                var3 = _closure1_slot11;
                var2 = var3.verbose;
                var1 = 'Not opening database because caches have been manually cleared.';
                var1 = var2.bind(var3)(var1);
                var1 = null;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[3] = var5;
        var5 = {};
        var8 = 'replaceDisableAllDatabases';
        var5['key'] = var8;
        var8 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var7 = arg1;
                var3 = this;
                var5 = _closure1_slot11;
                var4 = var5.info;
                var2 = global;
                var2 = var2.HermesInternal;
                var8 = var2.concat;
                var6 = 'disabling and nulling all databases (reason: ';
                var2 = ')';
                var2 = var8.bind(var6)(var7, var2);
                var2 = var4.bind(var5)(var2);
                var4 = _closure1_slot12;
                var2 = var3.databases;
                var1 = var2.keys;
                var2 = var1.bind(var2)();
                var1 = undefined;
                var6 = var4.bind(var1)(var2);
                var4 = var6.bind(var1)();
                var2 = var4.done;
                var5 = null;
                if(var2) { _fun0010_ip = 59; continue _fun0010 }
case 60:
                var9 = var4.value;
                var8 = var3.databases;
                var2 = var8.get;
                var8 = var2.bind(var8)(var9);
                if(!(var5 != var8)) { _fun0010_ip = 61; continue _fun0010 }
case 44:
                var2 = var8.disable;
                var2 = var2.bind(var8)(var7);
case 61:
                if(!(var5 != var8)) { _fun0010_ip = 62; continue _fun0010 }
case 63:
                var2 = var8.close;
                var2 = var2.bind(var8)();
case 62:
                var8 = var3.databases;
                var2 = var8.set;
                var2 = var2.bind(var8)(var9, var5);
                var8 = var6.bind(var1)();
                var2 = var8.done;
                var4 = var8;
                if(!var2) { _fun0010_ip = 60; continue _fun0010 }
case 59:
                var2 = var3.emitChange;
                var2 = var2.bind(var3)();
                return var1;
            }
        };
        var5['value'] = var8;
        var1[4] = var5;
        var5 = {};
        var8 = 'remove';
        var5['key'] = var8;
        var8 = function value(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var4 = arg1;
                var2 = this;
                var3 = var2.databases;
                var1 = var3.get;
                var3 = var1.bind(var3)(var4);
                var6 = _closure1_slot11;
                var5 = var6.log;
                var1 = global;
                var1 = var1.HermesInternal;
                var9 = var1.concat;
                var14 = 'removing database (user: ';
                var12 = ', database: ';
                var10 = ')';
                var13 = var4;
                var11 = var3;
                var1 = var14[var9](var13, var12, var11, var10, var9);
                var1 = var5.bind(var6)(var1);
                var1 = null;
                if(!(var1 != var3)) { _fun0011_ip = 64; continue _fun0011 }
case 56:
                var1 = var3.close;
                var1 = var1.bind(var3)();
case 64:
                var3 = var2.databases;
                var1 = var3.delete;
                var1 = var1.bind(var3)(var4);
                var1 = var2.emitChange;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[5] = var5;
        var5 = {};
        var8 = 'handleClearCaches';
        var5['key'] = var8;
        var8 = function value(arg1) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var1 = arg1;
                var3 = this;
                var2 = var1.preventWritingCachesAgainThisSession;
                if(!var2) { _fun0012_ip = 31; continue _fun0012 }
case 65:
                var2 = true;
                var3['preventWritingCachesAgainThisSession'] = var2;
case 31:
                var2 = var3.replaceDisableAllDatabases;
                var6 = var1.reason;
                var1 = global;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var4 = 'DatabaseManager (';
                var1 = ')';
                var1 = var5.bind(var4)(var6, var1);
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[6] = var5;
        var5 = {};
        var8 = 'handleConnectionOpen';
        var5['key'] = var8;
        var8 = function value() {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var4 = this;
                var2 = _closure1_slot10;
                var1 = var2.getId;
                var3 = var1.bind(var2)();
                var2 = var4.databases;
                var1 = var2.get;
                var7 = var1.bind(var2)(var3);
                var2 = null;
                var8 = var2 == var7;
                var1 = undefined;
                var6 = undefined;
                if(var8) { _fun0013_ip = 66; continue _fun0013 }
case 5:
                var8 = var7.state;
                var6 = var8.bind(var7)();
case 66:
                var2 = var2 == var7;
                if(!var2) { _fun0013_ip = 67; continue _fun0013 }
case 68:
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var5 = 10;
                var5 = var8[var5];
                var5 = var7.bind(var1)(var5);
                var5 = var5.DatabaseState;
                var5 = var5.Open;
                var2 = var6 !== var5;
case 67:
                if(!var2) { _fun0013_ip = 69; continue _fun0013 }
case 70:
                var2 = var4.remove;
                var2 = var2.bind(var4)(var3);
case 69:
                var2 = var4.carefullyOpenDatabase;
                var2 = var2.bind(var4)(var3);
                return var1;
            }
        };
        var5['value'] = var8;
        var1[7] = var5;
        var5 = {};
        var8 = 'handleAuthenticationStoreChanged';
        var5['key'] = var8;
        var8 = function value() {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var1 = this;
                var3 = _closure1_slot10;
                var2 = var3.getId;
                var2 = var2.bind(var3)();
                var3 = var1.activeUserId;
                if(!(var2 !== var3)) { _fun0014_ip = 71; continue _fun0014 }
case 33:
                var6 = var1.databases;
                var5 = var6.get;
                var6 = var5.bind(var6)(var3);
                var8 = _closure1_slot11;
                var7 = var8.verbose;
                var5 = global;
                var5 = var5.HermesInternal;
                var11 = var5.concat;
                var18 = 'active user changed (now: ';
                var9 = ', was: ';
                var12 = ')';
                var17 = var2;
                var16 = var9;
                var15 = var3;
                var14 = var9;
                var13 = var6;
                var5 = var18[var11](var17, var16, var15, var14, var13, var12, var11);
                var5 = var7.bind(var8)(var5);
                var5 = null;
                if(!(var5 != var6)) { _fun0014_ip = 72; continue _fun0014 }
case 44:
                var5 = var6.close;
                var5 = var5.bind(var6)();
case 72:
                var6 = _closure1_slot2;
                var5 = _closure1_slot3;
                var4 = 9;
                var5 = var5[var4];
                var4 = undefined;
                var5 = var6.bind(var4)(var5);
                var4 = var5.setUserId;
                var4 = var4.bind(var5)(var2);
                var1['activeUserId'] = var2;
                var2 = var1.databases;
                var1 = var2.delete;
                var1 = var1.bind(var2)(var3);
case 71:
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var8;
        var1[8] = var5;
        var5 = {};
        var8 = 'carefullySpeculativelyOpen';
        var5['key'] = var8;
        var8 = _closure1_slot4;
        var7 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    StartGenerator();
                    var10 = arg1;
                    var5 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0015_ip = 73; continue _fun0015 }
case 74:
                    var2 = var5.preventWritingCachesAgainThisSession;
                    if(var2) { _fun0015_ip = 18; continue _fun0015 }
case 34:
                    var3 = null;
                    if(!(var3 != var10)) { _fun0015_ip = 75; continue _fun0015 }
case 76:
                    var4 = function trySpeculativelyOpenDatabaseAsync() {
                        var1 = undefined;
                        var4 = _closure1_slot16;
                        var3 = var4.apply;
                        var1 = arguments;
                        var2 = var1;
                        var1 = this;
                        var1 = var3.bind(var4)(var1, var2);
                        return var1;
                    };
                    var2 = undefined;
                    var2 = var4.bind(var2)(var10);
                    SaveGenerator(address=55);
case 77:
                    return var2;
case 4:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0015_ip = 78; continue _fun0015 }
case 79:
                    if(!(var3 != var2)) { _fun0015_ip = 80; continue _fun0015 }
case 81:
                    var6 = var5.databases;
                    var4 = var6.has;
                    var4 = var4.bind(var6)(var10);
                    if(var4) { _fun0015_ip = 80; continue _fun0015 }
case 58:
                    var7 = _closure1_slot11;
                    var6 = var7.verbose;
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var11 = var4.concat;
                    var16 = 'added speculative database (';
                    var14 = ' → ';
                    var12 = ')';
                    var15 = var10;
                    var13 = var2;
                    var4 = var16[var11](var15, var14, var13, var12, var11);
                    var4 = var6.bind(var7)(var4);
                    var6 = var5.databases;
                    var4 = var6.set;
                    var4 = var4.bind(var6)(var10, var2);
                    var4 = var5.emitChange;
                    var4 = var4.bind(var5)();
                    _fun0015_ip = 75; continue _fun0015;
case 80:
                    var6 = _closure1_slot11;
                    var5 = var6.verbose;
                    var4 = global;
                    var4 = var4.HermesInternal;
                    var9 = var4.concat;
                    var16 = 'discarding speculative database (';
                    var14 = ' → ';
                    var12 = ')';
                    var15 = var10;
                    var13 = var2;
                    var4 = var16[var9](var15, var14, var13, var12, var11);
                    var4 = var5.bind(var6)(var4);
                    if(!(var3 != var2)) { _fun0015_ip = 75; continue _fun0015 }
case 21:
                    var3 = var2.close;
                    var3 = var3.bind(var2)();
                    _fun0015_ip = 75; continue _fun0015;
case 78:
                    return var2;
case 18:
                    var4 = _closure1_slot11;
                    var3 = var4.verbose;
                    var2 = 'Not opening database because caches have been manually cleared.';
                    var2 = var3.bind(var4)(var2);
case 75:
                    var2 = undefined;
                    return var2;
case 73:
                    return var1;
                }
            };
            return var1;
        };
        var7 = var8.bind(var3)(var7);
        var _closure2_slot0 = var7;
        var6 = function carefullySpeculativelyOpen() {
            var1 = undefined;
            var4 = _closure2_slot0;
            var3 = var4.apply;
            var1 = arguments;
            var2 = var1;
            var1 = this;
            var1 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var5['value'] = var6;
        var1[9] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/system/DatabaseManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();
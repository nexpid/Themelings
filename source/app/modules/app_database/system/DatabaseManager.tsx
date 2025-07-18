// app/modules/app_database/system/DatabaseManager.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = native4;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
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
            if(!var2) { _fun0001_ip = 45; continue _fun0001 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0001_ip = 54; continue _fun0001 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0001_ip = 342; continue _fun0001 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 322; continue _fun0001 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 282; continue _fun0001 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 269; continue _fun0001 }
 109:
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
            if(!var7) { _fun0001_ip = 162; continue _fun0001 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0001_ip = 178; continue _fun0001 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 248; continue _fun0001 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 233; continue _fun0001 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 246; continue _fun0001 }
 233:
            var9 = _closure1_slot13;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0001_ip = 264; continue _fun0001;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0001_ip = 282; continue _fun0001;
 269:
            var7 = _closure1_slot13;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0001_ip = 322; continue _fun0001 }
 288:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
 322:
            if(!var4) { _fun0001_ip = 329; continue _fun0001 }
 325:
            _closure2_slot0 = var4;
 329:
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
 342:
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
    var _closure1_slot13 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
 2: // try_start_0
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
 70: // try_end0
            _fun0004_ip = 74; continue _fun0004;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 152; continue _fun0005 }
 10:
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
 71: // try_start_0
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot3;
                    var4 = 10;
                    var4 = var7[var4];
                    var4 = var5.bind(var6)(var4);
                    var5 = var4.Database;
                    var4 = var5.open;
                    var3 = var4.bind(var5)(var3);
                    SaveGenerator(address=112);
 110:
                    return var3;
 112:
                    ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                    if(var4) { _fun0005_ip = 121; continue _fun0005 }
 118: // try_end0
                    return var3;
 121:
                    return var3;
 124: // catch_target0
                    CatchBlockStart(arg_register=4);
                    var4 = _closure1_slot11;
                    var3 = var4.warn;
                    var2 = "couldn't speculatively open database.";
                    var2 = var3.bind(var4)(var2, var5);
                    var2 = null;
                    return var2;
 152:
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
 0:
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
                if(var1) { _fun0006_ip = 167; continue _fun0006 }
 154:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0006_ip = 201; continue _fun0006;
 167:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot8;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 201:
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
 0:
                var5 = arg1;
                var4 = null;
                var2 = var4 != var5;
                var1 = null;
                if(!var2) { _fun0007_ip = 45; continue _fun0007 }
 14:
                var2 = this;
                var3 = var2.databases;
                var2 = var3.get;
                var2 = var2.bind(var3)(var5);
                var3 = var4 != var2;
                var1 = null;
                if(!var3) { _fun0007_ip = 45; continue _fun0007 }
 42:
                var1 = var2;
 45:
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
 0:
                var3 = arg1;
                var2 = this;
                var1 = var2.preventWritingCachesAgainThisSession;
                if(var1) { _fun0008_ip = 154; continue _fun0008 }
 18:
                var1 = null;
                if(!(var1 != var3)) { _fun0008_ip = 141; continue _fun0008 }
 24:
                var4 = var2.databases;
                var1 = var4.has;
                var1 = var1.bind(var4)(var3);
                if(var1) { _fun0008_ip = 141; continue _fun0008 }
 43:
                var4 = function tryOpenDatabase(arg1) {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
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
 78: // try_start_0
                        var1 = var7;
                        var1 = var1.bind(var10)();
 85: // try_end0
                        _fun0009_ip = 138; continue _fun0009;
 87: // catch_target0
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
                        if(var3 < var2) { _fun0009_ip = 78; continue _fun0009 }
 138:
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
 141:
                var1 = var2.database;
                var1 = var1.bind(var2)(var3);
                return var1;
 154:
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
 0:
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
                if(var2) { _fun0010_ip = 175; continue _fun0010 }
 93:
                var9 = var4.value;
                var8 = var3.databases;
                var2 = var8.get;
                var8 = var2.bind(var8)(var9);
                if(!(var5 != var8)) { _fun0010_ip = 129; continue _fun0010 }
 118:
                var2 = var8.disable;
                var2 = var2.bind(var8)(var7);
 129:
                if(!(var5 != var8)) { _fun0010_ip = 143; continue _fun0010 }
 133:
                var2 = var8.close;
                var2 = var2.bind(var8)();
 143:
                var8 = var3.databases;
                var2 = var8.set;
                var2 = var2.bind(var8)(var9, var5);
                var8 = var6.bind(var1)();
                var2 = var8.done;
                var4 = var8;
                if(!var2) { _fun0010_ip = 93; continue _fun0010 }
 175:
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
 0:
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
                if(!(var1 != var3)) { _fun0011_ip = 95; continue _fun0011 }
 85:
                var1 = var3.close;
                var1 = var1.bind(var3)();
 95:
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
 0:
                var1 = arg1;
                var3 = this;
                var2 = var1.preventWritingCachesAgainThisSession;
                if(!var2) { _fun0012_ip = 23; continue _fun0012 }
 15:
                var2 = true;
                var3['preventWritingCachesAgainThisSession'] = var2;
 23:
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
 0:
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
                if(var8) { _fun0013_ip = 58; continue _fun0013 }
 49:
                var8 = var7.state;
                var6 = var8.bind(var7)();
 58:
                var2 = var2 == var7;
                if(!var2) { _fun0013_ip = 101; continue _fun0013 }
 65:
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var5 = 10;
                var5 = var8[var5];
                var5 = var7.bind(var1)(var5);
                var5 = var5.DatabaseState;
                var5 = var5.Open;
                var2 = var6 !== var5;
 101:
                if(!var2) { _fun0013_ip = 115; continue _fun0013 }
 104:
                var2 = var4.remove;
                var2 = var2.bind(var4)(var3);
 115:
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
 0:
                var1 = this;
                var3 = _closure1_slot10;
                var2 = var3.getId;
                var2 = var2.bind(var3)();
                var3 = var1.activeUserId;
                if(!(var2 !== var3)) { _fun0014_ip = 183; continue _fun0014 }
 33:
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
                if(!(var5 != var6)) { _fun0014_ip = 128; continue _fun0014 }
 118:
                var5 = var6.close;
                var5 = var5.bind(var6)();
 128:
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
 183:
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
 0:
                    StartGenerator();
                    var10 = arg1;
                    var5 = this;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0015_ip = 278; continue _fun0015 }
 16:
                    var2 = var5.preventWritingCachesAgainThisSession;
                    if(var2) { _fun0015_ip = 249; continue _fun0015 }
 28:
                    var3 = null;
                    if(!(var3 != var10)) { _fun0015_ip = 273; continue _fun0015 }
 37:
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
 53:
                    return var2;
 55:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0015_ip = 246; continue _fun0015 }
 64:
                    if(!(var3 != var2)) { _fun0015_ip = 173; continue _fun0015 }
 68:
                    var6 = var5.databases;
                    var4 = var6.has;
                    var4 = var4.bind(var6)(var10);
                    if(var4) { _fun0015_ip = 173; continue _fun0015 }
 87:
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
                    _fun0015_ip = 273; continue _fun0015;
 173:
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
                    if(!(var3 != var2)) { _fun0015_ip = 273; continue _fun0015 }
 234:
                    var3 = var2.close;
                    var3 = var3.bind(var2)();
                    _fun0015_ip = 273; continue _fun0015;
 246:
                    return var2;
 249:
                    var4 = _closure1_slot11;
                    var3 = var4.verbose;
                    var2 = 'Not opening database because caches have been manually cleared.';
                    var2 = var3.bind(var4)(var2);
 273:
                    var2 = undefined;
                    return var2;
 278:
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
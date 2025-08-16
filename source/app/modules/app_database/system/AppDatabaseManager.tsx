// app/modules/app_database/system/AppDatabaseManager.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
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
            var9 = _closure1_slot10;
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
            var7 = _closure1_slot10;
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
    var _closure1_slot9 = var1;
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
    var _closure1_slot10 = var1;
    var4 = global;
    var10 = var4.Object;
    var9 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var7);
    var1 = 0;
    var7 = var6[var1];
    var1 = undefined;
    var7 = var8.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var6[var7];
    var7 = var8.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var6[var7];
    var9 = var8.bind(var1)(var7);
    var7 = var9.prototype;
    var8 = Object.create(var7, {constructor: {value: var9}});
    var13 = 'AppDatabaseManager';
    var14 = var8;
    var7 = new var14[var9](var13, var12);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot7 = var7;
    var8 = var4.Set;
    var4 = var8.prototype;
    var7 = Object.create(var4, {constructor: {value: var8}});
    var13 = ['MESSAGE_CREATE'];
    var14 = var7;
    var4 = new var14[var8](var13, var12);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot8 = var4;
    var2 = function() {
        var5 = function AppDatabaseManager(arg1, arg2, arg3) {
            var11 = arg1;
            var5 = arg3;
            var2 = this;
            var _closure3_slot0 = var2;
            var6 = _closure1_slot4;
            var9 = _closure2_slot0;
            var1 = undefined;
            var6 = var6.bind(var1)(var2, var9);
            var6 = var9.computeEntries;
            var8 = var6.bind(var9)(var11, var5);
            var7 = _closure1_slot3;
            var6 = 2;
            var10 = var7.bind(var1)(var8, var6);
            var6 = 0;
            var7 = var10[var6];
            var8 = 1;
            var8 = var10[var8];
            var2['name'] = var11;
            var2['entries'] = var8;
            var2['actions'] = var7;
            var7 = null;
            var2['lastDatabase'] = var7;
            var12 = var9.register;
            var7 = '_CLEAR_CACHES';
            var18 = var11 + var7;
            var17 = ['CLEAR_CACHES'];
            var16 = new Array(0);
            var15 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = _closure1_slot9;
                    var1 = _closure3_slot0;
                    var2 = var1.entries;
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.bind(var1)();
                    var2 = var3.done;
                    if(var2) { _fun0004_ip = 69; continue _fun0004 }
 39:
                    var5 = var3.value;
                    var2 = var5.reset;
                    var2 = var2.bind(var5)();
                    var5 = var4.bind(var1)();
                    var2 = var5.done;
                    var3 = var5;
                    if(!var2) { _fun0004_ip = 39; continue _fun0004 }
 69:
                    return var1;
                }
            };
            var19 = var9;
            var4 = var19[var12](var18, var17, var16, var15, var14);
            var8 = var9.register;
            var7 = var2.actions;
            var4 = var7.keys;
            var17 = var4.bind(var7)();
            var7 = new Array(0);
            var18 = var7;
            var16 = 0;
            var4 = arraySpread(var18, var17, var16);
            var6 = var2.handleAction;
            var4 = var6.bind;
            var15 = var4.bind(var6)(var2);
            var16 = arg2;
            var19 = var9;
            var18 = var11;
            var17 = var7;
            var4 = var19[var8](var18, var17, var16, var15, var14);
            var4 = _closure1_slot7;
            var3 = var4.verbose;
            var16 = var5.length;
            var2 = var2.actions;
            var14 = var2.size;
            var2 = global;
            var2 = var2.HermesInternal;
            var8 = var2.concat;
            var19 = '';
            var17 = ' created with ';
            var15 = ' modules, ';
            var13 = ' distinct actions.';
            var18 = var11;
            var2 = var19[var8](var18, var17, var16, var15, var14, var13, var12);
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var _closure2_slot0 = var5;
        var4 = _closure1_slot5;
        var1 = {};
        var2 = 'handleAction';
        var1['key'] = var2;
        var2 = function value(arg1) {
            var4 = arg1;
            var3 = this;
            var2 = var3.validateInDev;
            var1 = var4.type;
            var1 = var2.bind(var3)(var1);
            var5 = _closure1_slot6;
            var2 = var5.getId;
            var5 = var2.bind(var5)();
            var6 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 5;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var6.bind(var1)(var2);
            var1 = var2.database;
            var2 = var1.bind(var2)(var5);
            var1 = var3.resetModules;
            var1 = var1.bind(var3)(var4, var2);
            var1 = var3.executeModules;
            var1 = var1.bind(var3)(var4, var2);
            var1 = false;
            return var1;
        };
        var1['value'] = var2;
        var3 = new Array(4);
        var3[0] = var1;
        var1 = {};
        var2 = 'resetModules';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var2 = arg2;
                var1 = this;
                var3 = var1.lastDatabase;
                if(!(var2 !== var3)) { _fun0005_ip = 160; continue _fun0005 }
 19:
                var6 = _closure1_slot7;
                var5 = var6.verbose;
                var18 = var1.lastDatabase;
                var4 = arg1;
                var14 = var4.type;
                var4 = global;
                var4 = var4.HermesInternal;
                var10 = var4.concat;
                var19 = 'database has changed (was: ';
                var17 = ', now: ';
                var15 = ', action: ';
                var13 = '). resetting modules.';
                var16 = var2;
                var4 = var19[var10](var18, var17, var16, var15, var14, var13, var12);
                var4 = var5.bind(var6)(var4);
                var4 = _closure1_slot9;
                var3 = var1.entries;
                var6 = undefined;
                var5 = var4.bind(var6)(var3);
                var4 = var5.bind(var6)();
                var3 = var4.done;
                if(var3) { _fun0005_ip = 154; continue _fun0005 }
 124:
                var7 = var4.value;
                var3 = var7.reset;
                var3 = var3.bind(var7)();
                var7 = var5.bind(var6)();
                var3 = var7.done;
                var4 = var7;
                if(!var3) { _fun0005_ip = 124; continue _fun0005 }
 154:
                var1['lastDatabase'] = var2;
 160:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var2;
        var3[1] = var1;
        var1 = {};
        var2 = 'executeModules';
        var1['key'] = var2;
        var2 = function value(arg1, arg2) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = arg1;
                var7 = arg2;
                var _closure3_slot0 = var2;
                var _closure3_slot1 = var7;
                var15 = var2.type;
                var1 = this;
                var4 = var1.actions;
                var1 = var4.get;
                var4 = var1.bind(var4)(var15);
                var _closure3_slot2 = var4;
                var6 = null;
                var5 = var6 == var7;
                var1 = undefined;
                var14 = undefined;
                if(var5) { _fun0006_ip = 66; continue _fun0006 }
 57:
                var5 = var7.state;
                var14 = var5.bind(var7)();
 66:
                if(!(var6 != var4)) { _fun0006_ip = 313; continue _fun0006 }
 73:
                var5 = var4.length;
                var4 = 0;
                if(!(var4 !== var5)) { _fun0006_ip = 313; continue _fun0006 }
 87:
                if(!(var6 != var7)) { _fun0006_ip = 130; continue _fun0006 }
 91:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 6;
                var5 = var9[var5];
                var5 = var8.bind(var1)(var5);
                var5 = var5.DatabaseState;
                var5 = var5.Open;
                if(!(var14 !== var5)) { _fun0006_ip = 198; continue _fun0006 }
 130:
                var9 = _closure1_slot7;
                var8 = var9.verbose;
                var5 = global;
                var5 = var5.HermesInternal;
                var13 = var5.concat;
                var22 = 'no usable database; skipping action (type: ';
                var20 = ', database: ';
                var18 = ', state: ';
                var16 = ')';
                var21 = var15;
                var19 = var7;
                var17 = var14;
                var5 = var22[var13](var21, var20, var19, var18, var17, var16, var15);
                var5 = var8.bind(var9)(var5);
                _fun0006_ip = 313; continue _fun0006;
 198:
                var5 = var7.transaction;
                var9 = _closure1_slot8;
                var8 = var9.has;
                var4 = var2.type;
                var4 = var8.bind(var9)(var4);
                var6 = null;
                if(var4) { _fun0006_ip = 257; continue _fun0006 }
 228:
                var9 = var2.type;
                var4 = global;
                var4 = var4.HermesInternal;
                var8 = var4.concat;
                var4 = 'Dispatch ';
                var6 = var8.bind(var4)(var9);
 257:
                var4 = function(arg1) {
                    var2 = arg1;
                    var _closure4_slot0 = var2;
                    var3 = _closure3_slot2;
                    var2 = var3.forEach;
                    var1 = function(arg1) {
                        var4 = arg1;
                        var3 = var4.execute;
                        var2 = _closure3_slot0;
                        var1 = _closure4_slot0;
                        var1 = var3.bind(var4)(var2, var1);
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var1;
                };
                var5 = var5.bind(var7)(var4, var6);
                var4 = var5.catch;
                var3 = function(arg1) {
                    var5 = _closure2_slot0;
                    var4 = var5.handleException;
                    var3 = _closure3_slot1;
                    var2 = _closure3_slot0;
                    var1 = arg1;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var1;
                };
                var4 = var4.bind(var5)(var3);
                var5 = var2.type;
                var3 = 'WRITE_CACHES';
                if(!(var3 === var5)) { _fun0006_ip = 313; continue _fun0006 }
 297:
                var3 = var2.promisesToWaitOn;
                var2 = var3.push;
                var2 = var2.bind(var3)(var4);
 313:
                return var1;
            }
        };
        var1['value'] = var2;
        var3[2] = var1;
        var1 = {};
        var2 = 'validateInDev';
        var1['key'] = var2;
        var2 = function value() {
            var1 = undefined;
            return var1;
        };
        var1['value'] = var2;
        var3[3] = var1;
        var1 = {};
        var2 = 'handleException';
        var1['key'] = var2;
        var2 = function value(arg1, arg2, arg3) {
            var6 = arg3;
            var5 = _closure1_slot7;
            var4 = var5.info;
            var3 = var6.stack;
            var2 = 'disabling database · error encountered during dispatch';
            var2 = var4.bind(var5)(var2, var6, var3);
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 7;
            var2 = var2[var1];
            var1 = undefined;
            var4 = var3.bind(var1)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var5 = 'RESET_SOCKET';
            var2['type'] = var5;
            var5 = {};
            var5['error'] = var6;
            var6 = arg2;
            var9 = var6.type;
            var6 = global;
            var6 = var6.HermesInternal;
            var8 = var6.concat;
            var7 = 'AppDatabaseManager(';
            var6 = ')';
            var6 = var8.bind(var7)(var9, var6);
            var5['action'] = var6;
            var6 = true;
            var5['clearCache'] = var6;
            var2['args'] = var5;
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(3);
        var2[0] = var1;
        var1 = {};
        var7 = 'computeEntries';
        var1['key'] = var7;
        var7 = function value(arg1, arg2) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var4 = arg2;
                var2 = arg1;
                var _closure3_slot0 = var2;
                var2 = global;
                var2 = var2.Map;
                var3 = var2.prototype;
                var3 = Object.create(var3, {constructor: {value: var2}});
                var16 = var3;
                var2 = new var16[var2](var15);
                var3 = var2 instanceof Object ? var2 : var3;
                var2 = var4.map;
                var1 = function(arg1) {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var4 = var1.Entry;
                    var6 = _closure3_slot0;
                    var1 = var4.prototype;
                    var2 = Object.create(var1, {constructor: {value: var4}});
                    var5 = arg1;
                    var7 = var2;
                    var1 = new var7[var4](var6, var5, var4);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                };
                var2 = var2.bind(var4)(var1);
                var5 = var3.set;
                var4 = 'LOGOUT';
                var1 = new Array(0);
                var1 = var5.bind(var3)(var4, var1);
                var5 = var3.set;
                var4 = 'LOGIN_RESET';
                var1 = new Array(0);
                var1 = var5.bind(var3)(var4, var1);
                var1 = _closure1_slot9;
                var7 = undefined;
                var6 = var1.bind(var7)(var2);
                var4 = var6.bind(var7)();
                var1 = var4.done;
                var5 = var4;
                var4 = undefined;
                if(var1) { _fun0007_ip = 242; continue _fun0007 }
 124:
                var11 = var5.value;
                var9 = _closure1_slot9;
                var1 = var11.actions;
                var10 = var9.bind(var7)(var1);
                var9 = var10.bind(var7)();
                var1 = var9.done;
                if(var1) { _fun0007_ip = 227; continue _fun0007 }
 156:
                var12 = var9.value;
                var1 = var3.has;
                var1 = var1.bind(var3)(var12);
                if(var1) { _fun0007_ip = 189; continue _fun0007 }
 174:
                var13 = var3.set;
                var1 = new Array(0);
                var1 = var13.bind(var3)(var12, var1);
 189:
                var1 = var3.get;
                var13 = var1.bind(var3)(var12);
                var1 = var13.push;
                var1 = var1.bind(var13)(var11);
                var13 = var10.bind(var7)();
                var1 = var13.done;
                var9 = var13;
                var4 = var12;
                if(!var1) { _fun0007_ip = 156; continue _fun0007 }
 227:
                var9 = var6.bind(var7)();
                var1 = var9.done;
                var5 = var9;
                if(!var1) { _fun0007_ip = 124; continue _fun0007 }
 242:
                var1 = new Array(2);
                var1[0] = var3;
                var1[1] = var2;
                return var1;
            }
        };
        var1['value'] = var7;
        var2[1] = var1;
        var1 = {};
        var7 = 'register';
        var1['key'] = var7;
        var6 = function value(arg1, arg2, arg3, arg4) {
            var13 = arg2;
            var2 = arg4;
            var _closure3_slot0 = var2;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 7;
            var7 = var5[var2];
            var3 = undefined;
            var10 = var4.bind(var3)(var7);
            var9 = var10.register;
            var7 = global;
            var11 = var7.Object;
            var8 = var11.fromEntries;
            var12 = var13.map;
            var7 = function(arg1) {
                var1 = new Array(2);
                var2 = arg1;
                var1[0] = var2;
                var2 = _closure3_slot0;
                var1[1] = var2;
                return var1;
            };
            var7 = var12.bind(var13)(var7);
            var16 = var8.bind(var11)(var7);
            var7 = _closure1_slot0;
            var6 = var5[var2];
            var6 = var7.bind(var3)(var6);
            var6 = var6.DispatchBand;
            var14 = var6.Database;
            var17 = arg1;
            var15 = function() {
                var1 = undefined;
                return var1;
            };
            var18 = var10;
            var1 = var18[var9](var17, var16, var15, var14, var13);
            var2 = var5[var2];
            var4 = var4.bind(var3)(var2);
            var3 = var4.addDependencies;
            var2 = arg3;
            var2 = var3.bind(var4)(var1, var2);
            return var1;
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var5, var3, var2);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/system/AppDatabaseManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['AppDatabaseManager'] = var2;
    return var1;
})();
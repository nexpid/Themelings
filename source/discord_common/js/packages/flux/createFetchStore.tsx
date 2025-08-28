// discord_common/js/packages/flux/createFetchStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var1 = function _isNativeReflectConstruct() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
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
            _fun0001_ip = 74; continue _fun0001;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot23 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot23 = var1;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0002_ip = 46; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 46:
            if(var2) { _fun0002_ip = 55; continue _fun0002 }
 49:
            var2 = var3.@@iterator;
 55:
            if(var2) { _fun0002_ip = 343; continue _fun0002 }
 61:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 323; continue _fun0002 }
 86:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 283; continue _fun0002 }
 96:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 270; continue _fun0002 }
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
            if(!var7) { _fun0002_ip = 163; continue _fun0002 }
 158:
            var7 = var3.constructor;
 163:
            var10 = var9;
            if(!var7) { _fun0002_ip = 179; continue _fun0002 }
 169:
            var7 = var3.constructor;
            var10 = var7.name;
 179:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 187:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 249; continue _fun0002 }
 195:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 234; continue _fun0002 }
 205:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 247; continue _fun0002 }
 234:
            var9 = _closure1_slot25;
            var7 = var9.bind(var8)(var3, var8);
 247:
            _fun0002_ip = 265; continue _fun0002;
 249:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 265:
            var6 = var7;
            _fun0002_ip = 283; continue _fun0002;
 270:
            var7 = _closure1_slot25;
            var6 = var7.bind(var8)(var3, var8);
 283:
            var4 = var6;
            if(var4) { _fun0002_ip = 323; continue _fun0002 }
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
            if(!var4) { _fun0002_ip = 330; continue _fun0002 }
 326:
            _closure2_slot0 = var4;
 330:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0003_ip = 56; continue _fun0003 }
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
                    _fun0003_ip = 67; continue _fun0003;
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
    var _closure1_slot24 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0004_ip = 23; continue _fun0004 }
 14:
            var2 = var4.length;
            var1 = var3 > var2;
 23:
            var2 = undefined;
            if(!var1) { _fun0004_ip = 33; continue _fun0004 }
 28:
            var2 = var4.length;
 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0004_ip = 70; continue _fun0004 }
 55:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0004_ip = 55; continue _fun0004 }
 70:
            return var1;
        }
    };
    var _closure1_slot25 = var1;
    var1 = function getIsDataHydrated(arg1, arg2) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 11;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var3 = var2.useStateFromStoresArray;
            var2 = arg2;
            if(!(var2 !== var3)) { _fun0005_ip = 51; continue _fun0005 }
 41:
            var2 = null;
            if(!(var2 != var1)) { _fun0005_ip = 83; continue _fun0005 }
 47:
            var2 = true;
            return var2;
 51:
            var2 = global;
            var3 = var2.Array;
            var2 = var3.isArray;
            var2 = var2.bind(var3)(var1);
            if(!var2) { _fun0005_ip = 83; continue _fun0005 }
 72:
            var2 = var1.length;
            var1 = 0;
            if(!(!(var2 > var1))) { _fun0005_ip = 87; continue _fun0005 }
 83:
            var1 = false;
            return var1;
 87:
            var1 = true;
            return var1;
        }
    };
    var _closure1_slot26 = var1;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var15 = 0;
    var7 = var6[var15];
    var1 = undefined;
    var7 = var10.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var14 = 1;
    var7 = var6[var14];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var13 = 2;
    var7 = var6[var13];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot5 = var7;
    var12 = 3;
    var7 = var6[var12];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var6[var7];
    var7 = var10.bind(var1)(var7);
    var _closure1_slot7 = var7;
    var8 = 5;
    var7 = var6[var8];
    var7 = var10.bind(var1)(var7);
    var9 = 6;
    var9 = var6[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot8 = var9;
    var9 = 7;
    var9 = var6[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot9 = var9;
    var9 = 8;
    var9 = var6[var9];
    var9 = var10.bind(var1)(var9);
    var _closure1_slot10 = var9;
    var9 = 9;
    var9 = var6[var9];
    var10 = var10.bind(var1)(var9);
    var9 = 10;
    var9 = var6[var9];
    var9 = var5.bind(var1)(var9);
    var11 = var9.useCallback;
    var _closure1_slot11 = var11;
    var11 = var9.useEffect;
    var _closure1_slot12 = var11;
    var11 = var9.useMemo;
    var _closure1_slot13 = var11;
    var11 = var9.useRef;
    var _closure1_slot14 = var11;
    var9 = var9.useState;
    var _closure1_slot15 = var9;
    var9 = {};
    var9['Init'] = var15;
    var11 = 'Init';
    var9[var15] = var11;
    var9['Fetching'] = var14;
    var11 = 'Fetching';
    var9[var14] = var11;
    var9['FetchFailed'] = var13;
    var11 = 'FetchFailed';
    var9[var13] = var11;
    var9['FetchSuccess'] = var12;
    var11 = 'FetchSuccess';
    var9[var12] = var11;
    var _closure1_slot16 = var9;
    var9 = 'nodes';
    var9 = var10.bind(var1)(var9);
    var _closure1_slot17 = var9;
    var9 = 'listeners';
    var9 = var10.bind(var1)(var9);
    var _closure1_slot18 = var9;
    var9 = 'state';
    var9 = var10.bind(var1)(var9);
    var _closure1_slot19 = var9;
    var9 = function() {
        var5 = function DataFetchStateTrie() {
            var6 = this;
            var3 = _closure1_slot8;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var3.bind(var1)(var6, var2);
            var2 = global;
            var9 = var2.Object;
            var5 = var9.defineProperty;
            var4 = _closure1_slot17;
            var3 = {};
            var7 = true;
            var3['writable'] = var7;
            var12 = var2.Object;
            var11 = var12.create;
            var10 = null;
            var10 = var11.bind(var12)(var10);
            var3['value'] = var10;
            var3 = var5.bind(var9)(var6, var4, var3);
            var9 = var2.Object;
            var5 = var9.defineProperty;
            var4 = _closure1_slot18;
            var3 = {};
            var3['writable'] = var7;
            var10 = var2.Set;
            var11 = var10.prototype;
            var11 = Object.create(var11, {constructor: {value: var10}});
            var16 = var11;
            var10 = new var16[var10](var15);
            var10 = var10 instanceof Object ? var10 : var11;
            var3['value'] = var10;
            var3 = var5.bind(var9)(var6, var4, var3);
            var5 = var2.Object;
            var4 = var5.defineProperty;
            var3 = _closure1_slot19;
            var2 = {};
            var2['writable'] = var7;
            var7 = {};
            var9 = 0;
            var7['fetchFailCounter'] = var9;
            var8 = _closure1_slot16;
            var8 = var8.Init;
            var7['fetchState'] = var8;
            var2['value'] = var7;
            var2 = var4.bind(var5)(var6, var3, var2);
            return var1;
        };
        var _closure2_slot0 = var5;
        var4 = _closure1_slot9;
        var1 = {};
        var3 = 'maybeAbort';
        var1['key'] = var3;
        var3 = function value(arg1) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var3 = this;
                var2 = var3.search;
                var1 = arg1;
                var4 = var2.bind(var3)(var1);
                var2 = _closure1_slot10;
                var3 = _closure1_slot19;
                var1 = undefined;
                var2 = var2.bind(var1)(var4, var3);
                var2 = var2[var3];
                var3 = var2.controller;
                var2 = null;
                if(!(var2 != var3)) { _fun0006_ip = 62; continue _fun0006 }
 52:
                var2 = var3.abort;
                var2 = var2.bind(var3)();
 62:
                return var1;
            }
        };
        var1['value'] = var3;
        var3 = new Array(14);
        var3[0] = var1;
        var1 = {};
        var6 = 'doesDataNeedValidation';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var3 = this;
            var2 = var3.search;
            var1 = arg1;
            var4 = var2.bind(var3)(var1);
            var3 = _closure1_slot10;
            var2 = _closure1_slot19;
            var1 = undefined;
            var1 = var3.bind(var1)(var4, var2);
            var1 = var1[var2];
            var2 = var1.isStale;
            var1 = true;
            var1 = var1 === var2;
            return var1;
        };
        var1['value'] = var6;
        var3[1] = var1;
        var1 = {};
        var6 = 'getOrCreate';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var2 = arg1;
                var5 = this;
                var1 = _closure1_slot10;
                var6 = _closure1_slot17;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var6);
                var1 = var1[var6];
                var6 = var1[var2];
                var1 = null;
                if(!(var1 == var6)) { _fun0007_ip = 88; continue _fun0007 }
 39:
                var1 = _closure1_slot10;
                var6 = _closure1_slot17;
                var1 = var1.bind(var4)(var5, var6);
                var6 = var1[var6];
                var1 = _closure2_slot0;
                var7 = var1.prototype;
                var7 = Object.create(var7, {constructor: {value: var1}});
                var10 = var7;
                var1 = new var10[var1](var9);
                var1 = var1 instanceof Object ? var1 : var7;
                var6[var2] = var1;
 88:
                var1 = _closure1_slot10;
                var3 = _closure1_slot17;
                var1 = var1.bind(var4)(var5, var3);
                var1 = var1[var3];
                var1 = var1[var2];
                return var1;
            }
        };
        var1['value'] = var6;
        var3[2] = var1;
        var1 = {};
        var6 = 'getState';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var5 = this;
            var4 = _closure1_slot10;
            var3 = var5.search;
            var2 = arg1;
            var3 = var3.bind(var5)(var2);
            var2 = _closure1_slot19;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            var1 = var1[var2];
            return var1;
        };
        var1['value'] = var6;
        var3[3] = var1;
        var1 = {};
        var6 = 'loadingDone';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var4 = arg1;
                var8 = arguments[1];
                var3 = this;
                var1 = undefined;
                if(!(var8 === var1)) { _fun0008_ip = 17; continue _fun0008 }
 15:
                var8 = false;
 17:
                var2 = var3.search;
                var6 = var2.bind(var3)(var4);
                var2 = _closure1_slot10;
                var7 = _closure1_slot19;
                var9 = var2.bind(var1)(var6, var7);
                var9 = var9[var7];
                if(var8) { _fun0008_ip = 99; continue _fun0008 }
 52:
                var10 = var9.fetchFailCounter;
                var8 = 1;
                var8 = var10 + var8;
                var9['fetchFailCounter'] = var8;
                var8 = var2.bind(var1)(var6, var7);
                var10 = var8[var7];
                var8 = _closure1_slot16;
                var8 = var8.FetchFailed;
                var10['fetchState'] = var8;
                _fun0008_ip = 133; continue _fun0008;
 99:
                var8 = 0;
                var9['fetchFailCounter'] = var8;
                var2 = var2.bind(var1)(var6, var7);
                var7 = var2[var7];
                var2 = _closure1_slot16;
                var2 = var2.FetchSuccess;
                var7['fetchState'] = var2;
 133:
                var2 = _closure1_slot10;
                var5 = _closure1_slot19;
                var2 = var2.bind(var1)(var6, var5);
                var2 = var2[var5];
                var2['controller'] = var1;
                var2 = var3.notifyListeners;
                var2 = var2.bind(var3)(var4);
                return var1;
            }
        };
        var1['value'] = var6;
        var3[4] = var1;
        var1 = {};
        var6 = 'loadingStart';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var4 = arg1;
                var7 = arg2;
                var3 = this;
                var1 = var3.search;
                var6 = var1.bind(var3)(var4);
                var2 = _closure1_slot10;
                var8 = _closure1_slot19;
                var1 = undefined;
                var9 = var2.bind(var1)(var6, var8);
                var10 = var9[var8];
                var9 = _closure1_slot16;
                var9 = var9.Fetching;
                var10['fetchState'] = var9;
                var2 = var2.bind(var1)(var6, var8);
                var8 = var2[var8];
                var2 = false;
                var8['isStale'] = var2;
                var2 = null;
                if(!(var2 != var7)) { _fun0009_ip = 107; continue _fun0009 }
 83:
                var2 = _closure1_slot10;
                var8 = _closure1_slot19;
                var2 = var2.bind(var1)(var6, var8);
                var2 = var2[var8];
                var2['controller'] = var7;
 107:
                var2 = _closure1_slot10;
                var5 = _closure1_slot19;
                var2 = var2.bind(var1)(var6, var5);
                var2 = var2[var5];
                var2['error'] = var1;
                var2 = var3.notifyListeners;
                var2 = var2.bind(var3)(var4);
                return var1;
            }
        };
        var1['value'] = var6;
        var3[5] = var1;
        var1 = {};
        var6 = 'notifyListeners';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var3 = this;
            var2 = var3.search;
            var1 = arg1;
            var4 = var2.bind(var3)(var1);
            var2 = _closure1_slot10;
            var3 = _closure1_slot18;
            var1 = undefined;
            var2 = var2.bind(var1)(var4, var3);
            var4 = var2[var3];
            var3 = var4.forEach;
            var2 = function(arg1) {
                var2 = arg1;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var2 = var3.bind(var4)(var2);
            return var1;
        };
        var1['value'] = var6;
        var3[6] = var1;
        var1 = {};
        var6 = 'search';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var3 = arg1;
                var1 = this;
                var2 = null;
                if(!(var2 != var3)) { _fun0010_ip = 83; continue _fun0010 }
 12:
                var2 = _closure1_slot24;
                var6 = undefined;
                var5 = var2.bind(var6)(var3);
                var3 = var5.bind(var6)();
                var2 = var3.done;
                var4 = var3;
                var3 = var1;
                var1 = var3;
                if(var2) { _fun0010_ip = 81; continue _fun0010 }
 47:
                var7 = var4.value;
                var2 = var3.getOrCreate;
                var3 = var2.bind(var3)(var7);
                var8 = var5.bind(var6)();
                var2 = var8.done;
                var4 = var8;
                var1 = var3;
                if(!var2) { _fun0010_ip = 47; continue _fun0010 }
 81:
                return var1;
 83:
                var1 = _closure2_slot0;
                var2 = var1.prototype;
                var2 = Object.create(var2, {constructor: {value: var1}});
                var10 = var2;
                var1 = new var10[var1](var9);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            }
        };
        var1['value'] = var6;
        var3[7] = var1;
        var1 = {};
        var6 = 'setError';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var3 = this;
            var2 = var3.search;
            var1 = arg1;
            var4 = var2.bind(var3)(var1);
            var2 = _closure1_slot10;
            var3 = _closure1_slot19;
            var1 = undefined;
            var5 = var2.bind(var1)(var4, var3);
            var6 = var5[var3];
            var5 = arg2;
            var6['error'] = var5;
            var2 = var2.bind(var1)(var4, var3);
            var3 = var2[var3];
            var2 = false;
            var3['isStale'] = var2;
            return var1;
        };
        var1['value'] = var6;
        var3[8] = var1;
        var1 = {};
        var6 = 'shouldLoad';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var6 = arg1;
                var2 = this;
                var5 = null;
                if(!(var5 != var6)) { _fun0011_ip = 169; continue _fun0011 }
 15:
                var1 = var2.getState;
                var4 = var1.bind(var2)(var6);
                var7 = var4.fetchState;
                var1 = _closure1_slot16;
                var1 = var1.Fetching;
                if(!(var7 !== var1)) { _fun0011_ip = 165; continue _fun0011 }
 49:
                var7 = var4.hasRetryScheduled;
                var1 = true;
                if(!(var1 === var7)) { _fun0011_ip = 98; continue _fun0011 }
 61:
                var1 = var4.nextRetryAt;
                if(!(var5 != var1)) { _fun0011_ip = 98; continue _fun0011 }
 71:
                var5 = var4.nextRetryAt;
                var1 = global;
                var7 = var1.Date;
                var1 = var7.now;
                var1 = var1.bind(var7)();
                if(!(!(var5 > var1))) { _fun0011_ip = 161; continue _fun0011 }
 98:
                var8 = _closure1_slot26;
                var7 = undefined;
                var5 = arg3;
                var1 = arg2;
                var5 = var8.bind(var7)(var5, var1);
                var1 = var2.doesDataNeedValidation;
                var1 = var1.bind(var2)(var6);
                if(var1) { _fun0011_ip = 159; continue _fun0011 }
 130:
                var2 = !var5;
                if(var5) { _fun0011_ip = 156; continue _fun0011 }
 136:
                var4 = var4.fetchState;
                var3 = _closure1_slot16;
                var3 = var3.FetchSuccess;
                var2 = var4 !== var3;
 156:
                var1 = var2;
 159:
                return var1;
 161:
                var1 = false;
                return var1;
 165:
                var1 = false;
                return var1;
 169:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var6;
        var3[9] = var1;
        var1 = {};
        var6 = 'scheduleRetry';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                var4 = arg1;
                var6 = arg2;
                var3 = this;
                var _closure3_slot0 = var3;
                var _closure3_slot1 = var4;
                var1 = var3.getState;
                var3 = var1.bind(var3)(var4);
                var1 = var3.retryAttempt;
                var4 = null;
                var7 = var4 != var1;
                var5 = 0;
                if(!var7) { _fun0012_ip = 50; continue _fun0012 }
 47:
                var5 = var1;
 50:
                var1 = 1;
                var1 = var5 + var1;
                if(!(var4 == var6)) { _fun0012_ip = 83; continue _fun0012 }
 61:
                var9 = 2;
                var8 = var1;
                var5 = exponentiationOperator(var9, var8);
                var4 = 1000;
                var4 = var5 * var4;
                _fun0012_ip = 94; continue _fun0012;
 83:
                var5 = var6.backoffMs;
                var4 = var5.bind(var6)(var1);
 94:
                var5 = global;
                var6 = var5.Date;
                var5 = var6.now;
                var5 = var5.bind(var6)();
                var5 = var5 + var4;
                var3['nextRetryAt'] = var5;
                var5 = true;
                var3['hasRetryScheduled'] = var5;
                var3['retryAttempt'] = var1;
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var3 = var5.bind(var1)(var3);
                var2 = function() {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                        var4 = _closure3_slot0;
                        var3 = var4.getState;
                        var2 = _closure3_slot1;
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.hasRetryScheduled;
                        if(!var2) { _fun0013_ip = 76; continue _fun0013 }
 31:
                        var2 = false;
                        var3['hasRetryScheduled'] = var2;
                        var2 = true;
                        var3['isStale'] = var2;
                        var3 = _closure3_slot1;
                        var2 = null;
                        if(!(var2 != var3)) { _fun0013_ip = 76; continue _fun0013 }
 57:
                        var3 = _closure3_slot0;
                        var2 = var3.notifyListeners;
                        var1 = _closure3_slot1;
                        var1 = var2.bind(var3)(var1);
 76:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var3.bind(var1)(var2, var4);
                return var1;
            }
        };
        var1['value'] = var6;
        var3[10] = var1;
        var1 = {};
        var6 = 'shouldRetry';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                var6 = arg1;
                var5 = arg3;
                var4 = this;
                var2 = null;
                if(!(var2 != var6)) { _fun0014_ip = 121; continue _fun0014 }
 15:
                var1 = false;
                if(!(var1 !== var5)) { _fun0014_ip = 121; continue _fun0014 }
 21:
                var3 = var4.getState;
                var3 = var3.bind(var4)(var6);
                var6 = var2 == var5;
                var4 = undefined;
                var7 = undefined;
                if(var6) { _fun0014_ip = 49; continue _fun0014 }
 43:
                var7 = var5.maxRetries;
 49:
                if(!(var2 == var7)) { _fun0014_ip = 60; continue _fun0014 }
 53:
                var7 = _closure1_slot21;
 60:
                var6 = var3.fetchFailCounter;
                var3 = 1;
                var3 = var7 - var3;
                if(!(!(var6 >= var3))) { _fun0014_ip = 119; continue _fun0014 }
 77:
                var6 = var2 == var5;
                var3 = undefined;
                if(var6) { _fun0014_ip = 92; continue _fun0014 }
 86:
                var3 = var5.retryableErrors;
 92:
                if(!(var2 == var3)) { _fun0014_ip = 103; continue _fun0014 }
 96:
                var3 = function(arg1) {
                    _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                        var3 = arg1;
                        var1 = _closure1_slot22;
                        var1 = var3 instanceof var1;
                        if(!var1) { _fun0015_ip = 53; continue _fun0015 }
 17:
                        var4 = var3.status;
                        var2 = 500;
                        var2 = var4 >= var2;
                        if(var2) { _fun0015_ip = 50; continue _fun0015 }
 35:
                        var4 = var3.status;
                        var3 = 429;
                        var2 = var3 === var4;
 50:
                        var1 = var2;
 53:
                        return var1;
                    }
                };
 103:
                var2 = arg2;
                var2 = var3.bind(var4)(var2);
                var2 = !var2;
                var2 = !var2;
                return var2;
 119:
                return var1;
 121:
                var1 = false;
                return var1;
            }
        };
        var1['value'] = var6;
        var3[11] = var1;
        var1 = {};
        var6 = 'subscribe';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var4 = arg2;
            var5 = this;
            var _closure3_slot0 = var4;
            var3 = var5.search;
            var2 = arg1;
            var6 = var3.bind(var5)(var2);
            var _closure3_slot1 = var6;
            var5 = _closure1_slot10;
            var3 = _closure1_slot18;
            var2 = undefined;
            var2 = var5.bind(var2)(var6, var3);
            var3 = var2[var3];
            var2 = var3.add;
            var2 = var2.bind(var3)(var4);
            var1 = function() {
                var5 = _closure1_slot10;
                var3 = _closure3_slot1;
                var4 = _closure1_slot18;
                var1 = undefined;
                var3 = var5.bind(var1)(var3, var4);
                var4 = var3[var4];
                var3 = var4.delete;
                var2 = _closure3_slot0;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            return var1;
        };
        var1['value'] = var6;
        var3[12] = var1;
        var1 = {};
        var6 = 'validate';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var3 = this;
                var2 = var3.search;
                var1 = arg1;
                var5 = var2.bind(var3)(var1);
                var4 = new Array(0);
                var6 = var4.push;
                var11 = global;
                var9 = var11.Array;
                var8 = var9.from;
                var2 = _closure1_slot10;
                var10 = _closure1_slot18;
                var1 = undefined;
                var3 = var2.bind(var1)(var5, var10);
                var3 = var3[var10];
                var19 = var8.bind(var9)(var3);
                var3 = new Array(0);
                var10 = 0;
                var20 = var3;
                var18 = 0;
                var8 = arraySpread(var20, var19, var18);
                var20 = var6;
                var19 = var3;
                var18 = var4;
                var3 = apply(var20, var19, var18);
                var6 = var11.Object;
                var3 = var6.values;
                var8 = _closure1_slot17;
                var2 = var2.bind(var1)(var5, var8);
                var2 = var2[var8];
                var9 = var3.bind(var6)(var2);
                var3 = var9.length;
                var6 = true;
                var8 = null;
                if(!(var3 > var10)) { _fun0016_ip = 334; continue _fun0016 }
 144:
                var3 = var9.pop;
                var16 = var3.bind(var9)();
                if(!(var8 != var16)) { _fun0016_ip = 322; continue _fun0016 }
 161:
                var3 = _closure1_slot10;
                var13 = _closure1_slot19;
                var12 = var3.bind(var1)(var16, var13);
                var12 = var12[var13];
                var12['isStale'] = var6;
                var13 = _closure2_slot0;
                var12 = var13.resetErrorState;
                var12 = var12.bind(var13)(var16);
                var13 = var9.push;
                var15 = var11.Object;
                var14 = var15.values;
                var17 = _closure1_slot17;
                var12 = var3.bind(var1)(var16, var17);
                var12 = var12[var17];
                var19 = var14.bind(var15)(var12);
                var12 = new Array(0);
                var20 = var12;
                var18 = 0;
                var14 = arraySpread(var20, var19, var18);
                var20 = var13;
                var19 = var12;
                var18 = var9;
                var12 = apply(var20, var19, var18);
                var12 = var4.push;
                var14 = var11.Array;
                var13 = var14.from;
                var15 = _closure1_slot18;
                var3 = var3.bind(var1)(var16, var15);
                var3 = var3[var15];
                var19 = var13.bind(var14)(var3);
                var3 = new Array(0);
                var20 = var3;
                var18 = 0;
                var13 = arraySpread(var20, var19, var18);
                var20 = var12;
                var19 = var3;
                var18 = var4;
                var3 = apply(var20, var19, var18);
 322:
                var3 = var9.length;
                if(var3 > var10) { _fun0016_ip = 144; continue _fun0016 }
 334:
                var3 = _closure1_slot10;
                var7 = _closure1_slot19;
                var3 = var3.bind(var1)(var5, var7);
                var3 = var3[var7];
                var3['isStale'] = var6;
                var3 = _closure2_slot0;
                var2 = var3.resetErrorState;
                var2 = var2.bind(var3)(var5);
                var3 = var4.forEach;
                var2 = function(arg1) {
                    var2 = arg1;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1['value'] = var6;
        var3[13] = var1;
        var1 = {};
        var6 = 'resetErrorState';
        var1['key'] = var6;
        var2 = function value(arg1) {
            var5 = arg1;
            var2 = _closure1_slot10;
            var4 = _closure1_slot19;
            var1 = undefined;
            var3 = var2.bind(var1)(var5, var4);
            var3 = var3[var4];
            var3['error'] = var1;
            var3 = var2.bind(var1)(var5, var4);
            var7 = var3[var4];
            var3 = 0;
            var7['fetchFailCounter'] = var3;
            var7 = var2.bind(var1)(var5, var4);
            var7 = var7[var4];
            var6 = _closure1_slot16;
            var6 = var6.Init;
            var7['fetchState'] = var6;
            var6 = var2.bind(var1)(var5, var4);
            var7 = var6[var4];
            var6 = false;
            var7['hasRetryScheduled'] = var6;
            var6 = var2.bind(var1)(var5, var4);
            var6 = var6[var4];
            var6['nextRetryAt'] = var1;
            var2 = var2.bind(var1)(var5, var4);
            var2 = var2[var4];
            var2['retryAttempt'] = var3;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var5, var3, var2);
        return var1;
    };
    var9 = var9.bind(var1)();
    var10 = var9.prototype;
    var10 = Object.create(var10, {constructor: {value: var9}});
    var19 = var10;
    var9 = new var19[var9](var18);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot20 = var9;
    var _closure1_slot21 = var8;
    var4 = var4.Error;
    var7 = var7.bind(var1)(var4);
    var4 = function(arg1) {
        var4 = function HTTPResponseError(arg1) {
            _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                var5 = this;
                var2 = 0;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var7 = _closure1_slot8;
                var3 = _closure2_slot0;
                var4 = undefined;
                var7 = var7.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot6;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot5;
                var1 = _closure1_slot23;
                var1 = var1.bind(var4)();
                if(var1) { _fun0017_ip = 86; continue _fun0017 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0017_ip = 120; continue _fun0017;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot6;
                var6 = var6.bind(var4)(var5);
                var6 = var6.constructor;
                var1 = var7.bind(var8)(var9, var10, var6);
 120:
                var1 = var3.bind(var4)(var5, var1);
                var3 = 'HTTPResponseError';
                var1['name'] = var3;
                var1['status'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var6 = _closure1_slot7;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot9;
        var5 = {};
        var6 = 'setStatus';
        var5['key'] = var6;
        var1 = function value(arg1) {
            var2 = arg1;
            var1 = this;
            var1['status'] = var2;
            var1 = undefined;
            return var1;
        };
        var5['value'] = var1;
        var1 = new Array(1);
        var1[0] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var4 = var4.bind(var1)(var7);
    var _closure1_slot22 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/flux/createFetchStore.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function createFetchStore(arg1, arg2) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
            var2 = arg2;
            var3 = arg1;
            var _closure2_slot0 = var3;
            var3 = var2.dangerousAbortOnCleanup;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0018_ip = 26; continue _fun0018 }
 24:
            var3 = false;
 26:
            var _closure2_slot1 = var3;
            var3 = var2.get;
            var _closure2_slot2 = var3;
            var3 = var2.load;
            var _closure2_slot3 = var3;
            var3 = var2.queryId;
            var _closure2_slot4 = var3;
            var3 = var2.retryConfig;
            var _closure2_slot5 = var3;
            var2 = var2.useStateHook;
            var _closure2_slot6 = var2;
            var1 = function(arg1) {
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                    var2 = 0;
                    var17 = 0;
                    var4 = copyRestArgs(var17);
                    var7 = undefined;
                    var _closure3_slot2 = var7;
                    var _closure3_slot3 = var7;
                    var _closure3_slot4 = var7;
                    var _closure3_slot5 = var7;
                    var3 = _closure1_slot14;
                    var3 = var3.bind(var7)(var4);
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var5 = 13;
                    var5 = var9[var5];
                    var9 = var8.bind(var7)(var5);
                    var8 = var9.areArraysShallowEqual;
                    var5 = var3.current;
                    var5 = var8.bind(var9)(var5, var4);
                    if(var5) { _fun0019_ip = 86; continue _fun0019 }
 80:
                    var3['current'] = var4;
 86:
                    var12 = var3.current;
                    var _closure3_slot0 = var12;
                    var4 = _closure1_slot13;
                    var3 = function() {
                        var3 = _closure2_slot4;
                        var6 = _closure3_slot0;
                        var2 = new Array(0);
                        var5 = 0;
                        var7 = var2;
                        var1 = arraySpread(var7, var6, var5);
                        var5 = undefined;
                        var7 = var3;
                        var6 = var2;
                        var1 = apply(var7, var6, var5);
                        return var1;
                    };
                    var8 = var4.bind(var7)(var3, var12);
                    var _closure3_slot1 = var8;
                    var3 = global;
                    var9 = var3.Array;
                    var5 = var9.isArray;
                    var4 = _closure2_slot0;
                    var5 = var5.bind(var9)(var4);
                    var4 = _closure2_slot0;
                    if(var5) { _fun0019_ip = 156; continue _fun0019 }
 146:
                    var5 = new Array(1);
                    var5[0] = var4;
                    _fun0019_ip = 159; continue _fun0019;
 156:
                    var5 = var4;
 159:
                    var4 = _closure2_slot6;
                    var3 = function() {
                        var3 = _closure2_slot2;
                        var6 = _closure3_slot0;
                        var2 = new Array(0);
                        var5 = 0;
                        var7 = var2;
                        var1 = arraySpread(var7, var6, var5);
                        var5 = undefined;
                        var7 = var3;
                        var6 = var2;
                        var1 = apply(var7, var6, var5);
                        return var1;
                    };
                    var4 = var4.bind(var7)(var5, var3, var12);
                    _closure3_slot2 = var4;
                    var5 = _closure1_slot20;
                    var3 = var5.getState;
                    var3 = var3.bind(var5)(var8);
                    var3 = var3.error;
                    var14 = _closure1_slot15;
                    var5 = var14.bind(var7)(var2);
                    var13 = _closure1_slot4;
                    var11 = 2;
                    var5 = var13.bind(var7)(var5, var11);
                    var10 = var5[var2];
                    var9 = 1;
                    var5 = var5[var9];
                    _closure3_slot3 = var5;
                    var5 = function() {
                        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                            var5 = _closure1_slot20;
                            var4 = var5.getState;
                            var1 = _closure3_slot1;
                            var1 = var4.bind(var5)(var1);
                            var5 = var1.fetchState;
                            var4 = _closure1_slot16;
                            var4 = var4.Init;
                            if(!(var5 !== var4)) { _fun0020_ip = 67; continue _fun0020 }
 45:
                            var4 = var1.fetchState;
                            var1 = _closure1_slot16;
                            var1 = var1.Fetching;
                            var1 = var4 === var1;
                            _fun0020_ip = 93; continue _fun0020;
 67:
                            var5 = _closure1_slot26;
                            var4 = _closure3_slot2;
                            var3 = _closure2_slot6;
                            var2 = undefined;
                            var2 = var5.bind(var2)(var4, var3);
                            var1 = !var2;
 93:
                            return var1;
                        }
                    };
                    var5 = var14.bind(var7)(var5);
                    var5 = var13.bind(var7)(var5, var11);
                    var2 = var5[var2];
                    var5 = var5[var9];
                    _closure3_slot4 = var5;
                    var11 = _closure1_slot11;
                    var9 = _closure1_slot3;
                    var5 = function* () {
                        var1 = function* anon_0_() {
                            _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                                if(var2) { _fun0021_ip = 445; continue _fun0021 }
 10:
                                var2 = undefined;
                                var9 = undefined;
                                var3 = undefined;
                                var8 = undefined;
                                var7 = _closure3_slot1;
                                var5 = null;
                                if(!(var5 != var7)) { _fun0021_ip = 343; continue _fun0021 }
 34:
                                var14 = _closure1_slot20;
                                var13 = var14.shouldLoad;
                                var12 = _closure3_slot1;
                                var11 = _closure2_slot6;
                                var10 = _closure3_slot2;
                                var10 = var13.bind(var14)(var12, var11, var10);
                                if(!var10) { _fun0021_ip = 343; continue _fun0021 }
 75:
                                var10 = global;
                                var10 = var10.AbortController;
                                var11 = var10.prototype;
                                var11 = Object.create(var11, {constructor: {value: var10}});
                                var19 = var11;
                                var10 = new var19[var10](var18);
                                var9 = var10 instanceof Object ? var10 : var11;
                                var13 = _closure1_slot20;
                                var12 = var13.loadingStart;
                                var11 = _closure3_slot1;
                                var14 = _closure2_slot1;
                                var10 = undefined;
                                if(!var14) { _fun0021_ip = 129; continue _fun0021 }
 126:
                                var10 = var9;
 129:
                                var10 = var12.bind(var13)(var11, var10);
                                var10 = false;
                                var3 = false;
 139: // try_start_0 // try_start_1
                                var12 = _closure2_slot3;
                                var11 = var9;
                                var13 = var11.signal;
                                var11 = new Array(1);
                                var11[0] = var13;
                                var17 = _closure3_slot0;
                                var16 = 1;
                                var18 = var11;
                                var13 = arraySpread(var18, var17, var16);
                                var18 = var12;
                                var17 = var11;
                                var16 = undefined;
                                var11 = apply(var18, var17, var16);
                                SaveGenerator(address=190);
 188:
                                return var11;
 190:
                                ResumeGenerator(result_out_reg=10, return_bool_out_reg=11);
                                if(var12) { _fun0021_ip = 200; continue _fun0021 }
 196:
                                var3 = true;
 198: // try_end0
                                _fun0021_ip = 320; continue _fun0021;
 200: // try_end1
                                var15 = _closure1_slot20;
                                var14 = var15.loadingDone;
                                var13 = _closure3_slot1;
                                var12 = var3;
                                var12 = var14.bind(var15)(var13, var12);
                                return var11;
 226: // try_start_2 // catch_target0
                                CatchBlockStart(arg_register=5);
                                var9 = var9.signal;
                                var9 = var9.aborted;
                                if(var9) { _fun0021_ip = 398; continue _fun0021 }
 246:
                                var11 = var6;
                                var9 = function makeError(arg1) {
                                    _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                                        var1 = arg1;
                                        var2 = global;
                                        var3 = var2.Error;
                                        var3 = var1 instanceof var3;
                                        if(var3) { _fun0022_ip = 272; continue _fun0022 }
 21:
                                        var4 = 'object';
                                        var3 = typeof var1;
                                        if(!(var4 !== var3)) { _fun0022_ip = 73; continue _fun0022 }
 32:
                                        var5 = var2.Error;
                                        var4 = var2.String;
                                        var3 = undefined;
                                        var7 = var4.bind(var3)(var1);
                                        var4 = var5.prototype;
                                        var4 = Object.create(var4, {constructor: {value: var5}});
                                        var8 = var4;
                                        var3 = new var8[var5](var7, var6);
                                        var3 = var3 instanceof Object ? var3 : var4;
                                        return var3;
 73:
                                        var3 = 'body';
                                        var3 = var3 in var1;
                                        if(!var3) { _fun0022_ip = 111; continue _fun0022 }
 84:
                                        var4 = var1.body;
                                        var3 = null;
                                        if(!(var3 != var4)) { _fun0022_ip = 111; continue _fun0022 }
 95:
                                        var4 = var1.body;
                                        var3 = 'message';
                                        var3 = var3 in var4;
                                        if(var3) { _fun0022_ip = 204; continue _fun0022 }
 111:
                                        var4 = var2.Object;
                                        var3 = var4.entries;
                                        var5 = var3.bind(var4)(var1);
                                        var4 = var5.map;
                                        var3 = function(arg1) {
                                            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                                                var5 = arg1;
                                                var1 = var5[Symbol.iterator];
                                                var5 = var1().next;
                                                var3 = var5().value;
                                                var2 = var1;
                                                var4 = undefined;
                                                var2 = var2 === var4;
                                                var6 = undefined;
                                                if(var2) { _fun0023_ip = 27; continue _fun0023 }
 24:
                                                var6 = var3;
 27:
                                                var3 = undefined;
                                                if(var2) { _fun0023_ip = 57; continue _fun0023 }
 32:
                                                var7 = var5().value;
                                                var5 = var1;
                                                var5 = var5 === var4;
                                                var3 = undefined;
                                                var2 = var5;
                                                if(var5) { _fun0023_ip = 57; continue _fun0023 }
 51:
                                                var3 = var7;
                                                var2 = var5;
 57:
                                                if(var2) { _fun0023_ip = 63; continue _fun0023 }
 60:
                                                var1.return();
 63:
                                                var1 = global;
                                                var2 = var1.String;
                                                var10 = var2.bind(var4)(var3);
                                                var1 = var1.HermesInternal;
                                                var4 = var1.concat;
                                                var13 = '';
                                                var11 = ': [';
                                                var9 = ']';
                                                var12 = var6;
                                                var1 = var13[var4](var12, var11, var10, var9, var8);
                                                return var1;
                                            }
                                        };
                                        var6 = var4.bind(var5)(var3);
                                        var5 = _closure1_slot22;
                                        var4 = var6.join;
                                        var3 = ',';
                                        var7 = var4.bind(var6)(var3);
                                        var4 = var5.prototype;
                                        var4 = Object.create(var4, {constructor: {value: var5}});
                                        var8 = var4;
                                        var3 = new var8[var5](var7, var6);
                                        var3 = var3 instanceof Object ? var3 : var4;
                                        var5 = var3.setStatus;
                                        var4 = var1.status;
                                        var4 = var5.bind(var3)(var4);
                                        return var3;
 204:
                                        var4 = _closure1_slot22;
                                        var5 = var2.String;
                                        var2 = var1.body;
                                        var3 = var2.message;
                                        var2 = undefined;
                                        var7 = var5.bind(var2)(var3);
                                        var3 = var4.prototype;
                                        var3 = Object.create(var3, {constructor: {value: var4}});
                                        var8 = var3;
                                        var2 = new var8[var4](var7, var6);
                                        var2 = var2 instanceof Object ? var2 : var3;
                                        var4 = var2.setStatus;
                                        var3 = var1.status;
                                        var3 = var4.bind(var2)(var3);
                                        return var2;
 272:
                                        return var1;
                                    }
                                };
                                var8 = var9.bind(var2)(var11);
                                var9 = _closure2_slot5;
                                if(!(var10 !== var9)) { _fun0021_ip = 300; continue _fun0021 }
 269:
                                var13 = _closure1_slot20;
                                var12 = var13.shouldRetry;
                                var11 = _closure3_slot1;
                                var10 = var8;
                                var9 = _closure2_slot5;
                                var9 = var12.bind(var13)(var11, var10, var9);
                                if(var9) { _fun0021_ip = 346; continue _fun0021 }
 300:
                                var11 = _closure1_slot20;
                                var10 = var11.setError;
                                var9 = _closure3_slot1;
                                var8 = var10.bind(var11)(var9, var8);
 320: // try_end2
                                var11 = _closure1_slot20;
                                var10 = var11.loadingDone;
                                var9 = _closure3_slot1;
                                var8 = var3;
                                var8 = var10.bind(var11)(var9, var8);
 343:
                                return var2;
 346: // try_start_3
                                var10 = _closure1_slot20;
                                var9 = var10.scheduleRetry;
                                var8 = _closure3_slot1;
                                var7 = _closure2_slot5;
                                var7 = var9.bind(var10)(var8, var7);
 370: // try_end3
                                var11 = _closure1_slot20;
                                var10 = var11.loadingDone;
                                var9 = _closure3_slot1;
                                var8 = var6;
                                var8 = var10.bind(var11)(var9, var8);
                                var7 = undefined;
                                return var7;
 398:
                                var9 = _closure1_slot20;
                                var8 = var9.loadingDone;
                                var7 = _closure3_slot1;
                                var6 = var8.bind(var9)(var7, var6);
                                return var2;
 421: // catch_target1 // catch_target2 // catch_target3
                                CatchBlockStart(arg_register=1);
                                var6 = _closure1_slot20;
                                var5 = var6.loadingDone;
                                var4 = _closure3_slot1;
                                var3 = var5.bind(var6)(var4, var3);
                                throw var2;
 445:
                                return var1;
                            }
                        };
                        return var1;
                    };
                    var9 = var9.bind(var7)(var5);
                    var5 = new Array(3);
                    var5[0] = var12;
                    var5[1] = var4;
                    var5[2] = var8;
                    var5 = var11.bind(var7)(var9, var5);
                    _closure3_slot5 = var5;
                    var6 = _closure1_slot12;
                    var11 = new Array(1);
                    var11[0] = var8;
                    var9 = function() {
                        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                            var3 = _closure3_slot1;
                            var2 = null;
                            if(!(var2 == var3)) { _fun0024_ip = 17; continue _fun0024 }
 13:
                            var2 = undefined;
                            return var2;
 17:
                            var4 = _closure1_slot20;
                            var3 = var4.subscribe;
                            var2 = _closure3_slot1;
                            var1 = function() {
                                _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                                    var5 = _closure1_slot20;
                                    var4 = var5.getState;
                                    var3 = _closure3_slot1;
                                    var3 = var4.bind(var5)(var3);
                                    var5 = _closure3_slot4;
                                    var6 = var3.fetchState;
                                    var1 = _closure1_slot16;
                                    var4 = var1.Fetching;
                                    var1 = undefined;
                                    var4 = var6 === var4;
                                    var4 = var5.bind(var1)(var4);
                                    var4 = var3.isStale;
                                    var3 = true;
                                    if(!(var3 === var4)) { _fun0025_ip = 84; continue _fun0025 }
 68:
                                    var3 = _closure3_slot3;
                                    var2 = function(arg1) {
                                        var2 = arg1;
                                        var1 = 1;
                                        var1 = var2 + var1;
                                        return var1;
                                    };
                                    var2 = var3.bind(var1)(var2);
 84:
                                    return var1;
                                }
                            };
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        }
                    };
                    var9 = var6.bind(var7)(var9, var11);
                    var9 = new Array(2);
                    var9[0] = var10;
                    var9[1] = var5;
                    var5 = function() {
                        var2 = _closure3_slot5;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        return var1;
                    };
                    var5 = var6.bind(var7)(var5, var9);
                    var5 = new Array(1);
                    var5[0] = var8;
                    var1 = function() {
                        var1 = function() {
                            var3 = _closure1_slot20;
                            var2 = var3.maybeAbort;
                            var1 = _closure3_slot1;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        return var1;
                    };
                    var1 = var6.bind(var7)(var1, var5);
                    var1 = {};
                    var1['data'] = var4;
                    var1['error'] = var3;
                    var1['isLoading'] = var2;
                    return var1;
                }
            };
            return var1;
        }
    };
    var3['createFetchStore'] = var4;
    var2 = function revalidateFetchStoreData(arg1) {
        var3 = _closure1_slot20;
        var2 = var3.validate;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var3['revalidateFetchStoreData'] = var2;
    return var1;
})();
// discord_common/js/packages/flux/createFetchStore.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var9 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            _closure1_slot17 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot17 = var1;
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
            if(!var2) { _fun0002_ip = 45; continue _fun0002 }
 30:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
 45:
            if(var2) { _fun0002_ip = 54; continue _fun0002 }
 48:
            var2 = var3.@@iterator;
 54:
            if(var2) { _fun0002_ip = 342; continue _fun0002 }
 60:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0002_ip = 322; continue _fun0002 }
 85:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0002_ip = 282; continue _fun0002 }
 95:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0002_ip = 269; continue _fun0002 }
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
            if(!var7) { _fun0002_ip = 162; continue _fun0002 }
 157:
            var7 = var3.constructor;
 162:
            var10 = var9;
            if(!var7) { _fun0002_ip = 178; continue _fun0002 }
 168:
            var7 = var3.constructor;
            var10 = var7.name;
 178:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 186:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0002_ip = 248; continue _fun0002 }
 194:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0002_ip = 233; continue _fun0002 }
 204:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0002_ip = 246; continue _fun0002 }
 233:
            var9 = _closure1_slot19;
            var7 = var9.bind(var8)(var3, var8);
 246:
            _fun0002_ip = 264; continue _fun0002;
 248:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
 264:
            var6 = var7;
            _fun0002_ip = 282; continue _fun0002;
 269:
            var7 = _closure1_slot19;
            var6 = var7.bind(var8)(var3, var8);
 282:
            var4 = var6;
            if(var4) { _fun0002_ip = 322; continue _fun0002 }
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
            if(!var4) { _fun0002_ip = 329; continue _fun0002 }
 325:
            _closure2_slot0 = var4;
 329:
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
 342:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
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
    var _closure1_slot19 = var1;
    var4 = global;
    var10 = var4.Object;
    var8 = var10.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var10)(var3, var1, var7);
    var14 = 0;
    var7 = var6[var14];
    var1 = undefined;
    var7 = var9.bind(var1)(var7);
    var _closure1_slot2 = var7;
    var13 = 1;
    var7 = var6[var13];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot3 = var7;
    var12 = 2;
    var7 = var6[var12];
    var7 = var9.bind(var1)(var7);
    var _closure1_slot4 = var7;
    var11 = 3;
    var7 = var6[var11];
    var7 = var9.bind(var1)(var7);
    var8 = 4;
    var8 = var6[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot5 = var8;
    var8 = 5;
    var8 = var6[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot6 = var8;
    var8 = 6;
    var8 = var6[var8];
    var8 = var9.bind(var1)(var8);
    var _closure1_slot7 = var8;
    var8 = 7;
    var8 = var6[var8];
    var9 = var9.bind(var1)(var8);
    var8 = 8;
    var8 = var6[var8];
    var8 = var5.bind(var1)(var8);
    var10 = var8.useCallback;
    var _closure1_slot8 = var10;
    var10 = var8.useEffect;
    var _closure1_slot9 = var10;
    var10 = var8.useMemo;
    var _closure1_slot10 = var10;
    var8 = var8.useRef;
    var _closure1_slot11 = var8;
    var8 = {};
    var8['Init'] = var14;
    var10 = 'Init';
    var8[var14] = var10;
    var8['Fetching'] = var13;
    var10 = 'Fetching';
    var8[var13] = var10;
    var8['FetchFailed'] = var12;
    var10 = 'FetchFailed';
    var8[var12] = var10;
    var8['FetchSuccess'] = var11;
    var10 = 'FetchSuccess';
    var8[var11] = var10;
    var _closure1_slot12 = var8;
    var8 = 'nodes';
    var8 = var9.bind(var1)(var8);
    var _closure1_slot13 = var8;
    var8 = 'state';
    var8 = var9.bind(var1)(var8);
    var _closure1_slot14 = var8;
    var8 = function() {
        var5 = function DataFetchStateTrie() {
            var6 = this;
            var3 = _closure1_slot5;
            var2 = _closure2_slot0;
            var1 = undefined;
            var2 = var3.bind(var1)(var6, var2);
            var2 = global;
            var9 = var2.Object;
            var5 = var9.defineProperty;
            var4 = _closure1_slot13;
            var3 = {};
            var7 = true;
            var3['writable'] = var7;
            var12 = var2.Object;
            var11 = var12.create;
            var10 = null;
            var10 = var11.bind(var12)(var10);
            var3['value'] = var10;
            var3 = var5.bind(var9)(var6, var4, var3);
            var5 = var2.Object;
            var4 = var5.defineProperty;
            var3 = _closure1_slot14;
            var2 = {};
            var2['writable'] = var7;
            var7 = {};
            var9 = 0;
            var7['fetchFailCounter'] = var9;
            var8 = _closure1_slot12;
            var8 = var8.Init;
            var7['fetchState'] = var8;
            var2['value'] = var7;
            var2 = var4.bind(var5)(var6, var3, var2);
            return var1;
        };
        var _closure2_slot0 = var5;
        var4 = _closure1_slot6;
        var1 = {};
        var3 = 'abort';
        var1['key'] = var3;
        var3 = function value(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = this;
                var2 = var3.search;
                var1 = arg1;
                var4 = var2.bind(var3)(var1);
                var2 = _closure1_slot7;
                var3 = _closure1_slot14;
                var1 = undefined;
                var2 = var2.bind(var1)(var4, var3);
                var2 = var2[var3];
                var3 = var2.controller;
                var2 = null;
                if(!(var2 != var3)) { _fun0005_ip = 62; continue _fun0005 }
 52:
                var2 = var3.abort;
                var2 = var2.bind(var3)();
 62:
                return var1;
            }
        };
        var1['value'] = var3;
        var3 = new Array(10);
        var3[0] = var1;
        var1 = {};
        var6 = 'doesDataNeedValidation';
        var1['key'] = var6;
        var6 = function value(arg1) {
            var3 = this;
            var2 = var3.search;
            var1 = arg1;
            var4 = var2.bind(var3)(var1);
            var3 = _closure1_slot7;
            var2 = _closure1_slot14;
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
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var2 = arg1;
                var5 = this;
                var1 = _closure1_slot7;
                var6 = _closure1_slot13;
                var4 = undefined;
                var1 = var1.bind(var4)(var5, var6);
                var1 = var1[var6];
                var6 = var1[var2];
                var1 = null;
                if(!(var1 == var6)) { _fun0006_ip = 88; continue _fun0006 }
 39:
                var1 = _closure1_slot7;
                var6 = _closure1_slot13;
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
                var1 = _closure1_slot7;
                var3 = _closure1_slot13;
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
            var4 = _closure1_slot7;
            var3 = var5.search;
            var2 = arg1;
            var3 = var3.bind(var5)(var2);
            var2 = _closure1_slot14;
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
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var6 = arguments[1];
                var4 = this;
                var1 = undefined;
                if(!(var6 === var1)) { _fun0007_ip = 14; continue _fun0007 }
 12:
                var6 = false;
 14:
                var3 = var4.search;
                var2 = arg1;
                var5 = var3.bind(var4)(var2);
                var3 = _closure1_slot7;
                var4 = _closure1_slot14;
                var7 = var3.bind(var1)(var5, var4);
                var7 = var7[var4];
                if(var6) { _fun0007_ip = 99; continue _fun0007 }
 52:
                var8 = var7.fetchFailCounter;
                var6 = 1;
                var6 = var8 + var6;
                var7['fetchFailCounter'] = var6;
                var6 = var3.bind(var1)(var5, var4);
                var8 = var6[var4];
                var6 = _closure1_slot12;
                var6 = var6.FetchFailed;
                var8['fetchState'] = var6;
                _fun0007_ip = 151; continue _fun0007;
 99:
                var6 = 0;
                var7['fetchFailCounter'] = var6;
                var6 = var3.bind(var1)(var5, var4);
                var7 = var6[var4];
                var6 = false;
                var7['isStale'] = var6;
                var3 = var3.bind(var1)(var5, var4);
                var3 = var3[var4];
                var2 = _closure1_slot12;
                var2 = var2.FetchSuccess;
                var3['fetchState'] = var2;
 151:
                return var1;
            }
        };
        var1['value'] = var6;
        var3[4] = var1;
        var1 = {};
        var6 = 'loadingStart';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var5 = arg2;
                var3 = this;
                var2 = var3.search;
                var1 = arg1;
                var4 = var2.bind(var3)(var1);
                var2 = _closure1_slot7;
                var6 = _closure1_slot14;
                var1 = undefined;
                var2 = var2.bind(var1)(var4, var6);
                var6 = var2[var6];
                var2 = _closure1_slot12;
                var2 = var2.Fetching;
                var6['fetchState'] = var2;
                var2 = null;
                if(!(var2 != var5)) { _fun0008_ip = 89; continue _fun0008 }
 65:
                var2 = _closure1_slot7;
                var6 = _closure1_slot14;
                var2 = var2.bind(var1)(var4, var6);
                var2 = var2[var6];
                var2['controller'] = var5;
 89:
                var2 = _closure1_slot7;
                var3 = _closure1_slot14;
                var2 = var2.bind(var1)(var4, var3);
                var2 = var2[var3];
                var2['error'] = var1;
                return var1;
            }
        };
        var1['value'] = var6;
        var3[5] = var1;
        var1 = {};
        var6 = 'search';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var3 = arg1;
                var1 = this;
                var2 = null;
                if(!(var2 != var3)) { _fun0009_ip = 83; continue _fun0009 }
 12:
                var2 = _closure1_slot18;
                var6 = undefined;
                var5 = var2.bind(var6)(var3);
                var3 = var5.bind(var6)();
                var2 = var3.done;
                var4 = var3;
                var3 = var1;
                var1 = var3;
                if(var2) { _fun0009_ip = 81; continue _fun0009 }
 47:
                var7 = var4.value;
                var2 = var3.getOrCreate;
                var3 = var2.bind(var3)(var7);
                var8 = var5.bind(var6)();
                var2 = var8.done;
                var4 = var8;
                var1 = var3;
                if(!var2) { _fun0009_ip = 47; continue _fun0009 }
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
        var3[6] = var1;
        var1 = {};
        var6 = 'setError';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var3 = this;
            var2 = var3.search;
            var1 = arg1;
            var4 = var2.bind(var3)(var1);
            var2 = _closure1_slot7;
            var3 = _closure1_slot14;
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
        var3[7] = var1;
        var1 = {};
        var6 = 'subscribe';
        var1['key'] = var6;
        var6 = function value(arg1, arg2) {
            var3 = this;
            var2 = var3.search;
            var1 = arg1;
            var4 = var2.bind(var3)(var1);
            var2 = _closure1_slot7;
            var3 = _closure1_slot14;
            var1 = undefined;
            var2 = var2.bind(var1)(var4, var3);
            var3 = var2[var3];
            var2 = arg2;
            var3['validateData'] = var2;
            return var1;
        };
        var1['value'] = var6;
        var3[8] = var1;
        var1 = {};
        var6 = 'validate';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var3 = this;
                var2 = var3.search;
                var1 = arg1;
                var5 = var2.bind(var3)(var1);
                var4 = new Array(0);
                var2 = _closure1_slot7;
                var3 = _closure1_slot14;
                var1 = undefined;
                var2 = var2.bind(var1)(var5, var3);
                var2 = var2[var3];
                var2 = var2.validateData;
                var12 = 'function';
                var2 = typeof var2;
                if(!(var12 === var2)) { _fun0010_ip = 95; continue _fun0010 }
 61:
                var3 = var4.push;
                var2 = _closure1_slot7;
                var6 = _closure1_slot14;
                var2 = var2.bind(var1)(var5, var6);
                var2 = var2[var6];
                var2 = var2.validateData;
                var2 = var3.bind(var4)(var2);
 95:
                var11 = global;
                var6 = var11.Object;
                var3 = var6.values;
                var2 = _closure1_slot7;
                var8 = _closure1_slot13;
                var2 = var2.bind(var1)(var5, var8);
                var2 = var2[var8];
                var10 = var3.bind(var6)(var2);
                var3 = var10.length;
                var9 = 0;
                var6 = true;
                var8 = null;
                if(!(var3 > var9)) { _fun0010_ip = 338; continue _fun0010 }
 152:
                var3 = var10.pop;
                var15 = var3.bind(var10)();
                if(!(var8 != var15)) { _fun0010_ip = 326; continue _fun0010 }
 169:
                var3 = _closure1_slot7;
                var13 = _closure1_slot14;
                var14 = var3.bind(var1)(var15, var13);
                var14 = var14[var13];
                var14['isStale'] = var6;
                var16 = _closure2_slot0;
                var14 = var16.resetErrorState;
                var14 = var14.bind(var16)(var15);
                var16 = var10.push;
                var18 = var11.Object;
                var17 = var18.values;
                var19 = _closure1_slot13;
                var14 = var3.bind(var1)(var15, var19);
                var14 = var14[var19];
                var21 = var17.bind(var18)(var14);
                var14 = new Array(0);
                var22 = var14;
                var20 = 0;
                var17 = arraySpread(var22, var21, var20);
                var22 = var16;
                var21 = var14;
                var20 = var10;
                var14 = apply(var22, var21, var20);
                var3 = var3.bind(var1)(var15, var13);
                var3 = var3[var13];
                var3 = var3.validateData;
                var3 = typeof var3;
                if(!(var12 === var3)) { _fun0010_ip = 326; continue _fun0010 }
 292:
                var13 = var4.push;
                var3 = _closure1_slot7;
                var14 = _closure1_slot14;
                var3 = var3.bind(var1)(var15, var14);
                var3 = var3[var14];
                var3 = var3.validateData;
                var3 = var13.bind(var4)(var3);
 326:
                var3 = var10.length;
                if(var3 > var9) { _fun0010_ip = 152; continue _fun0010 }
 338:
                var3 = _closure1_slot7;
                var7 = _closure1_slot14;
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
                    var1 = var2.bind(var1)();
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var1['value'] = var6;
        var3[9] = var1;
        var1 = {};
        var6 = 'resetErrorState';
        var1['key'] = var6;
        var2 = function value(arg1) {
            var5 = arg1;
            var3 = _closure1_slot7;
            var4 = _closure1_slot14;
            var1 = undefined;
            var6 = var3.bind(var1)(var5, var4);
            var6 = var6[var4];
            var6['error'] = var1;
            var6 = var3.bind(var1)(var5, var4);
            var7 = var6[var4];
            var6 = 0;
            var7['fetchFailCounter'] = var6;
            var3 = var3.bind(var1)(var5, var4);
            var3 = var3[var4];
            var2 = _closure1_slot12;
            var2 = var2.Init;
            var3['fetchState'] = var2;
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var5, var3, var2);
        return var1;
    };
    var8 = var8.bind(var1)();
    var9 = var8.prototype;
    var9 = Object.create(var9, {constructor: {value: var8}});
    var18 = var9;
    var8 = new var18[var8](var17);
    var8 = var8 instanceof Object ? var8 : var9;
    var _closure1_slot15 = var8;
    var4 = var4.Error;
    var7 = var7.bind(var1)(var4);
    var4 = function(arg1) {
        var4 = function HTTPResponseError(arg1) {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                var5 = this;
                var2 = 0;
                var13 = 0;
                var1 = copyRestArgs(var13);
                var7 = _closure1_slot5;
                var3 = _closure2_slot0;
                var4 = undefined;
                var7 = var7.bind(var4)(var5, var3);
                var10 = new Array(0);
                var13 = var10;
                var12 = var1;
                var11 = 0;
                var1 = arraySpread(var13, var12, var11);
                var1 = _closure1_slot3;
                var9 = var1.bind(var4)(var3);
                var3 = _closure1_slot2;
                var1 = _closure1_slot17;
                var1 = var1.bind(var4)();
                if(var1) { _fun0011_ip = 86; continue _fun0011 }
 73:
                var1 = var9.apply;
                var1 = var1.bind(var9)(var5, var10);
                _fun0011_ip = 120; continue _fun0011;
 86:
                var7 = global;
                var8 = var7.Reflect;
                var7 = var8.construct;
                var6 = _closure1_slot3;
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
        var6 = _closure1_slot4;
        var3 = undefined;
        var5 = arg1;
        var5 = var6.bind(var3)(var4, var5);
        var2 = _closure1_slot6;
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
    var _closure1_slot16 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/flux/createFetchStore.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function createFetchStore(arg1, arg2) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var2 = arg2;
            var3 = arg1;
            var _closure2_slot0 = var3;
            var3 = var2.dangerousAbortOnCleanup;
            var4 = undefined;
            if(!(var3 === var4)) { _fun0012_ip = 26; continue _fun0012 }
 24:
            var3 = false;
 26:
            var _closure2_slot1 = var3;
            var3 = var2.get;
            var _closure2_slot2 = var3;
            var3 = var2.load;
            var _closure2_slot3 = var3;
            var3 = var2.maxNumFetchErrors;
            if(!(var3 === var4)) { _fun0012_ip = 62; continue _fun0012 }
 59:
            var3 = 5;
 62:
            var _closure2_slot4 = var3;
            var3 = var2.queryId;
            var _closure2_slot5 = var3;
            var2 = var2.useStateHook;
            var _closure2_slot6 = var2;
            var1 = function(arg1) {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var15 = 0;
                    var1 = copyRestArgs(var15);
                    var _closure3_slot0 = var1;
                    var5 = undefined;
                    var _closure3_slot2 = var5;
                    var _closure3_slot3 = var5;
                    var _closure3_slot4 = var5;
                    var _closure3_slot5 = var5;
                    var _closure3_slot6 = var5;
                    var _closure3_slot7 = var5;
                    var4 = _closure1_slot10;
                    var3 = function() {
                        var3 = _closure2_slot5;
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
                    var11 = var4.bind(var5)(var3, var1);
                    var _closure3_slot1 = var11;
                    var3 = global;
                    var8 = var3.Array;
                    var6 = var8.isArray;
                    var4 = _closure2_slot0;
                    var6 = var6.bind(var8)(var4);
                    var4 = _closure2_slot0;
                    if(var6) { _fun0013_ip = 102; continue _fun0013 }
 92:
                    var6 = new Array(1);
                    var6[0] = var4;
                    _fun0013_ip = 105; continue _fun0013;
 102:
                    var6 = var4;
 105:
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
                    var4 = var4.bind(var5)(var6, var3, var1);
                    _closure3_slot2 = var4;
                    var6 = _closure1_slot15;
                    var3 = var6.getState;
                    var6 = var3.bind(var6)(var11);
                    _closure3_slot3 = var6;
                    var3 = var6.error;
                    _closure3_slot4 = var3;
                    var8 = _closure1_slot11;
                    var8 = var8.bind(var5)(var1);
                    _closure3_slot5 = var8;
                    var9 = _closure1_slot9;
                    var8 = new Array(1);
                    var8[0] = var1;
                    var1 = function() {
                        var2 = _closure3_slot5;
                        var1 = _closure3_slot0;
                        var2['current'] = var1;
                        var1 = undefined;
                        return var1;
                    };
                    var1 = var9.bind(var5)(var1, var8);
                    var12 = _closure1_slot8;
                    var8 = new Array(4);
                    var8[0] = var4;
                    var1 = var6.fetchState;
                    var8[1] = var1;
                    var8[2] = var3;
                    var8[3] = var11;
                    var1 = function() {
                        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                            var1 = _closure3_slot1;
                            var4 = null;
                            if(!(var4 != var1)) { _fun0014_ip = 172; continue _fun0014 }
 16:
                            var1 = _closure3_slot3;
                            var5 = var1.fetchState;
                            var2 = _closure1_slot12;
                            var2 = var2.Fetching;
                            if(!(var5 !== var2)) { _fun0014_ip = 168; continue _fun0014 }
 46:
                            var5 = _closure2_slot6;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var2 = 9;
                            var6 = var6[var2];
                            var2 = undefined;
                            var2 = var7.bind(var2)(var6);
                            var2 = var2.useStateFromStoresArray;
                            if(!(var5 !== var2)) { _fun0014_ip = 102; continue _fun0014 }
 85:
                            var2 = _closure3_slot2;
                            var2 = var4 != var2;
                            var5 = false;
                            if(!var2) { _fun0014_ip = 124; continue _fun0014 }
 98:
                            var5 = true;
                            _fun0014_ip = 124; continue _fun0014;
 102:
                            var2 = _closure3_slot2;
                            var6 = var2.length;
                            var2 = 0;
                            var2 = var6 > var2;
                            var5 = false;
                            if(!var2) { _fun0014_ip = 124; continue _fun0014 }
 122:
                            var5 = true;
 124:
                            var6 = _closure1_slot15;
                            var2 = var6.doesDataNeedValidation;
                            var1 = _closure3_slot1;
                            var1 = var2.bind(var6)(var1);
                            if(var1) { _fun0014_ip = 166; continue _fun0014 }
 146:
                            var2 = !var5;
                            if(var5) { _fun0014_ip = 163; continue _fun0014 }
 152:
                            var3 = _closure3_slot4;
                            var3 = var4 != var3;
                            var2 = !var3;
 163:
                            var1 = var2;
 166:
                            return var1;
 168:
                            var1 = false;
                            return var1;
 172:
                            var1 = false;
                            return var1;
                        }
                    };
                    var1 = var12.bind(var5)(var1, var8);
                    _closure3_slot6 = var1;
                    var8 = var6.fetchFailCounter;
                    var10 = new Array(3);
                    var10[0] = var8;
                    var10[1] = var11;
                    var10[2] = var1;
                    var8 = function() {
                        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                            var3 = _closure3_slot1;
                            var2 = null;
                            if(!(var2 != var3)) { _fun0015_ip = 184; continue _fun0015 }
 18:
                            var2 = _closure3_slot6;
                            var4 = undefined;
                            var2 = var2.bind(var4)();
                            if(!var2) { _fun0015_ip = 184; continue _fun0015 }
 34:
                            var2 = global;
                            var2 = var2.AbortController;
                            var3 = var2.prototype;
                            var3 = Object.create(var3, {constructor: {value: var2}});
                            var14 = var3;
                            var2 = new var14[var2](var13);
                            var2 = var2 instanceof Object ? var2 : var3;
                            var _closure4_slot0 = var2;
                            var9 = _closure1_slot15;
                            var8 = var9.loadingStart;
                            var7 = _closure3_slot1;
                            var10 = _closure2_slot1;
                            var6 = undefined;
                            if(!var10) { _fun0015_ip = 98; continue _fun0015 }
 95:
                            var6 = var2;
 98:
                            var6 = var8.bind(var9)(var7, var6);
                            var3 = _closure2_slot3;
                            var6 = var2.signal;
                            var2 = new Array(1);
                            var2[0] = var6;
                            var5 = _closure3_slot5;
                            var12 = var5.current;
                            var11 = 1;
                            var13 = var2;
                            var5 = arraySpread(var13, var12, var11);
                            var13 = var3;
                            var12 = var2;
                            var11 = undefined;
                            var4 = apply(var13, var12, var11);
                            var3 = var4.then;
                            var2 = function(arg1) {
                                var4 = _closure1_slot15;
                                var3 = var4.loadingDone;
                                var2 = _closure3_slot1;
                                var1 = true;
                                var1 = var3.bind(var4)(var2, var1);
                                var1 = arg1;
                                return var1;
                            };
                            var3 = var3.bind(var4)(var2);
                            var2 = var3.catch;
                            var1 = function(arg1) {
                                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                                    var5 = _closure1_slot15;
                                    var4 = var5.loadingDone;
                                    var3 = _closure3_slot1;
                                    var3 = var4.bind(var5)(var3);
                                    var3 = _closure4_slot0;
                                    var3 = var3.signal;
                                    var3 = var3.aborted;
                                    if(var3) { _fun0016_ip = 161; continue _fun0016 }
 47:
                                    var5 = function makeError(arg1) {
                                        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                                            var1 = arg1;
                                            var2 = global;
                                            var3 = var2.Error;
                                            var3 = var1 instanceof var3;
                                            if(var3) { _fun0017_ip = 272; continue _fun0017 }
 21:
                                            var4 = 'object';
                                            var3 = typeof var1;
                                            if(!(var4 !== var3)) { _fun0017_ip = 73; continue _fun0017 }
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
                                            if(!var3) { _fun0017_ip = 111; continue _fun0017 }
 84:
                                            var4 = var1.body;
                                            var3 = null;
                                            if(!(var3 != var4)) { _fun0017_ip = 111; continue _fun0017 }
 95:
                                            var4 = var1.body;
                                            var3 = 'message';
                                            var3 = var3 in var4;
                                            if(var3) { _fun0017_ip = 204; continue _fun0017 }
 111:
                                            var4 = var2.Object;
                                            var3 = var4.entries;
                                            var5 = var3.bind(var4)(var1);
                                            var4 = var5.map;
                                            var3 = function(arg1, arg2) {
                                                var1 = global;
                                                var4 = var1.String;
                                                var3 = undefined;
                                                var2 = arg2;
                                                var8 = var4.bind(var3)(var2);
                                                var1 = var1.HermesInternal;
                                                var5 = var1.concat;
                                                var11 = '';
                                                var10 = arg1;
                                                var9 = ': [';
                                                var7 = ']';
                                                var1 = var11[var5](var10, var9, var8, var7, var6);
                                                return var1;
                                            };
                                            var6 = var4.bind(var5)(var3);
                                            var5 = _closure1_slot16;
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
                                            var4 = _closure1_slot16;
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
                                    var4 = undefined;
                                    var3 = arg1;
                                    var4 = var5.bind(var4)(var3);
                                    var3 = _closure3_slot3;
                                    var5 = var3.fetchFailCounter;
                                    var3 = _closure2_slot4;
                                    var5 = var5 >= var3;
                                    var3 = !var5;
                                    if(var5) { _fun0016_ip = 99; continue _fun0016 }
 91:
                                    var5 = _closure1_slot16;
                                    var3 = var4 instanceof var5;
 99:
                                    if(!var3) { _fun0016_ip = 138; continue _fun0016 }
 102:
                                    var6 = var4.status;
                                    var5 = 500;
                                    var5 = var6 >= var5;
                                    if(var5) { _fun0016_ip = 135; continue _fun0016 }
 120:
                                    var7 = var4.status;
                                    var6 = 429;
                                    var5 = var6 === var7;
 135:
                                    var3 = var5;
 138:
                                    if(var3) { _fun0016_ip = 161; continue _fun0016 }
 141:
                                    var3 = _closure1_slot15;
                                    var2 = var3.setError;
                                    var1 = _closure3_slot1;
                                    var1 = var2.bind(var3)(var1, var4);
 161:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
 184:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var10 = var12.bind(var5)(var8, var10);
                    _closure3_slot7 = var10;
                    var8 = new Array(2);
                    var8[0] = var11;
                    var8[1] = var10;
                    var7 = function() {
                        var3 = _closure3_slot7;
                        var2 = undefined;
                        var2 = var3.bind(var2)();
                        var4 = _closure1_slot15;
                        var3 = var4.subscribe;
                        var2 = _closure3_slot1;
                        var1 = _closure3_slot7;
                        var1 = var3.bind(var4)(var2, var1);
                        var1 = function() {
                            var4 = _closure1_slot15;
                            var1 = var4.abort;
                            var3 = _closure3_slot1;
                            var1 = var1.bind(var4)(var3);
                            var2 = var4.subscribe;
                            var1 = undefined;
                            var2 = var2.bind(var4)(var3, var1);
                            return var1;
                        };
                        return var1;
                    };
                    var7 = var9.bind(var5)(var7, var8);
                    var8 = var6.fetchState;
                    var7 = _closure1_slot12;
                    var7 = var7.Init;
                    if(!(var8 !== var7)) { _fun0013_ip = 336; continue _fun0013 }
 314:
                    var6 = var6.fetchState;
                    var2 = _closure1_slot12;
                    var2 = var2.Fetching;
                    var2 = var6 === var2;
                    _fun0013_ip = 340; continue _fun0013;
 336:
                    var2 = var1.bind(var5)();
 340:
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
        var3 = _closure1_slot15;
        var2 = var3.validate;
        var1 = arg1;
        var1 = var2.bind(var3)(var1);
        var1 = undefined;
        return var1;
    };
    var3['revalidateFetchStoreData'] = var2;
    return var1;
})();
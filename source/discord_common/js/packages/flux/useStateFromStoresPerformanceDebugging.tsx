// discord_common/js/packages/flux/useStateFromStoresPerformanceDebugging.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var10 = require;
        var3 = exports;
        var11 = dependencyMap;
        var _closure1_slot0 = var10;
        var _closure1_slot1 = var11;
        var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var3 = arg1;
                var _closure2_slot0 = var3;
                var5 = global;
                var2 = var5.Symbol;
                var4 = 'undefined';
                var2 = typeof var2;
                var2 = var4 !== var2;
                if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                var4 = var5.Symbol;
                var4 = var4.iterator;
                var2 = var3[var4];
case 2:
                if(var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                var2 = var3.@@iterator;
case 4:
                if(var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                var6 = var5.Array;
                var4 = var6.isArray;
                var6 = var4.bind(var6)(var3);
                var4 = var2;
                if(var6) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                var8 = undefined;
                var6 = undefined;
                if(!var3) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var9 = 'string';
                var7 = typeof var3;
                if(!(var9 !== var7)) { _fun0002_ip = 12; continue _fun0002 }
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
                if(!var7) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                var7 = var3.constructor;
case 14:
                var10 = var9;
                if(!var7) { _fun0002_ip = 16; continue _fun0002 }
case 17:
                var7 = var3.constructor;
                var10 = var7.name;
case 16:
                var7 = 'Map';
                if(!(var7 !== var10)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                var7 = 'Set';
                if(!(var7 !== var10)) { _fun0002_ip = 18; continue _fun0002 }
case 20:
                var7 = 'Arguments';
                if(!(var7 !== var10)) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var7 = var9.test;
                var9 = var7.bind(var9)(var10);
                var7 = undefined;
                if(!var9) { _fun0002_ip = 23; continue _fun0002 }
case 21:
                var9 = _closure1_slot13;
                var7 = var9.bind(var8)(var3, var8);
case 23:
                _fun0002_ip = 24; continue _fun0002;
case 18:
                var10 = var5.Array;
                var9 = var10.from;
                var7 = var9.bind(var10)(var3);
case 24:
                var6 = var7;
                _fun0002_ip = 10; continue _fun0002;
case 12:
                var7 = _closure1_slot13;
                var6 = var7.bind(var8)(var3, var8);
case 10:
                var4 = var6;
                if(var4) { _fun0002_ip = 8; continue _fun0002 }
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
                if(!var4) { _fun0002_ip = 26; continue _fun0002 }
case 27:
                _closure2_slot0 = var4;
case 26:
                var4 = 0;
                var _closure2_slot1 = var4;
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var2 = _closure2_slot1;
                        var1 = _closure2_slot0;
                        var1 = var1.length;
                        if(!(!(var2 >= var1))) { _fun0003_ip = 28; continue _fun0003 }
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
                        _fun0003_ip = 30; continue _fun0003;
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
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var4 = arg1;
                var1 = null;
                var3 = undefined;
                var1 = var1 == var3;
                if(var1) { _fun0004_ip = 31; continue _fun0004 }
case 32:
                var2 = var4.length;
                var1 = var3 > var2;
case 31:
                var2 = undefined;
                if(!var1) { _fun0004_ip = 33; continue _fun0004 }
case 34:
                var2 = var4.length;
case 33:
                var1 = global;
                var1 = var1.Array;
                var1 = var1.bind(var3)(var2);
                var3 = 0;
                var5 = var3 < var2;
                if(!var5) { _fun0004_ip = 35; continue _fun0004 }
case 4:
                var5 = var4[var3];
                var1[var3] = var5;
                var3 = var3 + 1;
                if(var3 < var2) { _fun0004_ip = 4; continue _fun0004 }
case 35:
                return var1;
            }
        };
        var _closure1_slot13 = var1;
        var8 = function getUseStateFromStoresExecutionWindowThresholdMs() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                var1 = arguments[0];
                var2 = undefined;
                if(!(var1 === var2)) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                var1 = 60000;
case 36:
                return var1;
            }
        };
        var7 = function getUseStateFromStoresExecutionTimeWarningThresholdMs() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                var1 = arguments[0];
                var2 = undefined;
                if(!(var1 === var2)) { _fun0006_ip = 38; continue _fun0006 }
case 37:
                var1 = 10;
case 38:
                return var1;
            }
        };
        var6 = function getUseStateFromStoresExecutionCountWarningThreshold() {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                var1 = arguments[0];
                var2 = undefined;
                if(!(var1 === var2)) { _fun0007_ip = 36; continue _fun0007 }
case 37:
                var1 = 1000;
case 36:
                return var1;
            }
        };
        var5 = function getUseStateFromStoresSpecificHookFilter() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                var1 = arguments[0];
                var2 = undefined;
                if(!(var1 === var2)) { _fun0008_ip = 39; continue _fun0008 }
case 37:
                var1 = '';
case 39:
                return var1;
            }
        };
        var4 = function getUseStateFromStoresDebuggingEnabled() {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                var1 = arguments[0];
                var2 = undefined;
                if(!(var1 === var2)) { _fun0009_ip = 40; continue _fun0009 }
case 37:
                var1 = false;
case 40:
                return var1;
            }
        };
        var1 = function hasExceededThreshold(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var5 = arg1;
                var2 = var5.name;
                var1 = 'anonymous';
                var1 = var1 !== var2;
                if(!var1) { _fun0010_ip = 41; continue _fun0010 }
case 42:
                var3 = _closure1_slot7;
                var2 = '';
                var2 = var2 === var3;
                if(var2) { _fun0010_ip = 43; continue _fun0010 }
case 44:
                var6 = var5.name;
                var3 = _closure1_slot7;
                var2 = var6 === var3;
case 43:
                if(!var2) { _fun0010_ip = 45; continue _fun0010 }
case 4:
                var6 = var5.execCount;
                var3 = _closure1_slot6;
                var3 = var6 > var3;
                if(var3) { _fun0010_ip = 9; continue _fun0010 }
case 46:
                var5 = var5.execTime;
                var4 = _closure1_slot5;
                var3 = var5 > var4;
case 9:
                var2 = var3;
case 45:
                var1 = var2;
case 41:
                return var1;
            }
        };
        var _closure1_slot14 = var1;
        var14 = function flushViolators() {
            _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                var3 = _closure1_slot12;
                var2 = _closure1_slot10;
                var1 = undefined;
                var11 = var3.bind(var1)(var2);
                var2 = var11.bind(var1)();
                var3 = var2.done;
                var8 = false;
                var7 = 2;
                var6 = 0;
                var5 = 1;
                var4 = var2;
                var2 = false;
                if(var3) { _fun0011_ip = 47; continue _fun0011 }
case 48:
                var12 = var4.value;
                var3 = _closure1_slot2;
                var3 = var3.bind(var1)(var12, var7);
                var12 = var3[var6];
                var12 = _closure1_slot14;
                var3 = var3[var5];
                var3 = var12.bind(var1)(var3);
                var2 = true;
                if(var3) { _fun0011_ip = 47; continue _fun0011 }
case 49:
                var12 = var11.bind(var1)();
                var3 = var12.done;
                var4 = var12;
                var2 = false;
                if(!var3) { _fun0011_ip = 48; continue _fun0011 }
case 47:
                if(var2) { _fun0011_ip = 50; continue _fun0011 }
case 51:
                var3 = _closure1_slot7;
                var2 = '';
                if(!(var2 === var3)) { _fun0011_ip = 50; continue _fun0011 }
case 52:
                var4 = _closure1_slot3;
                var3 = var4.log;
                var2 = 'No violators found';
                var2 = var3.bind(var4)(var2);
                _fun0011_ip = 53; continue _fun0011;
case 50:
                var2 = _closure1_slot11;
                var2 = var2.bind(var1)();
case 53:
                var3 = _closure1_slot12;
                var2 = _closure1_slot10;
                var4 = var3.bind(var1)(var2);
                var3 = var4.bind(var1)();
                var2 = var3.done;
                if(var2) { _fun0011_ip = 54; continue _fun0011 }
case 55:
                var10 = var3.value;
                var2 = _closure1_slot2;
                var2 = var2.bind(var1)(var10, var7);
                var10 = var2[var6];
                var2 = var2[var5];
                var2['warned'] = var8;
                var2['execTime'] = var6;
                var2['execCount'] = var6;
                var10 = var4.bind(var1)();
                var2 = var10.done;
                var3 = var10;
                if(!var2) { _fun0011_ip = 55; continue _fun0011 }
case 54:
                return var1;
            }
        };
        var _closure1_slot15 = var14;
        var9 = global;
        var15 = var9.Object;
        var13 = var15.defineProperty;
        var12 = {};
        var1 = true;
        var12['value'] = var1;
        var1 = '__esModule';
        var1 = var13.bind(var15)(var3, var1, var12);
        var1 = 0;
        var13 = var11[var1];
        var12 = metroImportDefault;
        var1 = undefined;
        var12 = var12.bind(var1)(var13);
        var _closure1_slot2 = var12;
        var12 = 1;
        var12 = var11[var12];
        var12 = var10.bind(var1)(var12);
        var15 = var12.Logger;
        var12 = var15.prototype;
        var13 = Object.create(var12, {constructor: {value: var15}});
        var18 = 'useStateFromStores';
        var19 = var13;
        var12 = new var19[var15](var18, var17);
        var12 = var12 instanceof Object ? var12 : var13;
        var _closure1_slot3 = var12;
        var12 = var8.bind(var1)();
        var _closure1_slot4 = var12;
        var12 = var7.bind(var1)();
        var _closure1_slot5 = var12;
        var12 = var6.bind(var1)();
        var _closure1_slot6 = var12;
        var12 = var5.bind(var1)();
        var _closure1_slot7 = var12;
        var12 = var4.bind(var1)();
        var _closure1_slot8 = var12;
        var _closure1_slot9 = var1;
        if(!var12) { _fun0001_ip = 56; continue _fun0001 }
case 57:
        var13 = var9.setInterval;
        var12 = _closure1_slot4;
        var12 = var13.bind(var1)(var14, var12);
        _closure1_slot9 = var12;
case 56:
        var9 = var9.Map;
        var12 = var9.prototype;
        var12 = Object.create(var12, {constructor: {value: var9}});
        var19 = var12;
        var9 = new var19[var9](var18);
        var9 = var9 instanceof Object ? var9 : var12;
        var _closure1_slot10 = var9;
        var9 = function printViolators() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var19 = arguments[0];
                var18 = arguments[1];
                var17 = arguments[2];
                var6 = arguments[3];
                var1 = undefined;
                if(!(var19 === var1)) { _fun0012_ip = 42; continue _fun0012 }
case 58:
                var19 = 34;
case 42:
                if(!(var18 === var1)) { _fun0012_ip = 34; continue _fun0012 }
case 59:
                var18 = 20;
case 34:
                if(!(var17 === var1)) { _fun0012_ip = 60; continue _fun0012 }
case 61:
                var17 = 20;
case 60:
                if(!(var6 === var1)) { _fun0012_ip = 62; continue _fun0012 }
case 44:
                var2 = var19 + var18;
                var3 = var2 + var17;
                var2 = 6;
                var6 = var3 + var2;
case 62:
                var8 = _closure1_slot3;
                var4 = var8.log;
                var5 = '|';
                var3 = var5.padEnd;
                var7 = '-';
                var3 = var3.bind(var5)(var6, var7);
                var3 = var3 + var5;
                var3 = var4.bind(var8)(var3);
                var8 = _closure1_slot3;
                var4 = var8.log;
                var9 = '| Consumers of `useStateFromStores` exceeding warning thresholds:';
                var3 = var9.padEnd;
                var16 = ' ';
                var3 = var3.bind(var9)(var6, var16);
                var3 = var3 + var5;
                var3 = var4.bind(var8)(var3);
                var8 = _closure1_slot3;
                var4 = var8.log;
                var3 = var5.padEnd;
                var3 = var3.bind(var5)(var6, var7);
                var3 = var3 + var5;
                var3 = var4.bind(var8)(var3);
                var8 = _closure1_slot3;
                var4 = var8.log;
                var9 = 'Function/Component Name';
                var3 = var9.padEnd;
                var11 = var3.bind(var9)(var19, var16);
                var9 = 'Total Exec Time';
                var3 = var9.padEnd;
                var28 = var3.bind(var9)(var18, var16);
                var9 = 'Total Exec Count';
                var3 = var9.padEnd;
                var26 = var3.bind(var9)(var17, var16);
                var15 = global;
                var3 = var15.HermesInternal;
                var3 = var3.concat;
                var14 = '| ';
                var31 = var14;
                var30 = var11;
                var29 = var14;
                var27 = var14;
                var25 = var5;
                var3 = var31[var3](var30, var29, var28, var27, var26, var25, var24);
                var3 = var4.bind(var8)(var3);
                var8 = _closure1_slot3;
                var4 = var8.log;
                var3 = var5.padEnd;
                var3 = var3.bind(var5)(var6, var7);
                var3 = var3 + var5;
                var3 = var4.bind(var8)(var3);
                var4 = _closure1_slot12;
                var3 = _closure1_slot10;
                var13 = var4.bind(var1)(var3);
                var4 = var13.bind(var1)();
                var3 = var4.done;
                var12 = 2;
                var11 = 'ms';
                var10 = 0;
                var9 = 1;
                var8 = '';
                if(var3) { _fun0012_ip = 63; continue _fun0012 }
case 64:
                var20 = var4.value;
                var3 = _closure1_slot2;
                var3 = var3.bind(var1)(var20, var12);
                var23 = var3[var10];
                var3 = var3[var9];
                var20 = _closure1_slot7;
                var20 = var8 !== var20;
                if(!var20) { _fun0012_ip = 65; continue _fun0012 }
case 66:
                var21 = _closure1_slot7;
                var20 = var23 === var21;
case 65:
                if(var20) { _fun0012_ip = 67; continue _fun0012 }
case 68:
                var21 = _closure1_slot14;
                var20 = var21.bind(var1)(var3);
case 67:
                if(!var20) { _fun0012_ip = 69; continue _fun0012 }
case 70:
                var21 = _closure1_slot3;
                var20 = var21.log;
                var22 = var23.padEnd;
                var24 = var22.bind(var23)(var19, var16);
                var23 = var3.execTime;
                var22 = var23.toFixed;
                var22 = var22.bind(var23)(var12);
                var23 = var22 + var11;
                var22 = var23.padEnd;
                var28 = var22.bind(var23)(var18, var16);
                var22 = var3.execCount;
                var3 = var22.toString;
                var22 = var3.bind(var22)();
                var3 = var22.padEnd;
                var26 = var3.bind(var22)(var17, var16);
                var3 = var15.HermesInternal;
                var3 = var3.concat;
                var31 = var14;
                var30 = var24;
                var29 = var14;
                var27 = var14;
                var25 = var5;
                var3 = var31[var3](var30, var29, var28, var27, var26, var25, var24);
                var3 = var20.bind(var21)(var3);
case 69:
                var20 = var13.bind(var1)();
                var3 = var20.done;
                var4 = var20;
                if(!var3) { _fun0012_ip = 64; continue _fun0012 }
case 63:
                var4 = _closure1_slot3;
                var3 = var4.log;
                var2 = var5.padEnd;
                var2 = var2.bind(var5)(var6, var7);
                var2 = var2 + var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var _closure1_slot11 = var9;
        var9 = 3;
        var9 = var11[var9];
        var11 = var10.bind(var1)(var9);
        var10 = var11.fileFinishedImporting;
        var9 = '../discord_common/js/packages/flux/useStateFromStoresPerformanceDebugging.tsx';
        var9 = var10.bind(var11)(var9);
        var3['getUseStateFromStoresExecutionWindowThresholdMs'] = var8;
        var8 = function setUseStateFromStoresExecutionWindowThresholdMs(arg1) {
            _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                var6 = arg1;
                _closure1_slot4 = var6;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var5 = var2.Storage;
                var4 = var5.set;
                var2 = 'useStateFromStoresExecutionWindowThresholdMs';
                var2 = var4.bind(var5)(var2, var6);
                var2 = global;
                var5 = var2.clearInterval;
                var4 = _closure1_slot9;
                var4 = var5.bind(var1)(var4);
                var4 = _closure1_slot8;
                if(!var4) { _fun0013_ip = 71; continue _fun0013 }
case 72:
                var5 = var2.setInterval;
                var4 = _closure1_slot15;
                var2 = _closure1_slot4;
                var2 = var5.bind(var1)(var4, var2);
                _closure1_slot9 = var2;
case 71:
                return var1;
            }
        };
        var3['setUseStateFromStoresExecutionWindowThresholdMs'] = var8;
        var3['getUseStateFromStoresExecutionTimeWarningThresholdMs'] = var7;
        var7 = function setUseStateFromStoresExecutionTimeWarningThresholdMs(arg1) {
            var5 = arg1;
            _closure1_slot5 = var5;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var4 = var2.Storage;
            var3 = var4.set;
            var2 = 'useStateFromStoresExecutionTimeWarningThresholdMs';
            var2 = var3.bind(var4)(var2, var5);
            return var1;
        };
        var3['setUseStateFromStoresExecutionTimeWarningThresholdMs'] = var7;
        var3['getUseStateFromStoresExecutionCountWarningThreshold'] = var6;
        var6 = function setUseStateFromStoresExecutionCountWarningThreshold(arg1) {
            var5 = arg1;
            _closure1_slot6 = var5;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var4 = var2.Storage;
            var3 = var4.set;
            var2 = 'useStateFromStoresExecutionCountWarningThreshold';
            var2 = var3.bind(var4)(var2, var5);
            return var1;
        };
        var3['setUseStateFromStoresExecutionCountWarningThreshold'] = var6;
        var6 = function setUseStateFromStoresSpecificHookFilter(arg1) {
            var5 = arg1;
            _closure1_slot7 = var5;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var4 = var2.Storage;
            var3 = var4.set;
            var2 = 'useStateFromStoresSpecificHookFilter';
            var2 = var3.bind(var4)(var2, var5);
            return var1;
        };
        var3['setUseStateFromStoresSpecificHookFilter'] = var6;
        var3['getUseStateFromStoresSpecificHookFilter'] = var5;
        var3['getUseStateFromStoresDebuggingEnabled'] = var4;
        var4 = function setUseStateFromStoresDebuggingEnabled(arg1) {
            _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
                var6 = arg1;
                _closure1_slot8 = var6;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var5 = var2.Storage;
                var4 = var5.set;
                var2 = 'useStateFromStoresDebuggingEnabled';
                var2 = var4.bind(var5)(var2, var6);
                var4 = _closure1_slot8;
                var2 = global;
                if(var4) { _fun0014_ip = 73; continue _fun0014 }
case 74:
                var5 = var2.clearInterval;
                var4 = _closure1_slot9;
                var4 = var5.bind(var1)(var4);
                _closure1_slot9 = var1;
                _fun0014_ip = 75; continue _fun0014;
case 73:
                var5 = var2.setInterval;
                var4 = _closure1_slot15;
                var2 = _closure1_slot4;
                var2 = var5.bind(var1)(var4, var2);
                _closure1_slot9 = var2;
case 75:
                return var1;
            }
        };
        var3['setUseStateFromStoresDebuggingEnabled'] = var4;
        var4 = function getUseStateFromStoresHookInfo() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                var1 = _closure1_slot8;
                if(var1) { _fun0015_ip = 32; continue _fun0015 }
case 76:
                var1 = undefined;
                return var1;
case 32:
                var1 = global;
                var1 = var1.Error;
                var3 = var1.prototype;
                var3 = Object.create(var3, {constructor: {value: var1}});
                var16 = var3;
                var1 = new var16[var1](var15);
                var1 = var1 instanceof Object ? var1 : var3;
                var5 = var1.stack;
                var3 = null;
                var1 = var3 == var5;
                var12 = undefined;
                if(var1) { _fun0015_ip = 77; continue _fun0015 }
case 78:
                var4 = var5.split;
                var1 = '\n';
                var12 = var4.bind(var5)(var1);
case 77:
                if(!(var3 == var12)) { _fun0015_ip = 79; continue _fun0015 }
case 80:
                var12 = new Array(0);
case 79:
                var1 = var12.length;
                var11 = 3;
                var1 = var11 < var1;
                var10 = 'unknown';
                var9 = 'useStateFromStoresObject';
                var8 = 'useStateFromStoresArray';
                var7 = ' ';
                var6 = 1;
                var5 = 'useStateFromStores';
                var4 = var10;
                if(!var1) { _fun0015_ip = 81; continue _fun0015 }
case 82:
                var13 = var12[var11];
                var1 = var13.trim;
                var13 = var1.bind(var13)();
                var1 = var13.split;
                var1 = var1.bind(var13)(var7);
                var1 = var1[var6];
                if(!(var5 !== var1)) { _fun0015_ip = 83; continue _fun0015 }
case 84:
                if(!(var8 !== var1)) { _fun0015_ip = 83; continue _fun0015 }
case 15:
                var4 = var1;
                if(!(var9 === var4)) { _fun0015_ip = 81; continue _fun0015 }
case 83:
                var11 = var11 + 1;
                var1 = var12.length;
                var1 = var11 < var1;
                var4 = var10;
                if(var1) { _fun0015_ip = 82; continue _fun0015 }
case 81:
                var5 = _closure1_slot10;
                var1 = var5.get;
                var1 = var1.bind(var5)(var4);
                if(!(var3 == var1)) { _fun0015_ip = 85; continue _fun0015 }
case 86:
                var3 = {'name': null, 'execCount': 0, 'execTime': 0, 'warned': false};
                var3['name'] = var4;
                var1 = var3;
case 85:
                var3 = _closure1_slot10;
                var2 = var3.set;
                var2 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var3['getUseStateFromStoresHookInfo'] = var4;
        var2 = function trackGetStateFromStoresPerformance(arg1, arg2) {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                var5 = arg1;
                var2 = arg2;
                var1 = _closure1_slot8;
                if(!var1) { _fun0016_ip = 87; continue _fun0016 }
case 88:
                var1 = null;
                if(!(var1 != var5)) { _fun0016_ip = 87; continue _fun0016 }
case 34:
                var3 = global;
                var6 = var3.performance;
                var1 = var6.now;
                var9 = var1.bind(var6)();
                var7 = undefined;
                var1 = var2.bind(var7)();
                var8 = var3.performance;
                var6 = var8.now;
                var6 = var6.bind(var8)();
                var8 = var5.execTime;
                var6 = var6 - var9;
                var6 = var8 + var6;
                var5['execTime'] = var6;
                var6 = var5.execCount;
                var6 = var6 + 1;
                var5['execCount'] = var6;
                var8 = var5.warned;
                var6 = false;
                if(!(var6 === var8)) { _fun0016_ip = 89; continue _fun0016 }
case 90:
                var6 = _closure1_slot14;
                var6 = var6.bind(var7)(var5);
                if(!var6) { _fun0016_ip = 89; continue _fun0016 }
case 91:
                var6 = true;
                var5['warned'] = var6;
                var18 = var5.name;
                var16 = var5.execTime;
                var14 = var5.execCount;
                var5 = _closure1_slot3;
                var4 = var5.log;
                var3 = var3.HermesInternal;
                var9 = var3.concat;
                var19 = '';
                var17 = ' cumulatively used ';
                var15 = 'ms of execution time and ran ';
                var13 = ' times.';
                var3 = var19[var9](var18, var17, var16, var15, var14, var13, var12);
                var3 = var4.bind(var5)(var3);
case 89:
                return var1;
case 87:
                var1 = undefined;
                var1 = var2.bind(var1)();
                return var1;
            }
        };
        var3['trackGetStateFromStoresPerformance'] = var2;
        return var1;
    }
})();
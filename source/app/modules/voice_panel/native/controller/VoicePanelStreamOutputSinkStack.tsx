// app/modules/voice_panel/native/controller/VoicePanelStreamOutputSinkStack.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
            if(var2) { _fun0001_ip = 344; continue _fun0001 }
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
            var9 = _closure1_slot5;
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
            var7 = _closure1_slot5;
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
 344:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot4 = var1;
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
    var _closure1_slot5 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var5 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var5);
    var _closure1_slot3 = var4;
    var4 = function() {
        var4 = _closure1_slot2;
        var3 = function VoicePanelStreamOutputSinkStack(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var5 = arguments[1];
                var3 = this;
                var _closure3_slot0 = var3;
                var1 = undefined;
                if(!(var5 === var1)) { _fun0004_ip = 20; continue _fun0004 }
 18:
                var5 = false;
 20:
                var6 = _closure1_slot1;
                var4 = _closure2_slot0;
                var4 = var6.bind(var1)(var3, var4);
                var4 = arg1;
                var3['mediaEngine'] = var4;
                var4 = global;
                var6 = var4.Map;
                var7 = var6.prototype;
                var7 = Object.create(var7, {constructor: {value: var6}});
                var10 = var7;
                var6 = new var10[var6](var9);
                var6 = var6 instanceof Object ? var6 : var7;
                var3['activeSinks'] = var6;
                var6 = -1;
                var3['timer'] = var6;
                if(!var5) { _fun0004_ip = 129; continue _fun0004 }
 98:
                var5 = var4.setInterval;
                var4 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.logSinks;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var2 = 2000;
                var2 = var5.bind(var1)(var4, var2);
                var3['timer'] = var2;
 129:
                return var1;
            }
        };
        var _closure2_slot0 = var3;
        var1 = {};
        var2 = 'cleanUp';
        var1['key'] = var2;
        var2 = function value() {
            var1 = global;
            var3 = var1.clearInterval;
            var1 = this;
            var2 = var1.timer;
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            return var1;
        };
        var1['value'] = var2;
        var2 = new Array(6);
        var2[0] = var1;
        var1 = {};
        var6 = 'logSinks';
        var1['key'] = var6;
        var6 = function value() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var14 = new Array(0);
                var3 = _closure1_slot4;
                var1 = this;
                var2 = var1.activeSinks;
                var1 = undefined;
                var12 = var3.bind(var1)(var2);
                var3 = var12.bind(var1)();
                var2 = var3.done;
                var11 = 2;
                var10 = 0;
                var9 = 1;
                var8 = global;
                var7 = ',';
                var6 = '[Stream:';
                var5 = ', Locks:[';
                var4 = ']]';
                if(var2) { _fun0005_ip = 172; continue _fun0005 }
 71:
                var15 = var3.value;
                var2 = _closure1_slot0;
                var2 = var2.bind(var1)(var15, var11);
                var17 = var2[var10];
                var18 = var2[var9];
                var15 = var14.push;
                var16 = var8.Array;
                var2 = var16.from;
                var16 = var2.bind(var16)(var18);
                var2 = var16.join;
                var20 = var2.bind(var16)(var7);
                var2 = var8.HermesInternal;
                var2 = var2.concat;
                var23 = var6;
                var22 = var17;
                var21 = var5;
                var19 = var4;
                var2 = var23[var2](var22, var21, var20, var19, var18);
                var2 = var15.bind(var14)(var2);
                var15 = var12.bind(var1)();
                var2 = var15.done;
                var3 = var15;
                if(!var2) { _fun0005_ip = 71; continue _fun0005 }
 172:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[1] = var1;
        var1 = {};
        var6 = 'setHasActiveVideoOutputSink';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var5 = arg1;
                var4 = arg2;
                var1 = this;
                var3 = var1.activeSinks;
                var2 = var3.get;
                var3 = var2.bind(var3)(var4);
                var2 = null;
                if(!(var2 == var3)) { _fun0006_ip = 59; continue _fun0006 }
 31:
                var2 = global;
                var2 = var2.Set;
                var6 = var2.prototype;
                var6 = Object.create(var6, {constructor: {value: var2}});
                var12 = var6;
                var2 = new var12[var2](var11);
                var3 = var2 instanceof Object ? var2 : var6;
 59:
                var2 = var3.has;
                var2 = var2.bind(var3)(var5);
                var6 = arg3;
                if(var6) { _fun0006_ip = 147; continue _fun0006 }
 75:
                if(var2) { _fun0006_ip = 82; continue _fun0006 }
 78:
                var6 = undefined;
                return var6;
 82:
                var6 = var3.delete;
                var6 = var6.bind(var3)(var5);
                var7 = var3.size;
                var6 = 0;
                if(!(var6 === var7)) { _fun0006_ip = 215; continue _fun0006 }
 103:
                var8 = var1.setActive;
                var6 = var1.sourceId;
                var7 = var6.bind(var1)(var5);
                var6 = false;
                var6 = var8.bind(var1)(var4, var6, var7);
                var7 = var1.activeSinks;
                var6 = var7.delete;
                var6 = var6.bind(var7)(var4);
                _fun0006_ip = 215; continue _fun0006;
 147:
                if(var2) { _fun0006_ip = 219; continue _fun0006 }
 150:
                var2 = var3.add;
                var2 = var2.bind(var3)(var5);
                var6 = var3.size;
                var2 = 1;
                if(!(var2 === var6)) { _fun0006_ip = 215; continue _fun0006 }
 172:
                var6 = var1.setActive;
                var2 = var1.sourceId;
                var5 = var2.bind(var1)(var5);
                var2 = true;
                var2 = var6.bind(var1)(var4, var2, var5);
                var2 = var1.activeSinks;
                var1 = var2.set;
                var1 = var1.bind(var2)(var4, var3);
 215:
                var1 = undefined;
                return var1;
 219:
                var1 = undefined;
                return var1;
            }
        };
        var1['value'] = var6;
        var2[2] = var1;
        var1 = {};
        var6 = 'clearLock';
        var1['key'] = var6;
        var6 = function value(arg1) {
            _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                var11 = arg1;
                var10 = this;
                var3 = _closure1_slot4;
                var2 = var10.activeSinks;
                var1 = undefined;
                var8 = var3.bind(var1)(var2);
                var3 = var8.bind(var1)();
                var2 = var3.done;
                var7 = false;
                var6 = 0;
                var5 = 2;
                var4 = 1;
                if(var2) { _fun0007_ip = 158; continue _fun0007 }
 48:
                var12 = var3.value;
                var2 = _closure1_slot0;
                var2 = var2.bind(var1)(var12, var5);
                var13 = var2[var6];
                var2 = var2[var4];
                var12 = var2.has;
                var12 = var12.bind(var2)(var11);
                if(!var12) { _fun0007_ip = 143; continue _fun0007 }
 84:
                var12 = var2.delete;
                var12 = var12.bind(var2)(var11);
                var2 = var2.size;
                if(!(var6 === var2)) { _fun0007_ip = 143; continue _fun0007 }
 103:
                var12 = var10.setActive;
                var2 = var10.sourceId;
                var2 = var2.bind(var10)(var11);
                var2 = var12.bind(var10)(var13, var7, var2);
                var12 = var10.activeSinks;
                var2 = var12.delete;
                var2 = var2.bind(var12)(var13);
 143:
                var12 = var8.bind(var1)();
                var2 = var12.done;
                var3 = var12;
                if(!var2) { _fun0007_ip = 48; continue _fun0007 }
 158:
                return var1;
            }
        };
        var1['value'] = var6;
        var2[3] = var1;
        var1 = {};
        var6 = 'setActive';
        var1['key'] = var6;
        var6 = function value(arg1, arg2, arg3) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var2 = arg2;
            var _closure3_slot1 = var2;
            var2 = arg3;
            var _closure3_slot2 = var2;
            var2 = this;
            var3 = var2.mediaEngine;
            var2 = var3.eachConnection;
            var1 = function(arg1) {
                var5 = arg1;
                var4 = var5.setHasActiveVideoOutputSink;
                var3 = _closure3_slot0;
                var2 = _closure3_slot1;
                var1 = _closure3_slot2;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var1 = var2.bind(var3)(var1);
            var1 = undefined;
            return var1;
        };
        var1['value'] = var6;
        var2[4] = var1;
        var1 = {};
        var6 = 'sourceId';
        var1['key'] = var6;
        var5 = function value(arg1) {
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = 'VoicePanelStreamOutputSinkStack-';
            var1 = arg1;
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var1['value'] = var5;
        var2[5] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var4 = var4.bind(var1)();
    var5 = 4;
    var6 = var6[var5];
    var5 = require;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_panel/native/controller/VoicePanelStreamOutputSinkStack.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function useSetHasActiveVideoOutputSink(arg1) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var5 = _closure1_slot3;
        var1 = var5.useId;
        var7 = var1.bind(var5)();
        var _closure2_slot1 = var7;
        var4 = var5.useCallback;
        var3 = new Array(2);
        var3[0] = var7;
        var3[1] = var6;
        var1 = function(arg1, arg2) {
            var5 = _closure2_slot0;
            var4 = var5.setHasActiveVideoOutputSink;
            var3 = _closure2_slot1;
            var2 = arg1;
            var1 = arg2;
            var1 = var4.bind(var5)(var3, var2, var1);
            var1 = undefined;
            return var1;
        };
        var1 = var4.bind(var5)(var1, var3);
        var4 = var5.useEffect;
        var3 = new Array(3);
        var3[0] = var7;
        var3[1] = var1;
        var3[2] = var6;
        var2 = function() {
            var1 = function() {
                var3 = _closure2_slot0;
                var2 = var3.clearLock;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            return var1;
        };
        var2 = var4.bind(var5)(var2, var3);
        return var1;
    };
    var3['useSetHasActiveVideoOutputSink'] = var2;
    return var1;
})();
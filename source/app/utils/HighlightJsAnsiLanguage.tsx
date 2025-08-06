// app/utils/HighlightJsAnsiLanguage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
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
            var9 = _closure1_slot6;
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
            var7 = _closure1_slot6;
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
    var _closure1_slot5 = var1;
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
    var _closure1_slot6 = var1;
    var1 = function makeAnsiRuleCategory(arg1, arg2, arg3, arg4) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var4 = arg2;
            var2 = arg1;
            var _closure2_slot0 = var2;
            var5 = ['0'];
            var9 = arg3;
            var8 = 1;
            var10 = var5;
            var2 = arraySpread(var10, var9, var8);
            var _closure2_slot1 = var5;
            var2 = arg4;
            if(!var2) { _fun0004_ip = 94; continue _fun0004 }
 45:
            var3 = var5.push;
            var2 = global;
            var6 = var2.Object;
            var2 = var6.keys;
            var9 = var2.bind(var6)(var4);
            var2 = new Array(0);
            var8 = 0;
            var10 = var2;
            var6 = arraySpread(var10, var9, var8);
            var10 = var3;
            var9 = var2;
            var8 = var5;
            var2 = apply(var10, var9, var8);
 94:
            var2 = global;
            var3 = var2.Object;
            var2 = var3.entries;
            var3 = var2.bind(var3)(var4);
            var2 = var3.map;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = arg1;
                    var1 = var3[Symbol.iterator];
                    var3 = var1().next;
                    var4 = var3().value;
                    var2 = var1;
                    var6 = undefined;
                    var2 = var2 === var6;
                    var5 = undefined;
                    if(var2) { _fun0005_ip = 27; continue _fun0005 }
 24:
                    var5 = var4;
 27:
                    var4 = undefined;
                    if(var2) { _fun0005_ip = 57; continue _fun0005 }
 32:
                    var7 = var3().value;
                    var3 = var1;
                    var3 = var3 === var6;
                    var4 = undefined;
                    var2 = var3;
                    if(var3) { _fun0005_ip = 57; continue _fun0005 }
 51:
                    var4 = var7;
                    var2 = var3;
 57:
                    if(var2) { _fun0005_ip = 63; continue _fun0005 }
 60:
                    var1.return();
 63:
                    var12 = _closure2_slot0;
                    var9 = _closure2_slot1;
                    var1 = function makeAnsiRule(arg1, arg2, arg3, arg4) {
                        var1 = arg3;
                        var _closure4_slot0 = var1;
                        var1 = arg4;
                        var _closure4_slot1 = var1;
                        var1 = {};
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var7 = var3.concat;
                        var6 = 'ansi-';
                        var5 = arg1;
                        var4 = '-';
                        var3 = arg2;
                        var3 = var7.bind(var6)(var5, var4, var3);
                        var1['className'] = var3;
                        var3 = true;
                        var1['endsParent'] = var3;
                        var3 = _closure1_slot4;
                        var1['begin'] = var3;
                        var2 = function on:begin(arg1, arg2) {
                            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                                var3 = arg2;
                                var2 = arg1;
                                var1 = 1;
                                var4 = var2[var1];
                                var2 = var4.split;
                                var1 = ';';
                                var4 = var2.bind(var4)(var1);
                                var1 = var3.data;
                                var2 = var1.isOn;
                                var1 = undefined;
                                if(!(var1 === var2)) { _fun0006_ip = 57; continue _fun0006 }
 44:
                                var5 = var3.data;
                                var2 = false;
                                var5['isOn'] = var2;
 57:
                                var2 = _closure1_slot5;
                                var8 = var2.bind(var1)(var4);
                                var4 = var8.bind(var1)();
                                var2 = var4.done;
                                var7 = true;
                                var6 = false;
                                if(var2) { _fun0006_ip = 157; continue _fun0006 }
 88:
                                var10 = var4.value;
                                var2 = _closure4_slot0;
                                if(!(var10 !== var2)) { _fun0006_ip = 131; continue _fun0006 }
 101:
                                var9 = _closure4_slot1;
                                var2 = var9.includes;
                                var2 = var2.bind(var9)(var10);
                                if(!var2) { _fun0006_ip = 142; continue _fun0006 }
 118:
                                var2 = var3.data;
                                var2['isOn'] = var6;
                                _fun0006_ip = 142; continue _fun0006;
 131:
                                var2 = var3.data;
                                var2['isOn'] = var7;
 142:
                                var9 = var8.bind(var1)();
                                var2 = var9.done;
                                var4 = var9;
                                if(!var2) { _fun0006_ip = 88; continue _fun0006 }
 157:
                                var2 = var3.data;
                                var2 = var2.isOn;
                                if(var2) { _fun0006_ip = 183; continue _fun0006 }
 171:
                                var2 = var3.ignoreMatch;
                                var2 = var2.bind(var3)();
 183:
                                return var1;
                            }
                        };
                        var1['on:begin'] = var2;
                        return var1;
                    };
                    var13 = undefined;
                    var11 = var4;
                    var10 = var5;
                    var1 = var13[var1](var12, var11, var10, var9, var8);
                    return var1;
                }
            };
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var _closure1_slot7 = var1;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var2 = true;
    var5['value'] = var2;
    var2 = '__esModule';
    var2 = var6.bind(var7)(var3, var2, var5);
    var2 = {1: 'bold', 4: 'underline'};
    var _closure1_slot0 = var2;
    var2 = {30: 'black', 31: 'red', 32: 'green', 33: 'yellow', 34: 'blue', 35: 'magenta', 36: 'cyan', 37: 'white'};
    var _closure1_slot1 = var2;
    var2 = {40: 'black', 41: 'red', 42: 'green', 43: 'yellow', 44: 'blue', 45: 'magenta', 46: 'cyan', 47: 'white'};
    var _closure1_slot2 = var2;
    var2 = /\x1B\[(\d+(?:[:;]\d+)*)m/;
    var _closure1_slot3 = var2;
    var6 = var1.RegExp;
    var8 = var2.source;
    var1 = var1.HermesInternal;
    var7 = var1.concat;
    var5 = '(?=';
    var1 = ')';
    var11 = var7.bind(var5)(var8, var1);
    var5 = var6.prototype;
    var5 = Object.create(var5, {constructor: {value: var6}});
    var12 = var5;
    var1 = new var12[var6](var11, var10);
    var1 = var1 instanceof Object ? var1 : var5;
    var _closure1_slot4 = var1;
    var5 = dependencyMap;
    var1 = 0;
    var6 = var5[var1];
    var5 = require;
    var1 = undefined;
    var7 = var5.bind(var1)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/HighlightJsAnsiLanguage.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function highlightJsAnsiLanguage() {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var11 = _closure1_slot7;
            var14 = _closure1_slot1;
            var15 = 'foreground';
            var13 = ['38', '39'];
            var7 = true;
            var16 = undefined;
            var12 = true;
            var14 = var16[var11](var15, var14, var13, var12, var11);
            var2 = new Array(1);
            var3 = 0;
            var15 = var2;
            var13 = 0;
            var5 = arraySpread(var15, var14, var13);
            var14 = _closure1_slot2;
            var15 = 'background';
            var13 = ['48', '49'];
            var16 = undefined;
            var14 = var16[var11](var15, var14, var13, var12, var11);
            var15 = var2;
            var13 = var5;
            var5 = arraySpread(var15, var14, var13);
            var14 = _closure1_slot0;
            var15 = 'style';
            var13 = new Array(0);
            var12 = false;
            var16 = undefined;
            var14 = var16[var11](var15, var14, var13, var12, var11);
            var15 = var2;
            var13 = var5;
            var1 = arraySpread(var15, var14, var13);
            var5 = {};
            var6 = 'ansi-control-sequence';
            var5['className'] = var6;
            var6 = _closure1_slot3;
            var5['begin'] = var6;
            var6 = {};
            var8 = _closure1_slot4;
            var6['end'] = var8;
            var6['endsParent'] = var7;
            var5['starts'] = var6;
            var2[var1] = var5;
            var5 = 1;
            var1 = var1 + var5;
            var1 = var2.length;
            var1 = var3 < var1;
            if(!var1) { _fun0007_ip = 218; continue _fun0007 }
 182:
            var6 = var2[var3];
            var7 = var2.slice;
            var1 = var3 + var5;
            var1 = var7.bind(var2)(var1);
            var6['contains'] = var1;
            var3 = var3 + 1;
            var1 = var2.length;
            if(var3 < var1) { _fun0007_ip = 182; continue _fun0007 }
 218:
            var1 = {};
            var3 = {};
            var4 = _closure1_slot4;
            var3['begin'] = var4;
            var3['contains'] = var2;
            var2 = new Array(1);
            var2[0] = var3;
            var1['contains'] = var2;
            return var1;
        }
    };
    var3['default'] = var4;
    var3['ANSI_CONTROL_SEQUENCE_RE'] = var2;
    return var1;
})();
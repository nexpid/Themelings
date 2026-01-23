// app/design/components/TransitionGroup/TransitionGroup.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
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
            var9 = _closure1_slot6;
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
            var7 = _closure1_slot6;
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
    var _closure1_slot5 = var1;
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
    var _closure1_slot6 = var1;
    var1 = function wrapChildrenDefault(arg1) {
        var1 = arg1;
        return var1;
    };
    var _closure1_slot7 = var1;
    var4 = function TransitionGroup(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var5 = var1.items;
            var _closure2_slot0 = var5;
            var13 = var1.renderItem;
            var _closure2_slot1 = var13;
            var14 = var1.getItemKey;
            var _closure2_slot2 = var14;
            var4 = var1.wrapChildren;
            var3 = undefined;
            if(!(var4 === var3)) { _fun0004_ip = 36; continue _fun0004 }
case 37:
            var4 = _closure1_slot7;
case 36:
            var6 = var1.lazyCleanUpDelay;
            var _closure2_slot3 = var6;
            var _closure2_slot4 = var3;
            var _closure2_slot5 = var3;
            var _closure2_slot6 = var3;
            var _closure2_slot7 = var3;
            var8 = _closure1_slot1;
            var7 = var8.useRef;
            var1 = -1;
            var1 = var7.bind(var8)(var1);
            _closure2_slot4 = var1;
            var9 = _closure1_slot1;
            var8 = var9.useLayoutEffect;
            var7 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot4;
                    var3 = var2.current;
                    var2 = -1;
                    if(!(var2 !== var3)) { _fun0005_ip = 2; continue _fun0005 }
case 38:
                    var2 = global;
                    var3 = var2.clearTimeout;
                    var1 = _closure2_slot4;
                    var2 = var1.current;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 2:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = new Array(0);
            var1 = var8.bind(var9)(var7, var1);
            var8 = _closure1_slot1;
            var7 = var8.useState;
            var1 = _closure1_slot4;
            var7 = var7.bind(var8)(var1);
            var1 = _closure1_slot0;
            var10 = 2;
            var1 = var1.bind(var3)(var7, var10);
            var9 = 1;
            var1 = var1[var9];
            _closure2_slot5 = var1;
            var8 = _closure1_slot1;
            var7 = var8.useRef;
            var1 = null;
            var7 = var7.bind(var8)(var1);
            _closure2_slot6 = var7;
            var12 = _closure1_slot1;
            var8 = var12.useMemo;
            var7 = new Array(4);
            var7[0] = var5;
            var7[1] = var14;
            var7[2] = var13;
            var7[3] = var6;
            var6 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var1 = global;
                    var4 = var1.Set;
                    var2 = _closure2_slot6;
                    var5 = var2.current;
                    var7 = null;
                    var3 = var7 == var5;
                    var6 = undefined;
                    var2 = undefined;
                    if(var3) { _fun0006_ip = 39; continue _fun0006 }
case 40:
                    var3 = var5.keys;
                    var2 = var3.bind(var5)();
case 39:
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {constructor: {value: var4}});
                    var19 = var3;
                    var18 = var2;
                    var2 = new var19[var4](var18, var17);
                    var3 = var2 instanceof Object ? var2 : var3;
                    var _closure3_slot0 = var3;
                    var4 = var1.Map;
                    var1 = _closure2_slot6;
                    var18 = var1.current;
                    var2 = var4.prototype;
                    var2 = Object.create(var2, {constructor: {value: var4}});
                    var19 = var2;
                    var1 = new var19[var4](var18, var17);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var _closure3_slot1 = var1;
                    var10 = function _loop() {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                            var6 = _closure2_slot2;
                            var4 = _closure3_slot2;
                            var1 = undefined;
                            var4 = var6.bind(var1)(var4);
                            var _closure4_slot0 = var4;
                            var7 = _closure3_slot1;
                            var6 = var7.get;
                            var7 = var6.bind(var7)(var4);
                            var8 = null;
                            if(!(var8 != var7)) { _fun0007_ip = 41; continue _fun0007 }
case 42:
                            var9 = var7.item;
                            var6 = _closure3_slot2;
                            if(!(var9 === var6)) { _fun0007_ip = 43; continue _fun0007 }
case 44:
                            var9 = var7.renderItem;
                            var6 = _closure2_slot1;
                            if(!(var9 === var6)) { _fun0007_ip = 43; continue _fun0007 }
case 45:
                            var10 = var7.state;
                            var6 = _closure1_slot3;
                            var9 = var6.YEETED;
                            var6 = var7;
                            if(!(var10 === var9)) { _fun0007_ip = 46; continue _fun0007 }
case 43:
                            var10 = var7.cleanUp;
                            var12 = var7.state;
                            var11 = _closure1_slot3;
                            var11 = var11.YEETED;
                            if(!(var12 !== var11)) { _fun0007_ip = 47; continue _fun0007 }
case 48:
                            var11 = var7.state;
                            _fun0007_ip = 49; continue _fun0007;
case 47:
                            var9 = _closure1_slot3;
                            var11 = var9.ENTERED;
case 49:
                            var9 = _closure2_slot1;
                            var16 = _closure3_slot2;
                            var14 = var7.cleanUp;
                            var18 = undefined;
                            var17 = var4;
                            var15 = var11;
                            var12 = var18[var9](var17, var16, var15, var14, var13);
                            var7 = {};
                            var13 = _closure3_slot2;
                            var7['item'] = var13;
                            var7['children'] = var12;
                            var7['state'] = var11;
                            var7['cleanUp'] = var10;
                            var7['renderItem'] = var9;
                            var6 = var7;
                            _fun0007_ip = 46; continue _fun0007;
case 41:
                            var7 = _closure2_slot6;
                            var7 = var7.current;
                            if(!(var8 == var7)) { _fun0007_ip = 50; continue _fun0007 }
case 51:
                            var7 = _closure1_slot3;
                            var8 = var7.MOUNTED;
                            _fun0007_ip = 52; continue _fun0007;
case 50:
                            var7 = _closure1_slot3;
                            var8 = var7.ENTERED;
case 52:
                            var7 = function _cleanUp() {
                                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                                    var1 = _closure2_slot6;
                                    var7 = var1.current;
                                    var4 = null;
                                    var5 = var4 == var7;
                                    var1 = undefined;
                                    var3 = undefined;
                                    if(var5) { _fun0008_ip = 53; continue _fun0008 }
case 54:
                                    var6 = var7.get;
                                    var5 = _closure4_slot0;
                                    var3 = var6.bind(var7)(var5);
case 53:
                                    if(!(var4 != var3)) { _fun0008_ip = 55; continue _fun0008 }
case 5:
                                    var5 = var3.state;
                                    var3 = _closure1_slot3;
                                    var3 = var3.YEETED;
                                    if(!(var5 === var3)) { _fun0008_ip = 55; continue _fun0008 }
case 56:
                                    var3 = _closure2_slot6;
                                    var6 = var3.current;
                                    if(!(var4 != var6)) { _fun0008_ip = 57; continue _fun0008 }
case 58:
                                    var5 = var6.delete;
                                    var3 = _closure4_slot0;
                                    var3 = var5.bind(var6)(var3);
case 57:
                                    var3 = _closure2_slot3;
                                    if(!(var4 == var3)) { _fun0008_ip = 59; continue _fun0008 }
case 60:
                                    var4 = _closure2_slot5;
                                    var3 = {};
                                    var3 = var4.bind(var1)(var3);
                                    _fun0008_ip = 55; continue _fun0008;
case 59:
                                    var4 = global;
                                    var5 = var4.clearTimeout;
                                    var3 = _closure2_slot4;
                                    var3 = var3.current;
                                    var3 = var5.bind(var1)(var3);
                                    var3 = _closure2_slot4;
                                    var5 = var4.setTimeout;
                                    var4 = _closure2_slot3;
                                    var2 = function() {
                                        var3 = _closure2_slot5;
                                        var2 = undefined;
                                        var1 = {};
                                        var1 = var3.bind(var2)(var1);
                                        return var1;
                                    };
                                    var2 = var5.bind(var1)(var2, var4);
                                    var3['current'] = var2;
case 55:
                                    return var1;
                                }
                            };
                            var5 = _closure2_slot1;
                            var16 = _closure3_slot2;
                            var18 = undefined;
                            var17 = var4;
                            var15 = var8;
                            var14 = var7;
                            var9 = var18[var5](var17, var16, var15, var14, var13);
                            var3 = {};
                            var10 = _closure3_slot2;
                            var3['item'] = var10;
                            var3['children'] = var9;
                            var3['state'] = var8;
                            var3['cleanUp'] = var7;
                            var3['renderItem'] = var5;
                            var6 = var3;
case 46:
                            var5 = _closure3_slot1;
                            var3 = var5.set;
                            var3 = var3.bind(var5)(var4, var6);
                            var3 = _closure3_slot0;
                            var2 = var3.delete;
                            var2 = var2.bind(var3)(var4);
                            return var1;
                        }
                    };
                    var4 = _closure1_slot5;
                    var2 = _closure2_slot0;
                    var9 = var4.bind(var6)(var2);
                    var4 = var9.bind(var6)();
                    var2 = var4.done;
                    if(var2) { _fun0006_ip = 61; continue _fun0006 }
case 62:
                    var2 = var4.value;
                    var _closure3_slot2 = var2;
                    var2 = var10.bind(var6)();
                    var12 = var9.bind(var6)();
                    var2 = var12.done;
                    var4 = var12;
                    if(!var2) { _fun0006_ip = 62; continue _fun0006 }
case 61:
                    var2 = _closure1_slot5;
                    var4 = var2.bind(var6)(var3);
                    var3 = var4.bind(var6)();
                    var2 = var3.done;
                    if(var2) { _fun0006_ip = 63; continue _fun0006 }
case 20:
                    var10 = var3.value;
                    var2 = var1.get;
                    var12 = var2.bind(var1)(var10);
                    if(!(var7 != var12)) { _fun0006_ip = 64; continue _fun0006 }
case 65:
                    var9 = var12.state;
                    var2 = _closure1_slot3;
                    var2 = var2.YEETED;
                    if(!(var9 === var2)) { _fun0006_ip = 66; continue _fun0006 }
case 67:
                    var9 = var12.renderItem;
                    var2 = _closure2_slot1;
                    if(!(var9 === var2)) { _fun0006_ip = 66; continue _fun0006 }
case 52:
                    var2 = var1.set;
                    var2 = var2.bind(var1)(var10, var12);
                    _fun0006_ip = 64; continue _fun0006;
case 66:
                    var2 = var12.item;
                    var11 = var12.cleanUp;
                    var9 = {};
                    var9['item'] = var2;
                    var2 = _closure2_slot1;
                    var17 = var12.item;
                    var13 = _closure1_slot3;
                    var16 = var13.YEETED;
                    var15 = var12.cleanUp;
                    var19 = undefined;
                    var18 = var10;
                    var12 = var19[var2](var18, var17, var16, var15, var14);
                    var9['children'] = var12;
                    var12 = _closure1_slot3;
                    var12 = var12.YEETED;
                    var9['state'] = var12;
                    var9['cleanUp'] = var11;
                    var9['renderItem'] = var2;
                    var2 = var9.children;
                    if(!(var7 == var2)) { _fun0006_ip = 68; continue _fun0006 }
case 69:
                    var2 = var1.delete;
                    var2 = var2.bind(var1)(var10);
                    _fun0006_ip = 64; continue _fun0006;
case 68:
                    var2 = var1.set;
                    var2 = var2.bind(var1)(var10, var9);
case 64:
                    var9 = var4.bind(var6)();
                    var2 = var9.done;
                    var3 = var9;
                    if(!var2) { _fun0006_ip = 20; continue _fun0006 }
case 63:
                    return var1;
                }
            };
            var7 = var8.bind(var12)(var6, var7);
            _closure2_slot7 = var7;
            var12 = _closure1_slot1;
            var8 = var12.useInsertionEffect;
            var6 = new Array(1);
            var6[0] = var7;
            var2 = function() {
                var2 = _closure2_slot6;
                var1 = _closure2_slot7;
                var2['current'] = var1;
                var1 = function() {
                    _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                        var1 = _closure2_slot6;
                        var3 = var1.current;
                        var1 = null;
                        var2 = var1 == var3;
                        var1 = undefined;
                        if(var2) { _fun0009_ip = 33; continue _fun0009 }
case 31:
                        var2 = var3.clear;
                        var1 = var2.bind(var3)();
case 33:
                        return var1;
                    }
                };
                return var1;
            };
            var2 = var8.bind(var12)(var2, var6);
            var2 = new Array(0);
            var6 = _closure1_slot5;
            var8 = var6.bind(var3)(var7);
            var7 = var8.bind(var3)();
            var6 = var7.done;
            if(var6) { _fun0004_ip = 70; continue _fun0004 }
case 71:
            var12 = var7.value;
            var6 = _closure1_slot0;
            var6 = var6.bind(var3)(var12, var10);
            var6 = var6[var9];
            var12 = var2.push;
            var6 = var6.children;
            var6 = var12.bind(var2)(var6);
            var12 = var8.bind(var3)();
            var6 = var12.done;
            var7 = var12;
            if(!var6) { _fun0004_ip = 71; continue _fun0004 }
case 70:
            var7 = var2.length;
            var6 = 0;
            var6 = var7 > var6;
            var1 = null;
            if(!var6) { _fun0004_ip = 68; continue _fun0004 }
case 72:
            var1 = var4.bind(var3)(var2, var5);
case 68:
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var1 = function getSingleItemKey() {
        var1 = 'key';
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = global;
    var9 = var1.Object;
    var6 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var9)(var3, var1, var5);
    var11 = 0;
    var6 = var8[var11];
    var5 = metroImportDefault;
    var1 = undefined;
    var5 = var5.bind(var1)(var6);
    var _closure1_slot0 = var5;
    var10 = 1;
    var6 = var8[var10];
    var5 = metroImportAll;
    var5 = var5.bind(var1)(var6);
    var _closure1_slot1 = var5;
    var9 = 2;
    var5 = var8[var9];
    var5 = var7.bind(var1)(var5);
    var5 = var5.jsx;
    var _closure1_slot2 = var5;
    var5 = {};
    var5['MOUNTED'] = var11;
    var6 = 'MOUNTED';
    var5[var11] = var6;
    var5['ENTERED'] = var10;
    var6 = 'ENTERED';
    var5[var10] = var6;
    var5['YEETED'] = var9;
    var6 = 'YEETED';
    var5[var9] = var6;
    var _closure1_slot3 = var5;
    var6 = {};
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'design/components/TransitionGroup/TransitionGroup.tsx';
    var6 = var7.bind(var8)(var6);
    var3['TransitionStates'] = var5;
    var3['TransitionGroup'] = var4;
    var2 = function TransitionItem(arg1) {
        var1 = arg1;
        var7 = var1.item;
        var _closure2_slot0 = var7;
        var5 = var1.renderItem;
        var6 = _closure1_slot1;
        var4 = var6.useMemo;
        var3 = new Array(1);
        var3[0] = var7;
        var2 = function() {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                var3 = _closure2_slot0;
                var1 = null;
                if(!(var1 == var3)) { _fun0010_ip = 73; continue _fun0010 }
case 74:
                var1 = new Array(0);
                _fun0010_ip = 75; continue _fun0010;
case 73:
                var3 = _closure2_slot0;
                var2 = new Array(1);
                var2[0] = var3;
                var1 = var2;
case 75:
                return var1;
            }
        };
        var6 = var4.bind(var6)(var2, var3);
        var4 = _closure1_slot2;
        var3 = _closure1_slot8;
        var2 = {};
        var2['items'] = var6;
        var2['renderItem'] = var5;
        var1 = _closure1_slot9;
        var2['getItemKey'] = var1;
        var1 = undefined;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['TransitionItem'] = var2;
    return var1;
})();
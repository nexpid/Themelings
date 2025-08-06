// app/design/components/TransitionGroup/TransitionGroup.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var3 = exports;
    var8 = dependencyMap;
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
    var1 = function wrapChildrenDefault(arg1) {
        var1 = arg1;
        return var1;
    };
    var _closure1_slot7 = var1;
    var4 = function TransitionGroup(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var5 = var1.items;
            var _closure2_slot0 = var5;
            var13 = var1.renderItem;
            var _closure2_slot1 = var13;
            var14 = var1.getItemKey;
            var _closure2_slot2 = var14;
            var4 = var1.wrapChildren;
            var3 = undefined;
            if(!(var4 === var3)) { _fun0004_ip = 54; continue _fun0004 }
 47:
            var4 = _closure1_slot7;
 54:
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
 0:
                    var2 = _closure2_slot4;
                    var3 = var2.current;
                    var2 = -1;
                    if(!(var2 !== var3)) { _fun0005_ip = 46; continue _fun0005 }
 22:
                    var2 = global;
                    var3 = var2.clearTimeout;
                    var1 = _closure2_slot4;
                    var2 = var1.current;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
 46:
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
 0:
                    var1 = global;
                    var4 = var1.Set;
                    var2 = _closure2_slot6;
                    var5 = var2.current;
                    var7 = null;
                    var3 = var7 == var5;
                    var6 = undefined;
                    var2 = undefined;
                    if(var3) { _fun0006_ip = 44; continue _fun0006 }
 35:
                    var3 = var5.keys;
                    var2 = var3.bind(var5)();
 44:
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
 0:
                            var6 = _closure2_slot2;
                            var4 = _closure3_slot2;
                            var1 = undefined;
                            var4 = var6.bind(var1)(var4);
                            var _closure4_slot0 = var4;
                            var7 = _closure3_slot1;
                            var6 = var7.get;
                            var7 = var6.bind(var7)(var4);
                            var8 = null;
                            if(!(var8 != var7)) { _fun0007_ip = 209; continue _fun0007 }
 50:
                            var9 = var7.item;
                            var6 = _closure3_slot2;
                            if(!(var9 === var6)) { _fun0007_ip = 105; continue _fun0007 }
 63:
                            var9 = var7.renderItem;
                            var6 = _closure2_slot1;
                            if(!(var9 === var6)) { _fun0007_ip = 105; continue _fun0007 }
 77:
                            var10 = var7.state;
                            var6 = _closure1_slot3;
                            var9 = var6.YEETED;
                            var6 = var7;
                            if(!(var10 === var9)) { _fun0007_ip = 309; continue _fun0007 }
 105:
                            var10 = var7.cleanUp;
                            var12 = var7.state;
                            var11 = _closure1_slot3;
                            var11 = var11.YEETED;
                            if(!(var12 !== var11)) { _fun0007_ip = 140; continue _fun0007 }
 133:
                            var11 = var7.state;
                            _fun0007_ip = 150; continue _fun0007;
 140:
                            var9 = _closure1_slot3;
                            var11 = var9.ENTERED;
 150:
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
                            _fun0007_ip = 309; continue _fun0007;
 209:
                            var7 = _closure2_slot6;
                            var7 = var7.current;
                            if(!(var8 == var7)) { _fun0007_ip = 237; continue _fun0007 }
 222:
                            var7 = _closure1_slot3;
                            var8 = var7.MOUNTED;
                            _fun0007_ip = 250; continue _fun0007;
 237:
                            var7 = _closure1_slot3;
                            var8 = var7.ENTERED;
 250:
                            var7 = function _cleanUp() {
                                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                                    var1 = _closure2_slot6;
                                    var7 = var1.current;
                                    var4 = null;
                                    var5 = var4 == var7;
                                    var1 = undefined;
                                    var3 = undefined;
                                    if(var5) { _fun0008_ip = 42; continue _fun0008 }
 25:
                                    var6 = var7.get;
                                    var5 = _closure4_slot0;
                                    var3 = var6.bind(var7)(var5);
 42:
                                    if(!(var4 != var3)) { _fun0008_ip = 177; continue _fun0008 }
 49:
                                    var5 = var3.state;
                                    var3 = _closure1_slot3;
                                    var3 = var3.YEETED;
                                    if(!(var5 === var3)) { _fun0008_ip = 177; continue _fun0008 }
 71:
                                    var3 = _closure2_slot6;
                                    var6 = var3.current;
                                    if(!(var4 != var6)) { _fun0008_ip = 101; continue _fun0008 }
 84:
                                    var5 = var6.delete;
                                    var3 = _closure4_slot0;
                                    var3 = var5.bind(var6)(var3);
 101:
                                    var3 = _closure2_slot3;
                                    if(!(var4 == var3)) { _fun0008_ip = 122; continue _fun0008 }
 109:
                                    var4 = _closure2_slot5;
                                    var3 = {};
                                    var3 = var4.bind(var1)(var3);
                                    _fun0008_ip = 177; continue _fun0008;
 122:
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
 177:
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
 309:
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
                    if(var2) { _fun0006_ip = 171; continue _fun0006 }
 143:
                    var2 = var4.value;
                    var _closure3_slot2 = var2;
                    var2 = var10.bind(var6)();
                    var12 = var9.bind(var6)();
                    var2 = var12.done;
                    var4 = var12;
                    if(!var2) { _fun0006_ip = 143; continue _fun0006 }
 171:
                    var2 = _closure1_slot5;
                    var4 = var2.bind(var6)(var3);
                    var3 = var4.bind(var6)();
                    var2 = var3.done;
                    if(var2) { _fun0006_ip = 392; continue _fun0006 }
 195:
                    var10 = var3.value;
                    var2 = var1.get;
                    var12 = var2.bind(var1)(var10);
                    if(!(var7 != var12)) { _fun0006_ip = 374; continue _fun0006 }
 217:
                    var9 = var12.state;
                    var2 = _closure1_slot3;
                    var2 = var2.YEETED;
                    if(!(var9 === var2)) { _fun0006_ip = 263; continue _fun0006 }
 236:
                    var9 = var12.renderItem;
                    var2 = _closure2_slot1;
                    if(!(var9 === var2)) { _fun0006_ip = 263; continue _fun0006 }
 250:
                    var2 = var1.set;
                    var2 = var2.bind(var1)(var10, var12);
                    _fun0006_ip = 374; continue _fun0006;
 263:
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
                    if(!(var7 == var2)) { _fun0006_ip = 363; continue _fun0006 }
 351:
                    var2 = var1.delete;
                    var2 = var2.bind(var1)(var10);
                    _fun0006_ip = 374; continue _fun0006;
 363:
                    var2 = var1.set;
                    var2 = var2.bind(var1)(var10, var9);
 374:
                    var9 = var4.bind(var6)();
                    var2 = var9.done;
                    var3 = var9;
                    if(!var2) { _fun0006_ip = 195; continue _fun0006 }
 392:
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
 0:
                        var1 = _closure2_slot6;
                        var3 = var1.current;
                        var1 = null;
                        var2 = var1 == var3;
                        var1 = undefined;
                        if(var2) { _fun0009_ip = 33; continue _fun0009 }
 23:
                        var2 = var3.clear;
                        var1 = var2.bind(var3)();
 33:
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
            if(var6) { _fun0004_ip = 341; continue _fun0004 }
 292:
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
            if(!var6) { _fun0004_ip = 292; continue _fun0004 }
 341:
            var7 = var2.length;
            var6 = 0;
            var6 = var7 > var6;
            var1 = null;
            if(!var6) { _fun0004_ip = 363; continue _fun0004 }
 357:
            var1 = var4.bind(var3)(var2, var5);
 363:
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
 0:
                var3 = _closure2_slot0;
                var1 = null;
                if(!(var1 == var3)) { _fun0010_ip = 19; continue _fun0010 }
 13:
                var1 = new Array(0);
                _fun0010_ip = 34; continue _fun0010;
 19:
                var3 = _closure2_slot0;
                var2 = new Array(1);
                var2[0] = var3;
                var1 = var2;
 34:
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
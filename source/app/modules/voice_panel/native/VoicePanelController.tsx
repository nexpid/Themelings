// app/modules/voice_panel/native/VoicePanelController.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
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
            var9 = _closure1_slot45;
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
            var7 = _closure1_slot45;
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
    var _closure1_slot44 = var1;
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
    var _closure1_slot45 = var1;
    var1 = function useLayoutManagerState(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var9 = var1.windowDimensions;
            var _closure2_slot0 = var9;
            var11 = var1.safeArea;
            var _closure2_slot1 = var11;
            var15 = var1.contentDimensions;
            var _closure2_slot2 = var15;
            var4 = var1.isConnected;
            var _closure2_slot3 = var4;
            var12 = var1.layoutManager;
            var _closure2_slot4 = var12;
            var7 = var1.items;
            var14 = var1.pushToTalk;
            var1 = undefined;
            var _closure2_slot13 = var1;
            var8 = _closure1_slot4;
            var6 = var8.useState;
            var5 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 31;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.getWindowDimensions;
                var1 = var1.bind(var2)();
                var3 = var1.width;
                var2 = var1.height;
                var1 = {};
                var1['width'] = var3;
                var1['height'] = var2;
                var2 = var3 > var2;
                var1['landscape'] = var2;
                return var1;
            };
            var6 = var6.bind(var8)(var5);
            var5 = _closure1_slot3;
            var19 = 2;
            var5 = var5.bind(var1)(var6, var19);
            var10 = 0;
            var8 = var5[var10];
            var _closure2_slot5 = var8;
            var6 = 1;
            var16 = var5[var6];
            var _closure2_slot6 = var16;
            var20 = _closure1_slot4;
            var18 = var20.useState;
            var13 = _closure1_slot0;
            var17 = _closure1_slot2;
            var5 = 32;
            var5 = var17[var5];
            var21 = var13.bind(var1)(var5);
            var5 = var21.getSafeAreaInsets;
            var5 = var5.bind(var21)();
            var18 = var18.bind(var20)(var5);
            var5 = _closure1_slot3;
            var5 = var5.bind(var1)(var18, var19);
            var10 = var5[var10];
            var _closure2_slot7 = var10;
            var5 = var5[var6];
            var _closure2_slot8 = var5;
            var6 = 34;
            var6 = var17[var6];
            var13 = var13.bind(var1)(var6);
            var6 = var13.useManagerSubscription;
            var13 = var6.bind(var13)(var12);
            var _closure2_slot9 = var13;
            var18 = _closure1_slot4;
            var17 = var18.useRef;
            var6 = {};
            var19 = -1;
            var6['timeout'] = var19;
            var6['layoutKey'] = var13;
            var6['connected'] = var4;
            var6['windowState'] = var8;
            var6['safeAreaState'] = var10;
            var19 = {'width': 0, 'height': 0};
            var6['contentDimensions'] = var19;
            var17 = var17.bind(var18)(var6);
            var _closure2_slot10 = var17;
            var6 = {};
            var6['isConnected'] = var4;
            var6['updateRefs'] = var17;
            var6['windowState'] = var8;
            var6['safeAreaState'] = var10;
            var6['setWindowState'] = var16;
            var6['setSafeAreaState'] = var5;
            var5 = function useUpdateLayoutManagerState(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = arg1;
                    var4 = var3.isConnected;
                    var2 = var3.updateRefs;
                    var _closure3_slot0 = var2;
                    var11 = var3.windowState;
                    var10 = var3.safeAreaState;
                    var5 = var3.setWindowState;
                    var3 = var3.setSafeAreaState;
                    var6 = var2.current;
                    var6 = var6.connected;
                    var6 = var4 === var6;
                    if(!var6) { _fun0005_ip = 111; continue _fun0005 }
 63:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var7 = 22;
                    var8 = var8[var7];
                    var7 = undefined;
                    var9 = var9.bind(var7)(var8);
                    var8 = var9.cheapWorkletShallowEqual;
                    var7 = var2.current;
                    var7 = var7.windowState;
                    var6 = var8.bind(var9)(var7, var11);
 111:
                    if(!var6) { _fun0005_ip = 162; continue _fun0005 }
 114:
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var7 = 22;
                    var8 = var8[var7];
                    var7 = undefined;
                    var9 = var9.bind(var7)(var8);
                    var8 = var9.cheapWorkletShallowEqual;
                    var7 = var2.current;
                    var7 = var7.safeAreaState;
                    var6 = var8.bind(var9)(var7, var10);
 162:
                    if(var6) { _fun0005_ip = 202; continue _fun0005 }
 165:
                    var2 = var2.current;
                    var2['connected'] = var4;
                    var2 = undefined;
                    var4 = function(arg1) {
                        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                            var1 = arg1;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 31;
                            var2 = var7[var2];
                            var5 = undefined;
                            var3 = var6.bind(var5)(var2);
                            var2 = var3.getWindowDimensions;
                            var2 = var2.bind(var3)();
                            var10 = var2.width;
                            var9 = var2.height;
                            var3 = _closure3_slot0;
                            var8 = var3.current;
                            var4 = {};
                            var4['width'] = var10;
                            var4['height'] = var9;
                            var9 = var10 > var9;
                            var4['landscape'] = var9;
                            var8['windowState'] = var4;
                            var4 = 22;
                            var4 = var7[var4];
                            var5 = var6.bind(var5)(var4);
                            var4 = var5.cheapWorkletShallowEqual;
                            var3 = var3.current;
                            var3 = var3.windowState;
                            var3 = var4.bind(var5)(var1, var3);
                            if(var3) { _fun0006_ip = 138; continue _fun0006 }
 123:
                            var2 = _closure3_slot0;
                            var2 = var2.current;
                            var1 = var2.windowState;
 138:
                            return var1;
                        }
                    };
                    var4 = var5.bind(var2)(var4);
                    var1 = function(arg1) {
                        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                            var1 = arg1;
                            var3 = _closure3_slot0;
                            var8 = var3.current;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 32;
                            var4 = var7[var4];
                            var5 = undefined;
                            var9 = var6.bind(var5)(var4);
                            var4 = var9.getSafeAreaInsets;
                            var4 = var4.bind(var9)();
                            var8['safeAreaState'] = var4;
                            var4 = 22;
                            var4 = var7[var4];
                            var5 = var6.bind(var5)(var4);
                            var4 = var5.cheapWorkletShallowEqual;
                            var3 = var3.current;
                            var3 = var3.safeAreaState;
                            var3 = var4.bind(var5)(var1, var3);
                            if(var3) { _fun0007_ip = 109; continue _fun0007 }
 94:
                            var2 = _closure3_slot0;
                            var2 = var2.current;
                            var1 = var2.safeAreaState;
 109:
                            return var1;
                        }
                    };
                    var1 = var3.bind(var2)(var1);
 202:
                    var1 = undefined;
                    return var1;
                }
            };
            var5 = var5.bind(var1)(var6);
            var17 = _closure1_slot4;
            var16 = var17.useCallback;
            var6 = function() {
                var2 = global;
                var5 = var2.clearTimeout;
                var3 = _closure2_slot10;
                var1 = var3.current;
                var4 = var1.timeout;
                var1 = undefined;
                var4 = var5.bind(var1)(var4);
                var3 = var3.current;
                var5 = var2.setTimeout;
                var4 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var1 = _closure2_slot10;
                    var1 = var1.current;
                    var2 = var1.timeout;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 41;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.batchUpdates;
                    var2 = function() {
                        var5 = _closure2_slot6;
                        var1 = undefined;
                        var4 = function(arg1) {
                            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                                var1 = arg1;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 22;
                                var3 = var3[var2];
                                var2 = undefined;
                                var5 = var4.bind(var2)(var3);
                                var4 = var5.cheapWorkletShallowEqual;
                                var3 = _closure2_slot10;
                                var3 = var3.current;
                                var3 = var3.windowState;
                                var3 = var4.bind(var5)(var3, var1);
                                if(var3) { _fun0008_ip = 76; continue _fun0008 }
 61:
                                var2 = _closure2_slot10;
                                var2 = var2.current;
                                var1 = var2.windowState;
 76:
                                return var1;
                            }
                        };
                        var4 = var5.bind(var1)(var4);
                        var3 = _closure2_slot8;
                        var2 = function(arg1) {
                            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                                var1 = arg1;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 22;
                                var3 = var3[var2];
                                var2 = undefined;
                                var5 = var4.bind(var2)(var3);
                                var4 = var5.cheapWorkletShallowEqual;
                                var3 = _closure2_slot10;
                                var3 = var3.current;
                                var3 = var3.safeAreaState;
                                var3 = var4.bind(var5)(var3, var1);
                                if(var3) { _fun0009_ip = 76; continue _fun0009 }
 61:
                                var2 = _closure2_slot10;
                                var2 = var2.current;
                                var1 = var2.safeAreaState;
 76:
                                return var1;
                            }
                        };
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                };
                var2 = 60;
                var2 = var5.bind(var1)(var4, var2);
                var3['timeout'] = var2;
                return var1;
            };
            var5 = new Array(0);
            var5 = var16.bind(var17)(var6, var5);
            var _closure2_slot11 = var5;
            var18 = _closure1_slot4;
            var17 = var18.useLayoutEffect;
            var16 = new Array(1);
            var16[0] = var5;
            var6 = function() {
                var4 = function updateSafeAreas(arg1) {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                        var5 = arg1;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 22;
                        var2 = var2[var1];
                        var1 = undefined;
                        var6 = var3.bind(var1)(var2);
                        var4 = var6.cheapWorkletShallowEqual;
                        var3 = _closure2_slot10;
                        var3 = var3.current;
                        var3 = var3.safeAreaState;
                        var3 = var4.bind(var6)(var3, var5);
                        if(var3) { _fun0010_ip = 96; continue _fun0010 }
 61:
                        var3 = _closure2_slot10;
                        var4 = var3.current;
                        var3 = {};
                        var8 = var3;
                        var7 = var5;
                        var5 = copyDataProperties(var8, var7);
                        var4['safeAreaState'] = var3;
                        var2 = _closure2_slot11;
                        var2 = var2.bind(var1)();
 96:
                        return var1;
                    }
                };
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 42;
                var7 = var6[var3];
                var3 = undefined;
                var7 = var5.bind(var3)(var7);
                var7 = var7.bind(var3)(var4);
                var _closure3_slot0 = var7;
                var7 = _closure1_slot0;
                var2 = 32;
                var2 = var6[var2];
                var7 = var7.bind(var3)(var2);
                var2 = var7.getSafeAreaInsets;
                var2 = var2.bind(var7)();
                var2 = var4.bind(var3)(var2);
                var2 = function updateWindowDimensions() {
                    _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                        var2 = arguments[0];
                        var1 = undefined;
                        if(!(var2 === var1)) { _fun0011_ip = 42; continue _fun0011 }
 9:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 31;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.getWindowDimensions;
                        var2 = var3.bind(var4)();
 42:
                        var3 = var2.width;
                        var2 = var2.height;
                        var4 = {};
                        var4['width'] = var3;
                        var4['height'] = var2;
                        var2 = var3 > var2;
                        var4['landscape'] = var2;
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var2 = 22;
                        var2 = var5[var2];
                        var6 = var3.bind(var1)(var2);
                        var5 = var6.cheapWorkletShallowEqual;
                        var3 = _closure2_slot10;
                        var3 = var3.current;
                        var3 = var3.windowState;
                        var3 = var5.bind(var6)(var3, var4);
                        if(var3) { _fun0011_ip = 150; continue _fun0011 }
 127:
                        var3 = _closure2_slot10;
                        var3 = var3.current;
                        var3['windowState'] = var4;
                        var2 = _closure2_slot11;
                        var2 = var2.bind(var1)();
 150:
                        return var1;
                    }
                };
                var4 = 43;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                var4 = var4.bind(var3)(var2);
                var _closure3_slot1 = var4;
                var2 = var2.bind(var3)();
                var1 = function() {
                    var3 = _closure3_slot0;
                    var1 = undefined;
                    var3 = var3.bind(var1)();
                    var2 = _closure3_slot1;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                return var1;
            };
            var6 = var17.bind(var18)(var6, var16);
            var16 = _closure1_slot4;
            var6 = var16.useId;
            var6 = var6.bind(var16)();
            var _closure2_slot12 = var6;
            var18 = _closure1_slot4;
            var17 = var18.useLayoutEffect;
            var16 = new Array(2);
            var16[0] = var4;
            var16[1] = var6;
            var6 = function() {
                _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                    var1 = _closure2_slot3;
                    if(var1) { _fun0012_ip = 14; continue _fun0012 }
 10:
                    var1 = undefined;
                    return var1;
 14:
                    var2 = _closure1_slot9;
                    var1 = var2.getState;
                    var3 = var1.bind(var2)();
                    var2 = var3.requestSafeAreaDisableLock;
                    var1 = {};
                    var4 = _closure2_slot12;
                    var1['key'] = var4;
                    var4 = true;
                    var1['lockEnabled'] = var4;
                    var1 = var2.bind(var3)(var1);
                    var1 = function() {
                        var2 = _closure1_slot9;
                        var1 = var2.getState;
                        var3 = var1.bind(var2)();
                        var2 = var3.requestSafeAreaDisableLock;
                        var1 = {};
                        var4 = _closure2_slot12;
                        var1['key'] = var4;
                        var4 = false;
                        var1['lockEnabled'] = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    return var1;
                }
            };
            var6 = var17.bind(var18)(var6, var16);
            var17 = _closure1_slot4;
            var16 = var17.useLayoutEffect;
            var6 = new Array(1);
            var6[0] = var5;
            var5 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 31;
                    var2 = var5[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var2 = var4.getWindowDimensions;
                    var2 = var2.bind(var4)();
                    var6 = var2.width;
                    var2 = var2.height;
                    var4 = {};
                    var4['width'] = var6;
                    var4['height'] = var2;
                    var2 = var6 > var2;
                    var4['landscape'] = var2;
                    var2 = 22;
                    var2 = var5[var2];
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.cheapWorkletShallowEqual;
                    var3 = _closure2_slot10;
                    var3 = var3.current;
                    var3 = var3.windowState;
                    var3 = var5.bind(var6)(var3, var4);
                    if(var3) { _fun0013_ip = 132; continue _fun0013 }
 109:
                    var3 = _closure2_slot10;
                    var3 = var3.current;
                    var3['windowState'] = var4;
                    var2 = _closure2_slot11;
                    var2 = var2.bind(var1)();
 132:
                    return var1;
                }
            };
            var5 = var16.bind(var17)(var5, var6);
            var6 = var12.updateState;
            var5 = {};
            var16 = var8.width;
            var5['windowWidth'] = var16;
            var16 = var8.height;
            var5['windowHeight'] = var16;
            var16 = var10.left;
            var5['safeAreaLeft'] = var16;
            var16 = var10.right;
            var5['safeAreaRight'] = var16;
            var16 = var10.top;
            var5['safeAreaTop'] = var16;
            var16 = var10.bottom;
            var5['safeAreaBottom'] = var16;
            if(var14) { _fun0004_ip = 560; continue _fun0004 }
 554:
            var14 = _closure1_slot17;
            _fun0004_ip = 564; continue _fun0004;
 560:
            var14 = _closure1_slot18;
 564:
            var5['controlBarSize'] = var14;
            var5 = var6.bind(var12)(var7, var5);
            var5 = var12.getContentDimensions;
            var14 = var5.bind(var12)();
            _closure2_slot13 = var14;
            var7 = _closure1_slot4;
            var6 = var7.useLayoutEffect;
            var5 = new Array(9);
            var5[0] = var15;
            var5[1] = var14;
            var5[2] = var13;
            var5[3] = var12;
            var5[4] = var11;
            var5[5] = var10;
            var5[6] = var9;
            var5[7] = var8;
            var5[8] = var4;
            var4 = function() {
                var1 = _closure2_slot10;
                var3 = var1.current;
                var1 = _closure2_slot9;
                var3['layoutKey'] = var1;
                var8 = function executeLayoutManagerEffect() {
                    var2 = _closure2_slot4;
                    var1 = var2.handleLayoutEffect;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                var _closure3_slot0 = var8;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var9 = 21;
                var3 = var11[var9];
                var1 = undefined;
                var5 = var10.bind(var1)(var3);
                var3 = var5.runOnUI;
                var2 = function e(arg1) {
                    _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                        var1 = arg1;
                        var8 = var1.windowState;
                        var5 = var1.safeAreaState;
                        var4 = var1.contentState;
                        var1 = _closure2_slot3;
                        if(!var1) { _fun0014_ip = 84; continue _fun0014 }
 31:
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 22;
                        var6 = var6[var2];
                        var2 = undefined;
                        var7 = var7.bind(var2)(var6);
                        var6 = var7.cheapWorkletShallowEqual;
                        var9 = _closure2_slot2;
                        var2 = var9.get;
                        var2 = var2.bind(var9)();
                        var2 = var6.bind(var7)(var2, var4);
                        var1 = !var2;
 84:
                        if(!var1) { _fun0014_ip = 101; continue _fun0014 }
 87:
                        var2 = _closure2_slot2;
                        var1 = var2.set;
                        var1 = var1.bind(var2)(var4);
 101:
                        var6 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var7 = 22;
                        var4 = var1[var7];
                        var1 = undefined;
                        var9 = var6.bind(var1)(var4);
                        var6 = var9.cheapWorkletShallowEqual;
                        var10 = _closure2_slot0;
                        var4 = var10.get;
                        var4 = var4.bind(var10)();
                        var4 = var6.bind(var9)(var4, var8);
                        if(var4) { _fun0014_ip = 168; continue _fun0014 }
 154:
                        var6 = _closure2_slot0;
                        var4 = var6.set;
                        var4 = var4.bind(var6)(var8);
 168:
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var7];
                        var7 = var6.bind(var1)(var4);
                        var6 = var7.cheapWorkletShallowEqual;
                        var8 = _closure2_slot1;
                        var4 = var8.get;
                        var4 = var4.bind(var8)();
                        var4 = var6.bind(var7)(var4, var5);
                        if(var4) { _fun0014_ip = 227; continue _fun0014 }
 213:
                        var4 = _closure2_slot1;
                        var3 = var4.set;
                        var3 = var3.bind(var4)(var5);
 227:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 21;
                        var2 = var4[var2];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.runOnJS;
                        var2 = _closure3_slot0;
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.bind(var1)();
                        return var1;
                    }
                };
                var7 = {};
                var12 = _closure2_slot3;
                var7['isConnected'] = var12;
                var12 = 22;
                var12 = var11[var12];
                var12 = var10.bind(var1)(var12);
                var12 = var12.cheapWorkletShallowEqual;
                var7['cheapWorkletShallowEqual'] = var12;
                var12 = _closure2_slot2;
                var7['contentDimensions'] = var12;
                var12 = _closure2_slot0;
                var7['windowDimensions'] = var12;
                var12 = _closure2_slot1;
                var7['safeArea'] = var12;
                var9 = var11[var9];
                var9 = var10.bind(var1)(var9);
                var9 = var9.runOnJS;
                var7['runOnJS'] = var9;
                var7['executeLayoutManagerEffect'] = var8;
                var2['__closure'] = var7;
                var7 = 13791383688018.0;
                var2['__workletHash'] = var7;
                var6 = _closure1_slot39;
                var2['__initData'] = var6;
                var3 = var3.bind(var5)(var2);
                var2 = {};
                var5 = _closure2_slot5;
                var2['windowState'] = var5;
                var5 = _closure2_slot7;
                var2['safeAreaState'] = var5;
                var4 = _closure2_slot13;
                var2['contentState'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var4 = var6.bind(var7)(var4, var5);
            var5 = _closure1_slot4;
            var4 = var5.useLayoutEffect;
            var3 = function() {
                var1 = function() {
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var1 = _closure2_slot10;
                    var1 = var1.current;
                    var2 = var1.timeout;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    return var1;
                };
                return var1;
            };
            var2 = new Array(0);
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var _closure1_slot46 = var1;
    var1 = function useActivityOrientationState(arg1) {
        var1 = arg1;
        var12 = var1.isConnected;
        var _closure2_slot0 = var12;
        var11 = var1.selectedMode;
        var _closure2_slot1 = var11;
        var9 = var1.manualFocusedItem;
        var _closure2_slot2 = var9;
        var8 = var1.isNonVoiceEmbeddedActivityInPanelMode;
        var _closure2_slot3 = var8;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var1 = 29;
        var4 = var4[var1];
        var1 = undefined;
        var7 = var5.bind(var1)(var4);
        var6 = var7.useStateFromStoresObject;
        var4 = _closure1_slot6;
        var5 = new Array(1);
        var5[0] = var4;
        var4 = function() {
            _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
                var2 = _closure1_slot6;
                var1 = var2.getCurrentEmbeddedActivity;
                var5 = var1.bind(var2)();
                var4 = null;
                var1 = var4 == var5;
                var6 = undefined;
                if(var1) { _fun0015_ip = 33; continue _fun0015 }
 28:
                var6 = var5.applicationId;
 33:
                var1 = {};
                var1['applicationId'] = var6;
                var7 = var4 == var5;
                var2 = undefined;
                if(var7) { _fun0015_ip = 54; continue _fun0015 }
 48:
                var2 = var5.compositeInstanceId;
 54:
                var1['instanceId'] = var2;
                if(!(var4 != var6)) { _fun0015_ip = 82; continue _fun0015 }
 63:
                var5 = _closure1_slot6;
                var2 = var5.getOrientationLockStateForApp;
                var2 = var2.bind(var5)(var6);
                if(!(var4 == var2)) { _fun0015_ip = 92; continue _fun0015 }
 82:
                var3 = _closure1_slot24;
                var2 = var3.UNLOCKED;
 92:
                var1['activityOrientationLockState'] = var2;
                return var1;
            }
        };
        var4 = var6.bind(var7)(var5, var4);
        var13 = var4.applicationId;
        var _closure2_slot4 = var13;
        var10 = var4.activityOrientationLockState;
        var _closure2_slot5 = var10;
        var4 = var4.instanceId;
        var _closure2_slot6 = var4;
        var7 = _closure1_slot4;
        var6 = var7.useLayoutEffect;
        var5 = new Array(7);
        var5[0] = var13;
        var5[1] = var12;
        var5[2] = var11;
        var5[3] = var10;
        var5[4] = var9;
        var5[5] = var8;
        var5[6] = var4;
        var4 = function() {
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
                var1 = _closure2_slot3;
                if(var1) { _fun0016_ip = 406; continue _fun0016 }
 13:
                var4 = _closure2_slot1;
                var3 = _closure1_slot15;
                var3 = var3.PANEL;
                if(!(var4 === var3)) { _fun0016_ip = 41; continue _fun0016 }
 34:
                var3 = _closure2_slot0;
                if(var3) { _fun0016_ip = 78; continue _fun0016 }
 41:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 36;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var3 = var4.restoreDefaultOrientation;
                var3 = var3.bind(var4)();
                _fun0016_ip = 406; continue _fun0016;
 78:
                var4 = _closure2_slot4;
                var3 = null;
                if(!(var3 != var4)) { _fun0016_ip = 364; continue _fun0016 }
 91:
                var5 = _closure2_slot2;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 44;
                var3 = var4[var3];
                var4 = undefined;
                var7 = var6.bind(var4)(var3);
                var6 = var7.getEmbeddedActivityParticipantId;
                var3 = {};
                var8 = _closure2_slot4;
                var3['applicationId'] = var8;
                var8 = _closure2_slot6;
                var3['instanceId'] = var8;
                var3 = var6.bind(var7)(var3);
                if(!(var5 === var3)) { _fun0016_ip = 364; continue _fun0016 }
 154:
                var3 = _closure2_slot5;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 35;
                var2 = var6[var2];
                var5 = var5.bind(var4)(var2);
                var2 = var5.isIpadOS;
                var2 = var2.bind(var5)();
                if(var2) { _fun0016_ip = 406; continue _fun0016 }
 194:
                var2 = _closure1_slot24;
                var2 = var2.UNLOCKED;
                if(!(var2 !== var3)) { _fun0016_ip = 322; continue _fun0016 }
 208:
                var2 = _closure1_slot24;
                var2 = var2.PORTRAIT;
                if(!(var2 !== var3)) { _fun0016_ip = 282; continue _fun0016 }
 222:
                var2 = _closure1_slot24;
                var2 = var2.LANDSCAPE;
                if(!(var2 === var3)) { _fun0016_ip = 406; continue _fun0016 }
 239:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 36;
                var2 = var5[var2];
                var6 = var3.bind(var4)(var2);
                var5 = var6.lockOrientation;
                var3 = 'LANDSCAPE';
                var2 = true;
                var2 = var5.bind(var6)(var3, var2);
                _fun0016_ip = 406; continue _fun0016;
 282:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 36;
                var2 = var5[var2];
                var6 = var3.bind(var4)(var2);
                var5 = var6.lockOrientation;
                var3 = 'PORTRAIT';
                var2 = true;
                var2 = var5.bind(var6)(var3, var2);
                _fun0016_ip = 406; continue _fun0016;
 322:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 36;
                var2 = var5[var2];
                var4 = var3.bind(var4)(var2);
                var3 = var4.unlockOrientation;
                var2 = {};
                var5 = true;
                var2['unlockAfterRotatingToPreviousLock'] = var5;
                var2 = var3.bind(var4)(var2);
                _fun0016_ip = 406; continue _fun0016;
 364:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 36;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.unlockOrientation;
                var1 = {};
                var4 = false;
                var1['unlockAfterRotatingToPreviousLock'] = var4;
                var1 = var2.bind(var3)(var1);
 406:
                var1 = undefined;
                return var1;
            }
        };
        var4 = var6.bind(var7)(var4, var5);
        var5 = _closure1_slot4;
        var4 = var5.useLayoutEffect;
        var3 = function() {
            var1 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 36;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.restoreDefaultOrientation;
                var1 = var1.bind(var2)();
                return var1;
            };
            return var1;
        };
        var2 = new Array(0);
        var2 = var4.bind(var5)(var3, var2);
        return var1;
    };
    var _closure1_slot47 = var1;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot14 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.VoicePanelModes;
    var _closure1_slot15 = var7;
    var4 = var4.getAnalyticsNameForVoicePanelMode;
    var _closure1_slot16 = var4;
    var4 = 13;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.CONTROLS_HEIGHT;
    var _closure1_slot17 = var7;
    var7 = var4.CONTROLS_HEIGHT_PTT;
    var _closure1_slot18 = var7;
    var7 = var4.CONTROLS_HIDE_TIMEOUT;
    var _closure1_slot19 = var7;
    var4 = var4.VoicePanelControlsModes;
    var _closure1_slot20 = var4;
    var4 = 14;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot21 = var7;
    var7 = var4.ComponentActions;
    var _closure1_slot22 = var7;
    var4 = var4.InputModes;
    var _closure1_slot23 = var4;
    var4 = 15;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.OrientationLockState;
    var _closure1_slot24 = var4;
    var4 = 16;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.ActivityPanelModes;
    var _closure1_slot25 = var4;
    var4 = 17;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isActivityParticipant;
    var _closure1_slot26 = var4;
    var4 = 18;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MorphablePanelModes;
    var _closure1_slot27 = var4;
    var4 = 19;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot28 = var4;
    var4 = {};
    var7 = 'function VoicePanelControllerTsx1(){const{focused,mode,connected}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,mode.get(),connected.get()];}';
    var4['code'] = var7;
    var _closure1_slot29 = var4;
    var4 = {};
    var7 = 'function VoicePanelControllerTsx2(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleAnimatedReaction}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedParticipantId,voicePanelMode,connectedValue]=props;runOnJS(handleAnimatedReaction)({focusedParticipantId:focusedParticipantId,voicePanelMode:voicePanelMode,connectedValue:connectedValue});}';
    var4['code'] = var7;
    var _closure1_slot30 = var4;
    var4 = {};
    var7 = 'function VoicePanelControllerTsx3(){const{focused,pipState}=this.__closure;var _focused$get;return[(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id,pipState.id];}';
    var4['code'] = var7;
    var _closure1_slot31 = var4;
    var4 = {};
    var7 = 'function VoicePanelControllerTsx4(props,previous){const{cheapWorkletArrayShallowEqual,runOnJS,handleStateUpdates}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[focusedId,pipParticipantId]=props;runOnJS(handleStateUpdates)({focusedId:focusedId,pipParticipantId:pipParticipantId});}';
    var4['code'] = var7;
    var _closure1_slot32 = var4;
    var4 = {};
    var7 = 'function VoicePanelControllerTsx5(value){const{isFocusedVideoZoomed}=this.__closure;isFocusedVideoZoomed.set(value);}';
    var4['code'] = var7;
    var _closure1_slot33 = var4;
    var4 = {};
    var7 = 'function VoicePanelControllerTsx6(){const{mode,VoicePanelModes,MorphablePanelModes}=this.__closure;switch(mode.get()){case VoicePanelModes.PANEL:{return MorphablePanelModes.PANEL;}case VoicePanelModes.PIP:{return MorphablePanelModes.PIP;}default:{return MorphablePanelModes.UNDEFINED;}}}';
    var4['code'] = var7;
    var _closure1_slot34 = var4;
    var4 = {};
    var7 = 'function VoicePanelControllerTsx7(){const{mode}=this.__closure;return mode.get();}';
    var4['code'] = var7;
    var _closure1_slot35 = var4;
    var4 = {};
    var7 = 'function VoicePanelControllerTsx8(value){const{VoicePanelModes,runOnJS,_queueHideControls,_clearHideControlsQueue}=this.__closure;if(value===VoicePanelModes.PANEL){runOnJS(_queueHideControls)();}else{runOnJS(_clearHideControlsQueue)();}}';
    var4['code'] = var7;
    var _closure1_slot36 = var4;
    var4 = {};
    var7 = 'function VoicePanelControllerTsx9(){const{connected}=this.__closure;return connected.get();}';
    var4['code'] = var7;
    var _closure1_slot37 = var4;
    var4 = {};
    var7 = 'function VoicePanelControllerTsx10(connected){const{updateSharedValueIfChanged,controlsSpecs,pushToTalk,CONTROLS_HEIGHT_PTT,CONTROLS_HEIGHT}=this.__closure;updateSharedValueIfChanged(controlsSpecs,{height:pushToTalk&&connected?CONTROLS_HEIGHT_PTT:CONTROLS_HEIGHT,pushToTalk:pushToTalk});}';
    var4['code'] = var7;
    var _closure1_slot38 = var4;
    var4 = {};
    var7 = 'function VoicePanelControllerTsx11({windowState:windowState,safeAreaState:safeAreaState,contentState:contentState}){const{isConnected,cheapWorkletShallowEqual,contentDimensions,windowDimensions,safeArea,runOnJS,executeLayoutManagerEffect}=this.__closure;if(isConnected&&!cheapWorkletShallowEqual(contentDimensions.get(),contentState)){contentDimensions.set(contentState);}if(!cheapWorkletShallowEqual(windowDimensions.get(),windowState)){windowDimensions.set(windowState);}if(!cheapWorkletShallowEqual(safeArea.get(),safeAreaState)){safeArea.set(safeAreaState);}runOnJS(executeLayoutManagerEffect)();}';
    var4['code'] = var7;
    var _closure1_slot39 = var4;
    var4 = {};
    var7 = 'function VoicePanelControllerTsx12(){const{connected,mode,sharedTransitionState}=this.__closure;return[connected.get(),mode.get(),sharedTransitionState.get()];}';
    var4['code'] = var7;
    var _closure1_slot40 = var4;
    var4 = {};
    var7 = 'function VoicePanelControllerTsx13(props,previous){const{cheapWorkletArrayShallowEqual,TransitionStates,VoicePanelModes,runOnJS,setMode}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[isConnected,currentMode,currentTransitionState]=props;if(currentTransitionState===TransitionStates.YEETED){if(currentMode!==VoicePanelModes.DISMISSED){runOnJS(setMode)(VoicePanelModes.DISMISSED);}}else if(currentMode===VoicePanelModes.DISMISSED){var _previous$;let previousMode=(_previous$=previous===null||previous===void 0?void 0:previous[1])!==null&&_previous$!==void 0?_previous$:VoicePanelModes.PANEL;switch(previousMode){case VoicePanelModes.PANEL:case VoicePanelModes.PIP:if(!isConnected){previousMode=VoicePanelModes.PANEL;}break;default:previousMode=VoicePanelModes.PANEL;}runOnJS(setMode)(previousMode);}else if(!isConnected&&(previous===null||previous===void 0?void 0:previous[0])===true&&currentMode===VoicePanelModes.PIP){runOnJS(setMode)(VoicePanelModes.PANEL);}}';
    var4['code'] = var7;
    var _closure1_slot41 = var4;
    var4 = {};
    var7 = 'function VoicePanelControllerTsx14(){const{mode,controlsSpecs}=this.__closure;return[mode.get(),controlsSpecs.get().mode];}';
    var4['code'] = var7;
    var _closure1_slot42 = var4;
    var4 = {};
    var7 = 'function VoicePanelControllerTsx15(props,previous){const{cheapWorkletArrayShallowEqual,VoicePanelControlsModes,VoicePanelModes,runOnJS,dismissKeyboard}=this.__closure;if(cheapWorkletArrayShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const[currentMode,currentControlsMode]=props;if(currentControlsMode!==VoicePanelControlsModes.DRAWER||currentMode!==VoicePanelModes.PANEL||currentMode===VoicePanelModes.PANEL&&(previous===null||previous===void 0?void 0:previous[0])!==VoicePanelModes.PANEL){runOnJS(dismissKeyboard)();}}';
    var4['code'] = var7;
    var _closure1_slot43 = var4;
    var4 = 62;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/VoicePanelController.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function VoicePanelController(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
            var2 = arg1;
            var14 = var2.channelId;
            var _closure2_slot0 = var14;
            var16 = var2.guildId;
            var _closure2_slot1 = var16;
            var7 = var2.children;
            var22 = var2.transitionState;
            var8 = var2.transitionCleanUp;
            var4 = undefined;
            var _closure2_slot31 = var4;
            var _closure2_slot32 = var4;
            var _closure2_slot33 = var4;
            var _closure2_slot34 = var4;
            var _closure2_slot35 = var4;
            var _closure2_slot36 = var4;
            var9 = _closure1_slot0;
            var11 = _closure1_slot2;
            var15 = 29;
            var2 = var11[var15];
            var10 = var9.bind(var4)(var2);
            var6 = var10.useStateFromStores;
            var2 = _closure1_slot12;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot12;
                var2 = var3.getMode;
                var2 = var2.bind(var3)();
                var1 = _closure1_slot23;
                var1 = var1.PUSH_TO_TALK;
                var1 = var2 === var1;
                return var1;
            };
            var27 = var6.bind(var10)(var3, var2);
            var6 = _closure1_slot4;
            var3 = var6.useState;
            var2 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 52;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = _closure1_slot12;
                var1 = var2.getMediaEngine;
                var5 = var1.bind(var2)();
                var2 = var3.prototype;
                var2 = Object.create(var2, {constructor: {value: var3}});
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                return var1;
            };
            var3 = var3.bind(var6)(var2);
            var2 = _closure1_slot3;
            var6 = 1;
            var3 = var2.bind(var4)(var3, var6);
            var2 = 0;
            var3 = var3[var2];
            var _closure2_slot2 = var3;
            var13 = _closure1_slot4;
            var12 = var13.useEffect;
            var10 = new Array(1);
            var10[0] = var3;
            var3 = function() {
                var1 = function() {
                    var2 = _closure2_slot2;
                    var1 = var2.cleanUp;
                    var1 = var1.bind(var2)();
                    return var1;
                };
                return var1;
            };
            var3 = var12.bind(var13)(var3, var10);
            var10 = _closure1_slot1;
            var3 = 53;
            var3 = var11[var3];
            var3 = var10.bind(var4)(var3);
            var3 = var3.bind(var4)(var14, var16);
            var28 = var3.items;
            var13 = var3.isConnected;
            var3 = function useMountedCards(arg1, arg2) {
                var6 = arg1;
                var7 = arg2;
                var _closure3_slot0 = var6;
                var _closure3_slot1 = var7;
                var5 = _closure1_slot4;
                var4 = var5.useState;
                var1 = function() {
                    var1 = global;
                    var1 = var1.Set;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {constructor: {value: var1}});
                    var3 = var2;
                    var1 = new var3[var1](var2);
                    var1 = var1 instanceof Object ? var1 : var2;
                    return var1;
                };
                var8 = var4.bind(var5)(var1);
                var5 = _closure1_slot3;
                var4 = undefined;
                var1 = 1;
                var4 = var5.bind(var4)(var8, var1);
                var1 = 0;
                var1 = var4[var1];
                var _closure3_slot2 = var1;
                var5 = _closure1_slot4;
                var4 = var5.useEffect;
                var3 = new Array(3);
                var3[0] = var7;
                var3[1] = var6;
                var3[2] = var1;
                var2 = function() {
                    _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                        var3 = _closure3_slot1;
                        if(var3) { _fun0018_ip = 30; continue _fun0018 }
 12:
                        var3 = _closure3_slot2;
                        var2 = var3.clear;
                        var2 = var2.bind(var3)();
                        var2 = undefined;
                        return var2;
 30:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 51;
                        var3 = var3[var2];
                        var2 = undefined;
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.runAfterInteractions;
                        var3 = function() {
                            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
                                var2 = _closure3_slot2;
                                var1 = var2.clear;
                                var1 = var1.bind(var2)();
                                var3 = _closure1_slot44;
                                var2 = _closure3_slot0;
                                var1 = undefined;
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.bind(var1)();
                                var2 = var3.done;
                                if(var2) { _fun0019_ip = 86; continue _fun0019 }
 47:
                                var2 = var3.value;
                                var7 = _closure3_slot2;
                                var6 = var7.add;
                                var2 = var2.id;
                                var2 = var6.bind(var7)(var2);
                                var6 = var4.bind(var1)();
                                var2 = var6.done;
                                var3 = var6;
                                if(!var2) { _fun0019_ip = 47; continue _fun0019 }
 86:
                                return var1;
                            }
                        };
                        var2 = 100;
                        var2 = var4.bind(var5)(var3, var2);
                        var _closure4_slot0 = var2;
                        var1 = function() {
                            _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                                var3 = _closure4_slot0;
                                var2 = null;
                                if(!(var2 != var3)) { _fun0020_ip = 27; continue _fun0020 }
 13:
                                var2 = _closure4_slot0;
                                var1 = var2.cancel;
                                var1 = var1.bind(var2)();
 27:
                                var1 = undefined;
                                return var1;
                            }
                        };
                        return var1;
                    }
                };
                var2 = var4.bind(var5)(var2, var3);
                return var1;
            };
            var3 = var3.bind(var4)(var28, var13);
            var _closure2_slot3 = var3;
            var3 = function useCoreSharedState(arg1, arg2, arg3, arg4) {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                    var4 = arg1;
                    var11 = arg2;
                    var _closure3_slot0 = var4;
                    var2 = arg3;
                    var _closure3_slot1 = var2;
                    var2 = arg4;
                    var _closure3_slot2 = var2;
                    var3 = _closure1_slot11;
                    var2 = var3.getChannel;
                    var4 = var2.bind(var3)(var4);
                    var5 = null;
                    var3 = var5 == var4;
                    var19 = undefined;
                    var2 = undefined;
                    if(var3) { _fun0021_ip = 66; continue _fun0021 }
 56:
                    var3 = var4.isDM;
                    var2 = var3.bind(var4)();
 66:
                    var14 = var5 != var2;
                    if(!var14) { _fun0021_ip = 76; continue _fun0021 }
 73:
                    var14 = var2;
 76:
                    var18 = _closure1_slot0;
                    var20 = _closure1_slot2;
                    var17 = 21;
                    var2 = var20[var17];
                    var3 = var18.bind(var19)(var2);
                    var2 = var3.useSharedValue;
                    var21 = var2.bind(var3)(var11);
                    var2 = var20[var17];
                    var4 = var18.bind(var19)(var2);
                    var3 = var4.useSharedValue;
                    var2 = _closure1_slot15;
                    var2 = var2.PANEL;
                    var12 = var3.bind(var4)(var2);
                    var _closure3_slot3 = var12;
                    var2 = 31;
                    var2 = var20[var2];
                    var3 = var18.bind(var19)(var2);
                    var2 = var3.getWindowDimensions;
                    var6 = var2.bind(var3)();
                    var _closure3_slot4 = var6;
                    var2 = var20[var17];
                    var4 = var18.bind(var19)(var2);
                    var3 = var4.useSharedValue;
                    var2 = {};
                    var7 = var6.width;
                    var2['width'] = var7;
                    var7 = var6.height;
                    var2['height'] = var7;
                    var8 = var6.width;
                    var7 = var6.height;
                    var7 = var8 > var7;
                    var2['landscape'] = var7;
                    var8 = var3.bind(var4)(var2);
                    var2 = 32;
                    var2 = var20[var2];
                    var3 = var18.bind(var19)(var2);
                    var2 = var3.getSafeAreaInsets;
                    var9 = var2.bind(var3)();
                    var _closure3_slot5 = var9;
                    var2 = var20[var17];
                    var4 = var18.bind(var19)(var2);
                    var3 = var4.useSharedValue;
                    var2 = {};
                    var28 = var2;
                    var27 = var9;
                    var7 = copyDataProperties(var28, var27);
                    var10 = var3.bind(var4)(var2);
                    var7 = 33;
                    var2 = var20[var7];
                    var4 = var18.bind(var19)(var2);
                    var3 = var4.getMaxPanelWidth;
                    var2 = {};
                    var13 = var6.width;
                    var2['windowWidth'] = var13;
                    var2['connected'] = var11;
                    var11 = var9.left;
                    var2['safeAreaLeft'] = var11;
                    var9 = var9.right;
                    var2['safeAreaRight'] = var9;
                    var13 = var3.bind(var4)(var2);
                    var2 = var20[var17];
                    var4 = var18.bind(var19)(var2);
                    var3 = var4.useSharedValue;
                    var2 = {};
                    var9 = var6.height;
                    var2['drawerHeight'] = var9;
                    var2['drawerWidth'] = var13;
                    var7 = var20[var7];
                    var11 = var18.bind(var19)(var7);
                    var9 = var11.getPanelX;
                    var7 = var6.width;
                    var7 = var9.bind(var11)(var7, var13);
                    var2['drawerX'] = var7;
                    var6 = var6.height;
                    var2['drawerY'] = var6;
                    var6 = -1;
                    var2['pipX'] = var6;
                    var2['pipY'] = var6;
                    var6 = true;
                    var2['animated'] = var6;
                    var6 = _closure1_slot15;
                    var6 = var6.PANEL;
                    var2['mode'] = var6;
                    var7 = var3.bind(var4)(var2);
                    var2 = var20[var17];
                    var3 = var18.bind(var19)(var2);
                    var2 = var3.useSharedValue;
                    var23 = 0;
                    var9 = var2.bind(var3)(var23);
                    var2 = var20[var17];
                    var3 = var18.bind(var19)(var2);
                    var2 = var3.useSharedValue;
                    var4 = false;
                    var16 = var2.bind(var3)(var4);
                    var2 = var20[var17];
                    var3 = var18.bind(var19)(var2);
                    var2 = var3.useSharedValue;
                    var15 = var2.bind(var3)(var5);
                    var2 = var20[var17];
                    var3 = var18.bind(var19)(var2);
                    var2 = var3.useSharedValue;
                    var11 = var2.bind(var3)(var23);
                    var2 = var20[var17];
                    var3 = var18.bind(var19)(var2);
                    var2 = var3.useSharedValue;
                    var6 = var2.bind(var3)(var4);
                    var _closure3_slot6 = var6;
                    var5 = _closure1_slot4;
                    var4 = var5.useCallback;
                    var3 = function S(arg1) {
                        var3 = _closure3_slot6;
                        var2 = var3.set;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    var2 = {};
                    var2['isFocusedVideoZoomed'] = var6;
                    var3['__closure'] = var2;
                    var2 = 13885070318174.0;
                    var3['__workletHash'] = var2;
                    var2 = _closure1_slot33;
                    var3['__initData'] = var2;
                    var2 = new Array(1);
                    var2[0] = var6;
                    var5 = var4.bind(var5)(var3, var2);
                    var2 = var20[var17];
                    var4 = var18.bind(var19)(var2);
                    var3 = var4.useSharedValue;
                    var2 = _closure1_slot5;
                    var2 = var2.useReducedMotion;
                    var4 = var3.bind(var4)(var2);
                    var _closure3_slot7 = var4;
                    var24 = _closure1_slot4;
                    var13 = var24.useEffect;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var2 = function() {
                        var4 = function onChange() {
                            var1 = _closure1_slot5;
                            var3 = var1.useReducedMotion;
                            var2 = _closure3_slot7;
                            var1 = var2.set;
                            var1 = var1.bind(var2)(var3);
                            var1 = undefined;
                            return var1;
                        };
                        var _closure4_slot0 = var4;
                        var3 = _closure1_slot5;
                        var2 = var3.addReactChangeListener;
                        var2 = var2.bind(var3)(var4);
                        var1 = function() {
                            var3 = _closure1_slot5;
                            var2 = var3.removeReactChangeListener;
                            var1 = _closure4_slot0;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        return var1;
                    };
                    var2 = var13.bind(var24)(var2, var3);
                    var2 = var20[var17];
                    var13 = var18.bind(var19)(var2);
                    var3 = var13.useSharedValue;
                    var2 = {'gestureActive': false, 'x': 0, 'y': 0};
                    var3 = var3.bind(var13)(var2);
                    var2 = var20[var17];
                    var24 = var18.bind(var19)(var2);
                    var13 = var24.useDerivedValue;
                    var2 = function N() {
                        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                            var2 = _closure3_slot3;
                            var1 = var2.get;
                            var3 = var1.bind(var2)();
                            var2 = _closure1_slot15;
                            var2 = var2.PANEL;
                            if(!(var2 !== var3)) { _fun0022_ip = 71; continue _fun0022 }
 33:
                            var2 = _closure1_slot15;
                            var2 = var2.PIP;
                            if(!(var2 !== var3)) { _fun0022_ip = 59; continue _fun0022 }
 47:
                            var2 = _closure1_slot27;
                            var2 = var2.UNDEFINED;
                            return var2;
 59:
                            var2 = _closure1_slot27;
                            var2 = var2.PIP;
                            return var2;
 71:
                            var1 = _closure1_slot27;
                            var1 = var1.PANEL;
                            return var1;
                        }
                    };
                    var25 = {};
                    var25['mode'] = var12;
                    var26 = _closure1_slot15;
                    var25['VoicePanelModes'] = var26;
                    var26 = _closure1_slot27;
                    var25['MorphablePanelModes'] = var26;
                    var2['__closure'] = var25;
                    var25 = 931249605381.0;
                    var2['__workletHash'] = var25;
                    var25 = _closure1_slot34;
                    var2['__initData'] = var25;
                    var2 = var13.bind(var24)(var2);
                    var25 = _closure1_slot4;
                    var24 = var25.useState;
                    var13 = function() {
                        _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 34;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var9 = _closure3_slot0;
                            var2 = var3.prototype;
                            var2 = Object.create(var2, {constructor: {value: var3}});
                            var10 = var2;
                            var1 = new var10[var3](var9, var8);
                            var1 = var1 instanceof Object ? var1 : var2;
                            var4 = var1.updateState;
                            var3 = _closure3_slot1;
                            var2 = {};
                            var7 = _closure3_slot4;
                            var7 = var7.width;
                            var2['windowWidth'] = var7;
                            var7 = _closure3_slot4;
                            var7 = var7.height;
                            var2['windowHeight'] = var7;
                            var7 = _closure3_slot5;
                            var7 = var7.left;
                            var2['safeAreaLeft'] = var7;
                            var7 = _closure3_slot5;
                            var7 = var7.right;
                            var2['safeAreaRight'] = var7;
                            var7 = _closure3_slot5;
                            var7 = var7.top;
                            var2['safeAreaTop'] = var7;
                            var7 = _closure3_slot5;
                            var7 = var7.bottom;
                            var2['safeAreaBottom'] = var7;
                            var5 = _closure3_slot2;
                            if(var5) { _fun0023_ip = 161; continue _fun0023 }
 155:
                            var5 = _closure1_slot17;
                            _fun0023_ip = 165; continue _fun0023;
 161:
                            var5 = _closure1_slot18;
 165:
                            var2['controlBarSize'] = var5;
                            var2 = var4.bind(var1)(var3, var2);
                            return var1;
                        }
                    };
                    var25 = var24.bind(var25)(var13);
                    var24 = _closure1_slot3;
                    var13 = 1;
                    var13 = var24.bind(var19)(var25, var13);
                    var13 = var13[var23];
                    var _closure3_slot8 = var13;
                    var24 = _closure1_slot4;
                    var23 = var24.useLayoutEffect;
                    var22 = new Array(1);
                    var22[0] = var13;
                    var1 = function() {
                        var1 = function() {
                            var2 = _closure3_slot8;
                            var1 = var2.cleanUp;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        return var1;
                    };
                    var1 = var23.bind(var24)(var1, var22);
                    var1 = {};
                    var1['connected'] = var21;
                    var17 = var20[var17];
                    var19 = var18.bind(var19)(var17);
                    var18 = var19.useSharedValue;
                    var17 = var13.getContentDimensions;
                    var17 = var17.bind(var13)();
                    var17 = var18.bind(var19)(var17);
                    var1['contentDimensions'] = var17;
                    var1['dragScrolling'] = var16;
                    var1['focused'] = var15;
                    var1['isCall'] = var14;
                    var1['layoutManager'] = var13;
                    var1['mode'] = var12;
                    var1['preJoinContentSize'] = var11;
                    var1['safeArea'] = var10;
                    var1['scrollPosition'] = var9;
                    var1['windowDimensions'] = var8;
                    var1['wrapperDimensions'] = var7;
                    var1['isFocusedVideoZoomed'] = var6;
                    var1['setIsFocusedVideoZoomed'] = var5;
                    var1['useReducedMotion'] = var4;
                    var1['wrapperOffset'] = var3;
                    var1['morphablePanelMode'] = var2;
                    return var1;
                }
            };
            var35 = undefined;
            var34 = var14;
            var33 = var13;
            var32 = var28;
            var31 = var27;
            var3 = var35[var3](var34, var33, var32, var31, var30);
            var19 = var3.connected;
            var _closure2_slot4 = var19;
            var29 = var3.contentDimensions;
            var _closure2_slot5 = var29;
            var10 = var3.dragScrolling;
            var _closure2_slot6 = var10;
            var20 = var3.focused;
            var _closure2_slot7 = var20;
            var10 = var3.isCall;
            var _closure2_slot8 = var10;
            var21 = var3.layoutManager;
            var _closure2_slot9 = var21;
            var10 = var3.mode;
            var _closure2_slot10 = var10;
            var12 = var3.preJoinContentSize;
            var _closure2_slot11 = var12;
            var24 = var3.safeArea;
            var _closure2_slot12 = var24;
            var12 = var3.scrollPosition;
            var _closure2_slot13 = var12;
            var23 = var3.windowDimensions;
            var _closure2_slot14 = var23;
            var12 = var3.wrapperDimensions;
            var _closure2_slot15 = var12;
            var12 = var3.isFocusedVideoZoomed;
            var _closure2_slot16 = var12;
            var12 = var3.setIsFocusedVideoZoomed;
            var _closure2_slot17 = var12;
            var12 = var3.useReducedMotion;
            var _closure2_slot18 = var12;
            var12 = var3.wrapperOffset;
            var _closure2_slot19 = var12;
            var3 = var3.morphablePanelMode;
            var _closure2_slot20 = var3;
            var3 = function useControlsState(arg1, arg2, arg3, arg4) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                    var21 = arg1;
                    var11 = arg2;
                    var14 = arg3;
                    var15 = arg4;
                    var _closure3_slot0 = var21;
                    var _closure3_slot1 = var11;
                    var _closure3_slot2 = var14;
                    var _closure3_slot3 = var15;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var9 = 21;
                    var2 = var2[var9];
                    var18 = undefined;
                    var4 = var3.bind(var18)(var2);
                    var3 = var4.useSharedValue;
                    var2 = {};
                    var5 = _closure1_slot20;
                    var5 = var5.FLOATING_DEFAULT;
                    var2['mode'] = var5;
                    var5 = false;
                    var2['locked'] = var5;
                    if(!var15) { _fun0024_ip = 89; continue _fun0024 }
 86:
                    if(var11) { _fun0024_ip = 95; continue _fun0024 }
 89:
                    var5 = _closure1_slot17;
                    _fun0024_ip = 99; continue _fun0024;
 95:
                    var5 = _closure1_slot18;
 99:
                    var2['height'] = var5;
                    var2['pushToTalk'] = var15;
                    var2 = var3.bind(var4)(var2);
                    var _closure3_slot4 = var2;
                    var5 = _closure1_slot4;
                    var4 = var5.useRef;
                    var3 = -1;
                    var3 = var4.bind(var5)(var3);
                    var _closure3_slot5 = var3;
                    var6 = _closure1_slot4;
                    var5 = var6.useCallback;
                    var4 = function() {
                        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                            var2 = _closure3_slot5;
                            var3 = var2.current;
                            var2 = -1;
                            if(!(var2 !== var3)) { _fun0025_ip = 56; continue _fun0025 }
 22:
                            var3 = global;
                            var5 = var3.clearTimeout;
                            var3 = _closure3_slot5;
                            var4 = var3.current;
                            var3 = undefined;
                            var3 = var5.bind(var3)(var4);
                            var1 = _closure3_slot5;
                            var1['current'] = var2;
 56:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = new Array(0);
                    var8 = var5.bind(var6)(var4, var3);
                    var _closure3_slot6 = var8;
                    var6 = _closure1_slot4;
                    var5 = var6.useCallback;
                    var4 = new Array(3);
                    var4[0] = var2;
                    var4[1] = var8;
                    var4[2] = var21;
                    var3 = function() {
                        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                            var3 = _closure3_slot6;
                            var1 = undefined;
                            var3 = var3.bind(var1)();
                            var3 = _closure3_slot5;
                            var4 = var3.current;
                            var3 = -1;
                            if(!(var3 === var4)) { _fun0026_ip = 72; continue _fun0026 }
 32:
                            var3 = _closure3_slot5;
                            var2 = global;
                            var5 = var2.setTimeout;
                            var4 = _closure1_slot19;
                            var2 = function() {
                                _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                                    var3 = _closure3_slot6;
                                    var1 = undefined;
                                    var3 = var3.bind(var1)();
                                    var4 = _closure3_slot0;
                                    var3 = var4.get;
                                    var4 = var3.bind(var4)();
                                    var3 = _closure1_slot15;
                                    var3 = var3.PANEL;
                                    if(!(var4 === var3)) { _fun0027_ip = 146; continue _fun0027 }
 43:
                                    var4 = _closure3_slot4;
                                    var3 = var4.get;
                                    var3 = var3.bind(var4)();
                                    var4 = var3.mode;
                                    var3 = _closure1_slot20;
                                    var3 = var3.FLOATING_DEFAULT;
                                    var3 = var4 !== var3;
                                    if(var3) { _fun0027_ip = 97; continue _fun0027 }
 78:
                                    var6 = _closure3_slot4;
                                    var4 = var6.get;
                                    var4 = var4.bind(var6)();
                                    var3 = var4.locked;
 97:
                                    if(var3) { _fun0027_ip = 146; continue _fun0027 }
 100:
                                    var4 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var3 = 37;
                                    var3 = var6[var3];
                                    var4 = var4.bind(var1)(var3);
                                    var3 = _closure3_slot4;
                                    var2 = {};
                                    var5 = _closure1_slot20;
                                    var5 = var5.HIDDEN;
                                    var2['mode'] = var5;
                                    var2 = var4.bind(var1)(var3, var2);
 146:
                                    return var1;
                                }
                            };
                            var2 = var5.bind(var1)(var2, var4);
                            var3['current'] = var2;
 72:
                            return var1;
                        }
                    };
                    var22 = var5.bind(var6)(var3, var4);
                    var _closure3_slot7 = var22;
                    var6 = _closure1_slot4;
                    var5 = var6.useMemo;
                    var4 = new Array(2);
                    var4[0] = var2;
                    var4[1] = var22;
                    var3 = function() {
                        var5 = function _setControlsMode(arg1, arg2) {
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 37;
                            var2 = var2[var1];
                            var1 = undefined;
                            var5 = var3.bind(var1)(var2);
                            var4 = _closure3_slot4;
                            var3 = {};
                            var6 = arg1;
                            var3['mode'] = var6;
                            var6 = arg2;
                            var3['returnMode'] = var6;
                            var3 = var5.bind(var1)(var4, var3);
                            var2 = _closure3_slot7;
                            var2 = var2.bind(var1)();
                            return var1;
                        };
                        var _closure4_slot0 = var5;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 38;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.debounce;
                        var1 = 200;
                        var1 = var3.bind(var4)(var5, var1);
                        var _closure4_slot1 = var1;
                        var1 = {};
                        var3 = function cancelControlsDebounce() {
                            var2 = _closure4_slot1;
                            var1 = var2.cancel;
                            var1 = var1.bind(var2)();
                            return var1;
                        };
                        var1['cancelControlsDebounce'] = var3;
                        var2 = function setControlsMode(arg1) {
                            _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                                var2 = arg1;
                                var4 = var2.mode;
                                var6 = var2.debounce;
                                var1 = undefined;
                                if(!(var6 === var1)) { _fun0028_ip = 22; continue _fun0028 }
 20:
                                var6 = false;
 22:
                                var3 = var2.returnMode;
                                if(!(var3 === var1)) { _fun0028_ip = 45; continue _fun0028 }
 32:
                                var2 = _closure1_slot20;
                                var3 = var2.FLOATING_DEFAULT;
 45:
                                var2 = _closure4_slot1;
                                if(var6) { _fun0028_ip = 77; continue _fun0028 }
 55:
                                var6 = var2.cancel;
                                var6 = var6.bind(var2)();
                                var5 = _closure4_slot0;
                                var5 = var5.bind(var1)(var4, var3);
                                _fun0028_ip = 83; continue _fun0028;
 77:
                                var2 = var2.bind(var1)(var4, var3);
 83:
                                return var1;
                            }
                        };
                        var1['setControlsMode'] = var2;
                        return var1;
                    };
                    var3 = var5.bind(var6)(var3, var4);
                    var12 = var3.cancelControlsDebounce;
                    var _closure3_slot8 = var12;
                    var5 = var3.setControlsMode;
                    var _closure3_slot9 = var5;
                    var6 = _closure1_slot4;
                    var4 = var6.useRef;
                    var3 = global;
                    var3 = var3.Set;
                    var10 = var3.prototype;
                    var10 = Object.create(var10, {constructor: {value: var3}});
                    var26 = var10;
                    var3 = new var26[var3](var25);
                    var3 = var3 instanceof Object ? var3 : var10;
                    var3 = var4.bind(var6)(var3);
                    var _closure3_slot10 = var3;
                    var10 = _closure1_slot4;
                    var6 = var10.useCallback;
                    var4 = new Array(3);
                    var4[0] = var2;
                    var4[1] = var22;
                    var4[2] = var8;
                    var3 = function(arg1) {
                        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
                            var1 = arg1;
                            var3 = null;
                            if(!(var3 == var1)) { _fun0029_ip = 46; continue _fun0029 }
 11:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var3 = 39;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            var3 = var4.v4;
                            var1 = var3.bind(var4)();
 46:
                            var _closure4_slot0 = var1;
                            var1 = {};
                            var3 = function lock(arg1) {
                                _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                                    var2 = arg1;
                                    var3 = _closure3_slot10;
                                    var6 = var3.current;
                                    var5 = var6.has;
                                    var4 = _closure4_slot0;
                                    var4 = var5.bind(var6)(var4);
                                    if(var4) { _fun0030_ip = 140; continue _fun0030 }
 35:
                                    var5 = _closure3_slot6;
                                    var4 = undefined;
                                    var5 = var5.bind(var4)();
                                    var5 = _closure3_slot10;
                                    var6 = var5.current;
                                    var5 = var6.add;
                                    var3 = _closure4_slot0;
                                    var3 = var5.bind(var6)(var3);
                                    var3 = {};
                                    var5 = _closure3_slot10;
                                    var5 = var5.current;
                                    var6 = var5.size;
                                    var5 = 0;
                                    var5 = var6 > var5;
                                    var3['locked'] = var5;
                                    var5 = null;
                                    if(!(var5 != var2)) { _fun0030_ip = 107; continue _fun0030 }
 101:
                                    var3['mode'] = var2;
 107:
                                    var5 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var2 = 37;
                                    var2 = var6[var2];
                                    var2 = var5.bind(var4)(var2);
                                    var1 = _closure3_slot4;
                                    var1 = var2.bind(var4)(var1, var3);
 140:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var1['lock'] = var3;
                            var2 = function unlock(arg1) {
                                _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
                                    var2 = arg1;
                                    var3 = _closure3_slot10;
                                    var6 = var3.current;
                                    var5 = var6.has;
                                    var4 = _closure4_slot0;
                                    var4 = var5.bind(var6)(var4);
                                    if(!var4) { _fun0031_ip = 140; continue _fun0031 }
 35:
                                    var4 = _closure3_slot10;
                                    var5 = var4.current;
                                    var4 = var5.delete;
                                    var3 = _closure4_slot0;
                                    var3 = var4.bind(var5)(var3);
                                    var5 = {};
                                    var3 = _closure3_slot10;
                                    var3 = var3.current;
                                    var4 = var3.size;
                                    var3 = 0;
                                    var3 = var4 > var3;
                                    var5['locked'] = var3;
                                    var3 = null;
                                    if(!(var3 != var2)) { _fun0031_ip = 97; continue _fun0031 }
 91:
                                    var5['mode'] = var2;
 97:
                                    var4 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var2 = 37;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var4 = var4.bind(var2)(var3);
                                    var3 = _closure3_slot4;
                                    var3 = var4.bind(var2)(var3, var5);
                                    var1 = _closure3_slot7;
                                    var1 = var1.bind(var2)();
 140:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var1['unlock'] = var2;
                            return var1;
                        }
                    };
                    var6 = var6.bind(var10)(var3, var4);
                    var13 = _closure1_slot4;
                    var10 = var13.useCallback;
                    var4 = new Array(1);
                    var4[0] = var5;
                    var3 = function() {
                        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
                            var2 = arguments[0];
                            var1 = undefined;
                            if(!(var2 === var1)) { _fun0032_ip = 21; continue _fun0032 }
 9:
                            var3 = {};
                            var4 = false;
                            var3['debounce'] = var4;
                            var2 = var3;
 21:
                            var4 = var2.debounce;
                            var3 = _closure3_slot9;
                            var2 = {};
                            var5 = _closure1_slot20;
                            var5 = var5.HIDDEN;
                            var2['mode'] = var5;
                            var2['debounce'] = var4;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        }
                    };
                    var3 = var10.bind(var13)(var3, var4);
                    var16 = _closure1_slot4;
                    var13 = var16.useCallback;
                    var10 = new Array(2);
                    var10[0] = var5;
                    var10[1] = var2;
                    var4 = function() {
                        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
                            var1 = arguments[0];
                            var3 = undefined;
                            if(!(var1 === var3)) { _fun0033_ip = 11; continue _fun0033 }
 9:
                            var1 = {};
 11:
                            var4 = var1.debounce;
                            if(!(var4 === var3)) { _fun0033_ip = 23; continue _fun0033 }
 21:
                            var4 = false;
 23:
                            var2 = _closure3_slot9;
                            var1 = {};
                            var6 = _closure3_slot4;
                            var5 = var6.get;
                            var5 = var5.bind(var6)();
                            var5 = var5.returnMode;
                            var6 = null;
                            if(!(var6 == var5)) { _fun0033_ip = 70; continue _fun0033 }
 57:
                            var6 = _closure1_slot20;
                            var5 = var6.FLOATING_DEFAULT;
 70:
                            var1['mode'] = var5;
                            var1['debounce'] = var4;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        }
                    };
                    var4 = var13.bind(var16)(var4, var10);
                    var10 = _closure1_slot0;
                    var19 = _closure1_slot2;
                    var13 = var19[var9];
                    var20 = var10.bind(var18)(var13);
                    var17 = var20.useAnimatedReaction;
                    var16 = function s() {
                        var2 = _closure3_slot0;
                        var1 = var2.get;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var13 = {};
                    var13['mode'] = var21;
                    var16['__closure'] = var13;
                    var13 = 12140218650562.0;
                    var16['__workletHash'] = var13;
                    var13 = _closure1_slot35;
                    var16['__initData'] = var13;
                    var13 = function r(arg1) {
                        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
                            var2 = _closure1_slot15;
                            var3 = var2.PANEL;
                            var2 = arg1;
                            if(!(var2 !== var3)) { _fun0034_ip = 65; continue _fun0034 }
 20:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 21;
                            var2 = var3[var2];
                            var3 = undefined;
                            var5 = var4.bind(var3)(var2);
                            var4 = var5.runOnJS;
                            var2 = _closure3_slot6;
                            var2 = var4.bind(var5)(var2);
                            var2 = var2.bind(var3)();
                            _fun0034_ip = 108; continue _fun0034;
 65:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 21;
                            var1 = var2[var1];
                            var2 = undefined;
                            var4 = var3.bind(var2)(var1);
                            var3 = var4.runOnJS;
                            var1 = _closure3_slot7;
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.bind(var2)();
 108:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var21 = {};
                    var23 = _closure1_slot15;
                    var21['VoicePanelModes'] = var23;
                    var23 = var19[var9];
                    var23 = var10.bind(var18)(var23);
                    var23 = var23.runOnJS;
                    var21['runOnJS'] = var23;
                    var21['_queueHideControls'] = var22;
                    var21['_clearHideControlsQueue'] = var8;
                    var13['__closure'] = var21;
                    var21 = 7742206515980.0;
                    var13['__workletHash'] = var21;
                    var21 = _closure1_slot36;
                    var13['__initData'] = var21;
                    var13 = var17.bind(var20)(var16, var13);
                    var17 = _closure1_slot4;
                    var16 = var17.useLayoutEffect;
                    var13 = new Array(3);
                    var13[0] = var15;
                    var13[1] = var2;
                    var13[2] = var11;
                    var11 = function() {
                        _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 37;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = _closure3_slot4;
                            var2 = {};
                            var6 = _closure3_slot3;
                            if(!var6) { _fun0035_ip = 48; continue _fun0035 }
 41:
                            var6 = _closure3_slot1;
                            if(var6) { _fun0035_ip = 54; continue _fun0035 }
 48:
                            var6 = _closure1_slot17;
                            _fun0035_ip = 58; continue _fun0035;
 54:
                            var6 = _closure1_slot18;
 58:
                            var2['height'] = var6;
                            var5 = _closure3_slot3;
                            var2['pushToTalk'] = var5;
                            var2 = var4.bind(var1)(var3, var2);
                            return var1;
                        }
                    };
                    var11 = var16.bind(var17)(var11, var13);
                    var9 = var19[var9];
                    var13 = var10.bind(var18)(var9);
                    var11 = var13.useAnimatedReaction;
                    var10 = function c() {
                        var2 = _closure3_slot2;
                        var1 = var2.get;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    var9 = {};
                    var9['connected'] = var14;
                    var10['__closure'] = var9;
                    var9 = 16653595323628.0;
                    var10['__workletHash'] = var9;
                    var9 = _closure1_slot37;
                    var10['__initData'] = var9;
                    var9 = function l(arg1) {
                        _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
 0:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 37;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = _closure3_slot4;
                            var2 = {};
                            var6 = _closure3_slot3;
                            if(!var6) { _fun0036_ip = 47; continue _fun0036 }
 41:
                            var6 = arg1;
                            if(var6) { _fun0036_ip = 53; continue _fun0036 }
 47:
                            var6 = _closure1_slot17;
                            _fun0036_ip = 57; continue _fun0036;
 53:
                            var6 = _closure1_slot18;
 57:
                            var2['height'] = var6;
                            var5 = _closure3_slot3;
                            var2['pushToTalk'] = var5;
                            var2 = var4.bind(var1)(var3, var2);
                            return var1;
                        }
                    };
                    var14 = {};
                    var17 = _closure1_slot1;
                    var16 = 37;
                    var16 = var19[var16];
                    var16 = var17.bind(var18)(var16);
                    var14['updateSharedValueIfChanged'] = var16;
                    var14['controlsSpecs'] = var2;
                    var14['pushToTalk'] = var15;
                    var15 = _closure1_slot18;
                    var14['CONTROLS_HEIGHT_PTT'] = var15;
                    var15 = _closure1_slot17;
                    var14['CONTROLS_HEIGHT'] = var15;
                    var9['__closure'] = var14;
                    var14 = 2154816141018.0;
                    var9['__workletHash'] = var14;
                    var14 = _closure1_slot38;
                    var9['__initData'] = var14;
                    var9 = var11.bind(var13)(var10, var9);
                    var11 = _closure1_slot4;
                    var10 = var11.useLayoutEffect;
                    var9 = new Array(2);
                    var9[0] = var12;
                    var9[1] = var8;
                    var8 = function() {
                        var1 = function() {
                            var3 = _closure3_slot8;
                            var1 = undefined;
                            var3 = var3.bind(var1)();
                            var2 = _closure3_slot6;
                            var2 = var2.bind(var1)();
                            return var1;
                        };
                        return var1;
                    };
                    var8 = var10.bind(var11)(var8, var9);
                    var9 = _closure1_slot4;
                    var8 = var9.useEffect;
                    var7 = new Array(1);
                    var7[0] = var5;
                    var1 = function() {
                        var5 = function closeTiV() {
                            var3 = _closure3_slot9;
                            var2 = {};
                            var1 = _closure1_slot20;
                            var1 = var1.FLOATING_DEFAULT;
                            var2['mode'] = var1;
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        };
                        var _closure4_slot0 = var5;
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var3 = 40;
                        var4 = var4[var3];
                        var3 = undefined;
                        var3 = var6.bind(var3)(var4);
                        var4 = var3.ComponentDispatch;
                        var3 = var4.subscribe;
                        var2 = _closure1_slot22;
                        var2 = var2.VOICE_PANEL_TIV_CLOSE;
                        var2 = var3.bind(var4)(var2, var5);
                        var1 = function() {
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 40;
                            var3 = var3[var1];
                            var1 = undefined;
                            var3 = var4.bind(var1)(var3);
                            var5 = var3.ComponentDispatch;
                            var4 = var5.unsubscribe;
                            var2 = _closure1_slot22;
                            var3 = var2.VOICE_PANEL_TIV_CLOSE;
                            var2 = _closure4_slot0;
                            var2 = var4.bind(var5)(var3, var2);
                            return var1;
                        };
                        return var1;
                    };
                    var1 = var8.bind(var9)(var1, var7);
                    var1 = {};
                    var1['generateStateLocker'] = var6;
                    var1['setControlsMode'] = var5;
                    var1['showControls'] = var4;
                    var1['hideControls'] = var3;
                    var1['controlsSpecs'] = var2;
                    return var1;
                }
            };
            var34 = var10;
            var33 = var13;
            var32 = var19;
            var31 = var27;
            var3 = var35[var3](var34, var33, var32, var31, var30);
            var12 = var3.generateStateLocker;
            var _closure2_slot21 = var12;
            var25 = var3.controlsSpecs;
            var _closure2_slot22 = var25;
            var12 = var3.showControls;
            var _closure2_slot23 = var12;
            var12 = var3.hideControls;
            var _closure2_slot24 = var12;
            var12 = var3.setControlsMode;
            var _closure2_slot25 = var12;
            var17 = {};
            var17['channelId'] = var14;
            var17['isConnected'] = var13;
            var17['mode'] = var10;
            var17['connected'] = var19;
            var17['transitionState'] = var22;
            var17['controlsSpecs'] = var25;
            var17['setControlsMode'] = var12;
            var3 = function useSelectedMode(arg1) {
                var2 = arg1;
                var11 = var2.channelId;
                var _closure3_slot0 = var11;
                var3 = var2.isConnected;
                var _closure3_slot1 = var3;
                var9 = var2.mode;
                var _closure3_slot2 = var9;
                var10 = var2.connected;
                var _closure3_slot3 = var10;
                var3 = var2.transitionState;
                var _closure3_slot4 = var3;
                var8 = var2.controlsSpecs;
                var _closure3_slot5 = var8;
                var7 = var2.setControlsMode;
                var _closure3_slot6 = var7;
                var5 = _closure1_slot4;
                var4 = var5.useState;
                var3 = _closure1_slot15;
                var3 = var3.PANEL;
                var6 = var4.bind(var5)(var3);
                var5 = _closure1_slot3;
                var4 = undefined;
                var3 = 2;
                var5 = var5.bind(var4)(var6, var3);
                var3 = 0;
                var4 = var5[var3];
                var _closure3_slot7 = var4;
                var3 = 1;
                var3 = var5[var3];
                var _closure3_slot8 = var3;
                var12 = _closure1_slot4;
                var6 = var12.useLayoutEffect;
                var5 = function() {
                    _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
 0:
                        var4 = _closure3_slot2;
                        var3 = var4.set;
                        var1 = _closure3_slot7;
                        var1 = var3.bind(var4)(var1);
                        var4 = _closure3_slot4;
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 45;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var5.bind(var1)(var3);
                        var3 = var3.TransitionStates;
                        var3 = var3.YEETED;
                        if(!(var4 !== var3)) { _fun0037_ip = 84; continue _fun0037 }
 66:
                        var4 = _closure3_slot3;
                        var3 = var4.set;
                        var2 = _closure3_slot1;
                        var2 = var3.bind(var4)(var2);
 84:
                        return var1;
                    }
                };
                var5 = var6.bind(var12)(var5);
                var6 = _closure1_slot4;
                var5 = var6.useCallback;
                var2 = new Array(5);
                var2[0] = var11;
                var2[1] = var10;
                var2[2] = var9;
                var2[3] = var8;
                var2[4] = var7;
                var1 = function() {
                    _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
 0:
                        var2 = _closure3_slot5;
                        var1 = var2.get;
                        var1 = var1.bind(var2)();
                        var4 = var1.mode;
                        var1 = _closure1_slot20;
                        var1 = var1.DRAWER;
                        if(!(var4 !== var1)) { _fun0038_ip = 145; continue _fun0038 }
 38:
                        var4 = _closure3_slot3;
                        var1 = var4.get;
                        var1 = var1.bind(var4)();
                        if(var1) { _fun0038_ip = 87; continue _fun0038 }
 54:
                        var4 = _closure1_slot14;
                        var1 = var4.getState;
                        var5 = var1.bind(var4)();
                        var4 = var5.closeChannel;
                        var1 = _closure3_slot0;
                        var1 = var4.bind(var5)(var1);
                        var1 = true;
                        _fun0038_ip = 143; continue _fun0038;
 87:
                        var5 = _closure3_slot2;
                        var4 = var5.get;
                        var5 = var4.bind(var5)();
                        var4 = _closure1_slot15;
                        var4 = var4.PANEL;
                        var4 = var5 === var4;
                        if(!var4) { _fun0038_ip = 140; continue _fun0038 }
 117:
                        var7 = _closure3_slot8;
                        var5 = _closure1_slot15;
                        var6 = var5.PIP;
                        var5 = undefined;
                        var5 = var7.bind(var5)(var6);
                        var4 = true;
 140:
                        var1 = var4;
 143:
                        _fun0038_ip = 174; continue _fun0038;
 145:
                        var4 = _closure3_slot6;
                        var3 = {};
                        var2 = _closure1_slot20;
                        var2 = var2.FLOATING_DEFAULT;
                        var3['mode'] = var2;
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var1 = true;
 174:
                        return var1;
                    }
                };
                var2 = var5.bind(var6)(var1, var2);
                var1 = {};
                var1['selectedMode'] = var4;
                var1['setMode'] = var3;
                var1['dismissPanel'] = var2;
                return var1;
            };
            var17 = var3.bind(var4)(var17);
            var3 = var17.selectedMode;
            var _closure2_slot26 = var3;
            var18 = var17.setMode;
            var _closure2_slot27 = var18;
            var17 = var17.dismissPanel;
            var _closure2_slot28 = var17;
            var17 = {};
            var17['guildId'] = var16;
            var17['channelId'] = var14;
            var17['layoutManager'] = var21;
            var17['focused'] = var20;
            var16 = function useManuallyFocusedItem(arg1) {
                _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
 0:
                    var2 = arg1;
                    var8 = var2.guildId;
                    var _closure3_slot0 = var8;
                    var7 = var2.channelId;
                    var _closure3_slot1 = var7;
                    var10 = var2.layoutManager;
                    var12 = var2.focused;
                    var _closure3_slot2 = var12;
                    var6 = undefined;
                    var _closure3_slot6 = var6;
                    var _closure3_slot7 = var6;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 29;
                    var2 = var5[var2];
                    var9 = var3.bind(var6)(var2);
                    var5 = var9.useStateFromStores;
                    var2 = _closure1_slot7;
                    var3 = new Array(1);
                    var3[0] = var2;
                    var2 = function() {
                        var3 = _closure1_slot7;
                        var2 = var3.getSelectedParticipantId;
                        var1 = _closure3_slot1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2 = var5.bind(var9)(var3, var2);
                    var _closure3_slot3 = var2;
                    var11 = _closure1_slot4;
                    var9 = var11.useCallback;
                    var5 = new Array(2);
                    var5[0] = var8;
                    var5[1] = var7;
                    var3 = function(arg1) {
                        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
 0:
                            var4 = arg1;
                            var1 = null;
                            var1 = var1 == var4;
                            if(var1) { _fun0040_ip = 61; continue _fun0040 }
 12:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 46;
                            var3 = var3[var2];
                            var2 = undefined;
                            var6 = var5.bind(var2)(var3);
                            var5 = var6.isVoicePanelParticipantFocusable;
                            var3 = _closure3_slot0;
                            var2 = _closure3_slot1;
                            var1 = var5.bind(var6)(var3, var2, var4);
 61:
                            if(!var1) { _fun0040_ip = 108; continue _fun0040 }
 64:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 47;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.selectParticipant;
                            var1 = _closure3_slot1;
                            var1 = var2.bind(var3)(var1, var4);
 108:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = var9.bind(var11)(var3, var5);
                    var _closure3_slot4 = var3;
                    var9 = _closure1_slot4;
                    var5 = var9.useRef;
                    var5 = var5.bind(var9)(var6);
                    var _closure3_slot5 = var5;
                    var9 = var10.getTargetDimensions;
                    var5 = null;
                    var11 = var5 != var2;
                    var5 = undefined;
                    if(!var11) { _fun0039_ip = 182; continue _fun0039 }
 179:
                    var5 = var2;
 182:
                    var5 = var9.bind(var10)(var5);
                    _closure3_slot6 = var5;
                    var11 = _closure1_slot4;
                    var10 = var11.useLayoutEffect;
                    var9 = new Array(3);
                    var9[0] = var12;
                    var9[1] = var2;
                    var9[2] = var5;
                    var5 = function() {
                        _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
 0:
                            var1 = _closure3_slot3;
                            var3 = null;
                            var1 = var3 != var1;
                            var4 = null;
                            if(!var1) { _fun0041_ip = 42; continue _fun0041 }
 18:
                            var1 = {};
                            var5 = _closure3_slot3;
                            var1['id'] = var5;
                            var10 = _closure3_slot6;
                            var11 = var1;
                            var5 = copyDataProperties(var11, var10);
                            var4 = var1;
 42:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 22;
                            var5 = var5[var1];
                            var1 = undefined;
                            var7 = var6.bind(var1)(var5);
                            var6 = var7.cheapWorkletShallowEqual;
                            var8 = var3 != var4;
                            var5 = undefined;
                            if(!var8) { _fun0041_ip = 85; continue _fun0041 }
 82:
                            var5 = var4;
 85:
                            var8 = _closure3_slot5;
                            var8 = var8.current;
                            var9 = var3 != var8;
                            var3 = undefined;
                            if(!var9) { _fun0041_ip = 106; continue _fun0041 }
 103:
                            var3 = var8;
 106:
                            var3 = var6.bind(var7)(var5, var3);
                            if(var3) { _fun0041_ip = 139; continue _fun0041 }
 115:
                            var3 = _closure3_slot5;
                            var3['current'] = var4;
                            var3 = _closure3_slot2;
                            var2 = var3.set;
                            var2 = var2.bind(var3)(var4);
 139:
                            return var1;
                        }
                    };
                    var5 = var10.bind(var11)(var5, var9);
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var5 = 46;
                    var5 = var10[var5];
                    var5 = var9.bind(var6)(var5);
                    var5 = var5.bind(var6)(var8, var7, var2);
                    _closure3_slot7 = var5;
                    var8 = _closure1_slot4;
                    var7 = var8.useEffect;
                    var6 = new Array(3);
                    var6[0] = var2;
                    var6[1] = var5;
                    var6[2] = var3;
                    var5 = function() {
                        _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
 0:
                            var2 = _closure3_slot3;
                            var3 = null;
                            if(!(var3 != var2)) { _fun0042_ip = 31; continue _fun0042 }
 13:
                            var2 = _closure3_slot7;
                            if(var2) { _fun0042_ip = 31; continue _fun0042 }
 20:
                            var2 = _closure3_slot4;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
 31:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var5 = var7.bind(var8)(var5, var6);
                    var6 = _closure1_slot4;
                    var5 = var6.useEffect;
                    var4 = new Array(1);
                    var4[0] = var3;
                    var1 = function() {
                        var1 = function() {
                            var3 = _closure3_slot4;
                            var2 = undefined;
                            var1 = null;
                            var1 = var3.bind(var2)(var1);
                            return var1;
                        };
                        return var1;
                    };
                    var1 = var5.bind(var6)(var1, var4);
                    var1 = {};
                    var1['setFocused'] = var3;
                    var1['manualFocusedItem'] = var2;
                    return var1;
                }
            };
            var16 = var16.bind(var4)(var17);
            var17 = var16.manualFocusedItem;
            var16 = var16.setFocused;
            var _closure2_slot29 = var16;
            var15 = var11[var15];
            var30 = var9.bind(var4)(var15);
            var26 = var30.useStateFromStores;
            var15 = _closure1_slot6;
            var16 = new Array(1);
            var16[0] = var15;
            var15 = function() {
                _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
 0:
                    var3 = _closure1_slot6;
                    var1 = var3.getConnectedActivityLocation;
                    var4 = var1.bind(var3)();
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 54;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var1 = var3.getEmbeddedActivityLocationChannelId;
                    var5 = var1.bind(var3)(var4);
                    var3 = _closure1_slot6;
                    var1 = var3.getActivityPanelMode;
                    var3 = var1.bind(var3)();
                    var1 = null;
                    var1 = var1 != var4;
                    if(!var1) { _fun0043_ip = 84; continue _fun0043 }
 73:
                    var4 = _closure2_slot0;
                    var1 = var5 !== var4;
 84:
                    if(!var1) { _fun0043_ip = 101; continue _fun0043 }
 87:
                    var2 = _closure1_slot25;
                    var2 = var2.PANEL;
                    var1 = var3 === var2;
 101:
                    return var1;
                }
            };
            var16 = var26.bind(var30)(var16, var15);
            var _closure2_slot30 = var16;
            var26 = _closure1_slot46;
            var15 = {};
            var15['isConnected'] = var13;
            var15['windowDimensions'] = var23;
            var15['contentDimensions'] = var29;
            var15['safeArea'] = var24;
            var15['layoutManager'] = var21;
            var15['items'] = var28;
            var15['pushToTalk'] = var27;
            var15 = var26.bind(var4)(var15);
            var28 = _closure1_slot4;
            var27 = var28.useLayoutEffect;
            var26 = new Array(2);
            var26[0] = var3;
            var26[1] = var16;
            var15 = function() {
                _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
 0:
                    var4 = _closure2_slot26;
                    var2 = _closure1_slot15;
                    var2 = var2.PANEL;
                    var2 = var4 === var2;
                    if(!var2) { _fun0044_ip = 31; continue _fun0044 }
 27:
                    var2 = _closure2_slot30;
 31:
                    if(!var2) { _fun0044_ip = 77; continue _fun0044 }
 34:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 28;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.updateActivityPanelMode;
                    var1 = _closure1_slot25;
                    var1 = var1.PIP;
                    var1 = var2.bind(var3)(var1);
 77:
                    var1 = undefined;
                    return var1;
                }
            };
            var15 = var27.bind(var28)(var15, var26);
            var26 = {};
            var26['mode'] = var10;
            var26['controlsSpecs'] = var25;
            var15 = function useKeyboardDismissHandler(arg1) {
                var1 = arg1;
                var12 = var1.mode;
                var _closure3_slot0 = var12;
                var11 = var1.controlsSpecs;
                var _closure3_slot1 = var11;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var8 = 21;
                var3 = var10[var8];
                var1 = undefined;
                var5 = var9.bind(var1)(var3);
                var4 = var5.useAnimatedReaction;
                var3 = function a() {
                    var3 = _closure3_slot0;
                    var1 = var3.get;
                    var3 = var1.bind(var3)();
                    var1 = new Array(2);
                    var1[0] = var3;
                    var3 = _closure3_slot1;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var2 = var2.mode;
                    var1[1] = var2;
                    return var1;
                };
                var7 = {};
                var7['mode'] = var12;
                var7['controlsSpecs'] = var11;
                var3['__closure'] = var7;
                var7 = 10791754460802.0;
                var3['__workletHash'] = var7;
                var7 = _closure1_slot42;
                var3['__initData'] = var7;
                var2 = function n(arg1, arg2) {
                    _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
 0:
                        var5 = arg1;
                        var7 = arg2;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 22;
                        var3 = var3[var1];
                        var1 = undefined;
                        var8 = var4.bind(var1)(var3);
                        var4 = var8.cheapWorkletArrayShallowEqual;
                        var6 = null;
                        var9 = var6 != var7;
                        var3 = undefined;
                        if(!var9) { _fun0045_ip = 51; continue _fun0045 }
 48:
                        var3 = var7;
 51:
                        var3 = var4.bind(var8)(var5, var3);
                        if(var3) { _fun0045_ip = 225; continue _fun0045 }
 63:
                        var4 = _closure1_slot3;
                        var3 = 2;
                        var4 = var4.bind(var1)(var5, var3);
                        var5 = 0;
                        var8 = var4[var5];
                        var3 = 1;
                        var4 = var4[var3];
                        var3 = _closure1_slot20;
                        var3 = var3.DRAWER;
                        var3 = var4 !== var3;
                        if(var3) { _fun0045_ip = 120; continue _fun0045 }
 106:
                        var4 = _closure1_slot15;
                        var4 = var4.PANEL;
                        var3 = var8 !== var4;
 120:
                        if(var3) { _fun0045_ip = 170; continue _fun0045 }
 123:
                        var4 = _closure1_slot15;
                        var4 = var4.PANEL;
                        var4 = var8 === var4;
                        if(!var4) { _fun0045_ip = 167; continue _fun0045 }
 140:
                        var8 = var6 == var7;
                        var6 = undefined;
                        if(var8) { _fun0045_ip = 153; continue _fun0045 }
 149:
                        var6 = var7[var5];
 153:
                        var5 = _closure1_slot15;
                        var5 = var5.PANEL;
                        var4 = var6 !== var5;
 167:
                        var3 = var4;
 170:
                        if(!var3) { _fun0045_ip = 225; continue _fun0045 }
 173:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 21;
                        var2 = var6[var2];
                        var4 = var5.bind(var1)(var2);
                        var3 = var4.runOnJS;
                        var2 = 50;
                        var2 = var6[var2];
                        var2 = var5.bind(var1)(var2);
                        var2 = var2.dismissKeyboard;
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.bind(var1)();
 225:
                        return var1;
                    }
                };
                var7 = {};
                var11 = 22;
                var11 = var10[var11];
                var11 = var9.bind(var1)(var11);
                var11 = var11.cheapWorkletArrayShallowEqual;
                var7['cheapWorkletArrayShallowEqual'] = var11;
                var11 = _closure1_slot20;
                var7['VoicePanelControlsModes'] = var11;
                var11 = _closure1_slot15;
                var7['VoicePanelModes'] = var11;
                var8 = var10[var8];
                var8 = var9.bind(var1)(var8);
                var8 = var8.runOnJS;
                var7['runOnJS'] = var8;
                var8 = 50;
                var8 = var10[var8];
                var8 = var9.bind(var1)(var8);
                var8 = var8.dismissKeyboard;
                var7['dismissKeyboard'] = var8;
                var2['__closure'] = var7;
                var7 = 12319127684124.0;
                var2['__workletHash'] = var7;
                var6 = _closure1_slot43;
                var2['__initData'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var15 = var15.bind(var4)(var26);
            var15 = {};
            var15['channelId'] = var14;
            var15['transitionState'] = var22;
            var15['transitionCleanUp'] = var8;
            var15['connected'] = var19;
            var15['mode'] = var10;
            var15['setMode'] = var18;
            var8 = function useTransitionState(arg1) {
                var1 = arg1;
                var3 = var1.channelId;
                var _closure3_slot0 = var3;
                var16 = var1.transitionState;
                var _closure3_slot1 = var16;
                var4 = var1.transitionCleanUp;
                var _closure3_slot2 = var4;
                var14 = var1.connected;
                var _closure3_slot3 = var14;
                var13 = var1.mode;
                var _closure3_slot4 = var13;
                var8 = var1.setMode;
                var _closure3_slot5 = var8;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var9 = 21;
                var5 = var11[var9];
                var1 = undefined;
                var7 = var10.bind(var1)(var5);
                var5 = var7.useSharedValue;
                var12 = var5.bind(var7)(var16);
                var _closure3_slot6 = var12;
                var15 = _closure1_slot4;
                var7 = var15.useLayoutEffect;
                var5 = new Array(4);
                var5[0] = var16;
                var5[1] = var12;
                var5[2] = var4;
                var5[3] = var3;
                var4 = function() {
                    _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
 0:
                        var4 = _closure3_slot6;
                        var3 = var4.set;
                        var6 = _closure3_slot1;
                        var3 = var3.bind(var4)(var6);
                        var7 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 45;
                        var4 = var5[var4];
                        var5 = undefined;
                        var4 = var7.bind(var5)(var4);
                        var4 = var4.TransitionStates;
                        var4 = var4.YEETED;
                        if(!(var6 !== var4)) { _fun0046_ip = 66; continue _fun0046 }
 64:
                        return var5;
 66:
                        var4 = _closure1_slot8;
                        var3 = var4.getState;
                        var7 = var3.bind(var4)();
                        var6 = var7.requestFreezeLock;
                        var4 = {};
                        var3 = false;
                        var4['lockEnabled'] = var3;
                        var10 = _closure3_slot0;
                        var3 = global;
                        var8 = var3.HermesInternal;
                        var9 = var8.concat;
                        var8 = 'voice-panel-freeze-';
                        var8 = var9.bind(var8)(var10);
                        var4['key'] = var8;
                        var4 = var6.bind(var7)(var4);
                        var4 = var3.setTimeout;
                        var3 = _closure3_slot2;
                        var2 = 500;
                        var2 = var4.bind(var5)(var3, var2);
                        var _closure4_slot0 = var2;
                        var1 = function() {
                            var1 = global;
                            var3 = var1.clearTimeout;
                            var2 = _closure4_slot0;
                            var1 = undefined;
                            var1 = var3.bind(var1)(var2);
                            return var1;
                        };
                        return var1;
                    }
                };
                var4 = var7.bind(var15)(var4, var5);
                var7 = _closure1_slot4;
                var5 = var7.useLayoutEffect;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() {
                    var1 = function() {
                        var2 = _closure1_slot8;
                        var1 = var2.getState;
                        var3 = var1.bind(var2)();
                        var2 = var3.requestFreezeLock;
                        var1 = {};
                        var4 = false;
                        var1['lockEnabled'] = var4;
                        var6 = _closure3_slot0;
                        var4 = global;
                        var4 = var4.HermesInternal;
                        var5 = var4.concat;
                        var4 = 'voice-panel-freeze-';
                        var4 = var5.bind(var4)(var6);
                        var1['key'] = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = undefined;
                        return var1;
                    };
                    return var1;
                };
                var3 = var5.bind(var7)(var3, var4);
                var3 = var11[var9];
                var5 = var10.bind(var1)(var3);
                var4 = var5.useAnimatedReaction;
                var3 = function S() {
                    var3 = _closure3_slot3;
                    var1 = var3.get;
                    var3 = var1.bind(var3)();
                    var1 = new Array(3);
                    var1[0] = var3;
                    var4 = _closure3_slot4;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var1[1] = var3;
                    var3 = _closure3_slot6;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var1[2] = var2;
                    return var1;
                };
                var7 = {};
                var7['connected'] = var14;
                var7['mode'] = var13;
                var7['sharedTransitionState'] = var12;
                var3['__closure'] = var7;
                var7 = 7656858903152.0;
                var3['__workletHash'] = var7;
                var7 = _closure1_slot40;
                var3['__initData'] = var7;
                var2 = function u(arg1, arg2) {
                    _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
 0:
                        var6 = arg1;
                        var8 = arg2;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 22;
                        var3 = var3[var1];
                        var1 = undefined;
                        var7 = var4.bind(var1)(var3);
                        var4 = var7.cheapWorkletArrayShallowEqual;
                        var5 = null;
                        var9 = var5 != var8;
                        var3 = undefined;
                        if(!var9) { _fun0047_ip = 51; continue _fun0047 }
 48:
                        var3 = var8;
 51:
                        var3 = var4.bind(var7)(var6, var3);
                        if(var3) { _fun0047_ip = 447; continue _fun0047 }
 63:
                        var4 = _closure1_slot3;
                        var3 = 3;
                        var10 = var4.bind(var1)(var6, var3);
                        var9 = 0;
                        var3 = var10[var9];
                        var7 = 1;
                        var4 = var10[var7];
                        var6 = 2;
                        var10 = var10[var6];
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var6 = 45;
                        var6 = var12[var6];
                        var6 = var11.bind(var1)(var6);
                        var6 = var6.TransitionStates;
                        var6 = var6.YEETED;
                        if(!(var10 !== var6)) { _fun0047_ip = 381; continue _fun0047 }
 135:
                        var6 = _closure1_slot15;
                        var6 = var6.DISMISSED;
                        if(!(var4 !== var6)) { _fun0047_ip = 254; continue _fun0047 }
 149:
                        var6 = var3;
                        if(var6) { _fun0047_ip = 174; continue _fun0047 }
 155:
                        var11 = var5 == var8;
                        var10 = undefined;
                        if(var11) { _fun0047_ip = 168; continue _fun0047 }
 164:
                        var10 = var8[var9];
 168:
                        var9 = true;
                        var6 = var9 !== var10;
 174:
                        if(var6) { _fun0047_ip = 191; continue _fun0047 }
 177:
                        var9 = _closure1_slot15;
                        var9 = var9.PIP;
                        var6 = var4 !== var9;
 191:
                        if(var6) { _fun0047_ip = 447; continue _fun0047 }
 197:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var6 = 21;
                        var6 = var10[var6];
                        var10 = var9.bind(var1)(var6);
                        var9 = var10.runOnJS;
                        var6 = _closure3_slot5;
                        var9 = var9.bind(var10)(var6);
                        var6 = _closure1_slot15;
                        var6 = var6.PANEL;
                        var6 = var9.bind(var1)(var6);
                        _fun0047_ip = 447; continue _fun0047;
 254:
                        var9 = var5 == var8;
                        var6 = undefined;
                        if(var9) { _fun0047_ip = 267; continue _fun0047 }
 263:
                        var6 = var8[var7];
 267:
                        if(!(var5 == var6)) { _fun0047_ip = 281; continue _fun0047 }
 271:
                        var5 = _closure1_slot15;
                        var6 = var5.PANEL;
 281:
                        var5 = _closure1_slot15;
                        var5 = var5.PANEL;
                        if(!(var5 !== var6)) { _fun0047_ip = 321; continue _fun0047 }
 295:
                        var5 = _closure1_slot15;
                        var5 = var5.PIP;
                        if(!(var5 !== var6)) { _fun0047_ip = 321; continue _fun0047 }
 309:
                        var5 = _closure1_slot15;
                        var5 = var5.PANEL;
                        _fun0047_ip = 337; continue _fun0047;
 321:
                        var5 = var6;
                        if(var3) { _fun0047_ip = 337; continue _fun0047 }
 327:
                        var3 = _closure1_slot15;
                        var5 = var3.PANEL;
 337:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 21;
                        var3 = var7[var3];
                        var7 = var6.bind(var1)(var3);
                        var6 = var7.runOnJS;
                        var3 = _closure3_slot5;
                        var3 = var6.bind(var7)(var3);
                        var3 = var3.bind(var1)(var5);
                        _fun0047_ip = 447; continue _fun0047;
 381:
                        var3 = _closure1_slot15;
                        var3 = var3.DISMISSED;
                        if(!(var4 !== var3)) { _fun0047_ip = 447; continue _fun0047 }
 395:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 21;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.runOnJS;
                        var3 = _closure3_slot5;
                        var3 = var4.bind(var5)(var3);
                        var2 = _closure1_slot15;
                        var2 = var2.DISMISSED;
                        var2 = var3.bind(var1)(var2);
 447:
                        return var1;
                    }
                };
                var7 = {};
                var12 = 22;
                var12 = var11[var12];
                var12 = var10.bind(var1)(var12);
                var12 = var12.cheapWorkletArrayShallowEqual;
                var7['cheapWorkletArrayShallowEqual'] = var12;
                var12 = 45;
                var12 = var11[var12];
                var12 = var10.bind(var1)(var12);
                var12 = var12.TransitionStates;
                var7['TransitionStates'] = var12;
                var12 = _closure1_slot15;
                var7['VoicePanelModes'] = var12;
                var9 = var11[var9];
                var9 = var10.bind(var1)(var9);
                var9 = var9.runOnJS;
                var7['runOnJS'] = var9;
                var7['setMode'] = var8;
                var2['__closure'] = var7;
                var7 = 5740547237317.0;
                var2['__workletHash'] = var7;
                var6 = _closure1_slot41;
                var2['__initData'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var8 = var8.bind(var4)(var15);
            var8 = 55;
            var8 = var11[var8];
            var15 = var9.bind(var4)(var8);
            var11 = var15.useControllerPIPState;
            var8 = {};
            var8['channelId'] = var14;
            var8['connected'] = var13;
            var9 = null;
            var26 = var9 != var17;
            var22 = undefined;
            if(!var26) { _fun0017_ip = 868; continue _fun0017 }
 865:
            var22 = var17;
 868:
            var8['focusedId'] = var22;
            var8['layoutManager'] = var21;
            var8['mode'] = var3;
            var8 = var11.bind(var15)(var8);
            var15 = _closure1_slot1;
            var11 = _closure1_slot2;
            var21 = 56;
            var21 = var11[var21];
            var22 = var15.bind(var4)(var21);
            var21 = {};
            var21['mode'] = var10;
            var21['controlsSpecs'] = var25;
            var21['safeArea'] = var24;
            var21['windowDimensions'] = var23;
            var21 = var22.bind(var4)(var21);
            _closure2_slot31 = var21;
            var22 = {};
            var22['channelId'] = var14;
            var22['selectedMode'] = var3;
            var22['manualFocusedItem'] = var17;
            var21 = function useSelectedParticipantEffects(arg1) {
                var2 = arg1;
                var3 = var2.channelId;
                var _closure3_slot0 = var3;
                var8 = var2.selectedMode;
                var _closure3_slot1 = var8;
                var7 = var2.manualFocusedItem;
                var6 = _closure1_slot4;
                var5 = var6.useRef;
                var4 = null;
                var4 = var5.bind(var6)(var4);
                var _closure3_slot2 = var4;
                var6 = _closure1_slot4;
                var5 = var6.useLayoutEffect;
                var4 = new Array(3);
                var4[0] = var8;
                var4[1] = var7;
                var4[2] = var3;
                var3 = function() {
                    _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
 0:
                        var3 = _closure1_slot13;
                        var1 = var3.getRTCConnection;
                        var3 = var1.bind(var3)();
                        var1 = null;
                        var1 = var1 != var3;
                        if(!var1) { _fun0048_ip = 51; continue _fun0048 }
 26:
                        var5 = _closure1_slot13;
                        var4 = var5.getChannelId;
                        var5 = var4.bind(var5)();
                        var4 = _closure3_slot0;
                        var1 = var5 === var4;
 51:
                        if(!var1) { _fun0048_ip = 173; continue _fun0048 }
 54:
                        var1 = _closure3_slot2;
                        var5 = var1.current;
                        var1 = _closure1_slot15;
                        var1 = var1.PIP;
                        if(!(var5 !== var1)) { _fun0048_ip = 113; continue _fun0048 }
 80:
                        var5 = _closure3_slot1;
                        var1 = _closure1_slot15;
                        var1 = var1.PIP;
                        if(!(var5 === var1)) { _fun0048_ip = 113; continue _fun0048 }
 98:
                        var5 = var3.setPipOpen;
                        var1 = true;
                        var1 = var5.bind(var3)(var1);
                        _fun0048_ip = 173; continue _fun0048;
 113:
                        var1 = _closure3_slot2;
                        var5 = var1.current;
                        var1 = _closure1_slot15;
                        var1 = var1.PIP;
                        var1 = var5 === var1;
                        if(!var1) { _fun0048_ip = 157; continue _fun0048 }
 139:
                        var4 = _closure3_slot1;
                        var2 = _closure1_slot15;
                        var2 = var2.PIP;
                        var1 = var4 !== var2;
 157:
                        if(!var1) { _fun0048_ip = 173; continue _fun0048 }
 160:
                        var2 = var3.setPipOpen;
                        var1 = false;
                        var1 = var2.bind(var3)(var1);
 173:
                        var1 = undefined;
                        return var1;
                    }
                };
                var3 = var5.bind(var6)(var3, var4);
                var3 = _closure1_slot4;
                var2 = var3.useLayoutEffect;
                var1 = function() {
                    var2 = _closure3_slot2;
                    var1 = _closure3_slot1;
                    var2['current'] = var1;
                    var1 = undefined;
                    return var1;
                };
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var21 = var21.bind(var4)(var22);
            var22 = {};
            var22['channelId'] = var14;
            var22['focused'] = var20;
            var22['pipState'] = var8;
            var22['manuallyFocusedId'] = var17;
            var21 = function useHandleThermalState(arg1) {
                var3 = arg1;
                var1 = var3.channelId;
                var _closure3_slot0 = var1;
                var13 = var3.focused;
                var _closure3_slot1 = var13;
                var12 = var3.pipState;
                var _closure3_slot2 = var12;
                var7 = var3.manuallyFocusedId;
                var _closure3_slot3 = var7;
                var8 = _closure1_slot4;
                var5 = var8.useCallback;
                var4 = new Array(1);
                var4[0] = var1;
                var3 = function(arg1) {
                    _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
 0:
                        var1 = arg1;
                        var10 = var1.focusedId;
                        var11 = var1.pipParticipantId;
                        var3 = _closure1_slot10;
                        var1 = var3.shouldReactToSeriousThermalStateWhenActivityFocused;
                        var4 = var1.bind(var3)();
                        var1 = var3.consumedRequestToRespondToSeriousThermalState;
                        var3 = var1.bind(var3)();
                        var9 = null;
                        var6 = var9 != var10;
                        if(!var6) { _fun0049_ip = 87; continue _fun0049 }
 53:
                        var7 = _closure1_slot26;
                        var8 = _closure1_slot7;
                        var5 = var8.getParticipant;
                        var1 = _closure3_slot0;
                        var5 = var5.bind(var8)(var1, var10);
                        var1 = undefined;
                        var6 = var7.bind(var1)(var5);
 87:
                        var5 = var9 != var11;
                        var1 = undefined;
                        var7 = undefined;
                        if(!var5) { _fun0049_ip = 121; continue _fun0049 }
 98:
                        var10 = _closure1_slot7;
                        var8 = var10.getParticipant;
                        var5 = _closure3_slot0;
                        var7 = var8.bind(var10)(var5, var11);
 121:
                        var8 = var9 == var7;
                        var5 = undefined;
                        if(var8) { _fun0049_ip = 136; continue _fun0049 }
 130:
                        var5 = var7.streamId;
 136:
                        var5 = var9 != var5;
                        if(!var5) { _fun0049_ip = 179; continue _fun0049 }
 143:
                        var10 = var9 == var7;
                        var8 = undefined;
                        if(var10) { _fun0049_ip = 173; continue _fun0049 }
 152:
                        var7 = var7.voiceState;
                        var9 = var9 == var7;
                        var8 = undefined;
                        if(var9) { _fun0049_ip = 173; continue _fun0049 }
 167:
                        var8 = var7.selfVideo;
 173:
                        var7 = true;
                        var5 = var7 === var8;
 179:
                        if(!var6) { _fun0049_ip = 436; continue _fun0049 }
 185:
                        if(!var4) { _fun0049_ip = 436; continue _fun0049 }
 191:
                        if(var3) { _fun0049_ip = 436; continue _fun0049 }
 197:
                        var4 = _closure1_slot12;
                        var3 = var4.isVideoEnabled;
                        var3 = var3.bind(var4)();
                        var4 = var3;
                        if(var4) { _fun0049_ip = 220; continue _fun0049 }
 217:
                        var4 = var5;
 220:
                        if(!var4) { _fun0049_ip = 370; continue _fun0049 }
 226:
                        var9 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var4 = 23;
                        var4 = var6[var4];
                        var8 = var9.bind(var1)(var4);
                        var7 = var8.open;
                        var4 = {'key': 'EMBEDDED_ACTIVITIES_VIDEO_DISABLED_FOR_THERMAL_STATE', 'icon': null, 'content': null, 'disableAnimations': true, 'toastDurationMs': 3000};
                        var5 = 24;
                        var5 = var6[var5];
                        var5 = var9.bind(var1)(var5);
                        var4['icon'] = var5;
                        var5 = _closure1_slot0;
                        var9 = 25;
                        var10 = var6[var9];
                        var10 = var5.bind(var1)(var10);
                        var11 = var10.intl;
                        var10 = var11.string;
                        var9 = var6[var9];
                        var9 = var5.bind(var1)(var9);
                        var9 = var9.t;
                        var9 = var9.O2IlPT;
                        var9 = var10.bind(var11)(var9);
                        var4['content'] = var9;
                        var4 = var7.bind(var8)(var4);
                        var4 = 26;
                        var4 = var6[var4];
                        var5 = var5.bind(var1)(var4);
                        var4 = var5.trackActivityThermalStateNoticeShown;
                        var4 = var4.bind(var5)();
 370:
                        if(!var3) { _fun0049_ip = 406; continue _fun0049 }
 373:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 27;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.setVideoEnabled;
                        var3 = false;
                        var3 = var4.bind(var5)(var3);
 406:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 28;
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.consumeRequestToReactToSeriousThermalState;
                        var2 = var2.bind(var3)();
 436:
                        return var1;
                    }
                };
                var8 = var5.bind(var8)(var3, var4);
                var _closure3_slot4 = var8;
                var5 = _closure1_slot4;
                var4 = var5.useEffect;
                var3 = new Array(4);
                var3[0] = var7;
                var3[1] = var12;
                var3[2] = var8;
                var3[3] = var1;
                var1 = function() {
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 29;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var5 = var3.BatchedStoreListener;
                    var3 = _closure1_slot10;
                    var4 = new Array(2);
                    var4[0] = var3;
                    var2 = _closure1_slot7;
                    var4[1] = var2;
                    var2 = var5.prototype;
                    var3 = Object.create(var2, {constructor: {value: var5}});
                    var7 = function() {
                        _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
 0:
                            var3 = _closure3_slot4;
                            var2 = {};
                            var5 = _closure3_slot3;
                            var1 = null;
                            var6 = var1 != var5;
                            var1 = undefined;
                            var5 = undefined;
                            if(!var6) { _fun0050_ip = 30; continue _fun0050 }
 26:
                            var5 = _closure3_slot3;
 30:
                            var2['focusedId'] = var5;
                            var4 = _closure3_slot2;
                            var4 = var4.id;
                            var2['pipParticipantId'] = var4;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        }
                    };
                    var9 = var3;
                    var8 = var4;
                    var2 = new var9[var5](var8, var7, var6);
                    var4 = var2 instanceof Object ? var2 : var3;
                    var _closure4_slot0 = var4;
                    var3 = var4.attach;
                    var6 = _closure3_slot0;
                    var2 = global;
                    var2 = var2.HermesInternal;
                    var5 = var2.concat;
                    var2 = 'thermal-state-reactions-';
                    var2 = var5.bind(var2)(var6);
                    var2 = var3.bind(var4)(var2);
                    var1 = function() {
                        var2 = _closure4_slot0;
                        var1 = var2.detach;
                        var1 = var1.bind(var2)();
                        return var1;
                    };
                    return var1;
                };
                var1 = var4.bind(var5)(var1, var3);
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var9 = 21;
                var3 = var11[var9];
                var1 = undefined;
                var5 = var10.bind(var1)(var3);
                var4 = var5.useAnimatedReaction;
                var3 = function S() {
                    _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
 0:
                        var3 = _closure3_slot1;
                        var1 = var3.get;
                        var1 = var1.bind(var3)();
                        var3 = null;
                        var4 = var3 == var1;
                        var3 = undefined;
                        if(var4) { _fun0051_ip = 32; continue _fun0051 }
 27:
                        var3 = var1.id;
 32:
                        var1 = new Array(2);
                        var1[0] = var3;
                        var2 = _closure3_slot2;
                        var2 = var2.id;
                        var1[1] = var2;
                        return var1;
                    }
                };
                var7 = {};
                var7['focused'] = var13;
                var7['pipState'] = var12;
                var3['__closure'] = var7;
                var7 = 94735519164.0;
                var3['__workletHash'] = var7;
                var7 = _closure1_slot31;
                var3['__initData'] = var7;
                var2 = function c(arg1, arg2) {
                    _fun0052: for(var _fun0052_ip = 0; ; ) switch(_fun0052_ip) {
 0:
                        var5 = arg1;
                        var7 = arg2;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 22;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var3);
                        var4 = var6.cheapWorkletArrayShallowEqual;
                        var3 = null;
                        var8 = var3 != var7;
                        var3 = undefined;
                        if(!var8) { _fun0052_ip = 51; continue _fun0052 }
 48:
                        var3 = var7;
 51:
                        var3 = var4.bind(var6)(var5, var3);
                        if(var3) { _fun0052_ip = 140; continue _fun0052 }
 60:
                        var4 = _closure1_slot3;
                        var3 = 2;
                        var4 = var4.bind(var1)(var5, var3);
                        var3 = 0;
                        var5 = var4[var3];
                        var3 = 1;
                        var4 = var4[var3];
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 21;
                        var2 = var6[var2];
                        var6 = var3.bind(var1)(var2);
                        var3 = var6.runOnJS;
                        var2 = _closure3_slot4;
                        var3 = var3.bind(var6)(var2);
                        var2 = {};
                        var2['focusedId'] = var5;
                        var2['pipParticipantId'] = var4;
                        var2 = var3.bind(var1)(var2);
 140:
                        return var1;
                    }
                };
                var7 = {};
                var12 = 22;
                var12 = var11[var12];
                var12 = var10.bind(var1)(var12);
                var12 = var12.cheapWorkletArrayShallowEqual;
                var7['cheapWorkletArrayShallowEqual'] = var12;
                var9 = var11[var9];
                var9 = var10.bind(var1)(var9);
                var9 = var9.runOnJS;
                var7['runOnJS'] = var9;
                var7['handleStateUpdates'] = var8;
                var2['__closure'] = var7;
                var7 = 15246095289306.0;
                var2['__workletHash'] = var7;
                var6 = _closure1_slot32;
                var2['__initData'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var21 = var21.bind(var4)(var22);
            var21 = {};
            var21['channelId'] = var14;
            var21['focused'] = var20;
            var21['mode'] = var10;
            var21['connected'] = var19;
            var20 = function useActivityFocused(arg1) {
                var3 = arg1;
                var1 = var3.channelId;
                var _closure3_slot0 = var1;
                var14 = var3.focused;
                var _closure3_slot1 = var14;
                var13 = var3.mode;
                var _closure3_slot2 = var13;
                var12 = var3.connected;
                var _closure3_slot3 = var12;
                var5 = _closure1_slot4;
                var4 = var5.useCallback;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function(arg1) {
                    _fun0053: for(var _fun0053_ip = 0; ; ) switch(_fun0053_ip) {
 0:
                        var1 = arg1;
                        var7 = var1.focusedParticipantId;
                        var3 = var1.voicePanelMode;
                        var1 = var1.connectedValue;
                        if(!var1) { _fun0053_ip = 41; continue _fun0053 }
 24:
                        var2 = _closure1_slot15;
                        var2 = var2.PANEL;
                        var1 = var3 === var2;
 41:
                        var2 = null;
                        var3 = var2 != var7;
                        if(!var3) { _fun0053_ip = 87; continue _fun0053 }
 50:
                        var5 = _closure1_slot26;
                        var6 = _closure1_slot7;
                        var4 = var6.getParticipant;
                        var2 = _closure3_slot0;
                        var4 = var4.bind(var6)(var2, var7);
                        var2 = undefined;
                        var3 = var5.bind(var2)(var4);
 87:
                        if(!var3) { _fun0053_ip = 93; continue _fun0053 }
 90:
                        var3 = var1;
 93:
                        var2 = _closure1_slot14;
                        var1 = var2.getState;
                        var2 = var1.bind(var2)();
                        var1 = var2.setIsActivityFocused;
                        var1 = var1.bind(var2)(var3);
                        var1 = undefined;
                        return var1;
                    }
                };
                var8 = var4.bind(var5)(var1, var3);
                var _closure3_slot4 = var8;
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var9 = 21;
                var3 = var11[var9];
                var1 = undefined;
                var5 = var10.bind(var1)(var3);
                var4 = var5.useAnimatedReaction;
                var3 = function c() {
                    _fun0054: for(var _fun0054_ip = 0; ; ) switch(_fun0054_ip) {
 0:
                        var3 = _closure3_slot1;
                        var1 = var3.get;
                        var1 = var1.bind(var3)();
                        var3 = null;
                        var4 = var3 == var1;
                        var3 = undefined;
                        if(var4) { _fun0054_ip = 32; continue _fun0054 }
 27:
                        var3 = var1.id;
 32:
                        var1 = new Array(3);
                        var1[0] = var3;
                        var4 = _closure3_slot2;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var1[1] = var3;
                        var3 = _closure3_slot3;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var1[2] = var2;
                        return var1;
                    }
                };
                var7 = {};
                var7['focused'] = var14;
                var7['mode'] = var13;
                var7['connected'] = var12;
                var3['__closure'] = var7;
                var7 = 16641161683997.0;
                var3['__workletHash'] = var7;
                var7 = _closure1_slot29;
                var3['__initData'] = var7;
                var2 = function l(arg1, arg2) {
                    _fun0055: for(var _fun0055_ip = 0; ; ) switch(_fun0055_ip) {
 0:
                        var5 = arg1;
                        var7 = arg2;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 22;
                        var3 = var3[var1];
                        var1 = undefined;
                        var6 = var4.bind(var1)(var3);
                        var4 = var6.cheapWorkletArrayShallowEqual;
                        var3 = null;
                        var8 = var3 != var7;
                        var3 = undefined;
                        if(!var8) { _fun0055_ip = 51; continue _fun0055 }
 48:
                        var3 = var7;
 51:
                        var3 = var4.bind(var6)(var5, var3);
                        if(var3) { _fun0055_ip = 152; continue _fun0055 }
 60:
                        var4 = _closure1_slot3;
                        var3 = 3;
                        var4 = var4.bind(var1)(var5, var3);
                        var3 = 0;
                        var6 = var4[var3];
                        var3 = 1;
                        var5 = var4[var3];
                        var3 = 2;
                        var4 = var4[var3];
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var2 = 21;
                        var2 = var7[var2];
                        var7 = var3.bind(var1)(var2);
                        var3 = var7.runOnJS;
                        var2 = _closure3_slot4;
                        var3 = var3.bind(var7)(var2);
                        var2 = {};
                        var2['focusedParticipantId'] = var6;
                        var2['voicePanelMode'] = var5;
                        var2['connectedValue'] = var4;
                        var2 = var3.bind(var1)(var2);
 152:
                        return var1;
                    }
                };
                var7 = {};
                var12 = 22;
                var12 = var11[var12];
                var12 = var10.bind(var1)(var12);
                var12 = var12.cheapWorkletArrayShallowEqual;
                var7['cheapWorkletArrayShallowEqual'] = var12;
                var9 = var11[var9];
                var9 = var10.bind(var1)(var9);
                var9 = var9.runOnJS;
                var7['runOnJS'] = var9;
                var7['handleAnimatedReaction'] = var8;
                var2['__closure'] = var7;
                var7 = 15290799116693.0;
                var2['__workletHash'] = var7;
                var6 = _closure1_slot30;
                var2['__initData'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var20 = var20.bind(var4)(var21);
            var20 = {};
            var20['setControlsMode'] = var12;
            var12 = function useActivityConnected(arg1) {
                var1 = arg1;
                var6 = var1.setControlsMode;
                var _closure3_slot0 = var6;
                var5 = _closure1_slot4;
                var4 = var5.useCallback;
                var3 = new Array(1);
                var3[0] = var6;
                var2 = function() {
                    var3 = _closure3_slot0;
                    var2 = {};
                    var1 = _closure1_slot20;
                    var1 = var1.FLOATING_DEFAULT;
                    var2['mode'] = var1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var4 = var4.bind(var5)(var2, var3);
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 20;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = {};
                var2['onTransition'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var12 = var12.bind(var4)(var20);
            var12 = 57;
            var12 = var11[var12];
            var12 = var15.bind(var4)(var12);
            var35 = undefined;
            var34 = var14;
            var33 = var10;
            var32 = var18;
            var31 = var19;
            var12 = var35[var12](var34, var33, var32, var31, var30);
            var12 = 58;
            var12 = var11[var12];
            var12 = var15.bind(var4)(var12);
            var12 = var12.bind(var4)();
            var15 = _closure1_slot47;
            var12 = {};
            var12['isConnected'] = var13;
            var12['selectedMode'] = var3;
            var12['manualFocusedItem'] = var17;
            var12['isNonVoiceEmbeddedActivityInPanelMode'] = var16;
            var12 = var15.bind(var4)(var12);
            var12 = {};
            var12['channelId'] = var14;
            var12['isConnected'] = var13;
            var12['selectedMode'] = var3;
            var3 = function useVoicePanelAnalytics(arg1) {
                var2 = arg1;
                var6 = var2.channelId;
                var _closure3_slot0 = var6;
                var5 = var2.isConnected;
                var _closure3_slot1 = var5;
                var7 = var2.selectedMode;
                var _closure3_slot2 = var7;
                var4 = _closure1_slot4;
                var3 = var4.useEffect;
                var2 = new Array(3);
                var2[0] = var7;
                var2[1] = var6;
                var2[2] = var5;
                var1 = function() {
                    _fun0056: for(var _fun0056_ip = 0; ; ) switch(_fun0056_ip) {
 0:
                        var2 = _closure3_slot2;
                        var1 = _closure1_slot15;
                        var1 = var1.DISMISSED;
                        var1 = var2 !== var1;
                        if(!var1) { _fun0056_ip = 31; continue _fun0056 }
 27:
                        var1 = _closure3_slot1;
 31:
                        if(!var1) { _fun0056_ip = 135; continue _fun0056 }
 34:
                        var2 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var1 = 48;
                        var1 = var9[var1];
                        var8 = undefined;
                        var4 = var2.bind(var8)(var1);
                        var3 = var4.track;
                        var1 = _closure1_slot21;
                        var2 = var1.VIDEO_LAYOUT_TOGGLED;
                        var1 = {};
                        var10 = _closure1_slot16;
                        var7 = _closure3_slot2;
                        var7 = var10.bind(var8)(var7);
                        var1['video_layout'] = var7;
                        var7 = _closure1_slot0;
                        var6 = 49;
                        var6 = var9[var6];
                        var7 = var7.bind(var8)(var6);
                        var6 = var7.collectVoiceAnalyticsMetadata;
                        var5 = _closure3_slot0;
                        var11 = var6.bind(var7)(var5);
                        var12 = var1;
                        var5 = copyDataProperties(var12, var11);
                        var1 = var3.bind(var4)(var2, var1);
 135:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                var1 = undefined;
                return var1;
            };
            var3 = var3.bind(var4)(var12);
            var3 = function useShowFloatingCTA(arg1) {
                var2 = arg1;
                var _closure3_slot0 = var2;
                var6 = _closure1_slot4;
                var5 = var6.useRef;
                var3 = -1;
                var3 = var5.bind(var6)(var3);
                var _closure3_slot1 = var3;
                var6 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 21;
                var5 = var5[var3];
                var3 = undefined;
                var6 = var6.bind(var3)(var5);
                var5 = var6.useSharedValue;
                var3 = null;
                var3 = var5.bind(var6)(var3);
                var _closure3_slot2 = var3;
                var7 = _closure1_slot4;
                var6 = var7.useCallback;
                var5 = new Array(2);
                var5[0] = var2;
                var5[1] = var3;
                var2 = function(arg1) {
                    _fun0057: for(var _fun0057_ip = 0; ; ) switch(_fun0057_ip) {
 0:
                        var4 = arg1;
                        var3 = _closure3_slot0;
                        var1 = var3.get;
                        var5 = var1.bind(var3)();
                        var3 = _closure1_slot15;
                        var3 = var3.PANEL;
                        if(!(var5 === var3)) { _fun0057_ip = 133; continue _fun0057 }
 36:
                        var5 = _closure3_slot2;
                        var3 = var5.set;
                        var3 = var3.bind(var5)(var4);
                        var3 = null;
                        if(!(var3 != var4)) { _fun0057_ip = 133; continue _fun0057 }
 56:
                        var3 = global;
                        var6 = var3.clearTimeout;
                        var2 = _closure3_slot1;
                        var4 = var2.current;
                        var5 = undefined;
                        var4 = var6.bind(var5)(var4);
                        var4 = var3.setTimeout;
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var1 = 30;
                        var1 = var6[var1];
                        var1 = var3.bind(var5)(var1);
                        var3 = var1.FLOATING_CTA_HIDE_TIMEOUT;
                        var1 = function() {
                            var3 = _closure3_slot2;
                            var2 = var3.set;
                            var1 = null;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var1 = var4.bind(var5)(var1, var3);
                        var2['current'] = var1;
 133:
                        var1 = undefined;
                        return var1;
                    }
                };
                var2 = var6.bind(var7)(var2, var5);
                var6 = _closure1_slot4;
                var5 = var6.useLayoutEffect;
                var4 = function() {
                    var1 = function() {
                        var1 = global;
                        var3 = var1.clearTimeout;
                        var1 = _closure3_slot1;
                        var2 = var1.current;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    return var1;
                };
                var1 = new Array(0);
                var1 = var5.bind(var6)(var4, var1);
                var1 = {};
                var1['showFloatingCTA'] = var3;
                var1['setShowFloatingCTA'] = var2;
                return var1;
            };
            var3 = var3.bind(var4)(var10);
            var10 = var3.showFloatingCTA;
            _closure2_slot32 = var10;
            var3 = var3.setShowFloatingCTA;
            _closure2_slot33 = var3;
            var10 = _closure1_slot4;
            var3 = var10.useRef;
            var3 = var3.bind(var10)(var4);
            _closure2_slot34 = var3;
            var10 = _closure1_slot0;
            var3 = 21;
            var3 = var11[var3];
            var10 = var10.bind(var4)(var3);
            var3 = var10.useAnimatedRef;
            var3 = var3.bind(var10)();
            _closure2_slot35 = var3;
            var10 = _closure1_slot4;
            var3 = var10.useRef;
            var3 = var3.bind(var10)(var2);
            _closure2_slot36 = var3;
            var12 = _closure1_slot4;
            var11 = var12.useEffect;
            var10 = function() {
                var2 = _closure2_slot36;
                var1 = 0;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var10 = var11.bind(var12)(var10);
            var10 = var3.current;
            if(!(var9 != var10)) { _fun0017_ip = 1396; continue _fun0017 }
 1282:
            var10 = var3.current;
            var10 = var10 + 1;
            var3['current'] = var10;
            var11 = var3.current;
            var10 = 10;
            if(!(var11 > var10)) { _fun0017_ip = 1396; continue _fun0017 }
 1308:
            var11 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 59;
            var10 = var12[var10];
            var12 = var11.bind(var4)(var10);
            var11 = var12.addBreadcrumb;
            var10 = {};
            var13 = 'voice-panel';
            var10['category'] = var13;
            var16 = var3.current;
            var13 = global;
            var13 = var13.HermesInternal;
            var15 = var13.concat;
            var14 = 'VoicePanelController is rendering too many times (>';
            var13 = ')';
            var13 = var15.bind(var14)(var16, var13);
            var10['message'] = var13;
            var10 = var11.bind(var12)(var10);
            var3['current'] = var9;
 1396:
            var9 = _closure1_slot4;
            var3 = var9.useState;
            var1 = function() {
                var1 = {};
                var3 = _closure2_slot0;
                var1['channelId'] = var3;
                var3 = _closure2_slot4;
                var1['connected'] = var3;
                var3 = _closure2_slot5;
                var1['contentDimensions'] = var3;
                var3 = _closure2_slot22;
                var1['controlsSpecs'] = var3;
                var3 = _closure2_slot28;
                var1['dismissPanel'] = var3;
                var3 = _closure2_slot34;
                var1['dismissToPIPGestureRef'] = var3;
                var3 = _closure2_slot6;
                var1['dragScrolling'] = var3;
                var3 = _closure2_slot7;
                var1['focused'] = var3;
                var3 = _closure2_slot21;
                var1['generateStateLocker'] = var3;
                var3 = _closure2_slot1;
                var1['guildId'] = var3;
                var3 = _closure2_slot24;
                var1['hideControls'] = var3;
                var3 = _closure2_slot8;
                var1['isCall'] = var3;
                var3 = _closure2_slot16;
                var1['isFocusedVideoZoomed'] = var3;
                var3 = _closure2_slot9;
                var1['layoutManager'] = var3;
                var3 = _closure2_slot10;
                var1['mode'] = var3;
                var3 = _closure2_slot20;
                var1['morphablePanelMode'] = var3;
                var3 = _closure2_slot3;
                var1['mountedCards'] = var3;
                var3 = _closure2_slot31;
                var1['pipAvoidanceSpecs'] = var3;
                var3 = _closure2_slot35;
                var1['pipContainerRef'] = var3;
                var3 = _closure2_slot11;
                var1['preJoinContentSize'] = var3;
                var3 = _closure2_slot12;
                var1['safeArea'] = var3;
                var3 = _closure2_slot13;
                var1['scrollPosition'] = var3;
                var3 = _closure2_slot25;
                var1['setControlsMode'] = var3;
                var3 = _closure2_slot29;
                var1['setFocused'] = var3;
                var3 = _closure2_slot17;
                var1['setIsFocusedVideoZoomed'] = var3;
                var3 = _closure2_slot27;
                var1['setMode'] = var3;
                var3 = _closure2_slot33;
                var1['setShowFloatingCTA'] = var3;
                var3 = _closure2_slot23;
                var1['showControls'] = var3;
                var3 = _closure2_slot32;
                var1['showFloatingCTA'] = var3;
                var3 = _closure2_slot2;
                var1['streamOutputSinkStack'] = var3;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 60;
                var4 = var4[var3];
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                var3 = var3.usePIPState;
                var1['usePIPState'] = var3;
                var3 = _closure2_slot18;
                var1['useReducedMotion'] = var3;
                var3 = _closure2_slot14;
                var1['windowDimensions'] = var3;
                var3 = _closure2_slot15;
                var1['wrapperDimensions'] = var3;
                var2 = _closure2_slot19;
                var1['wrapperOffset'] = var2;
                return var1;
            };
            var3 = var3.bind(var9)(var1);
            var1 = _closure1_slot3;
            var1 = var1.bind(var4)(var3, var6);
            var6 = var1[var2];
            var3 = _closure1_slot28;
            var2 = _closure1_slot1;
            var9 = _closure1_slot2;
            var1 = 61;
            var1 = var9[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Provider;
            var1 = {};
            var1['value'] = var6;
            var6 = _closure1_slot0;
            var5 = 60;
            var5 = var9[var5];
            var5 = var6.bind(var4)(var5);
            var5 = var5.VoicePanelPIPStateContext;
            var6 = var5.Provider;
            var5 = {};
            var5['value'] = var8;
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();
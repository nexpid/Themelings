// app/modules/reanimated/native/useStateFromSharedValue.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
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
            var9 = _closure1_slot9;
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
            var7 = _closure1_slot9;
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
    var _closure1_slot8 = var1;
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
    var _closure1_slot9 = var1;
    var1 = function useListenerSubscription(arg1, arg2) {
        var6 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useLayoutEffect;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var4 = _closure1_slot5;
                var3 = var4.get;
                var2 = _closure2_slot0;
                var2 = var3.bind(var4)(var2);
                var3 = null;
                if(!(var3 == var2)) { _fun0004_ip = 48; continue _fun0004 }
 32:
                var6 = _closure2_slot0;
                var4 = function createListenerState(arg1) {
                    var1 = global;
                    var1 = var1.Set;
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {constructor: {value: var1}});
                    var5 = var3;
                    var1 = new var5[var1](var4);
                    var3 = var1 instanceof Object ? var1 : var3;
                    var _closure4_slot0 = var3;
                    var1 = {};
                    var4 = arg1;
                    var1['sharedValue'] = var4;
                    var1['listeners'] = var3;
                    var2 = function valueListener(arg1) {
                        var1 = arg1;
                        var _closure5_slot0 = var1;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var1 = 2;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.batchUpdates;
                        var2 = function() {
                            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                                var3 = _closure1_slot8;
                                var2 = _closure4_slot0;
                                var1 = undefined;
                                var5 = var3.bind(var1)(var2);
                                var3 = var5.bind(var1)();
                                var2 = var3.done;
                                if(var2) { _fun0005_ip = 65; continue _fun0005 }
 36:
                                var6 = var3.value;
                                var2 = _closure5_slot0;
                                var2 = var6.bind(var1)(var2);
                                var6 = var5.bind(var1)();
                                var2 = var6.done;
                                var3 = var6;
                                if(!var2) { _fun0005_ip = 36; continue _fun0005 }
 65:
                                return var1;
                            }
                        };
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var1['valueListener'] = var2;
                    var2 = _closure1_slot4;
                    var2 = var2 + 1;
                    _closure1_slot4 = var2;
                    var1['listenerId'] = var2;
                    return var1;
                };
                var3 = undefined;
                var2 = var4.bind(var3)(var6);
 48:
                var _closure3_slot0 = var2;
                var6 = var2.listeners;
                var4 = var6.add;
                var3 = _closure2_slot1;
                var3 = var4.bind(var6)(var3);
                var3 = var2.listeners;
                var4 = var3.size;
                var3 = 1;
                if(!(var3 === var4)) { _fun0004_ip = 221; continue _fun0004 }
 93:
                var4 = _closure1_slot5;
                var3 = var4.set;
                var6 = _closure2_slot0;
                var3 = var3.bind(var4)(var6, var2);
                var11 = _closure1_slot0;
                var12 = _closure1_slot1;
                var10 = 3;
                var3 = var12[var10];
                var5 = undefined;
                var7 = var11.bind(var5)(var3);
                var4 = var7.runOnUI;
                var3 = function s(arg1, arg2, arg3) {
                    var4 = arg3;
                    var2 = arg2;
                    var _closure4_slot0 = var2;
                    var3 = var4.addListener;
                    var2 = arg1;
                    var1 = function(arg1) {
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var1 = 3;
                        var1 = var3[var1];
                        var3 = undefined;
                        var4 = var2.bind(var3)(var1);
                        var2 = var4.runOnJS;
                        var1 = _closure4_slot0;
                        var2 = var2.bind(var4)(var1);
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var1 = undefined;
                    return var1;
                };
                var9 = {};
                var10 = var12[var10];
                var10 = var11.bind(var5)(var10);
                var10 = var10.runOnJS;
                var9['runOnJS'] = var10;
                var3['__closure'] = var9;
                var9 = 568027628003.0;
                var3['__workletHash'] = var9;
                var8 = _closure1_slot6;
                var3['__initData'] = var8;
                var4 = var4.bind(var7)(var3);
                var3 = var2.listenerId;
                var2 = var2.valueListener;
                var2 = var4.bind(var5)(var3, var2, var6);
 221:
                var1 = function() {
                    _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                        var1 = _closure3_slot0;
                        var5 = var1.listeners;
                        var4 = var5.delete;
                        var1 = _closure2_slot1;
                        var1 = var4.bind(var5)(var1);
                        var1 = _closure3_slot0;
                        var1 = var1.listeners;
                        var4 = var1.size;
                        var1 = 0;
                        if(!(var1 === var4)) { _fun0006_ip = 162; continue _fun0006 }
 51:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var4 = 3;
                        var4 = var5[var4];
                        var5 = undefined;
                        var7 = var6.bind(var5)(var4);
                        var6 = var7.runOnUI;
                        var4 = function r(arg1, arg2) {
                            var3 = arg2;
                            var2 = var3.removeListener;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
                            var1 = undefined;
                            return var1;
                        };
                        var8 = {};
                        var4['__closure'] = var8;
                        var8 = 15997703035823.0;
                        var4['__workletHash'] = var8;
                        var8 = _closure1_slot7;
                        var4['__initData'] = var8;
                        var4 = var6.bind(var7)(var4);
                        var2 = _closure3_slot0;
                        var2 = var2.listenerId;
                        var3 = _closure2_slot0;
                        var2 = var4.bind(var5)(var2, var3);
                        var2 = _closure1_slot5;
                        var1 = var2.delete;
                        var1 = var1.bind(var2)(var3);
 162:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var1 = undefined;
        return var1;
    };
    var _closure1_slot10 = var1;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var7 = {};
    var1 = true;
    var7['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var7);
    var1 = 0;
    var8 = var6[var1];
    var7 = metroImportDefault;
    var1 = undefined;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot2 = var7;
    var7 = 1;
    var8 = var6[var7];
    var7 = metroImportAll;
    var7 = var7.bind(var1)(var8);
    var _closure1_slot3 = var7;
    var7 = 9999999;
    var _closure1_slot4 = var7;
    var4 = var4.Map;
    var7 = var4.prototype;
    var7 = Object.create(var7, {constructor: {value: var4}});
    var13 = var7;
    var4 = new var13[var4](var12);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot5 = var4;
    var4 = {};
    var7 = 'function useStateFromSharedValueTsx1(id,listener,sharedValue){const{runOnJS}=this.__closure;sharedValue.addListener(id,function(value){return runOnJS(listener)(value);});}';
    var4['code'] = var7;
    var _closure1_slot6 = var4;
    var4 = {};
    var7 = 'function useStateFromSharedValueTsx2(id,sharedValue){sharedValue.removeListener(id);}';
    var4['code'] = var7;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/reanimated/native/useStateFromSharedValue.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useStateFromSharedValue(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot3;
        var3 = var4.useState;
        var1 = function() {
            var2 = _closure2_slot0;
            var1 = var2.get;
            var1 = var1.bind(var2)();
            return var1;
        };
        var6 = var3.bind(var4)(var1);
        var3 = _closure1_slot2;
        var4 = undefined;
        var1 = 2;
        var6 = var3.bind(var4)(var6, var1);
        var1 = 0;
        var1 = var6[var1];
        var3 = 1;
        var3 = var6[var3];
        var2 = _closure1_slot10;
        var2 = var2.bind(var4)(var5, var3);
        return var1;
    };
    var3['default'] = var4;
    var2 = function useDerivedStateFromSharedValue(arg1, arg2) {
        var5 = arg1;
        var8 = arg2;
        var _closure2_slot0 = var5;
        var _closure2_slot1 = var8;
        var6 = _closure1_slot3;
        var4 = var6.useState;
        var1 = function() {
            var3 = _closure2_slot1;
            var2 = _closure2_slot0;
            var1 = var2.get;
            var2 = var1.bind(var2)();
            var1 = undefined;
            var1 = var3.bind(var1)(var2, var1);
            return var1;
        };
        var7 = var4.bind(var6)(var1);
        var6 = _closure1_slot2;
        var4 = undefined;
        var1 = 2;
        var7 = var6.bind(var4)(var7, var1);
        var1 = 0;
        var1 = var7[var1];
        var6 = 1;
        var6 = var7[var6];
        var _closure2_slot2 = var6;
        var7 = _closure1_slot3;
        var6 = var7.useRef;
        var6 = var6.bind(var7)(var8);
        var _closure2_slot3 = var6;
        var8 = _closure1_slot3;
        var7 = var8.useLayoutEffect;
        var6 = function() {
            var2 = _closure2_slot3;
            var1 = _closure2_slot1;
            var2['current'] = var1;
            var1 = undefined;
            return var1;
        };
        var6 = var7.bind(var8)(var6);
        var8 = _closure1_slot3;
        var7 = var8.useCallback;
        var6 = function(arg1) {
            var2 = arg1;
            var _closure3_slot0 = var2;
            var3 = _closure2_slot2;
            var2 = undefined;
            var1 = function(arg1) {
                var4 = _closure2_slot3;
                var3 = var4.current;
                var2 = _closure3_slot0;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var3.bind(var2)(var1);
            return var1;
        };
        var3 = new Array(0);
        var3 = var7.bind(var8)(var6, var3);
        var2 = _closure1_slot10;
        var2 = var2.bind(var4)(var5, var3);
        return var1;
    };
    var3['useDerivedStateFromSharedValue'] = var2;
    return var1;
})();
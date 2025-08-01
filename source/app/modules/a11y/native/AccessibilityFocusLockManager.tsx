// app/modules/a11y/native/AccessibilityFocusLockManager.tsx
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
            var9 = _closure1_slot11;
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
            var7 = _closure1_slot11;
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
    var _closure1_slot10 = var1;
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
    var _closure1_slot11 = var1;
    var1 = function _isNativeReflectConstruct() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
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
            _fun0004_ip = 74; continue _fun0004;
 72: // catch_target0
            CatchBlockStart(arg_register=1);
 74:
            var2 = function _isNativeReflectConstruct() {
                var1 = _closure2_slot0;
                var1 = !var1;
                var1 = !var1;
                return var1;
            };
            _closure1_slot12 = var2;
            var1 = undefined;
            var1 = var2.bind(var1)();
            return var1;
        }
    };
    var _closure1_slot12 = var1;
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
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
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
    var4 = var5.bind(var1)(var4);
    var4 = var4.NativeModules;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var7.bind(var1)(var4);
    var4 = var9.prototype;
    var8 = Object.create(var4, {constructor: {value: var9}});
    var12 = 'AccessibilityFocusLockManager';
    var13 = var8;
    var4 = new var13[var9](var12, var11);
    var4 = var4 instanceof Object ? var4 : var8;
    var _closure1_slot9 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var2 = function(arg1) {
        var4 = function AccessibilityFocusLockManager(arg1) {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var4 = this;
                var12 = 0;
                var1 = copyRestArgs(var12);
                var7 = _closure1_slot3;
                var2 = _closure2_slot0;
                var3 = undefined;
                var7 = var7.bind(var3)(var4, var2);
                var9 = new Array(0);
                var12 = var9;
                var11 = var1;
                var10 = 0;
                var1 = arraySpread(var12, var11, var10);
                var1 = _closure1_slot6;
                var8 = var1.bind(var3)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot12;
                var1 = var1.bind(var3)();
                if(var1) { _fun0005_ip = 84; continue _fun0005 }
 71:
                var1 = var8.apply;
                var1 = var1.bind(var8)(var4, var9);
                _fun0005_ip = 118; continue _fun0005;
 84:
                var6 = global;
                var7 = var6.Reflect;
                var6 = var7.construct;
                var5 = _closure1_slot6;
                var5 = var5.bind(var3)(var4);
                var5 = var5.constructor;
                var1 = var6.bind(var7)(var8, var9, var5);
 118:
                var1 = var2.bind(var3)(var4, var1);
                var2 = false;
                var1['_screenReaderEnabled'] = var2;
                var3 = global;
                var3 = var3.Map;
                var4 = var3.prototype;
                var4 = Object.create(var4, {constructor: {value: var3}});
                var13 = var4;
                var3 = new var13[var3](var12);
                var3 = var3 instanceof Object ? var3 : var4;
                var1['_focusLockedNativeIDGroups'] = var3;
                var1['_focusLockEnabled'] = var2;
                var2 = -1;
                var1['_focusLockEnabledDelayTimeoutId'] = var2;
                var2 = 250;
                var1['_focusLockEnabledDelayTimeout'] = var2;
                return var1;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg1;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = '_updateAccessibilityFocusLock';
        var5['key'] = var1;
        var1 = function value() {
            _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                var4 = arguments[0];
                var3 = this;
                var1 = undefined;
                if(!(var4 === var1)) { _fun0006_ip = 16; continue _fun0006 }
 14:
                var4 = false;
 16:
                var _closure3_slot0 = var4;
                var _closure3_slot1 = var1;
                var4 = global;
                var6 = var4.clearTimeout;
                var5 = var3._focusLockEnabledDelayTimeoutId;
                var5 = var6.bind(var1)(var5);
                _closure3_slot1 = var1;
                var7 = _closure1_slot10;
                var8 = var3._focusLockedNativeIDGroups;
                var6 = var8.values;
                var6 = var6.bind(var8)();
                var9 = var7.bind(var1)(var6);
                var7 = var9.bind(var1)();
                var6 = var7.done;
                var8 = var7;
                var7 = undefined;
                if(var6) { _fun0006_ip = 118; continue _fun0006 }
 91:
                var10 = var8.value;
                _closure3_slot1 = var10;
                var11 = var9.bind(var1)();
                var6 = var11.done;
                var8 = var11;
                var7 = var10;
                if(!var6) { _fun0006_ip = 91; continue _fun0006 }
 118:
                var6 = null;
                if(!(var6 != var7)) { _fun0006_ip = 133; continue _fun0006 }
 124:
                var6 = var3._screenReaderEnabled;
                if(var6) { _fun0006_ip = 239; continue _fun0006 }
 133:
                var6 = var3._focusLockEnabled;
                if(!var6) { _fun0006_ip = 276; continue _fun0006 }
 145:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 7;
                var6 = var8[var6];
                var7 = var7.bind(var1)(var6);
                var6 = var7.isAndroid;
                var6 = var6.bind(var7)();
                if(var6) { _fun0006_ip = 199; continue _fun0006 }
 177:
                var6 = _closure1_slot8;
                var7 = var6.DCDAccessibilityManager;
                var6 = var7.disableFocusLock;
                var6 = var6.bind(var7)();
                _fun0006_ip = 229; continue _fun0006;
 199:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 8;
                var5 = var7[var5];
                var6 = var6.bind(var1)(var5);
                var5 = var6.disableFocusLock;
                var5 = var5.bind(var6)();
 229:
                var5 = false;
                var3['_focusLockEnabled'] = var5;
                _fun0006_ip = 276; continue _fun0006;
 239:
                var5 = var4.setTimeout;
                var4 = var3._focusLockEnabledDelayTimeout;
                var2 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 7;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.isAndroid;
                        var3 = var3.bind(var4)();
                        if(var3) { _fun0007_ip = 72; continue _fun0007 }
 37:
                        var3 = _closure1_slot8;
                        var6 = var3.DCDAccessibilityManager;
                        var5 = var6.enableFocusLock;
                        var4 = _closure3_slot1;
                        var3 = _closure3_slot0;
                        var3 = var5.bind(var6)(var4, var3);
                        _fun0007_ip = 115; continue _fun0007;
 72:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 8;
                        var2 = var4[var2];
                        var5 = var3.bind(var1)(var2);
                        var4 = var5.enableFocusLock;
                        var3 = _closure3_slot1;
                        var2 = _closure3_slot0;
                        var2 = var4.bind(var5)(var3, var2);
 115:
                        return var1;
                    }
                };
                var2 = var5.bind(var1)(var2, var4);
                var3['_focusLockEnabledDelayTimeoutId'] = var2;
                var2 = true;
                var3['_focusLockEnabled'] = var2;
 276:
                return var1;
            }
        };
        var5['value'] = var1;
        var1 = new Array(5);
        var1[0] = var5;
        var5 = {};
        var7 = '_initialize';
        var5['key'] = var7;
        var7 = function value() {
            var3 = this;
            var _closure3_slot0 = var3;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 9;
            var4 = var4[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var4);
            var4 = var5.addScreenReaderEnabledListener;
            var2 = function(arg1) {
                var2 = _closure3_slot0;
                var1 = arg1;
                var2['_screenReaderEnabled'] = var1;
                var1 = var2._updateAccessibilityFocusLock;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            };
            var2 = var4.bind(var5)(var2);
            var3['_screenReaderEnabledListener'] = var2;
            return var1;
        };
        var5['value'] = var7;
        var1[1] = var5;
        var5 = {};
        var7 = '_terminate';
        var5['key'] = var7;
        var7 = function value() {
            _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                var2 = this;
                var3 = var2._screenReaderEnabledListener;
                var1 = null;
                if(!(var1 != var3)) { _fun0008_ip = 25; continue _fun0008 }
 15:
                var1 = var3.call;
                var1 = var1.bind(var3)(var2);
 25:
                var3 = var2._focusLockedNativeIDGroups;
                var1 = var3.clear;
                var1 = var1.bind(var3)();
                var1 = var2._updateAccessibilityFocusLock;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var7;
        var1[2] = var5;
        var5 = {};
        var7 = 'enableAccessibilityFocusLock';
        var5['key'] = var7;
        var7 = function value(arg1) {
            _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                var6 = arg1;
                var4 = this;
                var1 = var6.length;
                var2 = 0;
                if(!(var2 === var1)) { _fun0009_ip = 40; continue _fun0009 }
 17:
                var5 = _closure1_slot9;
                var3 = var5.error;
                var1 = 'No target view nativeIDs to add.';
                var1 = var3.bind(var5)(var1);
 40:
                var5 = _closure1_slot10;
                var3 = var4._focusLockedNativeIDGroups;
                var1 = var3.values;
                var3 = var1.bind(var3)();
                var1 = undefined;
                var11 = var5.bind(var1)(var3);
                var5 = var11.bind(var1)();
                var3 = var5.done;
                var10 = global;
                var9 = 'Duplicate target view nativeID ';
                var8 = ' already accessibility focus locked.';
                var7 = var5;
                var5 = undefined;
                if(var3) { _fun0009_ip = 208; continue _fun0009 }
 100:
                var13 = _closure1_slot10;
                var3 = var7.value;
                var14 = var13.bind(var1)(var3);
                var13 = var14.bind(var1)();
                var3 = var13.done;
                if(var3) { _fun0009_ip = 193; continue _fun0009 }
 126:
                var15 = var13.value;
                var3 = var6.includes;
                var3 = var3.bind(var6)(var15);
                if(!var3) { _fun0009_ip = 175; continue _fun0009 }
 144:
                var17 = _closure1_slot9;
                var16 = var17.error;
                var3 = var10.HermesInternal;
                var3 = var3.concat;
                var3 = var3.bind(var9)(var15, var8);
                var3 = var16.bind(var17)(var3);
 175:
                var16 = var14.bind(var1)();
                var3 = var16.done;
                var13 = var16;
                var5 = var15;
                if(!var3) { _fun0009_ip = 126; continue _fun0009 }
 193:
                var13 = var11.bind(var1)();
                var3 = var13.done;
                var7 = var13;
                if(!var3) { _fun0009_ip = 100; continue _fun0009 }
 208:
                var5 = var4._focusLockedNativeIDGroups;
                var3 = var5.set;
                var2 = var6[var2];
                var2 = var3.bind(var5)(var2, var6);
                var3 = var4._updateAccessibilityFocusLock;
                var2 = true;
                var2 = var3.bind(var4)(var2);
                return var1;
            }
        };
        var5['value'] = var7;
        var1[3] = var5;
        var5 = {};
        var7 = 'disableAccessibilityFocusLock';
        var5['key'] = var7;
        var6 = function value(arg1) {
            _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                var5 = arg1;
                var2 = this;
                var3 = var5.length;
                var1 = 0;
                if(!(var1 === var3)) { _fun0010_ip = 40; continue _fun0010 }
 17:
                var6 = _closure1_slot9;
                var4 = var6.error;
                var3 = 'No target view nativeIDs to remove.';
                var3 = var4.bind(var6)(var3);
 40:
                var6 = var2._focusLockedNativeIDGroups;
                var4 = var6.has;
                var3 = var5[var1];
                var3 = var4.bind(var6)(var3);
                if(var3) { _fun0010_ip = 115; continue _fun0010 }
 63:
                var6 = _closure1_slot9;
                var4 = var6.error;
                var9 = var5[var1];
                var3 = global;
                var3 = var3.HermesInternal;
                var8 = var3.concat;
                var7 = 'No target view nativeID ';
                var3 = ' accessibility focus locked.';
                var3 = var8.bind(var7)(var9, var3);
                var3 = var4.bind(var6)(var3);
 115:
                var4 = var2._focusLockedNativeIDGroups;
                var3 = var4.delete;
                var1 = var5[var1];
                var1 = var3.bind(var4)(var1);
                var1 = var2._updateAccessibilityFocusLock;
                var1 = var1.bind(var2)();
                var1 = undefined;
                return var1;
            }
        };
        var5['value'] = var6;
        var1[4] = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var1;
    };
    var2 = var2.bind(var1)(var4);
    var4 = var2.prototype;
    var4 = Object.create(var4, {constructor: {value: var2}});
    var13 = var4;
    var2 = new var13[var2](var12);
    var2 = var2 instanceof Object ? var2 : var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/a11y/native/AccessibilityFocusLockManager.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();